"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Refs = {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  taglineRef: React.RefObject<HTMLDivElement | null>;
  halfPanelRef: React.RefObject<HTMLDivElement | null>;
  prokerLayerRef: React.RefObject<HTMLDivElement | null>;
  prokerContentRef: React.RefObject<HTMLDivElement | null>;
};

export function usePinnedStorytelling(refs: Refs, setActiveProgram: React.Dispatch<React.SetStateAction<number>>) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-svg-sentra", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      gsap.fromTo(".hero-svg-nawasena", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      gsap.set(refs.prokerLayerRef.current, { yPercent: 100 });
      gsap.set(".tagline-word", { opacity: 0, x: -50 });
      gsap.set(".half-word", { opacity: 0, x: -50 });

      const pinnedTl = gsap.timeline({
        scrollTrigger: {
          trigger: refs.wrapperRef.current,
          start: "top top",
          end: "+=800%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress > 0.5) {
              const p = (self.progress - 0.5) / 0.5;
              const idx = Math.min(3, Math.floor(p * 4));
              setActiveProgram((prev) => (prev !== idx ? idx : prev));
            }
          },
        },
      });

      pinnedTl
        .fromTo(refs.taglineRef.current, { x: "-100%" }, { x: "0%", ease: "none", duration: 4 })
        .to(".tagline-word", { opacity: 1, x: 0, stagger: 0.8, ease: "power2.out", duration: 3 })
        .to({}, { duration: 4 })
        .fromTo(refs.halfPanelRef.current, { x: "-100%" }, { x: "0%", ease: "none", duration: 4 })
        .to(".half-word", { opacity: 1, x: 0, stagger: 0.8, ease: "power2.out", duration: 3 })
        .to({}, { duration: 4 })
        .fromTo(refs.prokerLayerRef.current, { yPercent: 100 }, { yPercent: 0, ease: "power2.inOut", duration: 5 })
        .to({}, { duration: 1 })
        .to(
          refs.prokerContentRef.current,
          {
            y: () => -(refs.prokerContentRef.current!.scrollHeight - refs.prokerContentRef.current!.parentElement!.clientHeight),
            ease: "none",
            duration: 16,
          }
        )
        .to({}, { duration: 2 });
    });
    return () => ctx.revert();
  }, [refs, setActiveProgram]);
}
