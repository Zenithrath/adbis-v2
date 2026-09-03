"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Crown, Award, ChevronRight, Sparkles } from "lucide-react";

interface Member {
  name: string;
  role: string;
  major: string;
  image?: string;
  quote?: string;
}

interface Division {
  id: string;
  name: string;
  shortName: string;
  color: string;
  badgeBg: string;
  desc: string;
  leader: Member;
  coLeader?: Member;
  staffCount: number;
}

const DIVISIONS: Division[] = [
  {
    id: "bph",
    name: "Badan Pengurus Harian (BPH)",
    shortName: "BPH Inti",
    color: "#5B21B6",
    badgeBg: "#EDE9FE",
    desc: "Pemimpin poros komando organisasi, bertanggung jawab atas arah kebijakan strategis, koordinasi internal, dan kelancaran birokrasi kabinet.",
    leader: {
      name: "Raden Arya Pratama",
      role: "Ketua Himpunan (Kahim)",
      major: "Administrasi Bisnis '23",
      quote: "Menjadikan Adbis sebagai tempat berproses yang inklusif dan membumi.",
    },
    coLeader: {
      name: "Siti Nurhaliza",
      role: "Wakil Ketua Himpunan (Wakahim)",
      major: "Administrasi Bisnis '23",
      quote: "Sinergi adalah kunci melipatgandakan daya cipta mahasiswa.",
    },
    staffCount: 8,
  },
  {
    id: "akademik",
    name: "Departemen Akademik & Riset",
    shortName: "Akademik",
    color: "#439775",
    badgeBg: "#D9EAE3",
    desc: "Fokus pada penguatan kapasitas keilmuan, bimbingan studi, riset bisnis terapan, dan persiapan kompetisi akademik mahasiswa.",
    leader: {
      name: "Fajar Wicaksono",
      role: "Kepala Departemen",
      major: "Administrasi Bisnis '23",
      quote: "Eksplorasi ilmu bisnis modern untuk menjawab tantangan industri.",
    },
    staffCount: 6,
  },
  {
    id: "kewirausahaan",
    name: "Departemen Kewirausahaan & Bisnis",
    shortName: "KWU & Bisnis",
    color: "#E89B4F",
    badgeBg: "#FFFCE5",
    desc: "Inkubator bisnis mahasiswa, mengelola program Market Day, merchandise resmi, serta edukasi investasi modal pasar.",
    leader: {
      name: "Alvaro Maulana",
      role: "Kepala Departemen",
      major: "Administrasi Bisnis '23",
      quote: "Mengubah ide bisnis kreatif menjadi profit dan dampak nyata.",
    },
    staffCount: 7,
  },
  {
    id: "pengmas",
    name: "Departemen Pengabdian Masyarakat",
    shortName: "Pengmas",
    color: "#FF0F67",
    badgeBg: "#FFCFE1",
    desc: "Ujung tombak aksi kemanusiaan dan pemberdayaan masyarakat, menghubungkan mahasiswa dengan pelaku UMKM desa binaan.",
    leader: {
      name: "Anindya Putri",
      role: "Kepala Departemen",
      major: "Administrasi Bisnis '24",
      quote: "Ilmu yang berkah adalah ilmu yang dirasakan oleh sesama.",
    },
    staffCount: 6,
  },
  {
    id: "medinfo",
    name: "Departemen Media, Informasi & Kreatif",
    shortName: "Medinfo",
    color: "#454ADE",
    badgeBg: "#DADBF8",
    desc: "Pusat visual branding, pengelolaan media sosial, liputan acara, serta publikasi karya kreatif mahasiswa Adbis.",
    leader: {
      name: "Dimas Anggara",
      role: "Kepala Departemen",
      major: "Administrasi Bisnis '24",
      quote: "Menyampaikan narasi bermakna lewat estetika visual modern.",
    },
    staffCount: 8,
  },
  {
    id: "psdm",
    name: "Departemen Pengembangan SDM",
    shortName: "PSDM",
    color: "#8B6F5E",
    badgeBg: "#F2E8D4",
    desc: "Menjaga kehangatan, kaderisasi kepemimpinan, evaluasi kinerja pengurus, dan bonding keluarga besar HMPS Adbis.",
    leader: {
      name: "Nabila Aurellia",
      role: "Kepala Departemen",
      major: "Administrasi Bisnis '23",
      quote: "Tumbuh bersama, saling menjaga, dan menorehkan jejak terbaik.",
    },
    staffCount: 7,
  },
];

export default function StructureSection() {
  const [activeDivId, setActiveDivId] = useState<string>("bph");

  const currentDiv = DIVISIONS.find((d) => d.id === activeDivId) || DIVISIONS[0];

  return (
    <section id="struktur" className="relative py-28 px-6 md:px-12 lg:px-20 bg-[#FAF3E8] text-[#2b2140] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5B21B6]/10 text-[#5B21B6] text-xs font-accent font-bold uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" /> Bab IV • Struktur Organisasi
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#2b2140] leading-tight mb-4">
            Keluarga Besar Sentra Nawasena
          </h2>
          <p className="font-body text-base text-[#2b2140]/70">
            Dikelola oleh individu-individu berdedikasi tinggi yang siap membersamai langkah seluruh mahasiswa Administrasi Bisnis.
          </p>
        </motion.div>

        {/* Division Selector Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {DIVISIONS.map((d) => {
            const isSelected = d.id === activeDivId;
            return (
              <button
                key={d.id}
                onClick={() => setActiveDivId(d.id)}
                className={`relative px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#2b2140] text-white shadow-md scale-105"
                    : "bg-white text-[#2b2140]/70 hover:bg-black/5 hover:text-[#2b2140] border border-black/5"
                }`}
              >
                {d.shortName}
              </button>
            );
          })}
        </div>

        {/* Interactive Division Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDiv.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-xl"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-8 items-start mb-10 pb-8 border-b border-black/5">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-3" style={{ backgroundColor: currentDiv.badgeBg, color: currentDiv.color }}>
                  <Sparkles className="w-3.5 h-3.5" />
                  {currentDiv.name}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2b2140] mb-3">
                  {currentDiv.name}
                </h3>
                <p className="font-body text-sm sm:text-base text-[#2b2140]/75 leading-relaxed">
                  {currentDiv.desc}
                </p>
              </div>

              <div className="flex items-center gap-4 bg-[#FAF3E8] p-4 rounded-2xl border border-black/5 self-start">
                <Award className="w-8 h-8 text-[#5B21B6]" />
                <div>
                  <p className="font-accent font-black text-xl text-[#2b2140]">
                    {currentDiv.staffCount} Pengurus
                  </p>
                  <p className="font-body text-xs text-[#2b2140]/60">
                    Siap Mengabdi Sepenuh Hati
                  </p>
                </div>
              </div>
            </div>

            {/* Leaders Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Leader */}
              <div className="bg-[#FAF3E8]/80 rounded-2xl p-6 border border-black/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2">
                    <Crown className="w-4 h-4" />
                    {currentDiv.leader.role}
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#2b2140] mb-1">
                    {currentDiv.leader.name}
                  </h4>
                  <p className="font-body text-xs text-[#2b2140]/60 mb-4">
                    {currentDiv.leader.major}
                  </p>
                  {currentDiv.leader.quote && (
                    <blockquote className="font-serif italic text-sm text-[#2b2140]/80 border-l-2 border-[#5B21B6] pl-3 py-0.5">
                      "{currentDiv.leader.quote}"
                    </blockquote>
                  )}
                </div>
              </div>

              {/* Co-Leader or Department Focus */}
              {currentDiv.coLeader ? (
                <div className="bg-[#FAF3E8]/80 rounded-2xl p-6 border border-black/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2">
                      <Award className="w-4 h-4" />
                      {currentDiv.coLeader.role}
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#2b2140] mb-1">
                      {currentDiv.coLeader.name}
                    </h4>
                    <p className="font-body text-xs text-[#2b2140]/60 mb-4">
                      {currentDiv.coLeader.major}
                    </p>
                    {currentDiv.coLeader.quote && (
                      <blockquote className="font-serif italic text-sm text-[#2b2140]/80 border-l-2 border-[#5B21B6] pl-3 py-0.5">
                        "{currentDiv.coLeader.quote}"
                      </blockquote>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-[#FAF3E8]/80 rounded-2xl p-6 border border-black/5 flex flex-col justify-center items-start">
                  <span className="font-accent text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2">
                    Karakter Departemen
                  </span>
                  <p className="font-body text-sm text-[#2b2140]/75 leading-relaxed">
                    Didukung oleh staf muda kreatif yang solid, responsif terhadap dinamika mahasiswa, serta berkomitmen menghadirkan eksekusi program tanpa celah.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#5B21B6]">
                    <span>Sentra Nawasena Bersinergi</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
