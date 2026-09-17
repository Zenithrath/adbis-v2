"use client";

import { useEffect, useState } from "react";
import { DEPARTMENTS, EXECUTIVE_BOARD, type Member } from "@/data/organization";
import PeopleHero from "@/components/people/PeopleHero";
import BpiSection from "@/components/people/BpiSection";
import DeptAbout from "@/components/people/DeptAbout";
import DeptDetail from "@/components/people/DeptDetail";
import ProkerShowcase from "@/components/people/ProkerShowcase";
import MemberModal from "@/components/people/MemberModal";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";
import DeptStepper from "@/components/people/DeptStepper";

export default function PeoplePage() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [activeDeptId, setActiveDeptId] = useState(DEPARTMENTS[0].id);

  const activeDept =
    DEPARTMENTS.find((d) => d.id === activeDeptId) || DEPARTMENTS[0];
    
  const bpiMembers = EXECUTIVE_BOARD;

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
          className="orb orb-blue animate-orb-left hidden md:block"
          style={{ width: 800, height: 800, top: "60%", left: "-12%", animationDelay: "2s" }}
        />
        <div
          className="orb orb-purple animate-orb-right hidden md:block"
          style={{ width: 750, height: 750, top: "85%", right: "-15%", animationDelay: "3s" }}
        />
      </div>

      <main className="relative z-10 w-full text-[#1e293b] overflow-x-clip">
        <PeopleHero activeDeptId={activeDeptId} onSelectDept={setActiveDeptId} />
        <BpiSection bpiMembers={bpiMembers} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-8 md:pt-14 pb-8 border-t border-white/10">
           <DeptStepper activeId={activeDeptId} onSelect={setActiveDeptId} />
        </div>
        <DeptAbout dept={activeDept} />
        <DeptDetail dept={activeDept} onSelectMember={setSelectedMember} />
        <ProkerShowcase key={activeDept.id} dept={activeDept} />
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
        <FooterTapedDesign />
      </main>
    </div>
  );
}
