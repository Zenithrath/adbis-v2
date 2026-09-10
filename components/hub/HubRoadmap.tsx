"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Compass, Sparkles, GraduationCap, Rocket } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    semester: "Semester 1–2",
    title: "Know Yourself",
    desc: "Mengenali minat, potensi, kekuatan, dan arah karier.",
    icon: Compass,
  },
  {
    semester: "Semester 3",
    title: "Build Your Skills",
    desc: "Mengembangkan hard skill, soft skill, serta pengalaman melalui organisasi, kepanitiaan, dan kegiatan lainnya.",
    icon: Sparkles,
  },
  {
    semester: "Semester 4",
    title: "Prepare for Internship",
    desc: "Mempersiapkan CV, LinkedIn, interview, dan kebutuhan untuk melamar magang.",
    icon: GraduationCap,
  },
  {
    semester: "Semester 5",
    title: "Internship Experience",
    desc: "Menjalani magang dan mendapatkan pengalaman profesional di dunia kerja.",
    icon: Compass,
  },
  {
    semester: "Semester 6",
    title: "Career & Final Project Preparation",
    desc: "Menyelesaikan tugas akhir sambil mulai mempersiapkan transisi ke dunia kerja, seperti memperbarui CV dan LinkedIn, mengumpulkan pengalaman magang, serta mempersiapkan proses rekrutmen.",
    icon: Rocket,
  },
  {
    semester: "Graduation",
    title: "Ready for Your Career",
    desc: "Siap mengambil langkah menuju dunia profesional.",
    icon: GraduationCap,
  },
];

export default function HubRoadmap() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [line, setLine] = useState({ w: 0, h: 0, d: "" });

  // Hitung jalur berkelok yang lewat TEPAT di tengah tiap titik.
  // Titik jalan lurus, garisnya yang meliuk di antara titik (amplitudo
  // besar di desktop, kecil di HP) — diukur ulang saat resize/font siap.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const build = () => {
      const box = track.getBoundingClientRect();
      if (box.width <= 0 || box.height <= 0) return;
      const pts: { x: number; y: number }[] = [];
      dotRefs.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        pts.push({
          x: r.left - box.left + r.width / 2,
          y: r.top - box.top + r.height / 2,
        });
      });
      if (pts.length < 2) return;

      const amp = window.innerWidth >= 768 ? 72 : 16;
      const all: { x: number; y: number }[] = [pts[0]];
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i];
        const b = pts[i + 1];
        const dir = i % 2 === 0 ? 1 : -1;
        all.push({ x: (a.x + b.x) / 2 + dir * amp, y: (a.y + b.y) / 2 });
        all.push(b);
      }

      let d = `M ${all[0].x.toFixed(1)} ${all[0].y.toFixed(1)}`;
      for (let i = 0; i < all.length - 1; i++) {
        const p0 = all[Math.max(0, i - 1)];
        const p1 = all[i];
        const p2 = all[i + 1];
        const p3 = all[Math.min(all.length - 1, i + 2)];
        const c1x = p1.x + (p2.x - p0.x) / 6;
        const c1y = p1.y + (p2.y - p0.y) / 6;
        const c2x = p2.x - (p3.x - p1.x) / 6;
        const c2y = p2.y - (p3.y - p1.y) / 6;
        d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
      }
      setLine({ w: Math.round(box.width), h: Math.round(box.height), d });
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(track);
    window.addEventListener("resize", build);
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(build).catch(() => {});
    }
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", build);
    };
  }, []);
  return (
    <section id="roadmap" className="scroll-mt-[60px] w-full">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-12 md:py-16">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-14 md:mb-20 border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 block mb-3">
                • (02) Jalur Persiapan
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                Career Preparation Roadmap
              </h2>
            </div>
            <span className="hidden md:block text-5xl font-black text-white/10 select-none leading-none">
              1—6
            </span>
          </div>
        </Reveal>

        <div ref={trackRef} className="relative">
          {line.d !== "" && (
            <svg
              aria-hidden
              className="absolute inset-0 h-full w-full"
              viewBox={`0 0 ${line.w} ${line.h}`}
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="hub-line" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF7AAC" />
                  <stop offset="55%" stopColor="#E3C565" />
                  <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
                <filter id="hub-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>
              <path
                d={line.d}
                stroke="#FF7AAC"
                strokeOpacity="0.35"
                strokeWidth="7"
                strokeLinecap="round"
                filter="url(#hub-glow)"
              />
              <path
                d={line.d}
                stroke="url(#hub-line)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d={line.d}
                stroke="#FFFFFF"
                strokeOpacity="0.5"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeDasharray="1 9"
              />
            </svg>
          )}

          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            const left = i % 2 === 0;
            return (
              <div
                key={stage.title}
                className="relative md:grid md:grid-cols-2 md:gap-x-24 pb-14 md:pb-20 last:pb-0"
              >
                <span
                  ref={(el) => {
                    dotRefs.current[i] = el;
                  }}
                  className="absolute top-1.5 left-0 md:left-1/2 md:-translate-x-1/2 z-10 w-7 h-7 rounded-full bg-[#FF7AAC] border-2 border-[#FFFBEB] flex items-center justify-center text-[9px] font-black text-[#1A1B41]"
                >
                  {i + 1}
                </span>

                <span
                  aria-hidden
                  className={cn(
                    "hidden md:block absolute top-0 text-[9rem] lg:text-[12rem] font-black leading-none text-white/[0.04] select-none pointer-events-none",
                    left ? "md:right-2" : "md:left-2"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <Reveal
                  className={cn(
                    "pl-12 md:pl-0",
                    left ? "md:col-start-1 md:text-right" : "md:col-start-2"
                  )}
                  x={left ? -36 : 36}
                  y={12}
                >
                  <div className="inline-block md:max-w-xl text-left">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-[9px] font-black uppercase tracking-widest text-white/60 bg-white/5">
                      <span className="w-4 h-4 rounded-full bg-[#FF7AAC] text-[#1A1B41] flex items-center justify-center">
                        <Icon className="w-2.5 h-2.5" />
                      </span>
                      {stage.semester}
                    </span>
                    <h3 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.95]">
                      {stage.title}
                    </h3>
                    <p className="mt-4 text-xs md:text-[13px] leading-relaxed text-white/55 max-w-md md:inline-block">
                      {stage.desc}
                    </p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
