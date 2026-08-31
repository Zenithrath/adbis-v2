"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HorizontalScroll({
  children,
  title,
  subtitle,
  dark = false,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateMaxScroll = () => {
      const max = container.scrollWidth - container.clientWidth;
      setMaxScroll(max > 0 ? max : 0);
    };

    updateMaxScroll();
    const observer = new ResizeObserver(updateMaxScroll);
    observer.observe(container);
    window.addEventListener("resize", updateMaxScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateMaxScroll);
    };
  }, []);

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollX(e.currentTarget.scrollLeft);
  };

  const showLeftArrow = scrollX > 20;
  const showRightArrow = scrollX < maxScroll - 20;

  return (
    <section className="relative py-10 sm:py-16">
      {(title || subtitle) && (
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pb-8">
          {title && (
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-black text-xs tracking-[0.08em] border-2 ${dark ? "bg-white text-[#2d2a32] border-[#2d2a32] shadow-[3px_3px_0_#fff9c4]" : "bg-[#2d2a32] text-white border-[#2d2a32]"}`}>
              <span className="w-2 h-2 rounded-full animate-pulse bg-[#ff9ebb]" /> {title}
            </div>
          )}
          {subtitle && <h3 className={`mt-3 syne-black text-2xl sm:text-3xl leading-none ${dark ? "text-white" : "text-[#2d2a32]"}`}>{subtitle}</h3>}
        </div>
      )}

      <div className="relative">
        {/* Left arrow */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-10 z-20 w-12 h-12 bg-white/90 backdrop-blur border-2 border-[#2d2a32] rounded-full flex items-center justify-center shadow-[4px_4px_0_#2d2a32] hover:shadow-[6px_6px_0_#2d2a32] hover:-translate-y-1/2 hover:-translate-x-5 transition-all duration-200 text-[#2d2a32]"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
        )}

        {/* Right arrow */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-10 z-20 w-12 h-12 bg-white/90 backdrop-blur border-2 border-[#2d2a32] rounded-full flex items-center justify-center shadow-[4px_4px_0_#2d2a32] hover:shadow-[6px_6px_0_#2d2a32] hover:translate-y-[-50%] hover:translate-x-5 transition-all duration-200 text-[#2d2a32]"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        )}

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-4 sm:gap-5 pb-4 w-max snap-center">
            {children}
          </div>
        </div>

        {/* Scroll indicator dots */}
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-4 flex justify-center gap-1.5">
          {React.Children.toArray(children).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const container = containerRef.current;
                if (container) {
                  const cardWidth = 320 + 20; // card width + gap
                  container.scrollTo({ left: i * cardWidth, behavior: "smooth" });
                }
              }}
              className={`w-2 h-2 rounded-full transition-all ${i === Math.round(scrollX / 340) ? "w-6 bg-[#ff9ebb]" : "bg-white/30 hover:bg-white/50"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HScrollCard({
  children,
  className,
  width = "320px",
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  width?: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`shrink-0 snap-center snap-always pixel-window rounded-[24px] overflow-hidden ${className ?? ""}`}
      style={{ width, minWidth: width, minHeight: "400px" }}
    >
      {children}
    </motion.div>
  );
}