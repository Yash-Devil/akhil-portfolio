"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeading } from "@/shared/ui";
import { TECH_STACK, TECH_CATEGORIES } from "@/constants";
import { staggerContainer, scaleIn, VIEWPORT } from "@/animations/variants";
import { cn } from "@/lib/utils";

/**
 * Tech stack with a category filter. Each badge lights up with its brand colour
 * on hover (advanced hover system) via an inline CSS variable, so the glow is
 * accurate per technology without a class per brand.
 */
export function TechStack() {
  const [active, setActive] = useState<string>("All");
  const filters = ["All", ...TECH_CATEGORIES];

  const visible =
    active === "All"
      ? TECH_STACK
      : TECH_STACK.filter((t) => t.category === active);

  return (
    <Section id="stack">
      <SectionHeading
        eyebrow="Tech Stack"
        title={
          <>
            A modern toolkit, <span className="text-gradient">used in production.</span>
          </>
        }
        subtitle="The technologies behind every project — chosen for performance, scalability, and developer velocity."
      />

      {/* Filter tabs */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "relative rounded-full px-5 py-2 text-fluid-sm font-medium transition-colors",
              active === f ? "text-white" : "text-ink-muted hover:text-ink"
            )}
          >
            {active === f && (
              <motion.span
                layoutId="tech-pill"
                className="absolute inset-0 rounded-full bg-accent-gradient"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </div>

      <motion.div
        layout
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
      >
        <AnimatePresence mode="popLayout">
          {visible.map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              layout
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              style={{ ["--brand" as string]: color }}
              className="group relative flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-surface shadow-glow-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand)]/40"
            >
              {/* Brand glow on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: `0 14px 40px -16px ${color}` }}
              />
              <Icon
                size={34}
                className="relative transition-transform duration-300 group-hover:scale-110"
                style={{ color }}
              />
              <span className="relative text-fluid-sm font-medium text-ink-muted transition-colors group-hover:text-ink">
                {name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
