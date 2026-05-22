import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Filled gradient with a soft glow that intensifies on hover.
  primary:
    "bg-accent-gradient text-white shadow-[0_8px_30px_-8px_rgba(8,148,115,0.55)] hover:shadow-[0_14px_48px_-8px_rgba(8,148,115,0.85)] hover:-translate-y-0.5",
  // White glass outline that lifts on hover.
  secondary:
    "glass-panel text-ink hover:bg-white hover:border-accent/30 hover:-translate-y-0.5",
  ghost: "text-ink-muted hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-fluid-sm",
  lg: "px-7 py-3.5 text-fluid-base",
};

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
  disabled?: boolean;
}

/**
 * Polymorphic button: renders a Next `<Link>` when `href` is set (internal or
 * anchor) and a native `<button>` otherwise — one component, consistent styling
 * for both navigation and actions.
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  onClick,
  type = "button",
  ariaLabel,
  disabled,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
