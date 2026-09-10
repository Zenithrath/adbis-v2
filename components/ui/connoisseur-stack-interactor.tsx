"use client";

import { cn } from "@/lib/utils";
import { useRef, useState, useEffect, useCallback, useLayoutEffect } from "react";
import gsap from "gsap";

interface MenuItem {
  num: string;
  name: string;
  clipId: string;
  image: string;
  desc: string;
}

const defaultItems: MenuItem[] = [
  {
    num: "01",
    name: "Invest Adbis",
    clipId: "clip-original",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    desc: "Program kerja unggulan berbasis pengembangan investasi dan literasi finansial.",
  },
  {
    num: "02",
    name: "Bina Masyarakat",
    clipId: "clip-hexagons",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop",
    desc: "Wujud pengabdian masyarakat nyata untuk memberikan dampak sosial dan pemberdayaan UMKM.",
  },
  {
    num: "03",
    name: "Market Day",
    clipId: "clip-pixels",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    desc: "Ajang pameran dan bazaar kewirausahaan mahasiswa Administrasi Bisnis.",
  },
  {
    num: "04",
    name: "Sencrea",
    clipId: "clip-squares",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    desc: "Sentra Kreativitas Mahasiswa sebagai wadah eksplorasi bakat seni dan budaya.",
  },
];

export const Component = ({
  items = defaultItems,
  className,
}: {
  items?: MenuItem[];
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const masterTl = useRef<gsap.core.Timeline | null>(null);
  const activeRef = useRef(0);

  const createLoop = useCallback(
    (index: number) => {
      const item = items[index];
      if (!item) return;
      const selector = `#${item.clipId} .path`;

      if (masterTl.current) masterTl.current.kill();

      if (imageRef.current) imageRef.current.setAttribute("href", item.image);
      if (mainGroupRef.current)
        mainGroupRef.current.setAttribute("clip-path", `url(#${item.clipId})`);

      // Reduced motion: tampilkan statis, tanpa loop animasi
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        gsap.set(selector, { scale: 1, transformOrigin: "50% 50%" });
        masterTl.current = null;
        return;
      }

      // Baseline terlihat dulu — kalau ticker tersendat, gambar tetap tampil.
      gsap.set(selector, { scale: 1, transformOrigin: "50% 50%" });

      const tl = gsap.timeline();

      // 1. IN (Expo Out) — mekar terlihat jelas lalu ditahan
      tl.fromTo(
        selector,
        { scale: 0 },
        {
          scale: 1,
          duration: 0.7,
          stagger: { amount: 0.35, from: "random" },
          ease: "expo.out",
        }
      )
        // 2. IDLE (Sine Breath) — ditahan terlihat selamanya, tanpa fase hilang
        .to(selector, {
          scale: 1.06,
          duration: 1.8,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: { amount: 0.3, from: "center" },
        });

      masterTl.current = tl;
    },
    [items]
  );

  // Selalu pakai createLoop terbaru di dalam scroll handler
  const loopRef = useRef(createLoop);
  loopRef.current = createLoop;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      loopRef.current(0);
    }, wrapperRef);
    return () => {
      ctx.revert();
      if (masterTl.current) masterTl.current.kill();
    };
  }, []);

  /*
   * Pin pakai page-scroll:
   * - Wrapper tinggi (220–280vh), inner sticky 1 layar di bawah navbar.
   * - Scroll window menggeser track list + ganti activeIndex.
   * - Tiap ganti item → createLoop: ganti image + restart tile animation GSAP.
   * - Lepas otomatis: progress 0 → balik ke About, progress 1 → lanjut Footer.
   */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!wrapper || !viewport || !track) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const rect = wrapper.getBoundingClientRect();
      const total = rect.height - vh;
      if (total <= 0) return;

      const p = Math.min(1, Math.max(0, -rect.top / total));
      const n = items.length;

      // Tiap item TEPAT setinggi viewport (kelas CSS sama), jadi tanpa ukur offset:
      // geser = -(index pecahan) * tinggi viewport. Anti-gagal, selalu pas tengah.
      const vH = viewport.clientHeight;
      if (vH <= 0) return;
      const floatIdx = p * (n - 1);
      const y = -floatIdx * vH;
      track.style.transform = `translate3d(0, ${y}px, 0)`;

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${p})`;
      }

      const idx = Math.round(floatIdx);
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActiveIndex(idx);
        loopRef.current(idx);
      }
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(schedule).catch(() => {});
    }
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items.length, items]);

  // Klik item / dot → lompat ke posisi scroll item itu (tetap satu sumber kebenaran)
  const seekTo = useCallback(
    (index: number) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const vh = window.innerHeight;
      const total = wrapper.offsetHeight - vh;
      if (total <= 0) return;
      const wrapperPageTop =
        wrapper.getBoundingClientRect().top + window.scrollY;
      const y = wrapperPageTop + (total * index) / Math.max(1, items.length - 1);
      window.scrollTo({ top: y, behavior: "smooth" });
    },
    [items.length]
  );

  return (
    <div
      ref={wrapperRef}
      className={cn("relative h-[220vh] w-full sm:h-[240vh] md:h-[280vh]", className)}
    >
      {/* Pin 1 layar penuh di bawah navbar (60px). Keluar otomatis saat list mentok. */}
      <div className="sticky top-[60px] flex h-[calc(100vh-60px)] h-[calc(100svh-60px)] flex-col items-center justify-center gap-4 overflow-hidden px-6 py-4 sm:gap-5 lg:flex-row lg:gap-10 lg:px-24 lg:py-0">
        {/* Visual di bawah list pada HP/tablet, di kanan pada desktop */}
        <div className="relative order-2 flex w-full shrink-0 items-center justify-center lg:order-2 lg:w-1/2">
          <div className="absolute h-[80%] w-[80%] rounded-full bg-[#FF7AAC]/10 blur-[100px] transition-opacity duration-1000" />

          <svg
            viewBox="0 0 500 500"
            className="z-10 aspect-square h-auto w-[min(54vw,220px)] sm:w-[min(36vw,280px)] lg:w-full lg:max-w-[480px]"
            role="img"
            aria-label={items[activeIndex]?.name ?? "Program kerja"}
          >
            <defs>
              <clipPath id="clip-original">
                <rect className="path" x="20" y="20" width="460" height="100" rx="12" />
                <rect className="path" x="20" y="140" width="220" height="100" rx="12" />
                <rect className="path" x="260" y="140" width="220" height="100" rx="12" />
                <rect className="path" x="20" y="260" width="150" height="100" rx="12" />
                <rect className="path" x="190" y="260" width="150" height="100" rx="12" />
                <rect className="path" x="360" y="260" width="120" height="100" rx="12" />
                <rect className="path" x="20" y="380" width="460" height="100" rx="12" />
              </clipPath>

              <clipPath id="clip-hexagons">
                <rect className="path" x="20" y="20" width="200" height="230" rx="12" />
                <rect className="path" x="20" y="270" width="200" height="210" rx="12" />
                <rect className="path" x="240" y="20" width="240" height="140" rx="12" />
                <rect className="path" x="240" y="180" width="110" height="160" rx="12" />
                <rect className="path" x="370" y="180" width="110" height="160" rx="12" />
                <rect className="path" x="240" y="360" width="240" height="120" rx="12" />
              </clipPath>

              <clipPath id="clip-pixels">
                {Array.from({ length: 9 }).map((_, i) => (
                  <rect
                    key={i}
                    className="path"
                    x={(i % 3) * 160 + 20}
                    y={Math.floor(i / 3) * 160 + 20}
                    width="140"
                    height="140"
                    rx="4"
                  />
                ))}
              </clipPath>

              <clipPath id="clip-squares">
                <rect className="path" x="20" y="20" width="220" height="220" rx="12" />
                <rect className="path" x="260" y="20" width="220" height="100" rx="12" />
                <rect className="path" x="260" y="140" width="220" height="100" rx="12" />
                <rect className="path" x="20" y="260" width="150" height="220" rx="12" />
                <rect className="path" x="190" y="260" width="290" height="100" rx="12" />
                <rect className="path" x="190" y="380" width="290" height="100" rx="12" />
              </clipPath>
            </defs>

            <g ref={mainGroupRef} clipPath={`url(#${items[0].clipId})`}>
              <image
                ref={imageRef}
                href={items[0].image}
                width="500"
                height="500"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
          </svg>
        </div>

        {/* LIST: viewport tetap, track digeser oleh page scroll */}
        <div className="z-20 order-1 w-full shrink-0 lg:order-1 lg:w-1/2">
          <div
            ref={viewportRef}
            className="relative h-[28vh] overflow-hidden sm:h-[30vh] lg:h-[52vh] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
          >
            <ul
              ref={trackRef}
              className="flex flex-col gap-0 will-change-transform"
            >
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <li
                    key={item.num}
                    className="flex h-[28vh] shrink-0 items-center overflow-hidden sm:h-[30vh] lg:h-[52vh]"
                  >
                    <button
                      type="button"
                      onClick={() => seekTo(index)}
                      aria-current={isActive ? "true" : undefined}
                      className="group block w-fit cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7AAC] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    >
                      <span className="flex items-start gap-4 lg:gap-6">
                        <span
                          className={cn(
                            "mt-1 text-lg font-bold transition-all duration-500 sm:text-2xl lg:mt-2 lg:text-3xl",
                            isActive
                              ? "scale-110 text-[#FF7AAC]"
                              : "text-white/40 group-hover:text-white/70"
                          )}
                        >
                          {item.num}
                        </span>

                        <span className="block">
                          <span
                            className={cn(
                              "block text-3xl font-black uppercase leading-[0.9] tracking-tighter transition-all duration-700 sm:text-5xl lg:text-6xl",
                              isActive
                                ? "translate-x-2 text-white opacity-100 lg:translate-x-4"
                                : "text-white/30 opacity-60 group-hover:text-white/50"
                            )}
                          >
                            {item.name.split(" ")[0]}
                            <br />
                            {item.name.split(" ").slice(1).join(" ")}
                          </span>
                          <span
                            className={cn(
                              "mt-2 block max-w-xs text-[11px] leading-relaxed text-white/50 transition-all duration-500 lg:mt-3 lg:text-xs",
                              isActive
                                ? "translate-x-2 opacity-100 lg:translate-x-4"
                                : "opacity-0"
                            )}
                          >
                            {item.desc}
                          </span>
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Progress: penanda posisi + cara keluar (klik dot / scroll terus) */}
          <div className="mx-auto mt-2 flex w-full max-w-xl items-center gap-3 sm:mt-3 lg:mx-0 lg:mt-5">
            <span className="font-mono text-[11px] font-bold tabular-nums text-[#FF7AAC]">
              0{activeIndex + 1}
            </span>
            <div
              className="h-px flex-1 overflow-hidden bg-white/15"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={items.length}
              aria-valuenow={activeIndex + 1}
              aria-label="Progress program kerja"
            >
              <div
                ref={progressBarRef}
                className="h-full w-full origin-left bg-[#FF7AAC]"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
            <span className="font-mono text-[11px] tabular-nums text-white/40">
              0{items.length}
            </span>
            <div className="ml-1 hidden items-center gap-2 sm:flex">
              {items.map((item, index) => (
                <button
                  key={item.num}
                  type="button"
                  onClick={() => seekTo(index)}
                  aria-label={`Ke ${item.name}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "w-6 bg-[#FF7AAC]"
                      : "w-1.5 bg-white/25 hover:bg-white/50"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
