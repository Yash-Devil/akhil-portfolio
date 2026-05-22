"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";

/**
 * Consistent section header: an eyebrow label, a display title, and an
 * optional supporting line. Centralising this enforces the typographic
 * hierarchy (eyebrow → title → subtitle) across every section.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-hairline bg-mint px-4 py-1.5 text-fluid-sm font-medium tracking-wide text-ink-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-violet shadow-glow-sm" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="max-w-3xl font-display text-fluid-2xl font-semibold leading-[1.1] tracking-tight text-ink"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "max-w-2xl text-fluid-base leading-relaxed text-ink-muted",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
