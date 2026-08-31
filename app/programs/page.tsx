"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CreativeCard, ProgramCard } from "@/components/CreativeCards";
import programs from "@/data/programs.json";

export default function ProgramsPage() {
  const [active, setActive] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = programs.filter((group) => {
    if (active !== "all" && group.slug !== active) return false;
    if (!search) return true;
    const q = search.toLowerCase();
    return group.dept.toLowerCase().includes(q) || group.programs.some((p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  });

  const total = programs.reduce((n, g) => n + g.programs.length, 0);

  const colorMap: Record<string, "pink" | "blue" | "cream" | "violet"> = {
    perhubungan: "blue",
    sosmas: "pink",
    advokasi: "cream",
    bumh: "violet",
    "minat-bakat": "pink",
    psdm: "cream",
    medinfo: "blue",
  };

  return (
    <div className="flex flex-col bg-[#f8f7ff]">
      {/* Header — violet */}
      <section className="hero-violet relative overflow-hidden border-b-[3px] border-[#2d2a32]">
        <div className="hero-dots-pattern" />
        <div className="hero-texture-lines" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
          <span className="inline-flex bg-white px-4 py-1.5 rounded-full font-black text-xs tracking-[0.08em] text-[#2d2a32] shadow">✦ OUR WORK — 04 / {total} PROGRAMS</span>
          <h1 className="mt-4 syne-black text-3xl sm:text-5xl leading-[0.9] tracking-[-0.02em]">
            <span className="text-[#fff9c4]">PROGRAM</span> <span className="text-[#ff9ebb]">KERJA</span> <span className="text-[#c4ccff]">KABINET</span>
          </h1>
          <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-white/80 max-w-2xl mx-auto">
            7 departemen, {total} program — dari advokasi sampai market day. Filter per departemen atau cari program spesifik.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-[64px] sm:top-[72px] z-30 bg-[#f8f7ff]/95 backdrop-blur-xl border-b-[3px] border-[#2d2a32]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row gap-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 snap-x">
            <motion.button
              onClick={() => setActive("all")}
              className={`shrink-0 snap-start px-4 py-2 rounded-full font-black text-xs tracking-wide border-2 transition ${active === "all" ? "bg-[#2d2a32] text-white border-[#2d2a32] shadow-[2px_2px_0_#c4ccff]" : "bg-white border-[#2d2a32]/20 hover:border-[#2d2a32] hover:shadow-[2px_2px_0_#2d2a32] text-[#2d2a32]"}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SEMUA ✦ {total}
            </motion.button>
            {programs.map((g) => (
              <motion.button
                key={g.slug}
                onClick={() => setActive(g.slug)}
                className={`shrink-0 snap-start px-4 py-2 rounded-full font-black text-xs tracking-wide border-2 transition ${active === g.slug ? "bg-[#ff9ebb] text-[#2d2a32] border-[#2d2a32] shadow-[2px_2px_0_#2d2a32]" : "bg-white border-[#2d2a32]/20 hover:border-[#2d2a32] text-[#2d2a32]"}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {g.dept.replace("DEPARTEMEN ", "")}
              </motion.button>
            ))}
          </div>
          <div className="flex gap-2 sm:ml-auto">
            <motion.input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari proker... (cth: AdTalks, JABIZ)"
              className="flex-1 sm:w-[280px] bg-white border-2 border-[#2d2a32] rounded-full px-4 py-2 text-sm font-black placeholder:text-[#2d2a32]/40 shadow-[2px_2px_0_#2d2a32] focus:outline-none focus:shadow-[3px_3px_0_#2d2a32] text-[#2d2a32]"
              whileFocus={{ scale: 1.01 }}
            />
            {search && (
              <motion.button
                onClick={() => setSearch("")}
                className="w-10 h-10 bg-white border-2 border-[#2d2a32] rounded-full font-black shadow-[2px_2px_0_#2d2a32] text-[#2d2a32]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            )}
          </div>
        </div>
      </section>

      {/* Programs Grid — Creative Cards */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        {filtered.length === 0 ? (
          <CreativeCard className="p-10 text-center">
            <p className="font-black text-xs tracking-wide text-[#2d2a32]/50">TIDAK ADA HASIL UNTUK "{search}"</p>
            <p className="mt-2 text-sm text-[#2d2a32]/60">Coba kata kunci lain atau reset filter.</p>
          </CreativeCard>
        ) : (
          <div className="grid gap-6">
            {filtered.map((group) => (
              <CreativeCard key={group.slug} className="overflow-hidden" index={0}>
                <div className="px-4 sm:px-6 py-4 flex flex-wrap items-center gap-3 border-b-[3px] border-[#2d2a32]" style={{ background: group.color === "pink" ? "#ff9ebb" : group.color === "blue" ? "#c4ccff" : "#fff9c4" }}>
                  <h2 className="syne-black text-sm sm:text-[15px] leading-none text-[#2d2a32]">{group.dept}</h2>
                  <span className="px-2.5 py-1 bg-[#2d2a32] text-white rounded-full text-xs font-black">{group.programs.length} PROKER</span>
                  <span className="hidden sm:inline text-xs font-medium text-[#2d2a32]/60 ml-auto max-w-[420px] truncate">{group.desc}</span>
                </div>
                <p className="sm:hidden px-4 py-2 text-xs text-[#2d2a32]/60 border-b border-[#2d2a32]/10">{group.desc}</p>
                <div className="p-4 sm:p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.programs.map((p, i) => (
                    <ProgramCard
                      key={p.id}
                      title={p.name}
                      dept={group.dept.replace("DEPARTEMEN ", "")}
                      desc={p.desc}
                      icon={<span className="text-2xl">✦</span>}
                      color={colorMap[group.slug] || "pink"}
                      index={i}
                    />
                  ))}
                </div>
              </CreativeCard>
            ))}
          </div>
        )}

        <div className="mt-10 pixel-window rounded-[24px] bg-[#2d2a32] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-black text-xs tracking-[0.08em] text-[#c4ccff]">✦ BUTUH INFO LEBIH?</p>
            <p className="mt-1 syne-black text-lg">Mau tau detail tiap proker lebih dalam?</p>
            <p className="text-sm text-white/60">Hubungi departemen terkait atau cek Instagram kami.</p>
          </div>
          <motion.a
            href="https://instagram.com/hmpsabisbrawijaya"
            target="_blank"
            className="shrink-0 bg-[#ff9ebb] text-[#2d2a32] border-2 border-white px-6 py-3 rounded-full font-black text-sm shadow-[3px_3px_0_#c4ccff]"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            DM INSTAGRAM →
          </motion.a>
        </div>
      </section>
    </div>
  );
}