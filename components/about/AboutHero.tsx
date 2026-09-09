"use client";

import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export default function AboutHero() {
  return (
    <section className="relative w-full editorial-grid-bg border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-8 md:pt-14 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 mt-10 md:mt-14 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <h1 className="font-black uppercase leading-[0.85] tracking-tighter select-none">
                <span className="block text-[clamp(3.4rem,11vw,10.5rem)]">
                  Sentra
                </span>
                <span className="block text-[clamp(3.4rem,11vw,10.5rem)] text-stroke-cream">
                  Nawasena
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-[10px] font-bold uppercase tracking-widest text-white/50 leading-relaxed">
                PUSAT PENGGERAK INTI —
                <br />
                MASA DEPAN YANG CERAH
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <div className="border border-white/15 rounded-2xl bg-white/10 backdrop-blur-xl p-6 md:p-8 relative">
                <span className="absolute -top-3 left-6 bg-[#2a1f6e] px-2 text-[9px] font-black uppercase tracking-widest text-[#F472B6]">
                  • TENTANG KABINET
                </span>
                <p className="text-[13px] leading-relaxed text-white/70">
                  <strong className="text-white">
                    &ldquo;Sentra Nawasena&rdquo;
                  </strong>{" "}
                  adalah Pusat Penggerak Inti yang berorientasi pada Masa Depan
                  Yang Cerah, dengan komitmen menjadikan HMPS Administrasi Bisnis
                  sebagai wadah sentral terintegrasi dalam pengembangan kompetensi
                  dan inovasi, serta menggerakkan seluruh potensi yang ada untuk
                  mencapai peluang masa depan yang gemilang.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#visi"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF7AAC] text-[#1A1B41] text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFA6C8] transition-colors"
                  >
                    Lihat Visi & Misi <ArrowDown className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#values"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all"
                  >
                    Nilai & Budaya
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
