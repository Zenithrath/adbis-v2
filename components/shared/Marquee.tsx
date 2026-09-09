"use client";

export default function Marquee({
  items,
  speed = "20s",
}: {
  items: string[];
  speed?: string;
}) {
  return (
    <div className="marquee-wrap marquee-mask border-y border-white/10 text-[#FFFBEB] py-3.5 overflow-hidden">
      <div className="marquee-track" style={{ animationDuration: speed }}>
        <div className="flex items-center shrink-0">
          {items.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 pr-8 text-[10px] md:text-xs font-black uppercase tracking-[0.35em] whitespace-nowrap"
            >
              {item} <span className="text-[#F9A8D4] text-base">✱</span>
            </span>
          ))}
        </div>
        <div className="flex items-center shrink-0">
          {items.map((item, i) => (
            <span
              key={`dup-${i}`}
              className="flex items-center gap-8 pr-8 text-[10px] md:text-xs font-black uppercase tracking-[0.35em] whitespace-nowrap"
            >
              {item} <span className="text-[#F9A8D4] text-base">✱</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
