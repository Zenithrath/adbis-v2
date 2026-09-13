"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { DEPARTMENTS, type Member } from "@/data/organization";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function luminance(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function onColor(hex: string) {
  return luminance(hex) > 0.55 ? "#1e293b" : "#FFFBEB";
}

export default function DeptDetail({
  onSelectMember,
}: {
  onSelectMember: (m: Member) => void;
}) {
  const [activeDeptId, setActiveDeptId] = useState(DEPARTMENTS[0].id);
  const [expandedProkerId, setExpandedProkerId] = useState<string | null>(null);

  const activeDept =
    DEPARTMENTS.find((d) => d.id === activeDeptId) || DEPARTMENTS[0];

  return (
    <section
      id="departemen"
      className="scroll-mt-24 w-full border-y border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-28">
        <Reveal>
          <div className="mb-10 border-b border-white/10 pb-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-white">
              Di Balik Himpunan
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Jelajahi setiap departemen HMPS Adbis untuk melihat pimpinan, anggota, serta fokus kerja yang dijalankan oleh setiap departemen.
            </p>
          </div>
        </Reveal>

        {/* Tab / Slider Departemen */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {DEPARTMENTS.map((d) => {
              const isActive = d.id === activeDeptId;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => {
                    setActiveDeptId(d.id);
                    setExpandedProkerId(null);
                  }}
                  className={cn(
                    "px-6 py-3 rounded-xl text-xs md:text-sm font-black uppercase tracking-widest border-2 transition-all duration-300 cursor-pointer",
                    isActive
                      ? "border-[#1e293b] bg-[#1e293b] text-[#FFFBEB] shadow-[4px_4px_0px_#1e293b] translate-x-[-2px] translate-y-[-2px]"
                      : "bg-white border-[#1e293b]/20 text-[#1e293b]/60 hover:border-[#1e293b] hover:text-[#1e293b]"
                  )}
                >
                  {d.shortName}
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDept.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="w-full"
          >
            {/* Foto Kadep & Wakadep — image only, no text below */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
              {/* Card Kadep */}
              <div
                className="group flex flex-col items-center cursor-pointer"
                onClick={() => onSelectMember(activeDept.head)}
              >
                <div className="relative w-full max-w-[400px] rounded-3xl overflow-hidden border-[3px] border-[#1e293b] shadow-[8px_8px_0px_#1e293b] transition-transform duration-300 group-hover:-translate-y-2">
                  <img
                    src={activeDept.head.image}
                    alt={activeDept.head.name}
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Card Wakadep */}
              <div
                className="group flex flex-col items-center cursor-pointer mt-8 md:mt-0"
                onClick={() => onSelectMember(activeDept.coHead)}
              >
                <div className="relative w-full max-w-[400px] rounded-3xl overflow-hidden border-[3px] border-[#1e293b] shadow-[8px_8px_0px_#1e293b] transition-transform duration-300 group-hover:-translate-y-2">
                  <img
                    src={activeDept.coHead.image}
                    alt={activeDept.coHead.name}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>

            {/* Tentang Departemen */}
            <div className="max-w-4xl mx-auto text-center mb-20 bg-[#FFFBEB] p-8 md:p-12 rounded-3xl border border-[#1e293b]/10 relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1e293b] text-[#FFFBEB] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap">
                Tentang {activeDept.shortName}
              </div>
              <h2
                className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-4"
                style={{ color: activeDept.color }}
              >
                {activeDept.name}
              </h2>
              <p className="text-[#1e293b]/70 text-base md:text-lg leading-relaxed mb-8">
                {activeDept.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {activeDept.jobDescription.map((job, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full border border-[#1e293b]/15 text-[10px] font-bold uppercase tracking-wider text-[#1e293b]/60 bg-white"
                  >
                    {job}
                  </span>
                ))}
              </div>
            </div>

            {/* Grid Staff — image only, no text panel below */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                  Staff Departemen
                </h3>
                <div className="w-16 h-1 bg-[#F9A8D4] mx-auto mt-4 rounded-full" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {activeDept.staff.map((staff) => (
                  <button
                    key={staff.id}
                    type="button"
                    onClick={() => onSelectMember(staff)}
                    className="group relative text-left border-2 border-[#1e293b]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#1e293b] hover:shadow-[4px_4px_0px_#1e293b] hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="w-full relative bg-[#f1f5f9]">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-full h-auto block"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Proker Accordion — implementasi lama dipertahankan */}
            <div className="bg-white border border-[#1e293b]/10 rounded-3xl p-6 md:p-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#1e293b]/40">
                  List Program Kerja ({activeDept.programs.length})
                </h3>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#1e293b]/35">
                  klik untuk detail
                </span>
              </div>

              {activeDept.programs.map((proker, idx) => {
                const isOpen = expandedProkerId === proker.id;
                return (
                  <div
                    key={proker.id}
                    className="border-b border-[#1e293b]/10 last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedProkerId((prev) =>
                          prev === proker.id ? null : proker.id
                        )
                      }
                      aria-expanded={isOpen}
                      className="group w-full py-5 flex items-center gap-5 text-left cursor-pointer"
                    >
                      <span className="text-xl font-black text-[#1e293b]/15 transition-colors group-hover:text-[#F472B6]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-[9px] font-bold uppercase tracking-widest text-[#1e293b]/35 mb-1">
                          PROGRAM KERJA
                        </span>
                        <span className="block text-lg md:text-2xl font-black uppercase tracking-tight leading-tight group-hover:text-[#F472B6] transition-colors">
                          {proker.name}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "w-9 h-9 shrink-0 rounded-full border border-[#1e293b]/20 flex items-center justify-center text-[#1e293b]/50 transition-all duration-300",
                          isOpen
                            ? "bg-[#1e293b] border-[#1e293b] text-[#FFFBEB] rotate-45"
                            : "group-hover:border-[#1e293b] group-hover:text-[#1e293b]"
                        )}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pl-12 md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <span className="text-[9px] font-black uppercase tracking-widest text-[#F472B6] block mb-2">
                                Tentang Program
                              </span>
                              <p className="text-xs text-[#1e293b]/65 leading-relaxed">
                                {proker.desc}
                              </p>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <span className="text-[9px] font-black uppercase tracking-widest text-[#F472B6] block mb-2">
                                  Tujuan
                                </span>
                                <ul className="space-y-1.5">
                                  {proker.objectives.map((obj, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-2 text-xs text-[#1e293b]/65 leading-relaxed"
                                    >
                                      <Check className="w-3.5 h-3.5 text-[#1e293b]/30 mt-0.5 flex-shrink-0" />
                                      <span>{obj}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <span className="text-[9px] font-black uppercase tracking-widest text-[#F472B6] block mb-1.5">
                                  Sasaran Target
                                </span>
                                <p className="text-xs font-semibold text-[#1e293b]/70">
                                  {proker.target}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
