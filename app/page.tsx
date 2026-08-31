"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HorizontalScroll, { HScrollCard } from "@/components/HorizontalScroll";
import { ProgramCard, EventCard, FeatureCard } from "@/components/CreativeCards";
import events from "@/data/events.json";

const Sparkle = ({ sm = false, className = "", fill = "currentColor" }: { sm?: boolean; className?: string; fill?: string }) => (
  <svg viewBox="0 0 24 24" className={`${sm ? "w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" : "w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"} ${className}`} style={{ fill }}>
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
    <div className="flex flex-col bg-[#FFF8EF]">
      {/* HERO — PASTEL CARTOON PIXEL ELEGANT */}
      <section className="relative w-full min-h-[100svh] bg-[#FFF8EF] overflow-hidden flex flex-col">
        {/* pastel halftone + subtle texture + soft blobs — only 12-15% visual */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `radial-gradient(#3F41CC 1.1px, transparent 1.1px)`, backgroundSize: '14px 14px' }} />
          <div className="absolute inset-0 opacity-[0.035]" style={{ background: `repeating-linear-gradient(90deg, transparent 0, transparent 21.5%, rgba(32,36,92,0.07) 21.6%, transparent 21.7%)` }} />
          <div className="absolute -top-28 -right-28 w-[560px] h-[560px] bg-[#C4CCFF]/20 rounded-full blur-[60px]" />
          <div className="absolute -bottom-40 -left-36 w-[480px] h-[480px] bg-[#FF9EBB]/14 rounded-full blur-[55px]" />
          {/* thin pixel dotted bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-[6px] opacity-30" style={{ backgroundImage: `repeating-linear-gradient(90deg, #20245C 0 6px, transparent 6px 12px)` }} />
        </div>

        {/* edge pixel window — cartoon accent, not competing, hidden on mobile */}
        <div className="absolute right-[-10px] top-[52%] -translate-y-1/2 hidden xl:flex w-[300px] h-[360px] bg-white border-[3px] border-[#20245C] rounded-[22px] shadow-[7px_7px_0_#20245C] overflow-hidden rotate-[-1.2deg] z-[1] pointer-events-none">
          <div className="h-[30px] bg-[#C4CCFF] border-b-[3px] border-[#20245C] flex items-center px-3 gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white border border-[#20245C]/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9EBB] border border-[#20245C]/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFF9C4] border border-[#20245C]/30" />
            <span className="ml-auto text-[9px] font-black tracking-[0.12em] text-[#20245C]/60">HMPS_ADBIS.EXE</span>
          </div>
          <div className="p-5 flex flex-col gap-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square rounded-[10px] bg-[#FFF9C4] border-2 border-[#20245C]/10 flex items-center justify-center text-lg">◐</div>
              <div className="aspect-square rounded-[10px] bg-[#FF9EBB]/30 border-2 border-[#20245C]/10 flex items-center justify-center text-lg">✦</div>
              <div className="aspect-square rounded-[10px] bg-[#C4CCFF]/40 border-2 border-[#20245C]/10 flex items-center justify-center text-lg">⬢</div>
            </div>
            <div className="h-2 w-full bg-[#FFF8EF] rounded-full border border-[#20245C]/10 overflow-hidden">
              <div className="h-full w-[68%] bg-[#3F41CC] rounded-full" />
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-3/4 bg-[#20245C]/8 rounded-full" />
              <div className="h-2 w-full bg-[#20245C]/5 rounded-full" />
              <div className="h-2 w-5/6 bg-[#20245C]/5 rounded-full" />
            </div>
            <div className="mt-1 inline-flex self-start bg-[#20245C] text-white text-[10px] font-black tracking-[0.14em] px-3 py-1.5 rounded-full">2026 — SENTRA NAWASENA</div>
          </div>
        </div>

        <div className="relative z-[2] mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pt-[88px] pb-10 lg:pb-14">
          {/* top metadata — tiny, left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="text-[11px] font-black tracking-[0.22em] text-[#20245C]/45">KABINET</span>
            <span className="w-6 h-px bg-[#20245C]/15" />
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#20245C]/55">HMPS ADMINISTRASI BISNIS — FIA UB</span>
            <span className="hidden sm:inline-flex ml-1"><Sparkle fill="#FF9EBB" sm /></span>
          </motion.div>

          {/* ASYMMETRIC TYPOGRAPHY — focal point */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="syne-black leading-[0.82] tracking-[-0.04em] mt-6 sm:mt-8"
          >
            <span className="block text-[clamp(3.2rem,11vw,9.5rem)] text-[#20245C]">SENTRA</span>
            <span className="block text-[clamp(3.2rem,11vw,9.5rem)] text-[#3F41CC] ml-[10%] sm:ml-[14%] lg:ml-[18%] relative pr-8">
              NAWASENA
              <span className="absolute right-2 sm:right-4 top-[0.35em] hidden sm:inline-flex">
                <Sparkle fill="#C4CCFF" />
              </span>
            </span>
          </motion.h1>

          {/* periode — small, offset to right edge tension */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.6 }}
            className="mt-7 flex items-center gap-3 self-start lg:self-end lg:mr-[8%]"
          >
            <span className="hidden sm:block w-10 h-px bg-[#20245C]/12" />
            <div className="inline-flex items-center gap-2.5 bg-white border border-[#20245C]/10 rounded-full pl-2 pr-4 py-2 shadow-[0_2px_14px_rgba(32,36,92,0.06)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9EBB] animate-pulse" />
              <span className="text-[11px] font-black tracking-[0.18em] text-[#20245C]">PERIODE 2026</span>
              <span className="w-px h-3 bg-[#20245C]/10 mx-1" />
              <span className="text-[11px] font-bold tracking-[0.12em] text-[#20245C]/50">SENTRA NAWASENA</span>
            </div>
          </motion.div>

          {/* CTA — elegant pastel, not loud */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="/about"
              className="inline-flex items-center gap-2 bg-[#20245C] text-white px-7 py-3 rounded-full font-black text-sm tracking-wide shadow-[0_6px_18px_rgba(32,36,92,0.18)] hover:shadow-[0_8px_24px_rgba(32,36,92,0.22)] hover:translate-y-[-1px] transition"
              whileTap={{ scale: 0.97 }}
            >
              Explore Kabinet <span className="opacity-60">→</span>
            </motion.a>
            <motion.a
              href="/programs"
              className="inline-flex items-center gap-1.5 bg-white text-[#20245C] border border-[#20245C]/12 px-6 py-3 rounded-full font-black text-sm hover:border-[#20245C]/20 hover:bg-[#FFF9C4]/60 transition"
              whileTap={{ scale: 0.97 }}
            >
              Lihat Proker <span className="text-[#FF9EBB]">✦</span>
            </motion.a>
            <span className="hidden sm:inline-flex items-center gap-2 ml-2 text-xs font-bold text-[#20245C]/35">
              <span className="w-1 h-1 rounded-full bg-[#C4CCFF]" /> 27 program • 8 departemen
            </span>
          </motion.div>
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