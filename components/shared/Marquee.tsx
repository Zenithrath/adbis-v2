"use client";

/**
 * Infinite left-scrolling marquee.
 *
 * Teknik:
 *  - Track berisi DUA group identik yang tersambung langsung (tanpa gap).
 *  - Animasi menggeser track sejauh -50% (= lebar satu group).
 *  - Ketika animasi reset ke 0, posisi visual identik → seamless loop.
 *  - Menggunakan .animate-marquee dari globals.css:
 *      @keyframes marquee { 0% { translateX(0) } 100% { translateX(-50%) } }
 *      animation: marquee 24s linear infinite;
 */
export default function Marquee({
  items,
  duration = 30,
  speed,
}: {
  items: string[];
  /** Durasi satu siklus dalam detik. Makin besar = makin lambat. */
  duration?: number;
  /** @deprecated - gunakan duration (number). Tetap didukung untuk backward compat. */
  speed?: string;
}) {
  // Jika speed (string lama, e.g. "24s") dipakai, parse angkanya
  const animDuration = speed
    ? speed
    : `${duration}s`;

  const itemList = items.map((item, i) => (
    <span
      key={i}
      className="flex items-center gap-8 pr-8 text-[10px] md:text-xs font-black uppercase tracking-[0.35em] whitespace-nowrap"
    >
      {item}{" "}
      <span className="text-[#F9A8D4] text-base" aria-hidden="true">
        ✱
      </span>
    </span>
  ));

  const dupList = items.map((item, i) => (
    <span
      key={`dup-${i}`}
      className="flex items-center gap-8 pr-8 text-[10px] md:text-xs font-black uppercase tracking-[0.35em] whitespace-nowrap"
    >
      {item}{" "}
      <span className="text-[#F9A8D4] text-base" aria-hidden="true">
        ✱
      </span>
    </span>
  ));

  return (
    <div
      className="w-full overflow-hidden border-y border-white/10 text-[#FFFBEB] py-3.5"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <style suppressHydrationWarning>{`
        /* 
          Force animation on this specific marquee regardless of prefers-reduced-motion
          because it's a core design element of the page.
        */
        .force-marquee-run {
          animation-name: marquee !important;
          animation-timing-function: linear !important;
          animation-iteration-count: infinite !important;
          animation-play-state: running !important;
        }
      `}</style>
      
      {/*
       * Track: display flex, lebar max-content.
       * .animate-marquee dari globals.css: translateX(0) → translateX(-50%) linear infinite.
       * Ditambah .force-marquee-run untuk bypass prefers-reduced-motion: reduce.
       * Override duration lewat animationDuration inline.
       */}
      <div
        className="animate-marquee force-marquee-run flex items-center"
        style={{ animationDuration: animDuration, width: "max-content" }}
      >
        {/* Group 1 */}
        <span className="flex items-center shrink-0">
          {itemList}
        </span>

        {/* Group 2 — duplikat untuk seamless loop, disembunyikan dari screen reader */}
        <span className="flex items-center shrink-0" aria-hidden="true">
          {dupList}
        </span>
      </div>
    </div>
  );
}
