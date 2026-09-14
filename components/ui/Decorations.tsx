"use client";

import { cn } from "@/lib/utils";

/** Sparkle 4-point star, satu warna solid */
function Sparkle({
  className,
  color = "#FC75A7",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <path
        d="M12 0C13.2 6.8 16 9.6 22.8 10.8C16 12 13.2 14.8 12 21.6C10.8 14.8 8 12 1.2 10.8C8 9.6 10.8 6.8 12 0Z"
        fill={color}
      />
    </svg>
  );
}

/** Diamond — kotak miring solid */
function Diamond({
  className,
  color = "#FFF4C6",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <rect
        x="10"
        y="0"
        width="14"
        height="14"
        rx="2"
        transform="rotate(45 10 0)"
        fill={color}
      />
    </svg>
  );
}

/** Ring — lingkaran outline */
function Ring({
  className,
  color = "#FC75A7",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2.5" />
    </svg>
  );
}

/** Dots — 3 titik sejajar */
function Dots({
  className,
  color = "#FFF4C6",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 8"
      fill="none"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="2.5" fill={color} />
      <circle cx="12" cy="4" r="2.5" fill={color} />
      <circle cx="20" cy="4" r="2.5" fill={color} />
    </svg>
  );
}

/** Plus — tanda tambah */
function Plus({
  className,
  color = "#FC75A7",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <rect x="8.5" y="2" width="3" height="16" rx="1.5" fill={color} />
      <rect x="2" y="8.5" width="16" height="3" rx="1.5" fill={color} />
    </svg>
  );
}

/** DotGrid — pola polkadot (halftone) untuk backdrop sudut section */
function DotGrid({
  className,
  color = "#FFF4C6",
  rows = 5,
  cols = 8,
}: {
  className?: string;
  color?: string;
  rows?: number;
  cols?: number;
}) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={8 + c * 14}
          cy={8 + r * 14}
          r="3.2"
          fill={color}
        />
      );
    }
  }
  return (
    <svg
      viewBox={`0 0 ${8 * 2 + (cols - 1) * 14} ${8 * 2 + (rows - 1) * 14}`}
      fill="none"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      {dots}
    </svg>
  );
}

export { Sparkle, Diamond, Ring, Dots, Plus, DotGrid };
