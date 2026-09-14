"use client";

import { Reveal } from "@/components/ui/reveal";
import { EXECUTIVE_BOARD, type Member } from "@/data/organization";
import { cn } from "@/lib/utils";

const bpi = EXECUTIVE_BOARD.filter((m) => !m.isLeadership);

const EYEBROWS = ["Administrasi", "Keuangan"];
const TITLES = ["Sekretaris", "Bendahara"];

function SpotlightBlock({
  member,
  eyebrow,
  title,
  flip,
  onSelectMember,
}: {
  member: Member;
  eyebrow: string;
  title: string;
  flip?: boolean;
  onSelectMember: (m: Member) => void;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
      <div className={cn(flip && "lg:order-2")}>
        <Reveal>
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#F9A8D4] block mb-3">
            • {eyebrow}
          </span>
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-5">
            {title}
          </h3>
          <div
            className="group cursor-pointer lg:hidden mb-6"
            onClick={() => onSelectMember(member)}
          >
            <div className="relative w-full max-w-[340px] rounded-3xl overflow-hidden border-[3px] border-[#1e293b] shadow-[8px_8px_0px_#1e293b] bg-white transition-transform duration-300 group-hover:-translate-y-1">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
            </div>
          </div>
          <p className="text-sm md:text-[15px] text-white/60 leading-relaxed mb-5">
            {member.bio}
          </p>
          {member.tasks.length > 0 && (
            <>
              <p className="text-[11px] font-black uppercase tracking-widest text-white/45 mb-3">
                Fokus peran {title.toLowerCase()} yaitu:
              </p>
              <ul className="space-y-2.5">
                {member.tasks.map((task, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-white/65 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[#F472B6]" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="mt-5 text-[11px] font-bold uppercase tracking-widest text-white/40">
            {member.name} · {member.major}
          </p>
        </Reveal>
      </div>

      <div className={cn("hidden lg:block", flip && "lg:order-1")}>
        <Reveal delay={0.1}>
          <div
            className="group cursor-pointer flex"
            onClick={() => onSelectMember(member)}
          >
            <div
              className={cn(
                "relative w-full max-w-[400px] rounded-3xl overflow-hidden border-[3px] border-[#1e293b] shadow-[8px_8px_0px_#1e293b] bg-white transition-transform duration-300 group-hover:-translate-y-2",
                flip ? "mr-auto" : "ml-auto"
              )}
            >
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default function BpiSpotlight({
  onSelectMember,
}: {
  onSelectMember: (m: Member) => void;
}) {
  return (
    <section id="bpi" className="scroll-mt-24 w-full border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-16 md:py-24 space-y-16 md:space-y-24">
        {bpi.map((member, i) => (
          <SpotlightBlock
            key={member.id}
            member={member}
            eyebrow={EYEBROWS[i % EYEBROWS.length]}
            title={TITLES[i % TITLES.length]}
            flip={i % 2 === 1}
            onSelectMember={onSelectMember}
          />
        ))}
      </div>
    </section>
  );
}
