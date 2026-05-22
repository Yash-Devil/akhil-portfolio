"use client";

import { motion } from "framer-motion";
import { Section, Counter } from "@/shared/ui";
import { STATS } from "@/constants";
import { staggerContainer, fadeUp, VIEWPORT } from "@/animations/variants";

/**
 * Stats band with scroll-triggered animated counters. Sits on a subtly
 * elevated, bordered surface to read as a distinct "proof" moment between
 * sections. Each figure counts up the first time it enters the viewport.
 */
export function Stats() {
  return (
    <Section className="py-16 sm:py-20 lg:py-24">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="relative overflow-hidden rounded-4xl border border-hairline bg-surface shadow-glow-sm px-6 py-12 sm:px-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <motion.div key={stat.id} variants={fadeUp} className="text-center lg:text-left">
              <p className="font-display text-fluid-3xl font-bold leading-none text-gradient">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-fluid-lg font-semibold text-ink">{stat.label}</p>
              <p className="mt-1 text-fluid-sm text-ink-muted">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
