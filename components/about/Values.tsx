"use client";

import { Reveal } from "@/components/ui/reveal";
import {
  Target,
  Users,
  Shield,
  Zap,
  Award,
} from "lucide-react";

const values = [
  {
    no: "01",
    title: "Profesional",
    desc: "Menjalankan setiap amanah dengan standar tinggi, disiplin, dan tanggung jawab penuh.",
    icon: Award,
    color: "#A78BFA",
  },
  {
    no: "02",
    title: "Kolaboratif",
    desc: "Menguatkan sinergi lintas angkatan dan stakeholder untuk dampak berlipat.",
    icon: Users,
    color: "#F9A8D4",
  },
  {
    no: "03",
    title: "Integritas",
    desc: "Transparan, jujur, dan konsisten antara kata dan aksi.",
    icon: Shield,
    color: "#BFDBFE",
  },
  {
    no: "04",
    title: "Adaptif",
    desc: "Cepat tanggap terhadap tren teknologi dan dinamika industri.",
    icon: Zap,
    color: "#FF7AAC",
  },
  {
    no: "05",
    title: "Berdampak",
    desc: "Setiap program diukur dari manfaat nyata bagi mahasiswa dan masyarakat.",
    icon: Target,
    color: "#FFF2B2",
  },
];

export default function Values() {
  return (
    <section
      id="values"
      className="scroll-mt-24 w-full border-y border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 block mb-3">
                • (02) PRINSIP KAMI
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                Nilai Utama{" "}
                <span className="align-top text-lg font-semibold text-white/40">
                  (5)
                </span>
              </h2>
            </div>
            <p className="hidden md:block max-w-xs text-right text-[11px] text-white/50 italic leading-relaxed">
              &ldquo;Lima nilai yang menjadi kompas setiap pengurus dalam
              berkarya&rdquo;
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="group bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/15">
                  <div className="flex items-start justify-between mb-8">
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${v.color}20`,
                        color: v.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-lg font-black text-white/10 transition-colors group-hover:text-white/25">
                      {v.no}
                    </span>
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight leading-none mb-2">
                    {v.title}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">
                    {v.title} 2026
                  </p>
                  <p className="text-xs leading-relaxed text-white/50 mt-auto">
                    {v.desc}
                  </p>
                  <span
                    className="mt-5 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: v.color }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
