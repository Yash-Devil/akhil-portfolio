import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

/**
 * Product showcase visual for a project. When the project has a real screenshot
 * (`project.image`), we render it inside a premium frame on a soft tinted panel
 * — the transparent product mockups float on the light surface. Otherwise we
 * fall back to a designed, CSS-rendered "browser + phone" mockup tinted with
 * the project's signature accent, so every case study still looks like a real
 * product showcase.
 */
export function ProjectMockup({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const isApp = project.platforms.includes("App");

  // Real screenshot path — transparent PNG presented on a tinted glass panel.
  if (project.image) {
    return (
      <div className={cn("relative w-full", className)}>
        <div
          className={cn(
            "absolute -inset-8 rounded-[3rem] bg-gradient-to-br opacity-25 blur-3xl",
            project.accent
          )}
        />
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-hairline bg-gradient-to-br from-mint via-surface to-peach shadow-glow-lg">
          <Image
            src={project.image}
            alt={`${project.title} — product preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-3 sm:p-5"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative w-full", className)}>
      {/* Ambient glow behind the device. */}
      <div
        className={cn(
          "absolute -inset-8 rounded-[3rem] bg-gradient-to-br opacity-25 blur-3xl",
          project.accent
        )}
      />

      {/* Browser / dashboard frame */}
      <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface shadow-glow-lg">
        {/* Top chrome */}
        <div className="flex items-center gap-2 border-b border-hairline bg-black/[0.02] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-black/10" />
          <span className="h-3 w-3 rounded-full bg-black/10" />
          <span className="h-3 w-3 rounded-full bg-black/10" />
          <span className="ml-3 hidden h-5 flex-1 rounded-md bg-black/[0.04] sm:block" />
        </div>

        {/* Body */}
        <div className="relative grid grid-cols-[64px_1fr] gap-3 p-4 sm:grid-cols-[80px_1fr] sm:gap-4 sm:p-5">
          {/* Sidebar */}
          <div className="flex flex-col gap-3">
            <div className={cn("h-8 w-8 rounded-lg bg-gradient-to-br", project.accent)} />
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-2.5 w-full rounded bg-black/[0.06]" />
            ))}
          </div>

          {/* Main */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex-1 rounded-xl border border-hairline bg-black/[0.02] p-3"
                >
                  <div className={cn("h-2 w-8 rounded-full bg-gradient-to-r", project.accent)} />
                  <div className="mt-2 h-4 w-12 rounded bg-black/10" />
                </div>
              ))}
            </div>

            {/* Chart panel */}
            <div className="relative h-28 overflow-hidden rounded-xl border border-hairline bg-black/[0.015] p-3 sm:h-36">
              <div className="h-2 w-16 rounded bg-black/10" />
              <svg viewBox="0 0 300 90" className="mt-3 h-[70%] w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`grad-${project.id}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#089473" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#089473" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,70 C40,40 70,55 110,30 C150,8 190,45 230,28 C260,16 285,32 300,22 L300,90 L0,90 Z"
                  fill={`url(#grad-${project.id})`}
                />
                <path
                  d="M0,70 C40,40 70,55 110,30 C150,8 190,45 230,28 C260,16 285,32 300,22"
                  fill="none"
                  stroke="#089473"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating phone for app projects (white UI on the emerald screen) */}
      {isApp && (
        <div className="absolute -bottom-6 -right-3 w-24 animate-float sm:w-28">
          <div className="overflow-hidden rounded-[1.5rem] border-2 border-white bg-surface p-1.5 shadow-glow-lg">
            <div className={cn("relative h-44 rounded-[1.1rem] bg-gradient-to-b p-2.5", project.accent)}>
              <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-black/20" />
              <div className="space-y-2">
                <div className="h-2 w-2/3 rounded bg-white/70" />
                <div className="h-12 rounded-lg bg-white/25" />
                <div className="h-2 w-1/2 rounded bg-white/50" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-8 rounded-lg bg-white/25" />
                  <div className="h-8 rounded-lg bg-white/25" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
