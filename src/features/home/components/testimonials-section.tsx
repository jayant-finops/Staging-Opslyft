"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TestimonialsSection as TestimonialsSectionType } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  testimonialsFallback,
  logoRowFallback,
} from "@/features/home/data/testimonials";
import { urlFor } from "@/lib/sanity";
// import { useRef } from "react";

interface TestimonialsSectionProps {
  data: TestimonialsSectionType | null;
}

export default function TestimonialsSection({
  data,
}: TestimonialsSectionProps) {
  const fallback = testimonialsFallback;
  const items =
    data?.testimonials && data.testimonials.length > 0
      ? data.testimonials.map((t, i) => ({
          key: String(i),
          quote: t.quote,
          author: t.author,
          position: t.position,
          avatarSrc: t.avatar ? urlFor(t.avatar).url() : fallback[i % fallback.length].avatarSrc,
          companyLogoSrc: t.companyLogo ? urlFor(t.companyLogo).url() : fallback[i % fallback.length].companyLogoSrc,
        }))
      : fallback.map((f) => ({
          key: f.id,
          quote: f.quote,
          author: f.author,
          position: f.role,
          avatarSrc: f.avatarSrc,
          companyLogoSrc: f.companyLogoSrc,
        }));

  // const swiperRef = useRef<any>(null);

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-transparent relative overflow-visible"
      style={{
        backgroundImage:
          "url(/assets/images/testimonials/testimonial_1920.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 items-center justify-center flex flex-col">
        {/* Section header */}
        <div className="text-center mb-[46px] space-y-4">
          <div
            className="inline-block uppercase tracking-wider text-[#24823D] font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full w-auto sm:w-[150px] text-[13px] backdrop-blur-md border"
            style={{
              fontFamily: '"IBM Plex Sans", sans-serif',
              background: "rgba(36, 130, 61, 0.10)", // #24823D @ 10%
              borderColor: "rgba(211, 211, 211, 0.25)", // #D3D3D3 @ 25%
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 18px rgba(0,0,0,0.10)",
            }}
          >
            {data?.badgeText ?? "TESTIMONIALS"}
          </div>
          <h2
            className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-5xl font-semibold text-gray-900 px-4 sm:px-0"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {data?.title ?? "Trusted by Leaders & Innovators"}
          </h2>
          <p
            className="text-green-900  max-w-full sm:max-w-2xl mx-auto font-normal text-sm sm:text-base opacity-60 px-4 sm:px-0 w-[340px] lg:w-[420px]"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {data?.subtitle ?? "Join hundreds of engineering teams who trust Opslyft to optimize their cloud infrastructure costs."}
          </p>
        </div>

        {/* Navigation arrows - hidden on mobile */}
        <button
          className="testimonials-prev sm:block absolute left-2 md:left-4  top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-600 p-2"
          aria-label="Previous"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="testimonials-next sm:block absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-600  p-2 "
          aria-label="Next"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Testimonials carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".testimonials-prev",
            nextEl: ".testimonials-next",
          }}
          loop
          slidesPerView={1}
          spaceBetween={16}
          centeredSlides={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 24,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: true,
            },
          }}
          className="!px-4 sm:!px-6 lg:!px-2 relative mx-auto w-full md:max-w-[1440px]"
        >
          <div className="flex justify-center items-center">
            {items.map((t, index) => (
              <SwiperSlide key={t.key} className="">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="p-4 pt-8  rounded-[30px] mx-auto w-full max-w-[342px] sm:max-w-[360px] lg:max-w-[374px] h-[358px] lg:h-[390px] flex flex-col cursor-pointer transition-all duration-300 ease-in-out"
                  style={{
                    background:
                      "linear-gradient(195deg, rgba(69, 131, 48, 0.08) -23.3%, rgba(15, 29, 11, 0.08) 89.49%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0E1821";
                    // Change text colors on hover
                    const quote = e.currentTarget.querySelector(
                      ".testimonial-quote"
                    ) as HTMLElement;
                    const author = e.currentTarget.querySelector(
                      ".testimonial-author"
                    ) as HTMLElement;
                    const position = e.currentTarget.querySelector(
                      ".testimonial-position"
                    ) as HTMLElement;
                    if (quote) quote.style.color = "#F1F1F1";
                    if (author) author.style.color = "#F1F1F1";
                    if (position) position.style.color = "#F1F1F1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(195deg, rgba(69, 131, 48, 0.08) -23.3%, rgba(15, 29, 11, 0.08) 89.49%)";
                    // Reset text colors
                    const quote = e.currentTarget.querySelector(
                      ".testimonial-quote"
                    ) as HTMLElement;
                    const author = e.currentTarget.querySelector(
                      ".testimonial-author"
                    ) as HTMLElement;
                    const position = e.currentTarget.querySelector(
                      ".testimonial-position"
                    ) as HTMLElement;
                    if (quote) quote.style.color = "";
                    if (author) author.style.color = "";
                    if (position) position.style.color = "";
                  }}
                >
                  <div className="mb-3 sm:mb-4 lg:mb-6">
                    <Image
                      src="/assets/images/testimonials/apos.png"
                      alt="quote"
                      width={36}
                      height={36}
                      className="w-[46px] h-[40px] md:w-[52px] md:[44px]"
                    />
                  </div>
                  <p
                    className="testimonial-quote text-gray-800 text-[21px] md:text-[24px] leading-[1.3] font-normal mb-4 sm:mb-6 lg:mb-8 transition-colors duration-300 flex-grow"
                    style={{ fontFamily: '"Funnel Display", sans-serif' }}
                  >
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                      <Image
                        src={t.avatarSrc}
                        alt={t.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div
                        className="testimonial-author text-gray-800 font-medium text-[16px] md:text-[18px] transition-colors duration-300"
                        style={{ fontFamily: '"Funnel Display", sans-serif' }}
                      >
                        {t.author}
                      </div>
                      <div
                        className="testimonial-position text-gray-600 text-[12px] md:text-[13px] transition-colors duration-300 font-light"
                        style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                      >
                        {t.position}
                      </div>
                    </div>
                    <div className="w-[60px] h-[27px] md:w-[64px] md:h-[28px] relative">
                      <Image
                        src={t.companyLogoSrc}
                        alt="company"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

        {/* Company logos row */}
        <div className="flex flex-col sm:flex-row items-center mt-12 sm:mt-16 lg:mt-20 text-center justify-center gap-y-6 sm:gap-x-8 w-[340px] md:w-full">
          <p
            className="text-[18px] text-gray-500 max-w-full sm:max-w-[252px] text-center sm:text-start px-4 sm:px-0 md:w-[252px] font-normal"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            Trusted by fast-growing companies around the world
          </p>
          <div className="flex flex-wrap justify-center items-center opacity-90 gap-x-2 sm:gap-x-6 gap-y-2">
            {(data?.companyLogos && data.companyLogos.length > 0 
              ? data.companyLogos.map((l) => (
                  <div
                    key={l.name}
                    className="relative w-[104px] h-[44px] md:w-[132px] md:h-[56px]"
                  >
                    <Image
                      src={l.logo ? urlFor(l.logo).url() : ''}
                      alt={l.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))
              : logoRowFallback.map((l) => (
                  <div
                    key={l.alt}
                    className="relative w-[104px] h-[44px] md:w-[132px] md:h-[56px]"
                  >
                    <Image
                      src={l.src}
                      alt={l.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
