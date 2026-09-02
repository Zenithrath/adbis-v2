"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".h-panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => `+=${panelsRef.current!.offsetWidth}`,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div
        ref={panelsRef}
        className="flex h-screen w-[300vw]"
      >
        {/* Panel 1 */}
        <div className="h-panel flex h-screen w-screen flex-shrink-0 items-center justify-center" style={{ background: "#faf3e8" }}>
          <div className="text-center">
            <span className="font-accent text-sm uppercase tracking-[0.3em] text-[#5B21B6]">
              Program Kerja
            </span>
            <h2 className="serif-display mt-3 text-4xl text-[#2b2140] md:text-5xl">
              Empat Pilar Utama
            </h2>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="h-panel flex h-screen w-screen flex-shrink-0 items-center justify-center" style={{ background: "#d3bff5" }}>
          <div className="text-center">
            <span className="font-accent text-sm uppercase tracking-[0.3em] text-[#5B21B6]">
              Tentang
            </span>
            <h2 className="serif-display mt-3 text-4xl text-[#2b2140] md:text-5xl">
              Visi & Misi
            </h2>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="h-panel flex h-screen w-screen flex-shrink-0 items-center justify-center" style={{ background: "#8fe3c6" }}>
          <div className="text-center">
            <span className="font-accent text-sm uppercase tracking-[0.3em] text-[#5B21B6]">
              Struktur
            </span>
            <h2 className="serif-display mt-3 text-4xl text-[#2b2140] md:text-5xl">
              Kepengurusan
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
