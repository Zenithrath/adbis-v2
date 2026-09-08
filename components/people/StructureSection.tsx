"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import {
  EXECUTIVE_BOARD,
  DEPARTMENTS,
  type Member,
} from "@/data/organization";
import { cn } from "@/lib/utils";
import {
  Users,
  ChevronRight,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

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

const LEADER_ACCENT = ["#F9A8D4", "#BFDBFE"];
const BPI_ACCENT = ["#FFFBEB", "#E8E2D2"];
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const leadership = EXECUTIVE_BOARD.filter((m) => m.isLeadership);
const bpi = EXECUTIVE_BOARD.filter((m) => !m.isLeadership);

export default function StructureSection({
  onSelectMember,
}: {
  onSelectMember: (m: Member) => void;
}) {
  return (
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

        {/* Leadership */}
        <div className="text-center mb-8">
          <Reveal>
            <LevelTag text="Pimpinan Himpunan" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-5">
            {leadership.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.1}>
                <button
                  type="button"
                  onClick={() => onSelectMember(m)}
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
                  onClick={() => onSelectMember(m)}
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

        <Connector />

        {/* Departments grid */}
        <div className="text-center">
          <Reveal>
            <LevelTag text="7 Departemen Kabinet" accent />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 max-w-5xl mx-auto">
            {DEPARTMENTS.map((d, i) => (
              <Reveal key={d.id} delay={(i % 3) * 0.08}>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("departemen");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
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
  );
}
