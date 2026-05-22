# Akhil Gupta — Premium Portfolio

A production-grade, **light-luxury** portfolio built to feel like a premium startup-agency product — clean, spacious, and Awwwards-leaning. The palette (near-white surfaces, faint peach hero wash, emerald-green accents) and the storytelling case-study approach are sampled from / inspired by abould.com while remaining fully original.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion · GSAP · Lenis · Lucide React

---

## Quick start

```bash
npm install        # install dependencies
npm run dev        # dev server  -> http://localhost:3000
npm run build      # production build (static + 15 SSG case-study pages)
npm run start      # serve the production build
```

> Node 18.18+ (developed on Node 22). The whole site prerenders to static HTML — deploy to Vercel, Netlify, or any static host.

---

## Routing & pages

| Route | Rendering | Description |
|---|---|---|
| `/` | Static | Single-page experience (all sections) |
| `/work/[slug]` | **SSG** | A dedicated case-study page per project — generated at build time via `generateStaticParams`, each with unique SEO metadata |

Every project opens in its **own page** (not a modal), with cinematic header, large product mockup, challenge/solution/outcome storytelling, features, and a "next project" link.

---

## Architecture (`src/`)

Organised by **responsibility**, not file type — sections compose primitives; primitives never import sections; all content lives in data files.

```
src/
├─ app/                  # App Router
│  ├─ layout.tsx         # fonts, SEO, JSON-LD, providers (loader/cursor/scroll/bg)
│  ├─ page.tsx           # homepage section composition
│  └─ work/[slug]/       # dynamic per-project case-study pages (SSG)
├─ sections/             # page sections (Hero, About … Trust, Contact)
├─ layouts/              # Navbar, Footer
├─ components/           # feature components
│  ├─ CustomCursor / LoadingScreen / ScrollProgress / AuroraBackground / SmoothScroll
│  └─ portfolio/         # ProjectRow, ProjectMockup, CaseStudyContent
├─ shared/ui/            # design-system primitives (Button, TiltCard, RotatingText…)
├─ hooks/                # useMagnetic, useMousePosition, useCounter
├─ animations/           # Framer Motion variants — the central motion language
├─ constants/            # ALL content/data (projects, services, tech, testimonials)
├─ config/               # site metadata + SEO keywords
├─ types/                # shared TypeScript models
├─ lib/ · utils/         # helpers (cn class-merger)
└─ styles/               # globals.css (tokens, glass, animated border, float labels)
```

The `@/*` path alias maps to `./src/*` (see `tsconfig.json`).

---

## Design system (Abould-inspired light + emerald tokens)

Everything reads from `tailwind.config.ts` + `src/styles/globals.css`. Colors were sampled directly from the reference screenshots.

| Token | Value | Use |
|---|---|---|
| `base` | `#FDFDFD` | primary (near-white) background |
| `surface` / `elevated` | `#FFFFFF` | white cards |
| `peach` / `mint` | `#FFF8F7` / `#EBF5F3` | hero wash / tinted chips & sections |
| `glass` | `rgba(255,255,255,0.70)` | frosted glassmorphism cards |
| `hairline` / `border` | `rgba(15,42,36,0.10)` | hairline borders |
| `accent.DEFAULT` | `#089473` | brand emerald (fills, gradients) |
| `accent.violet / soft / blue` | `#0B6E57 / #0F8165 / #10B488` | emerald scale: deep text / mid text / light* |
| `ink / ink-muted / ink-faint` | `#16241F / #586863 / #8A9892` | dark-slate text hierarchy |
| gradient | `135deg #10B488 → #089473 → #0B6E57` | emerald brand gradient |

> *The `accent.violet/blue` key **names** are retained for stability across the codebase, but their **values** are now emerald — so all existing `text-accent-violet` etc. classes render green. Rename the keys if you prefer semantic accuracy.*

- **Type:** `Space Grotesk` (display) + `Inter` (body) via `next/font` (self-hosted, zero CLS). A fluid `clamp()` scale (`fluid-sm … fluid-mega`) scales text continuously from mobile to ultra-wide — no breakpoint jumps. The hero uses `fluid-mega` for giant cinematic typography.
- **Surfaces:** `.glass-panel` (glassmorphism), `shadow-glow*`, `bg-radial-glow`, and `.animated-border` (conic-gradient hover border) form the premium surface language.

---

## Advanced feature systems

| Feature | File |
|---|---|
| Custom animated cursor (dot + lagging ring, grows on hover) | `CustomCursor` |
| Premium loading screen (count to 100 + curtain wipe) | `LoadingScreen` |
| Scroll progress bar (spring-smoothed) | `ScrollProgress` |
| Animated grid + floating glow blobs background | `AuroraBackground` |
| Dynamic navbar blur on scroll + mobile sheet | `Navbar` |
| Lenis smooth scroll | `SmoothScroll` |
| Hero mouse-parallax blobs + floating particles + rotating text | `Hero`, `RotatingText` |
| 3D tilt + spotlight + animated border cards | `TiltCard` (Services) |
| Magnetic buttons | `useMagnetic` (CTAs) |
| Alternating case-study rows + CSS product mockups | `ProjectRow`, `ProjectMockup` |
| Industries marquee (trust) | `Trust` |

**Motion philosophy:** restraint. Short, eased opacity+translate moves driven by a single shared variant language (`animations/variants.ts`). Pointer-driven effects (cursor, tilt, spotlight) use Framer **motion values**, so mousemove never re-renders React.

> **Accessibility:** `prefers-reduced-motion` collapses all animation globally, Lenis is disabled, and the custom cursor is skipped on touch / coarse-pointer devices.

---

## A note on project visuals

The case studies use **designed, CSS-rendered product mockups** (`ProjectMockup`) — premium dashboard + phone frames tinted with each project's accent — because real screenshots weren't provided. To use real images, drop an `<Image>` into `ProjectMockup` (and add files under `public/`); everything else stays the same.

---

## Responsive strategy

- **Fluid typography** (`clamp()`) removes most breakpoint-specific sizing issues.
- Mobile-first grids reflow 1 → 2 → 3/4 columns; case-study rows alternate sides on desktop and stack on mobile.
- Navbar collapses to an animated glass sheet (with body-scroll lock); custom cursor and heavy parallax are pointer-gated.

## Performance & SEO

- **Static / SSG** everything (verified: full content in server HTML).
- Self-hosted fonts (no render-blocking, no CLS); `optimizePackageImports` tree-shakes `framer-motion` / `lucide-react` / `react-icons`.
- Semantic HTML + ARIA on icon-only controls; **JSON-LD `Person`** + per-project Open Graph metadata.

## Customisation

| Change… | Edit |
|---|---|
| Name, role, email, socials, SEO | `src/config/site.ts` |
| Projects (incl. case-study copy), services, tech, testimonials, trust | `src/constants/index.ts` |
| Colours, fonts, spacing, animation tokens | `tailwind.config.ts` + `src/styles/globals.css` |
| Motion timing/easing | `src/animations/variants.ts` |

The contact form is client-side (optimistic success). Point `onSubmit` in `src/sections/Contact.tsx` at an API route or email service (Resend/Formspree) to make it live.

---

Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP & Lenis.
