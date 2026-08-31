import Link from "next/link";
import { cn } from "@/lib/cn";

export default function BubblyButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base = "inline-flex items-center justify-center gap-2 font-bold tracking-wide text-sm px-6 py-3 rounded-full border-2 border-[#2D2A32] transition-all duration-150";
  const styles = {
    primary: "bubbly-btn text-[#2D2A32]",
    secondary: "bg-white text-[#2D2A32] shadow-[3px_3px_0_#2D2A32] hover:shadow-[5px_5px_0_#2D2A32] hover:-translate-y-0.5",
    ghost: "bg-[#2D2A32] text-white shadow-[3px_3px_0_#A8D8EA] hover:shadow-[5px_5px_0_#A8D8EA] hover:-translate-y-0.5",
  }[variant];

  const classes = cn(base, styles, className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
