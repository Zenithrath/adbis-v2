"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { DEPARTMENTS, type Member } from "@/data/organization";
import { cn } from "@/lib/utils";
import { Users, ChevronDown, Check, ChevronRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

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

const LEADER_ACCENT = ["#F9A8D4", "#BFDBFE"];
const BPI_ACCENT = ["#FFFBEB", "#E8E2D2"];

export default function DeptDetail({
  onSelectMember,
}: {
  onSelectMember: (m: Member) => void;
}) {
  const [activeDeptId, setActiveDeptId] = useState(DEPARTMENTS[0].id);
  const [expandedProkerId, setExpandedProkerId] = useState<string | null>(null);

  const activeDept =
    DEPARTMENTS.find((d) => d.id === activeDeptId) || DEPARTMENTS[0];

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
                  <span
                    className={cn(
                      "ml-1.5",
                      isActive ? "text-[#F9A8D4]" : "text-[#1e293b]/30"
                    )}
                  >
                    {d.programs.length}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

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
                    onClick={() => onSelectMember(member)}
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
                      onClick={() =>
                        setExpandedProkerId((prev) =>
                          prev === proker.id ? null : proker.id
                        )
                      }
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
  );
}
