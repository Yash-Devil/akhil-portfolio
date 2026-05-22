import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Pin the workspace root to this project so a stray parent lockfile doesn't
  // get inferred as the root.
  turbopack: {
    root: __dirname,
  },
  // Surface motion/icon libs for cleaner tree-shaking and smaller bundles.
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "react-icons"],
  },
};

export default nextConfig;
