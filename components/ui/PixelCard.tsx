import { cn } from "@/lib/cn";

export default function PixelCard({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={cn("pixel-window rounded-[20px] p-0 overflow-hidden bg-white", hover && "hover:translate-y-[-2px] hover:shadow-[8px_8px_0_#2D2A32] transition-all duration-200", className)}>
      {children}
    </div>
  );
}
