# PRD — HMPS Administrasi Bisnis · Kabinet Sentra Nawasena 2026

> **Product Requirements Document** lengkap yang menjelaskan seluruh project `adbis` dari sisi tech stack, design system, styling, struktur direktori, komposisi komponen, fitur per halaman, animasi, dan konvensi pengembangan. Dokumen ini adalah *single source of truth* untuk memahami codebase.

---

## 1. Ringkasan Eksekutif

| Item | Detail |
|------|--------|
| **Nama Project** | `adbis` — Website resmi HMPS Administrasi Bisnis, Kabinet **Sentra Nawasena** periode 2026 |
| **Tagline Kabinet** | “Merangkai Sinergi, Wujudkan Aksi” — Pusat Penggerak Inti Berorientasi Masa Depan Cerah |
| **Tipe** | Company profile / organisational landing + directory (bukan e-commerce, bukan dashboard) |
| **Repo root** | `C:\laragon\www\adbis` |
| **Framework** | Next.js 16.3.3 (App Router) — `app/` directory |
| **Bahasa** | TypeScript 5 (strict), React 19.2.8 |
| **Status** | Development — `npm run dev` active, one-page + 4 sub-pages |

**Tujuan produk:** Memperkenalkan kabinet Sentra Nawasena, menampilkan visi-misi, struktur organisasi (7 departemen + BPI + pimpinan), 15+ program kerja, roadmap karier mahasiswa, dan hub kontak/layanan (rekrutmen, aspirasi) dalam satu pengalaman editorial yang premium, maintainable, dan cepat.

---

## 2. Identitas Brand & Pesan

### 2.1 Filosofi Nama
- **Sentra** = sentral / pusat pengerak inti
- **Nawasena** = masa depan yang cerah
- Gabungan = komitmen menjadikan HMPS sebagai wadah sentral terintegrasi untuk pengembangan kompetensi & inovasi.

### 2.2 Visi (`app/about/page.tsx:25-42`, `data/organization.ts:104-721`)
> Menjadikan HMPS Administrasi Bisnis sebagai wadah aspirasi dan pusat pengembangan kompetensi yang **unggul dan berdampak nyata**.

### 2.3 Misi (3 pilar)
1. **Pelayanan Prima & Advokasi Transparan** — advokasi hak akademik/finansial
2. **Sentra Kolaborasi & Kreativitas** — ruang kolaborasi lintas elemen
3. **Siklus Organisasi Profesional** — tata kelola transparan & berintegritas

### 2.4 Nilai Utama (5)
Profesional, Kolaboratif, Integritas, Adaptif, Berdampak — ditampilkan sebagai kartu di `app/about/page.tsx:25-61` dan `components/ValuesSection.tsx:6-43`.

### 2.5 Budaya Organisasi (6)
Komunikasi Terbuka, Ketepatan Waktu, Saling Mendukung, Proaktif, Evaluasi & Perbaikan, Profesional nan Humanis — `app/about/page.tsx:63-94`.

---

## 3. Tech Stack

### 3.1 Core

| Layer | Teknologi | Versi | File Konfigurasi |
|-------|-----------|-------|------------------|
| Framework | Next.js (App Router, Turbopack dev) | `^16.3.3` | `next.config.ts:1-7`, `next-env.d.ts:1-7` |
| UI Runtime | React + React DOM | `19.2.8` | `package.json:18-19` |
| Bahasa | TypeScript | `^5` | `tsconfig.json:1-34` |
| Styling | Tailwind CSS | `^4.3.3` | `postcss.config.mjs:1-7`, `app/globals.css:1-3` |
| PostCSS Adapter | `@tailwindcss/postcss` | `^4.3.3` | `postcss.config.mjs:3` |
| Animate Utility | `tw-animate-css` | `^1.4.0` | `package.json:21` |
| Lint | ESLint + `eslint-config-next` | `^9` / `16.3.3` | `eslint.config.mjs:1-18` |

### 3.2 Animation & Interaction

| Library | Versi | Peran | Contoh Penggunaan |
|---------|-------|-------|-------------------|
| `framer-motion` | `^13.1.1` | reveal, modal, accordion, counter | `components/ui/reveal.tsx:1-47`, `app/people/page.tsx:4-712` |
| `gsap` + `ScrollTrigger` | `^3.15.0` | pinned storytelling timeline | `hooks/usePinnedStorytelling.ts:1-65` |
| `lenis` | `^1.3.26` | smooth scroll | `app/hooks/useLenis.ts:1-30` |

### 3.3 Utilities

| Library | Versi | Peran |
|---------|-------|-------|
| `clsx` | `^2.1.1` | conditional class composition |
| `tailwind-merge` | `^3.6.0` | merge Tailwind class conflict |
| `lucide-react` | `^1.39.0` | icon set (semua icon di project dari sini) |
| `lib/utils.ts:1-6` | — | helper `cn(...inputs)` = `twMerge(clsx(...))` |

### 3.4 Build & Tooling

- **Compiler:** `tsconfig.json:3-21` → `target ES2017`, `jsx react-jsx`, `moduleResolution bundler`, path alias `@/* → ./*`
- **PostCSS:** hanya `@tailwindcss/postcss` — tidak ada autoprefixer manual (handled Tailwind v4)
- **ESLint:** `eslint.config.mjs:5-16` extends `core-web-vitals` + `typescript`, ignore `.next/**, out/**, build/**`
- **Next Config:** `next.config.ts:3-5` currently kosong (no image domains, no redirects)
- **Package manager:** npm (`package-lock.json` present)

---

## 4. Struktur Direktori & Routing

### 4.1 Tree (relevan, tanpa .next/node_modules)

```
adbis/
├── app/                          # App Router (Next.js 16)
│   ├── layout.tsx                # RootLayout — font loading + Navbar
│   ├── page.tsx                  # "/" — homepage multi-section (608 baris)
│   ├── globals.css               # Tailwind theme tokens + base + components
│   ├── editorial.css             # Editorial helpers (stroke, grid, marquee)
│   ├── favicon.ico
│   ├── about/page.tsx            # "/about" — hero + visi/misi + nilai + budaya
│   ├── people/page.tsx           # "/people" — struktur org + dept detail + modal
│   ├── contact/page.tsx          # "/contact" — service index + kontak + CTA
│   ├── career/page.tsx           # "/career" — timeline 6 tahap roadap karier
│   └── hooks/
│       ├── useLenis.ts           # smooth scroll integration
│       └── useScrollReveal.ts    # IntersectionObserver reveal
├── components/
│   ├── Navbar.tsx                # Fixed 60px nav + stagger + theme toggle
│   ├── AboutSection.tsx          # (legacy/alternatif) visi-misi bento section
│   ├── ValuesSection.tsx         # (legacy) 4 pilar nilai
│   ├── StructureSection.tsx      # (legacy) 6 divisi selector
│   ├── ContactSection.tsx        # (legacy) aspirasi form + kontak
│   ├── sections/
│   │   ├── HeroSection.tsx       # pinned hero SENTRA NAWASENA
│   │   ├── TaglineSection.tsx    # "Merangkai Sinergi"
│   │   └── HalfPanelSection.tsx  # "Wujudkan Aksi"
│   ├── proker/
│   │   ├── ProkerSection.tsx     # desktop pinned proker (300px sidebar + BentoAll)
│   │   └── ProkerMobile.tsx      # mobile vertical list (4 bento menus)
│   ├── bento/Bento.tsx           # 4 SVG bento menus + BentoAll composite
│   └── ui/
│       ├── reveal.tsx            # Reveal wrapper (framer-motion)
│       ├── footer-taped-design.tsx # Footer global (CTA + bottom links)
│       ├── sterling-gate-...     # (unused/experimental)
│       └── adaptive-notch-...    # (unused/experimental)
├── data/
│   ├── programs.ts               # 4 Program Kerja ringkas (untuk bento/home)
│   └── organization.ts           # 7 departemen + BPI + executive board (721 baris)
├── hooks/
│   └── usePinnedStorytelling.ts  # GSAP pinned storytelling (8x viewport)
├── lib/utils.ts                  # cn() helper
├── public/
│   ├── images/                   # sentra-logo, hmps-logo, vector, etc
│   ├── *.svg                     # next, vercel, window, globe, file
│   └── ...
├── general/PRD.md                # ← dokumen ini
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
├── AGENTS.md                     # Next.js agent rules (generated by next dev)
└── package.json
```

### 4.2 Routing Table

| Route | File | Export | Deskripsi |
|-------|------|--------|-----------|
| `/` | `app/page.tsx:273` | `default Home` | Hero + team image + about + proker (4) + footer |
| `/about` | `app/about/page.tsx:172` | `default AboutPage` | Editorial hero + marquee + visi/misi + nilai + budaya |
| `/people` | `app/people/page.tsx:64` | `default PeoplePage` | Hero + marquee + struktur org + 7 dept detail (modal) |
| `/contact` | `app/contact/page.tsx:99` | `default ContactPage` | Hero + index layanan + kontak resmi + CTA |
| `/career` | `app/career/page.tsx:54` | `default CareerPage` | Hero + timeline 6 stage + CTA band |

> **Catatan:** Semua page kecuali `/` adalah `"use client"` karena mengandalkan `framer-motion`, state, atau hooks browser. `app/layout.tsx:33` adalah Server Component (tanpa `"use client"`).

---

## 5. Design System

### 5.1 Warna

#### Palet Utama (yang paling sering dipakai)

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `cream` / `FFFBEB` | `#FFFBEB` | background global (`globals.css:35`), hero about/people, card bg |
| `ink` / `slate-800` | `#1e293b` | teks utama, header dark panel, CTA dark, border |
| `pink` / `F9A8D4` | `#F9A8D4` | aksen utama (dot, line, hover, value card) |
| `pink-400` | `#F472B6` | hover CTA, link aktif, bullet marquee |
| `blue-light` | `#BFDBFE` | hero home bg, value section bg, card aksen |
| `purple` | `#6564CA` / `#4346D0` | departemen Perhubungan, display fallback |
| `purple-dark` | `#5655BD`, `#4847A8` | varian purple |
| `orange` | `#E89B4F` | BUMH, Misi tag |

#### Token Tailwind (`app/globals.css:6-21` @theme)

```css
--color-purple: #6564CA
--color-purple-dark: #5655BD
--color-purple-deeper: #4847A8
--color-cream: #FFF2B2
--color-cream-dark: #F5E6A0
--color-pink: #FC75A7
--color-pink-light: #f992b8
--color-white: #FFFFFF
--color-ink: #1A1B41
--color-primary: #6564CA
--color-dark: #1A1B41
```

#### Warna Per Departemen (`data/organization.ts:110-720`)

| Departemen | `color` | `badgeBg` |
|------------|---------|-----------|
| Perhubungan | `#4346D0` | `#C6C8FF` |
| Sosmas | `#FFA3B8` | `#FFF8C7` |
| Adkesma | `#9B8FE8` | `#FFF8C7` |
| BUMH | `#E89B4F` | `#FFF8C7` |
| Minat & Bakat | `#8E44AD` | `#C6C8FF` |
| PSDM | `#27AE60` | `#FFF8C7` |
| Medinfo | `#454ADE` | `#FFF8C7` |

Fungsi util `luminance()` + `onColor()` di `app/people/page.tsx:20-29` menentukan warna teks badge otomatis (gelap untuk bg terang, sebaliknya).

#### Warna Program (home inline)

`app/page.tsx:7-56` — 4 background combo: `bg-[#BFDBFE]`, `bg-[#F9A8D4]`, `bg-[#FFFBEB]`, `bg-[#1e293b] text-[#FFFBEB]` + `cardBg` dan `btnBorder/btnHover`.

### 5.2 Tipografi

| Font | Source | Variable | Weight | Peran |
|------|--------|----------|--------|-------|
| **Anybody** | `next/font/google` (`layout.tsx:6-11`) | `--font-anybody` | 800, 900 | Display / hero headline (`font-anybody`, fallback `font-family-display`) |
| **Inter** | `next/font/google` (`layout.tsx:13-18`) | `--font-inter` | 400, 500, 600, 700 | Body & sans (`font-body`, `font-inter`, `font-sans`) |
| **Press Start 2P** | `next/font/google` (`layout.tsx:20-25`) | `--font-pixel` | 400 | Pixel accent (`font-pixel`) |

**Skala:** Semua hero headline memakai `clamp()` agar fluid:
- Home: `text-[9.5vw]` (`app/page.tsx:334`)
- About: `text-[clamp(3.4rem,11vw,10.5rem)]` (`app/about/page.tsx:192`)
- People: `text-[clamp(2.8rem,9.5vw,9rem)]` (`app/people/page.tsx:120`)
- Contact: `text-[clamp(2.4rem,6.5vw,6.5rem)]` (`app/contact/page.tsx:129`)
- Career: `text-[clamp(3rem,9.5vw,9rem)]` (`app/career/page.tsx:72`)

**Utilitas tipografi** di `app/globals.css:46-63`:

```css
.font-anybody { font-family: "Anybody", sans-serif }
.font-pixel   { font-family: "Press Start 2P", cursive }
.font-body    { font-family: "Inter", sans-serif }
.font-inter   { font-family: "Inter", sans-serif }
```

### 5.3 Spacing & Layout Prinsip

- **Max container:** `max-w-[1400px] mx-auto px-6 md:px-16` — konsisten di `about`, `people`, `contact`, `career`. Home memakai `px-8 md:px-16`.
- **Grid utama:** `grid-cols-1 lg:grid-cols-12` dengan `gap-10` dan `col-span` untuk editorial asymmetry (hero: 7/4 split, visi: 5/7, dll).
- **Section padding vertikal:** `py-20 md:py-28` (standard), hero memakai `pt-8 md:pt-14 pb-16 md:pb-24`.
- **Border konsisten:** `border-[#1e293b]/10` atau `/15` untuk divider, `border-b` antar section.
- **Rounded:** `rounded-2xl` (16px) untuk card utama, `rounded-full` untuk pill/tag, `rounded-xl` untuk badge kecil.
- **Navbar height:** fixed `60px` — `app/page.tsx:280` hero pakai `min-h-[calc(100svh-60px)]`, spacer `<div class="h-[60px]">` di `Navbar.tsx:50`.

### 5.4 Visual Language — Editorial

Karakter design adalah **Editorial Brutalist-Chic** (inspirasi majalah + blueprint + retro-modern):

- **Blueprint grid:** `editorial-grid-bg` (`editorial.css:24-29`) — 44px grid lines `rgba(30,41,59,0.08)` dipakai di hero semua sub-page.
- **Home hero grid:** lebih kuat `40px 40px rgba(30,41,59,0.15)` dengan mask `linear-gradient(to bottom, black 0%, black 32%, transparent 52%)` (`app/page.tsx:285-289`).
- **Outlined text:** `.text-stroke-ink` (`editorial.css:7-10`) = 2px stroke `#1e293b` transparent fill — dipakai untuk baris kedua hero (“Nawasena”, “& Proker”, dll).
- **Marquee ticker:** `.marquee-track` (`editorial.css:32-40`) animasi `marquee 30s linear infinite` (24s di contact), pause on hover, mask fade 8%—92%. Dipakai di `about:252`, `people:170`, `contact:340`.
- **Bento SVG:** clipPath organik dengan `preserveAspectRatio xMidYMid slice` — 4 layout berbeda (BentoMenu1-4) + composite `BentoAll` (9 clipPath) di `components/bento/Bento.tsx:1-130` dan inline di `app/page.tsx:65-230`.
- **Reveal:** `framer-motion` fade+rise `y 28px`, durasi `0.85s`, ease `[0.22,1,0.36,1]` — `components/ui/reveal.tsx:19-42`.
- **Card hover:** `hover:-translate-y-1.5 shadow-[0_16px_40px_-20px_rgba(30,41,59,0.35)]` — konsisten di people/about/contact.

---

## 6. Arsitektur Styling

### 6.1 File Styling

| File | Peran | Isi Kunci |
|------|-------|-----------|
| `app/globals.css` | Base + Theme + Utilities + Components | `@import "tailwindcss"`, `@theme` tokens, `@layer base` (smooth scroll, body bg, selection), pixel helpers, nav, lenis, scrollbar hidden |
| `app/editorial.css` | Editorial helpers | `.text-stroke-*`, `.editorial-grid-bg`, `.marquee-*` |
| `tailwind.config` | — | **Tidak ada file terpisah** — Tailwind v4 menggunakan `@theme` di CSS |

### 6.2 Utility Classes Kustom (`globals.css:65-112`)

```css
.pixelated { image-rendering: pixelated }
.animate-blink { animation: blink 0.8s infinite }
.btn-3d-retro { border 3px #FFF2B2 + shadow 4px pink + hover translate }
.card-3d-cream { bg #FFF2B2 + border 4px purple + shadow 8px pink }
.glass-card { bg rgba(255,242,178,0.1) + blur 12px + hover lift }
.gradient-text / .gradient-text-pink { bg-clip text gradients }
```

### 6.3 Navigation Styles (`globals.css:139-358`)

Sistem nav fullscreen overlay yang tidak aktif di snapshot saat ini (masih ada styling untuk `.fullscreen-menu-container`, `.nav-overlay-wrapper[data-nav="open"]`, `.menu-content 560px`, backdrop layers, ambient shapes, nav-link hover slide `translateX(8px)` & `bg rgba(252,117,167,0.2)`). Navbar aktif saat ini adalah versi sederhana `Navbar.tsx:21-188` (fixed 60px, stagger hover, theme toggle) — bukan fullscreen menu. CSS legacy tetap dipertahankan untuk iterasi selanjutnya.

### 6.4 Scroll & Lenis (`globals.css:129-138`)

```css
html.lenis, html.lenis body { height: auto }
.lenis.lenis-smooth { scroll-behavior: auto }
.lenis.lenis-stopped { overflow: hidden }
::-webkit-scrollbar { display: none }
html { scrollbar-width: none }
```

---

## 7. Komposisi Komponen

### 7.1 `app/layout.tsx:33` — RootLayout

- **Type:** Server Component
- **Fonts:** `Anybody(800,900)`, `Inter(400-700)`, `Press_Start_2P(400)` via `next/font/google` dengan `variable` + `display swap`. Diterapkan ke `<html className={...anybody.variable...}>`.
- **Metadata:** `title: "HMPS Administrasi Bisnis — Sentra Nawasena 2026"`, `description: "Himpunan Mahasiswa Program Studi Administra..."`.
- **Body:** `className="font-body antialiased"` + `<Navbar />` di atas `{children}`.
- **Lang:** `id`.

### 7.2 `components/Navbar.tsx:21` — Navbar

| Aspek | Detail |
|-------|--------|
| State | `isOpen: boolean`, `isDark: boolean` |
| Nav items | 4: Home `/`, About `/about`, Program Kerja `/#prokerja`, Kontak `/contact` (`Navbar.tsx:14-19`) |
| Layout desktop | Logo kiri, 4 links sebagai grid `md:grid-flow-col md:auto-cols-fr`, stagger hover effect (LERP sin) |
| Layout mobile | Hamburger `Plus` rotate 0→45°, drawer `fixed top-[60px] h-[calc(100vh-60px)]` slide `-translate-y-[calc(100%+60px)]` → `0` |
| Logo | SVG unik (2 lingkaran mata + blink eyes + mouth rect + cap) `viewBox 0 0 969 955`, `w-8`, `text-current` |
| Theme toggle | Floating button `fixed bottom-4 right-4 w-12 h-12 rounded-xl` Moon/Sun, pakai `document.startViewTransition` jika ada, else `classList.toggle("dark")` |
| Aksesibilitas | `aria-expanded`, `aria-label`, `aria-pressed` |
| Stagger CSS | `Navbar.tsx:124-185` — 4-level lerp (`sin 30deg`, `sin 15deg`, `0`) dengan `transform: translateY(calc(var(--lerp)*80%))` |

### 7.3 `components/ui/reveal.tsx:25` — Reveal

Props: `children, className, delay=0, y=28, x=0, duration=0.85, once=true`. Menggunakan `motion.div` + `useReducedMotion()` (skip offset jika reduce). Viewport `margin "0px 0px -8% 0px"`, ease `[0.22,1,0.36,1]`.

### 7.4 `components/ui/footer-taped-design.tsx:11` — FooterTapedDesign

- Props: `brandName`, `tagline`, `className`
- Struktur 3 blok: **Top footer** (4+8 grid: brand + 3 kolom links), **CTA box** (dark `bg-[#1e293b]` rounded-2xl dengan “SUARAKAN ASPIRASIMU”), **Bottom** (copyright dynamic `new Date().getFullYear()` + social links).
- Dipakai sebagai penutup di `about:507`, `people:667`, `contact:388`, `career:271`. Home punya footer inline sendiri (`app/page.tsx:452-604`).

### 7.5 `components/bento/Bento.tsx:3` — Bento SVGs

- `BentoMenu1` — 3 clipPath (right 2942×2423, left-top 1544×1212, left-bottom 1544×942), `viewBox 0 0 4536 2423`
- `BentoMenu2` — 2 clipPath (left 2199, right 2299), `viewBox 0 0 4536 2557`
- `BentoMenu3` — 1 clipPath full, `viewBox 0 0 4536 2554`
- `BentoMenu4` — 3 clipPath (left 2941, right-top 1547×1008, right-bottom 1547×1212), `viewBox 0 0 4536 2455`
- `BentoAll` — composite 9 clipPath, `viewBox 0 0 4544 9544` — dipakai di desktop proker pinned.
- Setiap `<g>` berisi `<rect fill>` + `<image href unsplash>` dengan `preserveAspectRatio xMidYMid slice`.

> Versi duplicate inline ada di `app/page.tsx:65-230` dengan id `m1-right` dst dan `all-1` dst. File `components/bento/Bento.tsx` memakai id `clip-path-1` dst — hindari collision jika kedua file render bersamaan.

### 7.6 `components/proker/ProkerSection.tsx:21` & `ProkerMobile.tsx:6`

| Komponen | Kondisi | Deskripsi |
|----------|---------|-----------|
| `ProkerSection` | `hidden lg:flex` (desktop) | Absolute inset, `bg-[#FFF8C7]`, gap-4 p-4. Kiri: 300px sidebar list program (chevron + badge color + accordion textPath arched “Program Kerja” + badge number + title + desc, maxHeight 320→0 anim). Kanan: `flex-1 overflow-hidden` + `BentoAll` dalam `h-[400vh]` untuk GSAP scrub. Props `contentRef` untuk pin. |
| `ProkerMobile` | `lg:hidden` | `bg-[#4346D0]`, px-4 py-8 gap-6. Card per program: `rounded-[14px] border-[2.5px] #111 shadow-[4px_4px_0px_#111]`, image `aspect-[16/9]` border-b + `BentoMenu{1..4}`, body center arch + badge + title `font-unbounded 18px` + desc. |

### 7.7 `components/sections/` (Storytelling layer)

- `HeroSection.tsx:3` — `absolute inset-0 z-10 h-screen hero-solid-blue`, “KABINET ✦✦”, “SENTRA” pink `#FFA3B8`, “NAWASENA” blue `#C6C8FF`, pill “PERIODE 2026” cream border 3px shadow 5px, “N” bubble bottom-left.
- `TaglineSection.tsx:5` — `absolute inset-0 z-20 bg-[#FFF8C7]`, kanan 50% center “Me Rangkai Sinergi” (`#111` + `#4346D0`).
- `HalfPanelSection.tsx:5` — `absolute left-0 top-0 z-30 w-full sm:w-1/2 bg-[#2B2F9E]` + border-r 4px + shadow, center “Wujud Kan Aksi” (`#FFF8C7` + `#FFA3B8`).

### 7.8 Legacy Sections (tidak dipakai di route aktif, tapi ada di repo)

| File | Isi | Status |
|------|-----|--------|
| `AboutSection.tsx:6` | Visi bento 7/5 grid, motion, 6+/15+/500+ stats | Tidak di-import di page aktif |
| `ValuesSection.tsx:45` | 4 pilar nilai (Sinergis, Inovatif, Inklusif, Berdampak) | Tidak di-import di page aktif |
| `StructureSection.tsx:126` | 6 divisi pill selector + detail card + leader quote | Tidak di-import — diganti `people/page.tsx` 7 departemen |
| `ContactSection.tsx:7` | Form aspirasi (name, NIM, category, message) + success state | Tidak di-import — diganti `/contact` hub |

---

## 8. Halaman & Fitur Detail

### 8.1 Homepage — `app/page.tsx:273`

**File 608 baris, client component, state: `activeProgram` + `useTyping`.**

**Sections berurutan:**

1. **Hero — `section bg-[#BFDBFE] min-h-[calc(100svh-60px)]`** (`app/page.tsx:280-337`)
   - Grid backdrop mask (lines 285-289)
   - Top strip 1/3 height border-b, icons kanan: star sparkle ✦ + pink diamond + dashed circle
   - Middle: star ✱ + divider + “KABINET SENTRA NAWASENA 2026” + italic tagline + pill `JELAJAHI KABINET → /about`
   - Bottom: meta “HMPS ADMINISTRASI BISNIS | SENTRA NAWASENA | PERIODE-2026” 9px + big title `Sentra nawasena` 9.5vw black 900
   - Hook `useTyping()` (`app/page.tsx:233-270`) untuk typing effect `WORDS` (“WELCOME TO OUR WEBSITE” → “HMPS ADBIS” → “KABINET SENTRA NAWASENA”) — atualmente **tidak di-render** di JSX (hanya dipakai jika dihubungkan), saat ini hero statis.

2. **Team Image — `section bg-[#BFDBFE] min-h-screen pt-12 h-screen`** (`app/page.tsx:340-344`)
   - Full-bleed image `https://images.unsplash.com/photo-1522071820081-009f0129c71c`

3. **About — `section bg-[#FFFBEB] py-20 px-8 md:px-16` id=about** (`app/page.tsx:347-413`)
   - Grid 12: kiri `2026` 6xl + caps subtitle, kanan “• TENTANG KABINET” + headline “PUSAT PENGGERAK...” + desc + link `LIHAT PROGRAM KERJA → #prokerja`
   - Visi/Misi 4 cards grid `sm:grid-cols-2 md:grid-cols-4` border-t: VISI pink + 3 MISI

4. **Program Kerja — `section bg-[#FFFBEB] py-20` id=prokerja** (`app/page.tsx:416-448`)
   - Header “PROGRAM KERJA (4)” 6xl–8xl
   - 4 program cards `programs[i]` flex 7/5 grid, `bgColor`, `cardBg`, `textColor`, `btnBorder/btnHover`, items `+ ...`, link `SELENGKAPNYA`

5. **Footer — `footer bg-[#FFFBEB] pt-20 pb-12 border-t`** (`app/page.tsx:452-604`)
   - 3 kolom: PROGRAM KERJA, UPCOMING EVENTS (10 items), VISI & MISI ringkas
   - CTA dark box “SUARAKAN ASPIRASIMU” + “MARI BERKOLABORASI” + `Jelajahi Kabinet → /about`
   - Bottom: © + Instagram/LinkedIn/YouTube/TikTok

**Inline SVG Bentos:** 5 fungsi (`BentoMenu1-4`, `BentoAll`) dengan `clipPath` organik, unsplash placeholders.

---

### 8.2 About — `app/about/page.tsx:172`

| Section | Deskripsi | File ref |
|---------|-----------|----------|
| Hero editorial | Grid bg, meta bar 9px pill ✱, headline “Sentra Nawasena” clamp 11vw baris 2 stroke, intro card `border rounded-2xl bg-white/70` + 2 CTAs `#visi` & `#values` | `about/page.tsx:176-250` |
| Marquee dark | `marquee-wrap marquee-mask bg-[#1e293b]` 6 items (Visi, Misi, Nilai...) | `about/page.tsx:252-258` |
| Visi & Misi | Kiri sticky dark panel `bg-[#1e293b] min-h-[420px]` Visi + 3 stats `StatCounter` (6/15/500) animate onView 1.8s. Kanan 3 misi rows hover `bg-white/70` + number pink on hover + arrow | `about/page.tsx:260-363` |
| Nilai Utama | `bg-[#BFDBFE]/40` 5 cards `sm:2 md:3 lg:5` group hover lift + icon 11×11 colored bg + number + accent line w-8→full | `about/page.tsx:365-424` |
| Budaya Organisasi | 6 cards `sm:2 lg:3` `hover:bg-[#F9A8D4]/20`, icon dark→pink on hover, ghost number `C-01` 2xl `/10` | `about/page.tsx:426-470` |
| CTA “Kenali” | `bg-[#F9A8D4]` ghost ✱ 13rem `/5` + 2 links `/people` & `/career` | `about/page.tsx:472-503` |
| Footer | `FooterTapedDesign` | `about/page.tsx:507` |

**Helper `StatCounter` (`about/page.tsx:141-170`):** `useRef span` + `useInView once margin -20%` → `animate(0,to, {duration 1.8, ease [0.22,1,0.36,1]})` update `textContent = round(v)+suffix`.

---

### 8.3 People (Struktur & Proker) — `app/people/page.tsx:64`

**State:** `selectedMember: Member | null`, `activeDeptId: string`, `expandedProkerId: string | null`.

**Sections:**

| Section | Deskripsi | File ref |
|---------|-----------|----------|
| Hero editorial | “Struktur & Proker” clamp 9rem stroke, badge “7 DEPARTEMEN · 15+ PROKER” | `people/page.tsx:104-167` |
| Marquee dark | Department shortNames ×2 (14 items total) | `people/page.tsx:170-184` |
| Struktur Organisasi | `LevelTag` pimpinan → 2 leadership cards (Raden Arya, Siti Nur — 20×20 img + RolePill + arrow). Connector (line + diamond). BPI 2 cards (Aulia, Fadhil 14×14). Connector. 7 departemen grid 1→2→3 cards (shortName color badge + desc line-clamp-2 + Kadep name + Chevron) | `people/page.tsx:187-333` |
| 7 Departemen Detail | Selector pills (active dark, inactive white border hover). `AnimatePresence mode=wait` panel `motion.div 0.45s ease [0.22,1,0.36,1]` y18→0. Header 7/5 grid tagline + jobs pills. Team 1→2→3 cards (head/wakadep/staff). Proker accordion per item: number + “PROGRAM KERJA” + name 2xl + chevron rotate 45 when open + `AnimatePresence height 0→auto 0.4s` detail (desc + objectives Check list + target) | `people/page.tsx:336-572` |
| Member Modal | Fullscreen `fixed inset-0 z-[80]` backdrop `bg-[#1e293b]/45 blur` + card `max-w-lg max-h-[85vh] rounded-3xl bg-[#FFFBEB]` image 24-28, RolePill, bio white card, tasks list dot pink | `people/page.tsx:576-665` |

**Helpers:** `luminance()`/`onColor()` (`people/page.tsx:20-29`), `RolePill` (`people/page.tsx:37-57`), `LevelTag` (`people/page.tsx:674-698`), `Connector` (`people/page.tsx:700-713`), `EASE` constant.

---

### 8.4 Contact (Adbis Hub) — `app/contact/page.tsx:99`

| Section | Deskripsi | File ref |
|---------|-----------|----------|
| Hero editorial | “Pusat Layanan & Informasi” clamp 6.5rem, 3 pill (Open Recruitment, Aspirasi, Karier) | `contact/page.tsx:115-171` |
| Index Layanan | 3 `hubLinks` (01 Registration GForm, 02 Aspirasi GForm, 03 Career `/career`), grid 12 per row number 5xl + icon 12×12 colored bg + title 3xl pink on hover + tag pill + “Buka Layanan” arrow circle | `contact/page.tsx:174-251` |
| Kontak Resmi | `bg-[#F9A8D4]/25` 3 cards (Instagram `@hmpsabisbrawijaya` pink, TikTok `@hmpsabisub` dark, Email `sentranawasena@gmail.com` blue copyable). Card hover lift. `copyEmail()` `navigator.clipboard.writeText` + `copied` state 2.2s feedback “Tersalin!” | `contact/page.tsx:254-337` |
| Marquee | handles: 2 IG/TikTok + email + brand + kabinet | `contact/page.tsx:340-345` |
| CTA | “Punya Ide atau Aspirasi?” stroke + 2 buttons (Sampaikan Aspirasi dark pink hover, Daftar Open Recruitment border) | `contact/page.tsx:348-386` |

---

### 8.5 Career Roadmap — `app/career/page.tsx:54`

| Section | Deskripsi | File ref |
|---------|-----------|----------|
| Hero editorial | “Career Roadmap” clamp 9rem stroke, “6 TAHAP · SEMESTER 1 HINGGA LULUS” | `career/page.tsx:58-119` |
| Timeline | `stages` 6 items: S1-2 Know Yourself (Compass), S3 Build Your Skills (Sparkles), S4 Prepare Internship (GraduationCap), S5 Internship Experience (Compass), S6 Career & Final Project (Rocket), Graduation Ready (GraduationCap). Spine center desktop `w-px bg #1e293b/15`, left mobile `left-[13px]`. Node dot 7×7 3 tones (`#1e293b`, `#F9A8D4`, `#BFDBFE`) rotate. Ghost number 9-12rem `/[0.04]`. Alternating left/right desktop (`left even` → `md:col-start-1 text-right`, odd → `col-start-2`). Connector arrow rotate-90 center between items | `career/page.tsx:121-234` |
| CTA Band | `bg-[#BFDBFE] rounded-2xl` “Gapai Masa Depanmu Bersama HMPS Adbis” + 2 links `/people` & `/contact` | `career/page.tsx:237-268` |

---

## 9. Data Layer

### 9.1 `data/programs.ts:1-38`

```ts
type Program = { num:number; name:string; title:string; desc:string; badgeColor:string }
export const programs: Program[4] // Invest Adbis #E8C4B8, Bina Masyarakat #9B8FE8, Market Day #E89B4F, Sencrea #8B6F5E
```
Dipakai oleh `components/bento` + `proker/*` storytelling layer (legacy). Homepage `app/page.tsx` menduplikasi 4 program dengan skema warna berbeda (cream/pink/blue/dark).

### 9.2 `data/organization.ts:1-721`

```ts
interface Member { id,name,role,departmentId,departmentName,major,image,bio,tasks[],isLeadership? }
interface WorkProgram { id,name,category?,desc,objectives[],target,documentation[] }
interface Department { id,name,shortName,tagline,color,badgeBg,desc,jobDescription[],head,coHead,staff[],programs[] }
export const EXECUTIVE_BOARD: Member[4] // kahim, wakahim (isLeadership), sekretaris, bendahara
export const DEPARTMENTS: Department[7] // perhubungan, sosmas, adkesma, bumh, mikad, psdm, medinfo
```

- Total **7 departemen**, **15+ proker** (per dept 2–6), **4 pimpinan/BPI**, **~10 staff** (contoh data dummy Unsplash).
- Images semuanya `https://images.unsplash.com/...` placeholder (belum diganti foto asli kabinet).
- Departemen name formal uppercase (e.g. `"DEPARTEMEN PERHUBUNGAN"`) — di-render lowercase di UI (`toLowerCase()` di people page).

---

## 10. Animasi & Interaksi

### 10.1 Framer Motion — Reveal
- `Reveal` (`ui/reveal.tsx:19-42`) dipakai: hero, section header, cards (stagger 0.07–0.12), CTA. Respect `prefers-reduced-motion`.

### 10.2 GSAP Pinned Storytelling — `hooks/usePinnedStorytelling.ts:1-65`

**Hanya untuk halaman one-page storytelling legacy (saat ini tidak di-mount di route aktif — disiapkan untuk integrasi homepage revamp).**

```ts
gsap.registerPlugin(ScrollTrigger)
timeline scrub 1, pin wrapper, end +=800%
- hero-svg-sentra: x -100→0 0.8s power3
- hero-svg-nawasena: x 100→0 0.8s
- prokerLayer yPercent 100 (hidden)
- tagline-word opacity 0 x -50
- half-word opacity 0 x -50
pinnedTl:
  taglineRef x -100%→0% 4s none + tagline-word stagger 0.8 3s
  delay 4s
  halfPanelRef x -100%→0% 4s + half-word stagger 0.8 3s
  delay 4s
  prokerLayer yPercent 100→0 5s power2.inOut
  delay 1s
  prokerContent y 0→-(scrollHeight - parentHeight) 16s none (scrub proker list)
  delay 2s
  onUpdate progress>0.5 → setActiveProgram floor(p*4) capped 0-3
```

### 10.3 Lenis Smooth Scroll — `app/hooks/useLenis.ts:8-30`

```ts
new Lenis({ duration 1.2, easing: 1.001 - 2^(-10t), touchMultiplier 2 })
lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add(time => lenis.raf(time*1000))
gsap.ticker.lagSmoothing(0)
```

### 10.4 ScrollReveal Fallback — `app/hooks/useScrollReveal.ts:5-25`

`IntersectionObserver threshold 0.15 rootMargin -40px` → tambah class `visible` once. Untuk legacy sections yang pakai class `.reveal`.

### 10.5 Stat Counter — `app/about/page.tsx:141-170`

`animate(0,to,{duration 1.8, ease [0.22,1,0.36,1], onUpdate round+ suffix})` triggered `useInView once margin -20%`.

### 10.6 Micro-interactions Konsisten

- Card hover lift: `hover:-translate-y-1.5 + shadow`
- Icon rotate: `group-hover:rotate-6 + scale-110` (hubLinks), `translateX(8px)` (nav-link)
- Pill active: `bg-[#1e293b] shadow-[0_10px_24px_-12px_rgba(30,41,59,0.6)]`
- Button hover: `hover:bg-[#1e293b] hover:text-[#FFFBEB]` atau `hover:bg-[#F472B6]`
- Blink eyes: `animate-[blink_6s_-2s_infinite] origin-center` di Navbar logo

---

## 11. State & Logic

### 11.1 State Diagram Utama

```
Navbar: isOpen (mobile drawer) + isDark (theme)
Home:   activeProgram (0-3) [dari GSAP scrub] + useTyping (line1/line2/isDeleting/wordIndex)
About:  stateless (Reveal + StatCounter per instance)
People: selectedMember, activeDeptId (DEPARTMENTS[0]), expandedProkerId
Contact: copied (bool 2.2s)
Career:  stateless
```

### 11.2 Data Flow

- No global store (Zustand/Context). State lokal per page cukup.
- Navigasi via `next/link` + anchor `#` (about hero → #visi, people selector scrollIntoView #departemen).
- External links (GForm) `target _blank rel noopener noreferrer`.
- Modal `people` lock body scroll `document.body.style.overflow hidden` (`people/page.tsx:73-78`).

---

## 12. Responsivitas

| Breakpoint | Strategi |
|------------|----------|
| **Mobile** (`<640px`) | Single column, font clamp kecil, hero stacked, marquee 10px, card gap 4, navbar drawer slide |
| **sm** (`640px+`) | 2-col grid (values, people leadership), flex-wrap pills |
| **md** (`768px+`) | Navbar desktop (grid auto-cols-fr), timeline spine center, 3-col values, contact 3 cards |
| **lg** (`1024px+`) | `lg:grid-cols-12` editorial 7/5 splits, ProkerSection visible, Hero 12-col |

`@media (max-width:640px)` overrides di `globals.css:353-357` (menu 100% width, nav-link-text clamp 1.8rem). `editorial.css:16-21` reduce stroke 2→1.5px mobile. `prefers-reduced-motion: reduce` disable marquee.

---

## 13. Aksesibilitas & Semantics

- `lang="id"` di html (`layout.tsx:40`)
- `aria-hidden="true"` untuk grid backdrop & decorative bars
- `aria-expanded` di accordion proker (`people/page.tsx:491`), navbar toggle (`Navbar.tsx:78`)
- `aria-label`/`aria-pressed` di theme toggle, modal close, copy button
- `role="dialog" aria-modal="true"` di member modal (`people/page.tsx:591`)
- `alt` di semua `<img>` (name/member)
- Semantic: `<main>`, `<section id>`, `<footer>`, `<nav>`, heading hierarchy `h1` per page + `h2` sections + `h3` cards
- Copyable email: keyboard accessible via `button type="button"`

---

## 14. Build, Performansi & Deployment

### 14.1 Scripts

```json
dev:   next dev        // Turbopack, port default 3000, generates AGENTS.md rules
build: next build      // production
start: next start
lint:  eslint
```

### 14.2 Performance Notes

- **Font:** `next/font/google` self-host, `display swap` + `variable` — no external @import.
- **Images:** Saat ini `<img>` biasa + external Unsplash (tidak pakai `next/image` — bisa dioptimasi). Home team image tanpa lazy attr.
- **CSS:** Tailwind v4 JIT, scrollbar hidden, no unused CSS tree-shaking.
- **JS:** `framer-motion` + `gsap` + `lenis` total ~150kb gz — acceptable untuk editorial site; pinned timeline berat (800% scrub) hanya untuk legacy storytelling route.
- **Build output:** `.next/` trace + `diagnostics/route-bundle-stats.json` sudah ada.

### 14.3 Rekomendasi Optimasi (belum diimplement)

- Ganti `<img>` → `next/image` dengan `images.domains` di `next.config.ts`
- Lazy-load Unsplash dengan `loading="lazy"` atau `priority` hero only
- Code-split GSAP: `dynamic import` hanya saat storytelling route
- Turunkan `duration` Lenis jika terasa berat di low-end

---

## 15. Konvensi Pengembangan

### 15.1 Penamaan & Struktur

- Path alias `@/*` → `./*` (`tsconfig.json:22`) — import pakai `@/components/...`, `@/data/...`, `@/lib/utils`
- Component: PascalCase file (e.g. `FooterTapedDesign.tsx`), export named `export function FooterTapedDesign` atau `export default`
- Hook: `useCamelCase` (`usePinnedStorytelling`, `useLenis`)
- Data: flat array + typed `interface`
- CSS: token `#` uppercase 6-hex (cream `#FFFBEB` bukan `#fffbeb`) konsisten di inline class

### 15.2 Next.js Spesifik (Breaking Changes Notice)

Banner di `AGENTS.md:1-9` mengingatkan: **“This is NOT the Next.js you know”** — verifikasi di `node_modules/next/dist/docs/` sebelum menulis code. Heed deprecation notices. Perhatikan:
- `next dev` re-generates `AGENTS.md` — jangan hapus dari diff, commit saja.
- `next/font` API & `app/` conventions mungkin berbeda dari training data — cek `next/dist/docs`.

### 15.3 ESLint

Konfig `eslint.config.mjs:5-16` — jalankan `npm run lint` sebelum push. Ignore `.next/out/build`.

### 15.4 Git

- `.gitignore:1-41` — ignore `node_modules/.pnp/.yarn/.next/out/build/.vercel/.env*/*.tsbuildinfo`
- Branch workflow belum terdefinisi — disarankan `main` + feature branches.

---

## 16. Inventaris File Penting (referensi cepat)

| File | Baris | Deskripsi |
|------|-------|-----------|
| `app/layout.tsx:1-49` | 49 | RootLayout, font, metadata, Navbar |
| `app/page.tsx:7-608` | 608 | Homepage full |
| `app/globals.css:1-358` | 358 | Tailwind theme + nav + utils |
| `app/editorial.css:1-54` | 54 | Editorial helpers |
| `data/organization.ts:1-721` | 721 | 7 dept + BPI + Board |
| `data/programs.ts:1-38` | 38 | 4 program ringkas |
| `components/Navbar.tsx:21-188` | 188 | Fixed nav + theme |
| `components/ui/reveal.tsx:1-47` | 47 | Scroll reveal |
| `components/ui/footer-taped-design.tsx:11-184` | 184 | Footer global |
| `components/bento/Bento.tsx:1-130` | 130 | SVG bento |
| `hooks/usePinnedStorytelling.ts:1-65` | 65 | GSAP timeline |
| `app/hooks/useLenis.ts:1-30` | 30 | Lenis |

---

## 17. Roadmap & Next Steps (saran)

1. **Konten nyata:** Ganti Unsplash placeholder di `data/organization.ts:47-...` dan `app/page.tsx:342,81-154` dengan foto kabinet asli + kompresi.
2. **Next Image:** Aktifkan `next.config.ts` `images.remotePatterns: [{ hostname: 'images.unsplash.com' }]`.
3. **API aspirasi:** Hubungkan form `ContactSection.tsx:18` & contact hub Google Form → API sendiri (mis. `/api/aspiration`).
4. **People pagination:** Jika staff >3 per dept, tambah grid overflow atau carousel.
5. **SEO:** Tambah `next-sitemap`, Open Graph image (`app/opengraph-image.tsx`), `metadata` per sub-page.
6. **Testing:** `playwright` untuk visual regression marquee & modal.
7. **Cleanup:** Hapus `components/AboutSection/ValuesSection/StructureSection/ContactSection` jika sudah tidak dipakai, atau refactor untuk reuse di `/about`.

---

## 18. Cara Menjalankan

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production build
npm run lint  # cek eslint
```

**Env yang dibutuhkan:** Tidak ada (`next.config.ts` kosong, no DB). Untuk GForm contact tidak perlu env.

---

*Dokumen digenerate pada 2026-09-07 — sinkron dengan codebase commit terbaru. Untuk perubahan besar, update section terkait dan bump versi di header.*
