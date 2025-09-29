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
  const { scrollYProgress: desktopScrollYProgress } = useScroll({
    target: ref,
    offset: ["start 40%", "end 60%"], // Start at first circle, end at last circle
  });

  const { scrollYProgress: mobileScrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end 60%"], // Adjusted for mobile to match circle positions
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
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-52 w-px bg-white/12" />
        <motion.div
          style={{ scaleY: desktopScrollYProgress }}
          className="hidden md:block origin-top absolute left-1/2 -translate-x-1/2 top-4 h-[1100px] w-[3px] bg-[#24823D] shadow-[0_0_12px_rgba(36,130,61,0.45)] rounded"
        />

        {/* left-side line with progress (mobile) */}
        <div className="md:hidden absolute left-4 top-8 bottom-65 w-px bg-[#afafaf]" />
        <motion.div
          style={{ scaleY: mobileScrollYProgress }}
          className="md:hidden origin-top absolute left-4 top-8 h-[1000px] w-[3px] bg-[#24823D] shadow-[0_0_12px_rgba(36,130,61,0.45)] rounded"
        />

        <div className="mt-16 space-y-10 lg:space-y-42">
          {content.map((item, idx) => (
            <div
              key={item.id}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
            >
              {/* center waypoint dot for this step */}
              <motion.div
                initial={{
                  backgroundColor: "#24823D", // gray-400 until passed
                  borderColor: "#24823D",
                  scale: 0.9,
                  opacity: 0.8,
                }}
                whileInView={{
                  backgroundColor: "#24823D", // green-600 when passed
                  borderColor: "#24823D",
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 -translate-y-1/2 z-10 w-[50px] h-[50px] rounded-full border-2 items-center justify-center text-white text-xs font-semibold "
                style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
              >
                {idx + 1}
              </motion.div>
              {/* mobile waypoint dot */}
              <motion.div
                initial={{
                  backgroundColor: "#24823D",
                  borderColor: "#24823D",
                  scale: 0.9,
                  opacity: 0.8,
                }}
                whileInView={{
                  backgroundColor: "#24823D",
                  borderColor: "#24823D",
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="md:hidden absolute left-2.5 -translate-x-[22px] top-8 z-10 w-[27px] h-[27px] rounded-full border-2 flex items-center justify-center text-white text-xs font-semibold "
                style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
              >
                {idx + 1}
              </motion.div>
              {/* left column: card for odd, text for even */}
              {idx % 2 === 0 ? (
                <div className="order-1 lg:ml-auto ">
                  <div
                    className="shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.32)] backdrop-blur-md p-4 border border-white/10 flex flex-col justify-center w-fit min-w-[108px] min-h-[54.7px] lg:min-w-[210px] lg:min-h-[110px] rounded-[15px] lg:rounded-[30px]"
                    style={{
                      background:
                        "linear-gradient(195deg, rgba(69, 131, 48, 0.08) -23.3%, rgba(15, 29, 11, 0.08) 89.49%)",
                      borderRadius: 30,
                    }}
                  >
                    <div
                      className="text-[#3cc35e] text-[18px] lg:text-[34px] font-semibold leading-[22px] lg:leading-[43px] mb-1 lg:text-right"
                      style={{ fontFamily: '"Funnel Display", sans-serif' }}
                    >
                      {item.phase}
                    </div>
                    <div
                      className="text-[#afafaf] text-[18px] lg:text-[20x] font-normal leading-[1.2] opacity-76 lg:text-right"
                      style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                    >
                      {item.period}
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" md:pt-12 order-2 md:order-1 w-[290px] h-[105px] lg:w-[409px] lg:h-[133px] ml-[11px]">
                  <div
                    className="text-[#f1f1f1] text-[16px] lg:text-[20x] font-normal leading-[1.2] opacity-76 lg:text-right"
                    style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                  >
                    {item.description}
                  </div>
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
                <div className=" relative order-1 md:order-2">
                  <div
                    className="shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.32)] backdrop-blur-md p-4 border border-white/10 flex flex-col justify-center w-fit min-w-[108px] min-h-[54.7px]  px-[24px] lg:px-[50px] py-[11px] lg:py-[24px]  rounded-[15px] lg:rounded-[30px]"
                    style={{
                      background:
                        "linear-gradient(195deg, rgba(69, 131, 48, 0.08) -23.3%, rgba(15, 29, 11, 0.08) 89.49%)",
                      borderRadius: 30,
                    }}
                  >
                    <div
                      className="text-[#3cc35e] mb-1 text-[18px] lg:text-[34px] font-semibold leading-[22px] lg:leading-[43px] "
                      style={{ fontFamily: '"Funnel Display", sans-serif' }}
                    >
                      {item.phase}
                    </div>
                    <div
                      className="text-[#afafaf] text-[16px] lg:text-[34px] font-medium leading-[20px] lg:leading-[42px] mb-3 "
                      style={{ fontFamily: '"Prompt", sans-serif' }}
                    >
                      {item.period}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={`${idx === 0 ? "md:pt-12" : ""} order-2  w-[290px]  lg:w-[409px]  ml-[11px]`}
                >
                  <div
                    className="text-[#f1f1f1] text-[16px] lg:text-[20x] leading-[1.2] opacity-76 mb-[38px]"
                    style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                  >
                    {item.description}
                  </div>
                  {item.bullets && (
                    <ul className="text-gray-400 text-xs  list-none  w-[272px] lg:w-[323px] space-y-4">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2   ">
                          <div className="mt-1 inline-block w-[24px] h-[24px] rounded-full ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                opacity="0.2"
                                d="M12.4971 13.015V22.6628C12.3711 22.6623 12.2473 22.63 12.1371 22.5691L3.88707 18.0541C3.76927 17.9896 3.67093 17.8947 3.60233 17.7793C3.53373 17.6638 3.49738 17.5321 3.49707 17.3978V8.43156C3.4971 8.32589 3.51947 8.22142 3.5627 8.125L12.4971 13.015Z"
                                fill="#3CC35E"
                              />
                              <path
                                d="M21.4671 7.11381L13.2171 2.59975C12.9966 2.47795 12.7489 2.41406 12.4971 2.41406C12.2452 2.41406 11.9975 2.47795 11.7771 2.59975L3.52707 7.11569C3.29147 7.2446 3.09479 7.4344 2.95759 7.66527C2.82038 7.89614 2.74768 8.15962 2.74707 8.42819V17.3944C2.74768 17.663 2.82038 17.9265 2.95759 18.1574C3.09479 18.3882 3.29147 18.578 3.52707 18.7069L11.7771 23.2229C11.9975 23.3447 12.2452 23.4086 12.4971 23.4086C12.7489 23.4086 12.9966 23.3447 13.2171 23.2229L21.4671 18.7069C21.7027 18.578 21.8993 18.3882 22.0366 18.1574C22.1738 17.9265 22.2465 17.663 22.2471 17.3944V8.42912C22.247 8.16008 22.1745 7.89602 22.0373 7.66461C21.9 7.43319 21.7031 7.24295 21.4671 7.11381ZM12.4971 3.91225L20.0289 8.03725L12.4971 12.1622L4.9652 8.03725L12.4971 3.91225ZM4.24707 9.34975L11.7471 13.4541V21.4969L4.24707 17.3954V9.34975ZM13.2471 21.4969V13.4579L20.7471 9.34975V17.3916L13.2471 21.4969Z"
                                fill="#3CC35E"
                              />
                            </svg>
                          </div>
                          <span
                            className="text-[14px] lg:text-[16px] leading-[1.2] opacity-76 text-[#d3d3d3]"
                            style={{
                              fontFamily: '"IBM Plex Sans", sans-serif',
                            }}
                          >
                            {b}
                          </span>
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
