"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ---------- tiny handmade doodles ---------- */
function Star({ className = "", size = 20, fill = "#14141F" }: { className?: string; size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={{ fill }}>
      <path d="M12 0L13.9 8.1L22 12L13.9 15.9L12 24L10.1 15.9L2 12L10.1 8.1L12 0Z" />
    </svg>
  );
}
function ArrowDoodle({ className = "" }: { className?: string }) {
  return (
    <svg width="88" height="28" viewBox="0 0 88 28" fill="none" className={className}>
      <path d="M2 14 H70" stroke="#14141F" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M62 6 L76 14 L62 22" stroke="#14141F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 14 C18 8, 28 20, 38 14" stroke="#FF6B4A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}
function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg width="120" height="18" viewBox="0 0 120 18" fill="none" className={className}>
      <path d="M2 12 C 20 2, 40 16, 60 8 C 80 2, 100 14, 118 7" stroke="#FFD23F" strokeWidth="6" strokeLinecap="round" opacity="0.95" />
    </svg>
  );
}

/* ---------- sticker ---------- */
function Sticker({ children, rotate = "-2deg", bg = "white", className = "" }: { children: React.ReactNode; rotate?: string; bg?: string; className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border-[2.5px] border-[#14141F] font-black text-xs tracking-wide shadow-[3px_3px_0_#14141F] ${className}`}
      style={{ background: bg, rotate }}
    >
      {children}
    </div>
  );
}

/* ========== PAGE ========== */
export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div className="bg-[#FFFBF0] text-[#14141F] overflow-clip">
      {/* ---------- HERO SCENE ---------- */}
      <section ref={heroRef} id="hero" className="relative min-h-[100svh] flex flex-col overflow-hidden">
        {/* paper texture dots - 8% */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]" style={{ backgroundImage: `radial-gradient(#14141F 1px, transparent 1px)`, backgroundSize: "18px 18px" }} />
        {/* soft organic blobs bg — 70% illustration feel */}
        <motion.div style={{ y: blobY }} className="absolute -top-20 -right-20 w-[520px] h-[520px] bg-[#C9B6FF]/25 blob blur-[0px] pointer-events-none hidden lg:block" />
        <motion.div style={{ y: blobY }} className="absolute -bottom-24 -left-24 w-[560px] h-[560px] bg-[#6CAEFF]/18 blob-2 pointer-events-none" />
        <div className="absolute top-[18%] right-[8%] w-[180px] h-[180px] bg-[#FFD23F]/90 blob-3 border-[2.5px] border-[#14141F] hidden xl:flex items-center justify-center rotate-[-4deg] shadow-[4px_4px_0_#14141F]">
          <span className="syne-black text-[11px] tracking-[0.14em] text-center leading-tight">SENTRA<br />NAWASENA<br />— 2026</span>
        </div>

        {/* pixel accents — 20% */}
        <div className="absolute top-[96px] left-[6%] hidden lg:block opacity-90">
          <div className="w-[36px] h-[36px] grid grid-cols-3 gap-[3px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className={`w-[10px] h-[10px] border border-[#14141F] ${i % 3 === 0 ? "bg-[#FF6B4A]" : i % 2 === 0 ? "bg-[#FFD23F]" : "bg-white"}`} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-[8%] right-[22%] hidden lg:block">
          <div className="w-[56px] h-[14px] flex gap-[4px]">
            <span className="flex-1 bg-[#14141F] h-[8px] mt-1" /><span className="flex-1 bg-[#5ED9B3] h-[8px] mt-1 border border-[#14141F]" /><span className="flex-1 bg-[#FFD23F] h-[8px] mt-1 border border-[#14141F]" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pt-20 sm:pt-24 pb-10">
          {/* eyebrow */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 text-[11px] font-black tracking-[0.18em] text-[#14141F]/45">EST. 2026 — VOKASI UB</span>
            <span className="w-6 h-px bg-[#14141F]/15 hidden sm:block" />
            <span className="inline-flex bg-[#FFD23F] border border-[#14141F] px-2.5 py-1 rounded-full text-[10px] font-black tracking-[0.12em] shadow-[2px_2px_0_#14141F]">KABINET SENTRA NAWASENA</span>
            <Star size={16} fill="#FF6B4A" className="hidden sm:block ml-1 animate-[spin_8s_linear_infinite]" />
          </motion.div>

          {/* big editorial type — asymmetric, large */}
          <motion.div style={{ y: heroY, scale: heroScale }} className="mt-6 sm:mt-8 relative">
            <div className="flex flex-wrap items-start gap-3 sm:gap-4">
              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.7, ease: [0.16,1,0.3,1] }}
                className="syne-display text-[clamp(3.2rem,12vw,10.5rem)]"
              >
                <span className="block">HIMA</span>
                <span className="block -mt-2 sm:-mt-4 ml-[6%] sm:ml-[9%] flex items-baseline gap-3">
                  ADBIS
                  <span className="hidden sm:inline-flex -translate-y-2">
                    <Star size={22} fill="#6CAEFF" />
                  </span>
                </span>
              </motion.h1>

              {/* floating character card — cartoon illustration 70% */}
              <motion.div
                initial={{ opacity: 0, rotate: 2, y: 16 }} animate={{ opacity: 1, rotate: -1.5, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}
                className="hidden lg:flex ml-auto mt-6 mr-10 w-[320px] bg-white border-[2.5px] border-[#14141F] rounded-[22px] shadow-[6px_6px_0_#14141F] overflow-hidden"
              >
                <div className="flex-1 p-4">
                  <div className="flex -space-x-2">
                    {["#FF6B4A","#6CAEFF","#FFD23F","#5ED9B3"].map((c,i)=>(
                      <span key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black" style={{background:c}}>{i+1}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-[13px] font-bold leading-tight">Bukan organisasi biasa —<br />tempat ide jadi aksi.</p>
                  <div className="mt-3 flex items-center gap-2 text-[11px] font-black"><span className="w-2 h-2 bg-[#FF6B4A] rounded-full animate-pulse"/> 27 PROKER • 8 DIVISI</div>
                </div>
                <div className="w-[112px] bg-[#FFF0D6] border-l-[2.5px] border-[#14141F] flex flex-col items-center justify-center p-3 gap-1">
                  <span className="w-12 h-12 rounded-full bg-[#14141F] flex items-center justify-center text-white text-lg">◐</span>
                  <span className="text-[9px] font-black tracking-[0.12em]">VOKASI UB</span>
                </div>
              </motion.div>
            </div>

            {/* ADMINISTRASI BISNIS — outline / doodle */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.7 }} className="mt-1 sm:mt-2 relative">
              <p className="syne-black text-[clamp(1.05rem,3.2vw,2.1rem)] tracking-[0.16em] text-[#14141F]/15">ADMINISTRASI BISNIS</p>
              <div className="absolute left-0 right-0 top-1/2 h-px bg-[#14141F]/10 hidden sm:block" />
              <div className="absolute left-[36%] -top-3 hidden sm:block"><Scribble /></div>
            </motion.div>

            {/* bottom row: tagline + cta vs sticker */}
            <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-8">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="max-w-[44ch] text-[15px] sm:text-[17px] leading-relaxed font-medium text-[#14141F]/75">
                Organisasi kemahasiswaan yang <span className="doodle-underline font-black text-[#14141F]">merangkai sinergi</span> dan mewujudkan aksi— dari ruang kelas sampai dampak nyata.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58 }} className="flex flex-wrap items-center gap-3 lg:ml-auto">
                <a href="#kegiatan" className="inline-flex items-center gap-2 bg-[#14141F] text-white px-6 py-3 rounded-full font-black text-sm shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:translate-y-[-1px] transition">
                  Lihat Kegiatan <span className="w-6 h-6 rounded-full bg-white text-[#14141F] flex items-center justify-center text-xs">→</span>
                </a>
                <a href="#manifesto" className="inline-flex items-center gap-2 bg-white border-[2.5px] border-[#14141F] px-5 py-3 rounded-full font-black text-sm shadow-[3px_3px_0_#14141F] hover:translate-y-[-1px] transition">
                  Manifesto
                </a>
                <ArrowDoodle className="hidden sm:block ml-2 rotate-[-6deg] opacity-70" />
              </motion.div>
            </div>
          </motion.div>

          {/* scroll hint */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-auto pt-10 flex items-center gap-3 text-[10px] font-black tracking-[0.16em] text-[#14141F]/35">
            <span className="w-6 h-6 rounded-full border border-[#14141F]/15 flex items-center justify-center">↓</span> SCROLL — CERITA DIMULAI
            <span className="hidden sm:block w-16 h-px bg-[#14141F]/10" />
          </motion.div>
        </div>
      </section>

      {/* ---------- MANIFESTO SCENE — mustard chapter ---------- */}
      <section id="manifesto" className="relative bg-[#FFD23F] border-y-[2.5px] border-[#14141F] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `radial-gradient(#14141F 1px, transparent 1px)`, backgroundSize: "16px 16px" }} />
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-white border-[2.5px] border-[#14141F] rounded-full px-3 py-1.5 shadow-[2px_2px_0_#14141F] rotate-[-1deg]">
                <span className="w-2 h-2 bg-[#FF6B4A] rounded-full" /> <span className="text-[11px] font-black tracking-[0.14em]">02 — MANIFESTO</span>
              </div>
              <h2 className="syne-display text-[clamp(2rem,6vw,4.2rem)] mt-5">
                Merangkai<br />
                <span className="inline-flex items-center gap-3">sinergi <Star size={28} fill="#14141F" className="hidden sm:block" /></span><br />
                <span className="text-white" style={{ WebkitTextStroke: "2.5px #14141F", paintOrder: "stroke fill" }}>wujudkan aksi.</span>
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                <Sticker rotate="-1.5deg" bg="#6CAEFF">KOLABORATIF ✦</Sticker>
                <Sticker rotate="1.2deg" bg="#FF8FA3">INOVATIF</Sticker>
                <Sticker rotate="-0.8deg" bg="white">BERDAMPAK</Sticker>
              </div>
            </div>

            <div className="relative">
              {/* cartoon illustration — 3 abstract characters */}
              <div className="bg-white border-[2.5px] border-[#14141F] rounded-[24px] shadow-[6px_6px_0_#14141F] p-5 sm:p-6">
                <div className="flex gap-3">
                  {[
                    { bg: "#6CAEFF", emoji: "◑", label: "Riset" },
                    { bg: "#FF8FA3", emoji: "⬢", label: "Karya" },
                    { bg: "#5ED9B3", emoji: "✦", label: "Aksi" },
                  ].map((c) => (
                    <div key={c.label} className="flex-1 aspect-[0.9] rounded-[18px] border-[2.5px] border-[#14141F] flex flex-col items-center justify-center gap-2" style={{ background: c.bg }}>
                      <span className="w-12 h-12 rounded-full bg-white border-2 border-[#14141F] flex items-center justify-center text-xl">{c.emoji}</span>
                      <span className="text-[11px] font-black tracking-[0.12em]">{c.label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[14px] leading-relaxed font-medium text-[#14141F]/75">Tiga pilar yang bikin HIMA beda: riset yang tajam, karya yang relevan, aksi yang dirasakan kampus & masyarakat.</p>
                <div className="mt-4 h-px bg-[#14141F]/10" />
                <div className="mt-3 flex items-center justify-between text-xs font-black">
                  <span>2026 • SENTRA NAWASENA</span><span className="px-2 py-1 bg-[#FFD23F] border border-[#14141F] rounded-full">VISI KABINET</span>
                </div>
              </div>

              {/* doodle arrow floating */}
              <div className="absolute -right-2 -bottom-6 hidden lg:block rotate-[8deg]">
                <div className="bg-white border-[2px] border-[#14141F] rounded-full px-3 py-1.5 shadow-[2px_2px_0_#14141F] text-xs font-black">kita gerak bareng →</div>
              </div>

              {/* pixel accent */}
              <div className="absolute -left-4 top-10 hidden lg:grid grid-cols-4 gap-1 opacity-60">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className="w-[7px] h-[7px] bg-[#14141F]" style={{ opacity: 0.12 + (i % 3) * 0.15 }} />
                ))}
              </div>
            </div>
          </div>

          {/* values — editorial, not cards */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 border-t-[2.5px] border-[#14141F]/10 pt-8">
            {[
              { n: "01", t: "Ruang Tumbuh", d: "Setiap anggota punya panggung untuk coba, gagal, dan jadi lebih baik." },
              { n: "02", t: "Kolaborasi Nyata", d: "Lintas divisi, lintas angkatan — semua saling nyambung." },
              { n: "03", t: "Dampak Terukur", d: "Program bukan seremonial, tapi ada output yang bisa dilihat." },
            ].map((v) => (
              <div key={v.n} className="flex gap-3">
                <span className="syne-black text-2xl text-[#14141F]/15">{v.n}</span>
                <div><p className="font-black text-sm">{v.t}</p><p className="text-sm leading-relaxed text-[#14141F]/60 mt-1">{v.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- KEGIATAN SCENE — editorial list, not card grid ---------- */}
      <section id="kegiatan" className="relative bg-[#FFFBF0] border-b-[2.5px] border-[#14141F] overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex bg-[#C9B6FF] border-[2.5px] border-[#14141F] px-3 py-1.5 rounded-full text-[11px] font-black tracking-[0.14em] shadow-[2px_2px_0_#14141F] rotate-[-0.6deg]">03 — KEGIATAN</span>
              <h2 className="syne-display text-[clamp(2rem,6vw,4rem)] mt-4 leading-[0.9]">Apa yang<br />kita kerjakan</h2>
            </div>
            <p className="max-w-[36ch] text-sm leading-relaxed text-[#14141F]/60 font-medium">Empat program unggulan yang merangkum 27 proker — kurasi paling esensial, bukan katalog.</p>
          </div>

          <div className="mt-10 border-t-[2.5px] border-[#14141F]">
            {[
              { no: "01", title: "INVEST ADBIS", dept: "PSDM", color: "#FFD23F", desc: "Investasi skill & wawasan paling padat tahun ini — workshop, kelas, mentoring." },
              { no: "02", title: "BINA MASYARAKAT", dept: "SOSMAS", color: "#FF8FA3", desc: "Pengabdian yang berkelanjutan, turun langsung, hasilnya kerasa." },
              { no: "03", title: "MARKET DAY", dept: "BUMH", color: "#6CAEFF", desc: "Bazar karya dan bisnis mahasiswa — panggung buat jualan & validasi ide." },
              { no: "04", title: "SENCREA", dept: "MINBAK", color: "#5ED9B3", desc: "Pesta seni & kreativitas — dari panggung sampai instalasi." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06 }}
                className="group grid lg:grid-cols-[120px_1fr_auto] gap-4 sm:gap-6 py-6 sm:py-7 border-b-[1.5px] border-[#14141F]/10 hover:bg-white/60 -mx-2 px-2 rounded-xl transition"
              >
                <div className="flex items-center gap-3">
                  <span className="syne-black text-3xl sm:text-4xl text-[#14141F]/12 group-hover:text-[#14141F]/20 transition">{item.no}</span>
                  <span className="inline-flex px-2.5 py-1 rounded-full border border-[#14141F] text-[10px] font-black tracking-[0.12em]" style={{ background: item.color }}>{item.dept}</span>
                </div>
                <div>
                  <h3 className="syne-black text-[clamp(1.4rem,3.2vw,2.2rem)] leading-none group-hover:translate-x-1 transition">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#14141F]/60 max-w-[56ch]">{item.desc}</p>
                </div>
                <div className="flex items-center gap-3 lg:justify-end">
                  <span className="hidden sm:inline text-xs font-bold text-[#14141F]/40">Lihat detail</span>
                  <span className="w-10 h-10 rounded-full bg-white border-[2px] border-[#14141F] flex items-center justify-center group-hover:bg-[#14141F] group-hover:text-white transition">→</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#14141F] text-white flex items-center justify-center text-xs">27</div>
            <span className="text-sm font-bold">program total — lihat semua di halaman program</span>
            <a href="#" className="ml-auto inline-flex items-center gap-2 bg-white border-[2.5px] border-[#14141F] px-4 py-2 rounded-full font-black text-xs shadow-[2px_2px_0_#14141F]">LIHAT SEMUA →</a>
          </div>
        </div>
      </section>

      {/* ---------- ORANG SCENE — lilac / character driven ---------- */}
      <section id="orang" className="relative bg-[#C9B6FF] border-b-[2.5px] border-[#14141F] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: `radial-gradient(#14141F 1px, transparent 1px)`, backgroundSize: "18px 18px" }} />
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8 py-14 sm:py-20 relative">
          <div className="flex flex-wrap gap-3">
            <Sticker bg="white" rotate="-1deg">04 — ORANG</Sticker>
            <Sticker bg="#FFD23F" rotate="1deg">8 DIVISI ✦</Sticker>
            <Sticker bg="#FF8FA3" rotate="-0.5deg">~60 PENGURUS</Sticker>
          </div>
          <div className="mt-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <div>
              <h2 className="syne-display text-[clamp(2rem,6vw,4rem)]">Orang-orang<br />di balik layar</h2>
              <p className="mt-4 text-[15px] leading-relaxed font-medium text-[#14141F]/70 max-w-[42ch]">Bukan struktur kaku — kami cerita sebagai karakter yang saling ngisi. Kenalan sama inti yang gerakin harian HIMA.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-white border-[2px] border-[#14141F] rounded-full text-xs font-black">KETUA • WAKIL</span>
                <span className="px-3 py-1.5 bg-[#14141F] text-white rounded-full text-xs font-black">BPH INTI</span>
                <span className="px-3 py-1.5 bg-white border border-[#14141F]/20 rounded-full text-xs font-bold">+ 8 KADIV</span>
              </div>
            </div>

            {/* character blobs — not photo grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { name: "Ketua", role: "HIMA", bg: "#FFF0D6" },
                { name: "Wakil", role: "HIMA", bg: "#6CAEFF" },
                { name: "Sekre", role: "BPH", bg: "#FF8FA3" },
                { name: "Bendahara", role: "BPH", bg: "#FFD23F" },
                { name: "PSDM", role: "Kadiv", bg: "#5ED9B3" },
                { name: "SOSMAS", role: "Kadiv", bg: "white" },
              ].map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 10, rotate: i % 2 ? 1 : -1 }}
                  whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 0.6 : -0.6 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white border-[2.5px] border-[#14141F] rounded-[20px] shadow-[4px_4px_0_#14141F] p-3 flex flex-col items-center text-center"
                >
                  <span className="w-[64px] h-[64px] rounded-full border-[2.5px] border-[#14141F] flex items-center justify-center text-xl blob" style={{ background: p.bg }}>◐</span>
                  <span className="mt-2 font-black text-xs leading-none">{p.name}</span>
                  <span className="text-[10px] font-bold tracking-[0.12em] text-[#14141F]/45">{p.role}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* pixel detail */}
          <div className="absolute right-6 bottom-6 hidden lg:flex items-center gap-1.5 opacity-30">
            <span className="w-2 h-2 bg-[#14141F]" /><span className="w-2 h-2 bg-[#FF6B4A]" /><span className="w-2 h-2 bg-white border border-[#14141F]" /><span className="w-2 h-2 bg-[#FFD23F] border border-[#14141F]" />
          </div>
        </div>
      </section>

      {/* ---------- CTA SCENE ---------- */}
      <section id="gabung" className="relative bg-[#FFFBF0] overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="bg-[#14141F] text-white rounded-[28px] sm:rounded-[32px] border-[2.5px] border-[#14141F] shadow-[8px_8px_0_#C9B6FF] overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: "16px 16px" }} />
            <div className="absolute -top-10 -right-10 w-[220px] h-[220px] bg-[#FF6B4A]/20 blob blur-[1px] pointer-events-none" />
            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-8 p-6 sm:p-10 lg:p-12 items-center">
              <div>
                <span className="inline-flex bg-[#FFD23F] text-[#14141F] border border-[#14141F] px-3 py-1 rounded-full text-[11px] font-black tracking-[0.14em]">05 — GABUNG</span>
                <h2 className="syne-display text-[clamp(2rem,6vw,4.2rem)] mt-4 leading-[0.9] text-white">
                  Mau jadi<br />
                  <span className="text-[#FFD23F]">bagian cerita?</span>
                </h2>
                <p className="mt-4 text-white/70 text-sm sm:text-[15px] leading-relaxed max-w-[44ch]">Open recruitment, aspirasi, dan roadmap karier — semua pintu masuk ada di satu tempat. Pilih jalurmu.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#" className="inline-flex items-center gap-2 bg-[#FF6B4A] text-white border-2 border-white px-6 py-3 rounded-full font-black text-sm shadow-[3px_3px_0_white] hover:translate-y-[-1px] transition">DAFTAR SEKARANG →</a>
                  <a href="#" className="inline-flex items-center gap-2 bg-white text-[#14141F] px-6 py-3 rounded-full font-black text-sm">KIRIM ASPIRASI ✦</a>
                </div>
              </div>

              <div className="bg-white text-[#14141F] rounded-[20px] border-[2.5px] border-white p-5 sm:p-6">
                <div className="flex items-center gap-2 text-[11px] font-black tracking-[0.14em]"><span className="w-2 h-2 bg-[#5ED9B3] rounded-full animate-pulse" /> ADBIS HUB — ONE STOP</div>
                <div className="mt-4 grid grid-cols-1 gap-3">
                  {[
                    { t: "Open Recruitment", d: "Form resmi, info seleksi transparan.", c: "#FFD23F" },
                    { t: "Aspirasi Mahasiswa", d: "Ide & keluhan — kami advokasi.", c: "#6CAEFF" },
                    { t: "Career Roadmap", d: "Dari maba sampai siap kerja.", c: "#FF8FA3" },
                  ].map((f) => (
                    <div key={f.t} className="flex items-center gap-3 p-3 rounded-2xl border-[2px] border-[#14141F]/10 hover:border-[#14141F]/20 transition">
                      <span className="w-10 h-10 rounded-full border-2 border-[#14141F] flex items-center justify-center text-sm" style={{ background: f.c }}>→</span>
                      <div><p className="font-black text-sm leading-none">{f.t}</p><p className="text-xs text-[#14141F]/60">{f.d}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-[11px] font-black tracking-[0.14em] text-[#14141F]/30">
            <span>HIMA ADMINISTRASI BISNIS — VOKASI UB • © 2026 SENTRA NAWASENA</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FF6B4A] rounded-full" /> PLAYFUL EDITORIAL • BUILT WITH CARE</span>
          </div>
        </div>
      </section>
    </div>
  );
}
