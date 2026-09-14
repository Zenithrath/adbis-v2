function toRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function toHex(r: number, g: number, b: number): string {
  const c = (v: number) =>
    Math.round(Math.min(255, Math.max(0, v)))
      .toString(16)
      .padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`;
}

export function luminance(hex: string): number {
  const [r, g, b] = toRgb(hex).map((v) => v / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Warna departemen sering terlalu gelap untuk teks di atas background navy
 * (mis. Medinfo #454ADE). Kalau gelap, campur ke putih 55% agar kontras.
 */
export function deptTextOnDark(hex: string): string {
  if (hex.toUpperCase() === "#FFFBEB") return "#F9A8D4";
  if (luminance(hex) >= 0.3) return hex;
  const [r, g, b] = toRgb(hex);
  const t = 0.55;
  return toHex(r + (255 - r) * t, g + (255 - g) * t, b + (255 - b) * t);
}

/** Warna teks di atas background warna departemen (badge/pill). */
export function deptOnColor(hex: string): string {
  return luminance(hex) > 0.45 ? "#1A1B41" : "#FFFBEB";
}
