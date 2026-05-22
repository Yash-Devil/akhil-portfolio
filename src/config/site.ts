/**
 * Centralised site metadata. Keeping contact details + URLs here means SEO
 * metadata, the navbar, the contact section and the footer never drift apart.
 */
export const siteConfig = {
  name: "Akhil Gupta",
  role: "App & Web Developer",
  tagline:
    "Professional developer specializing in scalable mobile apps, modern web platforms, SaaS systems, and premium UI/UX experiences.",
  url: "https://akhilgupta.dev",
  email: "hello@akhilgupta.dev",
  whatsapp: "https://wa.me/910000000000",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://x.com/",
    dribbble: "https://dribbble.com/",
  },
  keywords: [
    "Akhil Gupta",
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
