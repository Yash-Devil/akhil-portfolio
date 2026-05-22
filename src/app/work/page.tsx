import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/shared/ui";
import { WorkShowcase } from "@/components/portfolio/WorkShowcase";
import { PROJECTS } from "@/constants";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Work — Selected Projects",
  description: `Explore all ${PROJECTS.length} projects by ${siteConfig.name} — mobile apps, web platforms, and SaaS products built for founders and teams worldwide.`,
  openGraph: {
    title: `Work | ${siteConfig.name}`,
    description: `All ${PROJECTS.length} projects across mobile, web & SaaS.`,
    type: "website",
  },
};

/**
 * The full work archive page (/work). Lists every project as a filterable
 * case-study row; the homepage only teases the featured four and links here.
 */
export default function WorkPage() {
  return (
    <article className="pb-24 pt-32 sm:pt-40">
      <Container>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-fluid-sm text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-fluid-sm font-medium uppercase tracking-[0.2em] text-accent-soft">
            Selected Work
          </p>
          <h1 className="mt-4 font-display text-fluid-3xl font-semibold leading-[1.02] tracking-tightest text-ink">
            {PROJECTS.length} products,{" "}
            <span className="text-gradient">one standard of quality.</span>
          </h1>
          <p className="mt-5 text-fluid-lg leading-relaxed text-ink-muted">
            Mobile apps, web platforms, and SaaS products built for founders and
            teams worldwide. Open any project for the full case study.
          </p>
        </header>

        <div className="mt-14">
          <WorkShowcase />
        </div>
      </Container>
    </article>
  );
}
