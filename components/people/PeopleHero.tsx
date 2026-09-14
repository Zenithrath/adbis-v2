"use client";

import { Reveal } from "@/components/ui/reveal";
import DeptStepper from "@/components/people/DeptStepper";

export default function PeopleHero({
  activeDeptId,
  onSelectDept,
}: {
  activeDeptId: string;
  onSelectDept: (id: string) => void;
}) {
  return (
    <section className="relative w-full border-b border-white/10">
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-16 pt-8 md:pt-14 pb-12 md:pb-16">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-[#F9A8D4]">
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
            </span>
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
