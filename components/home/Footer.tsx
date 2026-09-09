"use client";

import { Mail, Music } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Tentang Kami",
    links: [
      { label: "Struktur Organisasi", href: "/people" },
      { label: "Visi Misi", href: "/about" },
      { label: "Tentang Kabinet", href: "/about" },
      { label: "Galeri", href: "/#prokerja" },
      { label: "Kontak Kami", href: "/contact" },
    ],
  },
  {
    title: "Program Kerja",
    links: [
      { label: "Invest Adbis", href: "/#prokerja" },
      { label: "Bina Masyarakat", href: "/#prokerja" },
      { label: "Market Day", href: "/#prokerja" },
      { label: "Sencrea", href: "/#prokerja" },
    ],
  },
  {
    title: "Event",
    links: [
      { label: "Study Visit", href: "/career" },
      { label: "Company Visit", href: "/career" },
      { label: "Adbis Skill Camp", href: "/career" },
      { label: "JABIZ", href: "/career" },
      { label: "Adbis Sport Monthly", href: "/career" },
    ],
  },
  {
    title: "Layanan Publik",
    links: [
      { label: "Kirim Aspirasi", href: "/contact" },
      { label: "FAQ", href: "/#faq" },
      { label: "Media Partner", href: "/contact" },
      { label: "Kalender", href: "/career" },
      { label: "Kontak", href: "/contact" },
    ],
  },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.92 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "TikTok", href: "#", Icon: Music },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
  { label: "Email", href: "mailto:sentranawasena@gmail.com", Icon: Mail },
];

export default function Footer() {
  return (
    <footer
      className="cv-auto relative w-full overflow-hidden border-t border-white/10 bg-white/[0.05] backdrop-blur-2xl text-[#FFFBEB]"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[720px] max-w-[120vw] -translate-x-1/2 rounded-full bg-[#FF7AAC]/10 blur-[100px]"
      />
      <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <Reveal className="lg:col-span-4">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/hmps-logo.png"
                alt="Logo HMPS Administrasi Bisnis"
                width={64}
                height={64}
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
              <div>
                <p className="text-2xl md:text-[1.7rem] font-black tracking-tight leading-none">
                  HMPS Adbis
                </p>
                <p className="font-serif italic text-base md:text-lg text-[#FFA6C8] mt-1.5">
                  &ldquo;Merangkai Sinergi Wujudkan Aksi&rdquo;
                </p>
              </div>
            </div>

            <p className="text-sm text-[#FFFBEB]/70 leading-relaxed mt-6 max-w-xs">
              Jl. HS. Ronggo Waluyo, Puseurjaya,
              <br />
              Telukjambe Timur, Karawang
            </p>

            <div className="flex items-center gap-3 mt-6">
              {SOCIALS.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md flex items-center justify-center text-[#FFFBEB]/80 hover:bg-[#FF7AAC] hover:border-[#FF7AAC] hover:text-[#1A1B41] transition-all duration-300"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </Link>
              ))}
            </div>
          </div>
          </Reveal>

          {/* Link columns */}
          <Reveal className="lg:col-span-8" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-lg md:text-xl font-bold mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#FFFBEB]/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </Reveal>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 mt-14 pt-8 pb-2">
          <p className="text-center text-sm text-[#FFFBEB]/70">
            © 2026 HMPS Administrasi Bisnis — Kabinet Sentra Nawasena. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
