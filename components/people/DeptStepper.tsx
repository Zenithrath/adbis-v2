"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { DEPARTMENTS } from "@/data/organization";
import { cn } from "@/lib/utils";

export default function DeptStepper({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const total = DEPARTMENTS.length;
  const activeIdx = Math.max(
    0,
    DEPARTMENTS.findIndex((d) => d.id === activeId)
  );
  const dept = DEPARTMENTS[activeIdx];

  const pick = (i: number) =>
    onSelect(DEPARTMENTS[((i % total) + total) % total].id);
  const step = (dir: 1 | -1) => pick(activeIdx + dir);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-3 md:gap-5">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Departemen sebelumnya"
          className="w-12 h-12 rounded-full border border-white/25 flex-shrink-0 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#1A1B41] hover:border-white transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex-1 min-w-0 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 flex items-center gap-4">
          <span
            className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-base font-black"
            style={{ backgroundColor: dept.color, color: "#1A1B41" }}
          >
            {dept.shortName.charAt(0)}
          </span>
          <span className="flex-1 min-w-0 text-center">
            <span className="block text-[10px] font-black uppercase tracking-widest text-white/40">
              Departemen {activeIdx + 1} / {total}
            </span>
            <span className="block text-base md:text-lg font-black uppercase tracking-tight text-white truncate">
              {dept.shortName}
            </span>
          </span>
          <span className="w-10 flex-shrink-0" aria-hidden="true" />
        </div>

        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Departemen berikutnya"
          className="w-12 h-12 rounded-full border border-white/25 flex-shrink-0 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#1A1B41] hover:border-white transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {DEPARTMENTS.map((d, i) => (
          <button
            key={d.id}
            type="button"
            onClick={() => pick(i)}
            aria-label={d.shortName}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer",
              i === activeIdx
                ? "w-7 bg-[#F472B6]"
                : "w-2 bg-white/25 hover:bg-white/45"
            )}
          />
        ))}
      </div>
    </div>
  );
}
