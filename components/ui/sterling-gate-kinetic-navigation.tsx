"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Program Kerja", href: "/#prokerja" },
  { label: "Upcoming Events", href: "/#events" },
  { label: "Kontak", href: "/#contact" },
];

export function Component() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((p) => !p), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* ── Lerp animation (desktop hover effect) ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (min-width: 768px) {
              .kinetic-nav {
                --lerp-0: 1;
                --lerp-1: calc(sin(30deg));
                --lerp-2: calc(sin(20deg));
                --lerp-3: calc(sin(10deg));
                --lerp-4: 0;
                --speed: 0.25s;
              }
              .kinetic-link {
                translate: 0 calc(var(--lerp, 0) * 80%);
                transition: translate var(--speed);
              }
              .kinetic-link::before {
                content: "";
                position: absolute;
                height: 300%;
                border-right: 2px solid #FFFBEB;
                bottom: 0;
                background: rgba(255, 242, 178, 0.15);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                z-index: -1;
                left: 0;
                right: 0;
              }
              .kinetic-link:hover,
              .kinetic-link:focus-visible {
                --lerp: var(--lerp-0);
                z-index: 5;
              }
              .kinetic-link:has(+ :is(.kinetic-link:hover, .kinetic-link:focus-visible)),
              .kinetic-link:hover + .kinetic-link,
              .kinetic-link:focus-visible + .kinetic-link {
                --lerp: var(--lerp-1);
                z-index: 4;
              }
              .kinetic-link:has(+ .kinetic-link + :is(.kinetic-link:hover, .kinetic-link:focus-visible)),
              .kinetic-link:hover + .kinetic-link + .kinetic-link,
              .kinetic-link:focus-visible + .kinetic-link + .kinetic-link {
                --lerp: var(--lerp-2);
                z-index: 3;
              }
              .kinetic-link:has(+ .kinetic-link + .kinetic-link + :is(.kinetic-link:hover, .kinetic-link:focus-visible)),
              .kinetic-link:hover + .kinetic-link + .kinetic-link + .kinetic-link,
              .kinetic-link:focus-visible + .kinetic-link + .kinetic-link + .kinetic-link {
                --lerp: var(--lerp-3);
                z-index: 2;
              }
              .kinetic-link:has(+ .kinetic-link + .kinetic-link + .kinetic-link + :is(.kinetic-link:hover, .kinetic-link:focus-visible)),
              .kinetic-link:hover + .kinetic-link + .kinetic-link + .kinetic-link + .kinetic-link,
              .kinetic-link:focus-visible + .kinetic-link + .kinetic-link + .kinetic-link + .kinetic-link {
                --lerp: var(--lerp-4);
                z-index: 1;
              }
            }
          `,
        }}
      />

      {/* ── Navbar ── */}
      <nav className="kinetic-nav sticky top-0 left-0 right-0 z-50 h-14 md:h-16 bg-[rgba(255,251,235,0.85)] backdrop-blur-xl border-b border-[#1e293b]/10 font-sans text-[11px] font-semibold uppercase tracking-widest text-[#1e293b]">
        <div className="flex items-center justify-between h-full max-w-[1400px] mx-auto px-6 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            onClick={closeMenu}
          >
            <div className="w-3 h-3 bg-[#FC75A7] rounded-sm rotate-45" />
            <span className="text-sm font-black tracking-tight">HMPS ADBIS</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center h-full">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="kinetic-link relative flex items-center h-full px-5 text-[11px] font-semibold uppercase tracking-widest text-[#1e293b]/60 hover:text-[#FC75A7] transition-colors"
              >
                <span>{item.label}</span>
                <ArrowRight
                  className="ml-1.5 h-3.5 w-3.5 opacity-0 -rotate-45 scale-90 transition-all duration-200 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#1e293b]/5 transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={cn(
            "md:hidden absolute top-full left-0 right-0 bg-[rgba(255,251,235,0.97)] backdrop-blur-xl border-b border-[#1e293b]/10 overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.65,0.05,0,1)]",
            isOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col px-6 py-4 gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between py-3 text-[13px] font-bold uppercase tracking-wider text-[#1e293b]/70 hover:text-[#FC75A7] border-b border-[#1e293b]/5 last:border-0 transition-colors"
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
