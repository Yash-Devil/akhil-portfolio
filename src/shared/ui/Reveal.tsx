"use client";

import { motion } from "framer-motion";
import { fadeUp, VIEWPORT } from "@/animations/variants";
import type { Variants } from "framer-motion";

/**
 * Scroll-reveal primitive. Wrap any block to fade + lift it into view once.
 * Defaults to `fadeUp` but accepts custom variants and a delay so callers can
 * orchestrate sequences without re-writing the IntersectionObserver logic.
 */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "span" | "li";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
