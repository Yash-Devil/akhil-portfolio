import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug } from "@/constants";
import { siteConfig } from "@/config/site";
import { CaseStudyContent } from "@/components/portfolio/CaseStudyContent";

// Pre-render every case study at build time (SSG) for instant loads + SEO.
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// Per-project metadata: unique title, description, and Open Graph entry.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  const title = `${project.title} — ${project.type}`;
  return {
    title,
    description: project.overview,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: project.overview,
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description: project.overview },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Wrap-around "next project" for continuous browsing.
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return <CaseStudyContent project={project} next={next} />;
}
