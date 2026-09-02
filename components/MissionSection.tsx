"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mission-word", {
        x: -100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-start px-10 md:px-20"
      style={{ background: "#5B21B6" }}
    >
      <div className="max-w-3xl">
        <h2 className="font-accent text-[2.5rem] leading-[0.9] font-black uppercase text-white md:text-[4rem] lg:text-[5rem]">
          <span className="block mission-word">We Take</span>
          <span className="block mission-word">The Other</span>
          <span className="block mission-word">Path</span>
        </h2>
      </div>
    </section>
  );
}
