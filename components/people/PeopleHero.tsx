"use client";

import { Crown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export default function PeopleHero() {
  return (
    <section className="relative w-full border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-8 md:pt-14 pb-16 md:pb-20">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50">
          <span className="flex items-center gap-2">
            <span className="text-[#F472B6]">✱</span> OUR PEOPLE &amp; PROGRAM
            KERJA
          </span>
          <span className="hidden sm:block">
            KABINET SENTRA NAWASENA · PERIODE 2026
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 mt-10 md:mt-14 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <h1 className="font-black uppercase leading-[0.85] tracking-tighter select-none text-white">
                <span className="block text-[clamp(2.8rem,9.5vw,9rem)]">
                  Struktur
                </span>
                <span className="block text-[clamp(2.8rem,9.5vw,9rem)] text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>
                  &amp; Proker
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-xl font-light text-white/60">✱</span>
                <div className="h-px bg-white/20 flex-1" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                  7 DEPARTEMEN · 15+ PROKER
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="border border-white/15 rounded-2xl bg-white/10 backdrop-blur-sm p-6 md:p-8">
                <p className="text-[13px] leading-relaxed text-white/70">
                  Mengenal seluruh struktur kepengurusan Kabinet Sentra
                  Nawasena — dari Badan Pengurus Inti, 7 Kepala Departemen,
                  jajaran staf, hingga detail program kerja unggulan.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#struktur"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#1A1B41] text-[10px] font-bold uppercase tracking-widest hover:bg-[#F472B6] hover:text-white transition-colors"
                  >
                    <Crown className="w-3.5 h-3.5" />
                    Struktur
                  </a>
                  <a
                    href="#departemen"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                  >
                    Detail Departemen
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
