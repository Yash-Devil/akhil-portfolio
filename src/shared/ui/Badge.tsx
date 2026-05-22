import { cn } from "@/lib/utils";

/** Small pill used for tech tags, statuses, and metadata chips. */
export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-hairline bg-mint px-3 py-1 text-xs font-medium text-ink-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
