"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeading } from "@/shared/ui";
import { TESTIMONIALS } from "@/constants";
import { cn } from "@/lib/utils";

/**
 * Testimonials — an animated slider with directional transitions. Tracks the
 * navigation direction so cards slide in/out the correct way, auto-advances
 * on a timer (paused implicitly by re-renders on manual nav), and exposes
 * dot + arrow controls.
 */
export function Testimonials() {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const count = TESTIMONIALS.length;

  const paginate = useCallback(
    (dir: number) => {
      setState(([prev]) => [(prev + dir + count) % count, dir]);
    },
    [count]
  );

  // Auto-advance every 6s.
  useEffect(() => {
    const t = setInterval(() => paginate(1), 6000);
    return () => clearInterval(t);
  }, [paginate]);

  const active = TESTIMONIALS[index];

  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title={
          <>
            Trusted by founders <span className="text-gradient">around the world.</span>
          </>
        }
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="glass-panel relative min-h-[18rem] overflow-hidden rounded-4xl p-8 sm:min-h-[16rem] sm:p-12">
          <Quote className="mb-6 text-accent-violet" size={40} />
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.id}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="text-fluid-lg font-medium leading-relaxed text-ink">
                “{active.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent-gradient font-display font-bold text-white shadow-glow-sm ring-2 ring-black/5">
                  {active.initials}
                </div>
                <div>
                  <p className="font-semibold text-ink">{active.name}</p>
                  <p className="text-fluid-sm text-ink-muted">
                    {active.role} · {active.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setState([i, i > index ? 1 : -1])}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-8 bg-accent-violet" : "w-2 bg-black/15 hover:bg-black/30"
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            {[ChevronLeft, ChevronRight].map((Icon, i) => (
              <button
                key={i}
                onClick={() => paginate(i === 0 ? -1 : 1)}
                aria-label={i === 0 ? "Previous" : "Next"}
                className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-ink-muted transition-all hover:border-accent-violet/40 hover:text-ink"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
