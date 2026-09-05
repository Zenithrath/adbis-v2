"use client";

import Link from "next/link";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { ArrowRight, GraduationCap, Sparkles, Compass, Rocket } from "lucide-react";

const stages = [
  {
    semester: "SEMESTER 1–2",
    title: "Know Yourself",
    desc: "Mengenali minat, potensi, kekuatan, dan arah karier.",
    icon: Compass,
  },
  {
    semester: "SEMESTER 3",
    title: "Build Your Skills",
    desc: "Mengembangkan hard skill, soft skill, serta pengalaman melalui organisasi, kepanitiaan, dan kegiatan lainnya.",
    icon: Sparkles,
  },
  {
    semester: "SEMESTER 4",
    title: "Prepare for Internship",
    desc: "Mempersiapkan CV, LinkedIn, interview, dan kebutuhan untuk melamar magang.",
    icon: GraduationCap,
  },
  {
    semester: "SEMESTER 5",
    title: "Internship Experience",
    desc: "Menjalani magang dan mendapatkan pengalaman profesional di dunia kerja.",
    icon: Compass,
  },
  {
    semester: "SEMESTER 6",
    title: "Career & Final Project",
    desc: "Menyelesaikan tugas akhir sambil mulai mempersiapkan transisi ke dunia kerja — memperbarui CV dan LinkedIn, mengumpulkan pengalaman magang, serta mempersiapkan proses rekrutmen.",
    icon: Rocket,
  },
  {
    semester: "GRADUATION",
    title: "Ready for Your Career",
    desc: "Siap mengambil langkah menuju dunia profesional.",
    icon: GraduationCap,
  },
];

const dotTones = [
  "bg-[#1e293b] text-[#FFFBEB] border-[#1e293b]",
  "bg-[#F9A8D4] text-[#1e293b] border-[#F9A8D4]",
  "bg-[#BFDBFE] text-[#1e293b] border-[#BFDBFE]",
];

export default function CareerPage() {
  return (
    <main className="relative w-full bg-[#FFFBEB] text-[#1e293b] overflow-x-clip">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative w-full editorial-grid-bg border-b border-[#1e293b]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-8 md:pt-14 pb-16 md:pb-24">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-[#1e293b]/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/50">
            <span className="flex items-center gap-2">
              <span className="text-[#F472B6]">✱</span> PENGEMBANGAN DIRI —
              HMPS ADMINISTRASI BISNIS
            </span>
            <span className="hidden sm:block">S1 → DUNIA PROFESIONAL</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 mt-10 md:mt-14 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <h1 className="font-black uppercase leading-[0.85] tracking-tighter select-none">
                  <span className="block text-[clamp(3rem,9.5vw,9rem)]">
                    Career
                  </span>
                  <span className="block text-[clamp(3rem,9.5vw,9rem)] text-stroke-ink">
                    Roadmap
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 flex items-center gap-4">
                  <span className="text-xl font-light">✱</span>
                  <div className="h-px bg-[#1e293b]/20 flex-1" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/50">
                    6 TAHAP · SEMESTER 1 HINGGA LULUS
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <div className="border border-[#1e293b]/20 rounded-2xl bg-white/70 p-6 md:p-8">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#F472B6] block mb-3">
                    • APA INI?
                  </span>
                  <p className="text-[13px] leading-relaxed text-[#1e293b]/75">
                    Panduan langkah demi langkah untuk mempersiapkan kariermu —
                    dari semester pertama hingga resmi menyandang status
                    alumni.
                  </p>
                  <div className="mt-5 pt-5 border-t border-[#1e293b]/10 flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#1e293b]/40">
                      Mulai dari mana?
                    </span>
                    <a
                      href="#roadmap"
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-[#F472B6] transition-colors group"
                    >
                      Lihat Peta
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TIMELINE ═══════════ */}
      <section id="roadmap" className="scroll-mt-24 w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-28">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-14 md:mb-20 border-b border-[#1e293b]/10 pb-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/40 block mb-3">
                  • (01) JALUR PERSIAPAN
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                  Step by Step
                </h2>
              </div>
              <span className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/40">
                <span className="w-6 h-6 rounded-full bg-[#1e293b] text-[#FFFBEB] flex items-center justify-center text-[8px]">
                  1
                </span>
                s.d.
                <span className="w-6 h-6 rounded-full bg-[#BFDBFE] text-[#1e293b] flex items-center justify-center text-[8px]">
                  6
                </span>
              </span>
            </div>
          </Reveal>

          <div className="relative">
            {/* Center spine (desktop) */}
            <span
              aria-hidden
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[#1e293b]/15"
            />
            {/* Left spine (mobile) */}
            <span
              aria-hidden
              className="md:hidden absolute left-[13px] top-2 bottom-0 w-px bg-[#1e293b]/15"
            />

            {stages.map((stage, i) => {
              const Icon = stage.icon;
              const left = i % 2 === 0;
              const tone = dotTones[i % dotTones.length];
              return (
                <div
                  key={stage.semester + stage.title}
                  className="relative md:grid md:grid-cols-2 md:gap-x-24 md:gap-y-0 pb-16 md:pb-24 last:pb-0"
                >
                  {/* Node */}
                  <span
                    className={cn(
                      "absolute top-1.5 left-0 md:left-1/2 md:-translate-x-1/2 z-10 w-7 h-7 rounded-full border-2 flex items-center justify-center text-[9px] font-black",
                      tone
                    )}
                  >
                    {i + 1}
                  </span>

                  {/* Ghost number on opposite side (desktop) */}
                  <span
                    aria-hidden
                    className={cn(
                      "hidden md:block absolute top-0 text-[9rem] lg:text-[12rem] font-black leading-none text-[#1e293b]/[0.04] select-none pointer-events-none",
                      left ? "md:right-2" : "md:left-2"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <Reveal
                    className={cn(
                      "pl-12 md:pl-0",
                      left
                        ? "md:col-start-1 md:text-right"
                        : "md:col-start-2"
                    )}
                    x={left ? -36 : 36}
                    y={12}
                  >
                    <div className="inline-block md:max-w-xl text-left">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1e293b]/25 text-[9px] font-black uppercase tracking-widest text-[#1e293b]/60 bg-white/60">
                        <span
                          className={cn(
                            "w-4 h-4 rounded-full flex items-center justify-center",
                            tone
                          )}
                        >
                          <Icon className="w-2.5 h-2.5" />
                        </span>
                        {stage.semester}
                      </span>
                      <h3 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.95]">
                        {stage.title}
                      </h3>
                      <p className="mt-4 text-xs md:text-[13px] leading-relaxed text-[#1e293b]/60 max-w-md md:inline-block">
                        {stage.desc}
                      </p>
                    </div>
                  </Reveal>

                  {/* Connector arrow (center, desktop only) */}
                  {i < stages.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-2 w-7 h-7 rounded-full bg-[#FFFBEB] border border-[#1e293b]/15 items-center justify-center text-[#1e293b]/40 rotate-90"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BAND ═══════════ */}
      <section className="w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 pb-20 md:pb-28">
          <Reveal>
            <div className="bg-[#BFDBFE] rounded-2xl px-8 md:px-12 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/60 block mb-2">
                  PERLU PENDAMPINGAN LEBIH?
                </span>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.95]">
                  Gapai Masa Depanmu
                  <br />
                  <span className="text-stroke-ink">Bersama HMPS Adbis</span>
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 md:flex-col md:items-end">
                <Link
                  href="/people"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e293b] text-[#FFFBEB] text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFFBEB] hover:text-[#1e293b] transition-all"
                >
                  Temukan Program Terkait
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1e293b] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1e293b] hover:text-[#FFFBEB] transition-all"
                >
                  Hubungi Kami
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
