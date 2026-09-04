"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "../hooks/useLenis";
import { Component as SterlingGateNav } from "@/components/ui/sterling-gate-kinetic-navigation";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";
import { EXECUTIVE_BOARD, DEPARTMENTS, Member } from "@/data/organization";
import {
  Sparkles,
  Users,
  Award,
  Crown,
  ChevronRight,
  ChevronDown,
  X,
  Briefcase,
  UserCheck,
  CheckCircle2,
  Layers,
  Star,
  Target
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PeoplePage() {
  useLenis();

  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [activeDeptId, setActiveDeptId] = useState<string>(DEPARTMENTS[0].id);
  const [expandedProkerId, setExpandedProkerId] = useState<string | null>(null);

  const activeDept = DEPARTMENTS.find((d) => d.id === activeDeptId) || DEPARTMENTS[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.fromTo(
        ".people-hero",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
      );
      gsap.fromTo(
        ".people-hero-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.35 }
      );

      // Section A Animations
      gsap.fromTo(
        ".org-tree-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".org-tree-wrap", start: "top 85%", once: true },
        }
      );

      // Section C Animations
      gsap.fromTo(
        ".dept-detail-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: ".dept-detail-wrap", start: "top 85%", once: true },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const toggleProker = (id: string) => {
    setExpandedProkerId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="relative bg-[#4346D0] min-h-screen overflow-hidden text-[#111]">
      <SterlingGateNav />

      {/* Background Overlays */}
      <div className="fixed inset-0 bg-grid-lines pointer-events-none opacity-40" />
      <div className="fixed inset-0 pink-glow pointer-events-none opacity-60" />
      <div className="fixed inset-0 pixel-spot-overlay opacity-20 pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <div className="people-hero inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#111] border-2 border-[#111] shadow-[3px_3px_0px_#111] text-xs font-black tracking-widest uppercase mb-6">
          <Users className="w-3.5 h-3.5 text-[#4346D0]" /> OUR PEOPLE & PROGRAM KERJA
        </div>

        <h1
          className="people-hero font-unbounded text-[clamp(2.4rem,7.5vw,5.2rem)] font-black leading-[0.88] tracking-[-2px] uppercase text-[#FF8FA3] mb-4"
          style={{ textShadow: "3px 3px 0 #111, 6px 6px 0 rgba(0,0,0,0.15)" }}
        >
          STRUKTUR & <span className="text-[#FFF8C7]">PROKER</span>
        </h1>

        <p className="people-hero font-unbounded text-[11px] sm:text-xs font-black tracking-[4px] uppercase text-[#C6C8FF] mb-8">
          KABINET SENTRA NAWASENA HMPS ADMINISTRASI BISNIS 2026
        </p>

        <div className="people-hero-card max-w-3xl mx-auto bg-[#FFF8C7] rounded-[18px] border-[3px] border-[#111] shadow-[6px_6px_0px_#111] p-6 sm:p-8 text-left">
          <p className="font-body text-[13px] sm:text-[15px] leading-relaxed text-[#111]/80">
            Mengenal seluruh struktur kepengurusan Kabinet Sentra Nawasena — dari Badan Pengurus Inti, 7 Kepala Departemen, jajaran staf pengurus, hingga detail seluruh program kerja unggulan untuk memajukan mahasiswa Administrasi Bisnis.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#struktur"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4346D0] text-white border-2 border-[#111] shadow-[3px_3px_0px_#111] font-unbounded text-xs font-black uppercase hover:translate-y-[-2px] transition-transform"
            >
              <Crown className="w-4 h-4 text-[#FFF8C7]" /> 01. Struktur Organisasi
            </a>
            <a
              href="#departemen"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#111] border-2 border-[#111] shadow-[3px_3px_0px_#111] font-unbounded text-xs font-black uppercase hover:translate-y-[-2px] transition-transform"
            >
              <Layers className="w-4 h-4 text-[#4346D0]" /> 02. Detail Departemen & Proker
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4.A & 4.B: STRUKTUR ORGANISASI & PROFIL ANGGOTA */}
      <section id="struktur" className="relative z-10 px-4 sm:px-6 lg:px-8 py-10 max-w-6xl mx-auto scroll-mt-24">
        <div className="mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF8FA3] border-2 border-[#111] shadow-[3px_3px_0px_#111] flex items-center justify-center font-black">
            <Crown className="w-5 h-5 text-[#111]" />
          </div>
          <div>
            <span className="font-accent text-[10px] font-black tracking-[2px] uppercase text-[#FFF8C7]">BAGAN KABINET</span>
            <h2 className="font-unbounded text-2xl sm:text-3xl font-black text-white uppercase tracking-tight" style={{ textShadow: "2px 2px 0 #111" }}>
              Struktur Organisasi
            </h2>
          </div>
        </div>

        <div className="org-tree-wrap bg-white rounded-[22px] border-[3.5px] border-[#111] shadow-[8px_8px_0px_#111] p-6 sm:p-10">
          <p className="text-xs sm:text-sm font-bold text-[#111]/70 mb-8 text-center bg-[#FFF8C7] border-2 border-[#111] rounded-xl p-3 max-w-xl mx-auto shadow-[3px_3px_0px_#111]">
            💡 Klik pada kotak profil pengurus atau departemen untuk melihat kartu detail lengkap!
          </p>

          {/* LEVEL 1: KETUA & WAKIL KETUA */}
          <div className="text-center mb-10">
            <span className="inline-block font-unbounded text-[11px] font-black uppercase bg-[#4346D0] text-white px-3 py-1 rounded-full border-2 border-[#111] mb-4 shadow-[2px_2px_0px_#111]">
              Pimpinan Himpunan
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {EXECUTIVE_BOARD.filter((m) => m.isLeadership).map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="org-tree-card bg-[#FFF8C7] rounded-[16px] border-[3px] border-[#111] shadow-[4px_4px_0px_#111] p-5 cursor-pointer hover:bg-white hover:translate-y-[-3px] transition-all text-left flex items-center gap-4 group"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-xl object-cover border-2 border-[#111] shadow-[2px_2px_0px_#111] flex-shrink-0"
                  />
                  <div>
                    <div className="inline-block bg-[#FF8FA3] text-[#111] text-[10px] font-black px-2 py-0.5 rounded border border-[#111] mb-1">
                      {member.role}
                    </div>
                    <h3 className="font-unbounded text-sm font-black text-[#111] group-hover:text-[#4346D0] transition-colors leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-[#111]/60 font-semibold">{member.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONNECTING LINE */}
          <div className="w-1 h-8 bg-[#111] mx-auto my-2" />

          {/* LEVEL 2: BPI (Sekretaris & Bendahara) */}
          <div className="text-center mb-10">
            <span className="inline-block font-unbounded text-[11px] font-black uppercase bg-[#C6C8FF] text-[#111] px-3 py-1 rounded-full border-2 border-[#111] mb-4 shadow-[2px_2px_0px_#111]">
              Badan Pengurus Inti (BPI)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {EXECUTIVE_BOARD.filter((m) => !m.isLeadership).map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="org-tree-card bg-white rounded-[16px] border-[3px] border-[#111] shadow-[4px_4px_0px_#111] p-4 cursor-pointer hover:bg-[#FFF8C7] hover:translate-y-[-3px] transition-all text-left flex items-center gap-3 group"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-12 rounded-xl object-cover border-2 border-[#111] shadow-[2px_2px_0px_#111] flex-shrink-0"
                  />
                  <div>
                    <div className="inline-block bg-[#C6C8FF] text-[#111] text-[9px] font-black px-2 py-0.5 rounded border border-[#111] mb-1">
                      {member.role}
                    </div>
                    <h4 className="font-unbounded text-xs font-black text-[#111] group-hover:text-[#4346D0] transition-colors">
                      {member.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONNECTING LINE */}
          <div className="w-1 h-8 bg-[#111] mx-auto my-2" />

          {/* LEVEL 3: 7 DEPARTEMEN GRID */}
          <div className="text-center">
            <span className="inline-block font-unbounded text-[11px] font-black uppercase bg-[#FF8FA3] text-[#111] px-3 py-1 rounded-full border-2 border-[#111] mb-6 shadow-[2px_2px_0px_#111]">
              7 Departemen Kabinet
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {DEPARTMENTS.map((dept) => (
                <div
                  key={dept.id}
                  onClick={() => {
                    setActiveDeptId(dept.id);
                    const el = document.getElementById("departemen");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="org-tree-card bg-[#FFF8C7] rounded-[18px] border-[3px] border-[#111] shadow-[5px_5px_0px_#111] p-5 cursor-pointer hover:bg-white hover:translate-y-[-4px] transition-all text-left flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-unbounded text-[10px] font-black px-2.5 py-1 rounded-lg bg-[#4346D0] text-white border border-[#111]">
                        {dept.shortName}
                      </span>
                      <span className="text-[10px] font-black text-[#111]/50 uppercase">
                        {dept.programs.length} Proker
                      </span>
                    </div>

                    <h3 className="font-unbounded text-sm font-black text-[#111] group-hover:text-[#4346D0] transition-colors leading-tight mb-2">
                      {dept.name}
                    </h3>
                    <p className="text-[11px] text-[#111]/70 line-clamp-2 leading-relaxed mb-4">
                      {dept.desc}
                    </p>
                  </div>

                  <div className="border-t-2 border-[#111]/10 pt-3 flex items-center justify-between text-xs font-black text-[#4346D0]">
                    <span>Kadep: {dept.head.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#111] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.C: DETAIL DEPARTEMEN & PROGRAM KERJA */}
      <section id="departemen" className="relative z-10 px-4 sm:px-6 lg:px-8 py-10 max-w-6xl mx-auto scroll-mt-24">
        <div className="mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C6C8FF] border-2 border-[#111] shadow-[3px_3px_0px_#111] flex items-center justify-center font-black">
            <Layers className="w-5 h-5 text-[#111]" />
          </div>
          <div>
            <span className="font-accent text-[10px] font-black tracking-[2px] uppercase text-[#FFF8C7]">DETAIL PROKER & TIM</span>
            <h2 className="font-unbounded text-2xl sm:text-3xl font-black text-white uppercase tracking-tight" style={{ textShadow: "2px 2px 0 #111" }}>
              7 Departemen & Program Kerja
            </h2>
          </div>
        </div>

        {/* DEPARTMENT TAB SELECTOR */}
        <div className="flex flex-wrap gap-2 mb-8">
          {DEPARTMENTS.map((dept) => {
            const isActive = dept.id === activeDeptId;
            return (
              <button
                key={dept.id}
                onClick={() => setActiveDeptId(dept.id)}
                className={`px-4 py-2.5 rounded-xl font-unbounded text-xs font-black border-2 border-[#111] transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#FFF8C7] text-[#111] shadow-[4px_4px_0px_#111] translate-y-[-2px]"
                    : "bg-white/90 text-[#111]/70 hover:bg-white hover:text-[#111] shadow-[2px_2px_0px_#111]"
                }`}
              >
                {dept.shortName}
              </button>
            );
          })}
        </div>

        {/* ACTIVE DEPARTMENT CARD */}
        <div className="dept-detail-wrap bg-white rounded-[22px] border-[3.5px] border-[#111] shadow-[8px_8px_0px_#111] p-6 sm:p-10 mb-12">
          {/* Header */}
          <div className="bg-[#4346D0] text-white rounded-[18px] border-[3px] border-[#111] shadow-[5px_5px_0px_#111] p-6 mb-8">
            <div className="inline-block bg-[#FFF8C7] text-[#111] font-unbounded text-[10px] font-black px-3 py-1 rounded-full border border-[#111] mb-2 uppercase">
              {activeDept.shortName}
            </div>
            <h2 className="font-unbounded text-2xl sm:text-3xl font-black text-[#FF8FA3] leading-tight uppercase mb-2">
              {activeDept.name}
            </h2>
            <p className="font-unbounded text-xs font-black text-[#FFF8C7] uppercase tracking-wider mb-4">
              "{activeDept.tagline}"
            </p>
            <p className="font-body text-xs sm:text-sm text-white/90 leading-relaxed">
              {activeDept.desc}
            </p>
          </div>

          {/* Job Description Points */}
          <div className="mb-10 bg-[#FFF8C7] rounded-[16px] border-[2.5px] border-[#111] shadow-[4px_4px_0px_#111] p-5">
            <h3 className="font-unbounded text-xs font-black text-[#111] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#4346D0]" /> Focus & Job Description Departemen:
            </h3>
            <ul className="space-y-2">
              {activeDept.jobDescription.map((job, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#4346D0] flex-shrink-0 mt-0.5" />
                  <span>{job}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LEADERSHIP & STAFF MEMBERS */}
          <div className="mb-10">
            <h3 className="font-unbounded text-sm font-black text-[#111] uppercase tracking-wider mb-4 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#4346D0]" /> Jajaran Tim Pengurus ({activeDept.shortName})
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Head */}
              <div
                onClick={() => setSelectedMember(activeDept.head)}
                className="bg-white rounded-[16px] border-[2.5px] border-[#111] shadow-[4px_4px_0px_#111] p-4 cursor-pointer hover:bg-[#FFF8C7] hover:translate-y-[-2px] transition-all flex items-center gap-3"
              >
                <img
                  src={activeDept.head.image}
                  alt={activeDept.head.name}
                  className="w-12 h-12 rounded-xl object-cover border-2 border-[#111] shadow-[2px_2px_0px_#111] flex-shrink-0"
                />
                <div>
                  <span className="inline-block bg-[#FF8FA3] text-[#111] text-[9px] font-black px-2 py-0.5 rounded border border-[#111] mb-0.5">
                    Kadep
                  </span>
                  <h4 className="font-unbounded text-xs font-black text-[#111] leading-tight">
                    {activeDept.head.name}
                  </h4>
                  <p className="text-[10px] text-[#111]/60 font-semibold">{activeDept.head.major}</p>
                </div>
              </div>

              {/* Co-Head */}
              <div
                onClick={() => setSelectedMember(activeDept.coHead)}
                className="bg-white rounded-[16px] border-[2.5px] border-[#111] shadow-[4px_4px_0px_#111] p-4 cursor-pointer hover:bg-[#FFF8C7] hover:translate-y-[-2px] transition-all flex items-center gap-3"
              >
                <img
                  src={activeDept.coHead.image}
                  alt={activeDept.coHead.name}
                  className="w-12 h-12 rounded-xl object-cover border-2 border-[#111] shadow-[2px_2px_0px_#111] flex-shrink-0"
                />
                <div>
                  <span className="inline-block bg-[#C6C8FF] text-[#111] text-[9px] font-black px-2 py-0.5 rounded border border-[#111] mb-0.5">
                    Wakadep
                  </span>
                  <h4 className="font-unbounded text-xs font-black text-[#111] leading-tight">
                    {activeDept.coHead.name}
                  </h4>
                  <p className="text-[10px] text-[#111]/60 font-semibold">{activeDept.coHead.major}</p>
                </div>
              </div>

              {/* Staff */}
              {activeDept.staff.map((st) => (
                <div
                  key={st.id}
                  onClick={() => setSelectedMember(st)}
                  className="bg-white rounded-[16px] border-[2.5px] border-[#111] shadow-[4px_4px_0px_#111] p-4 cursor-pointer hover:bg-[#FFF8C7] hover:translate-y-[-2px] transition-all flex items-center gap-3"
                >
                  <img
                    src={st.image}
                    alt={st.name}
                    className="w-12 h-12 rounded-xl object-cover border-2 border-[#111] shadow-[2px_2px_0px_#111] flex-shrink-0"
                  />
                  <div>
                    <span className="inline-block bg-[#FFF8C7] text-[#111] text-[9px] font-black px-2 py-0.5 rounded border border-[#111] mb-0.5">
                      Staff
                    </span>
                    <h4 className="font-unbounded text-xs font-black text-[#111] leading-tight">
                      {st.name}
                    </h4>
                    <p className="text-[10px] text-[#111]/60 font-semibold">{st.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PROGRAM KERJA LIST */}
          <div>
            <h3 className="font-unbounded text-sm font-black text-[#111] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#4346D0]" /> List Program Kerja ({activeDept.programs.length} Proker)
            </h3>

            <div className="space-y-4">
              {activeDept.programs.map((proker) => {
                const isExpanded = expandedProkerId === proker.id;
                return (
                  <div
                    key={proker.id}
                    className="bg-[#FFF8C7] rounded-[16px] border-[2.5px] border-[#111] shadow-[4px_4px_0px_#111] overflow-hidden"
                  >
                    <div
                      onClick={() => toggleProker(proker.id)}
                      className="p-5 cursor-pointer hover:bg-white transition-colors flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="inline-block bg-[#4346D0] text-white text-[9px] font-black px-2.5 py-0.5 rounded border border-[#111] mb-1">
                          PROGRAM KERJA
                        </div>
                        <h4 className="font-unbounded text-sm sm:text-base font-black text-[#111]">
                          {proker.name}
                        </h4>
                        <p className="text-xs text-[#111]/70 mt-1 leading-relaxed">
                          {proker.desc}
                        </p>
                      </div>

                      <div className="w-8 h-8 rounded-xl bg-white border-2 border-[#111] shadow-[2px_2px_0px_#111] flex items-center justify-center flex-shrink-0">
                        <ChevronDown
                          className={`w-4 h-4 text-[#111] transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t-2 border-[#111]/10 bg-white p-5 space-y-4 text-xs sm:text-sm text-[#111]"
                        >
                          <div>
                            <span className="font-unbounded text-[10px] font-black uppercase text-[#4346D0] block mb-1">
                              Tujuan Program:
                            </span>
                            <ul className="list-disc list-inside space-y-1 text-[#111]/80 font-medium pl-1">
                              {proker.objectives.map((obj, i) => (
                                <li key={i}>{obj}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="font-unbounded text-[10px] font-black uppercase text-[#4346D0] block mb-1">
                              Sasaran Target:
                            </span>
                            <p className="text-[#111]/80 font-medium">{proker.target}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MEMBER PROFILE MODAL (INTERACTIVE) */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#FFF8C7] w-full max-w-lg rounded-[22px] border-[4px] border-[#111] shadow-[10px_10px_0px_#111] p-6 sm:p-8 z-10 text-left overflow-hidden"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white border-2 border-[#111] shadow-[2px_2px_0px_#111] flex items-center justify-center hover:bg-[#FF8FA3] transition-colors"
              >
                <X className="w-5 h-5 text-[#111]" />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-[3px] border-[#111] shadow-[4px_4px_0px_#111] flex-shrink-0"
                />
                <div className="text-center sm:text-left">
                  <span className="inline-block bg-[#4346D0] text-white text-[10px] font-black px-3 py-1 rounded-full border border-[#111] uppercase mb-2">
                    {selectedMember.role}
                  </span>
                  <h3 className="font-unbounded text-xl font-black text-[#111] leading-tight">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs font-bold text-[#4346D0] mt-1">{selectedMember.departmentName}</p>
                  <p className="text-xs font-semibold text-[#111]/60">{selectedMember.major}</p>
                </div>
              </div>

              <div className="bg-white rounded-[16px] border-[2.5px] border-[#111] shadow-[3px_3px_0px_#111] p-4 mb-4">
                <h4 className="font-unbounded text-[11px] font-black uppercase text-[#111] mb-1">
                  Deskripsi / Profil:
                </h4>
                <p className="text-xs text-[#111]/80 leading-relaxed font-medium">
                  {selectedMember.bio}
                </p>
              </div>

              {selectedMember.tasks && selectedMember.tasks.length > 0 && (
                <div className="bg-white rounded-[16px] border-[2.5px] border-[#111] shadow-[3px_3px_0px_#111] p-4">
                  <h4 className="font-unbounded text-[11px] font-black uppercase text-[#111] mb-2">
                    Fokus Tugas & Peran:
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedMember.tasks.map((task, idx) => (
                      <li key={idx} className="text-xs text-[#111]/80 font-medium flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4346D0] mt-1.5 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <FooterTapedDesign />
    </main>
  );
}
