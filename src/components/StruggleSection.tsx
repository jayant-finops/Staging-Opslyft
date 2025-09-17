'use client'

import { motion } from 'framer-motion'
import { useMultiRippleAnimation } from '@/hooks/useRippleAnimation'
import { StruggleSection as StruggleSectionType } from '@/types/sanity'

interface StruggleSectionProps {
  data: StruggleSectionType
}

export default function StruggleSection({ data }: StruggleSectionProps) {
  const { ring1, ring2, ring3 } = useMultiRippleAnimation()

  const features = data?.features?.length > 0 ? data.features : [
    {
      title: "Broken Cost Allocation",
      description: "Manual processes are slow and inaccurate, leading to budget overruns, internal friction, and missed savings.",
      icon: undefined,
    },
    {
      title: "Contextless Optimization",
      description: "Without clarity on what's critical or safe to rightsize, teams waste time, make ad-hoc decisions, and lose money.",
      icon: undefined,
    },
    {
      title: "Misaligned Cost Data",
      description: "Complex dashboards keep finance and engineering out of sync. Without a smart, conversational copilot, decisions stall and savings stay hidden.",
      icon: undefined,
    },
  ]

  return (
    <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
      {/* Top-right decorative circles with ripple animation */}
      <div className="absolute top-10 right-10 w-32 h-32">
        <motion.div
          animate={ring1}
          className="absolute inset-0 border-2 border-green-400 rounded-full opacity-30"
        />
        <motion.div
          animate={ring2}
          className="absolute inset-2 border-2 border-green-300 rounded-full opacity-20"
        />
        <motion.div
          animate={ring3}
          className="absolute inset-4 border-2 border-green-200 rounded-full opacity-10"
        />
        <div className="absolute inset-8 bg-green-500 rounded-full opacity-20" />
      </div>

      {/* Bottom-left decorative circles with ripple animation */}
      <div className="absolute bottom-10 left-10 w-24 h-24">
        <motion.div
          animate={ring1}
          className="absolute inset-0 border-2 border-blue-400 rounded-full opacity-30"
        />
        <motion.div
          animate={ring2}
          className="absolute inset-1 border-2 border-blue-300 rounded-full opacity-20"
        />
        <motion.div
          animate={ring3}
          className="absolute inset-2 border-2 border-blue-200 rounded-full opacity-10"
        />
        <div className="absolute inset-4 bg-blue-500 rounded-full opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-sm uppercase tracking-wider text-green-400 font-medium mb-4">
            {data?.sectionLabel || "THE REAL STRUGGLE"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {data?.title || "Hidden Cost of Cloud Complexity"}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {data?.subtitle || "From inaccurate allocations to misaligned decisions, here are the core issues slowing down cost efficiency and value realization."}
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
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-colors"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center">
                  {/* Different icons for each feature */}
                  {index === 0 && (
                    <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
