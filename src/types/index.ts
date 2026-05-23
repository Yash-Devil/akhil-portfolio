import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

/** A single navigation entry used by the navbar + footer. */
export interface NavLink {
  label: string;
  href: string;
}

/** Service offering rendered as a premium card. */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

/** Technology badge in the tech-stack grid. */
export interface Tech {
  name: string;
  icon: IconType;
  /** Brand-accurate hex used for the hover glow. */
  color: string;
  category: "Frontend" | "Backend" | "Database";
}

/** Animated statistic. `suffix` lets us render "50+", "10+", etc. */
export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

export type ProjectCategory =
  | "Mobile App"
  | "Web Platform"
  | "SaaS"
  | "Full Stack";

export type ProjectStatus = "Live" | "In Development" | "Completed";

/** Platform labels surfaced as chips on cards + detail pages. */
export type Platform = "App" | "Web" | "Admin" | "SaaS" | "API";

/** A portfolio project — the richest data model in the app. */
export interface Project {
  id: string;
  /** URL slug for the dedicated case-study page (/work/[slug]). */
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  type: string;
  year: string;
  platforms: Platform[];
  overview: string;
  /** Storytelling blocks for the case-study page. */
  challenge: string;
  solution: string;
  outcome: string;
  features: string[];
  deliverables: string[];
  technologies: string[];
  status: ProjectStatus;
  /** Tailwind gradient classes for the project's signature accent. */
  accent: string;
  /**
   * Optional real product screenshot (path under /public). When set, the
   * showcase renders the image instead of the designed CSS mockup.
   */
  image?: string;
  /**
   * Public links for the project (live site, app stores, etc.). Surfaced as
   * chip CTAs on the case-study page. Omit for unreleased work.
   */
  links?: ProjectLink[];
}

export type ProjectLinkKind = "web" | "app-store" | "play-store";

export interface ProjectLink {
  kind: ProjectLinkKind;
  /** Short label like "Visit site" or "App Store". */
  label: string;
  url: string;
}

/** Client testimonial for the slider. */
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Two-letter initials used for the avatar monogram. */
  initials: string;
}

/** Trust / collaboration badge for the team section. */
export interface TrustItem {
  label: string;
  value: string;
}
