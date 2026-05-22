"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Mounts Lenis for buttery, inertia-based smooth scrolling site-wide, and makes
 * in-page `/#section` links work from ANY route. On the homepage they smooth-
 * scroll; from /work or a case-study page the link navigates home first, then
 * this component scrolls to the target section once it has rendered. We disable
 * Lenis for users who prefer reduced motion so the experience stays accessible.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // Create Lenis once (it persists across client-side route changes).
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // After any navigation (and on first load), if the URL has a hash, scroll to
  // that section. This is what makes `Testimonials`, `Contact`, etc. work when
  // clicked from the /work pages — Next navigates home, then we land the scroll.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    // Wait a tick so the destination sections are mounted, then scroll. The
    // sections carry `scroll-mt-24`, so the fixed navbar offset is respected.
    const timer = window.setTimeout(() => {
      const el = document.querySelector(hash);
      if (!el) return;
      const lenis = lenisRef.current;
      if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -96, duration: 1.0 });
      } else {
        (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 140);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
