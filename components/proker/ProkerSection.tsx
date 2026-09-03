"use client";

import { forwardRef } from "react";
import { BentoAll } from "@/components/bento/Bento";

export type Program = {
  num: number;
  name: string;
  title: string;
  desc: string;
  badgeColor: string;
};

type Props = {
  programs: Program[];
  activeProgram: number;
  setActiveProgram: (i: number) => void;
  contentRef: React.RefObject<HTMLDivElement | null>;
};

export const ProkerSection = forwardRef<HTMLDivElement, Props>(function ProkerSection(
  { programs, activeProgram, setActiveProgram, contentRef },
  ref
) {
  return (
    <div ref={ref} className="absolute inset-0 z-40 hidden lg:flex bg-[#FFF8C7] overflow-hidden gap-4 p-4">
      <div className="bg-grid-lines" />
      <div className="pink-glow" />
      <div className="pixel-spot-overlay opacity-30" />
      <div className="w-[300px] flex-shrink-0 h-full">
        <div className="flex h-full w-full flex-col overflow-hidden bg-white rounded-[14px] border-[2.5px] border-[#111] shadow-[4px_4px_0px_#111] px-4 py-5">
          {programs.map((item, i) => {
            const isActive = i === activeProgram;
            return (
              <div key={item.num}>
                <button
                  onClick={() => setActiveProgram(i)}
                  className={`group flex w-full items-center gap-3 px-2 py-3 transition-colors hover:bg-black/5 ${
                    !isActive ? "border-b border-black/10" : ""
                  }`}
                >
                  <svg
                    className={`h-3 w-3 flex-shrink-0 text-[#2b2140] transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  <span
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-[8px] text-[10px] font-bold text-white shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                    style={{ background: item.badgeColor }}
                  >
                    {item.num}
                  </span>
                  <span
                    className={`font-accent text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? "text-[#2b2140]/40" : "text-[#2b2140]"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  style={{ maxHeight: isActive ? "320px" : "0px", opacity: isActive ? 1 : 0 }}
                >
                  <div className="px-1 pb-4 pt-2 text-center">
                    <svg viewBox="0 0 200 60" className="mx-auto h-10 w-36">
                      <path id={`archedProkerInner${i}`} d="M 25 55 Q 100 5 175 55" fill="transparent" />
                      <text className="fill-[#2b2140] font-accent text-[11px] font-bold uppercase tracking-[0.15em]">
                        <textPath href={`#archedProkerInner${i}`} startOffset="50%" textAnchor="middle">
                          Program Kerja
                        </textPath>
                      </text>
                    </svg>
                    <div className="mt-1 mb-2 flex justify-center">
                      <span
                        className="inline-flex h-10 min-w-10 items-center justify-center rounded-[12px] px-4 text-xl font-black text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] border-2 border-[#111]"
                        style={{ background: item.badgeColor }}
                      >
                        {item.num}
                      </span>
                    </div>
                    <h3 className="font-unbounded text-[20px] font-black leading-tight text-[#2b2140]">{item.title}</h3>
                    <p className="mt-1 px-1 font-body text-[11px] leading-relaxed text-[#2b2140]/65">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 h-full overflow-hidden relative z-10">
        <div ref={contentRef} className="h-[400vh] w-full">
          <div className="h-full w-full p-2">
            <BentoAll />
          </div>
        </div>
      </div>
    </div>
  );
});
