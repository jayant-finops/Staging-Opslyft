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
          position: t.role,
          avatarSrc: t.avatar
            ? urlFor(t.avatar).url()
            : fallback[i % fallback.length].avatarSrc,
          companyLogoSrc: t.companyLogo
            ? urlFor(t.companyLogo).url()
            : fallback[i % fallback.length].companyLogoSrc,
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
            className="text-[#154b23]  max-w-full sm:max-w-2xl mx-auto font-normal text-base lg:text-sm opacity-60 px-4 sm:px-0 w-[340px] lg:w-[420px]"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {data?.subtitle ??
              "Join hundreds of engineering teams who trust Opslyft to optimize their cloud infrastructure costs."}
          </p>
        </div>

        {/* Navigation arrows - hidden on mobile */}
        <button
          className="testimonials-prev sm:block absolute left-0 md:left-4 2xl:left-32 top-[55%] -translate-y-1/2 z-20 text-gray-400 hover:text-gray-600 p-2"
          aria-label="Previous"
        >
          <svg
            width="24"
            height="24"
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
          className="testimonials-next sm:block absolute right-0 md:right-4 2xl:right-32 top-[55%] -translate-y-1/2 z-20 text-gray-400 hover:text-gray-600 p-2"
          aria-label="Next"
        >
          <svg
            width="24"
            height="24"
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
          className="!px-4 sm:!px-6 lg:!px-2 relative mx-auto w-full md:max-w-[1173px]"
        >
          <div className="flex justify-center items-center ">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="46"
                      viewBox="0 0 52 46"
                      fill="none"
                    >
                      <path
                        d="M39.0138 0.724073C42.8728 0.724072 45.96 2.09302 48.2753 4.83092C50.4804 7.67834 51.583 11.3471 51.583 15.8373C51.583 21.9702 49.9292 27.5008 46.6215 32.429C43.2036 37.4668 38.0215 41.6831 31.0754 45.0781L29.2562 42.4497C32.5639 40.4784 35.5959 37.6858 38.3523 34.0718C40.9984 30.5672 42.3215 27.008 42.3215 23.3939C42.3215 22.4083 42.0459 21.5869 41.4946 20.9298C40.9433 20.3822 40.1164 20.1084 39.0138 20.1084C36.2574 20.1084 33.9421 19.1228 32.0677 17.1515C30.0831 15.2897 29.0908 12.9899 29.0908 10.252C29.0908 7.51407 30.0831 5.21423 32.0677 3.35245C33.9421 1.60019 36.2574 0.724073 39.0138 0.724073ZM10.4025 0.724075C14.2614 0.724075 17.3486 2.09302 19.6639 4.83092C21.8691 7.67834 22.9716 11.3471 22.9716 15.8373C22.9716 21.9702 21.3178 27.5008 18.0101 32.429C14.5922 37.4668 9.41016 41.6831 2.46404 45.0781L0.644817 42.4497C3.95249 40.4785 6.98453 37.6858 9.74092 34.0718C12.3871 30.5672 13.7101 27.008 13.7101 23.3939C13.7101 22.4083 13.4345 21.5869 12.8832 20.9298C12.3319 20.3822 11.505 20.1084 10.4025 20.1084C7.64606 20.1084 5.33069 19.1228 3.45634 17.1515C1.47173 15.2897 0.479436 12.9899 0.479436 10.252C0.479435 7.51407 1.47173 5.21423 3.45634 3.35246C5.33068 1.6002 7.64606 0.724075 10.4025 0.724075Z"
                        fill="#3CC35E"
                      />
                    </svg>
                  </div>
                  <p
                    className="testimonial-quote text-gray-800 text-[21px] md:text-[24px] leading-[1.3] font-normal mb-4 sm:mb-6 lg:mb-8 transition-colors duration-300 flex-grow"
                    style={{ fontFamily: '"Funnel Display", sans-serif' }}
                  >
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                    <div className="w-10 h-10 bg-gray-200 overflow-hidden relative rounded-[30px] border-1">
                      <Image
                        src={t.avatarSrc}
                        alt={t.author || "Testimonial author"}
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
            {data?.logoRowText ||
              "Trusted by fast-growing companies around the world"}
          </p>
          <div className="flex flex-wrap justify-center items-center opacity-90 gap-x-2 sm:gap-x-6 gap-y-2">
            {data?.companyLogos && data.companyLogos.length > 0
              ? data.companyLogos.map((l, idx) => (
                  <div
                    key={l.alt || idx}
                    className="relative w-[104px] h-[44px] md:w-[132px] md:h-[56px]"
                  >
                    <Image
                      src={l.logo ? urlFor(l.logo).url() || "" : ""}
                      alt={l.alt || "Company logo"}
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
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
