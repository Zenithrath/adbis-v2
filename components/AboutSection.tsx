"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Compass, HeartHandshake, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="tentang" className="relative py-28 px-6 md:px-12 lg:px-20 bg-[#FAF3E8] text-[#2b2140] overflow-hidden">
      {/* Ambient background blur elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#d3bff5]/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#f6c6e0]/30 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5B21B6]/10 text-[#5B21B6] text-xs font-accent font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Bab III • Tentang Sentra Nawasena
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#2b2140] leading-tight mb-6">
            Sebuah Poros Kolaborasi Menuju Masa Depan Gemilang
          </h2>
          <p className="font-body text-base md:text-lg text-[#2b2140]/70 leading-relaxed">
            Himpunan Mahasiswa Program Studi Administrasi Bisnis periode 2026 hadir dengan nafas baru: menyatukan seluruh elemen mahasiswa, menumbuhkan jiwa kepemimpinan & entrepreneurship, serta menciptakan dampak sosial yang berkelanjutan.
          </p>
        </motion.div>

        {/* Visi & Misi Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visi - Large Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-black/5 shadow-sm card-hover flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-[#5B21B6] text-white mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="font-accent text-xs font-bold uppercase tracking-widest text-[#5B21B6] block mb-2">
                Visi Strategis
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2b2140] leading-snug mb-4">
                "Mewujudkan HMPS Administrasi Bisnis yang Sinergis, Inklusif, dan Progresif sebagai Katalisator Potensi Unggul."
              </h3>
              <p className="font-body text-sm sm:text-base text-[#2b2140]/70 leading-relaxed">
                Menjadi rumah yang hangat bagi seluruh civitas akademika, wadah eksplorasi ide bisnis kreatif, serta jembatan penghubung antara dunia akademik, industri modern, dan pengabdian nyata kepada masyarakat.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-black/5 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-accent font-black text-2xl sm:text-3xl text-[#5B21B6]">6+</p>
                <p className="font-body text-xs text-[#2b2140]/60 mt-0.5">Departemen</p>
              </div>
              <div>
                <p className="font-accent font-black text-2xl sm:text-3xl text-[#E89B4F]">15+</p>
                <p className="font-body text-xs text-[#2b2140]/60 mt-0.5">Program Kerja</p>
              </div>
              <div>
                <p className="font-accent font-black text-2xl sm:text-3xl text-[#8fe3c6]">500+</p>
                <p className="font-body text-xs text-[#2b2140]/60 mt-0.5">Mahasiswa Aktif</p>
              </div>
            </div>
          </motion.div>

          {/* Misi - 3 Stacked Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between gap-4"
          >
            <div className="bg-[#9B8FE8]/15 rounded-3xl p-6 border border-[#9B8FE8]/30 card-hover">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5B21B6] text-white flex items-center justify-center font-accent font-bold text-xs">
                  01
                </span>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#2b2140] mb-1">Penguatan Ekosistem Akademik</h4>
                  <p className="font-body text-xs sm:text-sm text-[#2b2140]/70 leading-relaxed">
                    Mendorong iklim literasi bisnis, riset terapan, dan kesiapan karir profesional melalui pelatihan berbobot.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#8fe3c6]/20 rounded-3xl p-6 border border-[#8fe3c6]/40 card-hover">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#439775] text-white flex items-center justify-center font-accent font-bold text-xs">
                  02
                </span>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#2b2140] mb-1">Inkubasi Kewirausahaan</h4>
                  <p className="font-body text-xs sm:text-sm text-[#2b2140]/70 leading-relaxed">
                    Menyediakan ruang inkubasi dan fasilitasi pendanaan rintisan bisnis mahasiswa menuju pasar nyata.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#E8C4B8]/25 rounded-3xl p-6 border border-[#E8C4B8]/50 card-hover">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E89B4F] text-white flex items-center justify-center font-accent font-bold text-xs">
                  03
                </span>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#2b2140] mb-1">Aksi Sosial & Pengabdian</h4>
                  <p className="font-body text-xs sm:text-sm text-[#2b2140]/70 leading-relaxed">
                    Menyalurkan kontribusi positif bagi kemandirian ekonomi masyarakat dan UMKM sekitar kampus.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
