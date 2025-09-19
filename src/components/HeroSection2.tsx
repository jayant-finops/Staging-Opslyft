'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Hero } from '@/types/sanity'

interface HeroSectionProps {
  data: Hero
}

export default function HeroSection2({ data }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[100vh] rounded-b-[56px] md:rounded-b-[80px] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/HeroSection2.png"
          alt="Background gradient"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center w-full h-screen">
        {/* Left side - Text content (same as HeroSection) */}
        <div className="text-white space-y-8 lg:pr-8">
          {/* Green label */}
          <div className="inline-block">
            <div className="text-[13px] uppercase tracking-wider text-[#68CA68] font-light px-4 py-2 border border-[#F0F7ED0A] rounded-full bg-[#F0F7ED0A] font-ibm-plex-sans">
              {data?.subtitle || 'BUILT FOR ENGINEERING AND FINANCE TEAMS'}
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight font-funnel-display">
            {data?.title || (
              <>
                Context-Led Cloud
                <br />
                <span className="text-white">Optimisation & Visibility</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed font-ibm-plex-sans font-light">
            {data?.description || 'Opslyft automates FinOps with context-led, AI-powered insights and, actionable fixes for engineering teams so you can start cutting cloud waste in days, not months.'}
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button 
              className="bg-[#24823D] hover:bg-[#1f6e33] text-white font-medium transition-all duration-300 transform hover:scale-105 rounded-xl inline-flex items-center justify-center"
              style={{
                padding: '22px 32px',
                gap: '4px',
                boxShadow: '1px 2px 0px 0px #E8F6E2'
              }}
            >
              {data?.ctaText || 'Book a demo'}
            </button>
          </div>
        </div>

        {/* Right side - Static laptop with subtle entrance only */}
        <div className="relative overflow-visible">
          {/* Circles behind (one-time entrance) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1.05, opacity: 0.18 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="absolute w-[140%] h-[140%] -translate-y-12 translate-x-16 lg:translate-x-64"
            >
              <Image
                src="/assets/images/hero-circles.png"
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative transform-gpu w-[100%] sm:w-[100%] lg:w-[100%] xl:w-[120%] translate-x-6 sm:translate-x-10 lg:translate-x-48 translate-y-6 sm:translate-y-10 lg:translate-y-16" 
          >
            <Image
              src="/assets/images/laptop-static.png"
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
  )
}


