import { cn } from "@/lib/utils";

/**
 * Single source of truth for horizontal page rhythm: max width + responsive
 * gutters. Every section composes this so content alignment never drifts.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-container container-px", className)}>
      {children}
    </div>
  );
}
