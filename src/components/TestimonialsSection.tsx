"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Testimonial } from "@/types/sanity";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonialsFallback, logoRowFallback } from "@/data/testimonials";
// import { useRef } from "react";

interface TestimonialsSectionProps {
  data: Testimonial[];
}

export default function TestimonialsSection({
  data,
}: TestimonialsSectionProps) {
  const fallback = testimonialsFallback;
  const items =
    data.length > 0
      ? data.map((t, i) => ({
          key: t._id || String(i),
          quote: t.quote,
          author: t.author,
          position: t.position,
          avatarSrc: fallback[i % fallback.length].avatarSrc,
          companyLogoSrc: fallback[i % fallback.length].companyLogoSrc,
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <div
            className="inline-block uppercase tracking-wider font-ibm-plex-sans text-green-600 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full w-auto sm:w-[150px] text-xs sm:text-[13px]"
            style={{
              fontFamily: '"IBM Plex Sans", sans-serif',
              background: "rgba(36, 130, 61, 0.10)",
            }}
          >
            TESTIMONIALS
          </div>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 px-4 sm:px-0">
            Trusted by Leaders & Innovators
          </h2>
          <p className="text-green-900 mt-3 sm:mt-4 max-w-full sm:max-w-2xl mx-auto font-normal text-sm sm:text-base opacity-60 px-4 sm:px-0">
            Join hundreds of engineering teams who trust Opslyft to optimize
            their cloud infrastructure costs.
          </p>
        </div>

        {/* Navigation arrows - hidden on mobile */}
        <button
          className="testimonials-prev hidden sm:block absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-600 bg-white rounded-full p-2 shadow-lg"
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
          className="testimonials-next hidden sm:block absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-600 bg-white rounded-full p-2 shadow-lg"
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
          autoplay={{ delay: 1500 }}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 24,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
          className="!px-4 sm:!px-6 lg:!px-2 relative mx-auto w-full max-w-7xl"
        >
          {items.map((t, index) => (
            <SwiperSlide key={t.key} className="!w-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="p-4 sm:p-6 lg:p-8 rounded-[16px] sm:rounded-[20px] lg:rounded-[30px] mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[450px] h-auto min-h-[280px] sm:min-h-[350px] lg:h-[450px] flex flex-col cursor-pointer transition-all duration-300 ease-in-out"
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
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
                  />
                </div>
                <p
                  className="testimonial-quote text-gray-800 text-sm sm:text-base lg:text-xl xl:text-2xl leading-relaxed mb-4 sm:mb-6 lg:mb-8 transition-colors duration-300 flex-grow"
                  style={{ fontFamily: '"Funnel Display", sans-serif' }}
                >
                  {t.quote}
                </p>
                <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image
                      src={t.avatarSrc}
                      alt={t.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="testimonial-author text-gray-900 font-medium text-xs sm:text-sm transition-colors duration-300">
                      {t.author}
                    </div>
                    <div className="testimonial-position text-gray-500 text-xs transition-colors duration-300">
                      {t.position}
                    </div>
                  </div>
                  <div className="w-8 h-4 sm:w-10 sm:h-5 lg:w-12 lg:h-6 relative">
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
        </Swiper>

        {/* Company logos row */}
        <div className="flex flex-col sm:flex-row items-center mt-12 sm:mt-16 lg:mt-20 text-center justify-center gap-y-6 sm:gap-x-8">
          <p className="text-xs sm:text-sm text-gray-500 max-w-full sm:max-w-[200px] text-center sm:text-start px-4 sm:px-0">
            Trusted by fast-growing companies around the world
          </p>
          <div className="flex flex-wrap justify-center items-center opacity-90 gap-x-4 sm:gap-x-6 gap-y-4">
            {logoRowFallback.map((l) => (
              <div
                key={l.alt}
                className="relative h-8 w-24 sm:h-10 sm:w-32 lg:w-36"
              >
                <Image
                  src={l.src}
                  alt={l.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
