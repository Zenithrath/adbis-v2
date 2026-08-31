"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HorizontalScroll, { HScrollCard } from "@/components/HorizontalScroll";
import { ProgramCard, EventCard, FeatureCard } from "@/components/CreativeCards";
import events from "@/data/events.json";

const Sparkle = ({ sm = false, className = "" }: { sm?: boolean; className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${sm ? "w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" : "w-[22px] h-[22px] sm:w-[26px] sm:h-[26px]"} fill-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)] ${className}`}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const flagship = [
  { title: "INVEST ADBIS", dept: "PSDM", desc: "Investasi ilmu & skill terbesar tahun ini.", icon: "⚡", tag: "FLAGSHIP", color: "pink" as const },
  { title: "BINA MASYARAKAT", dept: "SOSMAS", desc: "Pengabdian berkelanjutan untuk masyarakat.", icon: "💗", tag: "SOCIAL", color: "blue" as const },
  { title: "MARKET DAY", dept: "BUMH", desc: "Bazar karya & market mahasiswa.", icon: "🛍️", tag: "BIZ", color: "cream" as const },
  { title: "SENCREA", dept: "MINBAK", desc: "Panggung seni & kreativitas Adbis.", icon: "🎨", tag: "CREATIVE", color: "violet" as const },
];

export default function Home() {
  return (
    <div className="flex flex-col bg-[#f8f7ff]">
      {/* HERO — EXACT REPLICA */}
      <section className="hero-violet relative w-full min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] flex flex-col justify-between items-center px-5 py-8 sm:py-10 overflow-hidden">
        <div className="hero-dots-pattern" />
        <div className="hero-texture-lines" />

        <div className="relative z-[2] flex items-center gap-2 bg-white/95 px-5 py-1.5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.15)] mt-2">
          <span className="w-7 h-7 rounded-full bg-[#3f41cc] flex items-center justify-center text-white font-black text-[10px]">UB</span>
          <span className="w-[1px] h-4 bg-black/10" />
          <span className="w-7 h-7 rounded-full bg-[#2e269c] flex items-center justify-center text-white font-black text-[9px]">FIA</span>
          <span className="w-[1px] h-4 bg-black/10" />
          <span className="w-7 h-7 rounded-full bg-[#ff9ebb] flex items-center justify-center text-[#2d2a32] font-black text-[8px]">HMPS</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-[2] text-center max-w-[980px] flex flex-col items-center justify-center flex-1 py-8 sm:py-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center justify-center gap-3 sm:gap-4"
          >
            <span className="flex items-center gap-1"><Sparkle sm /><Sparkle /></span>
            <span className="syne-black text-[clamp(1.9rem,4.5vw,3.6rem)] leading-none text-[#fff9c4] tracking-[0.04em] drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">KABINET</span>
            <span className="flex items-center gap-1"><Sparkle /><Sparkle sm /></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="syne-black text-[clamp(2.6rem,8.5vw,6.8rem)] leading-[0.9] tracking-[-0.02em] mt-1"
          >
            <span className="text-[#ff9ebb] drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">SENTRA</span>{" "}
            <span className="text-[#c4ccff] drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">NAWASENA</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-6 flex items-center justify-center gap-3 sm:gap-4"
          >
            <span className="hidden sm:flex items-center gap-1"><Sparkle sm /><Sparkle /></span>
            <div className="relative px-6 sm:px-8 py-1.5 bg-transparent border-2 border-white/85 rounded-[2px] shadow-[-5px_5px_0_#fff9c4]">
              <span className="syne-black text-[clamp(1.05rem,2.5vw,2rem)] tracking-[0.08em] text-[#fff9c4] drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)]">PERIODE 2026</span>
            </div>
            <span className="hidden sm:flex items-center gap-1"><Sparkle /><Sparkle sm /></span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-5 text-white/90 text-sm sm:text-base font-semibold tracking-wide max-w-[560px]"
          >
            merangkai sinergi wujudkan aksi — Pusat Penggerak Inti berorientasi Masa Depan Cerah
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-7 flex flex-wrap justify-center gap-3"
          >
            <motion.a
              href="/about"
              className="bg-[#fff9c4] text-[#2d2a32] border-2 border-[#2d2a32] px-7 py-3 rounded-full font-black text-sm shadow-[4px_4px_0_#2d2a32] hover:shadow-[6px_6px_0_#2d2a32] hover:-translate-y-0.5 transition"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              EXPLORE KABINET →
            </motion.a>
            <motion.a
              href="/programs"
              className="bg-transparent text-white border-2 border-white px-7 py-3 rounded-full font-black text-sm hover:bg-white hover:text-[#2d2a32] transition"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              LIHAT PROKER ✦
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="relative z-[2] flex flex-wrap justify-center gap-3 sm:gap-5 text-xs sm:text-sm font-bold text-white/85">
          <span>@hmpsadbisub</span>
          <span className="opacity-60">•</span>
          <span>@hmpsadbisbrawijaya</span>
          <span className="opacity-60">•</span>
          <span>HMPSAdbis UB</span>
        </div>
      </section>

      {/* FLAGSHIP PROGRAMS — Creative Cards */}
      <section className="hero-violet relative border-y-[3px] border-[#2d2a32] py-14 sm:py-20 overflow-hidden">
        <div className="hero-dots-pattern !h-full opacity-20" style={{ maskImage: "none", WebkitMaskImage: "none" }} />
        <div className="hero-texture-lines opacity-10" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-white text-[#2d2a32] px-3 py-1.5 rounded-full font-black text-xs tracking-[0.08em] border-2 border-[#2d2a32] shadow-[2px_2px_0_#fff9c4]">✦ FLAGSHIP PROGRAMS</span>
              <h2 className="mt-3 syne-black text-2xl sm:text-3xl text-white">Highlight 4 <span className="text-[#ff9ebb]">Proker</span> <span className="text-[#fff9c4]">Himpunan</span></h2>
              <p className="mt-2 text-white/70 text-sm font-bold">4 unggulan dari 27 program kabinet</p>
            </div>
            <Link href="/programs" className="hidden sm:inline-flex items-center gap-2 text-sm font-black border-2 border-[#2d2a32] px-4 py-2 rounded-full shadow-[2px_2px_0_#2d2a32] hover:shadow-[3px_3px_0_#2d2a32] hover:-translate-y-0.5 transition bg-[#fff9c4] text-[#2d2a32]">
              LIHAT SEMUA 27 PROKER →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {flagship.map((item, i) => (
              <ProgramCard
                key={item.title}
                title={item.title}
                dept={item.dept}
                desc={item.desc}
                icon={item.icon}
                tag={item.tag}
                color={item.color}
                index={i}
              />
            ))}
          </div>
          <Link href="/programs" className="sm:hidden mt-6 inline-flex w-full justify-center items-center gap-2 text-sm font-black border-2 border-[#2d2a32] px-4 py-3 rounded-full shadow-[2px_2px_0_#2d2a32] bg-[#fff9c4] text-[#2d2a32]">
            LIHAT SEMUA PROKER →
          </Link>
        </div>
      </section>

      {/* UPCOMING EVENTS — Horizontal Scroll */}
      <section className="bg-[#3f41cc] border-y-[3px] border-[#2d2a32] relative overflow-hidden py-10 sm:py-16">
        <div className="hero-dots-pattern !h-full opacity-40" style={{ maskImage: "none", WebkitMaskImage: "none" }} />
        <div className="hero-texture-lines opacity-20" />
        <div className="relative">
          <HorizontalScroll title="✦ UPCOMING EVENTS" subtitle="Jangan Ketinggalan Moment Adbis!" dark>
            {events.map((ev, i) => (
              <EventCard
                key={ev.id}
                title={ev.title}
                dept={ev.dept}
                desc={ev.desc}
                date={ev.date}
                tag={ev.tag}
                color={(ev.color as "pink" | "blue" | "cream")}
                index={i}
              />
            ))}
            <EventCard title="" dept="" desc="" date="" tag="" color="pink" isLast index={events.length} />
          </HorizontalScroll>
        </div>
      </section>

      {/* SERVICES CARDS */}
      <section className="bg-[#f8f7ff] py-10 sm:py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex bg-[#3f41cc] text-white px-3 py-1.5 rounded-full font-black text-xs tracking-[0.08em]">✦ LAYANAN UTAMA</span>
            <h2 className="mt-3 syne-black text-2xl sm:text-3xl text-[#2d2a32]">Semua Akses Di Satu Tempat</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
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
              ctaHref="/hub"
              color="pink"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* CTA — POSTER VIOLET */}
      <section className="hero-violet relative border-t-[3px] border-[#2d2a32] py-10 sm:py-14 overflow-hidden">
        <div className="hero-dots-pattern !h-full opacity-20" style={{ maskImage: "none", WebkitMaskImage: "none" }} />
        <div className="hero-texture-lines opacity-10" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="pixel-window rounded-[28px] bg-white p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[8px_8px_0_#2d2a32]">
            <div>
              <span className="inline-flex bg-[#3f41cc] text-white px-3 py-1 rounded-full font-black text-xs tracking-[0.08em]">✦ READY TO JOIN?</span>
              <h3 className="mt-3 syne-black text-2xl sm:text-3xl leading-none text-[#2d2a32]">Jadi Bagian dari <span className="text-[#3f41cc]">Sentra Nawasena</span></h3>
              <p className="mt-3 text-sm text-[#2d2a32]/60 max-w-md">Open recruitment, aspirasi mahasiswa, dan roadmap karier — semua ada di Adbis Hub.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <motion.a
                href="/hub"
                className="bg-[#3f41cc] text-white border-2 border-[#2d2a32] px-8 py-3.5 rounded-full font-black text-sm shadow-[4px_4px_0_#fff9c4] hover:shadow-[6px_6px_0_#fff9c4] hover:-translate-y-0.5 transition"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                MASUK ADBIS HUB →
              </motion.a>
              <motion.a
                href="/about"
                className="bg-[#fff9c4] border-2 border-[#2d2a32] px-8 py-3.5 rounded-full font-black text-sm shadow-[3px_3px_0_#2d2a32] text-[#2d2a32]"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                KENAL KABINET
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}