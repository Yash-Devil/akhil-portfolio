"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, CheckCircle2, ArrowUpRight, Loader2 } from "lucide-react";
import { Section, SectionHeading, Reveal, MagneticButton } from "@/shared/ui";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";

/**
 * Contact — a two-column composition: direct channels (email/WhatsApp) on one
 * side, a premium validated form on the other. The form POSTs to /api/contact,
 * which emails the submission via Resend (see src/app/api/contact/route.ts).
 */
type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const { error: message } = await res.json().catch(() => ({}));
        throw new Error(message ?? "Failed to send message.");
      }

      form.reset();
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const sending = status === "sending";
  const sent = status === "sent";

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Have a product in mind? <span className="text-gradient">Let&apos;s build it.</span>
          </>
        }
        subtitle="Tell me about your project and I'll get back to you within 24 hours."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Direct channels */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-4"
        >
          <ContactChannel
            icon={Mail}
            label="Email"
            value={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />
          <ContactChannel
            icon={MessageCircle}
            label="WhatsApp"
            value="Chat directly"
            href={siteConfig.whatsapp}
            external
          />
          <motion.div
            variants={fadeUp}
            className="mt-2 rounded-3xl border border-hairline bg-surface shadow-glow-sm p-6"
          >
            <p className="text-fluid-sm leading-relaxed text-ink-muted">
              Prefer a quick call? Mention your timezone in the message and I&apos;ll
              propose a slot. Open to freelance, contract, and long-term
              collaborations.
            </p>
          </motion.div>
        </motion.div>

        {/* Form */}
        <Reveal className="rounded-4xl border border-hairline bg-surface shadow-glow-sm p-6 sm:p-8">
          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Company (optional)" name="company" required={false} />
            <div className="float-field">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder=" "
                className="peer w-full resize-none rounded-2xl border border-hairline bg-base/60 px-4 pb-3 pt-6 text-fluid-base text-ink transition-colors focus:border-accent-violet/60 focus:outline-none"
              />
              <label htmlFor="message">Project details</label>
            </div>

            <MagneticButton
              type="submit"
              size="lg"
              className="w-full sm:w-auto"
              disabled={sending}
            >
              {sending ? (
                <>
                  Sending <Loader2 size={16} className="animate-spin" />
                </>
              ) : sent ? (
                <>
                  Message sent <CheckCircle2 size={18} />
                </>
              ) : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </MagneticButton>

            {status === "error" && error && (
              <p role="alert" className="text-fluid-sm text-red-400">
                {error}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function ContactChannel({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <motion.a
      variants={fadeUp}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 rounded-3xl border border-hairline bg-surface shadow-glow-sm p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-violet/40"
    >
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-violet/10 text-accent-violet transition-colors group-hover:bg-accent-violet/20">
        <Icon size={22} />
      </div>
      <div className="flex-1">
        <p className="text-fluid-sm text-ink-faint">{label}</p>
        <p className="font-medium text-ink">{value}</p>
      </div>
      <ArrowUpRight
        size={18}
        className="text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-violet"
      />
    </motion.a>
  );
}

/** Floating-label input — the label rises into the border on focus/fill. */
function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="float-field">
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder=" "
        className="peer w-full rounded-2xl border border-hairline bg-base/60 px-4 pb-2.5 pt-6 text-fluid-base text-ink transition-colors focus:border-accent-violet/60 focus:outline-none"
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
