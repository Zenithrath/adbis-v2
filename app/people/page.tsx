"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";
import { Reveal } from "@/components/ui/reveal";
import { EXECUTIVE_BOARD, DEPARTMENTS, type Member } from "@/data/organization";
import { cn } from "@/lib/utils";
import {
  Users,
  Crown,
  ChevronRight,
  ChevronDown,
  X,
  Check,
  ArrowRight,
} from "lucide-react";

/* ── colour helpers (department accents stay legible on cream) ── */
function luminance(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function onColor(hex: string) {
  return luminance(hex) > 0.55 ? "#1e293b" : "#FFFBEB";
}

const leadership = EXECUTIVE_BOARD.filter((m) => m.isLeadership);
const bpi = EXECUTIVE_BOARD.filter((m) => !m.isLeadership);

const LEADER_ACCENT = ["#F9A8D4", "#BFDBFE"];
const BPI_ACCENT = ["#FFFBEB", "#E8E2D2"];

function RolePill({
  role,
  color,
  className,
}: {
  role: string;
  color: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest",
        className
      )}
      style={{ backgroundColor: color, color: onColor(color) }}
    >
      {role}
    </span>
  );
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function PeoplePage() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [activeDeptId, setActiveDeptId] = useState<string>(DEPARTMENTS[0].id);
  const [expandedProkerId, setExpandedProkerId] = useState<string | null>(null);

  const activeDept =
    DEPARTMENTS.find((d) => d.id === activeDeptId) || DEPARTMENTS[0];

  // lock body scroll while the profile modal is open
  useEffect(() => {
    document.body.style.overflow = selectedMember ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

  const openDept = (id: string) => {
    setActiveDeptId(id);
    setExpandedProkerId(null);
    const el = document.getElementById("departemen");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleProker = (id: string) => {
    setExpandedProkerId((prev) => (prev === id ? null : id));
  };

  const teamCards = [
    { member: activeDept.head, label: "Kadep", accent: LEADER_ACCENT[0] },
    { member: activeDept.coHead, label: "Wakadep", accent: BPI_ACCENT[0] },
    ...activeDept.staff.map((s) => ({
      member: s,
      label: "Staff",
      accent: "#EDE8DC",
    })),
  ];

  return (
    <main className="relative w-full bg-[#FFFBEB] text-[#1e293b] overflow-x-clip">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative w-full editorial-grid-bg border-b border-[#1e293b]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-8 md:pt-14 pb-16 md:pb-20">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-[#1e293b]/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/50">
            <span className="flex items-center gap-2">
              <span className="text-[#F472B6]">✱</span> OUR PEOPLE &amp;
              PROGRAM KERJA
            </span>
            <span className="hidden sm:block">
              KABINET SENTRA NAWASENA · PERIODE 2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 mt-10 md:mt-14 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <h1 className="font-black uppercase leading-[0.85] tracking-tighter select-none">
                  <span className="block text-[clamp(2.8rem,9.5vw,9rem)]">
                    Struktur
                  </span>
                  <span className="block text-[clamp(2.8rem,9.5vw,9rem)] text-stroke-ink">
                    & Proker
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 flex items-center gap-4">
                  <span className="text-xl font-light">✱</span>
                  <div className="h-px bg-[#1e293b]/20 flex-1" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/50">
                    7 DEPARTEMEN · 15+ PROKER
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <div className="border border-[#1e293b]/20 rounded-2xl bg-white/70 p-6 md:p-8">
                  <p className="text-[13px] leading-relaxed text-[#1e293b]/75">
                    Mengenal seluruh struktur kepengurusan Kabinet Sentra
                    Nawasena — dari Badan Pengurus Inti, 7 Kepala Departemen,
                    jajaran staf, hingga detail program kerja unggulan.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#struktur"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e293b] text-[#FFFBEB] text-[10px] font-bold uppercase tracking-widest hover:bg-[#F472B6] transition-colors"
                    >
                      <Crown className="w-3.5 h-3.5" />
                      Struktur
                    </a>
                    <a
                      href="#departemen"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1e293b] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1e293b] hover:text-[#FFFBEB] transition-all"
                    >
                      Detail Departemen
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
          <div className="flex items-center shrink-0">
            {[...DEPARTMENTS, ...DEPARTMENTS].map((d, i) => (
              <span
                key={`${d.id}-${i}`}
                className="flex items-center gap-8 pr-8 text-[10px] md:text-xs font-black uppercase tracking-[0.35em] whitespace-nowrap"
              >
                {d.shortName}{" "}
                <span className="text-[#F9A8D4] text-base">✱</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ SECTION 01 — STRUKTUR ═══════════ */}
      <section id="struktur" className="scroll-mt-24 w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-28">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-10 border-b border-[#1e293b]/10 pb-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/40 block mb-3">
                  • (01) BAGAN KABINET
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                  Struktur Organisasi
                </h2>
              </div>
              <p className="hidden md:block max-w-xs text-right text-[11px] text-[#1e293b]/50 italic leading-relaxed">
                Klik kartu pengurus untuk membuka profil lengkap &amp; fokus
                tugasnya.
              </p>
            </div>
          </Reveal>

          {/* LEADERSHIP */}
          <div className="text-center mb-8">
            <Reveal>
              <LevelTag text="Pimpinan Himpunan" />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-5">
              {leadership.map((m, i) => (
                <Reveal key={m.id} delay={i * 0.1}>
                  <button
                    type="button"
                    onClick={() => setSelectedMember(m)}
                    className="group w-full text-left bg-white border border-[#1e293b]/10 rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(30,41,59,0.35)] cursor-pointer"
                  >
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-20 h-20 rounded-xl object-cover border border-[#1e293b]/10 flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="mb-1.5 flex items-center gap-2">
                        <RolePill
                          role={m.role}
                          color={LEADER_ACCENT[i % LEADER_ACCENT.length]}
                        />
                      </div>
                      <h3 className="text-sm md:text-base font-black uppercase tracking-tight leading-tight group-hover:text-[#F472B6] transition-colors">
                        {m.name}
                      </h3>
                      <p className="text-[11px] text-[#1e293b]/50 font-semibold mt-1">
                        {m.major}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#1e293b]/25 flex-shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F472B6]" />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CONNECTOR */}
          <Connector />

          {/* BPI */}
          <div className="text-center mb-8">
            <Reveal>
              <LevelTag text="Badan Pengurus Inti (BPI)" muted />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-5">
              {bpi.map((m, i) => (
                <Reveal key={m.id} delay={i * 0.1}>
                  <button
                    type="button"
                    onClick={() => setSelectedMember(m)}
                    className="group w-full text-left bg-white border border-[#1e293b]/10 rounded-2xl p-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(30,41,59,0.35)] cursor-pointer"
                  >
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-14 h-14 rounded-xl object-cover border border-[#1e293b]/10 flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <RolePill
                          role="BPI"
                          color={BPI_ACCENT[i % BPI_ACCENT.length]}
                        />
                      </div>
                      <h3 className="text-xs font-black uppercase tracking-tight leading-tight group-hover:text-[#F472B6] transition-colors">
                        {m.name}
                      </h3>
                      <p className="text-[10px] text-[#1e293b]/50 font-semibold mt-0.5">
                        {m.role}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#1e293b]/25 flex-shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F472B6]" />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CONNECTOR */}
          <Connector />

          {/* DEPARTMENTS GRID */}
          <div className="text-center">
            <Reveal>
              <LevelTag text="7 Departemen Kabinet" accent />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 max-w-5xl mx-auto">
              {DEPARTMENTS.map((d, i) => (
                <Reveal key={d.id} delay={(i % 3) * 0.08}>
                  <button
                    type="button"
                    onClick={() => openDept(d.id)}
                    className="group w-full text-left bg-white border border-[#1e293b]/10 rounded-2xl p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(30,41,59,0.35)] cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest"
                        style={{
                          backgroundColor: d.color,
                          color: onColor(d.color),
                        }}
                      >
                        {d.shortName}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/35">
                        {d.programs.length} Proker
                      </span>
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-tight leading-snug group-hover:text-[#F472B6] transition-colors">
                      {d.name.toLowerCase()}
                    </h3>
                    <p className="text-[11px] text-[#1e293b]/55 leading-relaxed line-clamp-2 mt-2 mb-5 text-left">
                      {d.desc}
                    </p>
                    <div className="border-t border-[#1e293b]/10 pt-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/60">
                      <span className="truncate">Kadep: {d.head.name}</span>
                      <ChevronRight className="w-4 h-4 text-[#1e293b]/30 flex-shrink-0 transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 02 — DEPT DETAIL ═══════════ */}
      <section
        id="departemen"
        className="scroll-mt-24 w-full bg-white/60 border-y border-[#1e293b]/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-28">
          <Reveal>
            <div className="mb-10 border-b border-[#1e293b]/10 pb-6">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/40 block mb-3">
                • (02) DETAIL TIM & PROKER
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                7 Departemen &amp; Program Kerja
              </h2>
            </div>
          </Reveal>

          {/* Selector */}
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {DEPARTMENTS.map((d) => {
                const isActive = d.id === activeDeptId;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => {
                      setActiveDeptId(d.id);
                      setExpandedProkerId(null);
                    }}
                    className={cn(
                      "px-4 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all duration-300 cursor-pointer",
                      isActive
                        ? "bg-[#1e293b] border-[#1e293b] text-[#FFFBEB] shadow-[0_10px_24px_-12px_rgba(30,41,59,0.6)]"
                        : "bg-white border-[#1e293b]/20 text-[#1e293b]/55 hover:border-[#1e293b] hover:text-[#1e293b]"
                    )}
                  >
                    {d.shortName}
                    <span className={cn("ml-1.5", isActive ? "text-[#F9A8D4]" : "text-[#1e293b]/30")}>
                      {d.programs.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Active dept panel (animates on switch) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDept.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="bg-white border border-[#1e293b]/10 rounded-3xl p-6 md:p-10"
            >
              {/* Header */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-10 pb-10 border-b border-[#1e293b]/10">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-3 h-3 rounded-sm inline-block"
                      style={{ backgroundColor: activeDept.color }}
                    />
                    <span
                      className="px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest"
                      style={{
                        backgroundColor: activeDept.color,
                        color: onColor(activeDept.color),
                      }}
                    >
                      {activeDept.shortName}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#1e293b]/40">
                      {activeDept.programs.length} Proker
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.95]">
                    {activeDept.name.toLowerCase()}
                  </h2>
                  <p className="mt-4 text-[11px] italic text-[#1e293b]/45">
                    &ldquo;{activeDept.tagline}&rdquo;
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-xs md:text-[13px] text-[#1e293b]/65 leading-relaxed">
                    {activeDept.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeDept.jobDescription.map((job, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full border border-[#1e293b]/15 text-[9px] font-bold uppercase tracking-wider text-[#1e293b]/50"
                      >
                        {job}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Team */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-[#1e293b]/40">
                    Jajaran Tim ({teamCards.length})
                  </h3>
                  <Users className="w-4 h-4 text-[#1e293b]/30" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {teamCards.map(({ member, label, accent }) => (
                    <button
                      key={member.id}
                      type="button"
                      onClick={() => setSelectedMember(member)}
                      className="group text-left bg-[#FFFBEB] border border-[#1e293b]/10 rounded-2xl p-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(30,41,59,0.3)] cursor-pointer"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-14 h-14 rounded-xl object-cover border border-[#1e293b]/10 flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <RolePill role={label} color={accent} className="mb-1" />
                        <h4 className="text-xs font-black uppercase tracking-tight leading-tight group-hover:text-[#F472B6] transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-[10px] text-[#1e293b]/50 font-semibold mt-0.5">
                          {member.major}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#1e293b]/25 flex-shrink-0 transition-all duration-300 group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Proker accordions */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-[#1e293b]/40">
                    List Program Kerja ({activeDept.programs.length})
                  </h3>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#1e293b]/35">
                    klik untuk detail
                  </span>
                </div>
                {activeDept.programs.map((proker, idx) => {
                  const isOpen = expandedProkerId === proker.id;
                  return (
                    <div
                      key={proker.id}
                      className="border-b border-[#1e293b]/10 last:border-b-0"
                    >
                      <button
                        type="button"
                        onClick={() => toggleProker(proker.id)}
                        aria-expanded={isOpen}
                        className="group w-full py-5 flex items-center gap-5 text-left cursor-pointer"
                      >
                        <span className="text-xl font-black text-[#1e293b]/15 transition-colors group-hover:text-[#F472B6]">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-[9px] font-bold uppercase tracking-widest text-[#1e293b]/35 mb-1">
                            PROGRAM KERJA
                          </span>
                          <span className="block text-lg md:text-2xl font-black uppercase tracking-tight leading-tight group-hover:text-[#F472B6] transition-colors">
                            {proker.name}
                          </span>
                        </span>
                        <span
                          className={cn(
                            "w-9 h-9 shrink-0 rounded-full border border-[#1e293b]/20 flex items-center justify-center text-[#1e293b]/50 transition-all duration-300",
                            isOpen
                              ? "bg-[#1e293b] border-[#1e293b] text-[#FFFBEB] rotate-45"
                              : "group-hover:border-[#1e293b] group-hover:text-[#1e293b]"
                          )}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <div className="pb-6 pl-12 md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <span className="text-[9px] font-black uppercase tracking-widest text-[#F472B6] block mb-2">
                                  Tentang Program
                                </span>
                                <p className="text-xs text-[#1e293b]/65 leading-relaxed">
                                  {proker.desc}
                                </p>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <span className="text-[9px] font-black uppercase tracking-widest text-[#F472B6] block mb-2">
                                    Tujuan
                                  </span>
                                  <ul className="space-y-1.5">
                                    {proker.objectives.map((obj, i) => (
                                      <li
                                        key={i}
                                        className="flex items-start gap-2 text-xs text-[#1e293b]/65 leading-relaxed"
                                      >
                                        <Check className="w-3.5 h-3.5 text-[#1e293b]/30 mt-0.5 flex-shrink-0" />
                                        <span>{obj}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <span className="text-[9px] font-black uppercase tracking-widest text-[#F472B6] block mb-1.5">
                                    Sasaran Target
                                  </span>
                                  <p className="text-xs font-semibold text-[#1e293b]/70">
                                    {proker.target}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════ MEMBER MODAL ═══════════ */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Tutup"
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-[#1e293b]/45 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-[#FFFBEB] border border-[#1e293b]/15 rounded-3xl p-6 md:p-8 z-10"
            >
              <button
                type="button"
                aria-label="Tutup profil"
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1e293b]/5 hover:bg-[#1e293b] hover:text-[#FFFBEB] border border-[#1e293b]/15 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 pr-8">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-[#1e293b]/10 flex-shrink-0"
                />
                <div className="text-center sm:text-left">
                  <RolePill
                    role={selectedMember.role}
                    color={LEADER_ACCENT[0]}
                    className="mb-2"
                  />
                  <h3 className="text-2xl font-black uppercase tracking-tight leading-tight">
                    {selectedMember.name}
                  </h3>
                  <p className="text-[11px] font-bold text-[#F472B6] mt-1">
                    {selectedMember.departmentName}
                  </p>
                  <p className="text-[11px] font-semibold text-[#1e293b]/50 mt-0.5">
                    {selectedMember.major}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#1e293b]/10 rounded-2xl p-5 mb-4">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#1e293b]/40 mb-2">
                  Profil
                </h4>
                <p className="text-xs text-[#1e293b]/65 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              {selectedMember.tasks && selectedMember.tasks.length > 0 && (
                <div className="bg-white border border-[#1e293b]/10 rounded-2xl p-5">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-[#1e293b]/40 mb-3">
                    Fokus Tugas &amp; Peran
                  </h4>
                  <ul className="space-y-2">
                    {selectedMember.tasks.map((task, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[#1e293b]/65 leading-relaxed"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: LEADER_ACCENT[0] }}
                        />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FooterTapedDesign />
    </main>
  );
}

/* ═══════════════ helpers ═══════════════ */

function LevelTag({
  text,
  muted,
  accent,
}: {
  text: string;
  muted?: boolean;
  accent?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest",
        accent
          ? "bg-[#F9A8D4]/20 border-[#F472B6]/30 text-[#F472B6]"
          : muted
            ? "bg-[#FFFBEB] border-[#1e293b]/20 text-[#1e293b]/55"
            : "bg-white border-[#1e293b]/15 text-[#1e293b]/70"
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
      {text}
    </span>
  );
}

function Connector() {
  return (
    <div className="flex flex-col items-center py-2">
      <span
        aria-hidden
        className="w-px h-9 bg-[#1e293b]/15 border-l border-dashed border-[#1e293b]/25"
      />
      <span
        aria-hidden
        className="w-2.5 h-2.5 rotate-45 bg-[#1e293b] mt-1"
      />
    </div>
  );
}
