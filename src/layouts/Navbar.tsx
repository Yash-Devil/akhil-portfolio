"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { siteConfig } from "@/config/site";
import { Button } from "@/shared/ui";
import { cn } from "@/lib/utils";

/**
 * Fixed navbar that turns into a frosted glass bar once the user scrolls — a
 * cue used by Linear/Vercel that keeps the hero clean but improves legibility
 * over content. Collapses into an animated sheet on mobile.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed inset-x-0 top-0 z-50 pt-4"
    >
      {/* Same max-width + gutters as every Section's Container, so the navbar
          aligns perfectly with the page content below it. */}
      <div className="relative mx-auto w-full max-w-container container-px">
      <nav
        className={cn(
          "flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5",
          scrolled
            ? "glass-panel shadow-[0_8px_30px_-12px_rgba(15,42,36,0.18)]"
            : "border border-transparent"
        )}
      >
        <Link
          href="/#hero"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full shadow-glow-sm ring-2 ring-accent/20">
            <Image
              src="/images/profile/akhil.png"
              alt="Akhil Gupta"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-2 text-fluid-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="/#contact" size="md">
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-hairline text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile sheet — insets match the container gutters so it lines up with the bar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-5 top-[calc(100%+0.6rem)] z-40 rounded-2xl glass-panel p-4 sm:inset-x-8 lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-fluid-base text-ink-muted transition-colors hover:bg-mint hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href="/#contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Let&apos;s Talk
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.header>
  );
}
