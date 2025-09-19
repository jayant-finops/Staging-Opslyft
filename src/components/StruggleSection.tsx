"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMultiRippleAnimation } from "@/hooks/useRippleAnimation";
import { StruggleSection as StruggleSectionType } from "@/types/sanity";
import { struggleFallback } from "@/data/struggle";

interface StruggleSectionProps {
  data: StruggleSectionType;
}

export default function StruggleSection({ data }: StruggleSectionProps) {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <div
            className="inline-block text-xs sm:text-[12px] uppercase tracking-wider text-[#68CA68] font-[400] px-3 sm:px-4 py-1.5 sm:py-2 border border-[#2C4B38] rounded-full bg-[#13301F]"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {data?.sectionLabel || struggleFallback.sectionLabel}
          </div>
          <h2
            className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#d3d3d3] px-4 sm:px-0"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {data?.title || struggleFallback.title}
          </h2>
          <p
            className="text-[#e8f6e3] mt-3 sm:mt-4 max-w-full sm:max-w-2xl mx-auto text-sm font-light px-4 sm:px-0"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {data?.subtitle || struggleFallback.subtitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-4 sm:p-6 backdrop-blur-[4px] overflow-hidden cursor-pointer transition-all duration-300 ease-in-out w-full max-w-[374px] mx-auto flex flex-col gap-4 sm:gap-6 ${
                index === features.length - 1 ? "mb-32 sm:mb-0" : ""
              }`}
              style={{
                minHeight: "250px",
                height: "auto",
                backgroundImage:
                  "url(/assets/images/hiddenCost/bg-default.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage =
                  "url(/assets/images/hiddenCost/card-bg.png)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage =
                  "url(/assets/images/hiddenCost/bg-default.png)";
              }}
            >
              {/* Icon */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0">
                <Image
                  src={(feature as any).iconSrc}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 sm:gap-3 flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
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
