"use client";

import Image from "next/image";
import Link from "next/link";
import { JoinDoc } from "@/types";
import { joinFallback } from "@/features/about/data";
import LegacyButton from "@/components/ui/legacy-button";

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
      className="relative overflow-hidden py-16 lg:py-24  h-[788px] lg:h-[689px]"
      style={{ backgroundColor: "#11301F" }}
    >
      {/* Decorative circles behind team images */}
      {/* <div className="absolute bottom-[65px] left-[58%] -translate-x-1/2 w-[400px] h-[400px] lg:right-[-210px] lg:top-[170px] lg:left-auto lg:translate-x-0 lg:-translate-y-1/2 lg:w-1/2 lg:h-full 2xl:right-[-340px] 2xl:top-[170px] pointer-events-none">
        <Image
          src="/assets/images/about--missio/circles.png"
          alt="Decorative circles"
          fill
          className="object-contain"
          priority={false}
        />
      </div> */}

      {/* Mobile team images - bottom center */}
      <div className="absolute top-[50%] left-[43%] md:left-[48%]  -translate-x-1/2 w-[439px] h-[439px] lg:hidden pointer-events-none">
        <Image
          src={bg}
          alt="Join Team Mobile"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Desktop team images - positioned on the right */}
      <div className="hidden lg:block absolute lg:right-[0px] lg:top-[315px] 2xl:right-[140px] 3xl:right-[270px]  -translate-y-1/2 w-[668px] h-[652px]  pointer-events-none">
        <Image
          src={bg}
          alt="Join Team Desktop"
          fill
          className="object-contain object-center"
          style={{ filter: "grayscale(50%)" }}
          priority
        />
      </div>

      {/* Main content container */}
      <div className="relative  mx-auto px-6 lg:px-[141px] 3xl:px-[380px] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left column - Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left  lg:w-[725px] ">
            <h2
              className="text-[#f1f1f1] lg:text-[e8f6e3] text-[28px] lg:text-[48px] font-semibold lg:font-bold leading-[28px] lg:leading-[56px]"
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
              className="text-[#d3d3d3] text-[14px] lg:text-[16px] leading-[1.5] mx-auto lg:mx-0 font-light lg:font-normal lg:leading-[24px]  "
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              {content.subheading}
            </p>
            <div className="pt-4 ">
              <Link href={content.ctaHref}>
                <LegacyButton
                  variant="primary"
                  size="md"
                  className="w-[156px] h-[48px] py-[16px] px-[0px] mt-[40px] sm:mt-0 my-[120px] sm:my-0 mx-auto "
                >
                  {content.ctaText}
                </LegacyButton>
              </Link>
            </div>
          </div>

          {/* Right column - Reserved for team images (handled by background) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
