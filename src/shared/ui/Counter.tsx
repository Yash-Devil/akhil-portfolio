"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";

/**
 * Scroll-triggered animated number. Owns its own `useInView` so it can be
 * dropped anywhere; delegates the tween to `useCounter`.
 */
export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const display = useCounter(value, inView);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
