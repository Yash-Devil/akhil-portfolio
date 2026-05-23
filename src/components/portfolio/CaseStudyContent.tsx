"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Boxes,
  Cpu,
  Layers,
  Globe,
  Apple,
  Play,
} from "lucide-react";
import { Container, Badge, Button } from "@/shared/ui";
import { ProjectMockup } from "./ProjectMockup";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";
import { cn } from "@/lib/utils";
import type { Project, ProjectLink } from "@/types";

const statusStyle: Record<Project["status"], string> = {
  Live: "border-emerald-600/25 bg-emerald-500/10 text-emerald-700",
  "In Development": "border-amber-600/25 bg-amber-500/10 text-amber-700",
  Completed: "border-sky-600/25 bg-sky-500/10 text-sky-700",
};

const linkIcon: Record<ProjectLink["kind"], typeof Globe> = {
  web: Globe,
  "app-store": Apple,
  "play-store": Play,
};

const story = (project: Project) => [
  { label: "The Challenge", body: project.challenge },
  { label: "The Solution", body: project.solution },
  { label: "The Outcome", body: project.outcome },
];

/**
 * Full case-study layout for a single project (rendered at /work/[slug]).
 * Cinematic header → large mockup → alternating challenge/solution/outcome
 * storytelling → features → tech → CTA + next project. Client component so the
 * scroll reveals run; data is passed in from the server page.
 */
export function CaseStudyContent({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  return (
    <article className="pb-24 pt-32 sm:pt-40">
      {/* Accent wash behind the header */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 -z-[1] h-[60vh] bg-gradient-to-b opacity-[0.12] blur-2xl",
          project.accent
        )}
      />

      <Container>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-fluid-sm text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={16} /> Back to work
        </Link>

        {/* Header — two-column on desktop: copy on the left, mockup on the right.
            This keeps the page rhythmic and stops the giant hero from dominating. */}
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <motion.header
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <span className="text-fluid-sm font-medium text-accent-soft">{project.category}</span>
              <span className="h-px w-6 bg-hairline" />
              <span className="text-fluid-sm text-ink-faint">{project.year}</span>
              <span
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide",
                  statusStyle[project.status]
                )}
              >
                {project.status}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-4 font-display text-fluid-2xl font-semibold leading-[1.05] tracking-tightest text-gradient sm:text-fluid-3xl"
            >
              {project.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 max-w-xl text-fluid-lg leading-snug text-ink-muted">
              {project.tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
              {project.platforms.map((p) => (
                <Badge key={p} className="border-accent-violet/25 bg-accent-violet/10 text-accent-soft">
                  {p}
                </Badge>
              ))}
            </motion.div>

            {/* Live links — surfaced prominently so visitors can jump straight to the product. */}
            {project.links && project.links.length > 0 && (
              <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
                {project.links.map((link) => {
                  const Icon = linkIcon[link.kind];
                  return (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 text-fluid-sm font-medium text-ink shadow-glow-sm transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                    >
                      <Icon size={15} className="text-accent-soft" />
                      {link.label}
                      <ArrowUpRight
                        size={14}
                        className="text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </a>
                  );
                })}
              </motion.div>
            )}
          </motion.header>

          {/* Hero mockup — sits beside the header copy, balanced not dominant. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <ProjectMockup project={project} />
          </motion.div>
        </div>

        {/* Overview + meta */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
            <h2 className="text-fluid-sm font-semibold uppercase tracking-[0.2em] text-ink-faint">
              Overview
            </h2>
            <p className="mt-4 text-fluid-lg leading-relaxed text-ink-muted">{project.overview}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="glass-panel rounded-3xl p-6"
          >
            <MetaRow icon={Layers} label="Type" value={project.type} />
            <MetaRow icon={Cpu} label="Tech" value={project.technologies.join(", ")} />
            <MetaRow
              icon={Boxes}
              label="Deliverables"
              value={project.deliverables.join(", ")}
            />
          </motion.div>
        </div>

        {/* Storytelling */}
        <div className="mt-20 flex flex-col gap-6">
          {story(project).map((block, i) => (
            <motion.div
              key={block.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="glass-panel grid gap-4 rounded-4xl p-7 sm:grid-cols-[200px_1fr] sm:p-9"
            >
              <div className="flex items-start gap-3">
                <span className="font-display text-fluid-xl font-bold text-gradient">
                  0{i + 1}
                </span>
                <h3 className="pt-1.5 font-display text-fluid-lg font-semibold text-ink">
                  {block.label}
                </h3>
              </div>
              <p className="text-fluid-base leading-relaxed text-ink-muted">{block.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="font-display text-fluid-xl font-semibold text-ink"
          >
            Key features
          </motion.h2>
          <motion.div
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {project.features.map((f) => (
              <motion.div
                key={f}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-hairline bg-glass p-5"
              >
                <CheckCircle2 size={18} className="shrink-0 text-accent-soft" />
                <span className="text-fluid-base text-ink">{f}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA + next */}
        <div className="mt-24 grid gap-6 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="glass-panel flex flex-col justify-between gap-6 rounded-4xl p-8"
          >
            <div>
              <h3 className="font-display text-fluid-xl font-semibold text-ink">
                Have a similar product in mind?
              </h3>
              <p className="mt-2 text-fluid-base text-ink-muted">
                Let&apos;s talk about how to build it.
              </p>
            </div>
            <Button href="/#contact" size="lg" className="self-start">
              Start a project <ArrowRight size={18} />
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
            <Link
              href={`/work/${next.slug}`}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-4xl border border-hairline bg-surface p-8 shadow-glow-sm transition-colors hover:border-accent/30"
            >
              <div
                className={cn(
                  "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-3xl",
                  next.accent
                )}
              />
              <span className="text-fluid-sm text-ink-faint">Next project</span>
              <div className="relative mt-6">
                <h3 className="font-display text-fluid-2xl font-semibold text-ink">{next.title}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-fluid-base text-accent-soft">
                  View case study
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </Container>
    </article>
  );
}

function MetaRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Layers;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3 border-b border-hairline py-3 last:border-0">
      <Icon size={16} className="mt-1 shrink-0 text-accent-soft" />
      <div>
        <p className="text-fluid-sm text-ink-faint">{label}</p>
        <p className="text-fluid-sm text-ink">{value}</p>
      </div>
    </div>
  );
}
