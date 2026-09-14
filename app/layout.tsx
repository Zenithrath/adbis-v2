import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Kabinet Sentra Nawasena 2026`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "HMPS Adbis",
    "HMPS Administrasi Bisnis",
    "Himpunan Mahasiswa Administrasi Bisnis",
    "Administrasi Bisnis Vokasi UB",
    "Vokasi Universitas Brawijaya",
    "Sentra Nawasena",
    "Kabinet Sentra Nawasena",
    "HMPS Vokasi UB",
    "Open Recruitment HMPS Adbis",
    "Program kerja HMPS Adbis",
  ],
  authors: [{ name: "HMPS Administrasi Bisnis Vokasi UB" }],
  creator: "HMPS Administrasi Bisnis Vokasi UB",
  publisher: "HMPS Administrasi Bisnis Vokasi UB",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  themeColor: "#1A1B41",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Kabinet Sentra Nawasena 2026`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "HMPS Administrasi Bisnis Vokasi UB — Kabinet Sentra Nawasena",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Kabinet Sentra Nawasena 2026`,
    description: SITE_DESCRIPTION,
    images: ["/images/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HMPS Administrasi Bisnis Vokasi Universitas Brawijaya",
  alternateName: ["HMPS Adbis", "HMPS Adbis Vokasi UB", "Sentra Nawasena"],
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description: SITE_DESCRIPTION,
  email: "sentranawasena@gmail.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
