"use client";

import { BentoMenu1, BentoMenu2, BentoMenu3, BentoMenu4 } from "@/components/bento/Bento";
import type { Program } from "./ProkerSection";

export function ProkerMobile({ programs }: { programs: Program[] }) {
  const BentoByIdx = [BentoMenu1, BentoMenu2, BentoMenu3, BentoMenu4] as const;
  return (
    <div className="lg:hidden relative bg-[#4346D0] overflow-hidden">
      <div className="bg-grid-lines" />
      <div className="pink-glow" />
      <div className="pixel-spot-overlay opacity-30" />
      <div className="relative z-10 px-4 py-8 flex flex-col gap-6">
        {programs.map((item, idx) => {
          const BentoComp = BentoByIdx[idx];
          return (
            <div key={idx} className="bg-white rounded-[14px] border-[2.5px] border-[#111] shadow-[4px_4px_0px_#111] overflow-hidden">
              <div className="aspect-[16/9] w-full overflow-hidden border-b-[2.5px] border-[#111] bg-white p-2 flex items-center justify-center">
                <BentoComp />
              </div>
              <div className="p-5 text-center">
                <svg viewBox="0 0 200 60" className="mx-auto h-8 w-32">
                  <path id={`archedMobile${idx}`} d="M 25 55 Q 100 5 175 55" fill="transparent" />
                  <text className="fill-[#111] font-accent text-[10px] font-bold uppercase tracking-[0.15em]">
                    <textPath href={`#archedMobile${idx}`} startOffset="50%" textAnchor="middle">
                      Program Kerja
                    </textPath>
                  </text>
                </svg>
                <span
                  className="mt-1 inline-flex h-9 min-w-9 items-center justify-center rounded-[10px] px-3 text-sm font-black text-white border-2 border-[#111] shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                  style={{ background: item.badgeColor }}
                >
                  {item.num}
                </span>
                <h3 className="mt-3 font-unbounded text-[18px] font-black leading-tight text-[#111]">{item.title}</h3>
                <p className="mt-2 font-body text-[12px] leading-relaxed text-[#111]/65">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
