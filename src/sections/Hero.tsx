"use client";

import { useRef } from "react";
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
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-hairline bg-glass px-4 py-1.5 text-fluid-sm text-ink-muted backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-accent-soft" />
            {siteConfig.role} · Available for select projects
          </motion.span>

          {/* Giant name */}
          <h1 className="font-display text-fluid-mega font-semibold leading-[0.92] tracking-tightest">
            <AnimatedHeadline text={siteConfig.name} className="text-gradient" delay={0.2} />
          </h1>

          {/* Rotating value proposition */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex h-[1.6em] items-center justify-center font-display text-fluid-xl font-medium text-ink"
          >
            <RotatingText phrases={HERO_ROTATING} />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-fluid-base leading-relaxed text-ink-muted"
          >
            Professional developer specializing in scalable apps, modern web systems,
            SaaS architectures, and premium UI/UX experiences.
          </motion.p>

          {/* Skills */}
          <motion.ul
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-fluid-sm font-medium text-ink-muted"
          >
            {HERO_SKILLS.map((skill, i) => (
              <li key={skill} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-accent-soft/60" />}
                {skill}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="#work" size="lg">
              View Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary" size="lg">
              Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
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
