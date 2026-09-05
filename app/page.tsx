"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    num: "P-01",
    name: "Invest Adbis",
    title: "Invest Adbis",
    desc: "Program kerja unggulan berbasis pengembangan investasi dan literasi finansial guna meningkatkan pemahaman serta keterlibatan mahasiswa dalam bidang bisnis dan pasar modal.",
    items: ["Edukasi Finansial & Pasar Modal", "Workshop Investasi Praktis", "Mentoring Pengembangan Aset"],
    bgColor: "bg-[#BFDBFE]",
    cardBg: "bg-[#F9A8D4]",
    textColor: "text-[#1e293b]/80",
    btnBorder: "border-[#1e293b]",
    btnHover: "hover:bg-[#1e293b] hover:text-[#FFFBEB]",
  },
  {
    num: "P-02",
    name: "Bina Masyarakat",
    title: "Bina Masyarakat",
    desc: "Wujud pengabdian masyarakat nyata oleh HMPS Administrasi Bisnis untuk memberikan dampak sosial, pemberdayaan UMKM, serta pengabdian lingkungan yang berkelanjutan.",
    items: ["Pemberdayaan Ekonomi Lokal", "Pendampingan Bisnis UMKM", "Aksi Sosial Mahasiswa"],
    bgColor: "bg-[#F9A8D4]",
    cardBg: "bg-[#FFFBEB]",
    textColor: "text-[#1e293b]/80",
    btnBorder: "border-[#1e293b]",
    btnHover: "hover:bg-[#1e293b] hover:text-[#FFFBEB]",
  },
  {
    num: "P-03",
    name: "Market Day",
    title: "Market Day",
    desc: "Ajang pameran dan bazaar kewirausahaan mahasiswa Administrasi Bisnis untuk menyimulasikan pengalaman bisnis nyata dan pemasaran produk secara profesional.",
    items: ["Exhibition Produk Mahasiswa", "B2C Sales Practice", "Networking & Tenant Showcase"],
    bgColor: "bg-[#FFFBEB]",
    cardBg: "bg-[#BFDBFE]",
    textColor: "text-[#1e293b]/80",
    btnBorder: "border-[#1e293b]",
    btnHover: "hover:bg-[#1e293b] hover:text-[#FFFBEB]",
  },
  {
    num: "P-04",
    name: "Sencrea",
    title: "SENCREA",
    desc: "Sentra Kreativitas Mahasiswa sebagai wadah eksplorasi bakat seni, budaya, serta apresiasi karya kreatif antar mahasiswa Administrasi Bisnis.",
    items: ["Pertunjukan Seni & Budaya", "Lomba Kreativitas Mahasiswa", "Apresiasi Karya Musik & Visual"],
    bgColor: "bg-[#1e293b] text-[#FFFBEB]",
    cardBg: "bg-[#334155] text-[#BFDBFE]",
    textColor: "text-[#FFFBEB]/70",
    btnBorder: "border-[#FFFBEB]",
    btnHover: "hover:bg-[#FFFBEB] hover:text-[#1e293b]",
  },
];

const WORDS = [
  ["WELCOME TO", "OUR WEBSITE"],
  ["HMPS", "ADBIS"],
  ["KABINET SENTRA", "NAWASENA"],
];

/* ═══════════ SVG BENTO COMPONENTS ═══════════ */
function BentoMenu1() {
  return (
    <svg viewBox="0 0 4536 2423" className="h-full w-full block" preserveAspectRatio="xMidYMid meet">
      <defs>
        <clipPath id="m1-right" clipPathUnits="userSpaceOnUse">
          <path d="M4536 40C4536 17.9086 4518.09 0 4496 0H1634.5C1612.41 0 1594.5 17.9086 1594.5 40V2232.03C1594.5 2253.31 1611.17 2270.87 1632.42 2271.97L4493.92 2420.81C4516.8 2422 4536 2403.77 4536 2380.87V40Z" />
        </clipPath>
        <clipPath id="m1-left-top" clipPathUnits="userSpaceOnUse">
          <path d="M1544 40C1544 17.9086 1526.09 0 1504 0H40C17.9086 0 -5.34058e-05 17.9086 -5.34058e-05 40V1172C-5.34058e-05 1194.09 17.9086 1212 39.9999 1212H1504C1526.09 1212 1544 1194.09 1544 1172V40Z" />
        </clipPath>
        <clipPath id="m1-left-bottom" clipPathUnits="userSpaceOnUse">
          <path d="M1544 1294C1544 1271.91 1526.09 1254 1504 1254H40C17.9086 1254 -5.34058e-05 1271.91 -5.34058e-05 1294V2156.47C-5.34058e-05 2177.87 16.8498 2195.49 38.2333 2196.43L1502.23 2261.15C1525 2262.16 1544 2221.19V1294Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#m1-right)">
        <rect x="1594" y="0" width="2942" height="2423" fill="#E8C4B8" />
        <image href="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80" x="1594" y="0" width="2942" height="2423" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#m1-left-top)">
        <rect x="0" y="0" width="1544" height="1212" fill="#D4B8A8" />
        <image href="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80" x="0" y="0" width="1544" height="1212" preserveAspectRatio="xMidYMid slice" />
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
    <svg viewBox="0 0 4536 2557" className="h-full w-full block" preserveAspectRatio="xMidYMid meet">
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
        <image href="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" x="0" y="0" width="2199" height="2557" preserveAspectRatio="xMidYMid slice" />
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
    <svg viewBox="0 0 4536 2554" className="h-full w-full block" preserveAspectRatio="xMidYMid meet">
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
    <svg viewBox="0 0 4536 2455" className="h-full w-full block" preserveAspectRatio="xMidYMid meet">
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
        <clipPath id="all-1" clipPathUnits="userSpaceOnUse">
          <path d="M4544 4784.31C4544 4761.71 4525.3 4743.6 4502.71 4744.33L46.7128 4887.78C25.1336 4888.48 7.99979 4906.17 7.99979 4927.76V6984.87C7.99979 7006.02 24.4539 7023.51 45.5573 7024.8L4501.56 7297.4C4524.57 7298.81 4544 7280.53 4544 7257.48V4784.31Z" />
        </clipPath>
        <clipPath id="all-2" clipPathUnits="userSpaceOnUse">
          <path d="M4544 40C4544 17.9086 4526.09 0 4504 0H1642.5C1620.41 0 1602.5 17.9086 1602.5 40V2232.03C1602.5 2253.31 1619.17 2270.87 1640.42 2271.97L4501.92 2420.81C4524.8 2422 4544 2403.77 4544 2380.87V40Z" />
        </clipPath>
        <clipPath id="all-3" clipPathUnits="userSpaceOnUse">
          <path d="M1552 40C1552 17.9086 1534.09 0 1512 0H48C25.9086 0 7.99995 17.9086 7.99995 40V1172C7.99995 1194.09 25.9086 1212 47.9999 1212H1512C1534.09 1212 1552 1194.09 1552 1172V40Z" />
        </clipPath>
        <clipPath id="all-4" clipPathUnits="userSpaceOnUse">
          <path d="M1552 1294C1552 1271.91 1534.09 1254 1512 1254H48C25.9086 1254 7.99995 1271.91 7.99995 1294V2156.47C7.99995 2177.87 24.8498 2195.49 46.2333 2196.43L1510.23 2261.15C1533 2262.16 1552 2243.98 1552 2221.19V1294Z" />
        </clipPath>
        <clipPath id="all-5" clipPathUnits="userSpaceOnUse">
          <path d="M8 9504C8 9526.09 25.9086 9544 48 9544H2909.5C2931.59 9544 2949.5 9526.09 2949.5 9504V7321.44C2949.5 7300.37 2933.16 7282.92 2912.15 7281.52L50.646 7091.83C27.564 7090.3 8 7108.61 8 7131.74V9504Z" />
        </clipPath>
        <clipPath id="all-6" clipPathUnits="userSpaceOnUse">
          <path d="M2997 9504C2997 9526.09 3014.91 9544 3037 9544H4504C4526.09 9544 4544 9526.09 4544 9504V8372C4544 8349.91 4526.09 8332 4504 8332H3037C3014.91 8332 2997 8349.91 2997 8372V9504Z" />
        </clipPath>
        <clipPath id="all-7" clipPathUnits="userSpaceOnUse">
          <path d="M2997 8250C2997 8272.09 3014.91 8290 3037 8290H4504C4526.09 8290 4544 8272.09 4544 8250V7405.81C4544 7384.59 4527.43 7367.07 4506.25 7365.88L3039.25 7283.38C3016.31 7282.09 2997 7300.34 2997 7323.31V8250Z" />
        </clipPath>
        <clipPath id="all-8" clipPathUnits="userSpaceOnUse">
          <path d="M0 2302.79C0 2280.01 18.9956 2261.83 41.7531 2262.83L2161.42 2355.82C2182.81 2356.76 2199.67 2374.37 2199.67 2395.78V4703.36C2199.67 4724.91 2182.59 4742.59 2161.05 4743.33L41.3812 4816.57C18.7619 4817.35 0 4799.23 0 4776.59V2302.79Z" />
        </clipPath>
        <clipPath id="all-9" clipPathUnits="userSpaceOnUse">
          <path d="M2237.85 2399.22C2237.85 2376.28 2257.1 2358.04 2280.01 2359.27L4498.16 2478.96C4519.38 2480.1 4536 2497.65 4536 2518.9V4635.17C4536 4656.8 4518.81 4674.51 4497.19 4675.16L2279.05 4741.27C2256.5 4741.94 2237.85 4723.85 2237.85 4701.29V2399.22Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#all-1)">
        <rect x="8" y="4744" width="4536" height="2554" fill="#9B8FE8" />
        <image href="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" x="8" y="4744" width="4536" height="2554" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#all-2)">
        <rect x="1602" y="0" width="2942" height="2421" fill="#E8C4B8" />
        <image href="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80" x="1602" y="0" width="2942" height="2421" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#all-3)">
        <rect x="8" y="0" width="1544" height="1212" fill="#D4B8A8" />
        <image href="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80" x="8" y="0" width="1544" height="1212" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#all-4)">
        <rect x="8" y="1254" width="1544" height="1008" fill="#C4A898" />
        <image href="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80" x="8" y="1254" width="1544" height="1008" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#all-5)">
        <rect x="8" y="7091" width="2942" height="2453" fill="#8B6F5E" />
        <image href="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80" x="8" y="7091" width="2942" height="2453" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#all-6)">
        <rect x="2997" y="8332" width="1547" height="1212" fill="#6B4F3E" />
        <image href="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80" x="2997" y="8332" width="1547" height="1212" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#all-7)">
        <rect x="2997" y="7283" width="1547" height="1007" fill="#7B5F4E" />
        <image href="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" x="2997" y="7283" width="1547" height="1007" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#all-8)">
        <rect x="0" y="2262" width="2200" height="2555" fill="#8B7FD8" />
        <image href="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80" x="0" y="2262" width="2200" height="2555" preserveAspectRatio="xMidYMid slice" />
      </g>
      <g clipPath="url(#all-9)">
        <rect x="2237" y="2359" width="2299" height="2383" fill="#E89B4F" />
        <image href="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1000&q=80" x="2237" y="2359" width="2299" height="2383" preserveAspectRatio="xMidYMid slice" />
      </g>
    </svg>
  );
}

/* ═══════════ TYPING HOOK ═══════════ */
function useTyping(words: string[][]) {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const [targetLine1, targetLine2] = words[wordIndex];
    const typingSpeed = isDeleting ? 30 : 65;
    const pauseTime = 2200;

    const handleTyping = () => {
      if (!isDeleting) {
        if (line1.length < targetLine1.length) {
          setLine1(targetLine1.substring(0, line1.length + 1));
        } else if (line2.length < targetLine2.length) {
          setLine2(targetLine2.substring(0, line2.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (line2.length > 0) {
          setLine2(targetLine2.substring(0, line2.length - 1));
        } else if (line1.length > 0) {
          setLine1(targetLine1.substring(0, line1.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [line1, line2, isDeleting, wordIndex, words]);

  return { line1, line2, wordIndex, words };
}

/* ═══════════ MAIN PAGE ═══════════ */
export default function Home() {
  const [activeProgram, setActiveProgram] = useState(0);
  const { line1, line2, wordIndex } = useTyping(WORDS);

  return (
    <div className="w-full flex flex-col font-sans">
      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative w-full min-h-[calc(100svh_-_60px)] flex flex-col overflow-hidden bg-[#BFDBFE]">
        {/* GRID BACKDROP — runs from the very top, fades out around the middle */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage:
              "linear-gradient(to right, rgba(30,41,59,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,41,59,0.15) 1px, transparent 1px)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 32%, transparent 52%)",
            maskImage: "linear-gradient(to bottom, black 0%, black 32%, transparent 52%)",
          }}
        />

        {/* MAIN HERO CONTENT */}
        <main className="relative z-10 flex-1 flex flex-col justify-between w-full max-w-[1400px] mx-auto px-8 pt-2 overflow-hidden" id="home">
          {/* GRID TOP STRIP + ICONS */}
          <div className="relative w-full h-1/3 min-h-[120px] max-h-[170px] border-b border-[#1e293b]/10 flex items-center justify-end pr-2 md:pr-8 shrink-0">
            <div className="flex items-center space-x-4 md:space-x-6">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-[#1e293b] stroke-current fill-none stroke-1" viewBox="0 0 24 24">
                <path d="M12 2a3 3 0 0 0-3 3 3 3 0 0 0-3-3 3 3 0 0 0 3 3 3 3 0 0 0 3 3 3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F9A8D4] rounded-[22px] flex items-center justify-center">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#1e293b] fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
                </svg>
              </div>
              <svg className="w-12 h-12 md:w-16 md:h-16 text-[#1e293b] stroke-current fill-none stroke-1" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          {/* STAR + LINE + TAGLINE */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-2 shrink-0">
            <div className="flex items-center space-x-4 md:col-span-7">
              <span className="text-2xl text-[#1e293b] font-light">✱</span>
              <div className="h-[1px] bg-[#1e293b]/20 w-full" />
            </div>
            <div className="flex flex-col items-start space-y-3 md:col-span-5 pl-4 md:pl-8">
              <p className="text-[11px] text-[#1e293b]/70 font-semibold leading-snug max-w-sm tracking-normal">
                KABINET SENTRA NAWASENA 2026
              </p>
              <p className="text-[10px] text-[#1e293b]/50 italic leading-snug max-w-sm tracking-normal">
                &ldquo;Merangkai sinergi wujudkan aksi&rdquo;
              </p>
              <Link
                href="/about"
                className="px-5 py-2 border border-[#1e293b]/40 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#1e293b] hover:border-[#F472B6] hover:text-[#F472B6] transition-all"
              >
                JELAJAHI KABINET
              </Link>
            </div>
          </div>

          {/* BIG TITLE */}
          <div className="w-full shrink-0">
            <div className="flex justify-between items-center text-[9px] md:text-[10px] font-bold tracking-widest text-[#1e293b]/50 uppercase mb-1">
              <span>HMPS ADMINISTRASI BISNIS</span>
              <span>SENTRA NAWASENA</span>
              <span>PERIODE-2026</span>
            </div>
            <h1 className="text-[9.5vw] font-black leading-none tracking-tighter uppercase text-[#1e293b] select-none text-center block">
              Sentra nawasena
            </h1>
          </div>
        </main>
      </section>

      {/* ═══════════ TEAM IMAGE ═══════════ */}
      <section className="w-full min-h-screen pt-12 md:pt-20 bg-[#BFDBFE]">
        <div className="w-full h-screen">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
            alt="Pengurus HMPS Administrasi Bisnis"
            className="w-full h-full object-cover rounded-none block"
          />
        </div>
      </section>

      {/* ═══════════ ABOUT SECTION ═══════════ */}
      <section className="w-full bg-[#FFFBEB] text-[#1e293b] py-20 px-8 md:px-16 border-t border-[#1e293b]/10" id="about">
        <div className="max-w-[1400px] mx-auto">
          {/* TOP: 2026 + TENTANG */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-4 flex flex-col justify-between">
              <div>
                <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-2">2026</h2>
                <p className="text-xs text-[#1e293b]/50 max-w-[200px] leading-relaxed uppercase font-semibold">
                  KABINET SENTRA NAWASENA HMPS ADMINISTRASI BISNIS
                </p>
              </div>
            </div>
            <div className="md:col-span-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/40 block mb-3">
                  • TENTANG KABINET
                </span>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] max-w-2xl">
                  PUSAT PENGGERAK INTI BERORIENTASI MASA DEPAN CERAH.
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pt-4">
                <div />
                <div className="space-y-6 pl-8 border-l border-[#1e293b]/15">
                  <p className="text-xs text-[#1e293b]/60 leading-relaxed">
                    <strong className="text-[#1e293b]">&ldquo;Sentra Nawasena&rdquo;</strong> adalah Pusat Penggerak Inti yang berorientasi pada Masa Depan Yang Cerah, dengan komitmen menjadikan HMPS Administrasi Bisnis sebagai wadah sentral terintegrasi dalam pengembangan kompetensi dan inovasi, serta menggerakkan seluruh potensi yang ada untuk mencapai peluang masa depan yang gemilang.
                  </p>
                  <Link href="#prokerja" className="inline-block px-6 py-2.5 border border-[#1e293b] rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#1e293b] hover:text-[#FFFBEB] transition-all">
                    LIHAT PROGRAM KERJA
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* VISI MISI CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-[#1e293b]/15">
            <div className="p-8 border-b sm:border-b-0 border-[#1e293b]/15 sm:border-r flex flex-col justify-between min-h-[240px]">
              <span className="text-xs font-bold text-[#F472B6] uppercase tracking-widest">VISI KABINET</span>
              <p className="text-xs text-[#1e293b]/80 font-medium leading-relaxed mt-4">
                Menjadikan HMPS Administrasi Bisnis sebagai wadah aspirasi dan pusat pengembangan kompetensi yang unggul dan berdampak nyata.
              </p>
              <h4 className="font-black text-sm uppercase tracking-wider mt-6">
                UNGGUL &<br />BERDAMPAK
              </h4>
            </div>
            <div className="p-8 border-b sm:border-b-0 border-[#1e293b]/15 md:border-r flex flex-col justify-between min-h-[240px]">
              <span className="text-xs font-bold text-[#1e293b]/40 uppercase tracking-widest">MISI 01</span>
              <p className="text-[11px] text-[#1e293b]/60 leading-relaxed mt-4">
                Menjamin pelayanan prima dan advokasi transparan untuk aspirasi seluruh mahasiswa.
              </p>
              <h4 className="font-black text-sm uppercase tracking-wider mt-6 underline">
                PELAYANAN<br />& ADVOKASI
              </h4>
            </div>
            <div className="p-8 border-b sm:border-b-0 border-[#1e293b]/15 sm:border-r flex flex-col justify-between min-h-[240px]">
              <span className="text-xs font-bold text-[#1e293b]/40 uppercase tracking-widest">MISI 02</span>
              <p className="text-[11px] text-[#1e293b]/60 leading-relaxed mt-4">
                Mewujudkan sentra kolaborasi dan kreativitas mahasiswa.
              </p>
              <h4 className="font-black text-sm uppercase tracking-wider mt-6">
                KOLABORASI &<br />KREATIVITAS
              </h4>
            </div>
            <div className="p-8 flex flex-col justify-between min-h-[240px]">
              <span className="text-xs font-bold text-[#1e293b]/40 uppercase tracking-widest">MISI 03</span>
              <p className="text-[11px] text-[#1e293b]/60 leading-relaxed mt-4">
                Mewujudkan siklus organisasi yang profesional, transparan, dan berintegritas.
              </p>
              <h4 className="font-black text-sm uppercase tracking-wider mt-6">
                PROFESIONAL &<br />BERINTEGRITAS
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROGRAM KERJA SECTION ═══════════ */}
      <section className="w-full bg-[#FFFBEB] text-[#1e293b] py-20 border-t border-[#1e293b]/10" id="prokerja">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 mb-16">
          <h2 className="text-6xl md:text-8xl font-black tracking-tight uppercase flex items-start">
            PROGRAM KERJA <span className="text-xl md:text-3xl font-semibold ml-2 mt-2">(4)</span>
          </h2>
        </div>

        <div className="w-full flex flex-col">
          {programs.map((p, i) => (
            <div key={i} className={`${p.bgColor} w-full p-8 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center`}>
              <div className="md:col-span-7 flex flex-col justify-between">
                <span className="text-4xl md:text-6xl font-black mb-8">{p.num}</span>
                <div className={`${p.cardBg} rounded-2xl h-64 md:h-80 relative flex items-center justify-center p-6`}>
                  <span className={`text-3xl md:text-5xl font-black uppercase tracking-tight text-center ${p.cardBg.includes("text-") ? "" : "text-[#1e293b]"}`}>
                    {p.title}
                  </span>
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col justify-between space-y-6 md:pl-8">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">{p.title}</h3>
                <p className={`text-xs leading-relaxed ${p.textColor || "text-[#1e293b]/80"}`}>
                  {p.desc}
                </p>
                <ul className={`text-xs font-semibold space-y-1.5 ${p.textColor || "text-[#1e293b]/80"}`}>
                  {p.items.map((item, j) => (
                    <li key={j}>+ {item}</li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link href="#" className={`inline-block px-6 py-2 border ${p.btnBorder} rounded-full text-[10px] font-bold uppercase tracking-widest ${p.btnHover} transition-all`}>
                    SELENGKAPNYA
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="w-full bg-[#FFFBEB] text-[#1e293b] pt-20 pb-12 border-t border-[#1e293b]/10 overflow-hidden" id="contact">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          {/* TOP FOOTER */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#1e293b]/15">
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-[#F9A8D4] rounded-sm rotate-45" />
                <span className="text-xl font-black tracking-tight uppercase">HMPS ADMINISTRASI BISNIS</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#F472B6]">
                Kabinet Sentra Nawasena 2026
              </p>
              <p className="text-xs text-[#1e293b]/50 italic">
                &ldquo;Merangkai sinergi wujudkan aksi&rdquo;
              </p>
              <p className="text-xs text-[#1e293b]/60 leading-relaxed max-w-sm pt-2">
                &ldquo;Sentra Nawasena&rdquo; adalah Pusat Penggerak Inti yang berorientasi pada Masa Depan Yang Cerah, dengan komitmen menjadikan HMPS Administrasi Bisnis sebagai wadah sentral terintegrasi dalam pengembangan kompetensi dan inovasi.
              </p>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs">
              <div className="space-y-3">
                <h4 className="font-bold uppercase tracking-wider text-[#1e293b]">| PROGRAM KERJA</h4>
                <ul className="space-y-2 text-[#1e293b]/60">
                  <li><Link href="#prokerja" className="hover:text-[#1e293b] transition-colors">• Invest Adbis</Link></li>
                  <li><Link href="#prokerja" className="hover:text-[#1e293b] transition-colors">• Bina Masyarakat</Link></li>
                  <li><Link href="#prokerja" className="hover:text-[#1e293b] transition-colors">• Market Day</Link></li>
                  <li><Link href="#prokerja" className="hover:text-[#1e293b] transition-colors">• Sencrea</Link></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold uppercase tracking-wider text-[#1e293b]">| UPCOMING EVENTS</h4>
                <ul className="space-y-1.5 text-[#1e293b]/60">
                  <li><Link href="#" className="hover:text-[#1e293b] transition-colors">• Invest Adbis</Link></li>
                  <li><Link href="#" className="hover:text-[#1e293b] transition-colors">• Sencrea</Link></li>
                  <li><Link href="#" className="hover:text-[#1e293b] transition-colors">• Bina Masyarakat</Link></li>
                  <li><Link href="#" className="hover:text-[#1e293b] transition-colors">• Study Visit</Link></li>
                  <li><Link href="#" className="hover:text-[#1e293b] transition-colors">• Adbis Skill Camp</Link></li>
                  <li><Link href="#" className="hover:text-[#1e293b] transition-colors">• Adbis Berbagi Kasih Sayang</Link></li>
                  <li><Link href="#" className="hover:text-[#1e293b] transition-colors">• Company Visit</Link></li>
                  <li><Link href="#" className="hover:text-[#1e293b] transition-colors">• Adbis Leader Connect</Link></li>
                  <li><Link href="#" className="hover:text-[#1e293b] transition-colors">• JABIZ</Link></li>
                  <li><Link href="#" className="hover:text-[#1e293b] transition-colors">• Adbis Sport Monthly</Link></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold uppercase tracking-wider text-[#1e293b]">| VISI & MISI</h4>
                <div className="space-y-2 text-[#1e293b]/60">
                  <p className="font-semibold text-[#1e293b]/80">Visi:</p>
                  <p className="text-[11px] leading-relaxed">
                    Pusat pengembangan kompetensi yang unggul dan berdampak nyata.
                  </p>
                  <p className="font-semibold text-[#1e293b]/80 pt-1">Misi Ringkas:</p>
                  <ul className="list-disc list-inside text-[11px] space-y-1 text-[#1e293b]/50">
                    <li>Pelayanan & advokasi transparan</li>
                    <li>Sentra kolaborasi & kreativitas</li>
                    <li>Siklus organisasi profesional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA BOX */}
          <div className="bg-[#1e293b] text-[#FFFBEB] rounded-2xl p-8 md:p-12 my-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#F9A8D4] uppercase block mb-1">
                SUARAKAN ASPIRASIMU
              </span>
              <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight">
                MARI BERKOLABORASI DENGAN<br />HMPS ADMINISTRASI BISNIS
              </h3>
            </div>
            <div className="max-w-md">
              <p className="text-xs text-[#FFFBEB]/60 leading-relaxed">
                Wadah sentral terintegrasi untuk pengembangan kompetensi, inovasi, dan penggerak potensi mahasiswa mencapai peluang masa depan gemilang.
              </p>
            </div>
            <div>
              <Link href="/about" className="px-6 py-3 bg-[#F9A8D4] text-[#1e293b] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#F472B6] transition-all flex items-center space-x-2">
                <span>Jelajahi Kabinet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#1e293b]/50 pt-4">
            <p>© 2026 HMPS Administrasi Bisnis — Kabinet Sentra Nawasena. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="#" className="hover:text-[#1e293b] transition-colors">Instagram</Link>
              <Link href="#" className="hover:text-[#1e293b] transition-colors">LinkedIn</Link>
              <Link href="#" className="hover:text-[#1e293b] transition-colors">YouTube</Link>
              <Link href="#" className="hover:text-[#1e293b] transition-colors">TikTok</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
