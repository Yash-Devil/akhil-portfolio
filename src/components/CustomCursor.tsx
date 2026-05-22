"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/**
 * Custom animated cursor: a precise dot plus a lagging spring-driven ring that
 * grows when hovering interactive elements (the spotlight feel). Only enabled
 * on fine-pointer devices; touch users keep the native experience. Adds a body
 * class so global CSS hides the default cursor.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest("a, button, [role='button'], input, textarea, [data-cursor='hover']")
      );
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Center dot — tracks instantly. */}
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
            style={{ x, y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: hovering ? 0 : 1 }}
            exit={{ opacity: 0 }}
          />
          {/* Lagging ring — grows on hover. */}
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-soft/70"
            style={{ x: ringX, y: ringY }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              width: hovering ? 56 : 30,
              height: hovering ? 56 : 30,
              backgroundColor: hovering ? "rgba(8,148,115,0.12)" : "rgba(8,148,115,0)",
            }}
            exit={{ opacity: 0 }}
            transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
