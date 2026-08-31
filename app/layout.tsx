import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HIMA ADBIS Vokasi UB — 2026",
  description: "HIMA ADBIS Vokasi UB — Kabinet Sentra Nawasena. Book opening hero.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${syne.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full antialiased overflow-x-clip bg-[#FFFBF0] text-[#14141F]">{children}</body>
    </html>
  );
}
