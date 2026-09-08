"use client";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ProgramKerja from "@/components/home/ProgramKerja";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col font-sans">
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
        <Hero />
        <About />
        <ProgramKerja />
        <Footer />
      </div>

      {/* Floating CTA Form Aspirasi */}
      <a
        href="#"
        className="fixed bottom-6 right-6 z-[90] px-6 py-3.5 rounded-full bg-[#FF7AAC] text-[#1A1B41] font-black text-[11px] uppercase tracking-widest shadow-[0_8px_24px_rgba(255,122,172,0.35)] hover:bg-[#FFA6C8] hover:shadow-[0_8px_32px_rgba(255,122,172,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
      >
        Kirim Aspirasi
      </a>
    </div>
  );
}
