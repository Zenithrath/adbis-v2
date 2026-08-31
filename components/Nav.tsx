"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* top bar — editorial, not pill */}
      <div className="fixed top-0 inset-x-0 z-30 pointer-events-none">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
          <Link href="/" className="pointer-events-auto flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-full bg-[#14141F] text-white flex items-center justify-center font-black text-[10px] leading-none">H</span>
            <span className="hidden sm:block leading-none">
              <span className="block font-black text-[11px] tracking-[0.12em] text-[#14141F]">HIMA ADBIS</span>
              <span className="block text-[10px] font-bold tracking-[0.14em] text-[#14141F]/50 -mt-0.5">VOKASI UB • 2026</span>
            </span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="pointer-events-auto w-10 h-10 sm:w-auto sm:h-auto sm:px-5 sm:py-2.5 bg-[#14141F] text-white rounded-full flex items-center justify-center gap-2 font-black text-xs tracking-wide shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
          >
            <span className="hidden sm:inline">{open ? "CLOSE" : "MENU"}</span>
            <span className="w-5 h-5 flex flex-col justify-center gap-1">
              <span className={`block h-0.5 bg-white w-5 transition ${open ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block h-0.5 bg-white w-5 transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white w-5 transition ${open ? "-rotate-45 -translate-y-1" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 bg-[#FFFBF0] flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-[1440px] mx-auto w-full">
              <nav className="flex flex-col gap-2 sm:gap-3">
                {[
                  { href: "#hero", label: "Beranda", sub: "01" },
                  { href: "#manifesto", label: "Manifesto", sub: "02" },
                  { href: "#kegiatan", label: "Kegiatan", sub: "03" },
                  { href: "#orang", label: "Orang", sub: "04" },
                  { href: "#gabung", label: "Gabung", sub: "05" },
                ].map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                    className="group flex items-baseline gap-4 sm:gap-6 syne-display text-[clamp(2.4rem,9vw,5.5rem)] hover:text-[#FF6B4A] transition"
                  >
                    <span className="text-sm font-black tracking-[0.16em] text-[#14141F]/30 group-hover:text-[#FF6B4A]">{item.sub}</span>
                    {item.label}
                    <span className="hidden sm:block ml-auto w-8 h-8 rounded-full border-2 border-[#14141F] group-hover:border-[#FF6B4A] group-hover:bg-[#FF6B4A] group-hover:text-white flex items-center justify-center text-sm">→</span>
                  </motion.a>
                ))}
              </nav>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="https://instagram.com" target="_blank" className="px-4 py-2 bg-white border-2 border-[#14141F] rounded-full font-bold text-xs">INSTAGRAM →</a>
                <a href="mailto:hima@example.com" className="px-4 py-2 bg-[#FFD23F] border-2 border-[#14141F] rounded-full font-black text-xs shadow-[3px_3px_0_#14141F]">EMAIL KAMI</a>
              </div>
            </div>
            <div className="p-6 text-[10px] font-black tracking-[0.16em] text-[#14141F]/30">HIMA ADMINISTRASI BISNIS — VOKASI UB • SENTRA NAWASENA 2026</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
