"use client";

import { useRef } from "react";
import { useSpring } from "framer-motion";

/**
 * Magnetic hover effect (advanced hover system): the element is gently pulled
 * toward the cursor while hovered, then springs back on leave. Springs give it
 * a natural, weighty feel rather than a linear slide.
 *
 * @param strength how far (px-ish factor) the element drifts toward the pointer
 */
export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(
  strength = 0.35
) {
  const ref = useRef<T>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x, y, onMouseMove, onMouseLeave };
}
