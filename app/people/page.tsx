"use client";

import { useEffect, useState } from "react";
import { type Member } from "@/data/organization";
import PeopleHero from "@/components/people/PeopleHero";
import PeopleMarquee from "@/components/people/PeopleMarquee";
import StructureSection from "@/components/people/StructureSection";
import DeptDetail from "@/components/people/DeptDetail";
import MemberModal from "@/components/people/MemberModal";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";

export default function PeoplePage() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedMember ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

  return (
    <div className="relative w-full flex flex-col font-sans">
      {/* Grid background — sama dengan homepage */}
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

      {/* Glow orbs — sama dengan homepage */}
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

      <main className="relative z-10 w-full text-[#1e293b] overflow-x-clip">
        <PeopleHero />
        <PeopleMarquee />
        <StructureSection onSelectMember={setSelectedMember} />
        <DeptDetail onSelectMember={setSelectedMember} />
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
        <FooterTapedDesign />
      </main>
    </div>
  );
}
