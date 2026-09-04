"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "../hooks/useLenis";
import { Component as SterlingGateNav } from "@/components/ui/sterling-gate-kinetic-navigation";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";
import { Sparkles, ExternalLink, GraduationCap, MessageSquare, Camera, Send, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const hubLinks = [
  {
    title: "Registration Open Recruitment",
    desc: "Daftar sekarang untuk bergabung menjadi pengurus HMPS ADBIS.",
    icon: Sparkles,
    color: "#4346D0",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSc4_cfEm6E5W-xbkWop6pdyAb_XsuGB0lJ-BJ5_S0hibLSdqQ/viewform",
  },
  {
    title: "Link Aspirasi Mahasiswa",
    desc: "Sampaikan aspirasi dan masukanmu untuk kemajuan HMPS ADBIS.",
    icon: MessageSquare,
    color: "#8B5CF6",
    href: "https://forms.gle/jWh8TNG5hoUVDC2x7",
  },
  {
    title: "Career Preparation",
    desc: "Lihat roadmap persiapan karier dari semester 1 hingga lulus.",
    icon: GraduationCap,
    color: "#F97316",
    href: "/career",
  },
];

const contacts = [
  {
    label: "Instagram",
    value: "@hmpsabisbrawijaya",
    icon: Camera,
    color: "#E1306C",
    href: "https://instagram.com/hmpsabisbrawijaya",
  },
  {
    label: "TikTok",
    value: "@hmpsabisub",
    icon: Send,
    color: "#111",
    href: "https://tiktok.com/@hmpsabisub",
  },
  {
    label: "Email Resmi HMPS",
    value: "sentranawasena@gmail.com",
    icon: Mail,
    color: "#EA4335",
    href: "mailto:sentranawasena@gmail.com",
  },
];

export default function ContactPage() {
  useLenis();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-hero", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.2 });
      gsap.fromTo(".hub-card", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power2.out", scrollTrigger: { trigger: ".hub-grid", start: "top 85%", once: true } });
      gsap.fromTo(".contact-item", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".contact-grid", start: "top 85%", once: true } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="relative bg-[#4346D0] min-h-screen overflow-hidden">
      <SterlingGateNav />
      <div className="fixed inset-0 bg-grid-lines pointer-events-none opacity-40" />
      <div className="fixed inset-0 pink-glow pointer-events-none opacity-60" />
      <div className="fixed inset-0 pixel-spot-overlay opacity-20 pointer-events-none" />

      {/* Hero */}
      <section className="relative z-10 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center contact-hero">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF8C7] text-[#111] border-2 border-[#111] shadow-[3px_3px_0px_#111] text-xs font-black tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" /> ADBIS HUB
          </div>
          <h1 className="font-unbounded text-[clamp(2rem,6vw,4rem)] font-black text-white leading-[0.9] tracking-tight" style={{ textShadow: "3px 3px 0 #111, 6px 6px 0 rgba(0,0,0,0.15)" }}>
            Pusat Layanan <br className="hidden sm:block" />
            <span className="text-[#FFF8C7]">& Informasi</span> Mahasiswa
          </h1>
          <p className="font-body text-white/70 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Semua yang kamu butuhkan ada di sini — dari rekrutmen, aspirasi, hingga persiapan karier.
          </p>
        </div>
      </section>

      {/* Hub Links */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto hub-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hubLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hub-card group bg-[#FFF8C7] rounded-[18px] border-[3px] border-[#111] shadow-[6px_6px_0px_#111] p-6 flex flex-col hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_#111] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-[12px] border-2 border-[#111] flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: link.color }}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-unbounded text-[16px] font-black text-[#111] leading-tight">{link.title}</h3>
                <p className="font-body text-[13px] text-[#111]/60 mt-2 flex-1">{link.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-[#4346D0] font-bold text-[13px]">
                  Kunjungi <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex px-4 py-1.5 rounded-full bg-white border-2 border-[#111] shadow-[3px_3px_0px_#111] text-[11px] font-black tracking-widest uppercase text-[#111]">Contact</span>
            <h2 className="font-unbounded text-[24px] sm:text-[30px] font-black text-white mt-4" style={{ textShadow: "2px 2px 0 #111" }}>
              Hubungi Kami
            </h2>
          </div>
          <div className="contact-grid grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : "_self"}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="contact-item group bg-white rounded-[16px] border-[2.5px] border-[#111] shadow-[4px_4px_0px_#111] p-5 flex gap-4 items-center hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#111] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-[12px] border-2 border-[#111] flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: c.color }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-unbounded text-[11px] font-black uppercase tracking-wider text-[#111]/50">{c.label}</p>
                    <p className="font-unbounded text-[13px] font-black text-[#111] truncate">{c.value}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#111]/30 ml-auto flex-shrink-0 group-hover:text-[#4346D0] transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <FooterTapedDesign />
    </main>
  );
}
