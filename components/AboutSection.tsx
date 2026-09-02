"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const misi = [
  "Menjamin pelayanan prima dan advokasi transparan untuk aspirasi seluruh mahasiswa.",
  "Mewujudkan sentra kolaborasi dan kreativitas mahasiswa.",
  "Mewujudkan siklus organisasi yang profesional, transparan, dan berintegritas.",
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(overlayRef.current, { yPercent: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: 1.5,
        onEnter: () => { gsap.set(overlayRef.current, { autoAlpha: 1 }); },
        onLeave: () => { gsap.set(overlayRef.current, { display: "none" }); },
        onEnterBack: () => { gsap.set(overlayRef.current, { display: "block", autoAlpha: 1 }); },
      },
    });

    tl.to(overlayRef.current, { yPercent: 0, ease: "power2.inOut", duration: 3 }, 0);
    tl.from(".about-word", { y: 60, opacity: 0, stagger: 0.15, duration: 2, ease: "power2.out" }, 1.8);
    tl.from(".about-body", { y: 40, opacity: 0, duration: 2, ease: "power2.out" }, 2.1);

    return () => { tl.kill(); };
  }, []);

  return (
    <>
      {/* Entry overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ background: "#d3bff5", visibility: "hidden" }}
      />

      <section
        ref={sectionRef}
        id="tentang"
        className="relative w-full"
        style={{ background: "#d3bff5" }}
      >
        {/* ── About Kabinet ─────────────────────────────────── */}
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 pt-24 pb-20">
          {/* Label */}
          <p className="about-word font-accent text-xs font-bold uppercase tracking-[0.25em] text-[#2b2140]/50 mb-6">
            02 — About Us
          </p>

          {/* Title */}
          <div className="mb-16 max-w-3xl">
            <h2 className="font-serif text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-[0.9] text-[#2b2140] about-word">
              Sentra
            </h2>
            <h2 className="font-serif text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-[0.9] text-[#2b2140]/30 about-word">
              Nawasena
            </h2>
          </div>

          {/* Two-column: makna + visi-misi */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
            {/* Makna */}
            <div className="about-body">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#2b2140]/30" />
                <span className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-[#2b2140]/50">
                  Makna Kabinet
                </span>
              </div>
              <p className="font-body text-[15px] leading-[1.8] text-[#2b2140]/75">
                <span className="font-serif font-bold text-[#2b2140]">"Sentra Nawasena"</span> adalah{" "}
                <em>Pusat Penggerak Inti yang berorientasi pada Masa Depan Yang Cerah</em>, dengan
                komitmen menjadikan HMPS Administrasi Bisnis sebagai wadah sentral terintegritas
                dalam pengembangan kompetensi dan inovasi, serta menggerakkan seluruh potensi yang
                ada untuk mencapai peluang masa depan yang gemilang.
              </p>
            </div>

            {/* Visi + Misi */}
            <div className="about-body space-y-10">
              {/* Visi */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#2b2140]/30" />
                  <span className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-[#2b2140]/50">
                    Visi
                  </span>
                </div>
                <p className="font-body text-[15px] leading-[1.8] text-[#2b2140]/75">
                  Menjadikan HMPS Administrasi Bisnis sebagai wadah aspirasi dan pusat pengembangan
                  kompetensi yang unggul dan berdampak nyata.
                </p>
              </div>

              {/* Misi */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#2b2140]/30" />
                  <span className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-[#2b2140]/50">
                    Misi
                  </span>
                </div>
                <ol className="space-y-3">
                  {misi.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
                        style={{ background: "#5b3fc9" }}
                      >
                        {i + 1}
                      </span>
                      <p className="font-body text-[14px] leading-[1.7] text-[#2b2140]/70">{item}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-px w-full" style={{ background: "#2b2140", opacity: 0.08 }} />
      </section>
    </>
  );
}
