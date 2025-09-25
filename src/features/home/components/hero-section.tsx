"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Hero } from "@/types";
import { LegacyButton } from "@/components/ui";

interface HeroSectionProps {
  data: Hero;
}

export default function HeroSection2({ data }: HeroSectionProps) {
  return (
    <section className="relative max-h-[100vh] min-h-[90vh] sm:min-h-[90vh] md:min-h-[100vh] rounded-b-[32px] sm:rounded-b-[56px] md:rounded-b-[80px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(72% 85% at 88% 50%, rgba(0,105,0,0.75) 0%, rgba(0,105,0,0.45) 30%, rgba(0,105,0,0.2) 58%, rgba(0,0,0,0) 82%), linear-gradient(185deg, #000000 0%, #0E1821 100%)",
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-8 items-start lg:items-center w-full min-h-[100vh] sm:min-h-[90vh] md:min-h-[100vh] py-8 lg:py-0">
        {/* Left side - Text content */}
        <div className="text-white space-y-4 sm:space-y-6 lg:pr-8 order-1 lg:order-1">
          {/* Green label */}
          <div className="inline-block">
            <div
              className="text-[11px] sm:text-[13px] uppercase tracking-wider text-[#68CA68] font-light px-3 sm:px-4 py-1.5 sm:py-2 border border-[#F0F7ED0A] rounded-full bg-[#F0F7ED0A] font-ibm-plex-sans"
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
              {data?.subtitle || "BUILT FOR ENGINEERING AND FINANCE TEAMS"}
            </div>
          </div>

          {/* Main heading */}
          <h1
            className="text-[34px] sm:text-[42px] md:text-5xl lg:text-[52px] xl:text-[56px] font-semibold leading-tight font-funnel-display"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {data?.title || (
              <>
                Context-Led Cloud
                <br />
                <span>Optimisation & Visibility</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p
            className="text-base text-[#b7b7b7] max-w-full sm:max-w-2xl leading-relaxed font-light"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {data?.description ||
              "Opslyft automates FinOps with context-led, AI-powered insights and, actionable fixes for engineering teams so you can start cutting cloud waste in days, not months."}
          </p>

          {/* CTA Button */}
          <div className="pt-2 sm:pt-4">
            <LegacyButton variant="primary" size="lg">
              {data?.ctaText || "Book a demo"}
            </LegacyButton>
          </div>
        </div>

        {/* Right side - Static laptop with subtle entrance only */}
        <div className="relative overflow-visible order-2 lg:order-2 mb-8 lg:mb-0 mt-8 sm:mt-12 lg:mt-0">
          {/* Circles behind (one-time entrance) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, rotate: 0 }}
              animate={{ scale: 1.05, opacity: 1, rotate: -45 }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              className="absolute w-[120%] sm:w-[130%] lg:w-[160%] h-[120%] sm:h-[130%] lg:h-[140%] -translate-y-4 sm:-translate-y-8 lg:-translate-y-12 translate-x-4 sm:translate-x-8 lg:translate-x-16 xl:translate-x-64"
            >
              <Image
                src="/assets/images/hero/circles.png"
                alt="Decorative circles"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Static laptop image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.2 }}
            className="relative transform-gpu w-[90%] sm:w-[95%] md:w-[100%] lg:w-[100%] xl:w-[120%] translate-x-2 sm:translate-x-4 md:translate-x-6 lg:translate-x-48 translate-y-2 sm:translate-y-4 md:translate-y-6 lg:translate-y-16 mx-auto lg:mx-0"
          >
            <Image
              src="/assets/images/hero/laptop-static.png"
              alt="Laptop showing Opslyft dashboard"
              width={3600}
              height={2400}
              className="h-full w-full drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
