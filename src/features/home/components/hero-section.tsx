"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/types";
import { LegacyButton } from "@/components/ui";
import { urlFor } from "@/lib/sanity";

interface HeroSectionProps {
  data: Hero | null;
}

export default function HeroSection2({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[90vh] md:min-h-[100vh] rounded-b-[32px] sm:rounded-b-[56px] md:rounded-b-[80px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 ">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(72% 85% at 88% 50%, rgba(0,105,0,0.75) 0%, rgba(0,105,0,0.45) 30%, rgba(0,105,0,0.2) 58%, rgba(0,0,0,0) 82%), linear-gradient(185deg, #000000 0%, #0E1821 100%)",
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 pt-[154px] sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-8 items-start lg:items-center w-full min-h-[100vh] sm:min-h-[90vh] md:min-h-[100vh] py-8 lg:py-0">
        {/* Left side - Text content */}
        <div className="text-white space-y-4 sm:space-y-6  order-1 lg:order-1">
          {/* Green label */}
          <div className="inline-block">
            <div
              className="text-[11px] sm:text-[13px] uppercase tracking-wider text-[#68CA68] font-light px-3 sm:px-4 py-1.5 sm:py-2 border border-[#F0F7ED0A] rounded-full bg-[#F0F7ED0A]"
              style={{
                fontFamily:
                  'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif',
                background:
                  "linear-gradient(180deg, rgba(31,65,50,0.78) 0%, rgba(19,48,31,0.28) 100%)",
                borderColor: "rgba(135, 135, 135, 0.36)",
                borderWidth: 0.5,
                boxShadow:
                  "0 14px 22px rgba(0,0,0,0.32), inset 0 1px 0 rgba(238,250,247,0.10), inset 0 -2px 6px rgba(0,0,0,0.35)",
              }}
            >
              {data?.title ?? "BUILT FOR ENGINEERING AND FINANCE TEAMS"}
            </div>
          </div>

          {/* Main heading */}
          <h1
            className="text-[34px] sm:text-[42px] lg:text-[56px] 2xl:text-[56px] font-semibold leading-[1.2] tracking-[-1px] lg:w-[700px]"
            style={{
              fontFamily:
                'var(--font-funnel-display), "Funnel Display", sans-serif',
            }}
          >
            {data?.subtitle ? (
              data.subtitle
            ) : (
              <>Context-Led Cloud Optimisation & Visibility</>
            )}
          </h1>

          {/* Description */}
          <p
            className="text-base text-[#b7b7b7] max-w-full sm:max-w-2xl leading-relaxed font-light"
            style={{
              fontFamily:
                'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif',
            }}
          >
            {data?.description ??
              "Opslyft automates FinOps with context-led, AI-powered insights and, actionable fixes for engineering teams so you can start cutting cloud waste in days, not months."}
          </p>

          {/* CTA Button */}
          <div className="pt-2 sm:pt-4">
            {data?.ctaUrl ? (
              <Link
                href={data.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LegacyButton variant="primary" size="lg">
                  {data?.ctaText ?? "Book a demo"}
                </LegacyButton>
              </Link>
            ) : (
              <LegacyButton variant="primary" size="lg">
                {data?.ctaText ?? "Book a demo"}
              </LegacyButton>
            )}
          </div>
        </div>

        {/* Right side - Static laptop with subtle entrance only */}
        <div className="relative overflow-visible order-2 lg:order-2 mb-8 lg:mb-0 mt-8 sm:mt-12 lg:mt-0">
          {/* Circles behind (one-time entrance) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-[120%] sm:w-[130%] lg:w-[160%] h-[120%] sm:h-[130%] lg:h-[140%] -translate-y-4 sm:-translate-y-8 lg:-translate-y-12 translate-x-4 sm:translate-x-8 lg:translate-x-16 2xl:translate-x-64">
              <Image
                src="/assets/images/hero/circles.png"
                alt="Decorative circles"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Static laptop image (styled as background with mask and rotation) */}
          <motion.div
            initial={{ opacity: 0, x: 120, rotateX: 15 }}
            animate={{ opacity: 1, x: 0, rotateX: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: "easeOut",
              opacity: { duration: 0.3, delay: 0.15 },
              rotateX: { duration: 0.6, delay: 0.2 },
            }}
            className="relative transform-gpu translate-x-2 sm:translate-x-4 md:translate-x-6 lg:translate-x-[0px] 2xl:translate-x-28 translate-y-2 sm:translate-y-4 md:translate-y-6 lg:translate-y-18 2xl:translate-y-24 mx-auto lg:mx-0 "
          >
            <motion.div
              animate={{ rotateY: [-20, 0, 20, 0, -20] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
            >
              <div
                className="block w-[500px] h-[350px] lg:w-[890px] lg:h-[620px] 2xl:w-[1100px] 2xl:h-[780px] "
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  boxShadow:
                    "0px 120px 164px -25px rgba(107, 110, 148, 0.12), 0px 2px 4px 0px rgba(0,0,0,0.25)",
                  transform: "rotate(10deg) rotateX(-15deg) rotateY(30deg)",
                  WebkitMaskImage:
                    "linear-gradient(31deg, rgba(0,0,0,0) 9%, rgba(0,0,0,1) 39%)",
                  maskImage:
                    "linear-gradient(31deg, rgba(0,0,0,0) 9%, rgba(0,0,0,1) 39%)",
                  zIndex: 1,
                  aspectRatio: "1.4285714285714286 / 1",
                  backgroundImage: data?.laptopImage
                    ? `url(${urlFor(data.laptopImage).url()})`
                    : "url(/assets/images/hero/laptop-static.svg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  borderRadius: "20px",
                  border: "1px solid #636363",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
