import type { SanityImage } from "@/types/sanity";

export type CustomerStories = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  featuredImage?: string | SanityImage;
  cardBackgroundImage?: string | SanityImage;
  order: number;
};

export const customerStoriesFallback: CustomerStories[] = [
  {
    slug: "how-purple-saved-200k",
    category: "Case Studies",
    title: "How Purple Saved More Than $200,000 on GCP in Just One Month",
    excerpt:
      "Purple, a leading beauty and wellness brand, used OpsLyft to uncover waste and realize six‑figure savings in under 30 days.",
    cardBackgroundImage: "/assets/images/features/feature1-card.svg",
    order: 0,
  },
  {
    slug: "inshorts-100-observability",
    category: "Case Studies",
    title: "How Inshorts ensured 100% Observability on GCP",
    excerpt:
      "Inshorts built complete cost and usage visibility across services, enabling faster decision making and tighter governance.",
    cardBackgroundImage: "/assets/images/features/feature1-card.svg",
    order: 1,
  },
  {
    slug: "hdfc-cost-efficient-zero-trust",
    category: "Case Studies",
    title:
      "Building a cost‑efficient & zero‑trust cloud infrastructure HDFC Life's Retirement Fund",
    excerpt:
      "HDFC Life modernized cloud access while reducing spend, aligning security and finance objectives across teams.",
    cardBackgroundImage: "/assets/images/features/feature1-card.svg",
    order: 2,
  },
  {
    slug: "innovaccer-mrr-to-cost-percentage",
    category: "Case Studies",
    title:
      "How Innovaccer achieved their MRR to Cloud Cost percentage goal with OpsLyft",
    excerpt:
      "Innovaccer operationalized FinOps to keep growth aligned with cost guardrails, improving unit economics.",
    cardBackgroundImage: "/assets/images/features/feature1-card.svg",
    order: 3,
  },
];




/** A single span of text inside a block */
export interface SanitySpan {
  _key: string;
  _type: "span";
  text: string;
  marks: string[]; // e.g. ["strong", "em", "linkKey123"]
}

/** Mark definition for links, annotations, etc. */
export interface SanityMarkDef {
  _key: string;
  _type: string; // e.g. "link"
  href?: string;
}

/** A rich text content block (paragraph, heading, list item, etc.) */
export interface SanityBlock {
  _key: string;
  _type: "block";
  children: SanitySpan[];
  markDefs?: SanityMarkDef[];
  style?: string; // "normal", "h1", "h2", etc.
  listItem?: "bullet" | "number";
  level?: number;
}

/** An inline image block (expanded via asset-> in GROQ) */
export interface ImageBlock {
  _key: string;
  _type: "image";
  asset: {
    url: string;
    metadata?: {
      lqip?: string;
      dimensions?: {
        width: number;
        height: number;
        aspectRatio?: number;
      };
    };
  };
}

/** A custom component block (e.g., GreenCard, Testimonial, etc.) */
export interface SanityComponentBlock {
  _key: string;
  _type: "componentBlock";
  component: string;
  props: Record<string, any>;
}

/** Union of all block types that can appear inside `content[]` */
export type PortableTextBlock =
  | SanityBlock
  | ImageBlock
  | SanityComponentBlock;

/** A full section in your story */
export interface Section {
  jumplinkContent: string;
  content: PortableTextBlock[];
}

export interface ImpactCard {
  metricValue: string;
  explainingText: string;
}

/** The main customer story document */
export interface CustomerStory {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  excerpt?: string;
  order?: number;
  featuredImageUrl?: string;
  ogImage?: string;
  logo?: string;
  industry?: string;
  usecase?: string;
  metaDescription?: string;
  metaTitle?: string;
  scale?: string;
  sections: Section[];
  impactCards?: ImpactCard[];
}