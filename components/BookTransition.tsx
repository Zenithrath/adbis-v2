"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BookTransitionProps {
  coverColor?: string;
  pageColor?: string;
  bgTargetColor?: string;
}

export default function BookTransition({
  coverColor = "var(--color-cream)",
  pageColor = "var(--color-cream)",
  bgTargetColor = "var(--color-purple)",
}: BookTransitionProps) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scene = sceneRef.current;
      if (!scene) return;

      const cover = scene.querySelector<HTMLElement>(".book-cover");
      const page = scene.querySelector<HTMLElement>(".book-page");
      const bgLayer = scene.querySelector<HTMLElement>(".book-bg-crossfade");
      const aboutContent = scene.querySelector<HTMLElement>(".book-about-content");

      if (!cover || !page || !bgLayer || !aboutContent) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scene,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // Phase 1: Cover rotates open (spine-left, rotateY -115°)
      tl.to(cover, {
        rotateY: -115,
        duration: 0.5,
        ease: "power2.inOut",
      });

      // Phase 2: Page scales to fill viewport while cover rotates
      tl.to(
        page,
        {
          scale: 1.5,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );

      // Phase 3: Background crossfade cream → purple
      tl.to(
        bgLayer,
        {
          opacity: 1,
          duration: 0.3,
          ease: "none",
        },
        "-=0.2"
      );

      // Phase 4: Cover fades
      tl.to(
        cover,
        {
          opacity: 0,
          duration: 0.2,
          ease: "none",
        },
        "<"
      );

      // Phase 5: About content fades in
      tl.fromTo(
        aboutContent,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.1"
      );
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sceneRef}
      className="book-scene relative h-screen w-full"
      style={{ background: coverColor }}
    >
      {/* Background crossfade layer */}
      <div
        className="book-bg-crossfade absolute inset-0 z-[1] opacity-0"
        style={{ background: bgTargetColor }}
      />

      {/* Page layer (behind cover) */}
      <div
        className="book-page flex items-center justify-center"
        style={{ background: pageColor }}
      >
        <div className="text-center text-ink/30">
          <span className="font-accent text-sm uppercase tracking-widest">
            next chapter
          </span>
        </div>
      </div>

      {/* Cover layer (on top, rotates open) */}
      <div
        className="book-cover flex items-center justify-center"
        style={{
          background: coverColor,
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="text-center">
          <span className="serif-display block text-4xl text-violet md:text-6xl">
            Tentang Kami
          </span>
          <span className="mt-4 block font-accent text-sm uppercase tracking-[0.3em] text-ink/50">
            Buka →
          </span>
        </div>
      </div>

      {/* About content (fades in after cover opens) */}
      <div className="book-about-content absolute inset-0 z-[4] flex items-center justify-center opacity-0">
        <div className="max-w-2xl px-8 text-center">
          <h2 className="serif-display text-4xl text-ink md:text-6xl">
            Tentang Kami
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink/70">
            Himpunan Mahasiswa Program Studi Administrasi Bisnis adalah wadah
            pengembangan diri mahasiswa yang berkomitmen untuk menciptakan kader
            visioner dan berdaya saing.
          </p>
        </div>
      </div>
    </div>
  );
}
