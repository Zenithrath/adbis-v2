"use client";

import { Reveal } from "@/components/ui/reveal";
import { Member } from "@/data/organization";

interface BpiSectionProps {
  bpiMembers: Member[];
}

export default function BpiSection({ bpiMembers }: BpiSectionProps) {
  // Helpers to get specific roles
  const kahim = bpiMembers.find((m) => m.role.toLowerCase().includes("ketua himpunan"));
  const wakahim = bpiMembers.find((m) => m.role.toLowerCase().includes("wakil ketua himpunan"));
  
  const sekre1 = bpiMembers.find((m) => m.role.toLowerCase().includes("sekretaris") && m.id.includes("1")) || 
                 bpiMembers.find((m) => m.role.toLowerCase().includes("sekretaris"));
  
  // Dummy data for missing roles if not available in data source yet
  const sekre2 = bpiMembers.find((m) => m.role.toLowerCase().includes("sekretaris") && m.id.includes("2")) || 
                 { name: "Sekretaris II", role: "Sekretaris II", image: "/images/BPI/64.webp" };
                 
  const benda1 = bpiMembers.find((m) => m.role.toLowerCase().includes("bendahara") && m.id.includes("1")) || 
                 bpiMembers.find((m) => m.role.toLowerCase().includes("bendahara"));
                 
  const benda2 = bpiMembers.find((m) => m.role.toLowerCase().includes("bendahara") && m.id.includes("2")) || 
                 { name: "Bendahara II", role: "Bendahara II", image: "/images/BPI/66.webp" };

  const pio1 = bpiMembers.find((m) => m.id.includes("pio-1")) || { name: "PIO 1", role: "Pengawas Internal Organisasi", image: "/images/BPI/67.webp" };
  const pio2 = bpiMembers.find((m) => m.id.includes("pio-2")) || { name: "PIO 2", role: "Pengawas Internal Organisasi", image: "/images/BPI/68.webp" };
  const pio3 = bpiMembers.find((m) => m.id.includes("pio-3")) || { name: "PIO 3", role: "Pengawas Internal Organisasi", image: "/images/BPI/69.webp" };
  const pio4 = bpiMembers.find((m) => m.id.includes("pio-4")) || { name: "PIO 4", role: "Pengawas Internal Organisasi", image: "/images/BPI/70.webp" };

  const NodeCard = ({ member, className = "", drop }: { member: any; className?: string; drop?: "hub" | "pio" }) => {
    if (!member) return null;
    return (
      <div className={`relative flex flex-col items-center min-w-0 p-3 sm:p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] w-full max-w-[200px] z-10 ${className}`}>
        {drop === "hub" && <div className="absolute left-1/2 -top-[37px] -translate-x-1/2 w-px h-[37px] bg-white/20" />}
        {drop === "pio" && <div className="absolute left-1/2 -top-[40px] -translate-x-1/2 w-px h-[40px] bg-white/20" />}
        <div className="w-full overflow-hidden rounded-lg border-2 border-[#F9A8D4]">
          {member.image ? (
            <img src={member.image} alt={member.name} className="block w-full h-auto" />
          ) : (
            <div className="w-full aspect-[576/684] bg-[#1A1B41] flex items-center justify-center">
              <span className="text-[#F9A8D4] text-xs font-bold">PIC</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="struktur-bpi" className="relative w-full py-16 sm:py-24 border-b border-white/10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        
        <Reveal>
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white mb-4">
              Struktur BPI
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
              Badan Pengurus Inti Himpunan Mahasiswa Program Studi Administrasi Bisnis
            </p>
          </div>
        </Reveal>

        {/* Desktop & Tablet Chart */}
        <div className="hidden md:block relative w-full pt-4 pb-12">
          <Reveal>
            <div className="flex justify-center">
              <NodeCard member={kahim} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex justify-center mt-[40px]">
              {/* Kahim to Wakahim */}
              <div className="absolute left-1/2 -top-[40px] -translate-x-1/2 w-px h-[40px] bg-white/20" />
              <NodeCard member={wakahim} />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex justify-center mt-[30px] opacity-0 pointer-events-none h-0">
               {/* Invisible spacer for BPI label if we wanted one */}
            </div>
          </Reveal>

          <div className="relative flex justify-between items-start mt-[80px] max-w-[1100px] mx-auto px-4 z-10">
            {/* Vertical spine: Wakahim down through BPI badge to PIO badge */}
            <div className="absolute left-1/2 -top-[110px] -translate-x-1/2 w-px h-[calc(100%+188px)] bg-white/20 z-0" />
            {/* BPI Hub */}
            <div className="absolute left-1/2 -top-[37px] -translate-x-1/2 w-[820px] h-px bg-white/20 z-0" />

            <Reveal delay={0.3} className="flex-1 flex justify-center gap-10 min-w-0">
              <NodeCard member={sekre1} drop="hub" />
              <NodeCard member={sekre2} drop="hub" />
            </Reveal>
            <Reveal delay={0.2} className="flex-none flex justify-center mt-[-40px] px-8">
               <div className="py-2 px-6 rounded-full bg-[#1A1B41] border border-white/20 text-white font-bold text-sm tracking-widest z-10 shadow-lg">
                 BPI
               </div>
            </Reveal>
            <Reveal delay={0.5} className="flex-1 flex justify-center gap-10 min-w-0">
              <NodeCard member={benda1} drop="hub" />
              <NodeCard member={benda2} drop="hub" />
            </Reveal>
          </div>

          <Reveal delay={0.7}>
            <div className="flex justify-center mt-[40px]">
               <div className="py-2 px-6 rounded-full bg-[#1A1B41] border border-white/20 text-[#F9A8D4] font-bold text-sm tracking-widest z-10 shadow-lg">
                 PIO
               </div>
            </div>
          </Reveal>

          <div className="relative flex justify-between mt-[40px] max-w-[900px] mx-auto">
            {/* PIO Hub */}
            <div className="absolute left-1/2 -top-[40px] -translate-x-1/2 w-[700px] h-px bg-white/20 z-0" />
            <Reveal delay={0.8} className="flex-1 flex justify-center min-w-0 -ml-6">
              <NodeCard member={pio1} drop="pio" />
            </Reveal>
            <Reveal delay={0.9} className="flex-1 flex justify-center min-w-0">
              <NodeCard member={pio2} drop="pio" />
            </Reveal>
            <Reveal delay={1.0} className="flex-1 flex justify-center min-w-0">
              <NodeCard member={pio3} drop="pio" />
            </Reveal>
            <Reveal delay={1.1} className="flex-1 flex justify-center min-w-0 -mr-6">
              <NodeCard member={pio4} drop="pio" />
            </Reveal>
          </div>
        </div>

        {/* Mobile Vertical Chart */}
        <div className="md:hidden flex flex-col items-center space-y-6">
          <Reveal>
            <NodeCard member={kahim} />
          </Reveal>
          <div className="w-px h-6 bg-white/20" />
          <Reveal delay={0.1}>
            <NodeCard member={wakahim} />
          </Reveal>
          
          <div className="w-px h-6 bg-white/20" />
          <Reveal delay={0.2}>
            <div className="py-1 px-4 rounded-full bg-white/10 text-white font-bold text-xs tracking-widest">
              BPI
            </div>
          </Reveal>
          <div className="w-px h-6 bg-white/20" />

          <div className="grid grid-cols-2 gap-6 w-full px-2 max-w-[500px] mx-auto">
            <Reveal delay={0.3} className="min-w-0"><NodeCard member={sekre1} className="mx-auto w-full max-w-[180px]" /></Reveal>
            <Reveal delay={0.4} className="min-w-0"><NodeCard member={sekre2} className="mx-auto w-full max-w-[180px]" /></Reveal>
            <Reveal delay={0.5} className="min-w-0"><NodeCard member={benda1} className="mx-auto w-full max-w-[180px]" /></Reveal>
            <Reveal delay={0.6} className="min-w-0"><NodeCard member={benda2} className="mx-auto w-full max-w-[180px]" /></Reveal>
          </div>

          <div className="w-px h-6 bg-white/20 mt-6" />
          <Reveal delay={0.7}>
            <div className="py-1 px-4 rounded-full bg-white/10 text-[#F9A8D4] font-bold text-xs tracking-widest">
              PIO
            </div>
          </Reveal>
          <div className="w-px h-6 bg-white/20" />

          <div className="grid grid-cols-2 gap-6 w-full px-2 max-w-[500px] mx-auto">
            <Reveal delay={0.8} className="min-w-0"><NodeCard member={pio1} className="mx-auto w-full max-w-[180px]" /></Reveal>
            <Reveal delay={0.9} className="min-w-0"><NodeCard member={pio2} className="mx-auto w-full max-w-[180px]" /></Reveal>
            <Reveal delay={1.0} className="min-w-0"><NodeCard member={pio3} className="mx-auto w-full max-w-[180px]" /></Reveal>
            <Reveal delay={1.1} className="min-w-0"><NodeCard member={pio4} className="mx-auto w-full max-w-[180px]" /></Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}

