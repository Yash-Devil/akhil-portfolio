/**
 * Centralised site metadata. Keeping contact details + URLs here means SEO
 * metadata, the navbar, the contact section and the footer never drift apart.
 */
export const siteConfig = {
  name: "Akhil Gupta",
  /** Primary positioning — leads with the company he founded. */
  title: "Founder & CEO",
  role: "App & Web Developer",
  company: {
    name: "Abould",
    /** Short noun phrase used inline in copy. */
    kind: "software & IT company",
    /** One-liner for descriptions / SEO. */
    blurb:
      "a software & IT company building scalable mobile apps, web platforms, and SaaS products for clients worldwide.",
  },
  tagline:
    "Founder & CEO of Abould — a software & IT company building scalable mobile apps, modern web platforms, SaaS systems, and premium UI/UX experiences.",
  url: "https://akhilgupta.dev",
  email: "akhil@abould.com",
  whatsapp: "https://wa.me/919508734219",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/akhil-gupta-a219992b4",
    twitter: "https://x.com/",
    dribbble: "https://dribbble.com/",
  },
  keywords: [
    "Akhil Gupta",
    "Abould",
    "Abould founder",
    "Software company",
    "App Developer",
    "Web Developer",
    "Flutter Developer",
    "FlutterFlow",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "SaaS Developer",
    "Full Stack Developer",
    "UI/UX",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
