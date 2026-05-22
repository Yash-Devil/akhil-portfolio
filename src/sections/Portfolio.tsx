import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Button } from "@/shared/ui";
import { ProjectRow } from "@/components/portfolio/ProjectRow";
import { FEATURED_PROJECTS, PROJECTS } from "@/constants";

/**
 * Portfolio (homepage) — a curated teaser, not the full archive. We show the
 * four featured projects as full-width, alternating case-study rows with large
 * product mockups, then send visitors to the dedicated /work page for the
 * complete list. Every row links to its own /work/[slug] case study.
 */
export function Portfolio() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected Work"
        title={
          <>
            Featured projects, <span className="text-gradient">one standard of quality.</span>
          </>
        }
        subtitle="A selection of mobile apps, web platforms, and SaaS products built for founders and teams worldwide. Open any project for the full case study."
      />

      <div className="mt-16 flex flex-col gap-24 lg:gap-32">
        {FEATURED_PROJECTS.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* View-all CTA → full work archive */}
      <div className="mt-20 flex flex-col items-center gap-4 text-center">
        <p className="text-fluid-base text-ink-muted">
          Explore all {PROJECTS.length} projects across mobile, web &amp; SaaS.
        </p>
        <Button href="/work" size="lg">
          View all projects
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Section>
  );
}
