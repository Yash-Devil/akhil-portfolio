"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectRow } from "./ProjectRow";
import { PROJECTS, PROJECT_FILTERS } from "@/constants";
import { cn } from "@/lib/utils";

/**
 * The full work archive: a category filter that re-flows the complete project
 * list with layout animation. Each project is a full-width, alternating
 * case-study row that links to its dedicated /work/[slug] page. Rendered on the
 * /work route (the homepage only teases the featured four).
 */
export function WorkShowcase() {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");

  const projects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap justify-center gap-2">
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
                layoutId="work-pill"
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
    </>
  );
}
