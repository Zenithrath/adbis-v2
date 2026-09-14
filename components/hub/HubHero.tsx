"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import Stars from "@/components/ui/Stars";
import { Sparkle, Diamond, DotGrid } from "@/components/ui/Decorations";

export default function HubHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src="/images/Vector 2.svg"
        alt=""
        aria-hidden="true"
        width={866}
        height={859}
        className="absolute -top-16 -left-20 md:-left-14 w-40 md:w-60 h-auto opacity-25 animate-float-slow-reverse pointer-events-none select-none"
      />
      <Stars className="absolute top-10 right-6 md:right-16 w-10 md:w-14 animate-float-slow" />
      <DotGrid rows={4} cols={6} className="absolute bottom-8 right-4 md:right-12 w-24 md:w-32 opacity-30 animate-float-slow-reverse" color="#FFF4C6" />
      <div className="max-w-[1400px] mx-auto px-5 md:px-16 pt-14 md:pt-20 pb-12 md:pb-16 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-[#FFA6C8]">
            <span className="text-[#FF7AAC]">✱</span> Adbis Hub — Satu Atap
            <Sparkle className="w-4 h-4 shrink-0" color="#FC75A7" />
          </span>
          <h1 className="mt-5 text-5xl md:text-8xl font-black uppercase tracking-tight leading-[0.9]">
            Satu Atap
            <br />
            Semua Layanan
            <Diamond className="inline-block w-5 h-5 md:w-8 md:h-8 ml-4 -mt-3 align-middle" color="#FFF4C6" />
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
