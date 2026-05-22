"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading, TiltCard } from "@/shared/ui";
import { SERVICES } from "@/constants";
import { staggerContainer, fadeUp, VIEWPORT } from "@/animations/variants";

/**
 * Services grid built from the reusable `TiltCard` (3D tilt + cursor spotlight
 * + animated conic border). Cards stagger in on scroll; the icon scales and the
 * arrow nudges on hover to reward interaction without overwhelming motion.
 */
export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title={
          <>
            Everything needed to ship a{" "}
            <span className="text-gradient">complete product.</span>
          </>
        }
        subtitle="From the first wireframe to a deployed, scalable system — delivered with the polish of a funded startup."
      />

      <motion.div
        variants={staggerContainer(0.07)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {SERVICES.map(({ id, title, description, icon: Icon, features }) => (
          <motion.div key={id} variants={fadeUp}>
            <TiltCard className="h-full p-7">
              <div className="flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-violet/12 text-accent-soft transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-violet/20">
                    <Icon size={22} />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft"
                  />
                </div>

                <h3 className="mt-6 font-display text-fluid-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-fluid-sm leading-relaxed text-ink-muted">
                  {description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2 pt-1">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-hairline px-2.5 py-1 text-xs text-ink-faint"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
