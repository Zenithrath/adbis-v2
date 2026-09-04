"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "../hooks/useLenis";
import { Component as SterlingGateNav } from "@/components/ui/sterling-gate-kinetic-navigation";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";
import { Sparkles, ArrowDown, GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const roadmap = [
  {
    semester: "SEMESTER 1–2",
    title: "Know Yourself",
    desc: "Mengenali minat, potensi, kekuatan, dan arah karier.",
    color: "#4346D0",
  },
  {
    semester: "SEMESTER 3",
    title: "Build Your Skills",
    desc: "Mengembangkan hard skill, soft skill, serta pengalaman melalui organisasi, kepanitiaan, dan kegiatan lainnya.",
    color: "#8B5CF6",
  },
  {
    semester: "SEMESTER 4",
    title: "Prepare for Internship",
    desc: "Mempersiapkan CV, LinkedIn, interview, dan kebutuhan untuk melamar magang.",
    color: "#F97316",
  },
  {
    semester: "SEMESTER 5",
    title: "Internship Experience",
    desc: "Menjalani magang dan mendapatkan pengalaman profesional di dunia kerja.",
    color: "#14B8A6",
  },
  {
    semester: "SEMESTER 6",
    title: "Career & Final Project Preparation",
    desc: "Menyelesaikan tugas akhir sambil mulai mempersiapkan transisi ke dunia kerja, seperti memperbarui CV dan LinkedIn, mengumpulkan pengalaman magang, serta mempersiapkan proses rekrutmen.",
    color: "#EC4899",
  },
  {
    semester: "GRADUATION",
    title: "Ready for Your Career",
    desc: "Siap mengambil langkah menuju dunia profesional.",
    color: "#22C55E",
  },
];

export default function CareerPage() {
  useLenis();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".career-hero", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.2 });
      gsap.fromTo(".roadmap-item", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: ".roadmap-timeline", start: "top 85%", once: true } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="relative bg-[#4346D0] min-h-screen overflow-hidden">
      <SterlingGateNav />
      <div className="fixed inset-0 bg-grid-lines pointer-events-none opacity-40" />
      <div className="fixed inset-0 pink-glow pointer-events-none opacity-60" />
      <div className="fixed inset-0 pixel-spot-overlay opacity-20 pointer-events-none" />

      {/* Hero */}
      <section className="relative z-10 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center career-hero">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF8C7] text-[#111] border-2 border-[#111] shadow-[3px_3px_0px_#111] text-xs font-black tracking-widest uppercase mb-6">
            <GraduationCap className="w-3.5 h-3.5" /> Career Preparation
          </div>
          <h1 className="font-unbounded text-[clamp(2rem,6vw,4rem)] font-black text-white leading-[0.9] tracking-tight" style={{ textShadow: "3px 3px 0 #111, 6px 6px 0 rgba(0,0,0,0.15)" }}>
            Career Preparation <br />
            <span className="text-[#FFF8C7]">Roadmap</span>
          </h1>
          <p className="font-body text-white/70 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Panduan langkah demi langkah untuk mempersiapkan kariermu dari semester 1 hingga lulus.
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-2xl mx-auto roadmap-timeline">
          {roadmap.map((item, i) => (
            <div key={item.semester} className="roadmap-item relative">
              {/* Card */}
              <div className="bg-[#FFF8C7] rounded-[18px] border-[3px] border-[#111] shadow-[6px_6px_0px_#111] p-6 sm:p-7 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[12px] border-2 border-[#111] flex items-center justify-center text-white flex-shrink-0" style={{ background: item.color }}>
                    <span className="font-unbounded text-[11px] font-black leading-none text-center">
                      {i + 1 > 9 ? "" : ""}{i + 1}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-unbounded text-[10px] sm:text-[11px] font-black uppercase tracking-[2px]" style={{ color: item.color }}>{item.semester}</span>
                    <h3 className="font-unbounded text-[16px] sm:text-[18px] font-black text-[#111] leading-tight mt-1">{item.title}</h3>
                    <p className="font-body text-[13px] text-[#111]/65 leading-relaxed mt-2">{item.desc}</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              {i < roadmap.length - 1 && (
                <div className="flex justify-center py-3 relative z-20">
                  <div className="w-10 h-10 rounded-full bg-[#4346D0] border-2 border-[#111] shadow-[3px_3px_0px_#111] flex items-center justify-center text-white">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <FooterTapedDesign />
    </main>
  );
}
