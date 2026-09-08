"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
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

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* Spacer Penahan Konten */}
      <div className="h-[60px]" aria-hidden="true" />

      {/* Main Navbar Container */}
      <nav className="fixed top-0 left-0 right-0 h-[60px] bg-white dark:bg-[#242424] text-neutral-800 dark:text-neutral-100 font-mono text-sm uppercase z-[100] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
        <div className="max-w-[1100px] w-full h-full mx-auto px-4 flex items-center justify-between relative bg-inherit">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} aria-label="Logo" className="z-[102] flex items-center">
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
              "bg-white dark:bg-[#242424] md:bg-transparent w-full md:w-auto md:flex-1",
              "flex flex-col md:grid md:grid-flow-col md:auto-cols-fr",
              "overflow-y-auto md:overflow-visible transition-transform duration-300 ease-in-out z-[99] md:z-1",
              isOpen ? "translate-y-0" : "-translate-y-[calc(100%+60px)] md:translate-y-0",
            )}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "stagger-link",
                  "group bg-white dark:bg-[#242424] px-6 md:px-4 h-[60px] min-h-[60px] flex items-center justify-between",
                  "border-b border-neutral-200 dark:border-neutral-800 md:border-b-0",
                  "text-current no-underline",
                )}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] opacity-0 group-hover:opacity-100 group-hover:-rotate-45 transition-all duration-200" />
              </Link>
            ))}
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
            background: inherit;
            border-right: 1px solid rgba(0, 0, 0, 0.08);
            z-index: -1;
          }

          .dark .stagger-link::before {
            border-right-color: rgba(255, 255, 255, 0.08);
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
