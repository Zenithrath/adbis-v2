"use client";

import { motion } from "framer-motion";
import { Handshake, Zap, Compass, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Handshake,
    number: "01",
    title: "Sinergis",
    subtitle: "Merangkai Kekuatan Bersama",
    desc: "Mengedepankan kolaborasi aktif lintas angkatan dan pemangku kepentingan untuk mencapai visi yang harmonis dan melipatgandakan dampak.",
    bgColor: "#d3bff5",
    accentColor: "#5B21B6",
  },
  {
    icon: Zap,
    number: "02",
    title: "Inovatif & Progresif",
    subtitle: "Berani Membuka Batas",
    desc: "Menghadirkan terobosan program yang adaptif terhadap tren teknologi global dan dinamika industri bisnis masa kini.",
    bgColor: "#8fe3c6",
    accentColor: "#439775",
  },
  {
    icon: Compass,
    number: "03",
    title: "Inklusif & Merangkul",
    subtitle: "Ruang untuk Semua",
    desc: "Membuka pintu aspirasi selebar-lebarnya tanpa diskriminasi, menjadikan organisasi sebagai rumah yang aman dan bertumbuh.",
    bgColor: "#f6c6e0",
    accentColor: "#d946ef",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Berdampak Nyata",
    subtitle: "Aksi Bukan Sekadar Wacana",
    desc: "Setiap langkah dan karya diukur dari seberapa besar kebermanfaatannya bagi mahasiswa, universitas, dan masyarakat luas.",
    bgColor: "#f2e8d4",
    accentColor: "#E89B4F",
  },
];

export default function ValuesSection() {
  return (
    <section id="nilai" className="relative py-28 px-6 md:px-12 lg:px-20 bg-[#f9f4ed] text-[#2b2140] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E89B4F]/15 text-[#E89B4F] text-xs font-accent font-bold uppercase tracking-widest mb-4">
            Nilai Dasar • Budaya Kerja
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#2b2140] leading-tight mb-4">
            Empat Pilar Penggerak Kabinet
          </h2>
          <p className="font-body text-base text-[#2b2140]/70">
            Nilai-nilai luhur yang menjadi kompas moral dan pedoman perilaku seluruh pengurus dalam menjalankan roda organisasi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white rounded-3xl p-7 border border-black/5 shadow-sm card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                      style={{ backgroundColor: v.accentColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-accent font-black text-2xl text-[#2b2140]/20">
                      {v.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2b2140] mb-1">
                    {v.title}
                  </h3>
                  <p className="font-accent text-xs font-bold uppercase tracking-wider text-[#2b2140]/50 mb-3">
                    {v.subtitle}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-[#2b2140]/70 leading-relaxed">
                    {v.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: v.accentColor }} />
                  <span className="text-[11px] font-semibold text-[#2b2140]/60">Prinsip Sentra 2026</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
