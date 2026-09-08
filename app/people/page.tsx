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
    <main className="relative w-full bg-[#FFFBEB] text-[#1e293b] overflow-x-clip">
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
  );
}
