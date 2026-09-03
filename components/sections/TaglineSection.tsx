"use client";

import { forwardRef } from "react";

export const TaglineSection = forwardRef<HTMLDivElement>(function TaglineSection(_, ref) {
  return (
    <div ref={ref} className="absolute inset-0 z-20 flex h-screen w-full bg-[#FFF8C7] overflow-hidden">
      <div className="bg-grid-lines" />
      <div className="pink-glow" />
      <div className="pixel-spot-overlay opacity-30" />
      <div className="relative z-10 ml-auto flex h-full w-full sm:w-1/2 items-center justify-center px-6">
        <div className="text-center">
          <h2
            className="font-unbounded text-[clamp(2rem,5.5vw,4rem)] leading-[0.88] font-black uppercase text-[#111] tracking-[-1.5px]"
            style={{ textShadow: "3px 3px 0px rgba(62,67,199,0.12)" }}
          >
            <span className="tagline-word block">Me</span>
            <span className="tagline-word block">Rangkai</span>
            <span className="tagline-word block text-[#4346D0]">Sinergi</span>
          </h2>
        </div>
      </div>
    </div>
  );
});
