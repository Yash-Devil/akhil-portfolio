import {
  Hero,
  About,
  Services,
  TechStack,
  Stats,
  Portfolio,
  Trust,
  Testimonials,
  Contact,
} from "@/sections";

/**
 * Single-page composition. Section order is intentional: hook (Hero) →
 * credibility (About) → capability (Services/Stack) → proof (Stats/Portfolio/
 * Trust/Testimonials) → conversion (Contact). This narrative arc mirrors how a
 * prospect evaluates a developer.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Stats />
      <Portfolio />
      <Trust />
      <Testimonials />
      <Contact />
    </>
  );
}
