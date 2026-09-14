"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Reveal } from "@/components/ui/reveal";
import Stars from "@/components/ui/Stars";
import { Sparkle, Plus, DotGrid } from "@/components/ui/Decorations";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { DEPARTMENTS, EXECUTIVE_BOARD } from "@/data/organization";

const ROTATING: { solid: string; outline: string }[] = [
  { solid: "SENTRA", outline: "NAWASENA" },
  { solid: "HMPS ADBIS", outline: "VOKASI" },
];

const totalMembers =
  EXECUTIVE_BOARD.length +
  DEPARTMENTS.reduce((acc, d) => acc + d.staff.length + 2, 0);
const totalProker = DEPARTMENTS.reduce((acc, d) => acc + d.programs.length, 0);

export default function Hero() {
  const router = useRouter();
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setPhraseIdx((i) => (i + 1) % ROTATING.length),
      3500
    );
    return () => clearInterval(t);
  }, []);

  const phrase = ROTATING[phraseIdx];

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section
        className="relative w-full min-h-[46svh] md:min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-14 md:pt-20"
        id="home"
      >
        {/* SVG hiasan sudut — starburst + bintang, opacity rendah */}
        <Image
          src="/images/Vector 2.svg"
          alt=""
          aria-hidden="true"
          width={866}
          height={859}
          className="absolute -top-10 -right-16 md:-right-10 w-40 md:w-64 h-auto opacity-20 animate-float-slow pointer-events-none select-none"
        />
        <Stars className="absolute top-16 left-4 md:left-16 w-24 md:w-36 opacity-40 animate-float-slow-reverse" />
        <DotGrid className="absolute bottom-8 left-4 md:left-12 w-28 md:w-40 opacity-30 animate-float-slow" color="#FFF4C6" />
        {/* Content */}
        <Reveal className="relative z-10 text-center max-w-4xl mx-auto" y={24}>
        <div className="space-y-5 md:space-y-7">
          <h1
            className="font-black uppercase leading-[1.1] tracking-tight select-none"
            style={{ fontSize: "clamp(1.6rem, 4.5vw, 3.8rem)" }}
          >
            <span className="block text-[#FFFBEB]/90">
              Selamat Datang
              <Sparkle className="inline-block w-5 h-5 md:w-7 md:h-7 ml-3 -mt-3 align-middle" color="#FC75A7" />
            </span>
            <span className="block text-[#FFFBEB]/90">
              <Plus className="inline-block w-4 h-4 md:w-5 md:h-5 mr-3 -mt-1 align-middle" color="#FC75A7" />
              Di
            </span>
            <span className="block mt-2 min-h-[1.1em]">
              <MotionConfig reducedMotion="never">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIdx}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    <span
                      style={{
                        color: "#FF7AAC",
                        textShadow: "0 0 50px rgba(255,122,172,0.3)",
                      }}
                    >
                      {phrase.solid}
                    </span>{" "}
                    <span
                      style={{
                        WebkitTextStroke: "2px #FFF2B2",
                        color: "transparent",
                      }}
                    >
                      {phrase.outline}
                    </span>
                  </motion.span>
                </AnimatePresence>
              </MotionConfig>
            </span>
          </h1>

          <p className="text-[#FFFBEB]/80 text-[13px] sm:text-base leading-relaxed max-w-xl mx-auto">
            Kabinet Sentra Nawasena merupakan wadah bagi mahasiswa Administrasi
            Bisnis untuk berkembang, berprestasi, dan menciptakan dampak nyata
            bagi lingkungan sekitar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-1 md:pt-2">
            <InteractiveHoverButton
              text="Learn More"
              onClick={() => router.push("/tentang")}
            />
            <InteractiveHoverButton
              text="Hubungi Kami!"
              onClick={() => router.push("/contact")}
            />
          </div>

          {/* Strip stat kabinet */}
          <div className="flex items-center justify-center gap-4 md:gap-8 pt-4 md:pt-6 text-center">
            {[
              { value: `${totalMembers}+`, label: "Pengurus" },
              { value: `${DEPARTMENTS.length}`, label: "Departemen" },
              { value: `${totalProker}+`, label: "Program Kerja" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-4 md:gap-8">
                {i > 0 && (
                  <span aria-hidden="true" className="h-8 w-px bg-white/15" />
                )}
                <div>
                  <p className="text-xl md:text-3xl font-black tracking-tight text-white">
                    {s.value}
                  </p>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 mt-1">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      {/* ═══════════ TEAM IMAGE ═══════════ */}
      <section className="relative w-full pb-8 md:pb-10 px-6 sm:px-10 md:px-16 lg:px-20">
        <Reveal className="max-w-[1200px] mx-auto relative" y={36}>
          <div className="relative">
            {/* Glow behind image */}
            <div aria-hidden="true" className="absolute -inset-12 rounded-[50px] bg-[#7C77E0]/30 blur-[80px] pointer-events-none" />
            <div aria-hidden="true" className="absolute -inset-16 rounded-[60px] bg-[#FF7AAC]/15 blur-[100px] pointer-events-none" />

            <div className="relative rounded-[20px] md:rounded-[28px] overflow-hidden h-[34svh] sm:h-[55vh] md:h-[60vh]">
              {/* Logos bar — logo asli HMPS + Sentra, teks UB & Vokasi */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center pt-3 md:pt-5">
                <div className="flex items-center gap-2 md:gap-3 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-[#1e293b]/50 backdrop-blur-md border border-white/10">
                  {["UB", "VOKASI"].map((label) => (
                    <span key={label} className="h-7 md:h-8 px-2.5 rounded-full bg-white/10 flex items-center justify-center text-[8px] font-black tracking-wider text-white/70">
                      {label}
                    </span>
                  ))}
                  {[
                    { src: "/images/hmps-logo.webp", alt: "Logo HMPS Adbis" },
                    { src: "/images/sentra-logo.webp", alt: "Logo Sentra Nawasena" },
                  ].map((logo) => (
                    <span key={logo.src} className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={32}
                        height={32}
                        className="w-5 h-5 md:w-6 md:h-6 object-contain"
                      />
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" alt="Pengurus HMPS Administrasi Bisnis" loading="lazy" decoding="async" className="w-full h-full object-cover block" />

              {/* Vignette overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, transparent 55%, rgba(42,31,110,0.7) 100%)",
                }}
              />

              {/* Label bawah */}
              <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-4 md:pb-8">
                <div className="flex items-center gap-3 md:gap-4 mb-1.5 md:mb-2">
                  <span className="h-px w-8 md:w-12 bg-[#FFFBEB]/30" />
                  <h3 className="text-sm md:text-xl font-black uppercase tracking-widest text-[#FFFBEB]">KABINET SENTRA NAWASENA</h3>
                  <span className="h-px w-8 md:w-12 bg-[#FFFBEB]/30" />
                </div>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFFBEB]/50">HMPS Administrasi Bisnis · 2026</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
