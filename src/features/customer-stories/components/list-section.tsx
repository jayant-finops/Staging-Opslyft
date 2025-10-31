"use client";

import Link from "next/link";
import Image from "next/image";
import {
  customerStoriesFallback,
  type CustomerStories,
} from "@/features/customer-stories/data";
import { urlFor } from "@/lib/sanity";
import type { SanityImage } from "@/types/sanity";

type CustomerStoriesListSectionProps = {
  stories?: CustomerStories[] | null;
};

export default function CustomerStoriesListSection({
  stories,
}: CustomerStoriesListSectionProps) {
  // Use fallback if stories is null, undefined, or empty array
  const storiesData =
    stories && stories.length > 0 ? stories : customerStoriesFallback;

  if (!storiesData || storiesData.length === 0) {
    return (
      <section className="relative bg-[#000] block -mt-[1px]">
        <div
          className="mx-auto w-full max-w-[1920px] rounded-t-[40px] py-[100px] px-8"
          style={{ background: "#F1F1F1" }}
        >
          <div className="text-center text-red-500">No stories found</div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-[#000] block -mt-[1px]">
      <div
        className="mx-auto w-full max-w-[1920px] rounded-t-[40px] py-[100px] px-8"
        style={{ background: "#F1F1F1" }}
      >
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="mx-auto max-w-[1170px] flex flex-col gap-12 lg:gap-16">
            {/* Single column on mobile, 3 columns on desktop */}
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:gap-8">
              {storiesData.slice(0, 3).map((post) => (
                <ArticleCard key={post.slug} post={post} type="listingPage" />
              ))}
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:gap-8">
              {storiesData.slice(3, 6).map((post) => (
                <ArticleCard key={post.slug} post={post} type="listingPage" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ArticleCard({ post,type }: { post: CustomerStories; type: "storyPage" | "listingPage" }) {
  // Helper to get image URL from either string or Sanity image object
  const getImageUrl = (image?: string | SanityImage): string | null => {
    if (!image) return null;

    // If it's a string, return it directly
    if (typeof image === "string") return image;

    // If it's a Sanity image object with asset, use urlFor
    if (image.asset) {
      return urlFor(image).url();
    }

    return null;
  };

  const cardBackgroundImageUrl = getImageUrl(post.cardBackgroundImage);

  return (
    <Link href={`/customer-stories/${post.slug}`} className="block">
      <article className={`flex flex-col gap-6 lg:gap-8 ${type === "listingPage" ? "bg-white" : "bg-[#E5FFED]"} rounded-[30px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] p-6 pb-8 w-full max-w-[338px] lg:max-w-none mx-auto lg:h-full transition-all duration-300 hover:shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.12),0px_8px_10px_-2px_rgba(16,24,40,0.05)] hover:-translate-y-2 group cursor-pointer`} >
        {/* Media */}
        <div className="relative w-full h-[240px] self-stretch rounded-[30px] bg-[#0E1821] overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.02]">
          {/* Card background image */}
          {cardBackgroundImageUrl ? (
            <Image
              src={cardBackgroundImageUrl}
              alt=""
              fill
              className="object-cover transition-opacity duration-300 "
            />
          ) : (
            <div className="text-white text-xs p-2">No image</div>
          )}
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-between gap-8 lg:gap-8 flex-1 ">
          <div className="flex flex-col gap-3">
            <span
              className="text-[#24823D] text-[14px] leading-[20px] font-semibold"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              {post.category}
            </span>

            <div className="flex items-start">
              <h3
                className="text-[#101828] text-[24px] leading-[32px] font-semibold flex-1 transition-colors duration-300 group-hover:text-[#24823D] "
                style={{ fontFamily: '"Funnel Display", sans-serif' }}
              >
                {post.title}
              </h3>
              <div className="flex-shrink-0 transition-transform duration-300   group-hover:translate-x-1 group-hover:-translate-y-1">
                <Image
                  src="/assets/images/blog/arrow-up-right.svg"
                  alt=""
                  width={36}
                  height={36}
                  className="w-7 h-7"
                />
              </div>
            </div>

            {
              type === "listingPage" &&
              <p
                className="text-[#667085] text-[16px] leading-[24px]"
                style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
              >
                {post.excerpt}
              </p>
            }
          </div>

          {/* Read more link removed on mobile per spec, keeping for consistency */}
        </div>
      </article>
    </Link>
  );
}
