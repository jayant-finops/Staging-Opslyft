"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AboutHeroSection as SanityAboutHero } from "@/types";
import { LocalAboutHero } from "@/features/about/data";

interface AboutHeroSectionProps {
  data?: SanityAboutHero | null;
  fallbackData: LocalAboutHero;
}

export default function AboutHeroSection({
  data,
  fallbackData,
}: AboutHeroSectionProps) {
  // Use Sanity data if available, otherwise fallback
  const content = data || fallbackData;

  // Note: backgroundImage could be used for custom backgrounds if needed in the future
  // const backgroundImage = data?.backgroundImage
  //   ? `url(${data.backgroundImage.asset._ref})`
  //   : `url(${fallbackData.backgroundSrc})`;

  // Handle decorative circles - prioritize Sanity image, then fallback
  const circlesImage = data?.decorativeCircles?.asset._ref
    ? data.decorativeCircles.asset._ref
    : fallbackData.decorativeCircles.src;

  const circlesAlt =
    data?.decorativeCircles?.alt || fallbackData.decorativeCircles.alt;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(185deg, #000000 0%, #0E1821 100%)",
        }}
      />

      {/* Static radial green glow behind CTA (no motion) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 50% at 50% 62%, rgba(36,130,61,0.70) 0%, rgba(36,130,61,0.35) 38%, rgba(36,130,61,0.14) 62%, rgba(0,0,0,0) 82%)",
        }}
      />

      {/* Decorative circles - top right */}
      <div className="pointer-events-none absolute -right-[8image.png0px] -top-[40px] lg:-right-[180px] lg:-top-[50px] xl:-right-[200px] xl:-top-[60px] w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] xl:w-[560px] xl:h-[500px]">
        <Image
          src={circlesImage}
          alt={circlesAlt}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Decorative circles - bottom left */}
      <div className="pointer-events-none absolute -left-[80px] -bottom-[40px] lg:-left-[200px] lg:-bottom-[140px] xl:-left-[160px] xl:-bottom-[60px] w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] xl:w-[560px] xl:h-[500px]">
        <Image
          src={circlesImage}
          alt={circlesAlt}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 xl:px-12 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 xl:mb-10 leading-tight"
          style={{ fontFamily: '"Funnel Display", sans-serif' }}
        >
          {content.titleLines.map((line, index) => (
            <span key={index}>
              {index === 1 ? (
                <span className="text-[#24823D]">{line}</span>
              ) : (
                line
              )}
              {index < content.titleLines.length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg lg:text-xl xl:text-2xl text-gray-200 mb-8 lg:mb-10 xl:mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
        >
          {content.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href={content.ctaButton.url}
            className="inline-flex items-center px-8 py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 bg-white text-black font-semibold rounded-xl lg:rounded-2xl xl:rounded-3xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl text-base lg:text-lg xl:text-xl shimmer-button relative overflow-hidden"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {content.ctaButton.text}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
