"use client";

import Link from "next/link";

export default function About() {
  return (
    <section
      className="w-full text-[#FFFBEB] py-20 px-8 md:px-16 border-t border-white/10"
      id="about"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top: Tentang + Deskripsi */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#FF7AAC] block mb-3">
                • TENTANG KABINET
              </span>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] max-w-2xl">
                PUSAT PENGGERAK INTI BERORIENTASI MASA DEPAN CERAH.
              </h3>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-white/40 leading-relaxed">
                PUSAT PENGGERAK INTI — MASA DEPAN YANG CERAH
              </p>
            </div>
          </div>
          <div className="md:col-span-6">
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
          </div>
        </div>

        {/* Visi Misi Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-white/15">
          <div className="p-8 border-b sm:border-b-0 border-white/15 sm:border-r flex flex-col justify-between min-h-[240px] bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-bold text-[#FF7AAC] uppercase tracking-widest">
              VISI KABINET
            </span>
            <p className="text-xs text-white/70 font-medium leading-relaxed mt-4">
              Menjadikan HMPS Administrasi Bisnis sebagai wadah aspirasi dan
              pusat pengembangan kompetensi yang unggul dan berdampak nyata.
            </p>
            <h4 className="font-black text-sm uppercase tracking-wider mt-6">
              UNGGUL &<br />
              BERDAMPAK
            </h4>
          </div>
          <div className="p-8 border-b sm:border-b-0 border-white/15 md:border-r flex flex-col justify-between min-h-[240px] bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-bold text-white/50 uppercase tracking-widest">
              MISI 01
            </span>
            <p className="text-[11px] text-white/60 leading-relaxed mt-4">
              Menjamin pelayanan prima dan advokasi transparan untuk aspirasi
              seluruh mahasiswa.
            </p>
            <h4 className="font-black text-sm uppercase tracking-wider mt-6 underline">
              PELAYANAN
              <br />& ADVOKASI
            </h4>
          </div>
          <div className="p-8 border-b sm:border-b-0 border-white/15 sm:border-r flex flex-col justify-between min-h-[240px] bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-bold text-white/50 uppercase tracking-widest">
              MISI 02
            </span>
            <p className="text-[11px] text-white/60 leading-relaxed mt-4">
              Mewujudkan sentra kolaborasi dan kreativitas mahasiswa.
            </p>
            <h4 className="font-black text-sm uppercase tracking-wider mt-6">
              KOLABORASI &<br />
              KREATIVITAS
            </h4>
          </div>
          <div className="p-8 flex flex-col justify-between min-h-[240px] bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-bold text-white/50 uppercase tracking-widest">
              MISI 03
            </span>
            <p className="text-[11px] text-white/60 leading-relaxed mt-4">
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
