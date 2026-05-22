import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge doesn't know about our custom `text-fluid-*` font sizes, so by
 * default it treats e.g. `text-fluid-base` as conflicting with `text-white` and
 * drops the color. We register the fluid sizes under the `font-size` group so
 * size and color classes coexist correctly (e.g. a green button keeps its white
 * text alongside `text-fluid-base`).
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "fluid-sm",
            "fluid-base",
            "fluid-lg",
            "fluid-xl",
            "fluid-2xl",
            "fluid-3xl",
            "fluid-mega",
          ],
        },
      ],
    },
  },
});

/**
 * `cn` merges Tailwind classes intelligently — clsx handles conditional
 * classes, twMerge resolves conflicting utilities (e.g. `p-2 p-4` -> `p-4`).
 * This is the single helper every component uses to compose class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
