"use client";

import { useRef, useCallback } from "react";
import { useMotionValue } from "framer-motion";

/**
 * Tracks the pointer position *relative to a target element* and exposes it as
 * Framer motion values. Used by the spotlight cards (Services, Portfolio) to
 * drive a radial glow that follows the cursor. Motion values avoid React
 * re-renders on every mousemove, so this stays cheap even on large grids.
 */
export function useMousePosition<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  return { ref, mouseX, mouseY, onMouseMove };
}
