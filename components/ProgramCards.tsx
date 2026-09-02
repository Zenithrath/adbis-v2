"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const programs = [
  {
    title: "Kaderisasi",
    description: "Pembentukan kader mahasiswa yang siap memimpin.",
    color: "bg-purple",
    icon: "◆",
  },
  {
    title: "Keorganisasian",
    description: "Pengelolaan organisasi yang efektif dan transparan.",
    color: "bg-blue",
    icon: "◇",
  },
  {
    title: "Pengembangan Diri",
    description: "Program peningkatan soft skill dan hard skill.",
    color: "bg-mint",
    icon: "○",
  },
  {
    title: "Kewirausahaan",
    description: "Pembekalan jiwa enterpreneurship mahasiswa.",
    color: "bg-pink",
    icon: "□",
  },
];

export default function ProgramCards() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".program-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {programs.map((p, i) => (
        <div
          key={i}
          className={`program-card card-hover ${p.color}/20 rounded-2xl p-6 ring-1 ring-black/5`}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/60 text-2xl text-violet">
            {p.icon}
          </div>
          <h3 className="serif-display text-xl text-ink">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">
            {p.description}
          </p>
        </div>
      ))}
    </div>
  );
}
