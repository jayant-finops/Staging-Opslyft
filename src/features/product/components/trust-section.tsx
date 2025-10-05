"use client";

import Image from "next/image";
import { productTrustFallback } from "@/features/product/data";

type ProductTrustSectionProps = {
  data?: typeof productTrustFallback | null;
};

export default function ProductTrustSection({
  data,
}: ProductTrustSectionProps) {
  const trustData = data || productTrustFallback;
  return (
    <section className="relative bg-[#000] block -mt-[1px]">
      <div
        className="mx-auto w-full max-w-[1920px] rounded-t-[40px]"
        style={{ background: "#F1F1F1" }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row py-[60px] gap-[34px] min-h-[259px] items-center justify-center">
            <p
              className="text-[14px] sm:text-[16px] text-gray-600 lg:w-[251px] text-start"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              {trustData.heading}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
              {trustData.logos.map((l) => (
                <div
                  key={l.alt}
                  className="relative w-[104px] h-[44px] md:w-[132px] md:h-[56px]"
                >
                  <Image
                    src={l.src}
                    alt={l.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
