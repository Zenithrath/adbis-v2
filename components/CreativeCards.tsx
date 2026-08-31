"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  hoverable?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function CreativeCard({
  children,
  className,
  index = 0,
  hoverable = true,
}: BaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverable ? { y: -6, scale: 1.01, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "relative pixel-window rounded-[24px] overflow-hidden bg-white",
        "shadow-[8px_8px_0_#2d2a32]",
        "transition-all duration-300",
        hoverable && "hover:shadow-[12px_12px_0_#2d2a32] hover:-translate-y-1.5",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface ProgramCardProps {
  title: string;
  dept: string;
  desc: string;
  icon: React.ReactNode;
  tag?: string;
  color: "pink" | "blue" | "cream" | "violet";
  index?: number;
  onClick?: () => void;
}

const colorStyles = {
  pink: {
    accent: "bg-[#ff9ebb]",
    accentText: "text-[#ff9ebb]",
    border: "border-[#ff9ebb]",
    bg: "bg-[#fff0f7]",
    iconBg: "bg-[#ff9ebb]/10",
    tagBg: "bg-[#ff9ebb]",
    tagText: "text-[#2d2a32]",
    gradient: "from-[#ff9ebb] to-[#ffc8d6]",
  },
  blue: {
    accent: "bg-[#c4ccff]",
    accentText: "text-[#3f41cc]",
    border: "border-[#c4ccff]",
    bg: "bg-[#f0f1ff]",
    iconBg: "bg-[#c4ccff]/10",
    tagBg: "bg-[#c4ccff]",
    tagText: "text-[#2d2a32]",
    gradient: "from-[#c4ccff] to-[#a8d8ea]",
  },
  cream: {
    accent: "bg-[#fff9c4]",
    accentText: "text-[#e8c547]",
    border: "border-[#fff9c4]",
    bg: "bg-[#fffef5]",
    iconBg: "bg-[#fff9c4]/10",
    tagBg: "bg-[#fff9c4]",
    tagText: "text-[#2d2a32]",
    gradient: "from-[#fff9c4] to-[#f5e6cc]",
  },
  violet: {
    accent: "bg-[#3f41cc]",
    accentText: "text-[#3f41cc]",
    border: "border-[#3f41cc]",
    bg: "bg-[#f0f1ff]",
    iconBg: "bg-[#3f41cc]/10",
    tagBg: "bg-[#3f41cc]",
    tagText: "text-white",
    gradient: "from-[#3f41cc] to-[#2e269c]",
  },
};

export function ProgramCard({ title, dept, desc, icon, tag, color = "pink", index = 0, onClick }: ProgramCardProps) {
  const c = colorStyles[color];

  return (
    <CreativeCard index={index} className="group flex flex-col h-full">
      {/* Top accent bar */}
      <div className={`${c.accent} h-1.5 w-full`} />

      <div className="p-6 flex flex-col h-full relative">
        {/* Tag */}
        {tag && (
          <span className={`${c.tagBg} ${c.tagText} px-3 py-1 rounded-full text-[11px] font-black tracking-wide mb-4 w-fit`}>
            {tag}
          </span>
        )}

        {/* Department */}
        <p className={`${c.accentText} font-black text-[11px] tracking-[0.12em] uppercase mb-3`}>
          {dept}
        </p>

        {/* Icon */}
        <div className={`${c.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border-2 border-[#2d2a32] shadow-[2px_2px_0_#2d2a32] group-hover:scale-110 transition-transform`}>
          {icon}
        </div>

        {/* Title */}
        <h3 className="syne-black text-lg leading-tight text-[#2d2a32] mb-2 group-hover:text-[#3f41cc] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[#2d2a32]/60 flex-1 mb-4">
          {desc}
        </p>

        {/* Click indicator */}
        <div className="flex items-center justify-between pt-4 border-t border-[#2d2a32]/10">
          <span className="font-black text-xs text-[#2d2a32]/40 tracking-wide">
            {color.toUpperCase()} ✦
          </span>
          <motion.div
            whileHover={{ x: 4 }}
            className="w-8 h-8 bg-white border-2 border-[#2d2a32] rounded-full flex items-center justify-center text-sm group-hover:bg-[#3f41cc] group-hover:text-white group-hover:border-[#3f41cc] transition-all"
          >
            →
          </motion.div>
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(45,42,50,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-50" />
      </div>
    </CreativeCard>
  );
}

interface EventCardProps {
  title: string;
  dept: string;
  desc: string;
  date: string;
  tag: string;
  color: "pink" | "blue" | "cream";
  index?: number;
  isLast?: boolean;
}

export function EventCard({ title, dept, desc, date, tag, color = "pink", index = 0, isLast = false }: EventCardProps) {
  const c = colorStyles[color];

  if (isLast) {
    return (
      <CreativeCard index={index} className="bg-[#2d2a32] text-white flex flex-col h-full justify-between p-6" style={{ width: "340px", minWidth: "340px" }}>
        <div>
          <p className="font-black text-xs tracking-[0.16em] text-[#ff9ebb] mb-2">✦ DON&apos;T MISS</p>
          <h4 className="syne-black text-2xl leading-none mb-3">SEMUA EVENT<br/>ADBIS DI SINI</h4>
          <p className="text-sm text-white/60 leading-relaxed mb-6">10+ event setahun — dari skill camp sampai company visit.</p>
        </div>
        <motion.a
          href="/programs"
          className="inline-flex justify-center bg-[#fff9c4] text-[#2d2a32] border-2 border-white px-5 py-3 rounded-full font-black text-sm shadow-[3px_3px_0_#ff9ebb] self-center"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          CEK KALENDER →
        </motion.a>
      </CreativeCard>
    );
  }

  return (
    <CreativeCard index={index} className="flex flex-col h-full">
      <div className={`${c.accent} h-1.5 w-full`} />
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <span className={`${c.tagBg} ${c.tagText} px-2.5 py-1 rounded-full text-[11px] font-black tracking-wide`}>
            {tag}
          </span>
          <span className={`${c.accentText} font-black text-[10px] tracking-wide`}>{dept}</span>
        </div>
        <h4 className="syne-black text-lg leading-none mb-2">{title}</h4>
        <p className="text-sm leading-relaxed text-[#2d2a32]/60 flex-1 mb-4">{desc}</p>
        <div className="flex items-center justify-between pt-4 border-t border-[#2d2a32]/10">
          <span className="px-3 py-1.5 bg-[#fff9c4] border-2 border-[#2d2a32] rounded-full text-xs font-black text-[#2d2a32]">
            {date} ✦
          </span>
          <motion.div
            whileHover={{ x: 4 }}
            className="w-8 h-8 bg-[#3f41cc] text-white border-2 border-[#2d2a32] rounded-full flex items-center justify-center text-sm"
          >
            →
          </motion.div>
        </div>
      </div>
    </CreativeCard>
  );
}

interface ValueCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  index?: number;
}

export function ValueCard({ title, desc, icon, index = 0 }: ValueCardProps) {
  return (
    <CreativeCard index={index} className="flex flex-col h-full" style={{ width: "300px", minWidth: "300px" }}>
      <div className="bg-[#3f41cc] h-1.5 w-full" />
      <div className="p-6 flex flex-col h-full text-[#2d2a32]">
        <div className="bg-[#fff9c4] w-14 h-14 rounded-2xl border-2 border-[#2d2a32] flex items-center justify-center text-2xl shadow-[2px_2px_0_#2d2a32] mb-4">
          {icon}
        </div>
        <h4 className="syne-black text-lg leading-none uppercase mb-2">{title}</h4>
        <p className="text-sm leading-relaxed text-[#2d2a32]/60 flex-1 mb-4">{desc}</p>
        <span className="self-start px-3 py-1 bg-[#2d2a32] text-white rounded-full text-xs font-black">✦ VALUE</span>
      </div>
    </CreativeCard>
  );
}

interface CultureCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  index?: number;
}

export function CultureCard({ title, desc, icon, index = 0 }: CultureCardProps) {
  return (
    <CreativeCard index={index} className="bg-[#f8f7ff] hover:bg-white">
      <div className="w-12 h-12 bg-white border-2 border-[#2d2a32] rounded-xl flex items-center justify-center text-2xl shadow-[2px_2px_0_#2d2a32] mb-4">
        {icon}
      </div>
      <h4 className="syne-black text-sm leading-tight text-[#2d2a32] mb-2">{title}</h4>
      <p className="text-sm leading-relaxed text-[#2d2a32]/60">{desc}</p>
    </CreativeCard>
  );
}

interface DeptCardProps {
  name: string;
  short: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  kadep: string;
  wakadep: string;
  index?: number;
  isActive?: boolean;
  onClick?: () => void;
}

export function DeptCard({ name, short, desc, icon, color, kadep, wakadep, index = 0, isActive, onClick }: DeptCardProps) {
  return (
    <CreativeCard index={index} hoverable={!isActive} className={cn("overflow-hidden", isActive && "ring-4 ring-[#ff9ebb]/30")}>
      <button
        onClick={onClick}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-[#fff9c4]/50 transition"
        style={{ background: isActive ? "linear-gradient(135deg, #fff9c4 0%, #fff0f7 100%)" : undefined }}
      >
        <div className="w-14 h-14 rounded-2xl border-[3px] border-[#2d2a32] flex items-center justify-center text-2xl shadow-[3px_3px_0_#2d2a32] shrink-0" style={{ background: color }}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="syne-black text-sm leading-tight text-[#2d2a32]">{name}</h3>
          <p className="text-xs text-[#2d2a32]/60 leading-relaxed line-clamp-1">{desc}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 bg-[#2d2a32] text-white rounded-full text-[11px] font-black">{kadep}</span>
            <span className="px-2.5 py-1 bg-white border border-[#2d2a32] rounded-full text-[11px] font-black text-[#2d2a32]">{wakadep}</span>
          </div>
        </div>
        <span className={`shrink-0 w-10 h-10 rounded-full border-2 border-[#2d2a32] flex items-center justify-center font-black text-sm shadow-[2px_2px_0_#2d2a32] transition ${isActive ? "bg-[#2d2a32] text-white rotate-45" : "bg-white text-[#2d2a32]"}`}>
          {isActive ? "−" : "+"}
        </span>
      </button>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t-[3px] border-[#2d2a32] bg-[#fff9c4]/40 p-5 animate-in"
        >
          <DeptDetail name={name} short={short} desc={desc} color={color} kadep={kadep} wakadep={wakadep} />
        </motion.div>
      )}
    </CreativeCard>
  );
}

function DeptDetail({ name, short, desc, color, kadep, wakadep }: {
  name: string; short: string; desc: string; color: string; kadep: string; wakadep: string;
}) {
  // This would receive proker from parent, keeping it simple here
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="bg-white border-2 border-[#2d2a32] rounded-2xl p-5 shadow-[3px_3px_0_#2d2a32]">
        <p className="font-black text-[11px] tracking-[0.08em] text-[#2d2a32]/50 mb-2">JOB DESCRIPTION</p>
        <p className="text-sm leading-relaxed font-bold text-[#2d2a32]">{desc}</p>
        <div className="mt-4">
          <p className="font-black text-[11px] tracking-[0.08em] text-[#2d2a32]/50 mb-2">PROGRAM KERJA</p>
          <div className="flex flex-wrap gap-2">
            {["Program 1", "Program 2", "Program 3"].map((p) => (
              <span key={p} className="px-3 py-1 bg-[#c4ccff] border border-[#2d2a32] rounded-full text-xs font-black text-[#2d2a32]">{p}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-[#2d2a32] rounded-2xl p-5 shadow-[3px_3px_0_#2d2a32]">
        <p className="font-black text-[11px] tracking-[0.08em] text-[#2d2a32]/50 mb-3">ANGGOTA UTAMA</p>
        <div className="space-y-2">
          <DeptMember name={kadep} role="Kepala Departemen" avatar="KA" color="#ff9ebb" />
          <DeptMember name={wakadep} role="Wakil Kepala" avatar="WA" color="#c4ccff" />
        </div>
      </div>

      <div className="sm:col-span-2 bg-[#2d2a32] text-white rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-black text-[11px] tracking-[0.08em] text-[#c4ccff]">DOKUMENTASI KEGIATAN ✦ COMING SOON</p>
        <span className="px-3 py-1 bg-white text-[#2d2a32] rounded-full text-xs font-black">📸 GALERI</span>
      </div>
    </div>
  );
}

function DeptMember({ name, role, avatar, color }: { name: string; role: string; avatar: string; color: string }) {
  return (
    <button className="flex items-center gap-3 p-2.5 rounded-xl border-2 border-[#2d2a32] hover:translate-y-[-1px] transition text-left" style={{ background: color }}>
      <span className="w-10 h-10 bg-white border-2 border-[#2d2a32] rounded-full flex items-center justify-center font-black text-[10px] text-[#2d2a32]">{avatar}</span>
      <span>
        <p className="font-black text-xs text-[#2d2a32]">{name}</p>
        <p className="text-[11px] opacity-60 text-[#2d2a32]">{role}</p>
      </span>
      <span className="ml-auto text-xs opacity-40">→</span>
    </button>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  ctaText: string;
  ctaHref: string;
  color: "pink" | "blue" | "cream" | "violet";
  index?: number;
  external?: boolean;
}

export function FeatureCard({ icon, title, desc, ctaText, ctaHref, color = "pink", index = 0, external = false }: FeatureCardProps) {
  const c = colorStyles[color];

  return (
    <CreativeCard index={index} className="flex flex-col h-full" onClick={external ? undefined : () => window.location.href = ctaHref} style={{ cursor: external ? "default" : "pointer" }}>
      <div className="w-14 h-14 rounded-2xl border-2 border-[#2d2a32] flex items-center justify-center text-2xl shadow-[2px_2px_0_#2d2a32] mb-5" style={{ background: c.accent.replace("bg-", "bg-").replace("10", "20") }}>
        {icon}
      </div>
      <p className={`${c.accentText} font-black text-[11px] tracking-[0.14em] uppercase mb-2`}>
        {title.split(" ")[0].toUpperCase()} {title.split(" ").slice(1).join(" ").toUpperCase()}
      </p>
      <h3 className="syne-black text-lg leading-tight mb-2 text-[#2d2a32]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#2d2a32]/60 flex-1 mb-5">{desc}</p>
      <motion.a
        href={ctaHref}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`inline-flex items-center gap-2 ${c.tagBg} ${c.tagText} px-4 py-2 rounded-full font-black text-xs w-fit shadow-[2px_2px_0_#2d2a32]`}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={(e) => external || e.stopPropagation()}
      >
        {ctaText} →
      </motion.a>
    </CreativeCard>
  );
}

interface RoadmapStepProps {
  phase: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  isLast: boolean;
  index: number;
}

export function RoadmapStep({ phase, title, desc, icon, color, isLast, index }: RoadmapStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative flex gap-4 sm:gap-6 group"
    >
      <div className="hidden sm:flex shrink-0 w-[64px] h-[64px] bg-white border-[3px] border-[#2d2a32] rounded-2xl items-center justify-center text-xl shadow-[3px_3px_0_#2d2a32] group-hover:shadow-[4px_4px_0_#2d2a32] group-hover:-translate-y-0.5 transition z-10" style={{ background: isLast ? "#2d2a32" : color }}>
        <span className={isLast ? "text-white" : ""}>{icon}</span>
      </div>
      <div className="flex sm:hidden shrink-0 w-12 h-12 rounded-xl border-2 border-[#2d2a32] items-center justify-center text-base shadow-[2px_2px_0_#2d2a32]" style={{ background: color }}>
        {icon}
      </div>

      <div className={`flex-1 pixel-window rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 border-2 ${isLast ? "bg-[#2d2a32] text-white border-[#2d2a32]" : "bg-white"} group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0_#2d2a32] transition-all`}>
        <div className="shrink-0">
          <span className={`inline-flex px-3 py-1 rounded-full font-black text-[11px] tracking-[0.08em] border-2 ${isLast ? "bg-white text-[#2d2a32] border-white" : "bg-[#2d2a32] text-white border-[#2d2a32]"}`}>
            {phase}
          </span>
          <h3 className={`mt-2 syne-black text-base sm:text-lg leading-none ${isLast ? "text-white" : "text-[#2d2a32]"}`}>
            {title}
          </h3>
        </div>
        <p className={`flex-1 text-sm leading-relaxed ${isLast ? "text-white/70" : "text-[#2d2a32]/60"}`}>
          {desc}
        </p>
        {isLast && <span className="hidden sm:inline-flex px-3 py-1 bg-[#ff9ebb] text-[#2d2a32] rounded-full font-black text-xs">GRADUATION ✦</span>}
      </div>
    </motion.div>
  );
}

interface TipCardProps {
  title: string;
  desc: string;
  bgColor: string;
  index?: number;
}

export function TipCard({ title, desc, bgColor, index = 0 }: TipCardProps) {
  return (
    <CreativeCard index={index} className="text-center" style={{ background: bgColor }}>
      <p className="font-black text-xs text-[#2d2a32] mb-1">TIP ✦</p>
      <p className="syne-black text-sm text-[#2d2a32]">{desc}</p>
    </CreativeCard>
  );
}