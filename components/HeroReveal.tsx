"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroReveal() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Logo entrance
      tl.from(".hero-logo", {
        scale: 0.6,
        opacity: 0,
        duration: 0.9,
        ease: "back.out(1.7)",
      })
        // Name entrance
        .from(
          ".hero-name",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        // Tagline — word by word
        .from(
          ".hero-tagline-word",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
          },
          "-=0.3"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const tagline = "Kabinet Sentra Nawasena 2026";

  return (
    <div ref={rootRef} className="flex flex-col items-center gap-6">
      {/* Logo / Emblem */}
      <div className="hero-logo flex h-28 w-28 items-center justify-center rounded-full bg-violet/10 ring-4 ring-violet/20">
        <span className="serif-display text-5xl text-violet">N</span>
      </div>

      {/* Name */}
      <h1 className="hero-name text-center">
        <span className="serif-display block text-5xl leading-tight tracking-tight text-ink md:text-7xl">
          HMPS Administrasi
        </span>
        <span className="serif-display block text-5xl leading-tight tracking-tight text-violet md:text-7xl">
          Bisnis
        </span>
      </h1>

      {/* Tagline — word by word */}
      <p className="hero-tagline font-accent text-lg tracking-wide text-ink/60 md:text-xl">
        {tagline.split(" ").map((word, i) => (
          <span key={i} className="hero-tagline-word mr-2 inline-block">
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}
