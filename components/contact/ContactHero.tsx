"use client";

import { Reveal } from "@/components/ui/reveal";

export default function ContactHero() {
  return (
    <section className="relative w-full editorial-grid-bg border-b border-[#1e293b]/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-8 md:pt-14 pb-16 md:pb-20">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-[#1e293b]/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/50">
          <span className="flex items-center gap-2">
            <span className="text-[#F472B6]">✱</span> ADBIS HUB — SATU ATAP
            UNTUK SEMUA
          </span>
          <span className="hidden sm:block">KONTAK & LAYANAN</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 mt-10 md:mt-14 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <h1 className="font-black uppercase leading-[0.85] tracking-tighter select-none">
                <span className="block text-[clamp(2.4rem,6.5vw,6.5rem)]">
                  Pusat Layanan
                </span>
                <span className="block text-[clamp(2.4rem,6.5vw,6.5rem)] text-stroke-ink">
                  & Informasi
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-xl font-light">✱</span>
                <div className="h-px bg-[#1e293b]/20 flex-1" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/50">
                  REKRUTMEN · ASPIRASI · KARIER
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="border border-[#1e293b]/20 rounded-2xl bg-white/70 p-6 md:p-8">
                <p className="text-[13px] leading-relaxed text-[#1e293b]/75">
                  Semua yang kamu butuhkan ada di sini — dari rekrutmen,
                  aspirasi, hingga persiapan karier. Pilih layanan, klik, dan
                  selesai.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Open Recruitment", "Aspirasi", "Karier"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full border border-[#1e293b]/20 text-[9px] font-bold uppercase tracking-widest text-[#1e293b]/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
