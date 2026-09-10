"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export default function HubHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-14 md:pt-20 pb-12 md:pb-16 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-[#FFA6C8]">
            <span className="text-[#FF7AAC]">✱</span> Adbis Hub — Satu Atap
          </span>
          <h1 className="mt-5 text-5xl md:text-8xl font-black uppercase tracking-tight leading-[0.9]">
            Satu Atap
            <br />
            Semua Layanan
          </h1>
          <p className="mt-6 text-sm md:text-base text-[#FFFBEB]/60 leading-relaxed max-w-xl mx-auto">
            Pusat layanan dan informasi mahasiswa: pendaftaran open
            recruitment, kotak aspirasi, dan roadmap persiapan karier — semua
            dalam satu halaman.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc4_cfEm6E5W-xbkWop6pdyAb_XsuGB0lJ-BJ5_S0hibLSdqQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF7AAC] text-[#1A1B41] text-[11px] font-black uppercase tracking-widest hover:bg-[#FFA6C8] transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              Open Recruitment
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-[11px] font-bold uppercase tracking-widest text-[#FFFBEB]/80 hover:border-[#FF7AAC] hover:text-white transition-all"
            >
              Lihat Roadmap
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
