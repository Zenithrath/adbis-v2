import { cn } from "@/lib/cn";

export default function WindowCard({
  title,
  color = "pink",
  children,
  className,
}: {
  title: string;
  color?: "pink" | "blue" | "cream";
  children: React.ReactNode;
  className?: string;
}) {
  const bg = {
    pink: "bg-[#FFB6D9]",
    blue: "bg-[#A8D8EA]",
    cream: "bg-[#F5E6CC]",
  }[color];

  return (
    <div className={cn("pixel-window rounded-[20px] overflow-hidden bg-white flex flex-col", className)}>
      <div className={cn("flex items-center justify-between px-4 py-2.5 border-b-[3px] border-[#2D2A32]", bg)}>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-white border-2 border-[#2D2A32]" />
          <span className="w-3 h-3 rounded-full bg-[#FFE066] border-2 border-[#2D2A32]" />
          <span className="w-3 h-3 rounded-full bg-[#7ED957] border-2 border-[#2D2A32]" />
        </div>
        <p className="font-pixel text-[10px] tracking-[0.12em] text-[#2D2A32] uppercase">{title}</p>
        <span className="font-pixel text-[10px]">✦</span>
      </div>
      <div className="p-5 flex-1">{children}</div>
    </div>
  );
}
