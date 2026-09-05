"use client";

import { useState } from "react";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";
import { Reveal } from "@/components/ui/reveal";
import {
  Sparkles,
  MessageSquare,
  GraduationCap,
  Camera,
  Send,
  Mail,
  ExternalLink,
  Check,
  ArrowRight,
} from "lucide-react";

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

const contacts = [
  {
    label: "Instagram",
    value: "@hmpsabisbrawijaya",
    icon: Camera,
    href: "https://instagram.com/hmpsabisbrawijaya",
    bg: "bg-[#F9A8D4]",
    text: "text-[#1e293b]",
  },
  {
    label: "TikTok",
    value: "@hmpsabisub",
    icon: Send,
    href: "https://tiktok.com/@hmpsabisub",
    bg: "bg-[#1e293b]",
    text: "text-[#FFFBEB]",
  },
  {
    label: "Email Resmi HMPS",
    value: "sentranawasena@gmail.com",
    icon: Mail,
    href: "mailto:sentranawasena@gmail.com",
    bg: "bg-[#BFDBFE]",
    text: "text-[#1e293b]",
    copyable: true,
  },
];

const marqueeHandles = [
  "@hmpsabisbrawijaya",
  "@hmpsabisub",
  "sentranawasena@gmail.com",
  "HMPS ADMINISTRASI BISNIS",
  "KABINET SENTRA NAWASENA",
];

function MarqueeHalf() {
  return (
    <div className="flex items-center shrink-0">
      {marqueeHandles.map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-8 pr-8 text-[10px] md:text-xs font-black uppercase tracking-[0.35em] whitespace-nowrap"
        >
          {item} <span className="text-[#F9A8D4] text-base">✱</span>
        </span>
      ))}
    </div>
  );
}

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sentranawasena@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <main className="relative w-full bg-[#FFFBEB] text-[#1e293b] overflow-x-clip">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative w-full editorial-grid-bg border-b border-[#1e293b]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-8 md:pt-14 pb-16 md:pb-20">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-[#1e293b]/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/50">
            <span className="flex items-center gap-2">
              <span className="text-[#F472B6]">✱</span> ADBIS HUB — SATU
              ATAP UNTUK SEMUA
            </span>
            <span className="hidden sm:block">KONTAK & LAYANAN</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 mt-10 md:mt-14 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <h1 className="font-black uppercase leading-[0.85] tracking-tighter select-none">
                  <span className="block text-[clamp(2.4rem,6.5vw,6.5rem)]">
                    Pusat Layanan
                  </span>
                  <span className="block text-[clamp(2.4rem,6.5vw,6.5rem)] text-stroke-ink">
                    & Informasi
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 flex items-center gap-4">
                  <span className="text-xl font-light">✱</span>
                  <div className="h-px bg-[#1e293b]/20 flex-1" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/50">
                    REKRUTMEN · ASPIRASI · KARIER
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <div className="border border-[#1e293b]/20 rounded-2xl bg-white/70 p-6 md:p-8">
                  <p className="text-[13px] leading-relaxed text-[#1e293b]/75">
                    Semua yang kamu butuhkan ada di sini — dari rekrutmen,
                    aspirasi, hingga persiapan karier. Pilih layanan, klik,
                    dan selesai.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Open Recruitment", "Aspirasi", "Karier"].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full border border-[#1e293b]/20 text-[9px] font-bold uppercase tracking-widest text-[#1e293b]/55"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICE DIRECTORY ═══════════ */}
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

      {/* ═══════════ RESMI CONTACT CARDS ═══════════ */}
      <section className="w-full bg-[#F9A8D4]/25 border-y border-[#1e293b]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-24">
          <Reveal>
            <div className="mb-12 border-b border-[#1e293b]/10 pb-6">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/40 block mb-3">
                • (02) KONTAK RESMI
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                Sapaan Kami
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {contacts.map((c, i) => {
              const Icon = c.icon;
              const external = c.href.startsWith("http");
              const corner = c.copyable ? (
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Salin alamat email"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[9px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                    copied
                      ? "bg-[#1e293b] border-[#1e293b] text-[#FFFBEB]"
                      : "border-[#1e293b]/25 text-[#1e293b]/60 hover:bg-[#1e293b] hover:text-[#FFFBEB] hover:border-[#1e293b]"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3" /> Tersalin!
                    </>
                  ) : (
                    "Salin Email"
                  )}
                </button>
              ) : (
                <span className="w-8 h-8 rounded-full border border-[#1e293b]/20 flex items-center justify-center text-[#1e293b]/40 transition-all duration-300 group-hover:bg-[#1e293b] group-hover:border-[#1e293b] group-hover:text-[#FFFBEB]">
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              );

              const inner = (
                <>
                  <div className="flex items-start justify-between mb-8">
                    <span
                      className={`${c.bg} ${c.text} w-12 h-12 rounded-xl flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    {corner}
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#1e293b]/40 mb-1.5">
                    {c.label}
                  </p>
                  <p className="text-lg md:text-xl font-black tracking-tight break-all">
                    {c.value}
                  </p>
                </>
              );

              const cardClass =
                "group block bg-white border border-[#1e293b]/10 rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-20px_rgba(30,41,59,0.35)]";

              return (
                <Reveal key={c.label} delay={i * 0.08}>
                  {c.copyable ? (
                    <div className={cardClass}>{inner}</div>
                  ) : (
                    <a
                      href={c.href}
                      target={external ? "_blank" : "_self"}
                      rel={external ? "noopener noreferrer" : undefined}
                      className={cardClass}
                    >
                      {inner}
                    </a>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <div className="marquee-wrap marquee-mask bg-[#1e293b] text-[#FFFBEB] py-3.5 overflow-hidden">
        <div className="marquee-track" style={{ animationDuration: "24s" }}>
          <MarqueeHalf />
          <MarqueeHalf />
        </div>
      </div>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-28">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#F472B6] block mb-4">
                ✱ MARI BERKOLABORASI
              </span>
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
                Punya Ide atau
                <br />
                <span className="text-stroke-ink">Aspirasi?</span>
              </h2>
              <p className="mt-6 text-xs md:text-sm text-[#1e293b]/55 leading-relaxed max-w-md mx-auto">
                HMPS Administrasi Bisnis selalu terbuka terhadap masukan yang
                membangun. Suaramu adalah bahan bakar kabinet kami.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="https://forms.gle/jWh8TNG5hoUVDC2x7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1e293b] text-[#FFFBEB] text-[10px] font-bold uppercase tracking-widest hover:bg-[#F472B6] transition-colors"
                >
                  Sampaikan Aspirasi
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc4_cfEm6E5W-xbkWop6pdyAb_XsuGB0lJ-BJ5_S0hibLSdqQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#1e293b] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1e293b] hover:text-[#FFFBEB] transition-all"
                >
                  Daftar Open Recruitment
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FooterTapedDesign />
    </main>
  );
}
