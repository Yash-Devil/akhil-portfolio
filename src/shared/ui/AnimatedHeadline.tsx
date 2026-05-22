"use client";

import { motion } from "framer-motion";
import { staggerContainer, wordReveal } from "@/animations/variants";
import { cn } from "@/lib/utils";

/**
 * Splits a string into words and reveals them with a masked, staggered
 * upward slide — the cinematic headline entrance used in the hero. Each word
 * sits in an `overflow-hidden` wrapper so it appears to rise from behind a line.
 */
export function AnimatedHeadline({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      className={cn("inline-flex flex-wrap", className)}
      variants={staggerContainer(0.1, delay)}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="mr-[0.25em] overflow-hidden py-[0.05em]" aria-hidden>
          <motion.span variants={wordReveal} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
