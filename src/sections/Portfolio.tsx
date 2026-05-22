"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/shared/ui";
import { ProjectRow } from "@/components/portfolio/ProjectRow";
import { PROJECTS, PROJECT_FILTERS } from "@/constants";
import { cn } from "@/lib/utils";

/**
 * Portfolio — the strongest section. Instead of small cards, each project is a
 * full-width, alternating case-study row with a large product mockup and
 * storytelling, in the style of premium agency showcases. A category filter
 * re-flows the list with layout animation; every row links to its dedicated
 * /work/[slug] case-study page.
 */
export function Portfolio() {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");

  const projects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected Work"
        title={
          <>
            15 products, <span className="text-gradient">one standard of quality.</span>
          </>
        }
        subtitle="Mobile apps, web platforms, and SaaS products built for founders and teams worldwide. Open any project for the full case study."
      />

      {/* Filter bar */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "relative rounded-full px-5 py-2 text-fluid-sm font-medium transition-colors",
              filter === f ? "text-white" : "text-ink-muted hover:text-ink"
            )}
          >
            {filter === f && (
              <motion.span
                layoutId="portfolio-pill"
                className="absolute inset-0 rounded-full bg-accent-gradient"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-16 flex flex-col gap-24 lg:gap-32">
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </motion.div>
    </Section>
  );
}
