"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export default function CareerHero() {
  return (
    <section className="relative w-full editorial-grid-bg border-b border-[#1e293b]/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-8 md:pt-14 pb-16 md:pb-24">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-[#1e293b]/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/50">
          <span className="flex items-center gap-2">
            <span className="text-[#F472B6]">✱</span> PENGEMBANGAN DIRI —
            HMPS ADMINISTRASI BISNIS
          </span>
          <span className="hidden sm:block">S1 → DUNIA PROFESIONAL</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 mt-10 md:mt-14 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <h1 className="font-black uppercase leading-[0.85] tracking-tighter select-none">
                <span className="block text-[clamp(3rem,9.5vw,9rem)]">
                  Career
                </span>
                <span className="block text-[clamp(3rem,9.5vw,9rem)] text-stroke-ink">
                  Roadmap
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-xl font-light">✱</span>
                <div className="h-px bg-[#1e293b]/20 flex-1" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/50">
                  6 TAHAP · SEMESTER 1 HINGGA LULUS
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="border border-[#1e293b]/20 rounded-2xl bg-white/70 p-6 md:p-8">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#F472B6] block mb-3">
                  • APA INI?
                </span>
                <p className="text-[13px] leading-relaxed text-[#1e293b]/75">
                  Panduan langkah demi langkah untuk mempersiapkan kariermu —
                  dari semester pertama hingga resmi menyandang status alumni.
                </p>
                <div className="mt-5 pt-5 border-t border-[#1e293b]/10 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#1e293b]/40">
                    Mulai dari mana?
                  </span>
                  <a
                    href="#roadmap"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-[#F472B6] transition-colors group"
                  >
                    Lihat Peta
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
