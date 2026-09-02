"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-nav", {
        y: -30,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-svg-sentra",
          {
            x: -100,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".hero-svg-nawasena",
          {
            x: 100,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        );

      // Scroll transition - hero slides right
      // gsap.to(heroRef.current, {
      //   x: "100%",
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: rootRef.current,
      //     start: "top top",
      //     end: "+=100%",
      //     scrub: true,
      //     pin: true,
      //   },
      // });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative h-screen w-full overflow-hidden">
      <div
        ref={heroRef}
        className="absolute inset-0 flex h-screen w-full items-center"
        style={{ background: "#5B21B6" }}
      >
        {/* Navbar */}
        <nav className="hero-nav absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-10">
          <div />

          <ul className="hidden items-center gap-2 md:flex">
            {["Home", "Proker", "Tentang", "Struktur", "Kontak"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="group relative px-4 py-2 font-accent text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d946a8] transition-all duration-300 group-hover:w-3/4" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#kontak"
            className="group relative overflow-hidden rounded-full bg-white px-6 py-2.5 font-accent text-xs font-bold uppercase tracking-widest text-[#5B21B6] transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Hubungi Kami</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#d946a8] to-[#EAD8D9] transition-transform duration-300 group-hover:translate-x-0" />
            <span className="absolute inset-0 z-10 flex items-center justify-center translate-x-full text-white transition-transform duration-300 group-hover:translate-x-0 group-hover:text-[#5B21B6]">
              Hubungi Kami
            </span>
          </a>
        </nav>

        {/* Main content */}
        <div className="relative z-10 flex h-full w-full items-center px-6 md:px-12 lg:px-20">
          <div className="flex w-full flex-col gap-2">
            <img src="/images/sentra.svg" alt="Sentra" className="hero-svg-sentra h-auto w-full max-w-3xl md:ml-0 md:max-w-4xl" />
            <img src="/images/nawasena.svg" alt="Nawasena" className="hero-svg-nawasena h-auto w-full max-w-4xl md:ml-16 lg:ml-24 md:max-w-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
