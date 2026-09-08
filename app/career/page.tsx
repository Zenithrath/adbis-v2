"use client";

import CareerHero from "@/components/career/CareerHero";
import Timeline from "@/components/career/Timeline";
import CareerCTA from "@/components/career/CareerCTA";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";

export default function CareerPage() {
  return (
    <main className="relative w-full bg-[#FFFBEB] text-[#1e293b] overflow-x-clip">
      <CareerHero />
      <Timeline />
      <CareerCTA />
      <FooterTapedDesign />
    </main>
  );
}
