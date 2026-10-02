"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { DEPARTMENTS } from "@/data/organization";
import { deptOnColor } from "@/lib/deptColor";
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

        <div className="flex-1 min-w-0 rounded-2xl border border-white/15 bg-white/[0.04] px-4 md:px-5 py-4 flex items-center gap-4 transition-all duration-300">
          <span
            className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: dept.color }}
          >
            {(() => {
              const mapping: Record<string, string> = {
                perhubungan: "/images/logo depart/perhub.PNG",
                sosmas: "/images/logo depart/sosma.PNG",
                adkesma: "/images/logo depart/advo.PNG",
                bumh: "/images/logo depart/bumh.PNG",
                mikad: "/images/logo depart/minbak.PNG",
                psdm: "/images/logo depart/psdm.PNG",
                medinfo: "/images/logo depart/medinfo.PNG",
              };
              const logoUrl = mapping[dept.id.toLowerCase()];
              if (logoUrl) {
                return (
                  <img
                    src={logoUrl}
                    alt={`${dept.shortName} Logo`}
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                );
              }
              // fallback
              return (
                <span className="text-xl md:text-3xl font-black" style={{ color: deptOnColor(dept.color) }}>
                  {dept.shortName.charAt(0)}
                </span>
              );
            })()}
          </span>

          <span className="flex-1 min-w-0 text-center">
            <span className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-white/50 mb-0.5">
              Departemen {activeIdx + 1} / {total}
            </span>
            <span className="block text-base md:text-xl font-black uppercase tracking-tight text-white truncate">
              {dept.shortName}
            </span>
          </span>

          {/* Invisible spacer equivalent to logo width to ensure text stays perfectly centered */}
          <span className="w-16 md:w-20 flex-shrink-0" aria-hidden="true" />
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
