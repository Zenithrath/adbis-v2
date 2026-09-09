"use client";

import { Component as ConnoisseurStack } from "@/components/ui/connoisseur-stack-interactor";
import { Reveal } from "@/components/ui/reveal";

export default function ProgramKerja() {
  return (
    <section className="w-full scroll-mt-[60px] text-[#FFFBEB] pt-20 border-t border-white/10" id="prokerja">
      <Reveal className="max-w-[1400px] mx-auto px-8 md:px-16 mb-10 md:mb-14">
        <h2 className="text-6xl md:text-8xl font-black tracking-tight uppercase flex items-start">
          BIG PROKER <span className="text-xl md:text-3xl font-semibold ml-2 mt-2">(4)</span>
        </h2>
      </Reveal>

      <ConnoisseurStack />
    </section>
  );
}
