'use client'

import { motion } from 'framer-motion'
import { SolutionsSection as SolutionsSectionType } from '@/types/sanity'

interface SolutionsSectionProps {
  data: SolutionsSectionType
}

export default function SolutionsSection({ data }: SolutionsSectionProps) {
  const features = data?.features?.length > 0 ? data.features : [
    {
      title: "Optimisation without blind spots",
      description: "Opslyft uses advanced ML to identify cost-saving opportunities that traditional tools miss, giving you complete visibility into your cloud spending patterns.",
      buttonText: "My Actions",
      image: undefined,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-sm uppercase tracking-wider text-green-600 font-medium mb-4">
            {data?.sectionLabel || "OPSLYFT'S IMPACT"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data?.title || "How Opslyft Solves These Challenges"}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {data?.subtitle || "From eliminating cloud waste to empowering finance and engineering alignment, here's how we deliver impact."}
          </p>
        </div>

        {/* Main feature */}
        <div className="max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Content */}
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {feature.buttonText && (
                    <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-medium transition-colors inline-flex items-center space-x-2">
                      <span>{feature.buttonText}</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Right side - Dashboard mockup */}
                <div className="relative">
                  <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl">
                    {/* Dashboard header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-white text-sm font-medium">
                        {feature.buttonText || "My Actions"}
                      </div>
                    </div>

                    {/* Dashboard content */}
                    <div className="space-y-4">
                      <div className="text-white text-sm font-medium mb-4">
                        Manage your assigned cost optimization insights
                      </div>
                      
                      {/* Action items */}
                      <div className="space-y-3">
                        {[
                          { title: "Optimize EC2 instances", savings: "$2.5K", status: "Ready to Execute" },
                          { title: "Right-size RDS databases", savings: "$1.2K", status: "Under Review" },
                          { title: "Clean up unused volumes", savings: "$800", status: "Completed" },
                        ].map((item, idx) => (
                          <div key={idx} className="bg-slate-800 rounded-lg p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-2 h-2 rounded-full ${
                                item.status === 'Ready to Execute' ? 'bg-green-400' :
                                item.status === 'Under Review' ? 'bg-yellow-400' : 'bg-blue-400'
                              }`}></div>
                              <div>
                                <div className="text-white text-sm font-medium">{item.title}</div>
                                <div className="text-gray-400 text-xs">{item.status}</div>
                              </div>
                            </div>
                            <div className="text-green-400 font-bold">{item.savings}</div>
                          </div>
                        ))}
                      </div>

                      {/* Summary */}
                      <div className="mt-6 pt-4 border-t border-slate-700">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-400">$39.7K</div>
                          <div className="text-gray-400 text-sm">Monthly Savings Potential</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
