"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import StatCounter from "@/components/shared/StatCounter";

const misi = [
  {
    no: "01",
    title: "Pelayanan Prima & Advokasi Transparan",
    desc: "Menjamin pelayanan prima dan advokasi transparan untuk aspirasi seluruh mahasiswa.",
    tag: "PELAYANAN & ADVOKASI",
  },
  {
    no: "02",
    title: "Sentra Kolaborasi & Kreativitas",
    desc: "Mewujudkan sentra kolaborasi dan kreativitas mahasiswa.",
    tag: "KOLABORASI & KREATIVITAS",
  },
  {
    no: "03",
    title: "Siklus Organisasi Profesional",
    desc: "Mewujudkan siklus organisasi yang profesional, transparan, dan berintegritas.",
    tag: "PROFESIONAL & BERINTEGRITAS",
  },
];

export default function VisiMisi() {
  return (
    <section id="visi" className="scroll-mt-24 w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-12 md:mb-16 border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 block mb-3">
                • (01) ARAH KABINET
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                Visi & Misi
              </h2>
            </div>
            <span className="hidden sm:block text-5xl md:text-7xl font-black text-white/10 select-none leading-none">
              V·M
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <div className="bg-white/10 backdrop-blur-xl border border-white/15 text-[#FFFBEB] rounded-2xl p-8 md:p-10 flex flex-col gap-10 min-h-[420px]">
                <div className="flex-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#F9A8D4] block mb-5">
                    ✱ VISI KABINET
                  </span>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.02]">
                    Unggul &amp;
                    <br />
                    <span className="text-stroke-cream">Berdampak</span>
                  </h3>
                  <p className="mt-6 text-xs leading-relaxed text-[#FFFBEB]/65 max-w-sm">
                    Menjadikan HMPS Administrasi Bisnis sebagai wadah aspirasi
                    dan pusat pengembangan kompetensi yang unggul dan berdampak
                    nyata.
                  </p>
                </div>
                <div className="grid grid-cols-3 border-t border-[#FFFBEB]/15 pt-6 text-center">
                  <div>
                    <p className="font-black text-2xl md:text-3xl text-[#BFDBFE]">
                      <StatCounter to={6} />
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#FFFBEB]/50 mt-1">
                      Departemen
                    </p>
                  </div>
                  <div>
                    <p className="font-black text-2xl md:text-3xl text-[#F9A8D4]">
                      <StatCounter to={15} />
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#FFFBEB]/50 mt-1">
                      Program Kerja
                    </p>
                  </div>
                  <div>
                    <p className="font-black text-2xl md:text-3xl text-[#E89B4F]">
                      <StatCounter to={500} />
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#FFFBEB]/50 mt-1">
                      Mahasiswa
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 block mb-6">
              • MISI KABINET (03)
            </span>
            <div className="border-t border-white/15">
              {misi.map((m, i) => (
                <Reveal key={m.no} delay={i * 0.08}>
                  <div className="group border-b border-white/15 py-7 md:py-8 flex items-start gap-6 md:gap-10 transition-colors hover:bg-white/5 px-3 md:px-4 -mx-3 md:-mx-4 rounded-xl cursor-default">
                    <span className="text-3xl md:text-5xl font-black leading-none text-white/15 transition-colors group-hover:text-[#F472B6] shrink-0">
                      {m.no}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight leading-tight">
                        {m.title}
                      </h3>
                      <p className="mt-3 text-xs text-white/50 leading-relaxed max-w-xl">
                        {m.desc}
                      </p>
                      <p className="mt-4 inline-block text-[9px] font-bold uppercase tracking-widest text-white/30">
                        → {m.tag}
                      </p>
                    </div>
                    <span className="hidden md:flex w-10 h-10 shrink-0 rounded-full border border-white/20 items-center justify-center transition-all group-hover:bg-white/20 group-hover:text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
