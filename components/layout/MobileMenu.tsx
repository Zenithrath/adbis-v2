"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          className="fixed inset-0 z-[110] flex flex-col bg-[#14132e]/95 backdrop-blur-2xl lg:hidden"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex h-[60px] items-center justify-between px-4">
            <span className="text-sm font-black tracking-tight">
              HMPS <span className="text-[#FF7AAC]">Adbis</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#FFFBEB] transition-colors hover:border-[#FF7AAC] hover:text-[#FF7AAC]"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-8">
            <ul className="space-y-2">
              {[...items, cta].map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={reduce ? false : { opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between border-b border-white/10 py-4"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] font-bold text-[#FF7AAC]">
                        0{i + 1}
                      </span>
                      <span className="text-3xl font-black uppercase tracking-tight text-[#FFFBEB] transition-colors group-hover:text-[#FF7AAC]">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight className="h-6 w-6 text-white/30 transition-all group-hover:text-[#FF7AAC]" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <p className="px-8 pb-10 text-[10px] font-bold uppercase tracking-[0.24em] text-white/30">
            Merangkai Sinergi Wujudkan Aksi
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
