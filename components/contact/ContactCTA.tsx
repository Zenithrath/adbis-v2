"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export default function ContactCTA() {
  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-28">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#F472B6] block mb-4">
              ✱ MARI BERKOLABORASI
            </span>
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
              Punya Ide atau
              <br />
              <span className="text-stroke-ink">Aspirasi?</span>
            </h2>
            <p className="mt-6 text-xs md:text-sm text-[#1e293b]/55 leading-relaxed max-w-md mx-auto">
              HMPS Administrasi Bisnis selalu terbuka terhadap masukan yang
              membangun. Suaramu adalah bahan bakar kabinet kami.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://forms.gle/jWh8TNG5hoUVDC2x7"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1e293b] text-[#FFFBEB] text-[10px] font-bold uppercase tracking-widest hover:bg-[#F472B6] transition-colors"
              >
                Sampaikan Aspirasi
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc4_cfEm6E5W-xbkWop6pdyAb_XsuGB0lJ-BJ5_S0hibLSdqQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#1e293b] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1e293b] hover:text-[#FFFBEB] transition-all"
              >
                Daftar Open Recruitment
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
