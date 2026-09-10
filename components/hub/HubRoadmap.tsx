"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Compass, Sparkles, GraduationCap, Rocket, Target, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    semester: "Semester 1–2",
    title: "Know Yourself",
    desc: "Mengenali minat, potensi, kekuatan, dan arah karier.",
    icon: Compass,
    accent: "from-pink-500/20 to-purple-500/20",
    accentBorder: "border-pink-500/30",
    accentText: "text-pink-400",
    accentDot: "bg-pink-500",
    accentGlow: "shadow-pink-500/30",
  },
  {
    semester: "Semester 3",
    title: "Build Your Skills",
    desc: "Mengembangkan hard skill, soft skill, serta pengalaman melalui organisasi, kepanitiaan, dan kegiatan lainnya.",
    icon: Sparkles,
    accent: "from-amber-500/20 to-orange-500/20",
    accentBorder: "border-amber-500/30",
    accentText: "text-amber-400",
    accentDot: "bg-amber-500",
    accentGlow: "shadow-amber-500/30",
  },
  {
    semester: "Semester 4",
    title: "Prepare for Internship",
    desc: "Mempersiapkan CV, LinkedIn, interview, dan kebutuhan untuk melamar magang.",
    icon: GraduationCap,
    accent: "from-emerald-500/20 to-teal-500/20",
    accentBorder: "border-emerald-500/30",
    accentText: "text-emerald-400",
    accentDot: "bg-emerald-500",
    accentGlow: "shadow-emerald-500/30",
  },
  {
    semester: "Semester 5",
    title: "Internship Experience",
    desc: "Menjalani magang dan mendapatkan pengalaman profesional di dunia kerja.",
    icon: Target,
    accent: "from-blue-500/20 to-cyan-500/20",
    accentBorder: "border-blue-500/30",
    accentText: "text-blue-400",
    accentDot: "bg-blue-500",
    accentGlow: "shadow-blue-500/30",
  },
  {
    semester: "Semester 6",
    title: "Career & Final Project",
    desc: "Menyelesaikan tugas akhir sambil mempersiapkan transisi ke dunia kerja, memperbarui portofolio, serta mempersiapkan proses rekrutmen.",
    icon: Rocket,
    accent: "from-violet-500/20 to-indigo-500/20",
    accentBorder: "border-violet-500/30",
    accentText: "text-violet-400",
    accentDot: "bg-violet-500",
    accentGlow: "shadow-violet-500/30",
  },
  {
    semester: "Graduation",
    title: "Ready for Career",
    desc: "Siap mengambil langkah menuju dunia profesional.",
    icon: Zap,
    accent: "from-rose-500/20 to-pink-500/20",
    accentBorder: "border-rose-500/30",
    accentText: "text-rose-400",
    accentDot: "bg-rose-500",
    accentGlow: "shadow-rose-500/30",
  },
];

export default function HubRoadmap() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [line, setLine] = useState({ w: 0, h: 0, d: "" });

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
    <section id="roadmap" className="scroll-mt-[60px] w-full relative">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 md:py-24 relative z-10">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-16 md:mb-24">
            <div>
              <div className="section-pill mb-6">
                <span className="section-pill-dot" />
                <span>(02) Jalur Persiapan</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none">
                <span className="gradient-text">Career</span> <span className="gradient-text-pink">Preparation</span>
                <br />
                <span className="text-white/90">Roadmap</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-white/50 max-w-md">Perjalananmu dari semester 1 hingga lulus, dirancang untuk mempersiapkan karier impianmu.</p>
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <span className="text-6xl font-black text-white/5 select-none">1—6</span>
            </div>
          </div>
        </Reveal>

        <div ref={trackRef} className="relative">
          {line.d !== "" && (
            <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox={`0 0 ${line.w} ${line.h}`} fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="hub-line" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF7AAC" />
                  <stop offset="30%" stopColor="#E3C565" />
                  <stop offset="60%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
                <filter id="hub-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
                <filter id="hub-glow-strong" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="12" />
                </filter>
              </defs>
              {/* Outer glow */}
              <path d={line.d} stroke="#FF7AAC" strokeOpacity="0.2" strokeWidth="12" strokeLinecap="round" filter="url(#hub-glow-strong)" />
              {/* Main glow */}
              <path d={line.d} stroke="#FF7AAC" strokeOpacity="0.4" strokeWidth="6" strokeLinecap="round" filter="url(#hub-glow)" />
              {/* Gradient line */}
              <path d={line.d} stroke="url(#hub-line)" strokeWidth="2.5" strokeLinecap="round" />
              {/* Dashed overlay */}
              <path d={line.d} stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 8" />
            </svg>
          )}

          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            const left = i % 2 === 0;
            return (
              <div key={stage.title} className="relative md:grid md:grid-cols-2 md:gap-x-28 pb-16 md:pb-24 last:pb-0">
                {/* Animated dot */}
                <span
                  ref={(el) => {
                    dotRefs.current[i] = el;
                  }}
                  className={cn(
                    "absolute top-2 left-0 md:left-1/2 md:-translate-x-1/2 z-10",
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    "bg-gradient-to-br from-white/20 to-white/5",
                    "border-2 border-white/30",
                    "shadow-lg",
                    stage.accentGlow,
                  )}
                >
                  <span className={cn("w-3 h-3 rounded-full", stage.accentDot, "animate-pulse")} />
                </span>

                {/* Step number watermark */}
                <span
                  aria-hidden
                  className={cn(
                    "hidden md:block absolute top-0 text-[8rem] lg:text-[11rem] font-black leading-none select-none pointer-events-none",
                    "bg-gradient-to-b from-white/[0.06] to-transparent bg-clip-text text-transparent",
                    left ? "md:right-4" : "md:left-4",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <Reveal className={cn("pl-14 md:pl-0", left ? "md:col-start-1 md:text-right" : "md:col-start-2")} x={left ? -40 : 40} y={16}>
                  <div className="group inline-block md:max-w-xl text-left">
                    {/* Card */}
                    <div
                      className={cn(
                        "relative p-6 rounded-2xl",
                        "bg-gradient-to-br",
                        stage.accent,
                        "backdrop-blur-sm",
                        "border",
                        stage.accentBorder,
                        "transition-all duration-300 ease-out",
                        "hover:scale-[1.02] hover:shadow-xl",
                        stage.accentGlow,
                        "cursor-default",
                      )}
                    >
                      {/* Inner glow on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {/* Semester badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={cn("w-8 h-8 rounded-lg flex items-center justify-center", "bg-white/10 border border-white/10")}>
                          <Icon className={cn("w-4 h-4", stage.accentText)} />
                        </span>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">{stage.semester}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-[0.95] mb-3">
                        <span className="gradient-text">{stage.title}</span>
                      </h3>

                      {/* Description */}
                      <p className="text-xs md:text-sm leading-relaxed text-white/60 max-w-sm">{stage.desc}</p>

                      {/* Step indicator */}
                      <div className="mt-4 flex items-center gap-2">
                        <span className={cn("w-2 h-2 rounded-full", stage.accentDot)} />
                        <span className="text-[9px] font-bold tracking-widest uppercase text-white/40">Step {String(i + 1).padStart(2, "0")}</span>
                      </div>
                    </div>
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
