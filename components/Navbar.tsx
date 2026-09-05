"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Plus, ArrowUpRight, Sun, Moon } from "lucide-react";
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
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const handleThemeToggle = useCallback(() => {
    const nextState = !isDark;
    setIsDark(nextState);

    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", nextState);
    };

    if (document.startViewTransition) {
      document.startViewTransition(() => applyTheme());
    } else {
      applyTheme();
    }
  }, [isDark]);

  return (
    <>
      {/* Spacer Penahan Konten */}
      <div className="h-[60px]" aria-hidden="true" />

      {/* Main Navbar Container */}
      <nav className="fixed top-0 left-0 right-0 h-[60px] bg-white dark:bg-[#242424] text-neutral-800 dark:text-neutral-100 font-mono text-sm uppercase z-[100] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
        <div className="max-w-[1100px] w-full h-full mx-auto px-4 flex items-center justify-between relative bg-inherit">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} aria-label="Logo" className="z-[102] flex items-center">
            <svg viewBox="0 0 969 955" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-auto text-current">
              <circle cx="161.191" cy="332.736" r="133.191" stroke="currentColor" strokeWidth="20" />
              <circle cx="806.809" cy="332.736" r="133.191" stroke="currentColor" strokeWidth="20" />
              <circle className="animate-[blink_6s_-2s_infinite] origin-center" cx="695.019" cy="600.278" r="31.4016" fill="currentColor" />
              <circle className="animate-[blink_6s_-2s_infinite] origin-center" cx="272.981" cy="600.278" r="31.4016" fill="currentColor" />
              <path
                d="M564.388 724.628C564.388 756.538 526.035 792.455 483.372 792.455C440.709 792.455 402.356 756.538 402.356 724.628C402.356 692.717 440.709 676.897 483.372 676.897C526.035 676.897 564.388 692.717 564.388 724.628Z"
                fill="currentColor"
              />
              <rect x="310.42" y="460.854" width="343.468" height="51.4986" fill="#FF1E1E" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M745.643 300.784C815.368 356.729 854.539 445.167 854.539 524.286H614.938V467.196C614.938 445.657 597.477 428.196 575.938 428.196H388.37C366.831 428.196 349.37 445.657 349.37 467.196V524.286L110.949 524.286C110.949 445.167 150.12 356.729 219.845 300.784C289.57 244.839 384.138 213.41 482.744 213.41C581.35 213.41 675.918 244.839 745.643 300.784Z"
                fill="currentColor"
              />
            </svg>
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

      {/* Floating Theme Button */}
      <button
        type="button"
        onClick={handleThemeToggle}
        aria-pressed={isDark}
        aria-label="Toggle Theme"
        className="fixed bottom-4 right-4 z-[90] w-12 h-12 rounded-xl bg-white dark:bg-[#242424] text-neutral-800 dark:text-neutral-100 shadow-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

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
