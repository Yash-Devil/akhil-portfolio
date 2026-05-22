import type { Variants } from "framer-motion";

/**
 * Centralised motion language. Defining variants once keeps the animation
 * feel consistent across every section and makes timing easy to tune globally.
 * We favour short, eased transforms (opacity + small translate) over flashy
 * motion — premium products move with restraint.
 */

// A custom cubic-bezier that feels expensive: quick start, soft settle.
export const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

/**
 * Container that staggers its children — pair with `fadeUp` items for the
 * cascading reveal used on cards, lists, and the hero.
 */
export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

// Per-word reveal for the animated hero headline.
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

// Shared viewport config so reveals trigger at a natural scroll position.
export const VIEWPORT = { once: true, margin: "-80px" } as const;
