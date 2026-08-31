"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from "lenis";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Star({ size = 16, fill = "#2B2140", cls = "" }: { size?: number; fill?: string; cls?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={cls} style={{ fill }}>
      <path d="M12 0L13.9 8.1L22 12L13.9 15.9L12 24L10.1 15.9L2 12L10.1 8.1L12 0Z" />
    </svg>
  );
}

export default function Page() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const bookCoverRef = useRef<HTMLDivElement>(null);
  const bookPageRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  // Lenis site-wide
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    // @ts-ignore
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    return () => { lenis.destroy(); gsap.ticker.remove((time: number) => lenis.raf(time * 1000)); };
  }, []);

  // Home staged hero + cards reveal (light, no pin)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-logo", { y: 14, opacity: 0, duration: 0.6, ease: "power2.out" });
      gsap.from(".hero-name", { y: 20, opacity: 0, duration: 0.7, delay: 0.15, ease: "power3.out" });
      gsap.from(".hero-tagline span", { y: 18, opacity: 0, duration: 0.5, stagger: 0.08, delay: 0.45, ease: "power2.out" });

      gsap.utils.toArray<HTMLElement>(".reveal-card").forEach((card, i) => {
        gsap.from(card, {
          y: 18, opacity: 0, duration: 0.55, delay: i * 0.08,
          scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none reverse" },
          ease: "power2.out",
        });
      });

      gsap.from(".upcoming-strip", {
        x: 24, opacity: 0, duration: 0.6,
        scrollTrigger: { trigger: ".upcoming-strip", start: "top 88%" },
      });
    });
    return () => ctx.revert();
  }, []);

  // Book transition Home -> About (PRD 5.2)
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const trigger = triggerRef.current, pin = pinRef.current, cover = bookCoverRef.current, page = bookPageRef.current, bg = bgRef.current, about = aboutContentRef.current;
    if (!trigger || !pin || !cover || !page || !bg || !about) return;

    if (prefersReduced) {
      gsap.set(cover, { rotationY: 0, opacity: 0 });
      gsap.set(page, { scaleX: 1, scaleY: 1 });
      gsap.set(bg, { backgroundColor: "#D3BFF5" });
      gsap.set(about, { opacity: 1, y: 0 });
      gsap.set(wordmarkRef.current, { opacity: 0 });
      gsap.set(iconRef.current, { opacity: 1, scale: 1 });
      return;
    }

    const isMobile = window.innerWidth < 768;
    // identical anchor: left 0% 50% for both
    gsap.set([cover, page], { transformOrigin: "0% 50%", transformStyle: "preserve-3d" as any, backfaceVisibility: "hidden" as any });
    gsap.set(cover, { rotationY: 0, opacity: 1, zIndex: 2 });
    gsap.set(page, { scaleX: 1, scaleY: 1, zIndex: 1 });
    gsap.set(bg, { backgroundColor: "#FAF3E8" });
    gsap.set(about, { opacity: 0, y: 18 });
    gsap.set(wordmarkRef.current, { opacity: 1, scale: 1 });
    gsap.set(iconRef.current, { opacity: 0, scale: 0.8 });

    // compute dynamic scale to fill viewport
    const getScales = () => {
      const rect = page.getBoundingClientRect();
      const vw = window.innerWidth, vh = window.innerHeight;
      const pad = isMobile ? 0 : 0; // page should fill viewport exactly
      return { sx: (vw - pad) / rect.width, sy: (vh - pad) / rect.height };
    };

    let scales = getScales();
    const onResize = () => { scales = getScales(); ScrollTrigger.refresh(); };
    window.addEventListener("resize", onResize);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: "top top",
        end: "+=140%",
        pin,
        scrub: 1,
        anticipatePin: 1,
        // markers: true,
      },
    });

    // Phase 1+2 overlap: cover rotate -115 and page scale together, bg crossfade
    tl.to(cover, { rotationY: -115, duration: 0.55, ease: "power1.inOut" }, 0);
    tl.to(page, { scaleX: scales.sx, scaleY: scales.sy, duration: 0.65, ease: "power1.inOut" }, 0);
    tl.to(bg, { backgroundColor: "#D3BFF5", duration: 0.6, ease: "none" }, 0);
    tl.to(wordmarkRef.current, { opacity: 0, scale: 0.92, duration: 0.3 }, 0);
    tl.to(iconRef.current, { opacity: 1, scale: 1, duration: 0.3 }, 0.18);

    // cover fade after rotate
    tl.to(cover, { opacity: 0, duration: 0.18, ease: "power1.out" }, 0.5);

    // about content fade after page fills (separate, not stretched)
    tl.to(about, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, 0.72);

    // click dual-trigger
    const onClick = () => {
      const st = (tl.scrollTrigger as any);
      if (!st) return;
      const end = st.end;
      gsap.to(window, { duration: 0.85, scrollTo: end, ease: "power2.inOut" });
    };
    cover.addEventListener("click", onClick);
    page.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("resize", onResize);
      cover.removeEventListener("click", onClick);
      page.removeEventListener("click", onClick);
      tl.kill();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <div className="bg-[#FAF3E8] text-[#2B2140] overflow-clip">
      {/* NAVBAR wordmark -> icon */}
      <div className="fixed top-0 inset-x-0 z-30 pointer-events-none">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 h-[56px] flex items-center justify-between">
          <div className="relative h-7 flex items-center">
            <div ref={wordmarkRef} className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#2B2140] text-white grid place-items-center text-[10px] font-black">H</span>
              <span className="font-black text-[13px] tracking-[0.08em]">HIMA ADBIS</span>
              <span className="hidden sm:inline text-[10px] font-bold tracking-[0.14em] opacity-40">• VOKASI UB</span>
            </div>
            <div ref={iconRef} className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#2B2140] text-white grid place-items-center font-black text-[11px]">H</div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 bg-white border border-[#2B2140] px-3 py-1 rounded-full text-[11px] font-black">MENU</span>
        </div>
      </div>

      {/* HOME */}
      <section id="home" className="relative bg-[#FAF3E8] pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
          {/* hero playful staged */}
          <div className="py-8 sm:py-10">
            <div className="hero-logo inline-flex items-center gap-2 bg-white border border-[#2B2140] px-3 py-1.5 rounded-full text-[11px] font-black shadow-[2px_2px_0_#2B2140]">
              <span className="w-2 h-2 bg-[#5B3FC9] rounded-full" /> KABINET SENTRA NAWASENA — 2026
            </div>
            <h1 className="hero-name serif-display text-[clamp(2.6rem,8vw,5.8rem)] mt-4 leading-[0.9]">
              <span className="block text-[12px] font-sans font-black tracking-[0.18em] opacity-40">from</span>
              <span className="block">Idea</span>
              <span className="block ml-[10%] sm:ml-[14%] flex items-baseline gap-3">to <span className="text-[#5B3FC9]">Done.</span><Star size={22} fill="#F6C6E0" cls="hidden sm:block" /></span>
            </h1>
            <div className="hero-tagline mt-4 flex flex-wrap gap-1.5 text-sm font-medium max-w-[52ch] leading-relaxed">
              <span>Merangkai</span><span>sinergi</span><span>wujudkan</span><span>aksi</span><span className="opacity-40">—</span><span>perjalanan</span><span>visual</span><span>HIMA</span><span>ADBIS</span><span>dimulai</span><span>di</span><span>sini.</span>
            </div>
          </div>

          {/* 4 highlight cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { t: "Invest Adbis", c: "#D3BFF5", e: "◐" },
              { t: "Bina Masyarakat", c: "#B9CDF7", e: "⬢" },
              { t: "Market Day", c: "#F6C6E0", e: "✦" },
              { t: "Sencrea", c: "#8FE3C6", e: "⬣" },
            ].map((x) => (
              <div key={x.t} className="reveal-card bg-white border-[2.5px] border-[#2B2140] rounded-[16px] p-4 shadow-[4px_4px_0_#2B2140]">
                <span className="w-9 h-9 rounded-full border-2 border-[#2B2140] grid place-items-center text-sm" style={{ background: x.c }}>{x.e}</span>
                <p className="mt-3 font-black text-sm leading-tight">{x.t}</p>
                <p className="text-xs opacity-60 leading-relaxed mt-1">Program unggulan — reveal bertahap saat scroll.</p>
              </div>
            ))}
          </div>

          {/* upcoming strip */}
          <div className="upcoming-strip mt-8 bg-white border-[2.5px] border-[#2B2140] rounded-[14px] p-3 flex gap-3 overflow-x-auto no-scrollbar">
            {["Upacara Opening","Workshop Invest","Bina Desa #1","Market Day Teaser"].map((u) => (
              <span key={u} className="shrink-0 px-3 py-1.5 bg-[#FAF3E8] border border-[#2B2140] rounded-full text-xs font-bold">{u}</span>
            ))}
          </div>

          <p className="mt-6 text-xs font-bold tracking-[0.12em] opacity-40 text-center">↓ Scroll atau klik buku untuk masuk ke About</p>
        </div>
      </section>

      {/* BOOK TRANSITION Home -> About */}
      <section ref={triggerRef} className="relative h-[190vh] bg-transparent">
        <div ref={pinRef} className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center" style={{ perspective: "1600px" }}>
          <div ref={bgRef} className="absolute inset-0 bg-[#FAF3E8]" />

          {/* book layers identical pos/size, origin left */}
          <div className="relative w-[min(92vw,520px)] h-[min(64vh,360px)] sm:w-[520px] sm:h-[360px] flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
            {/* page behind — will scale to viewport */}
            <div
              ref={bookPageRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] sm:w-[360px] h-[200px] sm:h-[260px] bg-[#D3BFF5] border-[2.5px] border-[#2B2140] rounded-r-[12px] rounded-l-[2px] shadow-[6px_6px_0_#2B2140] will-change-transform"
              style={{ transformOrigin: "0% 50%" }}
            >
              <div className="absolute inset-0 p-4">
                <span className="text-[10px] font-black tracking-[0.14em] opacity-40">PAGE — ABOUT</span>
                <div className="mt-2 w-full h-px bg-[#2B2140]/10" />
                <div className="mt-3 grid grid-cols-3 gap-2 opacity-20">
                  <span className="h-2 bg-[#2B2140] rounded-full" /><span className="h-2 bg-white border border-[#2B2140] rounded-full" /><span className="h-2 bg-[#5B3FC9] rounded-full" />
                </div>
              </div>
            </div>

            {/* cover front — rotates */}
            <div
              ref={bookCoverRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] sm:w-[360px] h-[200px] sm:h-[260px] bg-white border-[2.5px] border-[#2B2140] rounded-r-[12px] rounded-l-[2px] shadow-[8px_8px_0_#2B2140] will-change-transform cursor-pointer"
              style={{ transformOrigin: "0% 50%" }}
            >
              <div className="absolute top-0 inset-x-0 h-[28px] bg-[#5B3FC9] border-b-[2.5px] border-[#2B2140] flex items-center px-3 gap-1.5 rounded-tr-[10px]">
                <span className="w-2.5 h-2.5 rounded-full bg-white border border-[#2B2140]/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F6C6E0] border border-[#2B2140]/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#B9CDF7] border border-[#2B2140]/20" />
                <span className="ml-auto text-[8px] font-black tracking-[0.12em] text-white">HIMA_ADBIS.EXE</span>
              </div>
              <div className="absolute inset-x-4 top-[44px] bottom-4 flex flex-col">
                <span className="text-[10px] font-black tracking-[0.16em] opacity-40">KLIK ATAU SCROLL</span>
                <span className="serif-display text-[28px] leading-none mt-1">Buka<br />Buku</span>
                <span className="mt-1 text-xs font-medium opacity-60">Masuk ke cerita Sentra Nawasena</span>
                <div className="mt-auto inline-flex items-center gap-2 bg-[#2B2140] text-white px-3 py-1.5 rounded-full text-xs font-black w-fit">
                  Buka <span className="w-5 h-5 rounded-full bg-white text-[#2B2140] grid place-items-center">→</span>
                </div>
              </div>
              {/* face motif */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#FAF3E8] border-2 border-[#2B2140] hidden sm:grid place-items-center text-lg">◐</div>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white border border-[#2B2140] px-3 py-1.5 rounded-full text-[10px] font-black shadow-[2px_2px_0_#2B2140]">
            <span className="w-1.5 h-1.5 bg-[#5B3FC9] rounded-full animate-pulse" /> SCROLL / KLIK BUKU
          </div>
        </div>
      </section>

      {/* ABOUT — content separate, fade after scale */}
      <section id="about" className="relative bg-[#D3BFF5] border-t-[2.5px] border-[#2B2140]">
        <div ref={aboutContentRef} className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8 py-14 sm:py-20">
          <span className="inline-flex bg-white border border-[#2B2140] px-3 py-1 rounded-full text-[11px] font-black">02 — ABOUT US</span>
          <h2 className="serif-display text-[clamp(2rem,6vw,4rem)] mt-4 leading-[0.9]">Tentang<br /><span className="text-white" style={{ WebkitTextStroke: "2px #2B2140" as any }}>Sentra Nawasena</span></h2>
          <p className="mt-4 max-w-[48ch] text-sm leading-relaxed font-medium opacity-70">Makna, Visi, dan Misi muncul bertahap — reveal per kalimat saat discroll, bukan blok penuh.</p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {["Visi: satu statement calm, jadi jeda.", "Misi 1: check", "Misi 2: check"].map((m,i)=>(
              <div key={i} className="bg-white border-[2.5px] border-[#2B2140] rounded-[14px] p-4 shadow-[3px_3px_0_#2B2140] text-sm font-bold">{m}</div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-[20vh] bg-[#FAF3E8] grid place-items-center text-xs font-black tracking-[0.14em] opacity-30">— lanjut Values & Culture / People / Work Program —</div>
    </div>
  );
}
