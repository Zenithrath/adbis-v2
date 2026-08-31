"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/people", label: "OUR PEOPLE" },
  { href: "/programs", label: "PROGRAMS" },
  { href: "/hub", label: "ADBIS HUB" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#3f41cc]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          : "bg-[#3f41cc] border-b border-white/10"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[64px] sm:h-[72px] items-center justify-between gap-4">
          {/* Logo pill - exact like hero logo-container */}
          <Link href="/" className="flex items-center gap-2 bg-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
            <div className="w-6 h-6 rounded-full bg-[#3f41cc] flex items-center justify-center text-white font-black text-[9px] leading-none">UB</div>
            <span className="w-[1px] h-4 bg-black/10" />
            <div className="w-6 h-6 rounded-full bg-[#2e269c] flex items-center justify-center text-white font-black text-[8px]">FIA</div>
            <span className="w-[1px] h-4 bg-black/10" />
            <span className="font-black text-[11px] tracking-[0.08em] text-[#2d2a32] hidden sm:inline">HMPS ADBIS</span>
            <span className="font-black text-[11px] tracking-[0.08em] text-[#2d2a32] sm:hidden">HMPS</span>
          </Link>

          {/* Desktop Nav - pill style */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur p-1 rounded-full border border-white/15">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-black tracking-[0.08em] transition ${
                    active ? "bg-white text-[#2d2a32] shadow-[0_2px_8px_rgba(255,249,196,0.4)]" : "text-white hover:bg-white/15"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/hub"
              className="hidden sm:inline-flex bg-[#fff9c4] text-[#2d2a32] border-2 border-[#2d2a32] px-5 py-2 rounded-full font-black text-xs tracking-wide shadow-[3px_3px_0_#2d2a32] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_#2d2a32] transition"
            >
              JOIN US ✦
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center gap-1 shadow"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-[#2d2a32] transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[#2d2a32] transition ${open ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[#2d2a32] transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#2e269c] border-t border-white/10 overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-full font-black text-sm border-2 ${active ? "bg-white text-[#2d2a32] border-white" : "bg-transparent text-white border-white/20"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}