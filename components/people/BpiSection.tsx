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
                 { name: "Sekretaris II", role: "Sekretaris II", image: "" };
                 
  const benda1 = bpiMembers.find((m) => m.role.toLowerCase().includes("bendahara") && m.id.includes("1")) || 
                 bpiMembers.find((m) => m.role.toLowerCase().includes("bendahara"));
                 
  const benda2 = bpiMembers.find((m) => m.role.toLowerCase().includes("bendahara") && m.id.includes("2")) || 
                 { name: "Bendahara II", role: "Bendahara II", image: "" };

  const pio1 = bpiMembers.find((m) => m.id.includes("pio-1")) || { name: "PIO 1", role: "Pengawas Internal Organisasi", image: "" };
  const pio2 = bpiMembers.find((m) => m.id.includes("pio-2")) || { name: "PIO 2", role: "Pengawas Internal Organisasi", image: "" };
  const pio3 = bpiMembers.find((m) => m.id.includes("pio-3")) || { name: "PIO 3", role: "Pengawas Internal Organisasi", image: "" };
  const pio4 = bpiMembers.find((m) => m.id.includes("pio-4")) || { name: "PIO 4", role: "Pengawas Internal Organisasi", image: "" };

  const NodeCard = ({ member, className = "" }: { member: any; className?: string }) => {
    if (!member) return null;
    return (
      <div className={`relative flex flex-col items-center p-3 sm:p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] w-full max-w-[200px] z-10 ${className}`}>
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-3 border-2 border-[#F9A8D4]">
          {member.image ? (
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-[#1A1B41] flex items-center justify-center">
              <span className="text-[#F9A8D4] text-xs font-bold">PIC</span>
            </div>
          )}
        </div>
        <div className="text-center w-full">
          <h3 className="font-bold text-white text-sm sm:text-base leading-tight mb-1 truncate w-full" title={member.name}>
            {member.name}
          </h3>
          <p className="text-[#F9A8D4] text-[10px] sm:text-xs font-medium leading-tight">
            {member.role.replace(" (BPI)", "")}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full py-16 sm:py-24 border-b border-white/10 overflow-hidden">
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
          {/* Chart lines/connectors (CSS drawn) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Kahim to Wakahim */}
            <div className="absolute left-1/2 top-[120px] w-px h-[40px] bg-white/20 -translate-x-1/2" />
            
            {/* Wakahim to BPI Hub */}
            <div className="absolute left-1/2 top-[290px] w-px h-[40px] bg-white/20 -translate-x-1/2" />
            
            {/* BPI Hub */}
            <div className="absolute left-1/2 top-[330px] w-[820px] h-px bg-white/20 -translate-x-1/2" />
            
            {/* Drops from BPI Hub */}
            <div className="absolute left-[calc(50%-410px)] top-[330px] w-px h-[40px] bg-white/20" /> {/* Sekre 1 */}
            <div className="absolute left-[calc(50%-170px)] top-[330px] w-px h-[40px] bg-white/20" /> {/* Sekre 2 */}
            <div className="absolute left-[calc(50%+170px)] top-[330px] w-px h-[40px] bg-white/20" /> {/* Benda 1 */}
            <div className="absolute left-[calc(50%+410px)] top-[330px] w-px h-[40px] bg-white/20" /> {/* Benda 2 */}
            <div className="absolute left-1/2 top-[330px] w-px h-[240px] bg-white/20 -translate-x-1/2" /> {/* To PIO */}

            {/* PIO Hub */}
            <div className="absolute left-1/2 top-[620px] w-[700px] h-px bg-white/20 -translate-x-1/2" />
            
            {/* Drops from PIO Hub */}
            <div className="absolute left-[calc(50%-350px)] top-[620px] w-px h-[40px] bg-white/20" />
            <div className="absolute left-[calc(50%-116px)] top-[620px] w-px h-[40px] bg-white/20" />
            <div className="absolute left-[calc(50%+116px)] top-[620px] w-px h-[40px] bg-white/20" />
            <div className="absolute left-[calc(50%+350px)] top-[620px] w-px h-[40px] bg-white/20" />
          </div>

          <Reveal>
            <div className="flex justify-center">
              <NodeCard member={kahim} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex justify-center mt-[40px]">
              <NodeCard member={wakahim} />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex justify-center mt-[30px] opacity-0 pointer-events-none h-0">
               {/* Invisible spacer for BPI label if we wanted one */}
            </div>
          </Reveal>

          <div className="flex justify-between items-start mt-[80px] max-w-[1100px] mx-auto px-4 relative z-10">
            <Reveal delay={0.3} className="flex-1 flex justify-center gap-10">
              <NodeCard member={sekre1} />
              <NodeCard member={sekre2} />
            </Reveal>
            <Reveal delay={0.2} className="flex-none flex justify-center mt-[-40px] px-8">
               <div className="py-2 px-6 rounded-full bg-[#1A1B41] border border-white/20 text-white font-bold text-sm tracking-widest z-10 shadow-lg">
                 BPI
               </div>
            </Reveal>
            <Reveal delay={0.5} className="flex-1 flex justify-center gap-10">
              <NodeCard member={benda1} />
              <NodeCard member={benda2} />
            </Reveal>
          </div>

          <Reveal delay={0.7}>
            <div className="flex justify-center mt-[40px]">
               <div className="py-2 px-6 rounded-full bg-[#1A1B41] border border-white/20 text-[#F9A8D4] font-bold text-sm tracking-widest z-10 shadow-lg">
                 PIO
               </div>
            </div>
          </Reveal>

          <div className="flex justify-between mt-[40px] max-w-[900px] mx-auto">
            <Reveal delay={0.8} className="flex-1 flex justify-center -ml-6">
              <NodeCard member={pio1} />
            </Reveal>
            <Reveal delay={0.9} className="flex-1 flex justify-center">
              <NodeCard member={pio2} />
            </Reveal>
            <Reveal delay={1.0} className="flex-1 flex justify-center">
              <NodeCard member={pio3} />
            </Reveal>
            <Reveal delay={1.1} className="flex-1 flex justify-center -mr-6">
              <NodeCard member={pio4} />
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
            <Reveal delay={0.3}><NodeCard member={sekre1} className="mx-auto w-full max-w-[180px]" /></Reveal>
            <Reveal delay={0.4}><NodeCard member={sekre2} className="mx-auto w-full max-w-[180px]" /></Reveal>
            <Reveal delay={0.5}><NodeCard member={benda1} className="mx-auto w-full max-w-[180px]" /></Reveal>
            <Reveal delay={0.6}><NodeCard member={benda2} className="mx-auto w-full max-w-[180px]" /></Reveal>
          </div>

          <div className="w-px h-6 bg-white/20 mt-6" />
          <Reveal delay={0.7}>
            <div className="py-1 px-4 rounded-full bg-white/10 text-[#F9A8D4] font-bold text-xs tracking-widest">
              PIO
            </div>
          </Reveal>
          <div className="w-px h-6 bg-white/20" />

          <div className="grid grid-cols-2 gap-6 w-full px-2 max-w-[500px] mx-auto">
            <Reveal delay={0.8}><NodeCard member={pio1} className="mx-auto w-full max-w-[180px]" /></Reveal>
            <Reveal delay={0.9}><NodeCard member={pio2} className="mx-auto w-full max-w-[180px]" /></Reveal>
            <Reveal delay={1.0}><NodeCard member={pio3} className="mx-auto w-full max-w-[180px]" /></Reveal>
            <Reveal delay={1.1}><NodeCard member={pio4} className="mx-auto w-full max-w-[180px]" /></Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
