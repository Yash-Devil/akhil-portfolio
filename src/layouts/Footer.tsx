import Link from "next/link";
import { Github, Linkedin, Twitter, Dribbble, ArrowUpRight } from "lucide-react";
import { Container } from "@/shared/ui";
import { NAV_LINKS } from "@/constants";
import { siteConfig } from "@/config/site";

const socials = [
  { icon: Github, href: siteConfig.socials.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" },
  { icon: Dribbble, href: siteConfig.socials.dribbble, label: "Dribbble" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-hairline py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="#hero" className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-gradient text-sm font-bold text-white">
                AG
              </span>
              {siteConfig.name}
            </Link>
            <p className="max-w-xs text-fluid-sm leading-relaxed text-ink-muted">
              {siteConfig.role} building scalable mobile apps, web platforms, and
              premium SaaS products for clients worldwide.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-hairline text-ink-muted transition-all hover:-translate-y-0.5 hover:border-accent-violet/40 hover:text-ink"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-fluid-sm font-semibold text-ink">Navigation</h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fluid-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-fluid-sm font-semibold text-ink">Get in touch</h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-1 text-fluid-sm text-ink-muted transition-colors hover:text-ink"
            >
              {siteConfig.email}
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-fluid-sm text-ink-muted transition-colors hover:text-ink"
            >
              WhatsApp
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 sm:flex-row">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-faint">
            Built with Next.js, TypeScript, Tailwind &amp; Framer Motion.
          </p>
        </div>
      </Container>
    </footer>
  );
}
