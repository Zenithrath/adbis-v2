"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Plus, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

// Hanya 4 Item Navigasi
const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Program Kerja", href: "/#prokerja" },
  { label: "Kontak", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* Spacer Penahan Konten */}
      <div className="h-[60px]" aria-hidden="true" />

      {/* Main Navbar Container */}
      <nav className="fixed top-0 left-0 right-0 h-[60px] bg-[#1A1B41]/80 backdrop-blur-xl text-[#FFFBEB] font-sans text-[13px] font-bold uppercase tracking-widest z-[100] border-b border-white/10">
        <div className="max-w-[1400px] w-full h-full mx-auto px-4 md:px-8 flex items-center justify-between relative bg-inherit">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="HMPS Administrasi Bisnis"
            className="z-[102] flex items-center gap-2.5 shrink-0"
          >
            <Image
              src="/images/hmps-logo.png"
              alt="Logo HMPS"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <span className="leading-none">
              <span className="block text-sm font-black tracking-tight normal-case">
                HMPS Adbis
              </span>
              <span className="block text-[9px] font-bold tracking-[0.22em] text-[#FFA6C8] uppercase mt-0.5">
                Sentra Nawasena
              </span>
            </span>
          </Link>

          {/* Button Mobile Toggle */}
          <button type="button" onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle Menu" className="md:hidden z-[102] w-12 h-full flex items-center justify-center cursor-pointer text-current focus:outline-none">
            <Plus className={cn("w-6 h-6 stroke-[2.5] transition-transform duration-300 ease-in-out", isOpen ? "rotate-45" : "rotate-0")} />
          </button>

          {/* Nav Items (4 Links) */}
          <div
            className={cn(
              "stagger-container",
              "fixed md:static left-0 right-0 top-[60px] md:top-0 h-[calc(100vh-60px)] md:h-full",
              "bg-[#1A1B41]/95 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none w-full md:w-auto md:flex-1",
              "flex flex-col md:grid md:grid-flow-col md:auto-cols-fr",
              "overflow-y-auto md:overflow-visible transition-transform duration-300 ease-in-out z-[99] md:z-1",
              isOpen ? "translate-y-0" : "-translate-y-[calc(100%+60px)] md:translate-y-0",
            )}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "stagger-link",
                    "group bg-transparent px-6 md:px-4 h-[60px] min-h-[60px] flex items-center justify-between md:justify-center md:gap-2",
                    "border-b border-white/10 md:border-b-0",
                    "no-underline transition-colors",
                    isActive
                      ? "text-[#FF7AAC]"
                      : "text-[#FFFBEB]/70 hover:text-[#FF7AAC] hover:bg-[#FF7AAC]/10",
                  )}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-[#FF7AAC] transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] opacity-0 group-hover:opacity-100 group-hover:-rotate-45 transition-all duration-200 text-[#FF7AAC]" />
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Style JSX Disesuaikan khusus 4 Item Navigasi */}
      <style jsx global>{`
        @media (min-width: 768px) {
          .stagger-container {
            --lerp-0: 1;
            --lerp-1: calc(sin(30deg));
            --lerp-2: calc(sin(15deg));
            --lerp-3: 0;
            --speed: 0.25s;
          }

          .stagger-link {
            position: relative;
            transform: translateY(calc(var(--lerp, 0) * 80%));
            transition: transform var(--speed) ease;
          }

          .stagger-link::before {
            content: "";
            position: absolute;
            height: 300%;
            bottom: 0;
            left: -1px;
            right: -1px;
            background: rgba(255, 122, 172, 0.22);
            border-right: 1px solid rgba(255, 122, 172, 0.35);
            border-radius: 0 0 12px 12px;
            opacity: 0;
            transition: opacity var(--speed) ease;
            z-index: -1;
          }

          .stagger-link:hover::before,
          .stagger-link:focus-visible::before {
            opacity: 1;
          }

          .stagger-link:last-of-type::before {
            border-right: none;
          }

          /* Aturan Hover Staggered khusus 4 Elemen */
          .stagger-link:hover,
          .stagger-link:focus-visible {
            --lerp: var(--lerp-0);
            z-index: 4;
          }

          .stagger-link:has(+ .stagger-link:hover),
          .stagger-link:hover + .stagger-link {
            --lerp: var(--lerp-1);
            z-index: 3;
          }

          .stagger-link:has(+ .stagger-link + .stagger-link:hover),
          .stagger-link:hover + .stagger-link + .stagger-link {
            --lerp: var(--lerp-2);
            z-index: 2;
          }

          .stagger-link:has(+ .stagger-link + .stagger-link + .stagger-link:hover),
          .stagger-link:hover + .stagger-link + .stagger-link + .stagger-link {
            --lerp: var(--lerp-3);
            z-index: 1;
          }
        }
      `}</style>
    </>
  );
}
