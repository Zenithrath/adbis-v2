import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FooterTapedProps {
  className?: string;
  brandName?: string;
  tagline?: string;
}

export function FooterTapedDesign({
  className,
  brandName = "HMPS Administrasi Bisnis",
  tagline = "Kabinet Sentra Nawasena 2026 — Merangkai Sinergi, Mewujudkan Aksi Nyata untuk Seluruh Mahasiswa Administrasi Bisnis.",
}: FooterTapedProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative w-full bg-[#FFFBEB] text-[#1e293b] pt-16 md:pt-24 pb-10 overflow-hidden",
        className
      )}
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">
        {/* ── TOP FOOTER ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#1e293b]/15">
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3">
              <span className="w-4 h-4 bg-[#F9A8D4] rounded-sm rotate-45 inline-block" />
              <span className="text-lg md:text-xl font-black tracking-tight uppercase">
                {brandName}
              </span>
            </Link>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#F472B6]">
              Kabinet Sentra Nawasena 2026
            </p>
            <p className="text-xs text-[#1e293b]/50 italic">
              &ldquo;Merangkai sinergi wujudkan aksi&rdquo;
            </p>
            <p className="text-xs text-[#1e293b]/60 leading-relaxed max-w-sm pt-2">
              {tagline}
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs">
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[#1e293b]">
                | PROGRAM KERJA
              </h4>
              <ul className="space-y-2 text-[#1e293b]/60">
                <li>
                  <Link href="/#prokerja" className="hover:text-[#1e293b] transition-colors">
                    • Invest Adbis
                  </Link>
                </li>
                <li>
                  <Link href="/#prokerja" className="hover:text-[#1e293b] transition-colors">
                    • Bina Masyarakat
                  </Link>
                </li>
                <li>
                  <Link href="/#prokerja" className="hover:text-[#1e293b] transition-colors">
                    • Market Day
                  </Link>
                </li>
                <li>
                  <Link href="/#prokerja" className="hover:text-[#1e293b] transition-colors">
                    • Sencrea
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[#1e293b]">
                | JELAJAHI
              </h4>
              <ul className="space-y-2 text-[#1e293b]/60">
                <li>
                  <Link href="/" className="hover:text-[#1e293b] transition-colors">
                    • Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#1e293b] transition-colors">
                    • Tentang Kabinet
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-[#1e293b] transition-colors">
                    • Karier Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="/people" className="hover:text-[#1e293b] transition-colors">
                    • Pengurus & Proker
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#1e293b] transition-colors">
                    • Kontak & Adbis Hub
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[#1e293b]">
                | VISI & MISI
              </h4>
              <div className="space-y-2 text-[#1e293b]/60">
                <p className="font-semibold text-[#1e293b]/80">Visi:</p>
                <p className="text-[11px] leading-relaxed">
                  Pusat pengembangan kompetensi yang unggul dan berdampak nyata.
                </p>
                <p className="font-semibold text-[#1e293b]/80 pt-1">
                  Misi Ringkas:
                </p>
                <ul className="list-disc list-inside text-[11px] space-y-1 text-[#1e293b]/50">
                  <li>Pelayanan & advokasi transparan</li>
                  <li>Sentra kolaborasi & kreativitas</li>
                  <li>Siklus organisasi profesional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA BOX ── */}
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
              Wadah sentral terintegrasi untuk pengembangan kompetensi,
              inovasi, dan penggerak potensi mahasiswa mencapai peluang masa
              depan gemilang.
            </p>
          </div>
          <div>
            <Link
              href="/about"
              className="px-6 py-3 bg-[#F9A8D4] text-[#1e293b] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#F472B6] transition-all flex items-center space-x-2 group"
            >
              <span>Jelajahi Kabinet</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── BOTTOM ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#1e293b]/50 pt-2">
          <p>
            © {currentYear} HMPS Administrasi Bisnis — Kabinet Sentra
            Nawasena. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#1e293b] transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-[#1e293b] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-[#1e293b] transition-colors">
              YouTube
            </a>
            <a href="#" className="hover:text-[#1e293b] transition-colors">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Component = FooterTapedDesign;
