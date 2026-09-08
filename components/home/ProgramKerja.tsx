"use client";

import { useState } from "react";
import { X } from "lucide-react";

const programs = [
  {
    num: "P-01",
    name: "Invest Adbis",
    title: "Invest Adbis",
    desc: "Program kerja unggulan berbasis pengembangan investasi dan literasi finansial guna meningkatkan pemahaman serta keterlibatan mahasiswa dalam bidang bisnis dan pasar modal.",
    items: [
      "Edukasi Finansial & Pasar Modal",
      "Workshop Investasi Praktis",
      "Mentoring Pengembangan Aset",
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "P-02",
    name: "Bina Masyarakat",
    title: "Bina Masyarakat",
    desc: "Wujud pengabdian masyarakat nyata oleh HMPS Administrasi Bisnis untuk memberikan dampak sosial, pemberdayaan UMKM, serta pengabdian lingkungan yang berkelanjutan.",
    items: [
      "Pemberdayaan Ekonomi Lokal",
      "Pendampingan Bisnis UMKM",
      "Aksi Sosial Mahasiswa",
    ],
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "P-03",
    name: "Market Day",
    title: "Market Day",
    desc: "Ajang pameran dan bazaar kewirausahaan mahasiswa Administrasi Bisnis untuk menyimulasikan pengalaman bisnis nyata dan pemasaran produk secara profesional.",
    items: [
      "Exhibition Produk Mahasiswa",
      "B2C Sales Practice",
      "Networking & Tenant Showcase",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "P-04",
    name: "Sencrea",
    title: "SENCREA",
    desc: "Sentra Kreativitas Mahasiswa sebagai wadah eksplorasi bakat seni, budaya, serta apresiasi karya kreatif antar mahasiswa Administrasi Bisnis.",
    items: [
      "Pertunjukan Seni & Budaya",
      "Lomba Kreativitas Mahasiswa",
      "Apresiasi Karya Musik & Visual",
    ],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ProgramKerja() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      className="w-full text-[#FFFBEB] py-20 border-t border-[#FFFBEB]/10"
      id="prokerja"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 mb-16">
        <h2 className="text-6xl md:text-8xl font-black tracking-tight uppercase flex items-start">
          BIG PROKER{" "}
          <span className="text-xl md:text-3xl font-semibold ml-2 mt-2">
            (4)
          </span>
        </h2>
      </div>

      {/* Grid 2x2 with different sizes */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 grid grid-cols-2 gap-4 md:gap-6">
        {/* Top row */}
        <button
          type="button"
          onClick={() => setSelected(0)}
          className="relative rounded-2xl overflow-hidden cursor-pointer group h-[200px] sm:h-[250px] md:h-[350px] col-span-1"
        >
          <img
            src={programs[0].image}
            alt={programs[0].name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <span className="text-[10px] md:text-xs font-bold text-[#FF7AAC]">{programs[0].num}</span>
            <h3 className="text-sm sm:text-base md:text-xl font-black uppercase tracking-tight">{programs[0].name}</h3>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setSelected(1)}
          className="relative rounded-2xl overflow-hidden cursor-pointer group h-[200px] sm:h-[250px] md:h-[350px] col-span-1"
        >
          <img
            src={programs[1].image}
            alt={programs[1].name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <span className="text-[10px] md:text-xs font-bold text-[#FF7AAC]">{programs[1].num}</span>
            <h3 className="text-sm sm:text-base md:text-xl font-black uppercase tracking-tight">{programs[1].name}</h3>
          </div>
        </button>

        {/* Bottom row */}
        <button
          type="button"
          onClick={() => setSelected(2)}
          className="relative rounded-2xl overflow-hidden cursor-pointer group h-[200px] sm:h-[250px] md:h-[350px] col-span-1"
        >
          <img
            src={programs[2].image}
            alt={programs[2].name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <span className="text-[10px] md:text-xs font-bold text-[#FF7AAC]">{programs[2].num}</span>
            <h3 className="text-sm sm:text-base md:text-xl font-black uppercase tracking-tight">{programs[2].name}</h3>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setSelected(3)}
          className="relative rounded-2xl overflow-hidden cursor-pointer group h-[200px] sm:h-[250px] md:h-[350px] col-span-1"
        >
          <img
            src={programs[3].image}
            alt={programs[3].name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <span className="text-[10px] md:text-xs font-bold text-[#FF7AAC]">{programs[3].num}</span>
            <h3 className="text-sm sm:text-base md:text-xl font-black uppercase tracking-tight">{programs[3].name}</h3>
          </div>
        </button>
      </div>

      {/* Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-[#1a1850] border border-white/10 rounded-2xl max-w-lg w-full p-6 md:p-8 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4 text-[#FFFBEB]" />
            </button>

            <span className="text-[#FF7AAC] text-xs font-bold">{programs[selected].num}</span>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#FFFBEB]">
              {programs[selected].title}
            </h3>
            <p className="text-[#FFFBEB]/70 text-sm leading-relaxed">
              {programs[selected].desc}
            </p>
            <ul className="space-y-2 pt-2">
              {programs[selected].items.map((item, j) => (
                <li key={j} className="flex items-center gap-2 text-[#FFFBEB]/80 text-sm">
                  <span className="text-[#FF7AAC]">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
