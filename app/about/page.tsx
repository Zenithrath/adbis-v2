"use client";

import AboutHero from "@/components/about/AboutHero";
import Marquee from "@/components/shared/Marquee";
import VisiMisi from "@/components/about/VisiMisi";
import Values from "@/components/about/Values";
import Culture from "@/components/about/Culture";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";

const marqueeItems = [
  "VISI",
  "MISI",
  "NILAI UTAMA",
  "BUDAYA ORGANISASI",
  "KABINET SENTRA NAWASENA",
  "PERIODE 2026",
];

export default function AboutPage() {
  return (
    <main className="relative w-full bg-[#FFFBEB] text-[#1e293b] overflow-x-clip">
      <AboutHero />
      <Marquee items={marqueeItems} />
      <VisiMisi />
      <Values />
      <Culture />
      <FooterTapedDesign />
    </main>
  );
}
