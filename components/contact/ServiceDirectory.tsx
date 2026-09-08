"use client";

import {
  Sparkles,
  MessageSquare,
  GraduationCap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const hubLinks = [
  {
    no: "01",
    title: "Registration Open Recruitment",
    desc: "Daftar sekarang untuk bergabung menjadi pengurus HMPS ADBIS.",
    icon: Sparkles,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSc4_cfEm6E5W-xbkWop6pdyAb_XsuGB0lJ-BJ5_S0hibLSdqQ/viewform",
    tag: "Formulir Pendaftaran",
    accent: "#1e293b",
  },
  {
    no: "02",
    title: "Link Aspirasi Mahasiswa",
    desc: "Sampaikan aspirasi dan masukanmu untuk kemajuan HMPS ADBIS.",
    icon: MessageSquare,
    href: "https://forms.gle/jWh8TNG5hoUVDC2x7",
    tag: "Kotak Suara",
    accent: "#F472B6",
  },
  {
    no: "03",
    title: "Career Preparation",
    desc: "Lihat roadmap persiapan karier dari semester 1 hingga lulus.",
    icon: GraduationCap,
    href: "/career",
    tag: "Halaman Internal",
    accent: "#4346D0",
  },
];

export default function ServiceDirectory() {
  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10 border-b border-[#1e293b]/10 pb-6">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/40 block mb-3">
                • (01) LAYANAN
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                Index Layanan
              </h2>
            </div>
            <span className="hidden sm:block text-5xl md:text-7xl font-black text-[#1e293b]/10 select-none leading-none">
              HUB
            </span>
          </div>
        </Reveal>

        <div className="border-t border-[#1e293b]/15">
          {hubLinks.map((link, i) => {
            const Icon = link.icon;
            const external = link.href.startsWith("http");
            return (
              <Reveal key={link.no} delay={i * 0.08}>
                <a
                  href={link.href}
                  target={external ? "_blank" : "_self"}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center border-b border-[#1e293b]/15 py-7 md:py-9 transition-colors hover:bg-white/70 px-3 md:px-4 -mx-3 md:-mx-4 rounded-xl"
                >
                  <span className="md:col-span-1 text-3xl md:text-5xl font-black leading-none text-[#1e293b]/15 transition-colors group-hover:text-[#F472B6]">
                    {link.no}
                  </span>
                  <span
                    className="md:col-span-1 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{
                      backgroundColor: `${link.accent}1a`,
                      color: link.accent,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="md:col-span-7 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight leading-tight transition-colors group-hover:text-[#F472B6]">
                        {link.title}
                      </h3>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#1e293b]/35 border border-[#1e293b]/15 rounded-full px-2.5 py-0.5">
                        {link.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-[#1e293b]/55 leading-relaxed max-w-2xl">
                      {link.desc}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:text-right flex items-center justify-between md:justify-end gap-3">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#1e293b]/40 md:hidden">
                      Buka Layanan
                    </span>
                    <span className="hidden md:flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-[#1e293b]/40">
                      Buka Layanan
                      <span className="w-11 h-11 rounded-full border border-[#1e293b]/25 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1e293b] group-hover:border-[#1e293b] group-hover:text-[#FFFBEB]">
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </span>
                    {external && (
                      <span className="w-11 h-11 rounded-full border border-[#1e293b]/25 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1e293b] group-hover:border-[#1e293b] group-hover:text-[#FFFBEB] md:hidden">
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
