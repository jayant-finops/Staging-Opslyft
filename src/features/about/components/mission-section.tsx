"use client";

import { AboutMissionSection as SanityAboutMission } from "@/types";
import { LocalAboutMission } from "@/features/about/data";

interface Props {
  data?: SanityAboutMission | null;
  fallbackData: LocalAboutMission;
}

export default function AboutMissionSection({ data, fallbackData }: Props) {
  const content = data || fallbackData;

  return (
    <section className="relative w-full bg-[#F5FAF4] py-14 lg:py-20 xl:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-12">
        <h2
          className="text-[#0F2917] text-[28px] lg:text-[36px] xl:text-[44px] font-semibold mb-6 lg:mb-8"
          style={{ fontFamily: '"Funnel Display", sans-serif' }}
        >
          {content.title}
        </h2>

        <p
          className="text-[#2C6B3F] text-[18px] lg:text-[22px] xl:text-[26px] leading-[1.6] max-w-5xl"
          style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
        >
          {content.description}
        </p>

        {/* concentric circles background */}
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-16 lg:top-20 w-[680px] h-[680px] opacity-30"
          aria-hidden
        >
          <svg viewBox="0 0 680 680" fill="none" className="w-full h-full">
            <circle
              cx="340"
              cy="340"
              r="120"
              stroke="#CFE2D7"
              strokeWidth="1.5"
            />
            <circle
              cx="340"
              cy="340"
              r="200"
              stroke="#DAE9E1"
              strokeWidth="1.3"
            />
            <circle
              cx="340"
              cy="340"
              r="280"
              stroke="#E8F1EC"
              strokeWidth="1.1"
            />
          </svg>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 lg:gap-10 max-w-4xl mt-10 lg:mt-14">
          {content.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-[#2C6B3F] text-[40px] lg:text-[56px] font-semibold"
                style={{ fontFamily: '"Funnel Display", sans-serif' }}
              >
                {s.value}
              </div>
              <div
                className="text-[#7A9A87] text-[13px] lg:text-[14px]"
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
