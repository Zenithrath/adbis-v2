"use client";

import { useEffect, useState } from "react";
import { Play, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

// TODO: ganti dengan ID video Company Profile dari YouTube (bagian setelah v=)
const YOUTUBE_VIDEO_ID = "VIDEO_ID_COMPANY_PROFILE";
const POSTER =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop";

const CARDS: {
  title: string;
  desc: string;
  href: string;
  external?: boolean;
  bg: string;
}[] = [
  {
    title: "Struktur Organisasi",
    desc: "Kenali BPI, pimpinan, dan 7 departemen kabinet.",
    href: "/people",
    bg: "bg-[#9C8A3C]",
  },
  {
    title: "Join Us",
    desc: "Daftar Open Recruitment dan jadi pengurus HMPS Adbis.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSc4_cfEm6E5W-xbkWop6pdyAb_XsuGB0lJ-BJ5_S0hibLSdqQ/viewform",
    external: true,
    bg: "bg-[#C2447C]",
  },
  {
    title: "Adbis Hub",
    desc: "Index layanan satu atap: aspirasi, karier, rekrutmen.",
    href: "/hub",
    bg: "bg-[#5A56C8]",
  },
  {
    title: "Contact",
    desc: "Hubungi pengurus langsung lewat email resmi.",
    href: "mailto:sentranawasena@gmail.com",
    bg: "bg-[#2E7D6B]",
  },
];

export default function Explore() {
  const [videoOpen, setVideoOpen] = useState(false);

  // Lock scroll + ESC saat popup video terbuka
  useEffect(() => {
    if (!videoOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [videoOpen]);

  return (
    <section className="cv-auto w-full text-[#FFFBEB] py-20 md:py-28 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Kiri: thumbnail YouTube */}
        <Reveal>
        <button
          type="button"
          onClick={() => setVideoOpen(true)}
          aria-label="Putar Company Profile HMPS Adbis"
          className="group relative w-full overflow-hidden rounded-[28px] border border-white/10 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7AAC]"
        >
          <span className="block relative aspect-[4/5] sm:aspect-[16/12] lg:aspect-[4/4.4] w-full">
            <Image
              src={POSTER}
              alt="Company Profile Kabinet Sentra Nawasena"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-[#1A1B41]/85 via-[#1A1B41]/20 to-[#1A1B41]/30" />
          </span>

          <span className="absolute top-5 left-5 rounded-full border border-white/70 px-5 py-2 text-sm font-semibold tracking-wide bg-white/10 backdrop-blur-md">
            Watch Now
          </span>

          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-[#1A1B41] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 md:w-9 md:h-9 fill-current ml-1" />
            </span>
          </span>

          <span className="absolute bottom-5 left-5 right-5">
            <span className="block font-serif italic text-xl md:text-2xl leading-tight">
              Company Profile
            </span>
            <span className="block text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#FFA6C8] mt-1">
              Kabinet Sentra Nawasena 2026
            </span>
          </span>
        </button>
        </Reveal>

        {/* Kanan: heading + CTA */}
        <Reveal delay={0.1}>
        <div>
          <p className="text-[#E3C565] font-semibold text-lg">Kenali</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-[0.95] mt-2">
            Eksplorasi Lebih Dalam Tentang HMPS Adbis
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-8">
            {CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                {...(card.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={cn(
                  "group relative overflow-hidden rounded-3xl p-6 md:p-7 min-h-[200px] md:min-h-[220px] flex flex-col justify-between text-white",
                  card.bg
                )}
              >
                <ArrowUpRight className="absolute top-5 right-5 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <h3 className="text-xl md:text-2xl font-black tracking-tight pr-8">
                  {card.title}
                </h3>
                <p className="text-sm text-white/85 leading-relaxed max-w-[26ch]">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
        </Reveal>
      </div>

      {/* Popup video */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Company Profile HMPS Adbis"
        >
          <button
            type="button"
            aria-label="Tutup video"
            onClick={() => setVideoOpen(false)}
            className="absolute inset-0 bg-[#0B0B18]/85 backdrop-blur-md cursor-pointer"
          />
          <div className="video-pop relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                title="Company Profile HMPS Administrasi Bisnis"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              aria-label="Tutup"
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#FF7AAC] hover:text-[#1A1B41] hover:border-[#FF7AAC] transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
