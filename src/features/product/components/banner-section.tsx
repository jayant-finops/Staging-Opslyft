"use client";

import Link from "next/link";
import Image from "next/image";
import { productBannerFallback } from "@/features/product/data";

type ProductBannerSectionProps = {
  data?: typeof productBannerFallback | null;
};

export default function ProductBannerSection({
  data,
}: ProductBannerSectionProps) {
  const bannerData = data || productBannerFallback;
  return (
    <section className="relative bg-[#F1F1F1]">
      <div className="mx-auto w-full max-w-[1920px] flex flex-col items-center justify-center py-[50px] lg:py-[100px] gap-[10px] px-4 lg:px-0">
        {/* inner frame */}
        <div className="relative w-full max-w-[345px] lg:max-w-[1170px] h-[362px] lg:h-[385px] rounded-[20px] lg:rounded-[40px] overflow-hidden">
          {/* dark download app block */}
          <div className="absolute inset-0 bg-[#0E1821]" />

          {/* soft radial highlights - desktop */}
          <div className="pointer-events-none absolute hidden lg:block right-2 top-0 bottom-[-33%] w-[680.82px] blur-[200px] opacity-90 bg-[#0B2E19]" />

          {/* Decorative circles - desktop */}
          <div
            className="pointer-events-none absolute hidden lg:block  left-[300px] -top-[184px]"
            aria-hidden="true"
          >
            <div className="relative w-[573.78px] h-[578.58px]">
              <Image
                src={bannerData.decorativeImage}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Mobile green blur */}
          <div className="pointer-events-none absolute lg:hidden -right-[121.41px] top-0 bottom-[30.43%] w-[356.91px] bg-[#0B2E19] blur-[104.849px]" />

          {/* Decorative circles - mobile */}
          <div
            className="pointer-events-none absolute lg:hidden left-1/2 -translate-x-1/2 -top-[97.53px]"
            aria-hidden="true"
          >
            <div className="relative w-[402.27px] h-[405.63px]">
              <Image
                src={bannerData.decorativeImage}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* headline */}
          <h3
            className="absolute left-1/2 -translate-x-1/2 top-[69px] lg:top-[83px] text-center text-white w-[314.6px] lg:w-[973px] text-[28px] lg:text-[48px] leading-[35px] lg:leading-[55px] font-semibold tracking-[-1px]"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {bannerData.title}
          </h3>

          {/* CTA */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[211.88px] lg:top-[248px]">
            <Link href={bannerData.ctaUrl} className="block">
              <button className="cursor-pointer inline-flex items-center justify-center rounded-[12px] bg-[#24823D] text-white w-[220px] h-[60px] px-8 py-[22px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <span
                  className="text-[18px] leading-[16px] font-semibold text-center"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {bannerData.ctaText}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
