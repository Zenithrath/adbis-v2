export type Program = {
  num: number;
  name: string;
  title: string;
  desc: string;
  badgeColor: string;
};

export const programs: Program[] = [
  {
    num: 1,
    name: "Invest Adbis",
    title: "Invest Adbis",
    desc: "Program edukasi dan kompetisi literasi finansial serta pasar modal untuk mempersiapkan mahasiswa menghadapi dinamika ekonomi dan investasi modern.",
    badgeColor: "#E8C4B8",
  },
  {
    num: 2,
    name: "Bina Masyarakat",
    title: "Bina Masyarakat",
    desc: "Aksi pengabdian sosial dan pendampingan UMKM lokal untuk mendorong kemandirian ekonomi desa binaan melalui inovasi bisnis terapan.",
    badgeColor: "#9B8FE8",
  },
  {
    num: 3,
    name: "Market Day",
    title: "Market Day",
    desc: "Festival expo kewirausahaan tahunan yang menjadi panggung inkubasi, validasi pasar, dan ajang unjuk kreativitas produk bisnis mahasiswa.",
    badgeColor: "#E89B4F",
  },
  {
    num: 4,
    name: "Sencrea",
    title: "Sencrea",
    desc: "Sentra Creative sebagai wadah ekspresi seni visual, desain komunikasi, dan publikasi media kreatif kebanggaan mahasiswa Administrasi Bisnis.",
    badgeColor: "#8B6F5E",
  },
];
