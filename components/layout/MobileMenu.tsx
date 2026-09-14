"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSafeReducedMotion from "@/lib/useSafeReducedMotion";

export interface MobileMenuItem {
  id: string;
  label: string;
  href: string;
}

interface MobileMenuProps {
  open: boolean;
  items: MobileMenuItem[];
  cta: MobileMenuItem;
  onClose: () => void;
}

export default function MobileMenu({ open, items, cta, onClose }: MobileMenuProps) {
  const reduce = useSafeReducedMotion();
  const pathname = usePathname();

  // Tutup saat pindah halaman atau tekan Escape
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Penangkap klik di luar panel — transparan, tidak menutupi layar */}
          <button
            type="button"
            aria-label="Tutup menu"
            onClick={onClose}
            className="fixed inset-0 z-[105] cursor-default bg-transparent lg:hidden"
          />
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
            className="fixed inset-x-3 top-[68px] z-[110] overflow-hidden rounded-2xl border border-white/15 bg-[#1A1B41]/95 shadow-[0_24px_64px_rgba(10,8,40,0.6)] backdrop-blur-2xl lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile">
              <ul className="px-2 py-2">
                {[...items, cta].map((item, i) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between rounded-xl px-4 py-3 transition-colors hover:bg-white/[0.07]"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[10px] font-bold text-[#FF7AAC]">
                          0{i + 1}
                        </span>
                        <span className="text-lg font-black uppercase tracking-tight text-[#FFFBEB]">
                          {item.label}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:text-[#FF7AAC]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="border-t border-white/10 px-6 py-3 text-[9px] font-bold uppercase tracking-[0.24em] text-white/30">
              Merangkai Sinergi Wujudkan Aksi
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
