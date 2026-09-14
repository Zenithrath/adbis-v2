"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import Stars from "@/components/ui/Stars";
import { Sparkle, Plus, DotGrid } from "@/components/ui/Decorations";

export default function About() {
  return (
    <section
      className="relative w-full text-[#FFFBEB] py-20 px-5 md:px-16 border-t border-white/10 overflow-hidden"
      id="about"
    >
      <Stars className="absolute top-10 right-6 md:right-14 w-10 md:w-14 animate-float-slow" />
      <DotGrid className="absolute bottom-8 left-4 md:left-10 w-28 md:w-36 opacity-30 animate-float-slow" color="#FFF4C6" />
      <div className="max-w-[1400px] mx-auto">
        {/* Top: Tentang + Deskripsi */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <Reveal className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#FF7AAC] mb-3 flex items-center gap-2">
                <Sparkle className="w-4 h-4 shrink-0" color="#FC75A7" />
                TENTANG KABINET
              </span>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] max-w-2xl">
                PUSAT PENGGERAK INTI BERORIENTASI MASA DEPAN CERAH.
                <Plus className="inline-block w-5 h-5 md:w-6 md:h-6 ml-3 -mt-2 align-middle" color="#FC75A7" />
              </h3>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-white/40 leading-relaxed">
                PUSAT PENGGERAK INTI — MASA DEPAN YANG CERAH
              </p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-6" delay={0.1}>
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-6 md:p-8 space-y-6">
              <p className="text-xs text-white/70 leading-relaxed">
                <strong className="text-white">
                  &ldquo;Sentra Nawasena&rdquo;
                </strong>{" "}
                adalah Pusat Penggerak Inti yang berorientasi pada Masa Depan
                Yang Cerah, dengan komitmen menjadikan HMPS Administrasi Bisnis
                sebagai wadah sentral terintegrasi dalam pengembangan kompetensi
                dan inovasi, serta menggerakkan seluruh potensi yang ada untuk
                mencapai peluang masa depan yang gemilang.
              </p>
              <Link
                href="#prokerja"
                className="inline-block px-6 py-2.5 bg-[#FF7AAC] text-[#1A1B41] rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFA6C8] transition-all"
              >
                LIHAT PROGRAM KERJA
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Visi — section sendiri */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#FF7AAC]/30 bg-gradient-to-br from-[#FF7AAC]/15 via-white/[0.05] to-transparent p-8 md:p-12 mt-4">
            <span
              aria-hidden="true"
              className="absolute -top-4 right-4 md:right-8 font-black uppercase leading-none text-white/[0.06] select-none pointer-events-none"
              style={{ fontSize: "clamp(5rem, 14vw, 11rem)" }}
            >
              VISI
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#FF7AAC] block mb-4">
              • Visi Kabinet
            </span>
            <p className="relative text-xl md:text-3xl font-bold leading-relaxed text-white max-w-3xl">
              Menjadikan HMPS Administrasi Bisnis sebagai wadah aspirasi dan
              pusat pengembangan kompetensi yang{" "}
              <span className="text-[#F9A8D4]">unggul dan berdampak nyata</span>.
            </p>
          </div>
        </Reveal>

        {/* Misi — kartu masing-masing dengan hover */}
        <div className="mt-12 md:mt-16">
          <Reveal>
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 block mb-3">
              • Misi Kabinet
            </span>
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-8">
              Tiga Pilar Pergerakan
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                no: "01",
                title: "Pelayanan & Advokasi",
                desc: "Menjamin pelayanan prima dan advokasi transparan untuk aspirasi seluruh mahasiswa.",
              },
              {
                no: "02",
                title: "Kolaborasi & Kreativitas",
                desc: "Mewujudkan sentra kolaborasi dan kreativitas mahasiswa.",
              },
              {
                no: "03",
                title: "Profesional & Berintegritas",
                desc: "Mewujudkan siklus organisasi yang profesional, transparan, dan berintegritas.",
              },
            ].map((m, i) => (
              <Reveal key={m.no} delay={i * 0.08} y={20} className="h-full">
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-[#FF7AAC]/60 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_-20px_rgba(244,114,182,0.45)] cursor-default">
                  <span className="text-4xl md:text-5xl font-black leading-none text-white/15 transition-colors duration-300 group-hover:text-[#FF7AAC]">
                    {m.no}
                  </span>
                  <h4 className="font-black text-lg md:text-xl uppercase tracking-tight text-white mt-5 mb-3">
                    {m.title}
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {m.desc}
                  </p>
                  <span className="mt-auto pt-6 block h-1 w-10 rounded-full bg-white/15 transition-all duration-300 group-hover:w-full group-hover:bg-[#FF7AAC]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
