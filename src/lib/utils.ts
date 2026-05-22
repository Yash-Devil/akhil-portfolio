import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * `cn` merges Tailwind classes intelligently — clsx handles conditional
 * classes, twMerge resolves conflicting utilities (e.g. `p-2 p-4` -> `p-4`).
 * This is the single helper every component uses to compose class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
