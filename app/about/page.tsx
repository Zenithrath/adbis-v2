"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { animate, useInView } from "framer-motion";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Target,
  Users,
  Shield,
  Zap,
  Award,
  MessageCircle,
  Clock,
  HeartHandshake,
  Activity,
  RefreshCw,
  Smile,
} from "lucide-react";

const values = [
  {
    no: "01",
    title: "Profesional",
    desc: "Menjalankan setiap amanah dengan standar tinggi, disiplin, dan tanggung jawab penuh.",
    icon: Award,
    color: "#4346D0",
  },
  {
    no: "02",
    title: "Kolaboratif",
    desc: "Menguatkan sinergi lintas angkatan dan stakeholder untuk dampak berlipat.",
    icon: Users,
    color: "#E89B4F",
  },
  {
    no: "03",
    title: "Integritas",
    desc: "Transparan, jujur, dan konsisten antara kata dan aksi.",
    icon: Shield,
    color: "#9B8FE8",
  },
  {
    no: "04",
    title: "Adaptif",
    desc: "Cepat tanggap terhadap tren teknologi dan dinamika industri.",
    icon: Zap,
    color: "#F472B6",
  },
  {
    no: "05",
    title: "Berdampak",
    desc: "Setiap program diukur dari manfaat nyata bagi mahasiswa dan masyarakat.",
    icon: Target,
    color: "#1e293b",
  },
];

const cultures = [
  {
    title: "Komunikasi Terbuka",
    desc: "Ruang aspirasi dua arah tanpa sekat.",
    icon: MessageCircle,
  },
  {
    title: "Ketepatan Waktu",
    desc: "Disiplin waktu sebagai bentuk profesionalisme.",
    icon: Clock,
  },
  {
    title: "Saling Mendukung",
    desc: "Gotong royong dan empati antar pengurus.",
    icon: HeartHandshake,
  },
  {
    title: "Proaktif",
    desc: "Inisiatif sebelum diminta, solusi sebelum masalah.",
    icon: Activity,
  },
  {
    title: "Evaluasi & Perbaikan",
    desc: "Refleksi rutin untuk tumbuh berkelanjutan.",
    icon: RefreshCw,
  },
  {
    title: "Profesional nan Humanis",
    desc: "Tegas pada target, hangat pada manusia.",
    icon: Smile,
  },
];

const misi = [
  {
    no: "01",
    title: "Pelayanan Prima & Advokasi Transparan",
    desc: "Menjamin pelayanan prima dan advokasi transparan untuk aspirasi seluruh mahasiswa.",
    tag: "PELAYANAN & ADVOKASI",
  },
  {
    no: "02",
    title: "Sentra Kolaborasi & Kreativitas",
    desc: "Mewujudkan sentra kolaborasi dan kreativitas mahasiswa.",
    tag: "KOLABORASI & KREATIVITAS",
  },
  {
    no: "03",
    title: "Siklus Organisasi Profesional",
    desc: "Mewujudkan siklus organisasi yang profesional, transparan, dan berintegritas.",
    tag: "PROFESIONAL & BERINTEGRITAS",
  },
];

const marqueeItems = [
  "VISI",
  "MISI",
  "NILAI UTAMA",
  "BUDAYA ORGANISASI",
  "KABINET SENTRA NAWASENA",
  "PERIODE 2026",
];

function MarqueeHalf() {
  return (
    <div className="flex items-center shrink-0">
      {marqueeItems.map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-8 pr-8 text-[10px] md:text-xs font-black uppercase tracking-[0.35em] whitespace-nowrap"
        >
          {item} <span className="text-[#F9A8D4] text-base">✱</span>
        </span>
      ))}
    </div>
  );
}

function StatCounter({
  to,
  suffix = "+",
  className,
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="relative w-full bg-[#FFFBEB] text-[#1e293b] overflow-x-clip">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative w-full editorial-grid-bg border-b border-[#1e293b]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-8 md:pt-14 pb-16 md:pb-24">
          {/* Meta bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-[#1e293b]/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/50">
            <span className="flex items-center gap-2">
              <span className="text-[#F472B6]">✱</span> TENTANG KABINET — HMPS
              ADMINISTRASI BISNIS
            </span>
            <span className="hidden sm:block">SENTRA NAWASENA / PERIODE 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 mt-10 md:mt-14 items-end">
            {/* Giant headline */}
            <div className="lg:col-span-7">
              <Reveal>
                <h1 className="font-black uppercase leading-[0.85] tracking-tighter select-none">
                  <span className="block text-[clamp(3.4rem,11vw,10.5rem)]">
                    Sentra
                  </span>
                  <span className="block text-[clamp(3.4rem,11vw,10.5rem)] text-stroke-ink">
                    Nawasena
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex items-center gap-4">
                  <span className="text-xl text-[#1e293b] font-light">✱</span>
                  <div className="h-px bg-[#1e293b]/20 flex-1" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/50 text-right leading-relaxed">
                    PUSAT PENGGERAK INTI —
                    <br />
                    MASA DEPAN YANG CERAH
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Intro card */}
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.1}>
                <div className="border border-[#1e293b]/20 rounded-2xl bg-white/70 p-6 md:p-8 relative">
                  <span className="absolute -top-3 left-6 bg-[#FFFBEB] px-2 text-[9px] font-black uppercase tracking-widest text-[#F472B6]">
                    • TENTANG KABINET
                  </span>
                  <p className="text-[13px] leading-relaxed text-[#1e293b]/75">
                    <strong className="text-[#1e293b]">
                      &ldquo;Sentra Nawasena&rdquo;
                    </strong>{" "}
                    adalah Pusat Penggerak Inti yang berorientasi pada Masa
                    Depan Yang Cerah, dengan komitmen menjadikan HMPS
                    Administrasi Bisnis sebagai wadah sentral terintegrasi
                    dalam pengembangan kompetensi dan inovasi, serta
                    menggerakkan seluruh potensi yang ada untuk mencapai
                    peluang masa depan yang gemilang.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#visi"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e293b] text-[#FFFBEB] text-[10px] font-bold uppercase tracking-widest hover:bg-[#F472B6] transition-colors"
                    >
                      Lihat Visi & Misi <ArrowDown className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#values"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1e293b] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1e293b] hover:text-[#FFFBEB] transition-all"
                    >
                      Nilai & Budaya
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <div className="marquee-wrap marquee-mask bg-[#1e293b] text-[#FFFBEB] py-3.5 overflow-hidden">
        <div className="marquee-track">
          <MarqueeHalf />
          <MarqueeHalf />
        </div>
      </div>

      {/* ═══════════ VISI & MISI ═══════════ */}
      <section id="visi" className="scroll-mt-24 w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-28">
          {/* Section header */}
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-12 md:mb-16 border-b border-[#1e293b]/10 pb-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/40 block mb-3">
                  • (01) ARAH KABINET
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                  Visi & Misi
                </h2>
              </div>
              <span className="hidden sm:block text-5xl md:text-7xl font-black text-[#1e293b]/10 select-none leading-none">
                V·M
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Dark visi panel (sticky) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <Reveal>
                <div className="bg-[#1e293b] text-[#FFFBEB] rounded-2xl p-8 md:p-10 flex flex-col gap-10 min-h-[420px]">
                  <div className="flex-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#F9A8D4] block mb-5">
                      ✱ VISI KABINET
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.02]">
                      Unggul &amp;
                      <br />
                      <span className="text-stroke-cream">Berdampak</span>
                    </h3>
                    <p className="mt-6 text-xs leading-relaxed text-[#FFFBEB]/65 max-w-sm">
                      Menjadikan HMPS Administrasi Bisnis sebagai wadah
                      aspirasi dan pusat pengembangan kompetensi yang unggul
                      dan berdampak nyata.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 border-t border-[#FFFBEB]/15 pt-6 text-center">
                    <div>
                      <p className="font-black text-2xl md:text-3xl text-[#BFDBFE]">
                        <StatCounter to={6} />
                      </p>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-[#FFFBEB]/50 mt-1">
                        Departemen
                      </p>
                    </div>
                    <div>
                      <p className="font-black text-2xl md:text-3xl text-[#F9A8D4]">
                        <StatCounter to={15} />
                      </p>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-[#FFFBEB]/50 mt-1">
                        Program Kerja
                      </p>
                    </div>
                    <div>
                      <p className="font-black text-2xl md:text-3xl text-[#E89B4F]">
                        <StatCounter to={500} />
                      </p>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-[#FFFBEB]/50 mt-1">
                        Mahasiswa
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Misi rows */}
            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/40 block mb-6">
                • MISI KABINET (03)
              </span>
              <div className="border-t border-[#1e293b]/15">
              {misi.map((m, i) => (
                <Reveal key={m.no} delay={i * 0.08}>
                  <div className="group border-b border-[#1e293b]/15 py-7 md:py-8 flex items-start gap-6 md:gap-10 transition-colors hover:bg-white/70 px-3 md:px-4 -mx-3 md:-mx-4 rounded-xl cursor-default">
                    <span className="text-3xl md:text-5xl font-black leading-none text-[#1e293b]/15 transition-colors group-hover:text-[#F472B6] shrink-0">
                      {m.no}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight leading-tight">
                        {m.title}
                      </h3>
                      <p className="mt-3 text-xs text-[#1e293b]/60 leading-relaxed max-w-xl">
                        {m.desc}
                      </p>
                      <p className="mt-4 inline-block text-[9px] font-bold uppercase tracking-widest text-[#1e293b]/35">
                        → {m.tag}
                      </p>
                    </div>
                    <span className="hidden md:flex w-10 h-10 shrink-0 rounded-full border border-[#1e293b]/20 items-center justify-center transition-all group-hover:bg-[#1e293b] group-hover:border-[#1e293b] group-hover:text-[#FFFBEB]">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Reveal>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ VALUES ═══════════ */}
      <section id="values" className="scroll-mt-24 w-full bg-[#BFDBFE]/40 border-y border-[#1e293b]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-28">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-12 border-b border-[#1e293b]/10 pb-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/40 block mb-3">
                  • (02) PRINSIP KAMI
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                  Nilai Utama{" "}
                  <span className="align-top text-lg font-semibold text-[#1e293b]/40">
                    (5)
                  </span>
                </h2>
              </div>
              <p className="hidden md:block max-w-xs text-right text-[11px] text-[#1e293b]/50 italic leading-relaxed">
                &ldquo;Lima nilai yang menjadi kompas setiap pengurus dalam
                berkarya&rdquo;
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.07}>
                  <div className="group bg-white border border-[#1e293b]/10 rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-20px_rgba(30,41,59,0.35)]">
                    <div className="flex items-start justify-between mb-8">
                      <span
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${v.color}1f`, color: v.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-lg font-black text-[#1e293b]/10 transition-colors group-hover:text-[#1e293b]/25">
                        {v.no}
                      </span>
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight leading-none mb-2">
                      {v.title}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/35 mb-4 font-semibold">
                      {v.title} 2026
                    </p>
                    <p className="text-xs leading-relaxed text-[#1e293b]/55 mt-auto">
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
        </div>
      </section>

      {/* ═══════════ CULTURE ═══════════ */}
      <section className="w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-28">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-12 border-b border-[#1e293b]/10 pb-6">
              <div className="md:col-span-7">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/40 block mb-3">
                  • (03) CARA KAMI BEKERJA
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                  Budaya Organisasi
                </h2>
              </div>
              <p className="md:col-span-5 md:text-right text-xs text-[#1e293b]/55 leading-relaxed">
                Bukan sekadar slogan — enam budaya ini hidup dalam keseharian
                pengurus, dari rapat mingguan hingga acara terbesar kabinet.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {cultures.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={(i % 3) * 0.08}>
                  <div className="group relative overflow-hidden rounded-2xl border border-[#1e293b]/15 p-6 transition-colors duration-300 hover:bg-[#F9A8D4]/20">
                    <div className="flex items-center justify-between mb-8">
                      <span className="w-10 h-10 rounded-full bg-[#1e293b] text-[#FFFBEB] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#F472B6]">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-2xl font-black text-[#1e293b]/10">
                        C-0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-black uppercase tracking-tight leading-tight">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#1e293b]/55 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Kenali lebih dekat */}
          <Reveal delay={0.1}>
            <div className="mt-14 bg-[#F9A8D4] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden relative">
              <span className="absolute -right-6 -bottom-10 text-[10rem] md:text-[13rem] font-black text-[#1e293b]/5 select-none leading-none pointer-events-none">
                ✱
              </span>
              <div className="relative">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/60 block mb-2">
                  LANJUTKAN JELAJAHI
                </span>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight">
                  Kenali Pengurus &amp; Program Kerja
                  <br className="hidden md:block" /> Kabinet Lebih Dekat
                </h3>
              </div>
              <div className="relative flex flex-wrap gap-3">
                <Link
                  href="/people"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e293b] text-[#FFFBEB] text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFFBEB] hover:text-[#1e293b] transition-all"
                >
                  Struktur & Proker
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/career"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1e293b] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1e293b] hover:text-[#FFFBEB] transition-all"
                >
                  Roadmap Karier
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FooterTapedDesign />
    </main>
  );
}
