"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/shared/ui";
import { ProjectMockup } from "./ProjectMockup";
import { fadeUp, VIEWPORT } from "@/animations/variants";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const statusStyle: Record<Project["status"], string> = {
  Live: "border-emerald-600/25 bg-emerald-500/10 text-emerald-700",
  "In Development": "border-amber-600/25 bg-amber-500/10 text-amber-700",
  Completed: "border-sky-600/25 bg-sky-500/10 text-sky-700",
};

/**
 * A full-width case-study row in the agency style: large product mockup on one
 * side, storytelling on the other, alternating sides by index. The whole row is
 * a link to the dedicated /work/[slug] page; the mockup zooms slightly on hover.
 */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        data-cursor="hover"
      >
        {/* Visual */}
        <div className={cn("relative", reversed && "lg:order-2")}>
          <div className="overflow-hidden rounded-3xl transition-transform duration-500 group-hover:scale-[1.02]">
            <ProjectMockup project={project} />
          </div>
        </div>

        {/* Story */}
        <div className={cn(reversed && "lg:order-1")}>
          <div className="flex items-center gap-3">
            <span className="text-fluid-sm font-medium text-accent-soft">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-hairline" />
            <span className="text-fluid-sm text-ink-faint">{project.category}</span>
            <span
              className={cn(
                "ml-auto rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide",
                statusStyle[project.status]
              )}
            >
              {project.status}
            </span>
          </div>

          <h3 className="mt-4 font-display text-fluid-2xl font-semibold leading-tight tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-2 text-fluid-lg text-ink-muted">{project.tagline}</p>
          <p className="mt-4 max-w-xl text-fluid-base leading-relaxed text-ink-muted">
            {project.overview}
          </p>

          {/* Platform labels */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.platforms.map((p) => (
              <Badge key={p} className="border-accent-violet/25 bg-accent-violet/10 text-accent-soft">
                {p}
              </Badge>
            ))}
            {project.technologies.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <span className="mt-7 inline-flex items-center gap-2 text-fluid-base font-medium text-ink transition-colors group-hover:text-accent-soft">
            View case study
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
