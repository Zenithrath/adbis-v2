import { cn } from "@/lib/utils";
import Link from "next/link";
import { Mail } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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
    <footer className={cn("relative bg-[#3E43C7] overflow-hidden", className)}>
      <div className="bg-grid-lines" />
      <div className="pink-glow" />
      <div className="pixel-spot-overlay" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 sm:py-14">
        {/* Main card — white with 3D border like PERIODE badge */}
        <div className="relative bg-white rounded-[24px] border-[3px] border-[#111] shadow-[6px_6px_0px_#111] px-6 sm:px-10 py-10 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          <div className="flex flex-col items-start gap-3 max-w-md">
            <Link href="/" className="flex items-center gap-2.5 text-xl font-unbounded font-black tracking-tight text-[#111] hover:opacity-80 transition-opacity">
              <span className="w-8 h-8 rounded-full bg-[#3E43C7] text-white flex items-center justify-center text-[10px] font-extrabold">HM</span>
              <span>{brandName}</span>
            </Link>
            <p className="text-[#111]/60 font-body text-sm leading-relaxed">{tagline}</p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black bg-[#FFF8C7] text-[#111] border-2 border-[#111] shadow-[3px_3px_0px_#111]">
              ✦ Sentra Nawasena 2026
            </span>
          </div>

          <div className="flex flex-wrap md:flex-row gap-8 md:gap-14 items-start w-full md:w-auto">
            <div className="flex flex-col gap-3 min-w-[130px]">
              <h4 className="uppercase font-unbounded text-xs tracking-wider text-[#111]/40 font-black">Jelajahi</h4>
              <div className="flex flex-col gap-2.5 text-sm items-start">
                <a className="text-[#111]/60 hover:text-[#3E43C7] font-bold transition-colors" href="#home">Beranda</a>
                <a className="text-[#111]/60 hover:text-[#3E43C7] font-bold transition-colors" href="#proker">Program Kerja</a>
                <a className="text-[#111]/60 hover:text-[#3E43C7] font-bold transition-colors" href="#tentang">Tentang Kami</a>
              </div>
            </div>
            <div className="flex flex-col gap-3 min-w-[140px]">
              <h4 className="uppercase font-unbounded text-xs tracking-wider text-[#111]/40 font-black">Program Kerja</h4>
              <div className="flex flex-col gap-2.5 text-sm items-start">
                <a className="text-[#111]/60 hover:text-[#3E43C7] font-bold transition-colors" href="#proker">Invest Adbis</a>
                <a className="text-[#111]/60 hover:text-[#3E43C7] font-bold transition-colors" href="#proker">Bina Masyarakat</a>
                <a className="text-[#111]/60 hover:text-[#3E43C7] font-bold transition-colors" href="#proker">Market Day</a>
                <a className="text-[#111]/60 hover:text-[#3E43C7] font-bold transition-colors" href="#proker">Sencrea</a>
              </div>
            </div>
            <div className="flex flex-col gap-3 min-w-[130px]">
              <h4 className="uppercase font-unbounded text-xs tracking-wider text-[#111]/40 font-black">Hubungi Kami</h4>
              <div className="flex flex-col gap-2.5 text-sm items-start">
                <a className="text-[#111]/60 hover:text-[#3E43C7] font-bold inline-flex items-center gap-1.5" href="mailto:hmps.adbis@univ.ac.id"><Mail className="w-3.5 h-3.5" /> Email Resmi</a>
                <a className="text-[#111]/60 hover:text-[#3E43C7] font-bold inline-flex items-center gap-1.5" href="https://instagram.com" target="_blank" rel="noreferrer"><InstagramIcon className="w-3.5 h-3.5" /> Instagram</a>
                <a className="text-[#111]/60 hover:text-[#3E43C7] font-bold inline-flex items-center gap-1.5" href="https://linkedin.com" target="_blank" rel="noreferrer"><LinkedInIcon className="w-3.5 h-3.5 fill-current" /> LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs sm:text-sm text-white/80 font-body px-1">
          <p>© {currentYear} HMPS Administrasi Bisnis — Sentra Nawasena.</p>
          <div className="flex gap-3 items-center">
            <a href="https://instagram.com" target="_blank" rel="nofollow" className="w-8 h-8 rounded-full bg-white text-[#111] flex items-center justify-center hover:bg-[#FFF8C7] transition-colors border-2 border-[#111] shadow-[2px_2px_0px_#111]">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="nofollow" className="w-8 h-8 rounded-full bg-white text-[#111] flex items-center justify-center hover:bg-[#FFF8C7] transition-colors border-2 border-[#111] shadow-[2px_2px_0px_#111]">
              <LinkedInIcon className="w-4 h-4 fill-current" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="nofollow" className="w-8 h-8 rounded-full bg-white text-[#111] flex items-center justify-center hover:bg-[#FFF8C7] transition-colors border-2 border-[#111] shadow-[2px_2px_0px_#111]">
              <TwitterIcon className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Component = FooterTapedDesign;
