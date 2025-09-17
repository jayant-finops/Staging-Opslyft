'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Testimonial } from '@/types/sanity'

interface TestimonialsSectionProps {
  data: Testimonial[]
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const testimonials = data.length > 0 ? data : [
    {
      _id: '1',
      _type: 'testimonial',
      quote: "The service was amazing. I never had to worry about cloud cost.",
      author: "Ajay Poddar",
      position: "FinTech/Retirement Tech",
      company: "Inshorts",
      avatar: undefined,
      companyLogo: undefined,
    },
    {
      _id: '2',
      _type: 'testimonial',
      quote: "The service was amazing. I never had to worry about cloud cost.",
      author: "Ajay Poddar",
      position: "FinTech/Retirement Tech", 
      company: "Life",
      avatar: undefined,
      companyLogo: undefined,
    },
    {
      _id: '3',
      _type: 'testimonial',
      quote: "The service was amazing. I never had to worry about cloud cost.",
      author: "Ajay Poddar",
      position: "FinTech/Retirement Tech",
      company: "Innovaccer",
      avatar: undefined,
      companyLogo: undefined,
    },
    {
      _id: '4',
      _type: 'testimonial',
      quote: "The service was amazing. I never had to worry about cloud cost.",
      author: "Ajay Poddar",
      position: "FinTech/Retirement Tech",
      company: "Tactly",
      avatar: undefined,
      companyLogo: undefined,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="text-sm uppercase tracking-wider text-green-600 font-medium mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Leaders & Innovators
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Join hundreds of engineering teams who trust Opslyft to 
            optimize their cloud infrastructure costs.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Quote */}
              <div className="mb-4">
                <div className="text-green-500 text-4xl leading-none mb-2">&ldquo;</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  {testimonial.avatar ? (
                    <Image
                      src="/assets/temp/ajay-poddar.jpg"
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm font-medium">
                      {testimonial.author.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.position}
                  </div>
                </div>
                {/* Company logo */}
                <div className="w-8 h-8 flex items-center justify-center">
                  {testimonial.companyLogo ? (
                    <Image
                      src={`/assets/temp/${testimonial.company.toLowerCase()}-logo.png`}
                      alt={testimonial.company}
                      width={32}
                      height={32}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="w-8 h-6 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                      {testimonial.company === 'Life' ? 'L' : testimonial.company.charAt(0)}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company logos section */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-8">
            Trusted by fast-growing companies around the world
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {['inshorts', 'life', 'innovaccer', 'tactly', 'delivuefy'].map((company) => (
              <div key={company} className="h-8 w-16 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">
                  {company.charAt(0).toUpperCase() + company.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
