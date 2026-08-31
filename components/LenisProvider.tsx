"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
      smoothWheel: true,
      gestureOrientation: "vertical",
    });

    // expose for ScrollTrigger if needed
    // @ts-expect-error global
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
