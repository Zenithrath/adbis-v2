"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// SSR-safe: server selalu false sehingga HTML server & client pertama identik
// (mencegah hydration mismatch), lalu tersinkronisasi setelah mount.
export default function useSafeReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
