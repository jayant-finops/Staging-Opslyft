"use client";

import Link from "next/link";
import Image from "next/image";
import { LegacyButton } from "@/components/ui";
import { customerStoriesHeroFallback } from "../data";

type CustomerStoriesHeroSectionProps = {
  data?: typeof customerStoriesHeroFallback | null;
};

export default function CustomerStoriesHeroSection({
  data,
}: CustomerStoriesHeroSectionProps) {
  const heroData = data || customerStoriesHeroFallback;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(104.85deg, #000000 8.41%, #0E1821 40.22%)",
      }}
    >
      {/* Desktop/mobile specific rounded bottom radius per spec */}

      <div className="mx-auto max-w-[1920px] overflow-hidden rounded-b-[17.1156px] lg:rounded-b-[40px]">
        {/* subtle bottom shadow on mobile like spec */}
        <div
          className="pointer-events-none absolute inset-x-0 -bottom-[1px] h-10"
          style={{ boxShadow: "0px 5px 12px rgba(36, 130, 56, 0.23)" }}
        />

        {/* Hero Background SVG - Desktop */}
        <div className="pointer-events-none absolute inset-x-0 top-[-100] w-full h-[678px] hidden lg:flex justify-center">
          <Image
            src={heroData.backgroundImage}
            alt=""
            width={1591}
            height={678}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>

        {/* Hero Background SVG - Mobile */}
        <div className="pointer-events-none absolute inset-x-0 top-0 w-full h-[400px] lg:hidden flex justify-center">
          <Image
            src={heroData.backgroundImage}
            alt=""
            width={1591}
            height={678}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[603px] md:min-h-[669px] flex items-center">
            <div className="w-full text-center text-white space-y-4 md:space-y-6 py-20">
              {/* Badge */}
              <div className="inline-block">
                <div
                  className="relative inline-flex items-center justify-center h-8 px-4 rounded-full text-[11px] md:text-[13px] uppercase tracking-[1px] font-light text-[#68CA68]"
                  style={{
                    fontFamily:
                      'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif',
                    background:
                      "linear-gradient(180deg, rgba(31,65,50,0.78) 0%, rgba(19,48,31,0.28) 100%)",
                    borderColor: "rgba(135, 135, 135, 0.36)",
                    borderWidth: 0.5,
                    boxShadow:
                      "0 14px 22px rgba(0,0,0,0.32), inset 0 1px 0 rgba(238,250,247,0.10), inset 0 -2px 6px rgba(0,0,0,0.35)",
                  }}
                >
                  {heroData.badgeText}
                </div>
              </div>

              {/* Headline */}
              <h1
                className="mx-auto max-w-[1125px] text-[30px] sm:text-[40px] lg:text-[56px] font-semibold leading-[1.25] lg:leading-[70px] tracking-[-1px]"
                style={{
                  fontFamily:
                    'var(--font-funnel-display), "Funnel Display", sans-serif',
                }}
              >
                {heroData.title}
              </h1>

              {/* Subcopy */}
              <p
                className="mx-auto max-w-[600px] text-[#B7B7B7] text-sm sm:text-base leading-6 sm:leading-6 font-light"
                style={{
                  fontFamily:
                    'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif',
                }}
              >
                {heroData.description}
              </p>

              {/* CTA */}
              {heroData.ctaUrl && (
                <div className="pt-2">
                  <Link href={heroData.ctaUrl}>
                    <LegacyButton variant="primary" size="md">
                      {heroData.ctaText}
                    </LegacyButton>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
