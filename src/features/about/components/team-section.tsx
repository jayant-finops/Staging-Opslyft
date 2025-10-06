"use client";

import Image from "next/image";
import { TeamDoc } from "@/types";
import { teamFallback } from "@/features/about/data";
import { urlFor } from "@/lib/sanity";

interface Props {
  data?: TeamDoc | null;
}

export default function TeamSection({ data }: Props) {
  const content = data ?? teamFallback;

  // Helper function to get image src
  const getImageSrc = (member: { image?: any; imageSrc?: string }) => {
    // If we have Sanity image data, use urlFor to convert it
    if (member.image?.asset) {
      return urlFor(member.image).url();
    }
    // Otherwise use local fallback
    return member.imageSrc || "/assets/images/team/aayush.png";
  };
  return (
    <section className="relative bg-white pt-[66px] pb-[21px] lg:pb-[229px] lg:pt-[102px] overflow-hidden">
      {/* Decorative circles background */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[280px] lg:top-[150px] w-[600px] h-[600px]">
        <Image
          src="/assets/images/about--missio/circles.png"
          alt="Decorative circles"
          fill
          className="object-contain"
          priority={false}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-[52px] lg:mb-[75px] ">
          <h2
            className="text-[#202020] text-[28px] lg:text-[48px] font-semibold leading-[28px] lg:leading-[55px]"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {content.heading}
          </h2>
          <p
            className="text-[#154b23] text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] font-light lg:font-normal mt-[12px] lg:mt-[16px] opacity-[0.76] lg:opacity-[1]"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {content.subheading}
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] lg:gap-[60px] lg:w-[1170px] mx-auto">
          {content.members?.map((m) => (
            <div
              key={m.name}
              className="mx-auto p-[10px] rounded-2xl border border-[#DCE6DF] bg-[#e0e1df] shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden w-[322px] h-[418px]"
            >
              <div className="relative h-[240px] ">
                {/* Card background SVG */}
                <Image
                  src="/assets/images/team/card-bg.svg"
                  alt="Card background"
                  fill
                  className="object-cover rounded-[10px]"
                  priority={false}
                />
                {/* Team member image */}
                <Image
                  src={getImageSrc(m)}
                  alt={m.name || "Team member"}
                  fill
                  className="object-cover rounded-[10px]"
                />
              </div>
              <div className="py-4 lg:pt-6  space-y-[10px]">
                <div
                  className="text-[#24823D] text-[24px] font-bold leading-[18px]"
                  style={{ fontFamily: '"Funnel Display", sans-serif' }}
                >
                  {m.name}
                </div>
                <div
                  className=" bg-[rgba(60,195,94,0.48)] rounded-[17px]  justify-center items-center flex h-[24px] w-fit px-[10px]"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  <span className="text-[15px] text-[#202020] font-medium leading-[18px] ">
                    {m.title}
                  </span>
                </div>
                <div
                  className="text-[14px] font-light leading-[1.2] text-[#0e1821]"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {m.bio}
                </div>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[24px] h-[24px] hover:opacity-70 transition-opacity"
                  >
                    <Image
                      src="/assets/images/team/LinkedIn.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Investors */}
        <div className="text-center mt-[152px]">
          <h3
            className="text-[#202020] text-[28px] lg:text-[48px] font-semibold mb-2 leading-[28px] lg:leading-[55px]"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {content.investorsHeading}
          </h3>
          <p
            className="text-[#154b23] text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] font-light lg:font-normal mt-[12px] lg:mt-[16px] max-w-[698px] mx-auto opacity-[0.75] lg:opacity-[1]"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {content.investorsSubheading}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  mt-[52px] lg:mt-[123px] mx-auto w-[350px] lg:w-[1170px] space-y-[32px] lg:space-y-[11px]">
            {content.investors?.map((inv, i: number) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row items-center gap-3 lg:w-[262px] lg:h-[116px]  justify-start"
              >
                <div
                  className="relative w-14 h-14 lg:w-[100px] lg:h-[100px] rounded-[400px] p-[2px]"
                  style={{
                    background:
                      "var(--green_light-gradient, linear-gradient(180deg, #E6FFE0 4.47%, #73AF5E 96.19%))",
                  }}
                >
                  <div className="relative w-full h-full rounded-[400px] overflow-hidden ">
                    <Image
                      src={getImageSrc(inv)}
                      alt={inv.name || "Investor"}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div
                    className="text-[#05160d] text-[14px] lg:text-[16px] font-medium lg:font-semibold leading-[1.2] lg:leading-[1.2] tracking-[0px] lg:text-left "
                    style={{ fontFamily: '"Funnel Display", sans-serif' }}
                  >
                    {inv.name}
                  </div>
                  <div
                    className="text-[#24823D] text-[14px] font-normal lg:font-semibold leading-[1.2] lg:leading-[22px]  lg:text-left"
                    style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                  >
                    {inv.org}
                  </div>
                  {inv.linkedin && (
                    <a
                      href={inv.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[16px] w-[16px] lg:h-[24px] lg:w-[24px] hover:opacity-70 transition-opacity"
                    >
                      <Image
                        src="/assets/images/team/LinkedIn.svg"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                      />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
