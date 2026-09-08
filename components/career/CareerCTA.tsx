"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export default function CareerCTA() {
  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 pb-20 md:pb-28">
        <Reveal>
          <div className="bg-[#BFDBFE] rounded-2xl px-8 md:px-12 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/60 block mb-2">
                PERLU PENDAMPINGAN LEBIH?
              </span>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.95]">
                Gapai Masa Depanmu
                <br />
                <span className="text-stroke-ink">Bersama HMPS Adbis</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 md:flex-col md:items-end">
              <Link
                href="/people"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e293b] text-[#FFFBEB] text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFFBEB] hover:text-[#1e293b] transition-all"
              >
                Temukan Program Terkait
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1e293b] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1e293b] hover:text-[#FFFBEB] transition-all"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
