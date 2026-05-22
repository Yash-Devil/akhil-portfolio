"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Premium loading screen: an animated count to 100 with the monogram and a
 * gradient progress line, then a smooth curtain wipe reveals the page. Runs
 * once on first paint; it's purely presentational so it never blocks content
 * (the page is already rendered underneath).
 */
export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-base"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid h-16 w-16 place-items-center rounded-2xl bg-accent-gradient font-display text-2xl font-bold text-white shadow-glow"
          >
            AG
          </motion.div>

          <div className="mt-8 h-px w-56 overflow-hidden bg-black/10">
            <motion.div
              className="h-full bg-accent-gradient"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-4 font-display text-fluid-sm tabular-nums text-ink-faint">
            {progress.toString().padStart(3, "0")}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
