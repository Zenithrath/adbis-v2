import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Syne } from "next/font/google";
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
      className={`${fraunces.variable} ${plusJakarta.variable} ${syne.variable}`}
    >
      <body className="font-body antialiased">
        {children}
        <div className="fixed right-0 top-1/2 z-50 flex h-40 w-12 -translate-y-1/2 flex-col items-center justify-center gap-3 rounded-l-2xl" style={{ background: "#faf3e8" }}>
          <img src="/images/hmps-logo.png" alt="HMPS" className="h-10 w-10 object-contain" />
          <img src="/images/sentra-logo.png" alt="Sentra" className="h-10 w-10 object-contain" />
        </div>
      </body>
    </html>
  );
}
