"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SolutionsSection as SolutionsSectionType } from "@/types/sanity";
import { solutionsFallback } from "@/data/solutions";
import Button from "./Button";

interface SolutionsSectionProps {
  data: SolutionsSectionType;
}

export default function SolutionsSection({ data }: SolutionsSectionProps) {
  const features =
    data?.features?.length > 0
      ? data.features.map((f, i) => ({
          title: f.title,
          description: f.description,
          buttonText: f.buttonText,
          // fallback to local images when sanity image is missing
          imageSrc: solutionsFallback.features[i]?.imageSrc,
        }))
      : solutionsFallback.features;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="inline-block text-xs sm:text-[12px] uppercase tracking-wider text-[#68CA68] font-medium px-3 sm:px-4 py-1.5 sm:py-2 border border-[#E7F2EA] rounded-full bg-[#F0F7ED]">
            {data?.sectionLabel || solutionsFallback.sectionLabel}
          </div>
          <h2
            className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-0"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {data?.title || solutionsFallback.title}
          </h2>
          <p
            className="text-[#154B23] mt-3 sm:mt-4 max-w-full sm:max-w-2xl mx-auto text-sm font-light px-4 sm:px-0"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {data?.subtitle || solutionsFallback.subtitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content side */}
              <div
                className={`space-y-4 sm:space-y-6 text-left ${index % 2 === 1 ? "lg:col-start-2 lg:ml-16" : ""} h-auto lg:h-[535px] order-2 lg:order-none`}
              >
                <h3
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl ml-0 sm:ml-2 font-medium leading-tight text-[#1d1d1d] max-w-full sm:max-w-md lg:max-w-lg"
                  style={{ fontFamily: '"Funnel Display", sans-serif' }}
                >
                  {feature.title}
                </h3>

                {/* Show bullet points if available, otherwise description */}
                {(feature as any).bulletPoints ? (
                  <div className="space-y-3 sm:space-y-4">
                    {(feature as any).bulletPoints.map(
                      (point: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2 sm:space-x-3"
                        >
                          <div className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 sm:mt-1 flex-shrink-0 relative">
                            <Image
                              src="/assets/images/solution/Cube.png"
                              alt=""
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                            {point}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                )}

                {(feature as any).buttonText && (
                  <Button
                    variant="secondary"
                    size="md"
                    className="space-x-2 mt-12"
                  >
                    <span>{(feature as any).buttonText}</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                )}
              </div>

              {/* Image side */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""} order-1 lg:order-none`}
              >
                <div className="relative w-full max-w-[592px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[601px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mx-auto">
                  <Image
                    src={(feature as any).imageSrc}
                    alt={feature.title}
                    fill
                    className="object-cover"
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
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 items-center justify-center flex px-4 sm:px-0"
        >
          <div
            className="relative rounded-[20px] sm:rounded-[30px] py-8 sm:py-12 lg:py-16 text-center overflow-hidden h-auto min-h-[200px] sm:min-h-[250px] lg:h-[320px] w-full max-w-[1200px] flex items-center justify-center"
            style={{
              backgroundImage: "url(/assets/images/solution/lastCard.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10 px-4 sm:px-6 lg:px-8">
              <h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-6 sm:mb-8 lg:mb-12 leading-tight max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto"
                style={{ fontFamily: '"Funnel Display", sans-serif' }}
              >
                {(data?.ctaCard?.title || solutionsFallback.ctaCard.title)
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      {index <
                        (
                          data?.ctaCard?.title ||
                          solutionsFallback.ctaCard.title
                        ).split("\n").length -
                          1 && <br />}
                    </span>
                  ))}
              </h3>

              <Button variant="secondary" size="md">
                {data?.ctaCard?.buttonText ||
                  solutionsFallback.ctaCard.buttonText}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
