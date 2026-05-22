# Akhil Gupta — Premium Portfolio

A production-grade, dark-themed portfolio website built to feel like a funded-startup product, not a template. Designed and engineered with the polish of Linear / Vercel / Stripe-class interfaces.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lenis

---

## Quick start

```bash
npm install        # install dependencies
npm run dev        # start dev server  -> http://localhost:3000
npm run build      # production build (static export of "/")
npm run start      # serve the production build
```

> Requires Node 18.18+ (developed on Node 22). The site builds to a fully static page — deploy anywhere (Vercel, Netlify, static host).

---

## Architecture overview

The codebase is organised by **responsibility**, not by file type, so any feature can be reasoned about in isolation. Data, presentation, motion, and configuration are each separated.

```
akhil-portfolio/
├─ app/                # Next.js App Router: layout, page, global styles, metadata
│  ├─ layout.tsx       # fonts, SEO metadata, JSON-LD, providers (scroll/bg/nav/footer)
│  ├─ page.tsx         # single-page section composition
│  └─ globals.css      # design tokens + base layer + reduced-motion handling
│
├─ sections/           # full page sections (Hero, About, Services, … Contact)
├─ layouts/            # persistent chrome: Navbar, Footer
├─ components/         # feature components
│  ├─ SmoothScroll.tsx # Lenis provider
│  ├─ AuroraBackground.tsx
│  └─ portfolio/       # ProjectCard + ProjectModal (shared-element morph)
│
├─ shared/ui/          # reusable design-system primitives (Button, Section, …)
├─ hooks/              # useMagnetic, useMousePosition, useCounter
├─ animations/         # Framer Motion variants — the central motion language
├─ constants/          # ALL content/data (projects, services, tech, testimonials)
├─ config/             # site metadata (name, role, contact, SEO keywords)
├─ types/              # shared TypeScript models
└─ lib/                # utilities (cn class-merger)
```

**Why this structure?** Sections compose primitives from `shared/ui`; primitives never import sections. Content lives in `constants/` and `config/` so copy/projects can change without touching JSX. This keeps the dependency graph one-directional and the project scalable to a multi-page site.

---

## Design system

Everything reads from a single set of tokens defined in `tailwind.config.ts` + `app/globals.css`.

| Token | Value | Use |
|---|---|---|
| `base` | `#08080A` | page background (matte black) |
| `surface` / `elevated` | `#0E0E12` / `#15151B` | card + panel surfaces |
| `accent.violet → indigo → cyan` | `#8B5CF6 / #6366F1 / #22D3EE` | gradient accent system |
| `ink / ink-muted / ink-faint` | white scale | text hierarchy |

- **Typography:** `Space Grotesk` for display headings (distinct, technical character) + `Inter` for body (peerless legibility). Loaded via `next/font` → self-hosted, zero layout shift, no external requests. A fluid `clamp()` type scale (`fluid-sm … fluid-3xl`) means text scales smoothly between mobile and ultra-wide **without breakpoint jumps**.
- **Spacing & rhythm:** an 8px-based scale; the `Section` primitive standardises vertical rhythm and the `Container` primitive standardises max-width + gutters, so alignment never drifts.
- **Glassmorphism + glow:** `.glass`, `shadow-glow`, and the `accent-gradient` utility provide the premium surface language used consistently across cards, the navbar, and CTAs.

### Why these decisions
- **Dark, restrained palette** — a single gradient accent over near-black reads as "premium/technical." Colour is used sparingly so it signals, rather than decorates.
- **One gradient, three stops** — keeps the brand cohesive; every accent (text, glows, buttons, status pills) derives from the same violet→indigo→cyan ramp.
- **Typographic hierarchy** — eyebrow → display title → muted subtitle is enforced by the `SectionHeading` component, so every section announces itself the same way.

---

## Reusable component systems

| Primitive | Responsibility |
|---|---|
| `Button` / `MagneticButton` | polymorphic (link or button); magnetic variant adds cursor attraction |
| `Section` + `Container` | vertical rhythm, anchor offsets, max-width + gutters |
| `SectionHeading` | consistent eyebrow/title/subtitle with staggered reveal |
| `SpotlightCard` | glass card with cursor-tracking radial glow |
| `Reveal` | drop-in scroll-reveal wrapper (accepts custom variants/delay) |
| `Counter` | scroll-triggered animated number |
| `AnimatedHeadline` | masked, per-word headline entrance |
| `Badge` | tech tags / status chips |
| `ProjectCard` + `ProjectModal` | the portfolio shared-element interaction |

---

## Animation system

All motion is defined once in `animations/variants.ts` (a shared "motion language") and consumed everywhere, so timing/easing can be tuned globally. The philosophy is **restraint** — short, eased opacity+translate moves rather than flashy motion.

**Custom feature systems built:**

1. **Magnetic buttons** (`useMagnetic`) — CTAs drift toward the cursor and spring back. Spring physics give weight; used on hero + contact CTAs.
2. **Spotlight cards** (`useMousePosition` + `SpotlightCard`) — a radial glow follows the pointer. Driven by Framer **motion values**, so mousemove updates *don't* trigger React re-renders — cheap even across a 15-card grid.
3. **Brand-glow tech badges** — each badge lights up in its technology's real brand colour via an inline CSS variable.
4. **Scroll-reveal + stagger** (`Reveal`, `staggerContainer`) — sections cascade in via `whileInView` (IntersectionObserver under the hood), `once: true` so they don't replay.
5. **Animated counters** (`useCounter`) — stats count up the first time they enter view.
6. **Shared-element portfolio morph** — clicking a `ProjectCard` makes it physically grow into a full case-study `ProjectModal` using matching Framer `layoutId`s. Filtering reflows the grid with layout transitions instead of hard cuts.
7. **Lenis smooth scroll** + a GPU-only **aurora background** (pure CSS transforms, no per-frame JS).

> **Accessibility:** `prefers-reduced-motion` is respected globally in `globals.css` (all animation/transition durations collapse) and Lenis is disabled for those users.

---

## Responsive strategy

- **Fluid typography** via `clamp()` removes most "text too big/small at breakpoint X" problems — type scales continuously from 320px to ultra-wide.
- **Mobile-first** Tailwind breakpoints; layouts move from single column → 2-up → 3-up grids (`sm`, `lg`).
- **Complex responsive compositions:** the Hero collapses its split (headline + orbit visual) to a single focused column on mobile (the decorative visual is hidden, not shrunk, to keep the hero impactful); About reflows its narrative + highlight-card columns; the Portfolio grid is a responsive masonry-style layout.
- **Mobile navigation:** the navbar collapses into an animated glass sheet with body-scroll locking.

---

## Performance & SEO

- **Static prerender** — `/` builds to static HTML; all section copy + project data is in the server-rendered markup (verified: full content present in initial HTML), so it's fast and crawlable.
- **Self-hosted fonts** via `next/font` (no render-blocking external font requests, no CLS).
- **`optimizePackageImports`** for `framer-motion`, `lucide-react`, `react-icons` — tree-shakes icon/motion imports to shrink the bundle.
- **Motion-value-driven hover** avoids re-render storms on pointer move.
- **Semantic HTML** (`header`, `main`, `section`, `footer`, headings in order) + ARIA labels on icon-only controls and the project modal (`role="dialog"`, `aria-modal`).
- **SEO metadata:** title template, description, Open Graph, Twitter card, robots, and **JSON-LD `Person` structured data** in `app/layout.tsx`. Update real values in `config/site.ts`.

---

## Customisation

| Want to change… | Edit |
|---|---|
| Name, role, email, socials, SEO keywords | `config/site.ts` |
| Projects, services, tech, stats, testimonials | `constants/index.ts` |
| Colours, fonts, spacing, animations tokens | `tailwind.config.ts` + `app/globals.css` |
| Motion timing/easing | `animations/variants.ts` |

The contact form is currently client-side (optimistic success state). To make it live, point `onSubmit` in `sections/Contact.tsx` at an API route or an email service (Resend, Formspree, etc.).

---

Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
