"use client";

import Link from "next/link";
import { LegacyButton } from "@/components/ui";
import { productHeroFallback } from "@/features/product/data";

type ProductHeroSectionProps = {
  data?: typeof productHeroFallback | null;
};

export default function ProductHeroSection({ data }: ProductHeroSectionProps) {
  const heroData = data || productHeroFallback;
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(104.85deg, #000000 8.41%, #0E1821 40.22%)",
      }}
    >
      {/* Size targets for 1080p/1440p; mobile full-bleed height */}
      <div className="mx-auto max-w-[1920px] overflow-hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[656px] md:min-h-[669px] flex items-center ">
            <div className="w-full text-center text-white space-y-4 sm:space-y-6 py-20 lg:mt-15">
              {/* Borrowed badge from home hero */}
              <div className="inline-block">
                <div
                  className="text-[11px] sm:text-[13px] uppercase tracking-wider text-[#68CA68] font-light px-3 sm:px-4 py-1.5 sm:py-2 border rounded-full"
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
                  {heroData.badge}
                </div>
              </div>

              <h1
                className="mx-auto max-w-[980px] text-[30px] sm:text-[40px] lg:text-[56px] font-semibold leading-[1.15] tracking-[-1px]"
                style={{
                  fontFamily:
                    'var(--font-funnel-display), "Funnel Display", sans-serif',
                }}
              >
                {heroData.title}
              </h1>

              <p
                className="mx-auto max-w-[800px] text-[#b7b7b7] text-sm sm:text-base leading-relaxed font-light"
                style={{
                  fontFamily:
                    'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif',
                }}
              >
                {heroData.description}
              </p>

              {heroData.ctaUrl && (
                <div className="pt-2 sm:pt-4">
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

      {/* Subtle bottom shadow to match spec */}
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-[1px] h-10"
        style={{ boxShadow: "0px 5px 12px rgba(36, 130, 56, 0.23)" }}
      />
    </section>
  );
}
