"use client";

import { useLenis } from "../hooks/useLenis";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";

export default function AboutPage() {
  useLenis();

  return (
    <main>
      <AboutSection />
      <ValuesSection />
    </main>
  );
}
