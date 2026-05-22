"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Globe2, Clock } from "lucide-react";
import { Section, Reveal } from "@/shared/ui";
import { TRUST_ITEMS, INDUSTRIES } from "@/constants";
import { staggerContainer, fadeUp, VIEWPORT } from "@/animations/variants";

/**
 * Trust / collaboration section. Abould builds trust through human presence and
 * authentic signals — here we lead with a personal profile panel, hard numbers,
 * and an industries marquee. The duplicated marquee track loops seamlessly.
 */
export function Trust() {
  return (
    <Section id="trust">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Profile panel */}
        <Reveal className="relative">
          <div className="glass-panel relative overflow-hidden rounded-4xl p-8 text-center">
            <div className="absolute inset-0 bg-radial-glow" />
            <div className="relative">
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-accent-gradient font-display text-3xl font-bold text-white shadow-glow">
                AG
              </div>
              <h3 className="mt-5 font-display text-fluid-lg font-semibold text-ink">
                Akhil Gupta
              </h3>
              <p className="text-fluid-sm text-ink-muted">App &amp; Web Developer</p>

              <div className="mt-6 flex flex-col gap-3 text-left">
                {[
                  { icon: BadgeCheck, text: "Production-ready engineering" },
                  { icon: Globe2, text: "International client experience" },
                  { icon: Clock, text: "Reliable, timezone-friendly delivery" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-fluid-sm text-ink-muted">
                    <Icon size={18} className="text-accent-soft" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Numbers + copy */}
        <div>
          <Reveal>
            <p className="text-fluid-sm font-medium uppercase tracking-[0.2em] text-accent-soft">
              Trusted Collaboration
            </p>
            <h2 className="mt-4 max-w-xl font-display text-fluid-2xl font-semibold leading-[1.1] tracking-tight text-ink">
              Founders and teams partner with me to{" "}
              <span className="text-gradient">ship products that matter.</span>
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
          >
            {TRUST_ITEMS.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="rounded-2xl border border-hairline bg-glass p-5"
              >
                <p className="font-display text-fluid-xl font-bold text-gradient">{item.value}</p>
                <p className="mt-1 text-fluid-sm text-ink-muted">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Industries marquee */}
      <div className="relative mt-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent" />
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-hairline bg-glass px-6 py-2.5 text-fluid-sm text-ink-muted"
            >
              {industry}
            </span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
