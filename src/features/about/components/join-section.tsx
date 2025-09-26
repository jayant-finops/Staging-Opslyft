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
      className="relative overflow-hidden h-[788px] lg:h-[689px]"
      style={{ backgroundColor: "#11301F" }}
    >

      {/* absolute pointer-events-none bottom-[-120px] left-1/2 -translate-x-1/2 w-[140%] opacity-80 lg:opacity-30 lg:inset-y-0 lg:bottom-auto lg:left-auto lg:translate-x-0 lg:-right-[150px] lg:-top-[150px] lg:w-[50%] }
      {/* Right anchored art, not zoomed */}
      <div className="absolute inset-y-0 -right-[150px] -top-[150px] w-[58%] md:w-[52%]  opacity-80 lg:opacity-30 bottom-[-120px] left-1/2 -translate-x-1/2 lg:inset-y-0 lg:bottom-[120px] lg:left-auto lg:translate-x-0 lg:-right-[150px] lg:-top-[150px] lg:w-[50%]">
        <Image
          src={bg}
          alt="Join Team"
          fill
          className="object-contain object-bottom lg:object-right"
          priority
        />
      </div>

      {/* Taller section to match reference */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 min-h-[380px] md:min-h-[440px] lg:min-h-[520px] flex items-center">
        <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
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
            className="inline-block mt-6 bg-[#24823D] hover:bg-[#1f6e33] text-white text-sm font-medium px-6 py-2 rounded-md shadow mx-auto lg:mx-0"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {content.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
