"use client";

import ContactHero from "@/components/contact/ContactHero";
import ServiceDirectory from "@/components/contact/ServiceDirectory";
import ContactCards from "@/components/contact/ContactCards";
import Marquee from "@/components/shared/Marquee";
import ContactCTA from "@/components/contact/ContactCTA";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";

const marqueeHandles = [
  "@hmpsabisbrawijaya",
  "@hmpsabisub",
  "sentranawasena@gmail.com",
  "HMPS ADMINISTRASI BISNIS",
  "KABINET SENTRA NAWASENA",
];

export default function ContactPage() {
  return (
    <main className="relative w-full bg-[#FFFBEB] text-[#1e293b] overflow-x-clip">
      <ContactHero />
      <ServiceDirectory />
      <ContactCards />
      <Marquee items={marqueeHandles} speed="24s" />
      <ContactCTA />
      <FooterTapedDesign />
    </main>
  );
}
