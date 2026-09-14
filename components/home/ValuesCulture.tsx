"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import Stars from "@/components/ui/Stars";
import { Plus, Sparkle, DotGrid } from "@/components/ui/Decorations";

const VALUES = [
  {
    no: "01",
    title: "Profesional",
    desc: "Amanah dijalankan dengan standar tinggi, disiplin, dan tanggung jawab penuh.",
    color: "#A78BFA",
  },
  {
    no: "02",
    title: "Kolaboratif",
    desc: "Sinergi lintas angkatan dan stakeholder untuk dampak berlipat.",
    color: "#F9A8D4",
  },
  {
    no: "03",
    title: "Integritas",
    desc: "Transparan, jujur, dan konsisten antara kata dan aksi.",
    color: "#BFDBFE",
  },
  {
    no: "04",
    title: "Adaptif",
    desc: "Cepat tanggap terhadap tren teknologi dan dinamika industri.",
    color: "#FF7AAC",
  },
  {
    no: "05",
    title: "Berdampak",
    desc: "Setiap program diukur dari manfaat nyata bagi mahasiswa dan masyarakat.",
    color: "#FFF2B2",
  },
];

const CULTURES = [
  { title: "Komunikasi Terbuka", desc: "Ruang aspirasi dua arah tanpa sekat." },
  { title: "Ketepatan Waktu", desc: "Disiplin waktu sebagai bentuk profesionalisme." },
  { title: "Saling Mendukung", desc: "Gotong royong dan empati antar pengurus." },
  { title: "Proaktif", desc: "Inisiatif sebelum diminta, solusi sebelum masalah." },
  { title: "Evaluasi & Perbaikan", desc: "Refleksi rutin untuk tumbuh berkelanjutan." },
  { title: "Profesional nan Humanis", desc: "Tegas pada target, hangat pada manusia." },
];

export default function ValuesCulture() {
  return (
    <section
      className="cv-auto relative w-full text-[#FFFBEB] py-20 md:py-28 border-t border-white/10 overflow-hidden"
      id="values"
    >
      <Stars className="absolute bottom-12 left-6 md:left-14 w-10 md:w-14 animate-float-slow-reverse" />
      <DotGrid rows={4} cols={6} className="absolute top-10 right-4 md:right-10 w-24 md:w-32 opacity-30 animate-float-slow" color="#FFF4C6" />
      <div className="max-w-[1400px] mx-auto px-5 md:px-16">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="section-pill mb-5">
                <span className="section-pill-dot" />
                Nilai & Budaya
                <Plus className="w-3.5 h-3.5 shrink-0" color="#FC75A7" />
              </span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tight uppercase leading-[0.9]">
                Values
                <br />
                & Culture
                <Sparkle className="inline-block w-6 h-6 md:w-9 md:h-9 ml-4 -mt-3 align-middle" color="#FC75A7" />
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-sm text-[#FFFBEB]/60 leading-relaxed">
                Lima nilai sebagai kompas, enam budaya sebagai napas
                keseharian pengurus Kabinet Sentra Nawasena.
              </p>
              <Link
                href="/tentang"
                className="group inline-flex items-center gap-2 mt-4 text-[11px] font-bold uppercase tracking-widest text-[#FFA6C8] hover:text-white transition-colors"
              >
                Selengkapnya tentang kabinet
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* A. Organizational Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {VALUES.map((v, i) => {
            return (
              <Reveal key={v.title} delay={(i % 5) * 0.07} y={20}>
                <div className="group bg-white/[0.07] backdrop-blur-sm max-md:backdrop-blur-none max-md:bg-white/[0.09] max-md:border-white/20 border border-white/15 rounded-2xl p-6 flex flex-col h-full transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-1.5 [@media(hover:hover)]:hover:bg-white/[0.1] [@media(hover:hover)]:hover:border-white/25">
                  <span
                    className="text-4xl font-black tabular-nums leading-none mb-6"
                    style={{ color: v.color }}
                  >
                    {v.no}
                  </span>
                  <h3 className="text-lg font-black uppercase tracking-tight leading-none mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/70 mt-auto">
                    {v.desc}
                  </p>
                  <span
                    className="mt-5 h-0.5 w-8 rounded-full transition-all duration-300 [@media(hover:hover)]:group-hover:w-full max-md:w-full"
                    style={{ backgroundColor: v.color }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* B. Organizational Culture */}
        <Reveal className="mt-14 md:mt-20">
          <div className="mb-8 border-b border-white/10 pb-6">
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-none">
              Budaya Organisasi{" "}
              <span className="align-top text-sm font-semibold text-white/40">(6)</span>
            </h3>
          </div>
        </Reveal>

        <div className="border-t border-white/10">
          {CULTURES.map((c, i) => {
            return (
              <Reveal key={c.title} delay={Math.min(i * 0.05, 0.2)} y={16}>
                <div className="flex items-center gap-5 md:gap-8 py-5 md:py-6 border-b border-white/10">
                  <span className="font-mono text-xs font-bold tabular-nums text-white/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-extrabold uppercase tracking-tight text-sm md:text-lg leading-tight">
                      {c.title}
                    </h4>
                    <p className="text-xs md:text-sm text-white/65 mt-1">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
