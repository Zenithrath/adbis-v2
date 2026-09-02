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

function BentoMenu1() {
  return (
    <svg viewBox="0 0 4536 2423" className="h-full w-full block" preserveAspectRatio="none">
      <defs>
        <clipPath id="m1-right" clipPathUnits="userSpaceOnUse">
          <path d="M4536 40C4536 17.9086 4518.09 0 4496 0H1634.5C1612.41 0 1594.5 17.9086 1594.5 40V2232.03C1594.5 2253.31 1611.17 2270.87 1632.42 2271.97L4493.92 2420.81C4516.8 2422 4536 2403.77 4536 2380.87V40Z" />
        </clipPath>
        <clipPath id="m1-left-top" clipPathUnits="userSpaceOnUse">
          <path d="M1544 40C1544 17.9086 1526.09 0 1504 0H40C17.9086 0 -5.34058e-05 17.9086 -5.34058e-05 40V1172C-5.34058e-05 1194.09 17.9086 1212 39.9999 1212H1504C1526.09 1212 1544 1194.09 1544 1172V40Z" />
        </clipPath>
        <clipPath id="m1-left-bottom" clipPathUnits="userSpaceOnUse">
          <path d="M1544 1294C1544 1271.91 1526.09 1254 1504 1254H40C17.9086 1254 -5.34058e-05 1271.91 -5.34058e-05 1294V2156.47C-5.34058e-05 2177.87 16.8498 2195.49 38.2333 2196.43L1502.23 2261.15C1525 2262.16 1544 2243.98 1544 2221.19V1294Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#m1-right)">
        <rect x="1594" y="0" width="2942" height="2423" fill="#E8C4B8" />
        <image href="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" x="1594" y="0" width="2942" height="2423" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#m1-left-top)">
        <rect x="0" y="0" width="1544" height="1212" fill="#D4B8A8" />
        <image href="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80" x="0" y="0" width="1544" height="1212" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#m1-left-bottom)">
        <rect x="0" y="1254" width="1544" height="942" fill="#C4A898" />
        <image href="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80" x="0" y="1254" width="1544" height="942" preserveAspectRatio="xMidYMid slice" />
      </g>
    </svg>
  );
}

function BentoMenu2() {
  return (
    <svg viewBox="0 0 4536 2557" className="h-full w-full block" preserveAspectRatio="none">
      <defs>
        <clipPath id="m2-left" clipPathUnits="userSpaceOnUse">
          <path d="M0 41.7932C0 19.0138 18.9956 0.833342 41.7531 1.83172L2161.42 94.8221C2182.81 95.7604 2199.67 113.374 2199.67 134.784V2442.36C2199.67 2463.91 2182.59 2481.59 2161.05 2482.33L41.3812 2555.57C18.7619 2556.35 0 2538.23 0 2515.59V41.7932Z" />
        </clipPath>
        <clipPath id="m2-right" clipPathUnits="userSpaceOnUse">
          <path d="M2237.85 138.217C2237.85 115.278 2257.1 97.0387 2280.01 98.2745L4498.16 217.958C4519.38 219.103 4536 236.646 4536 257.9V2374.17C4536 2395.8 4518.81 2413.51 4497.19 2414.16L2279.05 2480.27C2256.5 2480.94 2237.85 2462.85 2237.85 2440.29V138.217Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#m2-left)">
        <rect x="0" y="0" width="2199" height="2557" fill="#9B8FE8" />
        <image href="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1200&q=80" x="0" y="0" width="2199" height="2557" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#m2-right)">
        <rect x="2237" y="0" width="2299" height="2557" fill="#8B7FD8" />
        <image href="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=800&q=80" x="2237" y="0" width="2299" height="2557" preserveAspectRatio="xMidYMid slice" />
      </g>
    </svg>
  );
}

function BentoMenu3() {
  return (
    <svg viewBox="0 0 4536 2554" className="h-full w-full block" preserveAspectRatio="none">
      <defs>
        <clipPath id="m3-full" clipPathUnits="userSpaceOnUse">
          <path d="M4536 39.9998C4536 17.404 4517.3 -0.706485 4494.71 0.0205706L38.7128 143.474C17.1336 144.168 -0.000213623 161.863 -0.000213623 183.453V2240.56C-0.000213623 2261.71 16.4539 2279.2 37.5573 2280.49L4493.56 2553.09C4516.57 2554.5 4536 2536.22 4536 2513.17V39.9998Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#m3-full)">
        <rect x="0" y="0" width="4536" height="2554" fill="#E89B4F" />
        <image href="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" x="0" y="0" width="4536" height="2554" preserveAspectRatio="xMidYMid slice" />
      </g>
    </svg>
  );
}

function BentoMenu4() {
  return (
    <svg viewBox="0 0 4536 2455" className="h-full w-full block" preserveAspectRatio="none">
      <defs>
        <clipPath id="m4-left" clipPathUnits="userSpaceOnUse">
          <path d="M0 2415C0 2437.09 17.9086 2455 40 2455H2901.5C2923.59 2455 2941.5 2437.09 2941.5 2415V232.436C2941.5 211.372 2925.16 193.917 2904.15 192.524L42.646 2.82712C19.564 1.29695 0 19.6068 0 42.7395V2415Z" />
        </clipPath>
        <clipPath id="m4-right-top" clipPathUnits="userSpaceOnUse">
          <path d="M2989 1161C2989 1183.09 3006.91 1201 3029 1201H4496C4518.09 1201 4536 1183.09 4536 1161V316.814C4536 295.595 4519.43 278.068 4498.25 276.877L3031.25 194.376C3008.31 193.086 2989 211.339 2989 234.313V1161Z" />
        </clipPath>
        <clipPath id="m4-right-bottom" clipPathUnits="userSpaceOnUse">
          <path d="M2989 2415C2989 2437.09 3006.91 2455 3029 2455H4496C4518.09 2455 4536 2437.09 4536 2415V1283C4536 1260.91 4518.09 1243 4496 1243H3029C3006.91 1243 2989 1260.91 2989 1283V2415Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#m4-left)">
        <rect x="0" y="0" width="2941" height="2455" fill="#8B6F5E" />
        <image href="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80" x="0" y="0" width="2941" height="2455" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#m4-right-top)">
        <rect x="2989" y="193" width="1547" height="1008" fill="#7B5F4E" />
        <image href="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80" x="2989" y="193" width="1547" height="1008" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#m4-right-bottom)">
        <rect x="2989" y="1243" width="1547" height="1212" fill="#6B4F3E" />
        <image href="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80" x="2989" y="1243" width="1547" height="1212" preserveAspectRatio="xMidYMid slice" />
      </g>
    </svg>
  );
}

function BentoAll() {
  return (
    <svg viewBox="0 0 4544 9544" className="h-full w-full block" preserveAspectRatio="none">
      <defs>
        <clipPath id="clip-path-1" clipPathUnits="userSpaceOnUse">
          <path d="M4544 4784.31C4544 4761.71 4525.3 4743.6 4502.71 4744.33L46.7128 4887.78C25.1336 4888.48 7.99979 4906.17 7.99979 4927.76V6984.87C7.99979 7006.02 24.4539 7023.51 45.5573 7024.8L4501.56 7297.4C4524.57 7298.81 4544 7280.53 4544 7257.48V4784.31Z" />
        </clipPath>
        <clipPath id="clip-path-2" clipPathUnits="userSpaceOnUse">
          <path d="M4544 40C4544 17.9086 4526.09 0 4504 0H1642.5C1620.41 0 1602.5 17.9086 1602.5 40V2232.03C1602.5 2253.31 1619.17 2270.87 1640.42 2271.97L4501.92 2420.81C4524.8 2422 4544 2403.77 4544 2380.87V40Z" />
        </clipPath>
        <clipPath id="clip-path-3" clipPathUnits="userSpaceOnUse">
          <path d="M1552 40C1552 17.9086 1534.09 0 1512 0H48C25.9086 0 7.99995 17.9086 7.99995 40V1172C7.99995 1194.09 25.9086 1212 47.9999 1212H1512C1534.09 1212 1552 1194.09 1552 1172V40Z" />
        </clipPath>
        <clipPath id="clip-path-4" clipPathUnits="userSpaceOnUse">
          <path d="M1552 1294C1552 1271.91 1534.09 1254 1512 1254H48C25.9086 1254 7.99995 1271.91 7.99995 1294V2156.47C7.99995 2177.87 24.8498 2195.49 46.2333 2196.43L1510.23 2261.15C1533 2262.16 1552 2243.98 1552 2221.19V1294Z" />
        </clipPath>
        <clipPath id="clip-path-5" clipPathUnits="userSpaceOnUse">
          <path d="M8 9504C8 9526.09 25.9086 9544 48 9544H2909.5C2931.59 9544 2949.5 9526.09 2949.5 9504V7321.44C2949.5 7300.37 2933.16 7282.92 2912.15 7281.52L50.646 7091.83C27.564 7090.3 8 7108.61 8 7131.74V9504Z" />
        </clipPath>
        <clipPath id="clip-path-6" clipPathUnits="userSpaceOnUse">
          <path d="M2997 9504C2997 9526.09 3014.91 9544 3037 9544H4504C4526.09 9544 4544 9526.09 4544 9504V8372C4544 8349.91 4526.09 8332 4504 8332H3037C3014.91 8332 2997 8349.91 2997 8372V9504Z" />
        </clipPath>
        <clipPath id="clip-path-7" clipPathUnits="userSpaceOnUse">
          <path d="M2997 8250C2997 8272.09 3014.91 8290 3037 8290H4504C4526.09 8290 4544 8272.09 4544 8250V7405.81C4544 7384.59 4527.43 7367.07 4506.25 7365.88L3039.25 7283.38C3016.31 7282.09 2997 7300.34 2997 7323.31V8250Z" />
        </clipPath>
        <clipPath id="clip-path-8" clipPathUnits="userSpaceOnUse">
          <path d="M0 2302.79C0 2280.01 18.9956 2261.83 41.7531 2262.83L2161.42 2355.82C2182.81 2356.76 2199.67 2374.37 2199.67 2395.78V4703.36C2199.67 4724.91 2182.59 4742.59 2161.05 4743.33L41.3812 4816.57C18.7619 4817.35 0 4799.23 0 4776.59V2302.79Z" />
        </clipPath>
        <clipPath id="clip-path-9" clipPathUnits="userSpaceOnUse">
          <path d="M2237.85 2399.22C2237.85 2376.28 2257.1 2358.04 2280.01 2359.27L4498.16 2478.96C4519.38 2480.1 4536 2497.65 4536 2518.9V4635.17C4536 4656.8 4518.81 4674.51 4497.19 4675.16L2279.05 4741.27C2256.5 4741.94 2237.85 4723.85 2237.85 4701.29V2399.22Z" />
        </clipPath>
      </defs>

      {/* Menu 2 - Tengah Besar */}
      <g clipPath="url(#clip-path-1)">
        <rect x="8" y="4744" width="4536" height="2554" fill="#9B8FE8" />
        <image href="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" x="8" y="4744" width="4536" height="2554" preserveAspectRatio="xMidYMid slice" />
      </g>

      {/* Menu 1 - Kanan Atas Besar */}
      <g clipPath="url(#clip-path-2)">
        <rect x="1602" y="0" width="2942" height="2421" fill="#E8C4B8" />
        <image href="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80" x="1602" y="0" width="2942" height="2421" preserveAspectRatio="xMidYMid slice" />
      </g>

      {/* Menu 1 - Kiri Atas Small */}
      <g clipPath="url(#clip-path-3)">
        <rect x="8" y="0" width="1544" height="1212" fill="#D4B8A8" />
        <image href="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80" x="8" y="0" width="1544" height="1212" preserveAspectRatio="xMidYMid slice" />
      </g>

      {/* Menu 1 - Kiri Tengah-Atas Small */}
      <g clipPath="url(#clip-path-4)">
        <rect x="8" y="1254" width="1544" height="1008" fill="#C4A898" />
        <image href="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" x="8" y="1254" width="1544" height="1008" preserveAspectRatio="xMidYMid slice" />
      </g>

      {/* Menu 4 - Kiri Bawah Besar */}
      <g clipPath="url(#clip-path-5)">
        <rect x="8" y="7091" width="2942" height="2453" fill="#8B6F5E" />
        <image href="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80" x="8" y="7091" width="2942" height="2453" preserveAspectRatio="xMidYMid slice" />
      </g>

      {/* Menu 4 - Kanan Bawah Paling Bawah */}
      <g clipPath="url(#clip-path-6)">
        <rect x="2997" y="8332" width="1547" height="1212" fill="#6B4F3E" />
        <image href="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80" x="2997" y="8332" width="1547" height="1212" preserveAspectRatio="xMidYMid slice" />
      </g>

      {/* Menu 4 - Kanan Bawah Tengah */}
      <g clipPath="url(#clip-path-7)">
        <rect x="2997" y="7283" width="1547" height="1007" fill="#7B5F4E" />
        <image href="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" x="2997" y="7283" width="1547" height="1007" preserveAspectRatio="xMidYMid slice" />
      </g>

      {/* Menu 2 - Tengah-Kiri Medium */}
      <g clipPath="url(#clip-path-8)">
        <rect x="0" y="2262" width="2200" height="2555" fill="#8B7FD8" />
        <image href="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80" x="0" y="2262" width="2200" height="2555" preserveAspectRatio="xMidYMid slice" />
      </g>

      {/* Menu 2 - Tengah-Kanan Medium */}
      <g clipPath="url(#clip-path-9)">
        <rect x="2237" y="2359" width="2299" height="2383" fill="#E89B4F" />
        <image href="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1000&q=80" x="2237" y="2359" width="2299" height="2383" preserveAspectRatio="xMidYMid slice" />
      </g>

      {/* Menu 3 - Full */}
      <g clipPath="url(#clip-path-1)">
        <rect x="0" y="4744" width="4544" height="2554" fill="#E89B4F" />
        <image href="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" x="0" y="4744" width="4544" height="2554" preserveAspectRatio="xMidYMid slice" />
      </g>
    </svg>
  );
}

const bentoComponents = [BentoMenu1, BentoMenu2, BentoMenu3, BentoMenu4];

export default function Home() {
  useLenis();
  const [activeProgram, setActiveProgram] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const halfPanelRef = useRef<HTMLDivElement>(null);
  const prokerLayerRef = useRef<HTMLDivElement>(null);
  const prokerContentScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-svg-sentra", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      gsap.fromTo(".hero-svg-nawasena", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });

      gsap.set(prokerLayerRef.current, { yPercent: 100 });

      gsap.set(".tagline-word", { opacity: 0, x: -50 });
      gsap.set(".half-word", { opacity: 0, x: -50 });

      const pinnedTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=800%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress > 0.5) {
              const prokerProgress = (self.progress - 0.5) / 0.5;
              const idx = Math.min(3, Math.floor(prokerProgress * 4));
              setActiveProgram(idx);
            }
          },
        },
      });

      pinnedTl
        .fromTo(taglineRef.current, { x: "-100%" }, { x: "0%", ease: "none", duration: 4 })
        .to(".tagline-word", { opacity: 1, x: 0, stagger: 0.8, ease: "power2.out", duration: 3 })
        .to({}, { duration: 4 })
        .fromTo(halfPanelRef.current, { x: "-100%" }, { x: "0%", ease: "none", duration: 4 })
        .to(".half-word", { opacity: 1, x: 0, stagger: 0.8, ease: "power2.out", duration: 3 })
        .to({}, { duration: 4 })
        .fromTo(prokerLayerRef.current, { yPercent: 100 }, { yPercent: 0, ease: "power2.inOut", duration: 5 })
        .to({}, { duration: 1 })
        .to(prokerContentScrollRef.current, { y: () => -(prokerContentScrollRef.current.scrollHeight - prokerContentScrollRef.current.parentElement.clientHeight), ease: "none", duration: 16 })
        .to({}, { duration: 2 });
    });

    return () => ctx.revert();
  }, []);

  const ActiveBento = bentoComponents[activeProgram];

  return (
    <main>
      <div ref={wrapperRef} className="relative h-screen w-full">
        {/* Hero */}
        <div className="absolute inset-0 z-10 flex h-screen w-full items-center" style={{ background: "#5B21B6" }}>
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
                <span className="tagline-word block">Me</span>
                <span className="tagline-word block">Rangkai</span>
                <span className="tagline-word block">Sinergi</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Half panel */}
        <div ref={halfPanelRef} className="absolute left-0 top-0 z-30 flex h-full w-1/2 items-center justify-center px-6" style={{ background: "#5B21B6" }}>
          <div className="text-center">
            <h2 className="font-accent text-[2rem] leading-[0.9] font-black uppercase text-white md:text-[3rem] lg:text-[4rem]">
              <span className="half-word block">Wujud</span>
              <span className="half-word block">Kan</span>
              <span className="half-word block">Aksi</span>
            </h2>
          </div>
        </div>

        {/* Proker layer – cream + sidebar + content slide up together */}
        <div ref={prokerLayerRef} className="absolute inset-0 z-40 flex" style={{ background: "#faf3e8" }}>
          {/* Sidebar */}
          <div className="h-full w-[240px] flex-shrink-0 pl-8 pt-8 pb-8">
            <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white px-4 py-5">
              {programs.map((item, i) => {
                const isActive = i === activeProgram;
                return (
                  <div key={i}>
                    <button onClick={() => setActiveProgram(i)} className={`group flex w-full items-center gap-3 px-2 py-3 transition-colors hover:bg-black/5 ${!isActive ? "border-b border-black/10" : ""}`}>
                      <svg
                        className={`h-3 w-3 flex-shrink-0 text-[#2b2140] transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: item.badgeColor }}>
                        {item.num}
                      </span>
                      <span className={`font-accent text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? "text-[#2b2140]/40" : "text-[#2b2140]"}`}>{item.name}</span>
                    </button>
                    <div className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]" style={{ maxHeight: isActive ? "300px" : "0px", opacity: isActive ? 1 : 0 }}>
                      <div className="px-1 pb-4 pt-2 text-center">
                        <div className="mb-1">
                          <svg viewBox="0 0 200 60" className="mx-auto h-12 w-40">
                            <path id="archedPath" d="M 25 55 Q 100 5 175 55" fill="transparent" />
                            <text className="fill-[#2b2140] font-accent text-[11px] font-bold uppercase tracking-[0.15em]">
                              <textPath href="#archedPath" startOffset="50%" textAnchor="middle">
                                Program Kerja
                              </textPath>
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

          {/* Content – scrollable */}
          <div className="flex-1 h-full overflow-hidden">
            <div ref={prokerContentScrollRef} className="h-[400vh]">
              <div className="h-full w-full py-5 px-[5px]">
                <BentoAll />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
