"use client";

import { Sparkles, MessageSquare, GraduationCap, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const SERVICES = [
  {
    no: "01",
    title: "Registration Open Recruitment",
    desc: "Daftar sekarang untuk bergabung menjadi pengurus HMPS Adbis.",
    tag: "Formulir Pendaftaran",
    icon: Sparkles,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSc4_cfEm6E5W-xbkWop6pdyAb_XsuGB0lJ-BJ5_S0hibLSdqQ/viewform",
    external: true,
    accent: "#FF7AAC",
  },
  {
    no: "02",
    title: "Link Aspirasi Mahasiswa",
    desc: "Sampaikan aspirasi dan masukanmu untuk kemajuan HMPS Adbis.",
    icon: MessageSquare,
    href: "https://forms.gle/jWh8TNG5hoUVDC2x7",
    tag: "Kotak Suara",
    external: true,
    accent: "#A78BFA",
  },
  {
    no: "03",
    title: "Career Preparation",
    desc: "Lihat roadmap persiapan karier dari semester 1 hingga lulus.",
    icon: GraduationCap,
    href: "#roadmap",
    tag: "Lihat di bawah",
    external: false,
    accent: "#E3C565",
  },
];

export default function HubServices() {
  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-12 md:py-16">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10 border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 block mb-3">
                • (01) Layanan
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                Index Layanan
              </h2>
            </div>
            <span className="hidden sm:block text-5xl md:text-7xl font-black text-white/10 select-none leading-none">
              HUB
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.no} delay={i * 0.08} y={20}>
                <a
                  href={s.href}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.08] hover:border-white/25"
                >
                  <div className="flex items-start justify-between mb-8">
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${s.accent}20`, color: s.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-white/25 transition-all duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="font-mono text-[11px] font-bold text-white/30 tabular-nums">
                    {s.no}
                  </p>
                  <h3 className="mt-2 text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/55 leading-relaxed">{s.desc}</p>
                  <span
                    className="mt-6 inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{ borderColor: `${s.accent}60`, color: s.accent }}
                  >
                    {s.tag}
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
