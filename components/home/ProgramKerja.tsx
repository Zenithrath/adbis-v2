"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Component as ConnoisseurStack } from "@/components/ui/connoisseur-stack-interactor";
import ProkerBentoGrid from "@/components/ui/bento";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Reveal } from "@/components/ui/reveal";

const BENTO_ITEMS = [
  {
    num: "01",
    name: "Invest Adbis",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    desc: "Sekolah pasar modal dan simulasi trading saham bareng BEI — bekal melek finansial sejak dini sekaligus tameng dari jebakan investasi bodong.",
  },
  {
    num: "02",
    name: "Bina Masyarakat",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop",
    desc: "Terjun ke desa binaan melatih pencatatan keuangan dan pemasaran digital UMKM — ilmu bisnis yang langsung dirasakan masyarakat.",
  },
  {
    num: "03",
    name: "Market Day",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    desc: "Festival expo kewirausahaan dengan belasan booth kuliner, fashion, dan produk kreatif — ajang validasi pasar produk mahasiswa.",
  },
  {
    num: "04",
    name: "Sencrea",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    desc: "Panggung seni musik, tari, dan desain komunikasi visual — ruang ekspresi dan apresiasi talenta seni mahasiswa Adbis.",
  },
];

export default function ProgramKerja() {
  const router = useRouter();
  // Stack GSAP desktop berat (pin + SVG 220vh) — jangan mount di HP/tablet
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section className="w-full scroll-mt-[60px] text-[#FFFBEB] pt-20 border-t border-white/10" id="prokerja">
      <Reveal className="max-w-[1400px] mx-auto px-5 md:px-16 mb-10 md:mb-14">
        <h2 className="text-5xl md:text-8xl font-black tracking-tight uppercase flex items-start">
          BIG PROKER <span className="text-xl md:text-3xl font-semibold ml-2 mt-2">(4)</span>
        </h2>
      </Reveal>

      {/* Desktop: pinned GSAP stack (tidak di-mount di HP) */}
      {isDesktop && (
        <div className="hidden lg:block">
          <ConnoisseurStack />
        </div>
      )}

      {/* Mobile/Tablet: bento grid responsif */}
      {!isDesktop && (
        <div className="lg:hidden max-w-[1400px] mx-auto px-5 md:px-16 pb-20">
          <Reveal>
            <ProkerBentoGrid items={BENTO_ITEMS} />
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex justify-center">
            <InteractiveHoverButton
              text="Struktur & Proker"
              onClick={() => router.push("/people")}
            />
          </Reveal>
        </div>
      )}
    </section>
  );
}
