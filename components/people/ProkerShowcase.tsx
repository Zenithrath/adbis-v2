"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Target } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import type { Department } from "@/data/organization";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ProkerShowcase({ dept }: { dept: Department }) {
  const [index, setIndex] = useState(0);
  const total = dept.programs.length;
  const proker = dept.programs[Math.min(index, Math.max(total - 1, 0))];

  if (!proker) return null;

  const go = (dir: 1 | -1) =>
    setIndex((prev) => (prev + dir + total) % total);

  return (
    <section id="proker" className="scroll-mt-24 w-full border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-16 md:py-24">
        <Reveal>
          <div className="mb-10 text-center">
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 block mb-3">
              • Program Kerja
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
              Proker <span className="text-[#F9A8D4]">{dept.shortName}</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#1A1B41]">
            <AnimatePresence mode="wait">
              <motion.div
                key={dept.id + proker.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-2"
              >
                <div className="relative min-h-[280px] lg:min-h-[480px]">
                  <img
                    src={proker.documentation[0]}
                    alt={proker.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1B41] via-[#1A1B41]/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#1A1B41]" />

                  <div className="absolute bottom-0 inset-x-0 p-5 md:p-6">
                    <div className="flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {dept.programs.map((p, i) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setIndex(i)}
                          aria-label={`Lihat ${p.name}`}
                          className={cn(
                            "shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer",
                            i === index
                              ? "border-[#F472B6] shadow-[0_0_0_1px_#F472B6]"
                              : "border-white/25 opacity-60 hover:opacity-100"
                          )}
                        >
                          <img
                            src={p.documentation[0]}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>

                    <div className="mt-3 flex items-center gap-4">
                      <span className="text-[11px] font-black uppercase tracking-widest text-white/80">
                        Program Kerja{" "}
                        <span className="text-[#F9A8D4]">
                          {index + 1}/{total}
                        </span>
                      </span>
                      <span className="h-px flex-1 bg-white/20" />
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => go(-1)}
                          aria-label="Program kerja sebelumnya"
                          className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#1A1B41] transition-all cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => go(1)}
                          aria-label="Program kerja berikutnya"
                          className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#1A1B41] transition-all cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#F9A8D4] mb-2">
                    {dept.name}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight text-white mb-4">
                    {proker.name}
                  </h3>
                  <p className="text-sm md:text-[15px] text-white/60 leading-relaxed mb-6">
                    {proker.desc}
                  </p>

                  <div className="mb-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
                      Tujuan Program
                    </p>
                    <ul className="space-y-2">
                      {proker.objectives.map((obj, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-white/70 leading-relaxed"
                        >
                          <Check className="w-4 h-4 text-[#F472B6] mt-0.5 flex-shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <Target className="w-4 h-4 text-[#F9A8D4] mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-white/65 leading-relaxed">
                      <span className="font-black uppercase tracking-widest text-white/40 block mb-1">
                        Sasaran Target
                      </span>
                      {proker.target}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
