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
  );
}
