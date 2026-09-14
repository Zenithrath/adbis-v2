"use client";

import { Reveal } from "@/components/ui/reveal";
import type { Department } from "@/data/organization";
import { deptTextOnDark } from "@/lib/deptColor";

export default function DeptAbout({ dept }: { dept: Department }) {
  const memberCount = dept.staff.length + 2;

  const stats = [
    { value: String(memberCount), label: "Pengurus" },
    { value: String(dept.staff.length), label: "Staff" },
    { value: String(dept.programs.length), label: "Program Kerja" },
  ];

  return (
    <section id="tentang" className="scroll-mt-24 w-full border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-16 md:py-24">
        <Reveal>
          <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 block mb-3">
            • Kenali Lebih Dalam
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
            Tentang{" "}
            <span className="text-[#F9A8D4]">{dept.shortName}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          <Reveal className="lg:col-span-7">
            <div className="h-full bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-8">
              <p
                className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4"
                style={{ color: deptTextOnDark(dept.color) }}
              >
                {dept.tagline}
              </p>
              <p className="text-sm md:text-[15px] text-white/60 leading-relaxed mb-6">
                {dept.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {dept.jobDescription.map((job, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full border border-white/15 text-[10px] font-bold uppercase tracking-wider text-white/60 bg-white/[0.03]"
                  >
                    {job}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-5 grid grid-cols-3 lg:grid-cols-1 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="h-full">
                <div className="h-full bg-white border border-[#1e293b]/10 rounded-2xl p-5 flex flex-col justify-center text-center lg:text-left lg:flex-row lg:items-center lg:gap-4">
                  <span className="text-3xl md:text-4xl font-black tracking-tight text-[#1e293b]">
                    {s.value}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1e293b]/50 mt-1 lg:mt-0">
                    {s.label}
                    <span className="hidden lg:block text-[#1e293b]/35 font-bold normal-case tracking-normal mt-0.5">
                      {dept.shortName}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
