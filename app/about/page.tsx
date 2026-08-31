import Link from "next/link";
import { motion } from "framer-motion";
import HorizontalScroll, { HScrollCard } from "@/components/HorizontalScroll";
import { CreativeCard, ValueCard, CultureCard } from "@/components/CreativeCards";
import valuesData from "@/data/values.json";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#f8f7ff]">
      {/* Header — poster violet exact */}
      <section className="hero-violet relative overflow-hidden border-b-[3px] border-[#2d2a32]">
        <div className="hero-dots-pattern" />
        <div className="hero-texture-lines" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow text-[#2d2a32] font-black text-xs tracking-[0.08em]">✦ ABOUT US — 02</div>
          <h1 className="mt-4 syne-black text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.9] tracking-[-0.02em]">
            <span className="text-[#fff9c4]">SENTRA</span> <span className="text-[#ff9ebb]">NAWASENA</span>
          </h1>
          <p className="mt-3 font-black text-xs tracking-[0.16em] text-white/80">PUSAT PENGGERAK INTI — MASA DEPAN YANG CERAH ✦</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-[#fff9c4] border-2 border-[#2d2a32] px-4 py-1.5 rounded-full shadow-[3px_3px_0_#2d2a32]">
            <span className="syne-black text-sm text-[#2d2a32]">PERIODE 2026</span>
            <span className="text-[#3f41cc]">✦</span>
          </div>
        </div>
      </section>

      {/* About Kabinet */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 sm:gap-8 items-start">
          <CreativeCard className="overflow-hidden" index={0}>
            <div className="bg-[#3f41cc] text-white border-b-[3px] border-[#2d2a32] px-5 py-3 flex items-center justify-between">
              <span className="font-black text-xs tracking-[0.12em]">ABOUT_KABINET.TXT ✦</span>
              <span className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white border-2 border-[#2d2a32]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#fff9c4] border-2 border-[#2d2a32]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff9ebb] border-2 border-[#2d2a32]" />
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="syne-black text-xl sm:text-2xl leading-tight text-[#2d2a32]">
                "Sentra Nawasena" adalah <span className="bg-[#c4ccff] px-1.5 text-[#2d2a32]">Pusat Penggerak Inti</span> yang berorientasi pada Masa Depan Yang Cerah
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#2d2a32]/70">
                Dengan komitmen menjadikan HMPS Administrasi Bisnis sebagai wadah sentral terintegritas dalam pengembangan kompetensi dan inovasi, serta menggerakkan seluruh potensi yang ada untuk mencapai peluang masa depan yang gemilang.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "SENTRA", v: "Pusat", d: "Sentral & terintegritas", bg: "#fff9c4" },
                  { k: "NAWA", v: "Masa Depan", d: "Orientasi cerah", bg: "#c4ccff" },
                  { k: "SENA", v: "Gerak", d: "Penggerak potensi", bg: "#ff9ebb" },
                ].map((x) => (
                  <div key={x.k} className="border-2 border-[#2d2a32] rounded-2xl p-3 text-center" style={{ background: x.bg }}>
                    <p className="font-black text-[10px] tracking-wide text-[#2d2a32]">{x.k}</p>
                    <p className="syne-black text-sm text-[#2d2a32]">{x.v}</p>
                    <p className="text-xs text-[#2d2a32]/60">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </CreativeCard>

          <div className="flex flex-col gap-4">
            <CreativeCard className="bg-[#2d2a32] text-white" index={1}>
              <p className="font-black text-xs tracking-[0.16em] text-[#c4ccff] p-6 pb-0">✦ VISI</p>
              <div className="px-6 pb-6">
                <p className="syne-black text-lg sm:text-xl leading-tight">
                  Menjadikan HMPS Administrasi Bisnis sebagai wadah aspirasi dan pusat pengembangan kompetensi yang unggul dan berdampak nyata.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-2.5 py-1 bg-white text-[#2d2a32] rounded-full text-xs font-black">Unggul</span>
                  <span className="px-2.5 py-1 bg-[#ff9ebb] text-[#2d2a32] rounded-full text-xs font-black">Berdampak</span>
                </div>
              </div>
            </CreativeCard>

            <CreativeCard index={2}>
              <p className="font-black text-xs tracking-[0.16em] text-[#ff9ebb] p-6 pb-0">✦ MISI — 3 PILAR</p>
              <ul className="px-6 pb-6 space-y-3">
                {[
                  "Menjamin pelayanan prima dan advokasi transparan untuk aspirasi seluruh mahasiswa.",
                  "Mewujudkan sentra kolaborasi dan kreativitas mahasiswa.",
                  "Mewujudkan siklus organisasi yang profesional, transparan, dan berintegritas.",
                ].map((m, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-[#fff9c4] border-2 border-[#2d2a32] flex items-center justify-center syne-black text-xs text-[#2d2a32]">{i + 1}</span>
                    <p className="text-sm leading-relaxed text-[#2d2a32]/75 pt-0.5">{m}</p>
                  </li>
                ))}
              </ul>
            </CreativeCard>
          </div>
        </div>
      </section>

      {/* VALUES HORIZONTAL — violet */}
      <section className="bg-[#3f41cc] border-y-[3px] border-[#2d2a32] relative overflow-hidden py-10 sm:py-14">
        <div className="hero-dots-pattern !h-full opacity-30" style={{ maskImage: "none", WebkitMaskImage: "none" }} />
        <div className="hero-texture-lines opacity-20" />
        <div className="relative">
          <HorizontalScroll title="✦ ORGANIZATIONAL VALUES" subtitle="5 Nilai Utama Kami" dark>
            {valuesData.values.map((v, i) => (
              <ValueCard key={v.id} title={v.title} desc={v.desc} icon={v.icon} index={i} />
            ))}
            <HScrollCard width="340px" className="bg-[#2d2a32] text-white flex flex-col justify-center">
              <div className="p-6 h-full flex flex-col justify-center">
                <p className="font-black text-xs tracking-[0.16em] text-[#ff9ebb]">✦ CULTURE PREVIEW</p>
                <h4 className="mt-2 syne-black text-xl leading-tight">Dibangun dari Values yang hidup</h4>
                <p className="mt-3 text-sm text-white/60">6 budaya organisasi kami wujudkan nilai di keseharian.</p>
                <a href="#culture" className="mt-5 inline-flex justify-center bg-white text-[#2d2a32] border-2 border-white px-5 py-2.5 rounded-full font-black text-sm">
                  LIHAT CULTURE ↓
                </a>
              </div>
            </HScrollCard>
          </HorizontalScroll>
        </div>
      </section>

      {/* CULTURE GRID */}
      <section id="culture" className="bg-white border-t-[3px] border-[#2d2a32] py-10 sm:py-14">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex bg-[#c4ccff] border-2 border-[#2d2a32] px-3 py-1 rounded-full font-black text-xs tracking-[0.08em] text-[#2d2a32]">ORGANIZATIONAL CULTURE ✦ 6</span>
              <h2 className="mt-3 syne-black text-2xl sm:text-3xl text-[#2d2a32]">Budaya yang Kami Hidupkan</h2>
            </div>
            <Link href="/people" className="hidden sm:inline-flex bg-[#fff9c4] border-2 border-[#2d2a32] px-6 py-2.5 rounded-full font-black text-sm shadow-[3px_3px_0_#2d2a32] text-[#2d2a32]">KENAL ORANGNYA →</Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {valuesData.cultures.map((c, i) => (
              <CultureCard key={c.title} title={c.title} desc={c.desc} icon={c.icon} index={i} />
            ))}
          </div>

          <div className="mt-10 pixel-window rounded-[24px] bg-[#2d2a32] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-black text-xs tracking-[0.16em] text-[#ff9ebb]">✦ NEXT — OUR PEOPLE</p>
              <p className="mt-1 syne-black text-xl">Kenali struktur & orang di balik Sentra Nawasena</p>
            </div>
            <Link href="/people" className="shrink-0 bg-[#ff9ebb] text-[#2d2a32] border-2 border-white px-7 py-3 rounded-full font-black text-sm shadow-[3px_3px_0_#c4ccff]">
              LIHAT STRUKTUR →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}