"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full text-[#FFFBEB] pt-20 pb-12 border-t border-[#FFFBEB]/10 overflow-hidden"
      id="contact"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        {/* Top footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#FFFBEB]/15">
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-[#F9A8D4] rounded-sm rotate-45" />
              <span className="text-xl font-black tracking-tight uppercase">
                HMPS ADMINISTRASI BISNIS
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F9A8D4]">
              Kabinet Sentra Nawasena 2026
            </p>
            <p className="text-xs text-[#FFFBEB]/60 italic">
              &ldquo;Merangkai sinergi wujudkan aksi&rdquo;
            </p>
            <p className="text-xs text-[#FFFBEB]/70 leading-relaxed max-w-sm pt-2">
              &ldquo;Sentra Nawasena&rdquo; adalah Pusat Penggerak Inti yang
              berorientasi pada Masa Depan Yang Cerah, dengan komitmen menjadikan
              HMPS Administrasi Bisnis sebagai wadah sentral terintegrasi dalam
              pengembangan kompetensi dan inovasi.
            </p>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs">
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[#FFFBEB]">
                | PROGRAM KERJA
              </h4>
              <ul className="space-y-2 text-[#FFFBEB]/70">
                {["Invest Adbis", "Bina Masyarakat", "Market Day", "Sencrea"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#prokerja"
                        className="hover:text-white transition-colors"
                      >
                        • {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[#FFFBEB]">
                | UPCOMING EVENTS
              </h4>
              <ul className="space-y-1.5 text-[#FFFBEB]/70">
                {[
                  "Invest Adbis",
                  "Sencrea",
                  "Bina Masyarakat",
                  "Study Visit",
                  "Adbis Skill Camp",
                  "Adbis Berbagi Kasih Sayang",
                  "Company Visit",
                  "Adbis Leader Connect",
                  "JABIZ",
                  "Adbis Sport Monthly",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      • {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[#FFFBEB]">
                | VISI & MISI
              </h4>
              <div className="space-y-2 text-[#FFFBEB]/70">
                <p className="font-semibold text-[#FFFBEB]">Visi:</p>
                <p className="text-[11px] leading-relaxed">
                  Pusat pengembangan kompetensi yang unggul dan berdampak nyata.
                </p>
                <p className="font-semibold text-[#FFFBEB] pt-1">
                  Misi Ringkas:
                </p>
                <ul className="list-disc list-inside text-[11px] space-y-1 text-[#FFFBEB]/60">
                  <li>Pelayanan & advokasi transparan</li>
                  <li>Sentra kolaborasi & kreativitas</li>
                  <li>Siklus organisasi profesional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA box */}
        <div className="bg-[#1e293b] text-[#FFFBEB] rounded-2xl p-8 md:p-12 my-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#F9A8D4] uppercase block mb-1">
              SUARAKAN ASPIRASIMU
            </span>
            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight">
              MARI BERKOLABORASI DENGAN
              <br />
              HMPS ADMINISTRASI BISNIS
            </h3>
          </div>
          <div className="max-w-md">
            <p className="text-xs text-[#FFFBEB]/60 leading-relaxed">
              Wadah sentral terintegrasi untuk pengembangan kompetensi, inovasi,
              dan penggerak potensi mahasiswa mencapai peluang masa depan
              gemilang.
            </p>
          </div>
          <div>
            <Link
              href="/about"
              className="px-6 py-3 bg-[#F9A8D4] text-[#1e293b] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#F472B6] transition-all flex items-center space-x-2"
            >
              <span>Jelajahi Kabinet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#1e293b]/50 pt-4">
          <p>
            © 2026 HMPS Administrasi Bisnis Kabinet Senta Nawasena. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {["Instagram", "LinkedIn", "YouTube", "TikTok"].map((social) => (
              <Link
                key={social}
                href="#"
                className="hover:text-[#1e293b] transition-colors"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
