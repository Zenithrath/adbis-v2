"use client";

import { Reveal } from "@/components/ui/reveal";
import DeptStepper from "@/components/people/DeptStepper";
import Stars from "@/components/ui/Stars";
import { Sparkle, Diamond, DotGrid } from "@/components/ui/Decorations";

export default function PeopleHero({
  activeDeptId,
  onSelectDept,
}: {
  activeDeptId: string;
  onSelectDept: (id: string) => void;
}) {
  return (
    <section className="relative w-full border-b border-white/10 overflow-hidden">
      <Stars className="absolute top-8 right-4 md:right-16 w-10 md:w-14 animate-float-slow" />
      <Stars className="absolute bottom-10 left-4 md:left-16 w-20 md:w-28 opacity-30 animate-float-slow-reverse" />
      <DotGrid rows={4} cols={6} className="absolute bottom-8 right-4 md:right-12 w-24 md:w-32 opacity-30 animate-float-slow" color="#FFF4C6" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-16 pt-8 md:pt-14 pb-12 md:pb-16">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-[#F9A8D4]">
              <Sparkle className="w-4 h-4 shrink-0" color="#FC75A7" />
              Struktur Organisasi
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-4 text-center font-black uppercase leading-[0.88] tracking-tighter text-white text-[clamp(2.4rem,8vw,6rem)]">
            Di Balik{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(249,168,212,0.85)" }}
            >
              Sentra Nawasena
            </span>{" "}
            <Diamond className="inline-block w-5 h-5 md:w-8 md:h-8 -mt-2 align-middle" color="#FFF4C6" />
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-5 md:mt-6 text-center text-sm md:text-base text-white/55 max-w-2xl mx-auto leading-relaxed">
            Jelajahi setiap departemen HMPS Administrasi Bisnis untuk melihat
            anggota, departemen, serta berbagai program kerja yang dijalankan
            oleh setiap departemen.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 md:mt-10">
            <DeptStepper activeId={activeDeptId} onSelect={onSelectDept} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
