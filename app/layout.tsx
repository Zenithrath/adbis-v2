import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Syne, Unbounded } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
  weight: ["800", "900"],
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
      className={`${fraunces.variable} ${plusJakarta.variable} ${syne.variable} ${unbounded.variable}`}
    >
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
