"use client";

import HubHero from "@/components/hub/HubHero";
import HubServices from "@/components/hub/HubServices";
import HubRoadmap from "@/components/hub/HubRoadmap";
import Footer from "@/components/home/Footer";

export default function HubPage() {
  return (
    <main className="relative w-full text-[#FFFBEB] overflow-x-clip">
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 90% 80% at center, black 50%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at center, black 50%, transparent 75%)",
        }}
      />

      {/* Glow orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="orb orb-blue animate-orb-left"
          style={{ width: 900, height: 900, top: "0%", left: "-15%" }}
        />
        <div
          className="orb orb-purple animate-orb-right"
          style={{ width: 850, height: 850, top: "30%", right: "-18%" }}
        />
        <div
          className="orb orb-blue animate-orb-left"
          style={{ width: 800, height: 800, top: "60%", left: "-12%", animationDelay: "2s" }}
        />
        <div
          className="orb orb-purple animate-orb-right"
          style={{ width: 750, height: 750, top: "85%", right: "-15%", animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10">
        <HubHero />
        <HubServices />
        <HubRoadmap />
        <Footer />
      </div>
    </main>
  );
}
