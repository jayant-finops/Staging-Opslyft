"use client";

import Image from "next/image";
import { AboutMissionSection as SanityAboutMission } from "@/types";
import { LocalAboutMission } from "@/features/about/data";

interface Props {
  data?: SanityAboutMission | null;
  fallbackData: LocalAboutMission;
}

export default function AboutMissionSection({ data, fallbackData }: Props) {
  const content = data || fallbackData;

  return (
    <section className="relative w-full bg-[#f8fff4]  overflow-hidden h-[631px] lg:h-[780px] flex justify-center">
      <div className="w-[340px] lg:w-[1170px] pt-[40px] lg:pt-[100px]">
        <h2
          className="text-[#202020] text-[28px] lg:text-[56px] font-semibold leading-[25px] lg:leading-[42px] xl:leading-[1.2] mb-[57px] lg:mb-[63px] "
          style={{ fontFamily: '"Funnel Display", sans-serif' }}
        >
          {content.title}
        </h2>

        <p
          className="text-[#24823d] text-[24px] lg:text-[48px] leading-[1.2] font-medium mb-[57px] lg:mb-[72px] lg:opacity-[0.76]"
          style={{ fontFamily: '"Funnel Display", sans-serif' }}
        >
          {content.description}
        </p>

        {/* centered decorative image (replaces SVG circles) */}
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-[25px] lg:top-10 w-[680px] h-[680px]"
          aria-hidden
        >
          <Image
            src="/assets/images/about--missio/image.png"
            alt="Decorative circles"
            fill
            className="object-contain"
            priority={false}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-[32px] lg:gap-[231px] max-w-4xl mx-auto">
          {content.stats.map((s) => (
            <div key={s.label} className="text-center ">
              <div
                className="text-[#b3d0a9] text-[37px] lg:text-[72px] leading-[1.2] font-semibold"
                style={{ fontFamily: '"Funnel Display", sans-serif' }}
              >
                {s.value}
              </div>
              <div
                className="text-[#afafaf] text-[13px] lg:text-[14px]"
                style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
