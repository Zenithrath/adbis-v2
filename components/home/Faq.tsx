"use client";

import { FAQ, type FaqCategories, type FaqData } from "@/components/ui/faq-tabs";
import { Reveal } from "@/components/ui/reveal";

const categories: FaqCategories = {
  umum: "Umum",
  proker: "Program Kerja",
  pendaftaran: "Pendaftaran",
  aspirasi: "Aspirasi & Kontak",
};

const faqData: FaqData = {
  umum: [
    {
      question: "Apa itu HMPS Administrasi Bisnis?",
      answer:
        "Himpunan Mahasiswa Program Studi Administrasi Bisnis — wadah sentral terintegrasi untuk pengembangan kompetensi, inovasi, dan penggerak potensi mahasiswa. Periode 2026 dijalankan Kabinet Sentra Nawasena dengan semangat “Merangkai sinergi wujudkan aksi”.",
    },
    {
      question: "Apa visi Kabinet Sentra Nawasena?",
      answer:
        "Menjadi pusat pengembangan kompetensi yang unggul dan berdampak nyata, lewat pelayanan dan advokasi yang transparan, sentra kolaborasi dan kreativitas, serta siklus organisasi yang profesional.",
    },
    {
      question: "Di mana saya bisa follow info terbaru?",
      answer:
        "Semua pengumuman resmi dibagikan lewat Instagram himpunan, grup angkatan, dan halaman Upcoming Events di website ini. Aktifkan notifikasi agar tidak ketinggalan Open Recruitment dan jadwal acara.",
    },
  ],
  proker: [
    {
      question: "Apa saja program kerja unggulan?",
      answer:
        "Empat big proker kami adalah Invest Adbis (literasi investasi), Bina Masyarakat (pengabdian & pemberdayaan UMKM), Market Day (bazaar kewirausahaan), dan Sencrea (wadah kreativitas seni dan budaya).",
    },
    {
      question: "Kapan program kerja dilaksanakan?",
      answer:
        "Jadwal menyebar sepanjang tahun kepengurusan 2026. Tanggal pasti tiap agenda diumumkan H-1 bulan lewat media sosial dan halaman Upcoming Events.",
    },
    {
      question: "Apakah proker terbuka untuk umum?",
      answer:
        "Sebagian agenda seperti Market Day dan Sencrea terbuka untuk umum dan mahasiswa luar prodi. Agenda pembinaan internal umumnya khusus mahasiswa Administrasi Bisnis — cek detail di tiap pengumuman acara.",
    },
  ],
  pendaftaran: [
    {
      question: "Bagaimana cara ikut kepanitiaan?",
      answer:
        "Setiap proker membuka rekrutmen panitia yang diumumkan lewat Instagram dan grup angkatan. Isi formulir pendaftaran yang tersedia, ikuti tahap seleksi (berkas dan wawancara singkat), lalu tunggu pengumuman.",
    },
    {
      question: "Apakah mahasiswa baru boleh ikut?",
      answer:
        "Boleh, dan sangat dianjurkan. Sebagian besar kepanitiaan terbuka untuk semua angkatan aktif. Justru maba yang aktif berorganisasi lebih cepat dapat relasi, pengalaman, dan portofolio.",
    },
    {
      question: "Adakah syarat khusus untuk mendaftar?",
      answer:
        "Syarat umumnya sederhana: mahasiswa aktif Administrasi Bisnis dan berkomitmen mengikuti rangkaian kegiatan sampai selesai. Posisi tertentu (misalnya bendahara atau koordinator divisi) bisa meminta pengalaman relevan.",
    },
  ],
  aspirasi: [
    {
      question: "Bagaimana cara menyampaikan aspirasi?",
      answer:
        "Klik tombol “Kirim Aspirasi” di pojok kanan bawah, atau hubungi kontak resmi himpunan. Setiap aspirasi dibaca pengurus dan dibahas dalam forum advokasi — identitas pelapor dijaga kerahasiaannya.",
    },
    {
      question: "Bisakah pihak eksternal mengajak kerja sama?",
      answer:
        "Bisa. Kami terbuka untuk sponsorship, media partner, dan kolaborasi komunitas maupun korporasi. Sampaikan proposal lewat halaman Kontak dan tim relasi kami akan menindaklanjuti maksimal 3 hari kerja.",
    },
    {
      question: "Ke mana menghubungi pengurus secara langsung?",
      answer:
        "Gunakan halaman Kontak untuk daftar narahubung tiap departemen, atau sapa kami lewat DM Instagram resmi. Untuk urusan akademik dan advokasi, hubungi departemen terkait agar penanganan lebih cepat.",
    },
  ],
};

export default function Faq() {
  return (
    <section
      className="cv-auto w-full scroll-mt-[60px] text-[#FFFBEB] py-20 md:py-28 border-t border-white/10"
      id="faq"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <Reveal>
        <FAQ
          title="Sering Ditanya"
          subtitle="Pusat Bantuan"
          categories={categories}
          faqData={faqData}
        />
        </Reveal>
      </div>
    </section>
  );
}
