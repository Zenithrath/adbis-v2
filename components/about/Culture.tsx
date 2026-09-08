"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import {
  MessageCircle,
  Clock,
  HeartHandshake,
  Activity,
  RefreshCw,
  Smile,
} from "lucide-react";

const cultures = [
  {
    title: "Komunikasi Terbuka",
    desc: "Ruang aspirasi dua arah tanpa sekat.",
    icon: MessageCircle,
  },
  {
    title: "Ketepatan Waktu",
    desc: "Disiplin waktu sebagai bentuk profesionalisme.",
    icon: Clock,
  },
  {
    title: "Saling Mendukung",
    desc: "Gotong royong dan empati antar pengurus.",
    icon: HeartHandshake,
  },
  {
    title: "Proaktif",
    desc: "Inisiatif sebelum diminta, solusi sebelum masalah.",
    icon: Activity,
  },
  {
    title: "Evaluasi & Perbaikan",
    desc: "Refleksi rutin untuk tumbuh berkelanjutan.",
    icon: RefreshCw,
  },
  {
    title: "Profesional nan Humanis",
    desc: "Tegas pada target, hangat pada manusia.",
    icon: Smile,
  },
];

export default function Culture() {
  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-28">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-12 border-b border-[#1e293b]/10 pb-6">
            <div className="md:col-span-7">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/40 block mb-3">
                • (03) CARA KAMI BEKERJA
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                Budaya Organisasi
              </h2>
            </div>
            <p className="md:col-span-5 md:text-right text-xs text-[#1e293b]/55 leading-relaxed">
              Bukan sekadar slogan — enam budaya ini hidup dalam keseharian
              pengurus, dari rapat mingguan hingga acara terbesar kabinet.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {cultures.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl border border-[#1e293b]/15 p-6 transition-colors duration-300 hover:bg-[#F9A8D4]/20">
                  <div className="flex items-center justify-between mb-8">
                    <span className="w-10 h-10 rounded-full bg-[#1e293b] text-[#FFFBEB] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#F472B6]">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-2xl font-black text-[#1e293b]/10">
                      C-0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-black uppercase tracking-tight leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#1e293b]/55 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 bg-[#F9A8D4] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden relative">
            <span className="absolute -right-6 -bottom-10 text-[10rem] md:text-[13rem] font-black text-[#1e293b]/5 select-none leading-none pointer-events-none">
              ✱
            </span>
            <div className="relative">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e293b]/60 block mb-2">
                LANJUTKAN JELAJAHI
              </span>
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight">
                Kenali Pengurus &amp; Program Kerja
                <br className="hidden md:block" /> Kabinet Lebih Dekat
              </h3>
            </div>
            <div className="relative flex flex-wrap gap-3">
              <Link
                href="/people"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e293b] text-[#FFFBEB] text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFFBEB] hover:text-[#1e293b] transition-all"
              >
                Struktur & Proker
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/career"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1e293b] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1e293b] hover:text-[#FFFBEB] transition-all"
              >
                Roadmap Karier
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
