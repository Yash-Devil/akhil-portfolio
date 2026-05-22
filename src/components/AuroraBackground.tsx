/**
 * Fixed, GPU-friendly ambient background: an animated dot/line grid, soft
 * drifting gradient "auroras", and floating glow blobs. Pure CSS transforms
 * (no per-frame JS) keep it cheap. Sits behind all content via negative
 * z-index and is purely decorative (aria-hidden).
 */
export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Faint line grid, masked to fade toward the edges. */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,42,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,42,36,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(75% 60% at 50% 25%, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(75% 60% at 50% 25%, black 0%, transparent 100%)",
        }}
      />

      {/* Drifting colour fields — soft peach + emerald, low opacity for light. */}
      <div className="absolute -left-32 -top-40 h-[38rem] w-[38rem] rounded-full bg-[#FFD9D2]/40 blur-[140px] animate-aurora-drift" />
      <div className="absolute -right-24 top-1/4 h-[34rem] w-[34rem] rounded-full bg-accent-blue/15 blur-[140px] animate-aurora-drift [animation-delay:-7s]" />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[140px] animate-aurora-drift [animation-delay:-13s]" />
    </div>
  );
}
