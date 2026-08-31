import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/mini-navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

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
  title: "HMPS Administrasi Bisnis — Kabinet Sentra Nawasena 2026",
  description:
    "HMPS Administrasi Bisnis Universitas Brawijaya — Kabinet Sentra Nawasena 2026. Merangkai Sinergi Wujudkan Aksi. Pusat pengembangan kompetensi dan inovasi mahasiswa.",
  keywords: ["HMPS", "Administrasi Bisnis", "UB", "Sentra Nawasena", "HMPS Adbis"],
  openGraph: {
    title: "HMPS Administrasi Bisnis — Kabinet Sentra Nawasena 2026",
    description: "Merangkai Sinergi Wujudkan Aksi",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${syne.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased overflow-x-clip">
        <LenisProvider />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
