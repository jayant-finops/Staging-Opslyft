"use client";

import Link from "next/link";
import Image from "next/image";

type BlogCard = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
};

const BLOGS: BlogCard[] = [
  {
    slug: "how-purple-saved-200k",
    category: "Case Studies",
    title: "How Purple Saved More Than $200,000 on GCP in Just One Month",
    excerpt:
      "Purple, a leading beauty and wellness brand, used OpsLyft to uncover waste and realize six‑figure savings in under 30 days.",
  },
  {
    slug: "inshorts-100-observability",
    category: "Case Studies",
    title: "How Inshorts ensured 100% Observability on GCP",
    excerpt:
      "Inshorts built complete cost and usage visibility across services, enabling faster decision making and tighter governance.",
  },
  {
    slug: "hdfc-cost-efficient-zero-trust",
    category: "Case Studies",
    title:
      "Building a cost‑efficient & zero‑trust cloud infrastructure HDFC Life's Retirement Fund",
    excerpt:
      "HDFC Life modernized cloud access while reducing spend, aligning security and finance objectives across teams.",
  },
  {
    slug: "innovaccer-mrr-to-cost-percentage",
    category: "Case Studies",
    title:
      "How Innovaccer achieved their MRR to Cloud Cost percentage goal with OpsLyft",
    excerpt:
      "Innovaccer operationalized FinOps to keep growth aligned with cost guardrails, improving unit economics.",
  },
];

export default function CustomerStoriesListSection() {
  return (
    <section className="bg-[#F1F1F1] py-[100px] px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mx-auto max-w-[1170px] flex flex-col gap-12 lg:gap-16">
          {/* Single column on mobile, 3 columns on desktop */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:gap-8">
            {BLOGS.slice(0, 3).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:gap-8">
            {BLOGS.slice(3, 6).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ post }: { post: BlogCard }) {
  return (
    <article className="flex flex-col gap-6 lg:gap-8 bg-white rounded-[30px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] p-6 pb-8 w-full max-w-[338px] lg:max-w-none mx-auto lg:h-[580px]">
      {/* Media */}
      <div className="relative w-full h-[240px] rounded-[30px] bg-[#0E1821] overflow-hidden flex-shrink-0">
        {/* subtle grid effect */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Copy */}
      <div className="flex flex-col justify-between gap-8 lg:gap-8 flex-1">
        <div className="flex flex-col gap-3">
          <span
            className="text-[#24823D] text-[14px] leading-[20px] font-semibold"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {post.category}
          </span>

          <div className="flex items-start gap-4">
            <h3
              className="text-[#101828] text-[24px] leading-[32px] font-semibold flex-1"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              {post.title}
            </h3>
            <Link
              href={`/customer-stories/${post.slug}`}
              className="mt-1 flex-shrink-0"
              aria-label={`Read ${post.title}`}
            >
              <Image
                src="/assets/images/blog/arrow-up-right.svg"
                alt=""
                width={24}
                height={24}
                className="w-6 h-15"
              />
            </Link>
          </div>

          <p
            className="text-[#667085] text-[16px] leading-[24px]"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {post.excerpt}
          </p>
        </div>

        {/* Read more link removed on mobile per spec, keeping for consistency */}
      </div>
    </article>
  );
}
