"use client";

import { motion } from "framer-motion";
import { CreativeCard, FeatureCard, RoadmapStep, TipCard } from "@/components/CreativeCards";
import roadmap from "@/data/roadmap.json";

export default function HubPage() {
  return (
    <div className="flex flex-col bg-[#f8f7ff]">
      {/* Header — violet */}
      <section className="hero-violet relative overflow-hidden border-b-[3px] border-[#2d2a32]">
        <div className="hero-dots-pattern" />
        <div className="hero-texture-lines" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
          <span className="inline-flex bg-white px-4 py-1.5 rounded-full font-black text-xs tracking-[0.08em] text-[#2d2a32] shadow">✦ ADBIS HUB — 05</span>
          <h1 className="mt-4 syne-black text-3xl sm:text-5xl leading-[0.9] tracking-[-0.02em]">
            <span className="text-[#fff9c4]">ADBIS</span> <span className="text-[#ff9ebb]">HUB</span>
          </h1>
          <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-white/80 max-w-2xl mx-auto">
            Pusat layanan & informasi mahasiswa — recruitment, aspirasi, dan career preparation roadmap.
          </p>
        </div>
      </section>

      {/* 3 Services — Feature Cards */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          <FeatureCard
            icon="📝"
            title="Open Recruitment"
            desc="Daftar jadi bagian Sentra Nawasena. Isi form & tunggu seleksi!"
            ctaText="BUKA FORM"
            ctaHref="https://docs.google.com/forms/d/e/1FAIpQLSc4_cfEm6E5W-xbkWop6pdyAb_XsuGB0lJ-BJ5_S0hibLSdqQ/viewform"
            color="cream"
            index={0}
            external
          />
          <FeatureCard
            icon="💬"
            title="Aspirasi Mahasiswa"
            desc="Punya ide, keluhan, atau saran? Sampaikan di sini — transparan & advokasi prima."
            ctaText="KIRIM ASPIRASI"
            ctaHref="https://forms.gle/jWh8TNG5hoUVDC2x7"
            color="blue"
            index={1}
            external
          />
          <FeatureCard
            icon="🚀"
            title="Career Preparation"
            desc="Panduan step-by-step dari kenali diri sampai siap kerja."
            ctaText="LIHAT ROADMAP"
            ctaHref="#roadmap"
            color="pink"
            index={2}
          />
        </div>
      </section>

      {/* Career Roadmap — Violet Section */}
      <section id="roadmap" className="hero-violet relative border-y-[3px] border-[#2d2a32] py-12 sm:py-16 overflow-hidden">
        <div className="hero-dots-pattern !h-full opacity-20" style={{ maskImage: "none", WebkitMaskImage: "none" }} />
        <div className="hero-texture-lines opacity-10" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex bg-white border-2 border-[#2d2a32] px-3 py-1 rounded-full font-black text-xs tracking-[0.08em] shadow-[2px_2px_0_#fff9c4] text-[#2d2a32]">✦ CAREER PREPARATION ROADMAP</span>
              <h2 className="mt-3 syne-black text-2xl sm:text-3xl leading-tight text-white">Dari Maba Sampai<br/><span className="text-[#fff9c4]">Siap Berkarier</span></h2>
            </div>
            <p className="text-sm text-white/70 max-w-md font-bold">Ikuti alurnya tiap semester — bangun skill, magang, sampai graduation ready.</p>
          </div>

          <div className="relative">
            <div className="hidden sm:block absolute left-[30px] top-8 bottom-8 w-1 bg-[#2d2a32] rounded-full" />
            <div className="flex flex-col gap-5">
              {roadmap.map((step, i) => (
                <RoadmapStep
                  key={step.phase}
                  phase={step.phase}
                  title={step.title}
                  desc={step.desc}
                  icon={step.icon}
                  color={step.color}
                  isLast={i === roadmap.length - 1}
                  index={i}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <TipCard title="LinkedIn" desc="Update LinkedIn tiap semester!" bgColor="#fff9c4" index={0} />
            <TipCard title="Organisasi" desc="Ikut organisasi minimal 1 tahun." bgColor="#c4ccff" index={1} />
            <TipCard title="Magang" desc="Magang di Semester 5, jangan telat." bgColor="#ff9ebb" index={2} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <CreativeCard className="overflow-hidden">
          <div className="bg-[#3f41cc] text-white border-b-[3px] border-[#2d2a32] px-5 py-3 flex items-center justify-between">
            <span className="font-black text-xs tracking-[0.12em]">CONTACT.EXE ✦</span>
            <span className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-white border-2 border-[#2d2a32]" /><span className="w-2.5 h-2.5 rounded-full bg-[#fff9c4] border-2 border-[#2d2a32]" /><span className="w-2.5 h-2.5 rounded-full bg-[#ff9ebb] border-2 border-[#2d2a32]" /></span>
          </div>
          <div className="p-6 sm:p-8 grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="syne-black text-xl sm:text-2xl leading-tight text-[#2d2a32]">Hubungi<br/>Sentra Nawasena</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#2d2a32]/60">Ada pertanyaan, kolaborasi, atau media partnership? Reach us!</p>
              <div className="mt-6 space-y-3">
                <motion.a
                  href="https://instagram.com/hmpsabisbrawijaya"
                  target="_blank"
                  className="flex items-center gap-3 p-3 bg-[#f8f7ff] border-2 border-[#2d2a32] rounded-2xl hover:bg-white transition"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="w-10 h-10 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] rounded-xl flex items-center justify-center text-white text-sm border-2 border-[#2d2a32]">📸</span>
                  <span><p className="font-black text-[11px] tracking-wide text-[#2d2a32]">INSTAGRAM</p><p className="syne-black text-sm text-[#2d2a32]">@hmpsabisbrawijaya</p></span><span className="ml-auto text-[#2d2a32]">→</span>
                </motion.a>
                <motion.a
                  href="https://tiktok.com/@hmpsabisub"
                  target="_blank"
                  className="flex items-center gap-3 p-3 bg-[#f8f7ff] border-2 border-[#2d2a32] rounded-2xl hover:bg-white transition"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="w-10 h-10 bg-[#2d2a32] rounded-xl flex items-center justify-center text-white text-sm border-2 border-[#2d2a32]">♪</span>
                  <span><p className="font-black text-[11px] tracking-wide text-[#2d2a32]">TIKTOK</p><p className="syne-black text-sm text-[#2d2a32]">@hmpsabisub</p></span><span className="ml-auto text-[#2d2a32]">→</span>
                </motion.a>
                <motion.a
                  href="mailto:sentranawasena@gmail.com"
                  className="flex items-center gap-3 p-3 bg-[#f8f7ff] border-2 border-[#2d2a32] rounded-2xl hover:bg-white transition"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="w-10 h-10 bg-[#c4ccff] rounded-xl flex items-center justify-center text-sm border-2 border-[#2d2a32]">✉️</span>
                  <span><p className="font-black text-[11px] tracking-wide text-[#2d2a32]">EMAIL</p><p className="syne-black text-sm text-[#2d2a32]">sentranawasena@gmail.com</p></span><span className="ml-auto text-[#2d2a32]">→</span>
                </motion.a>
              </div>
            </div>

            <div className="bg-[#2d2a32] rounded-[20px] p-6 text-white flex flex-col">
              <p className="font-black text-xs tracking-[0.16em] text-[#ff9ebb]">✦ QUICK LINKS</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc4_cfEm6E5W-xbkWop6pdyAb_XsuGB0lJ-BJ5_S0hibLSdqQ/viewform"
                  target="_blank"
                  className="bg-white text-[#2d2a32] p-4 rounded-2xl border-2 border-white hover:bg-[#fff9c4] transition"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="syne-black text-sm leading-tight">Open Recruitment</p><p className="text-xs opacity-60 mt-1">Daftar HMPS →</p>
                </motion.a>
                <motion.a
                  href="https://forms.gle/jWh8TNG5hoUVDC2x7"
                  target="_blank"
                  className="bg-[#c4ccff] text-[#2d2a32] p-4 rounded-2xl border-2 border-white hover:bg-[#c4ccff] transition"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="syne-black text-sm leading-tight">Aspirasi</p><p className="text-xs opacity-60 mt-1">Suarakan →</p>
                </motion.a>
                <motion.a
                  href="/about"
                  className="bg-[#fff9c4] text-[#2d2a32] p-4 rounded-2xl border-2 border-white hover:bg-white transition col-span-2"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="syne-black text-sm leading-tight">Tentang Kabinet ✦</p><p className="text-xs opacity-60 mt-1">Kenali visi, misi & values</p>
                </motion.a>
              </div>
              <div className="mt-auto pt-6">
                <p className="font-black text-[10px] tracking-[0.14em] text-white/40">HMPS ADMINISTRASI BISNIS — UNIVERSITAS BRAWIJAYA</p>
                <p className="syne-black text-sm mt-1">merangkai sinergi wujudkan aksi ✦</p>
              </div>
            </div>
          </div>
        </CreativeCard>
      </section>
    </div>
  );
}