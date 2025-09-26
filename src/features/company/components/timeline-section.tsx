"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { CompanyTimelineDoc } from "@/types";
import { companyTimelineFallback } from "@/features/about/data";

interface Props {
  data?: CompanyTimelineDoc | null;
}

export default function TimelineSection({ data }: Props) {
  const content = data?.items ?? companyTimelineFallback;
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0%", "end 80%"],
  });

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(185deg, #0e1821 90%, #000 100%)",
      }}
    >
      {/* heading */}
      <div className="max-w-5xl mx-auto px-4 lg:px-8 pt-[129px]">
        <h2
          className="text-[#d3d3d3] lg:text-[#f0f7ed] text-[28px] lg:text-[56px] font-semibold text-center leading-[34px] lg:leading-[1.2]"
          style={{ fontFamily: '"Funnel Display", sans-serif' }}
        >
          Our Story
        </h2>
        <p
          className="text-[#e8f6e3] text-center text-[14px] lg:text-[16px] font-light lg:font-normal leading-[21px] lg:leading-[24px] mt-2 w-[350px] lg:w-[700px] mx-auto"
          style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
        >
          Our story of becoming one of the most loved FinOps platform
        </p>
      </div>

      {/* decorative circles on top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        aria-hidden
      >
        <Image
          src="/assets/images/story/circles.png"
          alt="Decorative circles"
          fill
          className="object-contain"
          priority={false}
        />
      </div>

      {/* timeline */}
      <div ref={ref} className="relative max-w-5xl mx-auto px-4 lg:px-8 pb-24">
        {/* center line with scroll progress (desktop) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/12" />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="hidden md:block origin-top absolute left-1/2 -translate-x-1/2 top-0 h-full w-[3px] bg-[#24823D] shadow-[0_0_12px_rgba(36,130,61,0.45)] rounded"
        />

        {/* left-side line with progress (mobile) */}
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-[#afafaf]" />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="md:hidden origin-top absolute left-4 top-0 h-full w-[3px] bg-[#24823D] shadow-[0_0_12px_rgba(36,130,61,0.45)] rounded"
        />

        <div className="mt-16 space-y-24">
          {content.map((item, idx) => (
            <div
              key={item.id}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start pl-10 md:pl-0"
            >
              {/* center waypoint dot for this step */}
              <motion.span
                initial={{
                  backgroundColor: "#9ca3af", // gray-400 until passed
                  borderColor: "#9ca3af",
                  scale: 0.9,
                  opacity: 0.8,
                }}
                whileInView={{
                  backgroundColor: "#16a34a", // green-600 when passed
                  borderColor: "#16a34a",
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 w-[14px] h-[14px] rounded-full border-2 "
              />
              {/* mobile waypoint dot */}
              <motion.span
                initial={{
                  backgroundColor: "#9ca3af",
                  borderColor: "#9ca3af",
                  scale: 0.9,
                  opacity: 0.8,
                }}
                whileInView={{
                  backgroundColor: "#16a34a",
                  borderColor: "#16a34a",
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="md:hidden absolute left-4 -translate-x-[22px] top-6 z-10 w-[14px] h-[14px] rounded-full border-2 "
              />
              {/* left column: card for odd, text for even */}
              {idx % 2 === 0 ? (
                <div className="md:ml-12 order-1">
                  <div
                    className="shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.32)] backdrop-blur-md p-6 border border-white/10"
                    style={{
                      background:
                        "linear-gradient(195deg, rgba(69, 131, 48, 0.08) -23.3%, rgba(15, 29, 11, 0.08) 89.49%)",
                      borderRadius: 14.602,
                    }}
                  >
                    <div
                      className="text-[#76E18F] font-medium mb-1"
                      style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                    >
                      {item.phase}
                    </div>
                    <div className="text-white/80 text-sm mb-3">
                      {item.period}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="md:pr-12 order-2 md:order-1">
                  <div className="text-gray-300 text-sm leading-6 mb-3">
                    {item.title}
                  </div>
                  <div className="text-gray-300 text-sm leading-6">{item.description}</div>
                  {item.bullets && (
                    <ul className="text-gray-400 text-xs space-y-2 list-none mt-3">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-[#76E18F]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* right column: text for odd, card for even */}
              {idx % 2 === 1 ? (
                <div className="md:pl-12 relative order-1 md:order-2">
                  {/* desktop connector to center line */}
                  <span className="hidden md:block absolute left-[-28px] top-1/2 -translate-y-1/2 w-7 h-[2px] bg-[#2C3B34]" />
                  {/* mobile connector to left line */}
                  <span className="md:hidden absolute left-[-18px] top-6 w-[18px] h-[2px] bg-[#2C3B34]" />
                  <div
                    className="shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.32)] backdrop-blur-md p-6 border border-white/10"
                    style={{
                      background:
                        "linear-gradient(195deg, rgba(69, 131, 48, 0.08) -23.3%, rgba(15, 29, 11, 0.08) 89.49%)",
                      borderRadius: 14.602,
                    }}
                  >
                    <div
                      className="text-[#76E18F] font-medium mb-1"
                      style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                    >
                      {item.phase}
                    </div>
                    <div className="text-white/80 text-sm mb-3">
                      {item.period}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="md:pl-12 order-2">
                  <div className="text-gray-300 text-sm leading-6 mb-3">
                    {item.title}
                  </div>
                  <div className="text-gray-300 text-sm leading-6 mb-3">
                    {item.description}
                  </div>
                  {item.bullets && (
                    <ul className="text-gray-400 text-xs space-y-2 list-none">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-[#76E18F]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
