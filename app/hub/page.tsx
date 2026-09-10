"use client";

import HubHero from "@/components/hub/HubHero";
import HubServices from "@/components/hub/HubServices";
import HubRoadmap from "@/components/hub/HubRoadmap";
import Footer from "@/components/home/Footer";

export default function HubPage() {
  return (
    <main className="relative w-full text-[#FFFBEB] overflow-x-clip">
      <HubHero />
      <HubServices />
      <HubRoadmap />
      <Footer />
    </main>
  );
}
