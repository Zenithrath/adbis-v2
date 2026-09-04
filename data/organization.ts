export interface Member {
  id: string;
  name: string;
  role: string;
  departmentId: string;
  departmentName: string;
  major: string;
  image: string;
  bio: string;
  tasks: string[];
  isLeadership?: boolean;
}

export interface WorkProgram {
  id: string;
  name: string;
  category?: string;
  desc: string;
  objectives: string[];
  target: string;
  documentation: string[];
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  color: string;
  badgeBg: string;
  desc: string;
  jobDescription: string[];
  head: Member;
  coHead: Member;
  staff: Member[];
  programs: WorkProgram[];
}

export const EXECUTIVE_BOARD: Member[] = [
  {
    id: "kahim",
    name: "Raden Arya Pratama",
    role: "Ketua Himpunan",
    departmentId: "bpi",
    departmentName: "Badan Pengurus Inti",
    major: "Administrasi Bisnis 2023",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bio: "Berkomitmen penuh mengarahkan komando HMPS Administrasi Bisnis sebagai wadah akselerasi potensi mahasiswa yang inklusif, profesional, dan berdampak nyata.",
    tasks: [
      "Penanggung jawab utama seluruh arah kebijakan & gerakan organisasi.",
      "Membangun hubungan strategis dengan birokrasi kampus dan eksternal.",
      "Memastikan ketercapaian Visi & Misi Kabinet Sentra Nawasena."
    ],
    isLeadership: true,
  },
  {
    id: "wakahim",
    name: "Siti Nurhaliza",
    role: "Wakil Ketua Himpunan",
    departmentId: "bpi",
    departmentName: "Badan Pengurus Inti",
    major: "Administrasi Bisnis 2023",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    bio: "Fokus pada penguatan mekanisme internal kabinet, efisiensi tata kelola program, dan pendampingan berkelanjutan bagi 7 departemen.",
    tasks: [
      "Mengawasi dan mengevaluasi operasional internal 7 departemen.",
      "Mendampingi Ketua Himpunan dalam penentuan keputusan strategis.",
      "Menjaga soliditas dan harmonisasi hubungan antar pengurus."
    ],
    isLeadership: true,
  },
  {
    id: "sekretaris-1",
    name: "Aulia Rahmawati",
    role: "Sekretaris Umum (BPI)",
    departmentId: "bpi",
    departmentName: "Badan Pengurus Inti",
    major: "Administrasi Bisnis 2023",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    bio: "Pilar kerapihan administrasi, korespondensi resmi, dan arsip keorganisasian HMPS Administrasi Bisnis.",
    tasks: [
      "Pengelolaan persuratan, perizinan, dan arsip risalah rapat.",
      "Penyusunan LPJ periodik dan akhir kepengurusan.",
      "Standarisasi format dokumen internal dan eksternal."
    ],
  },
  {
    id: "bendahara-1",
    name: "Fadhil Muhammad",
    role: "Bendahara Umum (BPI)",
    departmentId: "bpi",
    departmentName: "Badan Pengurus Inti",
    major: "Administrasi Bisnis 2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Menjaga transparansi, akuntabilitas, dan kesehatan arus kas finansial seluruh agenda program kerja.",
    tasks: [
      "Penyusunan Rencana Anggaran Biaya (RAB) tahunan.",
      "Auditing keuangan dan pencatatan kas rutin harian/bulanan.",
      "Penyediaan laporan finansial terbuka bagi pengurus."
    ],
  },
];

export const DEPARTMENTS: Department[] = [
  {
    id: "perhubungan",
    name: "DEPARTEMEN PERHUBUNGAN",
    shortName: "Perhubungan",
    tagline: "Connecting Networks, Expanding Horizons",
    color: "#4346D0",
    badgeBg: "#C6C8FF",
    desc: "Departemen Perhubungan menjembatani HMPS Administrasi Bisnis dengan institusi kampus lain, alumni, profesional industri, dan masyarakat luar melalui jejaring kemitraan strategis.",
    jobDescription: [
      "Membangun & merawat jejaring hubungan diplomatik eksternal himpunan.",
      "Fasilitator studi banding dan kunjungan industri mahasiswa ke perusahaan nasional/multinasional.",
      "Penyelenggara forum musyawarah tata tertib dan AD/ART keorganisasian."
    ],
    head: {
      id: "hub-head",
      name: "Rian Hidayat",
      role: "Kepala Departemen",
      departmentId: "perhubungan",
      departmentName: "Departemen Perhubungan",
      major: "Administrasi Bisnis 2023",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      bio: "Memiliki kepakaran dalam public relations dan negosiasi eksternal untuk memperluas jangkauan kerja sama himpunan.",
      tasks: ["Manajerial program kerja eksternal", "Supervisi relasi stakeholder & korporasi"]
    },
    coHead: {
      id: "hub-cohead",
      name: "Tania Putri",
      role: "Wakil Kepala Departemen",
      departmentId: "perhubungan",
      departmentName: "Departemen Perhubungan",
      major: "Administrasi Bisnis 2024",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
      bio: "Fokus pada koordinasi teknis acara audiensi eksternal dan kolaborasi antar Lembaga Mahasiswa.",
      tasks: ["Eksekusi operasional kegiatan luar kampus", "Koordinator administrasi hubungan relasi"]
    },
    staff: [
      {
        id: "hub-staff-1",
        name: "Bintang Bagus",
        role: "Staff Ahli Perhubungan",
        departmentId: "perhubungan",
        departmentName: "Departemen Perhubungan",
        major: "Administrasi Bisnis 2024",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
        bio: "Penanggung jawab utama program kunjungan industri Company Visit.",
        tasks: ["Liaison Officer (LO) instansi eksternal", "Penyusunan proposal relasi"]
      },
      {
        id: "hub-staff-2",
        name: "Clara Sinta",
        role: "Staff Perhubungan",
        departmentId: "perhubungan",
        departmentName: "Departemen Perhubungan",
        major: "Administrasi Bisnis 2025",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
        bio: "Aktif mengelola kanal podcast & talkshow komunikasi perhubungan.",
        tasks: ["Kreatif konten talkshow #AdTalks", "Humas lapangan"]
      }
    ],
    programs: [
      {
        id: "adtalks",
        name: "#AdTalks",
        desc: "Podcast dan ruang bincang inspiratif bersama alumni dan pakar bisnis mengenai tren karier modern, isu ekonomi terkini, dan dinamika industri.",
        objectives: ["Meningkatkan wawasan bisnis mahasiswa", "Mempererat relasi alumni-mahasiswa"],
        target: "Seluruh Mahasiswa Administrasi Bisnis & Umum",
        documentation: ["https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "adbis-room",
        name: "Adbis Room",
        desc: "Forum diskusi santai berkala antarelemen mahasiswa untuk membahas aspirasi, isu internal kampus, dan penguatan persaudaraan.",
        objectives: ["Menampung masukan mahasiswa", "Mempererat solidaritas angkatan"],
        target: "Mahasiswa Aktif Administrasi Bisnis",
        documentation: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "study-visit",
        name: "Study Visit",
        desc: "Kunjungan studi perbandingan ke HMPS/BEM Administrasi Bisnis dari perguruan tinggi ternama untuk pertukaran ide dan benchmarking organisasi.",
        objectives: ["Benchmarking program kerja unggulan", "Memorandum of Understanding (MoU) antar himpunan"],
        target: "Pengurus HMPS Adbis & Himpunan Mitra",
        documentation: ["https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "company-visit",
        name: "Company Visit",
        desc: "Ekskursi edukatif berkunjung langsung ke kantor pusat korporasi terkemuka dan start-up unicorn untuk memahami kultur kerja profesional.",
        objectives: ["Mengenalkan lanskap riil dunia kerja", "Membuka peluang magang mahasiswa"],
        target: "Mahasiswa Administrasi Bisnis Angkatan 2023-2025",
        documentation: ["https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "mubes-ad-art",
        name: "MUBES AD ART",
        desc: "Musyawarah Besar Pembahasan dan Pengesahan Anggaran Dasar / Anggaran Rumah Tangga (AD/ART) sebagai konstitusi tertinggi himpunan.",
        objectives: ["Revisi dan perumusan ketetapan konstitusi himpunan", "Laporan Pertanggungjawaban akhir kepengurusan"],
        target: "Seluruh Delegasi Angkatan & Organisasi",
        documentation: ["https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80"]
      }
    ]
  },
  {
    id: "sosmas",
    name: "DEPARTEMEN SOSIAL DAN MASYARAKAT",
    shortName: "Sosmas",
    tagline: "Empowering People, Caring for Society",
    color: "#FFA3B8",
    badgeBg: "#FFF8C7",
    desc: "Departemen Sosial dan Masyarakat berdedikasi menumbuhkan kepedulian sosial, pengabdian masyarakat terencana, serta aksi cepat tanggap kemanusiaan.",
    jobDescription: [
      "Menginisiasi aksi empati sosial dan pengabdian nyata bagi masyarakat sekitar.",
      "Pendampingan UMKM desa binaan menuju keberlanjutan usaha.",
      "Penyaluran bantuan logistik dan dana darurat saat terjadi bencana alam."
    ],
    head: {
      id: "sos-head",
      name: "Anindya Putri",
      role: "Kepala Departemen",
      departmentId: "sosmas",
      departmentName: "Departemen Sosial dan Masyarakat",
      major: "Administrasi Bisnis 2023",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "Pelopor pengabdian berbasis keberlanjutan yang memadukan ilmu bisnis dengan pemberdayaan komunitas lokal.",
      tasks: ["Pengarah strategis program pengabdian", "Kemitraan dengan NGO & Yayasan Sosial"]
    },
    coHead: {
      id: "sos-cohead",
      name: "Daffa Ramadhan",
      role: "Wakil Kepala Departemen",
      departmentId: "sosmas",
      departmentName: "Departemen Sosial dan Masyarakat",
      major: "Administrasi Bisnis 2024",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      bio: "Fokus pada penggalangan dana kreatif dan mobilisasi relawan mahasiswa.",
      tasks: ["Koordinator relawan aksi lapangan", "Manajemen alokasi dana donasi"]
    },
    staff: [
      {
        id: "sos-staff-1",
        name: "Nabila Aurel",
        role: "Staff Sosmas",
        departmentId: "sosmas",
        departmentName: "Departemen Sosial dan Masyarakat",
        major: "Administrasi Bisnis 2024",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        bio: "Pengelola agenda rutin Jumat Berkah dan santunan panti asuhan.",
        tasks: ["Penyiapan logistik bakti sosial", "Dokumentasi keharmonisan masyarakat"]
      }
    ],
    programs: [
      {
        id: "iftar-gathering",
        name: "Iftar Gathering",
        desc: "Buka puasa bersama dan berbagi santunan kebahagiaan dengan anak-anak yatim piatu di bulan suci Ramadhan.",
        objectives: ["Mempererat tali silaturahmi", "Menyalurkan infak & sedekah mahasiswa"],
        target: "Anak Yatim & Civitas Academica",
        documentation: ["https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "jumat-berkah",
        name: "Jumat Berkah",
        desc: "Pembagian makanan sehat gratis secara rutin di hari Jumat untuk pekerja informal dan warga kurang mampu di sekitar lingkungan kampus.",
        objectives: ["Aksi empati rutin mingguan", "Menggalang kepedulian civitas kampus"],
        target: "Masyarakat Sekitar Kampus & Pekerja Informal",
        documentation: ["https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "pengabdian-masyarakat",
        name: "Pengabdian Masyarakat",
        desc: "Program pengabdian intensif terjun ke desa binaan dengan fokus pelatihan pencatatan keuangan sederhana dan pemasaran digital bagi UMKM desa.",
        objectives: ["Pemberdayaan ekonomi mikro desa", "Implementasi ilmu bisnis berbasis kebutuhan masyarakat"],
        target: "Pelaku UMKM Desa Binaan",
        documentation: ["https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "adbis-berbagi-kasih",
        name: "Adbis Berbagi Kasih Sayang",
        desc: "Aksi perayaan momen peringatan hari kasih sayang lewat donor darah massal dan donasi barang layak pakai ke wilayah terpencil.",
        objectives: ["Meningkatkan kesadaran donor darah", "Penyaluran pakaian & buku bacaan layak pakai"],
        target: "Masyarakat Umum & PMI",
        documentation: ["https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "adbis-tanggap-darurat",
        name: "Adbis Tanggap Darurat",
        desc: "Posko siaga bencana dan penggalangan dana cepat tanggap ketika terjadi musibah bencana alam di Indonesia.",
        objectives: ["Respon cepat tanggap bencana", "Transparansi audit penyaluran donasi"],
        target: "Korban Bencana Alam",
        documentation: ["https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80"]
      }
    ]
  },
  {
    id: "adkesma",
    name: "DEPARTEMEN ADVOKASI & KESEJAHTERAAN MAHASISWA",
    shortName: "Adkesma",
    tagline: "Voice of Students, Guardian of Welfare",
    color: "#9B8FE8",
    badgeBg: "#FFF8C7",
    desc: "Departemen Advokasi & Kesejahteraan Mahasiswa bertindak sebagai benteng pengawal hak-hak akademik, finansial, serta kesejahteraan fisik dan mental mahasiswa.",
    jobDescription: [
      "Pengawalan dan pendampingan banding UKT serta beasiswa mahasiswa.",
      "Kanal informasi beasiswa, fasilitas kampus, dan regulasi akademik terbaru.",
      "Wadah penyambung aspirasi mahasiswa ke pihak dekanat dan rektorat."
    ],
    head: {
      id: "adk-head",
      name: "Kevin Pratama",
      role: "Kepala Departemen",
      departmentId: "adkesma",
      departmentName: "Departemen Advokasi & Kesejahteraan Mahasiswa",
      major: "Administrasi Bisnis 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      bio: "Fokus pada pendampingan hak akademik dan perumusan advokasi kebijakan finansial mahasiswa.",
      tasks: ["Audiensi resmi dengan pimpinan fakultas", "Pengawasan helpdesk advokasi"]
    },
    coHead: {
      id: "adk-cohead",
      name: "Sania Sabrina",
      role: "Wakil Kepala Departemen",
      departmentId: "adkesma",
      departmentName: "Departemen Advokasi & Kesejahteraan Mahasiswa",
      major: "Administrasi Bisnis 2024",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      bio: "Pengelola program penyambutan mahasiswa baru dan pendataan keringanan UKT.",
      tasks: ["Manajemen data banding UKT", "Koordinator acara AFREGA"]
    },
    staff: [
      {
        id: "adk-staff-1",
        name: "Aris Budiman",
        role: "Staff Adkesma",
        departmentId: "adkesma",
        departmentName: "Departemen Advokasi & Kesejahteraan Mahasiswa",
        major: "Administrasi Bisnis 2024",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
        bio: "Operator helpdesk online Adcare dan penyusun infografis ABDATE.",
        tasks: ["Respon cepat aduan mahasiswa", "Publikasi info beasiswa"]
      }
    ],
    programs: [
      {
        id: "adcare",
        name: "ADCARE (Adbis Care Hub)",
        desc: "Layanan helpdesk pengaduan 24/7 dan konsultasi terkait kendala akademik, fasilitas, serta kesehatan mental mahasiswa.",
        objectives: ["Respon advokasi cepat & solutif", "Layanan aman dan terjamin kerahasiaan"],
        target: "Seluruh Mahasiswa Administrasi Bisnis",
        documentation: ["https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "advin",
        name: "ADVIN (Advocacy Insight)",
        desc: "Kajian isu strategis kebijakan kampus dan infografis edukatif mengenai alur penyesuaian UKT serta tata cara klaim beasiswa.",
        objectives: ["Meningkatkan literasi hukum & aturan kampus", "Tracer kajian advokasi berkala"],
        target: "Mahasiswa Aktif",
        documentation: ["https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "abdate",
        name: "ABDATE (Adbis Update)",
        desc: "Pemberitahuan terkini mengenai kalender akademik, jadwal ujian, tenggat pembayaran UKT, dan lowongan beasiswa institusi/swasta.",
        objectives: ["Transparansi informasi akademik tepat waktu", "Pencegahan kendala administrasi mahasiswa"],
        target: "Civitas Academica Adbis",
        documentation: ["https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "adbis-appreciation",
        name: "Adbis Appreciation",
        desc: "Bentuk apresiasi tinggi dan penghargaan bagi mahasiswa Administrasi Bisnis yang meraih prestasi akademik maupun non-akademik di tingkat nasional/internasional.",
        objectives: ["Apresiasi pencapaian mahasiswa", "Memotivasi semangat berprestasi"],
        target: "Mahasiswa Berprestasi Adbis",
        documentation: ["https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "adbis-leader-connect",
        name: "ADBIS Leader Connect",
        desc: "Forum dialog terbuka audiensi langsung antara mahasiswa Adbis dengan pimpinan jajaran Dekanat Fakultas.",
        objectives: ["Menyampaikan tuntutan & aspirasi mahasiswa secara elegan", "Mendapatkan kejelasan kebijakan kampus"],
        target: "Perwakilan Kelas & Pimpinan Fakultas",
        documentation: ["https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "afrega",
        name: "AFREGA (Adbis Freshman Gathering)",
        desc: "Momen kehangatan penyambutan mahasiswa baru Administrasi Bisnis untuk pengenalan kultur jurusan dan sistem perkuliahan.",
        objectives: ["Inisiasi bonding mahasiswa baru", "Pengenalan organisasi dan sistem akademik"],
        target: "Mahasiswa Baru Administrasi Bisnis",
        documentation: ["https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"]
      }
    ]
  },
  {
    id: "bumh",
    name: "DEPARTEMEN BUMH",
    shortName: "BUMH",
    tagline: "Creating Business Opportunities, Fostering Enterprise",
    color: "#E89B4F",
    badgeBg: "#FFF8C7",
    desc: "Badan Usaha Milik Himpunan (BUMH) beroperasi sebagai penggerak kemandirian finansial HMPS Adbis serta wadah simulasi wirausaha praktis bagi mahasiswa.",
    jobDescription: [
      "Mengelola usaha komersial himpunan (Merchandise, PDH, & Jasa Kreatif).",
      "Penyelenggara expo kewirausahaan tahunan terbesar mahasiswa.",
      "Inkubasi produk inovasi bisnis kreatif karya mahasiswa."
    ],
    head: {
      id: "bumh-head",
      name: "Alvaro Maulana",
      role: "Kepala Departemen",
      departmentId: "bumh",
      departmentName: "DEPARTEMEN BUMH",
      major: "Administrasi Bisnis 2023",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      bio: "Entrepreneur muda dengan spesialisasi pengembangan produk dan strategi penetrasi pasar.",
      tasks: ["Pengelolaan bisnis komersial BUMH", "Kemitraan vendor & supplier"]
    },
    coHead: {
      id: "bumh-cohead",
      name: "Rania Farida",
      role: "Wakil Kepala Departemen",
      departmentId: "bumh",
      departmentName: "DEPARTEMEN BUMH",
      major: "Administrasi Bisnis 2024",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      bio: "Ahli manajemen persediaan barang, pengawasan PDH, serta keuangan tenant expo.",
      tasks: ["Operasional penjualan merchandise", "Supervisi kepanitiaan Market Day"]
    },
    staff: [
      {
        id: "bumh-staff-1",
        name: "Dimas Prasetyo",
        role: "Staff BUMH",
        departmentId: "bumh",
        departmentName: "DEPARTEMEN BUMH",
        major: "Administrasi Bisnis 2024",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
        bio: "Pengelola toko online resmi dan administrasi pemesanan PDH Himpunan.",
        tasks: ["Quality control produk", "Promosi catalog marketplace"]
      }
    ],
    programs: [
      {
        id: "marda",
        name: "MARDA (Market Days)",
        desc: "Festival expo kewirausahaan mahasiswa yang menghadirkan belasan booth bisnis kuliner, fashion, dan produk kreatif dengan ribuan pengunjung.",
        objectives: ["Ajang validasi pasar produk mahasiswa", "Peningkatan omzet dan jaringan kemitraan bisnis"],
        target: "Seluruh Mahasiswa & Civitas Kampus",
        documentation: ["https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "pdh-himpunan",
        name: "PDH Himpunan",
        desc: "Pengadaan Pakaian Dinas Harian (PDH) resmi bagi pengurus dan seluruh angkatan mahasiswa Administrasi Bisnis dengan desain elegan Y2K.",
        objectives: ["Menjaga identitas kebanggaan jurusan", "Standarisasi busana keorganisasian"],
        target: "Mahasiswa Administrasi Bisnis",
        documentation: ["https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "jabiz",
        name: "JABIZ",
        desc: "Jasa Usaha Kreatif BUMH yang menawarkan layanan desain grafis, sewa alat podcast, serta konsultasi bisnis skala rintisan.",
        objectives: ["Menambah sumber pendapatan kas himpunan", "Memberikan kesempatan kerja bagi pengurus"],
        target: "Klien Internal & Eksternal Kampus",
        documentation: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "mekar",
        name: "MEKAR (Meja Karya)",
        desc: "Katalog display digital dan fisik yang mempromosikan produk-produk karya usaha mandiri buatan mahasiswa Administrasi Bisnis.",
        objectives: ["Membantu promosi bisnis gratis bagi mahasiswa", "Pemasaran terpadu lewat media sosial HMPS"],
        target: "Wirausahawan Mahasiswa Adbis",
        documentation: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"]
      }
    ]
  },
  {
    id: "mikad",
    name: "DEPARTEMEN MINAT & BAKAT",
    shortName: "Minat & Bakat",
    tagline: "Unleashing Passion, Expressing Talent",
    color: "#8E44AD",
    badgeBg: "#C6C8FF",
    desc: "Departemen Minat & Bakat memfasilitasi dan mengarahkan potensi mahasiswa dalam bidang seni, olahraga, serta industri kreatif.",
    jobDescription: [
      "Wadahnya pembinaan minat olahraga dan kejuaraan atlet antar angkatan.",
      "Pengembangan kreativitas bidang seni visual, musik, dan pertunjukan.",
      "Kepanitiaan panggung kompor seni dan kompetisi tahunan."
    ],
    head: {
      id: "mik-head",
      name: "Rizky Firmansyah",
      role: "Kepala Departemen",
      departmentId: "mikad",
      departmentName: "DEPARTEMEN MINAT & BAKAT",
      major: "Administrasi Bisnis 2023",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      bio: "Pegiat olahraga dan seni pertunjukan yang fokus membina atlet serta seniman kontingen jurusan.",
      tasks: ["Manajerial kontingen perlombaan", "Penyelenggara turnamen ASC"]
    },
    coHead: {
      id: "mik-cohead",
      name: "Bella Amanda",
      role: "Wakil Kepala Departemen",
      departmentId: "mikad",
      departmentName: "DEPARTEMEN MINAT & BAKAT",
      major: "Administrasi Bisnis 2024",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
      bio: "Koreografer dan konseptor kreatif panggung karya seni Sencrea.",
      tasks: ["Pengarahan teknis pertunjukan seni", "Latihan rutin cabang olahraga"]
    },
    staff: [
      {
        id: "mik-staff-1",
        name: "Gilang Ramadhan",
        role: "Staff Mikad",
        departmentId: "mikad",
        departmentName: "DEPARTEMEN MINAT & BAKAT",
        major: "Administrasi Bisnis 2024",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
        bio: "Koordinator divisi pertandingan futsal dan e-sports ASC.",
        tasks: ["Wasit & penanggung jawab lapangan", "Manajemen perlengkapan"]
      }
    ],
    programs: [
      {
        id: "sencrea",
        name: "SENCREA",
        desc: "Sentra Creative sebagai wadah pertunjukan panggung seni musik, tari, desain komunikasi visual, dan pameran karya estetis mahasiswa Adbis.",
        objectives: ["Ekspresi kebebasan berkesenian", "Apresiasi talenta seni mahasiswa"],
        target: "Seluruh Mahasiswa & Pecinta Seni",
        documentation: ["https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "asc",
        name: "ASC (Adbis Sport Competition)",
        desc: "Ajang turnamen olahraga tahunan (Futsal, Basket, Badminton, & E-Sports) antar angkatan Administrasi Bisnis.",
        objectives: ["Menjaga kebugaran dan sportivitas", "Gelar juara piala bergilir jurusan"],
        target: "Kontingen Angkatan 2022-2025",
        documentation: ["https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"]
      }
    ]
  },
  {
    id: "psdm",
    name: "DEPARTEMEN PSDM",
    shortName: "PSDM",
    tagline: "Developing Potential, Building Future Leaders",
    color: "#27AE60",
    badgeBg: "#FFF8C7",
    desc: "Departemen Pengembangan Sumber Daya Manusia (PSDM) bertindak sebagai akselerator peningkatan keahlian, kaderisasi kepemimpinan, dan kesiapan karier.",
    jobDescription: [
      "Perancangan modul latihan kepemimpinan dan kaderisasi organisasi.",
      "Pelatihan keahlian praktis (Skill Camp, Excel, Data Analytics, & Public Speaking).",
      "Program mentoring persiapan karier (PEKAR) dan sertifikasi."
    ],
    head: {
      id: "psdm-head",
      name: "Fajar Wicaksono",
      role: "Kepala Departemen",
      departmentId: "psdm",
      departmentName: "DEPARTEMEN PSDM",
      major: "Administrasi Bisnis 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      bio: "Fasilitator pengembangan karakter kepemimpinan muda berwawasan global.",
      tasks: ["Desain kurikulum kaderisasi himpunan", "Evaluasi indeks performa pengurus"]
    },
    coHead: {
      id: "psdm-cohead",
      name: "Nabila Aurellia",
      role: "Wakil Kepala Departemen",
      departmentId: "psdm",
      departmentName: "DEPARTEMEN PSDM",
      major: "Administrasi Bisnis 2023",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "Fokus pada harmonisasi kesehatan mental organisasi dan bonding antar departemen.",
      tasks: ["Internal bonding & malam keakraban", "Supervisi program Kelas Intensif"]
    },
    staff: [
      {
        id: "psdm-staff-1",
        name: "M. Farhan",
        role: "Staff PSDM",
        departmentId: "psdm",
        departmentName: "DEPARTEMEN PSDM",
        major: "Administrasi Bisnis 2024",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
        bio: "Moderatir kelas workshop dan penanggung jawab absensi kaderisasi.",
        tasks: ["Manajemen pemateri bootcamp", "Evaluasi feedback peserta"]
      }
    ],
    programs: [
      {
        id: "kelas-intensif",
        name: "Kelas Intensif",
        desc: "Bootcamp bimbingan modul akademis dan persiapan ujian semester yang dibawakan oleh asisten laboratorium & mahasiswa berprestasi.",
        objectives: ["Meningkatkan rata-rata IPK mahasiswa", "Pemahaman mendalam mata kuliah sulit"],
        target: "Mahasiswa Tingkat 1 & 2",
        documentation: ["https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "invest-adbis",
        name: "INVEST ADBIS",
        desc: "Program edukasi finansial, sekolah pasar modal, serta simulasi trading saham & reksadana bekerja sama dengan BEI.",
        objectives: ["Melek finansial sejak dini", "Pencegahan investasi bodong di kalangan pemuda"],
        target: "Mahasiswa Administrasi Bisnis & Umum",
        documentation: ["https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "pekar",
        name: "Pengembangan Karir (PEKAR)",
        desc: "Webinar dan workshop penulisan CV ATS-friendly, optimasi profil LinkedIn, serta simulasi wawancara kerja bareng HRD profesional.",
        objectives: ["Kesiapan lulusan menembus dunia kerja", "Review CV gratis oleh profesional"],
        target: "Mahasiswa Tingkat Akhir & Alumni",
        documentation: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "adbis-skill-camp",
        name: "ADBIS Skill Camp",
        desc: "Pelatihan teknis intensif penggunaan software bisnis modern seperti Microsoft Excel Advanced, Tableau, MiniTAB, dan Google Analytics.",
        objectives: ["Sertifikasi keahlian data bisnis", "Penguasaan tools standar industri"],
        target: "Mahasiswa Aktif",
        documentation: ["https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"]
      }
    ]
  },
  {
    id: "medinfo",
    name: "DEPARTEMEN MEDIA & INFORMASI",
    shortName: "Medinfo",
    tagline: "Creative Visuals, Powerful Storytelling",
    color: "#454ADE",
    badgeBg: "#FFF8C7",
    desc: "Departemen Media & Informasi merupakan poros publikasi kreatif, pengelola media sosial resmi, branding visual, serta dokumentasi seluruh kiprah himpunan.",
    jobDescription: [
      "Pengelolaan media sosial resmi (Instagram, TikTok, YouTube, & Website).",
      "Pembuatan desain grafis, animasi, feed, dan videografi acara.",
      "Penerbitan buku tahunan (Annual Yearbook) dan Staff of the Month."
    ],
    head: {
      id: "med-head",
      name: "Dimas Anggara",
      role: "Kepala Departemen",
      departmentId: "medinfo",
      departmentName: "DEPARTEMEN MEDIA & INFORMASI",
      major: "Administrasi Bisnis 2024",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      bio: "Creative Director yang berdedikasi menjaga konsistensi branding visual Y2K dan identitasHMPS Adbis.",
      tasks: ["Pengarah konsep estetika visual website & sosmed", "Supervisi redaksi tim media"]
    },
    coHead: {
      id: "med-cohead",
      name: "Shania Gracia",
      role: "Wakil Kepala Departemen",
      departmentId: "medinfo",
      departmentName: "DEPARTEMEN MEDIA & INFORMASI",
      major: "Administrasi Bisnis 2024",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
      bio: "Pakar strategi konten digital dan jadwal posting terpadu kanal informasi.",
      tasks: ["Content planner & copywriting", "Koordinator Media Partnership"]
    },
    staff: [
      {
        id: "med-staff-1",
        name: "Yudi Ardiansyah",
        role: "Staff Medinfo",
        departmentId: "medinfo",
        departmentName: "DEPARTEMEN MEDIA & INFORMASI",
        major: "Administrasi Bisnis 2025",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        bio: "Fotografer & videografer utama seluruh rangkaian kegiatan himpunan.",
        tasks: ["Liputan dokumentasi lapangan", "Editing reel & video pendek"]
      }
    ],
    programs: [
      {
        id: "handling-social-media",
        name: "Handling Social Media",
        desc: "Pengelolaan profesional harian terhadap akun Instagram, TikTok, LinkedIn, dan YouTube HMPS Administrasi Bisnis dengan estetika visual Y2K modern.",
        objectives: ["Meningkatkan jumlah followers & engagement rate", "Pusat informasi resmi tercepat bagi mahasiswa"],
        target: "Publik & Mahasiswa",
        documentation: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "media-partnership",
        name: "Media Partnership",
        desc: "Layanan kerja sama publikasi acara dengan event instansi eksternal, kampus lain, dan brand sponsor resmi.",
        objectives: ["Memperluas jangkauan audiensi media HMPS", "Penerimaan sponsorship barter promo"],
        target: "Penyelenggara Event External",
        documentation: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "company-profile",
        name: "Company Profile",
        desc: "Penyusunan video profil resmi dan booklet interaktif yang memamerkan pencapaian, struktur, serta visi Kabinet Sentra Nawasena.",
        objectives: ["Brand awareness himpunan tingkat nasional", "Materi diplomasi saat kunjungan kerja"],
        target: "Mitra Industri & Perguruan Tinggi",
        documentation: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "staff-of-the-month",
        name: "Staff of The Month",
        desc: "Penghargaan bulanan bagi pengurus paling berdedikasi dan memiliki kontribusi menonjol demi membakar semangat kepengurusan.",
        objectives: ["Apresiasi kerja keras staff", "Meningkatkan motivasi dan ketaatan indikator kinerja"],
        target: "Seluruh Pengurus HMPS Adbis",
        documentation: ["https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: "annual-yearbook",
        name: "Annual Yearbook",
        desc: "Penerbitan majalah dan majalah digital kenangan perpisahan yang mendokumentasikan foto seluruh pengurus, perjalanan program kerja, dan kesan pesan 1 periode.",
        objectives: ["Arsip memori abadi kepengurusan", "Kenang-kenangan eksklusif di akhir jabatan"],
        target: "Seluruh Demisioner & Pengurus Kabinet",
        documentation: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"]
      }
    ]
  }
];
