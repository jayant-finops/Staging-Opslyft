// Re-export all home page data
export * from "./testimonials";
export * from "./struggle";
export * from "./solutions";

// Home page hero fallback data
export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
}

export const heroFallback: HeroData = {
  title: "Context-Led Cloud\nOptimisation & Visibility",
  subtitle: "BUILT FOR ENGINEERING AND FINANCE TEAMS",
  description:
    "Opslyft automates FinOps with context-led, AI-powered insights and, actionable fixes for engineering teams so you can start cutting cloud waste in days, not months.",
  ctaText: "Book a demo",
  ctaUrl: "/pricing",
};
