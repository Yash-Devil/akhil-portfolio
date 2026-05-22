"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Globe2 } from "lucide-react";
import { Section, SectionHeading, Reveal } from "@/shared/ui";
import { staggerContainer, fadeUp, VIEWPORT } from "@/animations/variants";

const highlights = [
  {
    icon: Code2,
    title: "Production-ready engineering",
    body: "Scalable architectures and clean, maintainable code across mobile, web, and backend systems.",
  },
  {
    icon: Globe2,
    title: "International experience",
    body: "Trusted by clients across multiple industries and timezones to deliver and communicate reliably.",
  },
  {
    icon: Layers,
    title: "End-to-end product thinking",
    body: "From UI/UX and frontend to APIs and databases — the full stack, with premium polish throughout.",
  },
];

const stack = [
  "Flutter",
  "FlutterFlow",
  "React.js",
  "Next.js",
  "Node.js",
  "Firebase",
  "Supabase",
  "MongoDB",
  "PostgreSQL",
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Left — heading + narrative */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="About"
            title={
              <>
                A serious product engineer,
                <span className="text-gradient"> not a generalist.</span>
              </>
            }
          />
          <Reveal delay={0.1} className="mt-7 space-y-5 text-fluid-base leading-relaxed text-ink-muted">
            <p>
              Akhil Gupta is the <strong className="font-semibold text-ink">Founder &amp; CEO of Abould</strong>,
              a software &amp; IT company, and a hands-on App &amp; Web Developer specializing
              in scalable mobile applications, SaaS platforms, modern web systems, and
              premium UI/UX experiences.
            </p>
            <p>
              Through Abould, he and his team partner with international clients across
              multiple industries to build production-ready applications with scalable
              architectures, smooth user experiences, and high-quality frontend and
              backend systems.
            </p>
            <p>
              He specializes in Flutter, FlutterFlow, React.js, Next.js, Node.js,
              Firebase, Supabase, MongoDB, and PostgreSQL.
            </p>
          </Reveal>

          {/* Stack chips */}
          <motion.ul
            variants={staggerContainer(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-8 flex flex-wrap gap-2"
          >
            {stack.map((tech) => (
              <motion.li
                key={tech}
                variants={fadeUp}
                className="rounded-full border border-hairline bg-mint px-4 py-1.5 text-fluid-sm text-ink-muted transition-colors hover:border-accent-violet/40 hover:text-ink"
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right — highlight cards (responsive composition) */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-4"
        >
          {highlights.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group flex gap-5 rounded-3xl border border-hairline bg-surface shadow-glow-sm p-6 transition-all duration-300 hover:border-accent/30 hover:bg-mint"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-violet/10 text-accent-violet transition-colors group-hover:bg-accent-violet/20">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="font-display text-fluid-lg font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-fluid-sm leading-relaxed text-ink-muted">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
