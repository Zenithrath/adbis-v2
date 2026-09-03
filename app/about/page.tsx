"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "../hooks/useLenis";
import { Component as SterlingGateNav } from "@/components/ui/sterling-gate-kinetic-navigation";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";
import { Sparkles, Target, Compass, Users, Shield, Zap, Award, MessageCircle, Clock, HeartHandshake, Activity, RefreshCw, Smile } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { title: "Profesional", desc: "Menjalankan setiap amanah dengan standar tinggi, disiplin, dan tanggung jawab penuh.", icon: Award, color: "#4346D0" },
  { title: "Kolaboratif", desc: "Menguatkan sinergi lintas angkatan dan stakeholder untuk dampak berlipat.", icon: Users, color: "#E8C4B8" },
  { title: "Integritas", desc: "Transparan, jujur, dan konsisten antara kata dan aksi.", icon: Shield, color: "#9B8FE8" },
  { title: "Adaptif", desc: "Cepat tanggap terhadap tren teknologi dan dinamika industri.", icon: Zap, color: "#E89B4F" },
  { title: "Berdampak", desc: "Setiap program diukur dari manfaat nyata bagi mahasiswa dan masyarakat.", icon: Target, color: "#2B2F9E" },
];

const cultures = [
  { title: "Budaya Komunikasi Terbuka", desc: "Ruang aspirasi dua arah tanpa sekat.", icon: MessageCircle },
  { title: "Budaya Ketepatan Waktu", desc: "Disiplin waktu sebagai bentuk profesionalisme.", icon: Clock },
  { title: "Budaya Saling Mendukung", desc: "Gotong royong dan empati antar pengurus.", icon: HeartHandshake },
  { title: "Budaya Proaktif", desc: "Inisiatif sebelum diminta, solusi sebelum masalah.", icon: Activity },
  { title: "Budaya Evaluasi dan Perbaikan", desc: "Refleksi rutin untuk tumbuh berkelanjutan.", icon: RefreshCw },
  { title: "Budaya Profesional namun Humanis", desc: "Tegas pada target, hangat pada manusia.", icon: Smile },
];

export default function AboutPage() {
  useLenis();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero — same as homepage hero entrance
      gsap.fromTo(".about-hero", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.2 });
      gsap.fromTo(".about-hero-card", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.35 });

      // Visi — fromTo with ScrollTrigger
      gsap.fromTo(
        ".visi-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".visi-card", start: "top 85%", once: true },
        }
      );
      gsap.fromTo(
        ".misi-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: ".misi-wrap", start: "top 85%", once: true },
        }
      );
      // Values — stagger like proker sidebar
      gsap.fromTo(
        ".value-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".values-grid", start: "top 85%", once: true },
        }
      );
      // Culture — stagger
      gsap.fromTo(
        ".culture-card",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".culture-grid", start: "top 85%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="relative bg-[#4346D0] overflow-hidden">
      <SterlingGateNav />
      {/* BG */}
      <div className="fixed inset-0 bg-grid-lines pointer-events-none opacity-40" />
      <div className="fixed inset-0 pink-glow pointer-events-none opacity-60" />
      <div className="fixed inset-0 pixel-spot-overlay opacity-20 pointer-events-none" />

      {/* Hero */}
      <section id="tentang" className="relative z-10 min-h-[72vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="w-full max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#111] border-2 border-[#111] shadow-[3px_3px_0px_#111] text-xs font-black tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Tentang Kabinet
          </div>
          <h1 className="about-hero font-unbounded text-[clamp(2.8rem,8vw,5.5rem)] font-black leading-[0.85] tracking-[-2px] uppercase" style={{ textShadow: "3px 3px 0 #111, 6px 6px 0 rgba(0,0,0,0.15)" }}>
            <span className="text-[#FF8FA3]">SENTRA</span> <span className="text-[#C6C8FF]">NAWASENA</span>
          </h1>
          <p className="about-hero mt-4 font-unbounded text-[11px] sm:text-xs font-black tracking-[4px] uppercase text-[#FFF8C7]">PUSAT PENGGERAK INTI — MASA DEPAN CERAH</p>
          <div className="about-hero-card mt-8 mx-auto max-w-3xl bg-[#FFF8C7] rounded-[18px] border-[3px] border-[#111] shadow-[6px_6px_0px_#111] p-6 sm:p-8 text-left">
            <p className="font-body text-[13px] sm:text-[15px] leading-relaxed text-[#111]/80">
              <span className="font-black text-[#4346D0]">“Sentra Nawasena”</span> adalah Pusat Penggerak Inti yang berorientasi pada Masa Depan Yang Cerah, dengan komitmen menjadikan HMPS Administrasi Bisnis sebagai wadah sentral terintegritas dalam pengembangan kompetensi dan inovasi, serta menggerakkan seluruh potensi yang ada untuk mencapai peluang masa depan yang gemilang.
            </p>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section id="visi" className="relative z-10 px-4 sm:px-6 lg:px-8 pb-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="visi-card lg:col-span-7 bg-white rounded-[18px] border-[3px] border-[#111] shadow-[6px_6px_0px_#111] p-7 sm:p-8 flex flex-col">
            <div className="w-12 h-12 rounded-[12px] bg-[#4346D0] border-2 border-[#111] flex items-center justify-center text-white mb-4"><Target className="w-6 h-6" /></div>
            <span className="font-accent text-[10px] font-black tracking-[2px] uppercase text-[#4346D0]">Visi</span>
            <h3 className="font-unbounded text-[22px] sm:text-[26px] font-black leading-tight text-[#111] mt-1">Menjadikan HMPS Administrasi Bisnis sebagai wadah aspirasi dan pusat pengembangan kompetensi yang unggul dan berdampak nyata.</h3>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t-2 border-[#111]/10 pt-6 text-center">
              <div><p className="font-unbounded font-black text-2xl text-[#4346D0]">6+</p><p className="text-[11px] font-bold text-[#111]/60">Departemen</p></div>
              <div><p className="font-unbounded font-black text-2xl text-[#E89B4F]">15+</p><p className="text-[11px] font-bold text-[#111]/60">Program Kerja</p></div>
              <div><p className="font-unbounded font-black text-2xl text-[#2B2F9E]">500+</p><p className="text-[11px] font-bold text-[#111]/60">Mahasiswa</p></div>
            </div>
          </div>
          <div className="misi-wrap lg:col-span-5 flex flex-col gap-4">
            {[
              { n: "01", t: "Pelayanan Prima & Advokasi Transparan", d: "Menjamin pelayanan prima dan advokasi transparan untuk aspirasi seluruh mahasiswa.", c: "#4346D0" },
              { n: "02", t: "Sentra Kolaborasi & Kreativitas", d: "Mewujudkan sentra kolaborasi dan kreativitas mahasiswa.", c: "#9B8FE8" },
              { n: "03", t: "Siklus Organisasi Profesional", d: "Mewujudkan siklus organisasi yang profesional, transparan, dan berintegritas.", c: "#E89B4F" },
            ].map((m) => (
              <div key={m.n} className="misi-card bg-[#FFF8C7] rounded-[14px] border-[2.5px] border-[#111] shadow-[4px_4px_0px_#111] p-5 flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-[#111] text-white flex items-center justify-center text-xs font-black flex-shrink-0">{m.n}</span>
                <div>
                  <h4 className="font-unbounded text-[14px] font-black text-[#111] leading-tight">{m.t}</h4>
                  <p className="text-[12px] text-[#111]/60 leading-relaxed mt-1">{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex px-4 py-1.5 rounded-full bg-white border-2 border-[#111] shadow-[3px_3px_0px_#111] text-[11px] font-black tracking-widest uppercase text-[#111]">Values & Culture</span>
            <h2 className="font-unbounded text-[26px] sm:text-[32px] font-black text-white mt-4 tracking-tight" style={{ textShadow: "2px 2px 0 #111" }}>Organizational Values</h2>
            <p className="text-white/70 text-sm mt-2">Nilai utama dalam bentuk card interaktif</p>
          </div>
          <div className="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="value-card bg-white rounded-[16px] border-[2.5px] border-[#111] shadow-[4px_4px_0px_#111] p-5 flex flex-col hover:translate-y-[-2px] transition-transform">
                  <div className="w-10 h-10 rounded-[10px] border-2 border-[#111] flex items-center justify-center text-white mb-4" style={{ background: v.color }}><Icon className="w-5 h-5" /></div>
                  <h3 className="font-unbounded text-[15px] font-black text-[#111]">{v.title}</h3>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#111]/40 mb-2">{v.title}</p>
                  <p className="text-[12px] leading-relaxed text-[#111]/65 flex-1">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section id="culture" className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 scroll-mt-24">
        <div className="max-w-6xl mx-auto bg-[#FFF8C7] rounded-[18px] border-[3px] border-[#111] shadow-[6px_6px_0px_#111] p-6 sm:p-8">
          <h3 className="font-unbounded text-[20px] sm:text-[22px] font-black text-[#111] text-center">Organizational Culture</h3>
          <p className="text-center text-[12px] text-[#111]/60 mt-1">Budaya yang hidup setiap hari</p>
          <div className="culture-grid mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cultures.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="culture-card bg-white rounded-[12px] border-2 border-[#111] p-4 flex gap-3 items-start hover:shadow-[3px_3px_0px_#111] transition-shadow">
                  <span className="w-9 h-9 rounded-full bg-[#4346D0] border-2 border-[#111] flex items-center justify-center text-white flex-shrink-0"><Icon className="w-4 h-4" /></span>
                  <div>
                    <h4 className="font-unbounded text-[13px] font-black text-[#111] leading-tight">{c.title}</h4>
                    <p className="text-[11px] text-[#111]/60 leading-relaxed mt-1">{c.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FooterTapedDesign />
    </main>
  );
}
