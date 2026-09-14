import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "./globals.css";
import "./editorial.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["200", "400", "700", "900"],
});

const angelina = localFont({
  src: "../public/fonts/angelina.ttf",
  variable: "--font-angelina",
  display: "swap",
});

const introRust = localFont({
  src: "../public/fonts/intro-rust-base.otf",
  variable: "--font-intro-rust",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HMPS Administrasi Bisnis — Sentra Nawasena 2026",
  description:
    "Himpunan Mahasiswa Program Studi Administrasi Bisnis, Kabinet Sentra Nawasena 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${angelina.variable} ${introRust.variable}`}
    >
      <body className="font-body antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
