"use client";

import Link from "next/link";

export default function About() {
  return (
    <section
      className="w-full text-[#FFFBEB] py-20 px-8 md:px-16 border-t border-[#FFFBEB]/10"
      id="about"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top: 2026 + Tentang */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-2">
                2026
              </h2>
              <p className="text-xs text-[#FFFBEB]/60 max-w-[200px] leading-relaxed uppercase font-semibold">
                KABINET SENTRA NAWASENA HMPS ADMINISTRASI BISNIS
              </p>
            </div>
          </div>
          <div className="md:col-span-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#FFFBEB]/60 block mb-3">
                • TENTANG KABINET
              </span>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] max-w-2xl">
                PUSAT PENGGERAK INTI BERORIENTASI MASA DEPAN CERAH.
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pt-4">
              <div />
              <div className="space-y-6 pl-8 border-l border-[#FFFBEB]/20">
                <p className="text-xs text-[#FFFBEB]/80 leading-relaxed">
                  <strong className="text-[#FFFBEB]">
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
                  className="inline-block px-6 py-2.5 border border-[#FFFBEB] rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFFBEB] hover:text-[#6564CA] transition-all"
                >
                  LIHAT PROGRAM KERJA
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Visi Misi Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-[#FFFBEB]/15">
          <div className="p-8 border-b sm:border-b-0 border-[#FFFBEB]/15 sm:border-r flex flex-col justify-between min-h-[240px]">
            <span className="text-xs font-bold text-[#F9A8D4] uppercase tracking-widest">
              VISI KABINET
            </span>
            <p className="text-xs text-[#FFFBEB]/80 font-medium leading-relaxed mt-4">
              Menjadikan HMPS Administrasi Bisnis sebagai wadah aspirasi dan
              pusat pengembangan kompetensi yang unggul dan berdampak nyata.
            </p>
            <h4 className="font-black text-sm uppercase tracking-wider mt-6">
              UNGGUL &<br />
              BERDAMPAK
            </h4>
          </div>
          <div className="p-8 border-b sm:border-b-0 border-[#FFFBEB]/15 md:border-r flex flex-col justify-between min-h-[240px]">
            <span className="text-xs font-bold text-[#FFFBEB]/50 uppercase tracking-widest">
              MISI 01
            </span>
            <p className="text-[11px] text-[#FFFBEB]/70 leading-relaxed mt-4">
              Menjamin pelayanan prima dan advokasi transparan untuk aspirasi
              seluruh mahasiswa.
            </p>
            <h4 className="font-black text-sm uppercase tracking-wider mt-6 underline">
              PELAYANAN
              <br />& ADVOKASI
            </h4>
          </div>
          <div className="p-8 border-b sm:border-b-0 border-[#FFFBEB]/15 sm:border-r flex flex-col justify-between min-h-[240px]">
            <span className="text-xs font-bold text-[#FFFBEB]/50 uppercase tracking-widest">
              MISI 02
            </span>
            <p className="text-[11px] text-[#FFFBEB]/70 leading-relaxed mt-4">
              Mewujudkan sentra kolaborasi dan kreativitas mahasiswa.
            </p>
            <h4 className="font-black text-sm uppercase tracking-wider mt-6">
              KOLABORASI &<br />
              KREATIVITAS
            </h4>
          </div>
          <div className="p-8 flex flex-col justify-between min-h-[240px]">
            <span className="text-xs font-bold text-[#FFFBEB]/50 uppercase tracking-widest">
              MISI 03
            </span>
            <p className="text-[11px] text-[#FFFBEB]/70 leading-relaxed mt-4">
              Mewujudkan siklus organisasi yang profesional, transparan, dan
              berintegritas.
            </p>
            <h4 className="font-black text-sm uppercase tracking-wider mt-6">
              PROFESIONAL &<br />
              BERINTEGRITAS
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
