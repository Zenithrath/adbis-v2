"use client";

import { useState } from "react";
import { Camera, Send, Mail, ExternalLink, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const contacts = [
  {
    label: "Instagram",
    value: "@hmpsabisbrawijaya",
    icon: Camera,
    href: "https://instagram.com/hmpsabisbrawijaya",
    bg: "bg-[#F9A8D4]",
    text: "text-[#1A1B41]",
  },
  {
    label: "TikTok",
    value: "@hmpsabisub",
    icon: Send,
    href: "https://tiktok.com/@hmpsabisub",
    bg: "bg-white/10",
    text: "text-white",
  },
  {
    label: "Email Resmi HMPS",
    value: "sentranawasena@gmail.com",
    icon: Mail,
    href: "mailto:sentranawasena@gmail.com",
    bg: "bg-[#BFDBFE]",
    text: "text-[#1A1B41]",
    copyable: true,
  },
];

export default function ContactCards() {
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
    <section className="w-full border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-24">
        <Reveal>
          <div className="mb-12 border-b border-white/10 pb-6">
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 block mb-3">
              • (02) KONTAK RESMI
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-white">
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
                    ? "bg-[#F472B6] border-[#F472B6] text-[#1A1B41]"
                    : "border-white/25 text-white/60 hover:bg-white hover:text-[#1A1B41] hover:border-white"
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
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40 transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:text-[#1A1B41]">
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
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5">
                  {c.label}
                </p>
                <p className="text-lg md:text-xl font-black tracking-tight text-white break-all">
                  {c.value}
                </p>
              </>
            );

            const cardClass =
              "group block bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.6)]";

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
  );
}
