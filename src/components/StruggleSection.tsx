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
  const { ring1, ring2, ring3 } = useMultiRippleAnimation();

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
      className="relative py-24 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${struggleFallback.backgroundSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block text-[12px] uppercase tracking-wider text-[#68CA68] font-medium px-4 py-2 border border-[#2C4B38] rounded-full bg-[#13301F]">
            {data?.sectionLabel || struggleFallback.sectionLabel}
          </div>
          <h2 className="mt-6 text-3xl md:text-5xl font-semibold text-white">
            {data?.title || struggleFallback.title}
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            {data?.subtitle || struggleFallback.subtitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-[30px] p-6 backdrop-blur-[4px]"
              style={{
                width: "374px",
                height: "292px",
                border: "1px solid #6D6D6D",
                background: "rgba(255, 255, 255, 0.04)",
                boxShadow: "0 1.441px 4px 0 rgba(0, 0, 0, 0.34)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
              }}
            >
              {/* Icon */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={(feature as any).iconSrc}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-white">
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
