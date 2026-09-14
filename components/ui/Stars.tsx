"use client";

import { cn } from "@/lib/utils";

/**
 * Sebaran bintang sparkle hiasan (ala ikon sparkle HIMTIKA).
 * Hanya dekorasi: selalu pasang dengan aria-hidden + pointer-events-none
 * dari sisi pemakai, opacity rendah, di sudut section.
 */
export default function Stars({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <path
        d="M40 0C42 22 50 30 72 32C50 34 42 42 40 64C38 42 30 34 8 32C30 30 38 22 40 0Z"
        fill="#FC75A7"
        opacity="0.9"
      />
      <path
        d="M160 60C161.5 73 167 78.5 180 80C167 81.5 161.5 87 160 100C158.5 87 153 81.5 140 80C153 78.5 158.5 73 160 60Z"
        fill="#FFF4C6"
        opacity="0.9"
      />
      <path
        d="M95 130C96 141 101 146 112 147C101 148 96 153 95 164C94 153 89 148 78 147C89 146 94 141 95 130Z"
        fill="#FFFFFF"
        opacity="0.7"
      />
      <path
        d="M170 150C170.8 157 174 160.2 181 161C174 161.8 170.8 165 170 172C169.2 165 166 161.8 159 161C166 160.2 169.2 157 170 150Z"
        fill="#FC75A7"
        opacity="0.6"
      />
      <path
        d="M20 110C20.8 117 24 120.2 31 121C24 121.8 20.8 125 20 132C19.2 125 16 121.8 9 121C16 120.2 19.2 117 20 110Z"
        fill="#FFF4C6"
        opacity="0.6"
      />
    </svg>
  );
}
