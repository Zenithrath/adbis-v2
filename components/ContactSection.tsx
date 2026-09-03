"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Send, Mail, MapPin, CheckCircle2, Heart } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    nim: "",
    category: "Aspirasi & Saran",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", nim: "", category: "Aspirasi & Saran", message: "" });
    }, 4000);
  };

  return (
    <section id="kontak" className="relative py-28 px-6 md:px-12 lg:px-20 bg-[#f9f4ed] text-[#2b2140] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Story Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5B21B6]/10 text-[#5B21B6] text-xs font-accent font-bold uppercase tracking-widest mb-4">
              <MessageSquare className="w-3.5 h-3.5" /> Bab V • Ruang Bersuara
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#2b2140] leading-tight mb-6">
              Suaramu Adalah Arah Gerak Kami
            </h2>
            <p className="font-body text-base text-[#2b2140]/70 leading-relaxed mb-8">
              Punya ide program menarik, kritik membangun, atau butuh bantuan advokasi akademik? Pintu Sentra Nawasena selalu terbuka untuk mendengarkan setiap keluh kesah dan harapanmu.
            </p>

            <div className="space-y-4 font-body text-sm">
              <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-black/5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#5B21B6]/10 text-[#5B21B6] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#2b2140]/50 font-semibold">Email Aspirasi</p>
                  <p className="font-medium text-[#2b2140]">hmps.adbis@univ.ac.id</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-black/5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#439775]/10 text-[#439775] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#2b2140]/50 font-semibold">Sekretariat HMPS</p>
                  <p className="font-medium text-[#2b2140]">Gedung Student Center Lt. 2, Kampus Utama</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-black/5 shadow-xl"
          >
            <h3 className="font-serif text-2xl font-bold text-[#2b2140] mb-2">
              Kotak Aspirasi Mahasiswa
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#2b2140]/60 mb-6">
              Sampaikan pesanmu secara langsung. Identitas bisa dikosongkan (anonim) jika diinginkan.
            </p>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#439775]/10 text-[#439775] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#2b2140] mb-2">
                  Terima Kasih atas Suaramu!
                </h4>
                <p className="font-body text-sm text-[#2b2140]/70 max-w-md">
                  Pesanmu telah kami catat sebagai bahan evaluasi dan perbaikan program kabinet Sentra Nawasena.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2b2140]/70 mb-1">
                      Nama (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="Nama lengkap..."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF3E8]/70 border border-black/10 text-sm text-[#2b2140] placeholder:text-[#2b2140]/30 outline-none focus:border-[#5B21B6] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2b2140]/70 mb-1">
                      NIM / Angkatan (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Adbis '24"
                      value={formData.nim}
                      onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF3E8]/70 border border-black/10 text-sm text-[#2b2140] placeholder:text-[#2b2140]/30 outline-none focus:border-[#5B21B6] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2b2140]/70 mb-1">
                    Kategori Pesan
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF3E8]/70 border border-black/10 text-sm text-[#2b2140] outline-none focus:border-[#5B21B6] transition-colors"
                  >
                    <option>Aspirasi & Saran Program</option>
                    <option>Advokasi & Akademik</option>
                    <option>Kolaborasi & Sponsorship</option>
                    <option>Keluhan Fasilitas</option>
                    <option>Apresiasi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2b2140]/70 mb-1">
                    Isi Pesan / Ide <span className="text-[#FF0F67]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan aspirasi atau idemu dengan bebas di sini..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF3E8]/70 border border-black/10 text-sm text-[#2b2140] placeholder:text-[#2b2140]/30 outline-none focus:border-[#5B21B6] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#5B21B6] hover:bg-[#4c1d95] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Kirimkan Aspirasi
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
