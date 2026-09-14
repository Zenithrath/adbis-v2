"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { X } from "lucide-react";
import type { ReactNode } from "react";

export type ProkerBentoItem = {
  num: string;
  name: string;
  image: string;
  desc: string;
};

export function BentoCard({
  className = "",
  eyebrow,
  title,
  description,
  graphic,
}: {
  className?: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  graphic?: ReactNode;
}) {
  return (
    <div
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-3xl",
        "bg-[#1A1B41] shadow-sm ring-1 ring-white/10"
      )}
    >
      <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-56">
        {graphic}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1B41] via-[#1A1B41]/20 to-transparent" />
      </div>
      <div className="relative z-10 -mt-10 p-6 text-white">
        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#FF7AAC]">
          {eyebrow}
        </p>
        <p className="mt-1 text-2xl font-black tracking-tight">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/65">
          {description}
        </p>
      </div>
    </div>
  );
}

function ProkerModal({
  item,
  onClose,
}: {
  item: ProkerBentoItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!item) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Tutup"
            onClick={onClose}
            className="absolute inset-0 bg-[#0B0B18]/80 backdrop-blur-md"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={item.name}
            initial={{ opacity: 0, y: 48, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 48, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-[#1A1B41] ring-1 ring-white/15 shadow-2xl"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1B41] via-transparent to-transparent" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup"
                className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 border border-white/25 text-white backdrop-blur-md transition-colors hover:bg-[#FF7AAC] hover:text-[#1A1B41] hover:border-[#FF7AAC]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 pt-2 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#FF7AAC]">
                Big Proker {item.num}
              </p>
              <p className="mt-1 text-3xl font-black tracking-tight">
                {item.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.desc}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ProkerBentoGrid({
  items,
}: {
  items: ProkerBentoItem[];
}) {
  const [selected, setSelected] = useState<ProkerBentoItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {items.map((item, i) => (
          <button
            key={item.num}
            type="button"
            onClick={() => setSelected(item)}
            className={
              i === 1
                ? "group relative row-span-2 min-h-[320px] w-full overflow-hidden rounded-2xl text-left ring-1 ring-white/10 transition-transform duration-300 active:scale-[0.97]"
                : i === 3
                  ? "group relative col-span-2 aspect-[16/9] w-full overflow-hidden rounded-2xl text-left ring-1 ring-white/10 transition-transform duration-300 active:scale-[0.97]"
                  : "group relative aspect-[3/4] w-full overflow-hidden rounded-2xl text-left ring-1 ring-white/10 transition-transform duration-300 active:scale-[0.97]"
            }
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B18]/95 via-[#0B0B18]/25 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4">
              <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-[#FFA6C8]">
                {item.num}
              </p>
              <p className="mt-0.5 text-sm sm:text-lg font-black tracking-tight text-white leading-tight">
                {item.name}
              </p>
            </div>
          </button>
        ))}
      </div>
      <ProkerModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
