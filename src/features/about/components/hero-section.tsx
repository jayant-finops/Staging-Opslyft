"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

  const backgroundImages = [
    "/assets/images/about-hero/bg-1.png",
    "/assets/images/about-hero/bg-2.png",
    "/assets/images/about-hero/bg-3.png",
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(185deg, #000000 0%, #0E1821 100%)",
        }}
      />

      {/* Crossfading radial background images */}
      <div className="absolute inset-0 pointer-events-none">
        {backgroundImages.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentBgIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              willChange: "opacity",
            }}
          />
        ))}
      </div>

      {/* Decorative circles - top right */}
      <div className="hidden lg:block pointer-events-none absolute -right-[80px] -top-[40px] lg:-right-[180px] lg:-top-[50px] 2xl:right-[100px] 2xl:top-[30px] w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] 2xl:w-[660px] 2xl:h-[600px]">
        <Image
          src={circlesImage}
          alt={circlesAlt}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Decorative circles - bottom left */}
      <div className="pointer-events-none absolute -bottom-[40px] -left-[200px] lg:-bottom-[140px] xl:-left-[160px] xl:-bottom-[60px] w-[634px] h-[382px] lg:w-[400px] lg:h-[400px] xl:w-[660px] xl:h-[600px]">
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
          className="mb-[16px] lg:mb-[20px] lg:space-y-[0px] gap-[16px] flex flex-col"
          style={{ fontFamily: '"Funnel Display", sans-serif' }}
        >
          {content.titleLines.map((line, index) => (
            <span key={index}>
              {index === 1 ? (
                <span
                  className="text-[34px] lg:text-[72px] leading-[40px] lg:leading-[86px] tracking-[-1px] lg:tracking-[1.2px] font-semibold"
                  style={{
                    background:
                      "linear-gradient(184deg, #FFFFFF 0%, #31B353 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  {line}
                </span>
              ) : (
                <span
                  className="text-white text-[34px] lg:text-[72px] leading-[40px] lg:leading-[86px] tracking-[-1px] lg:tracking-[1.2px] font-semibold"
                  style={{ fontFamily: '"Funnel Display", sans-serif' }}
                >
                  {line}
                </span>
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
          className="text-[18px] text-[#9d9fa1] max-w-3xl mx-auto leading-[28px] tracking-[0.3px] font-normal w-[343px] lg:w-[437px] mb-[94px] lg:mb-[51px]"
          style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
        >
          {content.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Link
            href={content.ctaButton.url}
            className=" px-[36px] lg:px-[72px] py-[16px]  bg-white text-[#0e1821] rounded-xl transition-all duration-300 transform hover:scale-105 text-[18px]  relative overflow-hidden font-semibold leading-[16px] border border-[#24823D] shadow-[1px_2px_0px_0px_#24823d] hover:bg-[#24823D] hover:text-white hover:shadow-[1px_2px_0px_0px_#E8F6E2]"
            style={{
              fontFamily: '"IBM Plex Sans", sans-serif',
            }}
          >
            {content.ctaButton.text}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
