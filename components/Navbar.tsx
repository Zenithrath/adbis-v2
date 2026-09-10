"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/layout/MobileMenu";
import useSafeReducedMotion from "@/lib/useSafeReducedMotion";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "prokerja", label: "Program Kerja", href: "/#prokerja" },
  { id: "hub", label: "Hub", href: "/hub" },
  { id: "faq", label: "FAQ", href: "/#faq" },
  { id: "contact", label: "Kontak", href: "/contact" },
];

const CTA = NAV_ITEMS[NAV_ITEMS.length - 1];
const HOME_SECTION_IDS = ["home", "prokerja", "faq"];

const HYSTERESIS = 48;

function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? "home");
  const idxRef = useRef(0);

  useEffect(() => {
    if (ids.length === 0) return;
    let raf = 0;
    const update = () => {
      const scrolled = window.scrollY + 96;
      let idx = idxRef.current;
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        idx = ids.length - 1;
      } else {
        const tops = ids.map(
          (id) =>
            (document.getElementById(id)?.getBoundingClientRect().top ?? 0) +
            window.scrollY
        );
        if (scrolled > tops[idx] + HYSTERESIS) {
          while (idx + 1 < ids.length && scrolled > tops[idx + 1] + HYSTERESIS)
            idx++;
        } else if (scrolled < tops[idx] - HYSTERESIS) {
          while (idx > 0 && scrolled < tops[idx] - HYSTERESIS) idx--;
        }
      }
      if (idx !== idxRef.current) {
        idxRef.current = idx;
        setActive(ids[idx]);
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [ids]);

  return active;
}

export default function Navbar() {
  const reduce = useSafeReducedMotion();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";
  const spyActive = useActiveSection(isHome ? HOME_SECTION_IDS : []);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  const isItemActive = (item: NavItem) => {
    if (item.id === "contact") return pathname === "/contact";
    if (!isHome) return pathname === item.href;
    return spyActive === item.id;
  };

  return (
    <>
      {/* Spacer Penahan Konten (tinggi disamakan header agar pin proker pas) */}
      <div className="h-[60px]" aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/15 bg-[#1A1B41]/60 shadow-[0_8px_32px_rgba(10,8,40,0.45)] backdrop-blur-xl">
        <div className="mx-auto flex h-[60px] w-full max-w-[1400px] items-center justify-between px-4 md:px-8">
          <Link
            href="/"
            aria-label="HMPS Administrasi Bisnis — kembali ke atas"
            className="group flex items-center gap-2.5"
          >
            <Image
              src="/images/hmps-logo.png"
              alt="Logo HMPS"
              width={36}
              height={36}
              className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="leading-none">
              <span className="block text-sm font-black tracking-tight normal-case text-[#FFFBEB]">
                HMPS Adbis
              </span>
              <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#FFA6C8]">
                Sentra Nawasena
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {NAV_ITEMS.filter((item) => item.id !== "contact").map((item) => {
                const isActive = isItemActive(item);
                return (
                  <li key={item.id} className="relative">
                    <Link
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative py-2 text-[13px] font-bold uppercase tracking-widest transition-colors duration-200",
                        isActive
                          ? "text-[#FFFBEB]"
                          : "text-[#FFFBEB]/55 hover:text-[#FFFBEB]"
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-[#FF7AAC] transition-transform duration-300",
                          isActive ? "scale-x-100" : "scale-x-0"
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={CTA.href}
              className="hidden h-10 items-center justify-center border border-[#FF7AAC]/60 px-5 text-[12px] font-bold uppercase tracking-widest text-[#FF7AAC] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF7AAC] hover:text-[#1A1B41] lg:inline-flex"
            >
              {CTA.label}
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Buka menu"
              className="flex h-10 w-10 items-center justify-center border border-white/20 text-[#FFFBEB] transition-colors hover:border-[#FF7AAC] hover:text-[#FF7AAC] lg:hidden"
            >
              <Menu aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        {reduce ? null : (
          <motion.span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#FF7AAC]"
            style={{ scaleX: progress }}
          />
        )}
      </header>

      <MobileMenu
        open={menuOpen}
        items={NAV_ITEMS.filter((item) => item.id !== "contact")}
        cta={CTA}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
