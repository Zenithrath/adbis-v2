import type { Metadata } from "next";
import { Anybody, Inter, Press_Start_2P } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const anybody = Anybody({
  subsets: ["latin"],
  variable: "--font-anybody",
  display: "swap",
  weight: ["800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
  weight: "400",
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
      className={`${anybody.variable} ${inter.variable} ${pressStart.variable}`}
    >
      <body className="font-body antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
