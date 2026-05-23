import type { Config } from "tailwindcss";

/**
 * Design tokens — the single source of truth for the light-emerald palette
 * (sampled from the abould.com reference): near-white surfaces, a faint peach
 * hero wash, and an emerald-green accent system. No raw hex leaks into JSX.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surface scale — near-white page → white cards → tinted sections.
        base: "#FDFDFD",
        surface: "#FFFFFF",
        elevated: "#FFFFFF",
        peach: "#FFF8F7", // hero warm wash
        mint: "#EBF5F3", // tinted section background
        // Glass + hairline tokens (dark-on-light).
        glass: "rgba(255,255,255,0.70)",
        hairline: "rgba(15,42,36,0.10)",
        border: "rgba(15,42,36,0.10)",
        // Emerald accent scale. Key names kept stable; values tuned for light.
        accent: {
          DEFAULT: "#089473", // brand emerald (fills, gradients)
          violet: "#0B6E57", // deep emerald (accent text / icons / dots)
          blue: "#10B488", // light emerald (gradient variety, blobs)
          soft: "#0F8165", // mid emerald (readable accent text on white)
        },
        ink: {
          DEFAULT: "#16241F", // dark slate (headings + body)
          muted: "#586863", // secondary text
          faint: "#8A9892", // muted/labels
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid type scale — clamps continuously from mobile to ultra-wide.
        // Maxes tuned down so headings stop overflowing on wide screens; mobile
        // floors kept low so small viewports never feel cramped.
        "fluid-sm": "clamp(0.875rem, 0.82rem + 0.2vw, 0.95rem)",
        "fluid-base": "clamp(0.95rem, 0.9rem + 0.25vw, 1.05rem)",
        "fluid-lg": "clamp(1.05rem, 0.98rem + 0.4vw, 1.2rem)",
        "fluid-xl": "clamp(1.25rem, 1.1rem + 0.8vw, 1.6rem)",
        "fluid-2xl": "clamp(1.6rem, 1.3rem + 1.4vw, 2.1rem)",
        "fluid-3xl": "clamp(2rem, 1.5rem + 2.4vw, 3.25rem)",
        "fluid-mega": "clamp(2.5rem, 1.6rem + 4.5vw, 5.5rem)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        container: "84rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #10B488 0%, #089473 50%, #0B6E57 100%)",
        "radial-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(8,148,115,0.14) 0%, transparent 100%)",
        grid: "linear-gradient(rgba(15,42,36,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,42,36,0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        // Neutral elevation for light cards, with an optional emerald-tinted lift.
        glow: "0 18px 50px -24px rgba(15,42,36,0.30)",
        "glow-sm": "0 10px 26px -14px rgba(15,42,36,0.25)",
        "glow-lg": "0 40px 90px -40px rgba(8,148,115,0.40)",
        emerald: "0 16px 40px -16px rgba(8,148,115,0.55)",
      },
      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(4%, -3%, 0) scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "border-spin": { to: { "--angle": "360deg" } },
        shimmer: { "100%": { transform: "translateX(100%)" } },
      },
      animation: {
        "aurora-drift": "aurora-drift 20s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        "border-spin": "border-spin 6s linear infinite",
        shimmer: "shimmer 2.5s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
