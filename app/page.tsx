"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "./hooks/useLenis";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    num: 1,
    name: "Invest Adbis",
    title: "Invest Adbis",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    badgeColor: "#E8C4B8",
  },
  {
    num: 2,
    name: "Bina Masyarakat",
    title: "Bina Masyarakat",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    badgeColor: "#9B8FE8",
  },
  {
    num: 3,
    name: "Market Day",
    title: "Market Day",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    badgeColor: "#E89B4F",
  },
  {
    num: 4,
    name: "Sencrea",
    title: "Sencrea",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    badgeColor: "#8B6F5E",
  },
];

export default function Home() {
  useLenis();
  const [activeProgram, setActiveProgram] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const halfPanelRef = useRef<HTMLDivElement>(null);

  // proker refs
  const prokerOverlayRef = useRef<HTMLDivElement>(null);
  const prokerBgRef = useRef<HTMLDivElement>(null);
  const prokerSidebarRef = useRef<HTMLDivElement>(null);
  const prokerContentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActiveProgram(index);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    const sections = sectionRefs.current.filter(Boolean);
    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-nav", { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
      gsap.fromTo(".hero-svg-sentra", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      gsap.fromTo(".hero-svg-nawasena", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });

      const pinnedTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=500%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      pinnedTl
        .fromTo(taglineRef.current,
          { x: "-100%" },
          { x: "0%", duration: 3 }
        )
        .fromTo(".tagline-word",
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 2, stagger: 0.15 },
          2
        )
        .to({}, { duration: 2 })
        .fromTo(halfPanelRef.current,
          { x: "-100%" },
          { x: "0%", duration: 3 },
          7
        )
        .fromTo(".half-word",
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 2, stagger: 0.15 },
          9
        )
        .to({}, { duration: 2 });

      gsap.fromTo(prokerOverlayRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: prokerBgRef.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(prokerSidebarRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: prokerBgRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(prokerContentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: prokerBgRef.current,
            start: "top 55%",
            end: "top 15%",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* ── Hero / Tagline / HalfPanel – GSAP pinned ─────────── */}
      <div ref={wrapperRef} className="relative h-screen w-full overflow-hidden">
        {/* Hero */}
        <div className="absolute inset-0 z-10 flex h-screen w-full items-center" style={{ background: "#5B21B6" }}>
          <nav className="hero-nav absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-10">
            <div />
            <ul className="hidden items-center gap-2 md:flex">
              {["Home", "Proker", "Tentang", "Struktur", "Kontak"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="group relative px-4 py-2 font-accent text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#kontak" className="rounded-full bg-white px-6 py-2.5 font-accent text-xs font-bold uppercase tracking-widest text-[#5B21B6]">
              Hubungi Kami
            </a>
          </nav>
          <div className="relative z-10 flex h-full w-full items-center px-6 md:px-12 lg:px-20">
            <div className="flex w-full flex-col gap-2">
              <img src="/images/sentra.svg" alt="Sentra" className="hero-svg-sentra h-auto w-full max-w-3xl md:max-w-4xl" />
              <img src="/images/nawasena.svg" alt="Nawasena" className="hero-svg-nawasena h-auto w-full max-w-4xl md:ml-16 lg:ml-24 md:max-w-5xl" />
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div ref={taglineRef} className="absolute inset-0 z-20 flex h-screen w-full" style={{ background: "#faf3e8" }}>
          <div className="ml-auto flex h-full w-1/2 items-center justify-center px-6">
            <div className="text-center">
              <h2 className="font-accent text-[2rem] leading-[0.9] font-black uppercase text-[#2b2140] md:text-[3rem] lg:text-[4rem]">
                <span className="block tagline-word">Me</span>
                <span className="block tagline-word">Rangkai</span>
                <span className="block tagline-word">Sinergi</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Half panel */}
        <div ref={halfPanelRef} className="absolute left-0 top-0 z-30 flex h-full w-1/2 items-center justify-center px-6" style={{ background: "#5B21B6" }}>
          <div className="text-center">
            <h2 className="font-accent text-[2rem] leading-[0.9] font-black uppercase text-white md:text-[3rem] lg:text-[4rem]">
              <span className="block half-word">Wujud</span>
              <span className="block half-word">Kan</span>
              <span className="block half-word">Aksi</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Fixed overlay that slides up during proker entry animation */}
      <div
        ref={prokerOverlayRef}
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ background: "#faf3e8" }}
      />

      {/* ── Proker Section ───────────────────────────────────── */}
      <div className="w-full">
        <div
          ref={prokerBgRef}
          id="proker"
          className="relative w-full"
          style={{ background: "#faf3e8" }}
        >
          <div className="flex w-full items-start">
            {/* SIDEBAR – sticky */}
            <div ref={prokerSidebarRef} className="sticky top-0 h-screen w-[240px] flex-shrink-0 pl-8 pt-8 pb-8">
              <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white px-4 py-5">
                {programs.map((item, i) => {
                  const isActive = i === activeProgram;
                  return (
                    <div key={i}>
                      <button
                        onClick={() => scrollToSection(i)}
                        className={`group flex w-full items-center gap-3 px-2 py-3 transition-colors hover:bg-black/5 ${!isActive ? "border-b border-black/10" : ""}`}
                      >
                        <svg
                          className={`h-3 w-3 flex-shrink-0 text-[#2b2140] transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: item.badgeColor }}>
                          {item.num}
                        </span>
                        <span className={`font-accent text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? "text-[#2b2140]/40" : "text-[#2b2140]"}`}>
                          {item.name}
                        </span>
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        style={{ maxHeight: isActive ? "300px" : "0px", opacity: isActive ? 1 : 0 }}
                      >
                        <div className="px-1 pb-4 pt-2 text-center">
                          <div className="mb-1">
                            <svg viewBox="0 0 200 60" className="mx-auto h-12 w-40">
                              <path id="archedPath" d="M 25 55 Q 100 5 175 55" fill="transparent" />
                              <text className="fill-[#2b2140] font-accent text-[11px] font-bold uppercase tracking-[0.15em]">
                                <textPath href="#archedPath" startOffset="50%" textAnchor="middle">Program Kerja</textPath>
                              </text>
                            </svg>
                          </div>
                          <div className="mb-2">
                            <span className="inline-flex h-10 items-center justify-center rounded-xl px-4 text-xl font-bold text-white" style={{ background: item.badgeColor }}>
                              {item.num}
                            </span>
                          </div>
                          <h3 className="mb-2 font-serif text-[28px] font-bold leading-tight text-[#2b2140]">{item.title}</h3>
                          <p className="px-1 font-body text-[10px] leading-relaxed text-[#2b2140]/55">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}
            <div ref={prokerContentRef} className="flex-1 pl-4 pr-8 py-8">
              {/* Menu 1 - Group 18 */}
              <div ref={(el) => { sectionRefs.current[0] = el; }} className="relative" style={{ height: "calc(85vh - 4rem)" }}>
                <svg viewBox="0 0 4575 2480" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <clipPath id="m1-right" clipPathUnits="userSpaceOnUse">
                      <path d="M4575 106.729C4575 48.7605 4526.31 2.6875 4468.43 5.88251L1699.43 158.732C1645.9 161.687 1604 205.961 1604 259.579V2208.81C1604 2262.27 1645.66 2306.47 1699.03 2309.63L4468.03 2473.66C4526.05 2477.1 4575 2430.97 4575 2372.84V106.729Z" />
                    </clipPath>
                    <clipPath id="m1-left-top" clipPathUnits="userSpaceOnUse">
                      <path d="M1520 289.816C1520 231.258 1470.36 184.974 1411.95 189.062L93.9488 281.301C41.0338 285.005 0 329.011 0 382.055V1097.5C0 1153.28 45.2192 1198.5 101 1198.5H1419C1474.78 1198.5 1520 1153.28 1520 1097.5V289.816Z" />
                    </clipPath>
                    <clipPath id="m1-left-bottom" clipPathUnits="userSpaceOnUse">
                      <path d="M1520 1385C1520 1329.22 1474.78 1284 1419 1284H101C45.2193 1284 0 1329.22 0 1385V2128.17C0 2182.19 42.5045 2226.65 96.4689 2229.07L1414.47 2288.26C1471.97 2290.84 1520 2244.92 1520 2187.36V1385Z" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#m1-right)">
                    <rect x="1604" y="0" width="2971" height="2480" fill="#E8C4B8" />
                    <image href="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" x="1604" y="0" width="2971" height="2480" preserveAspectRatio="xMidYMid slice" />
                  </g>
                  <g clipPath="url(#m1-left-top)">
                    <rect x="0" y="180" width="1520" height="1020" fill="#D4B8A8" />
                    <image href="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80" x="0" y="180" width="1520" height="1020" preserveAspectRatio="xMidYMid slice" />
                  </g>
                  <g clipPath="url(#m1-left-bottom)">
                    <rect x="0" y="1284" width="1520" height="1010" fill="#C4A898" />
                    <image href="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80" x="0" y="1284" width="1520" height="1010" preserveAspectRatio="xMidYMid slice" />
                  </g>
                </svg>
              </div>

              {/* Menu 2 - Group 19 */}
              <div ref={(el) => { sectionRefs.current[1] = el; }} className="relative" style={{ height: "calc(85vh - 4rem)" }}>
                <svg viewBox="0 0 4575 2557" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <clipPath id="m2-left" clipPathUnits="userSpaceOnUse">
                      <path d="M0 108.974C0 50.175 50.0303 3.80541 108.66 8.26492L2095.66 159.4C2148.32 163.406 2189 207.3 2189 260.109V2317.95C2189 2371.15 2147.74 2415.22 2094.65 2418.73L107.653 2549.89C49.3806 2553.74 0 2507.51 0 2449.11V108.974Z" />
                    </clipPath>
                    <clipPath id="m2-right" clipPathUnits="userSpaceOnUse">
                      <path d="M2288 269.395C2288 211.179 2337.09 165.016 2395.19 168.585L4480.19 296.676C4533.47 299.949 4575 344.11 4575 397.486V2136.47C4575 2189.25 4534.37 2233.13 4481.75 2237.18L2396.75 2397.63C2338.09 2402.15 2288 2355.76 2288 2296.93V269.395Z" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#m2-left)">
                    <rect x="0" y="0" width="2189" height="2557" fill="#9B8FE8" />
                    <image href="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1200&q=80" x="0" y="0" width="2189" height="2557" preserveAspectRatio="xMidYMid slice" />
                  </g>
                  <g clipPath="url(#m2-right)">
                    <rect x="2288" y="0" width="2287" height="2557" fill="#8B7FD8" />
                    <image href="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=800&q=80" x="2288" y="0" width="2287" height="2557" preserveAspectRatio="xMidYMid slice" />
                  </g>
                </svg>
              </div>

              {/* Menu 3 - Rectangle 23 */}
              <div ref={(el) => { sectionRefs.current[2] = el; }} className="relative" style={{ height: "calc(85vh - 4rem)" }}>
                <svg viewBox="0 0 4575 2543" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <clipPath id="m3-full" clipPathUnits="userSpaceOnUse">
                      <path d="M4575 101.003C4575 42.683 4525.75 -3.51747 4467.54 0.209954L94.5445 280.273C41.3789 283.678 0 327.792 0 381.067V2134.67C0 2187.7 41.0235 2231.71 93.9308 2235.42L4466.93 2542.25C4525.35 2546.34 4575 2500.06 4575 2441.49V101.003Z" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#m3-full)">
                    <rect x="0" y="0" width="4575" height="2543" fill="#E89B4F" />
                    <image href="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" x="0" y="0" width="4575" height="2543" preserveAspectRatio="xMidYMid slice" />
                  </g>
                </svg>
              </div>

              {/* Menu 4 - Group 20 */}
              <div ref={(el) => { sectionRefs.current[3] = el; }} className="relative" style={{ height: "calc(85vh - 4rem)" }}>
                <svg viewBox="0 0 4575 2480" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <clipPath id="m4-left" clipPathUnits="userSpaceOnUse">
                      <path d="M0 106.729C0 48.7605 48.6864 2.6875 106.567 5.88251L2875.57 158.732C2929.1 161.687 2971 205.961 2971 259.579V2208.81C2971 2262.27 2929.34 2306.47 2875.97 2309.63L106.973 2473.66C48.9451 2477.1 0 2430.97 0 2372.84V106.729Z" />
                    </clipPath>
                    <clipPath id="m4-right-top" clipPathUnits="userSpaceOnUse">
                      <path d="M3055 289.816C3055 231.258 3104.64 184.974 3163.05 189.062L4481.05 281.301C4533.97 285.005 4575 329.011 4575 382.055V1097.5C4575 1153.28 4529.78 1198.5 4474 1198.5H3156C3100.22 1198.5 3055 1153.28 3055 1097.5V289.816Z" />
                    </clipPath>
                    <clipPath id="m4-right-bottom" clipPathUnits="userSpaceOnUse">
                      <path d="M3055 1385C3055 1329.22 3100.22 1284 3156 1284H4474C4529.78 1284 4575 1329.22 4575 1385V2128.17C4575 2182.19 4532.5 2226.65 4478.53 2229.07L3160.53 2288.26C3103.03 2290.84 3055 2244.92 3055 2187.36V1385Z" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#m4-left)">
                    <rect x="0" y="0" width="2971" height="2480" fill="#8B6F5E" />
                    <image href="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80" x="0" y="0" width="2971" height="2480" preserveAspectRatio="xMidYMid slice" />
                  </g>
                  <g clipPath="url(#m4-right-top)">
                    <rect x="3055" y="180" width="1520" height="1020" fill="#7B5F4E" />
                    <image href="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80" x="3055" y="180" width="1520" height="1020" preserveAspectRatio="xMidYMid slice" />
                  </g>
                  <g clipPath="url(#m4-right-bottom)">
                    <rect x="3055" y="1284" width="1520" height="1010" fill="#6B4F3E" />
                    <image href="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80" x="3055" y="1284" width="1520" height="1010" preserveAspectRatio="xMidYMid slice" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
