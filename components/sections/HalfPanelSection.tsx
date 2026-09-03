"use client";

import { forwardRef } from "react";

export const HalfPanelSection = forwardRef<HTMLDivElement>(function HalfPanelSection(_, ref) {
  return (
    <div
      ref={ref}
      className="absolute left-0 top-0 z-30 flex h-full w-full sm:w-1/2 items-center justify-center bg-[#2B2F9E] overflow-hidden sm:border-r-4 sm:border-[#111] sm:shadow-[8px_0_30px_rgba(0,0,0,0.3)]"
    >
      <div className="bg-grid-lines" />
      <div className="pink-glow" />
      <div className="pixel-spot-overlay opacity-30" />
      <div className="relative z-10 text-center px-6">
        <h2
          className="font-unbounded text-[clamp(2rem,5.5vw,4rem)] leading-[0.88] font-black uppercase text-[#FFF8C7] tracking-[-1.5px]"
          style={{ textShadow: "2px 2px 0 #111, 0 8px 24px rgba(0,0,0,0.3)" }}
        >
          <span className="half-word block">Wujud</span>
          <span className="half-word block">Kan</span>
          <span className="half-word block text-[#FFA3B8]">Aksi</span>
        </h2>
      </div>
    </div>
  );
});
