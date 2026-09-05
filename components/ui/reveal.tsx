"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** delay in seconds — use small increments (0.05–0.1) to stagger lists */
  delay?: number;
  /** initial vertical offset in px */
  y?: number;
  /** initial horizontal offset in px */
  x?: number;
  duration?: number;
  once?: boolean;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Smooth fade-and-rise scroll reveal. Subtle, respects prefers-reduced-motion,
 * and only animates once by default so the page settles after first scroll.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.85,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y, x: reduce ? 0 : x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "0px 0px -8% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
