"use client";

import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useLaptopZoomEffect } from "@/hooks/useScrollAnimation";
import { Hero } from "@/types/sanity";
import { useEffect, useMemo } from "react";

interface HeroSectionProps {
  data: Hero;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const { ref, scale, x, y, scrollYProgress } = useLaptopZoomEffect();

  // Image sequence for perceived rotation as we zoom
  const frameSources = useMemo(
    () => [
      "/assets/images/laptop1.png",
      "/assets/images/laptop2.png",
      "/assets/images/laptop2.png",
      "/assets/images/laptop2.png",
      "/assets/images/laptop3.png",
      "/assets/images/laptop3.png",
      "/assets/images/laptop3.png",
      "/assets/images/laptop4.png",
      "/assets/images/laptop4.png",
      "/assets/images/laptop4.png",
      "/assets/images/laptop5.png",
      "/assets/images/laptop5.png",
      "/assets/images/laptop5.png",
    ],
    []
  );

  // Preload frames to avoid flicker during scroll transitions
  useEffect(() => {
    frameSources.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [frameSources]);

  // Cross-fade opacities per frame across scroll progress
  const frameCount = frameSources.length;
  const fade = 1 / (frameCount * 3); // small overlap for smoother blend

  // Create opacity transforms for each frame
  const opacity0 = useTransform(
    scrollYProgress,
    [0, 1 / frameCount, Math.min(1, 1 / frameCount + fade)],
    [1, 1, 0],
    { clamp: true }
  );
  const opacity1 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 1 / frameCount - fade),
      1 / frameCount,
      2 / frameCount,
      Math.min(1, 2 / frameCount + fade),
    ],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 2 / frameCount - fade),
      2 / frameCount,
      3 / frameCount,
      Math.min(1, 3 / frameCount + fade),
    ],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 3 / frameCount - fade),
      3 / frameCount,
      4 / frameCount,
      Math.min(1, 4 / frameCount + fade),
    ],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const opacity4 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 4 / frameCount - fade),
      4 / frameCount,
      5 / frameCount,
      Math.min(1, 5 / frameCount + fade),
    ],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const opacity5 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 5 / frameCount - fade),
      5 / frameCount,
      6 / frameCount,
      Math.min(1, 6 / frameCount + fade),
    ],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const opacity6 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 6 / frameCount - fade),
      6 / frameCount,
      7 / frameCount,
      Math.min(1, 7 / frameCount + fade),
    ],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const opacity7 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 7 / frameCount - fade),
      7 / frameCount,
      8 / frameCount,
      Math.min(1, 8 / frameCount + fade),
    ],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const opacity8 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 8 / frameCount - fade),
      8 / frameCount,
      9 / frameCount,
      Math.min(1, 9 / frameCount + fade),
    ],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const opacity9 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 9 / frameCount - fade),
      9 / frameCount,
      10 / frameCount,
      Math.min(1, 10 / frameCount + fade),
    ],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const opacity10 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 10 / frameCount - fade),
      10 / frameCount,
      11 / frameCount,
      Math.min(1, 11 / frameCount + fade),
    ],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const opacity11 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 11 / frameCount - fade),
      11 / frameCount,
      12 / frameCount,
      Math.min(1, 12 / frameCount + fade),
    ],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const opacity12 = useTransform(
    scrollYProgress,
    [Math.max(0, 12 / frameCount - fade), 12 / frameCount, 1],
    [0, 1, 1],
    { clamp: true }
  );

  const opacities = [
    opacity0,
    opacity1,
    opacity2,
    opacity3,
    opacity4,
    opacity5,
    opacity6,
    opacity7,
    opacity8,
    opacity9,
    opacity10,
    opacity11,
    opacity12,
  ];

  return (
    <section className="relative min-h-[100vh]">
      {/* Sticky background content */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-background.png"
            alt="Background gradient"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main content container */}
        <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Text content */}
          <div className="text-white space-y-8 lg:pr-8">
            {/* Green label */}
            <div className="inline-block">
              <div
                className="text-[13px] uppercase tracking-wider text-[#68CA68] font-light px-4 py-2 border border-[#F0F7ED0A] rounded-full bg-[#F0F7ED0A]"
                style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
              >
                {data?.subtitle || "BUILT FOR ENGINEERING AND FINANCE TEAMS"}
              </div>
            </div>

            {/* Main heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
              style={{ fontFamily: '"Funnel Display", sans-serif' }}
            >
              {data?.title || (
                <>
                  Context-Led Cloud
                  <br />
                  <span className="text-white">Optimisation & Visibility</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p
              className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed font-light"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              {data?.description ||
                "Opslyft automates FinOps with context-led, AI-powered insights and, actionable fixes for engineering teams so you can start cutting cloud waste in days, not months."}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                className="bg-[#24823D] hover:bg-[#1f6e33] text-white font-medium transition-all duration-300 transform hover:scale-105 rounded-xl inline-flex items-center justify-center"
                style={{
                  padding: "22px 32px",
                  gap: "4px",
                  boxShadow: "1px 2px 0px 0px #E8F6E2",
                }}
              >
                {data?.ctaText || "Book a demo"}
              </button>
            </div>
          </div>

          {/* Right side - Laptop with parallax zoom effect */}
          <div className="relative flex justify-center items-center lg:justify-end">
            {/* Circles behind laptop (decoupled from laptop movement) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.15 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                className="absolute w-[90%] h-[90%] -translate-y-6 translate-x-6"
              >
                <Image
                  src="/assets/images/hero-circles.png"
                  alt="Animated circles"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Laptop with parallax zoom and rotation sequence */}
            <motion.div
              ref={ref as React.RefObject<HTMLDivElement>}
              style={{ scale, x, y }}
              className="relative w-full max-w-7xl transform-gpu"
            >
              <div className="relative z-10">
                <div className="relative">
                  {frameSources.map((src, idx) => (
                    <motion.div
                      key={`${src}-${idx}`}
                      style={{ opacity: opacities[idx] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={src}
                        alt="Laptop showing Opslyft dashboard"
                        width={3600}
                        height={2400}
                        className="w-full h-auto drop-shadow-2xl"
                        priority={idx === 0}
                      />
                    </motion.div>
                  ))}
                  {/* Fallback for initial paint (ensures layout sizing) */}
                  <div className="invisible">
                    <Image
                      src={frameSources[0]}
                      alt="Laptop placeholder size"
                      width={3600}
                      height={2400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
