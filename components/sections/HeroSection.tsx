"use client";

export function HeroSection() {
  return (
    <div className="absolute inset-0 z-10 flex h-screen w-full flex-col hero-solid-blue overflow-hidden">
      <div className="bg-grid-lines" />
      <div className="pink-glow" />
      <div className="pixel-spot-overlay opacity-30" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between px-4 sm:px-6 lg:px-8 pt-12 pb-6 lg:pb-8">
        <div className="flex flex-1 flex-col items-center justify-center text-center w-full max-w-6xl mx-auto">
          <div className="flex items-center gap-3 font-unbounded text-[clamp(1rem,2.2vw,1.6rem)] font-black tracking-[6px] text-[#FFF8C7] uppercase mb-3 hero-svg-sentra">
            <span className="text-white text-sm sm:text-lg">✦✦</span>
            <span>KABINET</span>
            <span className="text-white text-sm sm:text-lg">✦✦</span>
          </div>
          <h1
            className="font-unbounded text-[clamp(3.2rem,11vw,9.5rem)] font-[800] leading-[0.85] tracking-[-2px] text-[#FFA3B8] uppercase hero-svg-nawasena"
            style={{ textShadow: "3px 3px 0 #111, 6px 6px 0 rgba(17,17,17,0.18), 0 10px 28px rgba(0,0,0,0.32)" }}
          >
            SENTRA
          </h1>
          <h1
            className="font-unbounded text-[clamp(3.2rem,11vw,9.5rem)] font-[800] leading-[0.85] tracking-[-2px] text-[#C6C8FF] uppercase mb-5"
            style={{ textShadow: "3px 3px 0 #111, 6px 6px 0 rgba(17,17,17,0.18), 0 10px 28px rgba(0,0,0,0.32)" }}
          >
            NAWASENA
          </h1>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-white text-sm sm:text-lg">✦✦</span>
            <div className="bg-[#FFF8C7] border-[3px] border-[#111] px-6 sm:px-8 py-2.5 font-unbounded text-[clamp(1rem,2.4vw,1.5rem)] font-black tracking-[4px] text-[#111] uppercase shadow-[5px_5px_0px_#111] translate-y-[-1px]">
              PERIODE 2026
            </div>
            <span className="text-white text-sm sm:text-lg">✦✦</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-6 w-9 h-9 rounded-full bg-[#111] text-white flex items-center justify-center font-extrabold text-sm z-10 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
        N
      </div>
    </div>
  );
}
