"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import { Button, type ButtonProps } from "./Button";

/**
 * Wraps the base Button with the magnetic hover system — the button drifts
 * toward the cursor and springs back on leave. Kept separate from `Button` so
 * the magnetic behaviour (a client interaction) is opt-in and the base button
 * can stay a lightweight server component.
 */
export function MagneticButton(props: ButtonProps & { strength?: number }) {
  const { strength = 0.4, ...buttonProps } = props;
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic<HTMLDivElement>(strength);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="inline-flex"
    >
      <Button {...buttonProps} />
    </motion.div>
  );
}
