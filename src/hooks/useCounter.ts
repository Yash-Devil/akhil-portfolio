"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";

/**
 * Counts from 0 → `target` when `active` flips true (driven by the consuming
 * component's `useInView`). Uses Framer's rAF-based `animate` with an ease-out
 * curve so the numbers decelerate naturally. Returns the current display value.
 */
export function useCounter(target: number, active: boolean, duration = 1.8) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.floor(v)),
    });
    return () => controls.stop();
  }, [active, target, duration]);

  return value;
}
