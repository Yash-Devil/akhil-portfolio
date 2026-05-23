"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, ArrowDown } from "lucide-react";
import { Container, MagneticButton, AnimatedHeadline, RotatingText } from "@/shared/ui";
import { HERO_SKILLS, HERO_ROTATING } from "@/constants";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer } from "@/animations/variants";

// Deterministic particle positions — fixed array prevents hydration mismatch.
const PARTICLES = [
  { x: 12, y: 22, s: 3, d: 0 },
  { x: 84, y: 16, s: 2, d: 1.2 },
  { x: 68, y: 70, s: 4, d: 0.6 },
  { x: 24, y: 78, s: 2, d: 1.8 },
  { x: 47, y: 12, s: 3, d: 0.9 },
  { x: 92, y: 54, s: 2, d: 2.1 },
  { x: 8, y: 56, s: 3, d: 1.5 },
  { x: 58, y: 40, s: 2, d: 0.3 },
  { x: 36, y: 60, s: 2, d: 2.4 },
  { x: 76, y: 32, s: 3, d: 1.0 },
];

/**
 * Hero — a cinematic fullscreen opener. Mouse movement drives a subtle parallax
 * on the gradient blobs (springed for weight); the headline reveals per-word;
 * a rotating value-prop line cycles; CTAs are magnetic. All entrance motion is
 * one orchestrated stagger timeline.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  // Two parallax depths for layered blob movement.
  const blobAX = useTransform(sx, [-0.5, 0.5], [-40, 40]);
  const blobAY = useTransform(sy, [-0.5, 0.5], [-30, 30]);
  const blobBX = useTransform(sx, [-0.5, 0.5], [30, -30]);
  const blobBY = useTransform(sy, [-0.5, 0.5], [24, -24]);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Parallax blobs — soft peach + emerald on the light canvas */}
      <motion.div
        style={{ x: blobAX, y: blobAY }}
        className="pointer-events-none absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-[#FFD3CB]/50 blur-[120px] sm:h-96 sm:w-96"
      />
      <motion.div
        style={{ x: blobBX, y: blobBY }}
        className="pointer-events-none absolute right-[6%] bottom-[12%] h-72 w-72 rounded-full bg-accent-blue/15 blur-[120px] sm:h-96 sm:w-96"
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute rounded-full bg-accent/40"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 5 + p.d, repeat: Infinity, ease: "easeInOut", delay: p.d }}
        />
      ))}

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
        >
          {/* LEFT — text column. Centered on mobile, left-aligned on desktop. */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.span
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-glass px-4 py-1.5 text-fluid-sm text-ink-muted backdrop-blur-xl"
            >
              <Sparkles size={14} className="text-accent-soft" />
              {siteConfig.title} of {siteConfig.company.name}
            </motion.span>

            {/* Giant name */}
            <h1 className="font-display text-fluid-mega font-semibold leading-[0.95] tracking-tightest">
              <AnimatedHeadline text={siteConfig.name} className="text-gradient" delay={0.2} />
            </h1>

            {/* Rotating value proposition */}
            <motion.div
              variants={fadeUp}
              className="mt-5 flex min-h-[2.4em] w-full max-w-full items-center justify-center px-2 font-display text-fluid-lg font-medium leading-tight text-ink sm:min-h-[1.8em] sm:text-fluid-xl lg:justify-start lg:px-0"
            >
              <RotatingText phrases={HERO_ROTATING} />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-fluid-base leading-relaxed text-ink-muted"
            >
              Founder &amp; CEO of {siteConfig.company.name} — building scalable apps, modern
              web systems, SaaS architectures, and premium UI/UX experiences for clients
              worldwide.
            </motion.p>

            {/* Skills */}
            <motion.ul
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-fluid-sm font-medium text-ink-muted lg:justify-start"
            >
              {HERO_SKILLS.map((skill, i) => (
                <li key={skill} className="flex items-center gap-3">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-accent-soft/60" />}
                  {skill}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <MagneticButton href="/#work" size="lg">
                View Projects
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton href="/#contact" variant="secondary" size="lg">
                Contact Me
              </MagneticButton>
            </motion.div>
          </div>

          {/* RIGHT — large portrait with halos, floating chips, gentle float. */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
          >
            {/* Layered halos — emerald + peach wash behind the photo */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-accent/30 via-accent-blue/20 to-peach/30 opacity-80 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-2 rounded-[3rem] bg-gradient-to-br from-mint/40 via-transparent to-peach/40 blur-2xl"
            />

            {/* Floating frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Photo — no white frame, just a transparent rounded crop so
                  the portrait floats with only the halos behind it for depth.
                  The aspect-square parent gives Next/Image fill a concrete box. */}
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/images/profile/akhil.png"
                  alt={`${siteConfig.name} — ${siteConfig.title}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 450px, 540px"
                  className="object-cover drop-shadow-[0_28px_60px_rgba(8,148,115,0.30)]"
                  priority
                />
              </div>

              {/* Floating availability chip — bottom-left. Positions stay
                  inside or just outside the photo edge so it never clips on
                  narrow viewports (the page already guards horizontal scroll). */}
              <div className="absolute -bottom-3 left-2 flex items-center gap-2 rounded-full border border-hairline bg-surface/95 px-3 py-1.5 shadow-glow-sm backdrop-blur-xl sm:-bottom-5 sm:left-6 sm:px-4 sm:py-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500" />
                </span>
                <span className="text-fluid-sm font-medium text-ink">Available</span>
                <span className="hidden text-fluid-sm font-medium text-ink sm:inline">for projects</span>
              </div>

              {/* Floating stat chip — top-right */}
              <div className="absolute -right-2 -top-2 flex items-center gap-2 rounded-2xl border border-hairline bg-surface/95 px-3 py-1.5 shadow-glow-sm backdrop-blur-xl sm:-right-4 sm:-top-4 sm:py-2">
                <span className="font-display text-fluid-lg font-semibold text-gradient">5+</span>
                <span className="text-fluid-sm text-ink-muted">years</span>
                <span className="hidden text-fluid-sm text-ink-muted sm:inline">building</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.a
        href="/#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-faint"
      >
        <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
