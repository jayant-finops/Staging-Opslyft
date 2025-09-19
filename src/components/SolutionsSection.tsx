'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SolutionsSection as SolutionsSectionType } from '@/types/sanity'
import { solutionsFallback } from '@/data/solutions'

interface SolutionsSectionProps {
  data: SolutionsSectionType
}

export default function SolutionsSection({ data }: SolutionsSectionProps) {
  const features = data?.features?.length > 0
    ? data.features.map((f, i) => ({
        title: f.title,
        description: f.description,
        buttonText: f.buttonText,
        // fallback to local images when sanity image is missing
        imageSrc: solutionsFallback.features[i]?.imageSrc,
      }))
    : solutionsFallback.features

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block text-[12px] uppercase tracking-wider text-[#68CA68] font-medium px-4 py-2 border border-[#E7F2EA] rounded-full bg-[#F0F7ED]">
            {data?.sectionLabel || solutionsFallback.sectionLabel}
          </div>
          <h2 className="mt-6 text-3xl md:text-5xl font-semibold text-gray-900">
            {data?.title || solutionsFallback.title}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {data?.subtitle || solutionsFallback.subtitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="max-w-6xl mx-auto space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content side */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2 lg:ml-16' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                
                {/* Show bullet points if available, otherwise description */}
                {(feature as any).bulletPoints ? (
                  <div className="space-y-4">
                    {(feature as any).bulletPoints.map((point: string, idx: number) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 mt-1 flex-shrink-0 relative">
                          <Image 
                            src="/assets/images/solution/Cube.png" 
                            alt="" 
                            fill 
                            className="object-contain" 
                          />
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                )}
                
                {(feature as any).buttonText && (
                  <button className="bg-[#41B36B] hover:bg-[#369856] text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2">
                    <span>{(feature as any).buttonText}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Image side */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative w-[592px] h-[601px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src={(feature as any).imageSrc} 
                    alt={feature.title} 
                    fill 
                    className="contain" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div 
            className="relative rounded-[30px] py-16 px-8 text-center overflow-hidden h-[300px] flex items-center justify-center"
            style={{
              backgroundImage: "url(/assets/images/solution/lastCard.png)",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
                {(data?.ctaCard?.title || solutionsFallback.ctaCard.title).split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < (data?.ctaCard?.title || solutionsFallback.ctaCard.title).split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h3>
              
              <button className="bg-[#41B36B] hover:bg-[#369856] text-white px-8 py-3 rounded-lg font-medium transition-colors">
                {data?.ctaCard?.buttonText || solutionsFallback.ctaCard.buttonText}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
