"use client";

import { motion, useMotionTemplate } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";

/**
 * Advanced hover system: a glass card with a radial "spotlight" that tracks the
 * cursor. The glow is rendered via a motion-driven background so it updates
 * without React re-renders. Used by Services and the Portfolio grid.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(8,148,115,0.14)",
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) {
  const { ref, mouseX, mouseY, onMouseMove } = useMousePosition<HTMLDivElement>();

  const background = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 70%)`;

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-hairline bg-surface shadow-glow-sm transition-colors duration-300 hover:border-accent/30",
        className
      )}
    >
      {/* Spotlight layer — fades in only while hovered. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
