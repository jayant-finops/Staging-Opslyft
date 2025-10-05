export type CustomerStory = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  featuredImage?: string;
  cardBackgroundImage?: string;
  order: number;
};

export const customerStoriesFallback: CustomerStory[] = [
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
