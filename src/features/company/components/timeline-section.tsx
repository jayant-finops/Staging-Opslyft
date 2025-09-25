"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
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
        background: "linear-gradient(185deg, #000000 0%, #0E1821 100%)",
      }}
    >
      {/* heading */}
      <div className="max-w-5xl mx-auto px-4 lg:px-8 pt-16">
        <h2
          className="text-white text-[28px] lg:text-[36px] font-semibold text-center"
          style={{ fontFamily: '"Funnel Display", sans-serif' }}
        >
          Our Story
        </h2>
        <p
          className="text-gray-400 text-center text-xs mt-2"
          style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
        >
          Our story of becoming one of the most loved FinOps platform
        </p>
      </div>

      {/* green glow on top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        aria-hidden
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(55% 60% at 50% 0%, rgba(36,130,61,0.55) 0%, rgba(36,130,61,0.20) 40%, rgba(36,130,61,0) 70%)",
          }}
        />
      </div>

      {/* timeline */}
      <div ref={ref} className="relative max-w-5xl mx-auto px-4 lg:px-8 pb-24">
        {/* center line with scroll progress */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/12" />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="origin-top absolute left-1/2 -translate-x-1/2 top-0 h-full w-[3px] bg-[#24823D] shadow-[0_0_12px_rgba(36,130,61,0.45)] rounded"
        />

        <div className="mt-16 space-y-24">
          {content.map((item, idx) => (
            <div
              key={item.id}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
            >
              {/* center waypoint dot for this step */}
              <motion.span
                initial={{
                  backgroundColor: "#0B1410",
                  borderColor: "rgba(255,255,255,0.3)",
                  scale: 0.9,
                  opacity: 0.8,
                }}
                whileInView={{
                  backgroundColor: "#124D31",
                  borderColor: "#24823D",
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full border-2 shadow-[0_0_0_6px_rgba(36,130,61,0.15)]"
              />
              {/* left column: card for odd, text for even */}
              {idx % 2 === 0 ? (
                <div className="md:pr-12">
                  <div className="rounded-2xl border border-[#2C3B34] bg-[rgba(13,22,18,0.55)] shadow-[0_1.4px_4px_rgba(0,0,0,0.34)] backdrop-blur-sm p-6">
                    <div
                      className="text-[#76E18F] font-medium mb-1"
                      style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                    >
                      {item.phase}
                    </div>
                    <div className="text-white/80 text-sm mb-3">
                      {item.period}
                    </div>
                    <div className="text-gray-300 text-sm leading-6">
                      {item.title}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="md:pr-12">
                  <div className="text-gray-300 text-sm leading-6">
                    {item.description}
                  </div>
                </div>
              )}

              {/* right column: text for odd, card for even */}
              {idx % 2 === 1 ? (
                <div className="md:pl-12">
                  <div className="rounded-2xl border border-[#2C3B34] bg-[rgba(13,22,18,0.55)] shadow-[0_1.4px_4px_rgba(0,0,0,0.34)] backdrop-blur-sm p-6">
                    <div
                      className="text-[#76E18F] font-medium mb-1"
                      style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                    >
                      {item.phase}
                    </div>
                    <div className="text-white/80 text-sm mb-3">
                      {item.period}
                    </div>
                    <div className="text-gray-300 text-sm leading-6 mb-3">
                      {item.title}
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
                </div>
              ) : (
                <div className="md:pl-12">
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
