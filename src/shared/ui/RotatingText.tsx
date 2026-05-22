"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Cycles through a list of phrases with a masked vertical swap. Used for the
 * hero's value-proposition line. Interval is paused while the tab is hidden via
 * the browser throttling rAF/timers, so it stays cheap in the background.
 */
export function RotatingText({
  phrases,
  interval = 2600,
  className,
}: {
  phrases: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval, phrases.length]);

  return (
    <span className={cn("relative flex max-w-full justify-center overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-gradient-accent inline-block max-w-full text-balance text-center"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
