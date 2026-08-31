import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2e269c] border-t border-white/10 relative overflow-hidden">
      <div className="hero-dots-pattern opacity-30 !h-[100%] !mask-none" style={{ maskImage: "none", WebkitMaskImage: "none" }} />
      <div className="hero-texture-lines opacity-40" />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow">
                <span className="w-6 h-6 rounded-full bg-[#3f41cc] flex items-center justify-center text-white font-black text-[8px]">UB</span>
                <span className="font-black text-xs tracking-wide text-[#2d2a32]">HMPS ADBIS</span>
              </div>
              <span className="px-2.5 py-1 bg-[#fff9c4] text-[#2d2a32] rounded-full text-xs font-black">2026</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70 max-w-md">
              Pusat Penggerak Inti yang berorientasi pada Masa Depan Yang Cerah. Wadah sentral terintegritas dalam pengembangan kompetensi dan inovasi.
            </p>
            <p className="mt-3 font-black tracking-[0.14em] text-xs text-[#fff9c4]">merangkai sinergi wujudkan aksi ✦</p>
          </div>

          <div>
            <h4 className="font-black text-xs tracking-[0.16em] text-[#c4ccff] mb-3">NAVIGASI</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white">About</Link></li>
              <li><Link href="/people" className="text-white/70 hover:text-white">Our People</Link></li>
              <li><Link href="/programs" className="text-white/70 hover:text-white">Programs</Link></li>
              <li><Link href="/hub" className="text-white/70 hover:text-white">Adbis Hub</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs tracking-[0.16em] text-[#c4ccff] mb-3">CONNECT</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://instagram.com/hmpsabisbrawijaya" target="_blank" className="text-white/70 hover:text-[#ff9ebb]">Instagram — @hmpsabisbrawijaya</a></li>
              <li><a href="https://tiktok.com/@hmpsabisub" target="_blank" className="text-white/70 hover:text-[#ff9ebb]">TikTok — @hmpsabisub</a></li>
              <li><a href="mailto:sentranawasena@gmail.com" className="text-white/70 hover:text-[#c4ccff]">sentranawasena@gmail.com</a></li>
            </ul>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold border border-white/20 text-white">Y2K ✦</span>
              <span className="px-3 py-1 bg-[#ff9ebb] text-[#2d2a32] rounded-full text-xs font-black">SENTRA NAWASENA</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© 2026 HMPS Administrasi Bisnis Universitas Brawijaya.</p>
          <p className="font-black tracking-[0.16em] text-[10px]">BUILT WITH ✦ @hmpsadbisub</p>
        </div>
      </div>
    </footer>
  );
}
