import { cn } from "@/lib/utils";
import { Container } from "./Container";

/**
 * Section wrapper that standardises vertical rhythm and anchor IDs. The
 * `scroll-mt` offset accounts for the fixed navbar so in-page links land
 * cleanly under it.
 */
export function Section({
  id,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-24 sm:py-28 lg:py-36",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
