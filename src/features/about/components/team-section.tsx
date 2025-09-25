"use client";

import Image from "next/image";
import { TeamDoc } from "@/types";
import { teamFallback } from "@/features/about/data";

interface Props {
  data?: TeamDoc | null;
}

export default function TeamSection({ data }: Props) {
  const content = data ?? teamFallback;

  // Helper function to get image src
  const getImageSrc = (member: {
    image?: { asset?: { url?: string } };
    imageSrc?: string;
  }) => {
    return (
      member.image?.asset?.url ||
      member.imageSrc ||
      "/assets/images/team/aayush.png"
    );
  };
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2
            className="text-[#0E1821] text-[26px] lg:text-[32px] font-semibold"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {content.heading}
          </h2>
          <p
            className="text-gray-500 text-xs mt-2"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {content.subheading}
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {content.members.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-[#DCE6DF] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              <div className="relative h-[240px]">
                <Image
                  src={getImageSrc(m)}
                  alt={m.name}
                  fill
                  className="object-cover"
                />
                {/* green gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(60% 70% at 50% 20%, rgba(36,130,61,0.35) 0%, rgba(36,130,61,0) 70%)",
                  }}
                />
              </div>
              <div className="p-4">
                <div
                  className="text-[#24823D] text-sm font-semibold"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {m.name}
                </div>
                <div
                  className="text-[11px] text-[#0E1821] opacity-80 mb-2"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {m.title}
                </div>
                <div
                  className="text-[11px] text-gray-500"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {m.bio}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Investors */}
        <div className="text-center mt-20">
          <h3
            className="text-[#0E1821] text-[22px] lg:text-[28px] font-semibold mb-2"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {content.investorsHeading}
          </h3>
          <p
            className="text-gray-500 text-xs max-w-2xl mx-auto"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {content.investorsSubheading}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10">
            {content.investors.map((inv, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#A6D9B5] ring-offset-2 ring-offset-white">
                  <Image
                    src={getImageSrc(inv)}
                    alt={inv.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div
                    className="text-[#0E1821] text-sm font-medium"
                    style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                  >
                    {inv.name}
                  </div>
                  <div
                    className="text-gray-500 text-[11px]"
                    style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                  >
                    {inv.org}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
