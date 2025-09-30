"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lottie from "lottie-react";
import { SolutionsSection as SolutionsSectionType } from "@/types";
import { solutionsFallback } from "@/features/home/data/solutions";
import { LegacyButton } from "@/components/ui";
import { urlFor } from "@/lib/sanity";

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

function LottieFromSrc({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  type LottieJSON = Record<string, unknown>;
  const [data, setData] = useState<LottieJSON | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch(src)
      .then((r) => r.json())
      .then((json: LottieJSON) => {
        if (isMounted) setData(json);
      })
      .catch(() => {
        // swallow errors; leave empty state if JSON fails to load
      });
    return () => {
      isMounted = false;
    };
  }, [src]);

  if (!data) return null;
  return <Lottie animationData={data} loop={true} className={className} />;
}

export default function SolutionsSection({ data }: SolutionsSectionProps) {
  const features =
    data?.features?.length > 0
      ? data.features.map((f, i) => ({
          title: f.title,
          description: f.description,
          buttonText: f.buttonText,
          // Use Sanity image if available, otherwise fallback to local images
          imageSrc: f.image
            ? urlFor(f.image).url()
            : solutionsFallback.features[i]?.imageSrc,
        }))
      : solutionsFallback.features;

  return (
    <section className="py-28 sm:py-24 bg-white">
      <div className="mx-auto px-4">
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
              className={`relative flex flex-col lg:grid lg:grid-cols-2  gap-4 sm:gap-0 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Background circles for first feature */}
              {index === 0 && (
                <div className="absolute inset-0 z-0 flex items-center justify-start pointer-events-none ">
                  <div className="absolute -left-72 top-[40%] -translate-y-1/2 w-[500px] h-[500px] opacity-100">
                    <Image
                      src="/assets/images/about--missio/image.png"
                      alt="Decorative circles"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
              {/* Content side */}
              <div
                className={`relative z-10 space-y-4 sm:space-y-[83px] text-left w-[343px] lg:w-[455px] ${index % 2 === 1 ? "lg:col-start-2 lg:ml-16" : ""} h-auto lg:h-[535px] order-2 lg:order-none `}
              >
                <h3
                  className="text-[34px] md:text-[40px] ml-0 sm:ml-2 font-semibold md:font-medium text-gray-900 md:text-[#1d1d1d] max-w-full sm:max-w-md lg:max-w-lg leading-[40px] md:leading-[37px] text-center lg:text-left"
                  style={{ fontFamily: '"Funnel Display", sans-serif' }}
                >
                  {feature.title}
                </h3>

                {/* Show bullet points if available, otherwise description */}
                {(feature as ExtendedFeature).bulletPoints ? (
                  <div className="space-y-6 sm:space-y-4 max-w-[315px] md:max-w-[455px] ">
                    {(feature as ExtendedFeature).bulletPoints!.map(
                      (point: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2 sm:space-x-3"
                        >
                          <div className="w-[24px] h-[24px] mt-0.5 sm:mt-1 flex-shrink-0 relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                opacity="0.2"
                                d="M12.6875 12.1459V21.7937C12.5615 21.7932 12.4377 21.7609 12.3275 21.6999L4.0775 17.1849C3.9597 17.1205 3.86136 17.0256 3.79276 16.9101C3.72416 16.7947 3.6878 16.663 3.6875 16.5287V7.56242C3.68753 7.45675 3.7099 7.35228 3.75313 7.25586L12.6875 12.1459Z"
                                fill="#24823D"
                              />
                              <path
                                d="M21.6575 6.24467L13.4075 1.73061C13.1871 1.60881 12.9393 1.54492 12.6875 1.54492C12.4357 1.54492 12.1879 1.60881 11.9675 1.73061L3.7175 6.24654C3.4819 6.37546 3.28522 6.56526 3.14802 6.79613C3.01081 7.027 2.93811 7.29048 2.9375 7.55905V16.5253C2.93811 16.7939 3.01081 17.0573 3.14802 17.2882C3.28522 17.5191 3.4819 17.7089 3.7175 17.8378L11.9675 22.3537C12.1879 22.4755 12.4357 22.5394 12.6875 22.5394C12.9393 22.5394 13.1871 22.4755 13.4075 22.3537L21.6575 17.8378C21.8931 17.7089 22.0898 17.5191 22.227 17.2882C22.3642 17.0573 22.4369 16.7939 22.4375 16.5253V7.55998C22.4374 7.29094 22.3649 7.02688 22.2277 6.79547C22.0905 6.56405 21.8935 6.37381 21.6575 6.24467ZM12.6875 3.04311L20.2194 7.16811L12.6875 11.2931L5.15562 7.16811L12.6875 3.04311ZM4.4375 8.48061L11.9375 12.585V20.6278L4.4375 16.5262V8.48061ZM13.4375 20.6278V12.5887L20.9375 8.48061V16.5225L13.4375 20.6278Z"
                                fill="#24823D"
                              />
                            </svg>
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
                  <div className="relative inline-block mt-[40px] sm:mt-0 my-[120px] sm:my-0 mx-auto">
                    <div className="absolute inset-0 rounded-[12px] bg-white" />
                    <LegacyButton
                      variant="primary"
                      size="md"
                      className="relative z-10 w-[156px] h-[48px] py-[16px] px-[0px]"
                    >
                      <span
                        className="text-[18px] font-semibold leading-[16px] pl-[12px]"
                        style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                      >
                        {feature.buttonText}
                      </span>
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                      </svg>
                    </LegacyButton>
                  </div>
                )}
              </div>

              {/* Image side */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""} order-1 lg:order-none `}
              >
                <div className="relative  w-[343px] md:w-[572px] h-[348px] md:h-[582px] rounded-xl sm:rounded-[30px] overflow-hidden shadow-2xl mx-auto bg-white">
                  <LottieFromSrc
                    src={(feature as ExtendedFeature).imageSrc}
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
          className="md:mt-24 lg:mt-32 items-center justify-center flex relative"
        >
          {/* Background circles for CTA card */}
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none ">
            <div className="absolute -left-42 top-1/2 -translate-y-[38rem] w-[800px] h-[800px]">
              <Image
                src="/assets/images/hero/circles.png"
                alt="Decorative circles"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div
            className="relative rounded-[20px] sm:rounded-[30px] py-8 sm:py-12 lg:py-16 text-center overflow-hidden h-[362px] sm:h-[385px] w-[345px] lg:w-[1170px]  flex items-center justify-center"
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

              <LegacyButton variant="secondaryInverted" size="md">
                <span
                  className="text-[18px] font-semibold leading-[16px] text-[#ffffff"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {data?.ctaCard?.buttonText ||
                    solutionsFallback.ctaCard.buttonText}
                </span>
              </LegacyButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
