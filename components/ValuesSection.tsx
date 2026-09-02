"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    name: "Profesional",
    desc: "Menjalankan setiap tugas dengan standar tinggi, penuh tanggung jawab, dan berorientasi hasil.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#b9cdf7",
  },
  {
    name: "Kolaboratif",
    desc: "Membangun sinergi antar individu dan divisi demi tujuan bersama yang lebih besar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#d3bff5",
  },
  {
    name: "Integritas",
    desc: "Bertindak jujur, konsisten, dan transparan dalam setiap proses dan keputusan organisasi.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#f6c6e0",
  },
  {
    name: "Adaptif",
    desc: "Fleksibel menghadapi perubahan dan mampu menyesuaikan strategi sesuai dinamika lingkungan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#8fe3c6",
  },
  {
    name: "Berdampak",
    desc: "Setiap program dan kegiatan dirancang untuk memberikan manfaat nyata bagi mahasiswa dan masyarakat.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#faf3e8",
  },
];

const cultures = [
  { name: "Komunikasi Terbuka", desc: "Mendorong setiap anggota untuk menyampaikan ide, kritik, dan saran secara terbuka dan konstruktif." },
  { name: "Ketepatan Waktu", desc: "Menghargai waktu sebagai aset berharga — setiap komitmen dipenuhi tepat waktu." },
  { name: "Saling Mendukung", desc: "Membangun ekosistem di mana setiap anggota saling menguatkan, bukan bersaing secara tidak sehat." },
  { name: "Proaktif", desc: "Tidak menunggu perintah — inisiatif dan kepekaan terhadap kebutuhan adalah standar minimum." },
  { name: "Evaluasi & Perbaikan", desc: "Setiap kegiatan diakhiri dengan refleksi untuk terus meningkatkan kualitas kerja." },
  { name: "Profesional & Humanis", desc: "Standar kerja tinggi namun tetap berlandaskan empati dan penghargaan terhadap sesama." },
];

export default function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [activeValue, setActiveValue] = useState(0);

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
    tl.from(".values-word", { y: 60, opacity: 0, stagger: 0.1, duration: 2, ease: "power2.out" }, 1.6);
    tl.from(".values-card", { y: 50, opacity: 0, stagger: 0.08, duration: 1.5, ease: "power2.out" }, 1.9);

    return () => { tl.kill(); };
  }, []);

  return (
    <>
      {/* Entry overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ background: "#8fe3c6", visibility: "hidden" }}
      />

      <section
        ref={sectionRef}
        id="values"
        className="relative w-full"
        style={{ background: "#8fe3c6" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 pt-24 pb-20">
          {/* Label + title */}
          <p className="values-word font-accent text-xs font-bold uppercase tracking-[0.25em] text-[#2b2140]/50 mb-6">
            03 — Values & Culture
          </p>
          <div className="mb-20">
            <h2 className="font-serif text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-[0.9] text-[#2b2140] values-word">
              Nilai
            </h2>
            <h2 className="font-serif text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-[0.9] text-[#2b2140]/30 values-word">
              & Budaya
            </h2>
          </div>

          {/* ── Organizational Values ─────────────────────────── */}
          <div className="mb-24">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-[#2b2140]/30" />
              <span className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-[#2b2140]/50">
                Nilai Organisasi
              </span>
            </div>

            {/* Values — interactive: click card to expand */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setActiveValue(i === activeValue ? -1 : i)}
                  className="values-card group relative flex flex-col gap-3 rounded-2xl border border-[#2b2140]/10 bg-white/40 px-5 py-6 text-left backdrop-blur-sm transition-all duration-300 hover:bg-white/70"
                  style={{
                    outline: activeValue === i ? `2px solid #2b2140` : "2px solid transparent",
                  }}
                  aria-expanded={activeValue === i}
                >
                  {/* Icon badge */}
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-[#2b2140]"
                    style={{ background: v.accent }}
                  >
                    {v.icon}
                  </span>

                  <span className="font-accent text-[13px] font-bold uppercase tracking-wider text-[#2b2140]">
                    {v.name}
                  </span>

                  {/* Expanded desc */}
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{
                      maxHeight: activeValue === i ? "120px" : "0px",
                      opacity: activeValue === i ? 1 : 0,
                    }}
                  >
                    <p className="font-body text-[12px] leading-relaxed text-[#2b2140]/65">
                      {v.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Organizational Culture ────────────────────────── */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-[#2b2140]/30" />
              <span className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-[#2b2140]/50">
                Budaya Organisasi
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cultures.map((c, i) => (
                <div
                  key={i}
                  className="values-card flex gap-5 rounded-2xl border border-[#2b2140]/10 bg-white/30 px-6 py-5 backdrop-blur-sm"
                >
                  {/* Number */}
                  <span className="mt-0.5 font-serif text-[2rem] font-black leading-none text-[#2b2140]/15 flex-shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-accent text-[13px] font-bold uppercase tracking-wider text-[#2b2140] mb-1.5">
                      {c.name}
                    </h4>
                    <p className="font-body text-[12px] leading-relaxed text-[#2b2140]/60">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full" style={{ background: "#2b2140", opacity: 0.08 }} />
      </section>
    </>
  );
}
