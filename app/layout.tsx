import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["600", "700", "800"] });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-sans", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const serif = Fraunces({ variable: "--font-serif", subsets: ["latin"], weight: ["700", "800", "900"], display: "swap" });

export const metadata: Metadata = {
  title: "HMPS Administrasi Bisnis — Kabinet Sentra Nawasena 2026",
  description: "Merangkai sinergi wujudkan aksi — HIMA ADBIS Vokasi UB. Storyboard scroll experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${syne.variable} ${jakarta.variable} ${serif.variable} h-full`}>
      <body className="min-h-full antialiased overflow-x-clip bg-[#FAF3E8] text-[#2B2140]">{children}</body>
    </html>
  );
}
