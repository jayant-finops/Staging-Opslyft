"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
// import { useMultiRippleAnimation } from "@/hooks/useRippleAnimation";
import { StruggleSection as StruggleSectionType } from "@/types";
import { struggleFallback } from "@/features/home/data/struggle";

interface StruggleSectionProps {
  data: StruggleSectionType;
}

interface ExtendedFeature {
  title: string;
  description: string;
  iconSrc: string;
}

export default function StruggleSection({ data }: StruggleSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const features =
    data?.features?.length > 0
      ? data.features.map((f, i) => ({
          title: f.title,
          description: f.description,
          // fallback to local icons when sanity icon is missing
          iconSrc: struggleFallback.features[i]?.iconSrc,
        }))
      : struggleFallback.features;

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 pb-8 sm:pb-16 md:pb-32 lg:pb-48 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${struggleFallback.backgroundSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-15 md:mt-10">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16 space-y-4">
          <div
            className="inline-block text-[13px] uppercase tracking-wider text-[#68CA68] font-[400] px-3 sm:px-4 py-1.5 sm:py-2 rounded-[30px] backdrop-blur-md border"
            style={{
              fontFamily: '"IBM Plex Sans", sans-serif',
              background:
                "linear-gradient(180deg, rgba(31,65,50,0.78) 0%, rgba(19,48,31,0.28) 100%)",
              borderColor: "rgba(135, 135, 135, 0.36)",
              borderWidth: 0.5,
              boxShadow:
                "0 14px 22px rgba(0,0,0,0.32), inset 0 1px 0 rgba(238,250,247,0.10), inset 0 -2px 6px rgba(0,0,0,0.35)",
            }}
          >
            {data?.sectionLabel || struggleFallback.sectionLabel}
          </div>
          <h2
            className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#d3d3d3]"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {data?.title || struggleFallback.title}
          </h2>
          <p
            className="text-[#e8f6e3] mt-3 sm:mt-4 max-w-full sm:max-w-2xl mx-auto text-sm font-light px-2 sm:px-4"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {data?.subtitle || struggleFallback.subtitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0 max-w-[376px] md:max-w-[1170px] mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-4 sm:p-6 backdrop-blur-[4px] overflow-hidden cursor-pointer transition-all duration-300 ease-in-out max-w-[343px] md:max-w-[374px] max-h-[268px] md:max-h-[292px] mx-auto flex flex-col rounded-[30px] gap-2 ${
                index === features.length - 1 ? "mb-48 sm:mb-0" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() =>
                setHoveredIndex((prev) => (prev === index ? null : prev))
              }
              style={{
                backgroundColor:
                  hoveredIndex === index
                    ? "#0E1821"
                    : "rgba(255, 255, 255, 0.04)",
                backgroundImage:
                  "radial-gradient(56px 56px at 14px 14px, rgba(36,130,61,0.18) 0%, rgba(36,130,61,0.10) 22%, rgba(36,130,61,0.04) 40%, rgba(36,130,61,0) 60%), linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 100%)",
                border:
                  hoveredIndex === index
                    ? "1px solid #7c7c7c"
                    : "1px solid rgba(109,109,109,0.60)",
                boxShadow:
                  "0 1.441px 4px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
                backdropFilter: "blur(2px)",
              }}
            >
              {/* Icon */}
              <div className="relative w-[94px] h-[94px] md:w-[103px] md:h-[103px] flex-shrink-0 ">
                <Image
                  src={(feature as ExtendedFeature).iconSrc}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 flex-grow">
                <h3
                  className="text-[22px] md:text-[24px] font-semibold text-[#f1f1f1]"
                  style={{ fontFamily: '"Funnel Display", sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-400 leading-relaxed text-[14px] md:text-[16px] font-light"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
