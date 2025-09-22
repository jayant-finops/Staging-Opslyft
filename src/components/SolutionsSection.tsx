"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Lottie from "lottie-react";
import { SolutionsSection as SolutionsSectionType } from "@/types/sanity";
import { solutionsFallback } from "@/data/solutions";
import Button from "./Button";

interface SolutionsSectionProps {
  data: SolutionsSectionType;
}

interface ExtendedFeature {
  title: string;
  description: string;
  buttonText?: string;
  imageSrc: string;
  bulletPoints?: string[];
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
    <section className="py-28 sm:py-24 bg-white">
      <div className="container mx-auto px-4 ">
        {/* Section header */}
        <div className="text-center mb-[93px] md:mb-[68px] space-y-4">
          <div
            className="inline-block uppercase tracking-wider text-[#24823D] font-[400] px-4 sm:px-6 py-2 sm:py-3 rounded-full w-auto sm:w-[190px] text-[13px] backdrop-blur-md border"
            style={{
              fontFamily: '"IBM Plex Sans", sans-serif',
              background: "rgba(36, 130, 61, 0.10)", // #24823D @ 10%
              borderColor: "rgba(211, 211, 211, 0.25)", // #D3D3D3 @ 25%
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 18px rgba(0,0,0,0.10)",
            }}
          >
            {data?.sectionLabel || solutionsFallback.sectionLabel}
          </div>
          <h2
            className="text-[28px] md:text-[48px] font-semibold text-gray-900 max-w-full md:w-[770px] mx-auto px-4 sm:px-0 leading-[28px] md:leading-[55px]"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {data?.title || solutionsFallback.title}
          </h2>
          <p
            className="text-[#154B23] max-w-full sm:max-w-xl mx-auto text-sm font-light px-4 sm:px-0 leading-[1.5]"
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
              className={`flex flex-col lg:grid lg:grid-cols-2  gap-4 sm:gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content side */}
              <div
                className={`space-y-4 sm:space-y-[83px] text-left ${index % 2 === 1 ? "lg:col-start-2 lg:ml-16" : ""} h-auto lg:h-[535px] order-2 lg:order-none`}
              >
                <h3
                  className="text-[34px] md:text-[40px] ml-0 sm:ml-2 font-semibold md:font-medium text-gray-900 md:text-[#1d1d1d] max-w-full sm:max-w-md lg:max-w-lg leading-[40px] md:leading-[37px]"
                  style={{ fontFamily: '"Funnel Display", sans-serif' }}
                >
                  {feature.title}
                </h3>

                {/* Show bullet points if available, otherwise description */}
                {(feature as ExtendedFeature).bulletPoints ? (
                  <div className="space-y-6 sm:space-y-4 max-w-[315px] md:max-w-[455px]">
                    {(feature as ExtendedFeature).bulletPoints!.map(
                      (point: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2 sm:space-x-3"
                        >
                          <div className="w-[24px] h-[24px] mt-0.5 sm:mt-1 flex-shrink-0 relative">
                            <Image
                              src="/assets/images/solution/Cube.png"
                              alt=""
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p
                            className="text-[16px]  text-[#0E1821] leading-[24px] font-normal"
                            style={{
                              fontFamily: '"IBM Plex Sans", sans-serif',
                            }}
                          >
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

                {(feature as ExtendedFeature).buttonText && (
                  <Button
                    variant="primary"
                    size="md"
                    className="space-x-2 w-[156px] h-[48px] py-[16px] px-[0px] mt-[40px] sm:mt-0 my-[120px] sm:my-0"
                  >
                    <span
                      className="text-[18px] font-semibold leading-[16px] pl-[12px]"
                      style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                    >
                      {feature.buttonText}
                    </span>
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
                className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""} order-1 lg:order-none `}
              >
                <div className="relative  w-[343px] md:w-[592px] h-[348px] md:h-[601px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mx-auto bg-white">
                  <Lottie
                    animationData={require("../../public/assets/images/Prop=f2.1.json")}
                    loop={true}
                    className="absolute inset-0 w-full h-full"
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
          className="md:mt-24 lg:mt-32 items-center justify-center flex "
        >
          <div
            className="relative rounded-[20px] sm:rounded-[30px] py-8 sm:py-12 lg:py-16 text-center overflow-hidden h-[362px] sm:h-[385px] max-w-[345px] md:max-w-[1440px] flex items-center justify-center"
            style={{
              backgroundImage: "url(/assets/images/solution/lastCard.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-[40px] sm:gap-[53px] ">
              <h3
                className="text-[28px] md:text-[48px] font-semibold text-white leading-[34px] md:leading-[57px] w-[314px] sm:w-[973px]  mx-auto"
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

              <Button variant="primary" size="md">
                <span
                  className="text-[18px] font-semibold leading-[16px]"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                ></span>
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
