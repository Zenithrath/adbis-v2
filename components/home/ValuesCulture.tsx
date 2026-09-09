"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

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
      className="cv-auto w-full text-[#FFFBEB] py-20 md:py-28 border-t border-white/10"
      id="values"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="section-pill mb-5">
                <span className="section-pill-dot" />
                Nilai & Budaya
              </span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tight uppercase leading-[0.9]">
                Values
                <br />& Culture
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-sm text-[#FFFBEB]/60 leading-relaxed">
                Lima nilai sebagai kompas, enam budaya sebagai napas
                keseharian pengurus Kabinet Sentra Nawasena.
              </p>
              <Link
                href="/about"
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
                <div className="group bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.08] hover:border-white/20">
                  <span
                    className="text-4xl font-black tabular-nums leading-none mb-6 transition-colors"
                    style={{ color: `${v.color}55` }}
                  >
                    {v.no}
                  </span>
                  <h3 className="text-lg font-black uppercase tracking-tight leading-none mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/50 mt-auto">
                    {v.desc}
                  </p>
                  <span
                    className="mt-5 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-full"
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
                  <span className="font-mono text-xs font-bold tabular-nums text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-extrabold uppercase tracking-tight text-sm md:text-lg leading-tight">
                      {c.title}
                    </h4>
                    <p className="text-xs md:text-sm text-white/50 mt-1">{c.desc}</p>
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
