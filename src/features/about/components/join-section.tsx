"use client";

import Image from "next/image";
import Link from "next/link";
import { JoinDoc } from "@/types";
import { joinFallback } from "@/features/about/data";

interface Props {
  data?: JoinDoc | null;
}

export default function JoinSection({ data }: Props) {
  const content = data ?? joinFallback;
  const bg =
    data?.background?.asset?._ref ||
    (content as typeof joinFallback).backgroundSrc;
  const heading = (content.heading || "").split("\n");
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#11301F" }}
    >
      {/* Right anchored art, not zoomed */}
      <div className="absolute inset-y-0 right-0 w-[58%] md:w-[52%] lg:w-[50%]">
        <Image
          src={bg}
          alt="Join Team"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      {/* Taller section to match reference */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 min-h-[380px] md:min-h-[440px] lg:min-h-[520px] flex items-center">
        <div className="max-w-xl">
          <h2
            className="text-white text-[28px] lg:text-[36px] font-semibold leading-tight"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {heading.map((h: string, i: number) => (
              <span key={i}>
                {h}
                {i < heading.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p
            className="text-gray-300 text-sm mt-4"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {content.subheading}
          </p>
          <Link
            href={content.ctaHref}
            className="inline-block mt-6 bg-[#24823D] hover:bg-[#1f6e33] text-white text-sm font-medium px-6 py-2 rounded-md shadow"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {content.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
