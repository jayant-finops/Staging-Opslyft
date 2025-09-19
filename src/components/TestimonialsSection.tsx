"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Testimonial } from '@/types/sanity'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { testimonialsFallback, logoRowFallback } from '@/data/testimonials'
import { useRef } from 'react'

interface TestimonialsSectionProps {
  data: Testimonial[]
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const fallback = testimonialsFallback
  const items = (data.length > 0
    ? data.map((t, i) => ({
        key: t._id || String(i),
        quote: t.quote,
        author: t.author,
        position: t.position,
        avatarSrc: fallback[i % fallback.length].avatarSrc,
        companyLogoSrc: fallback[i % fallback.length].companyLogoSrc,
      }))
    : fallback.map(f => ({
        key: f.id,
        quote: f.quote,
        author: f.author,
        position: f.role,
        avatarSrc: f.avatarSrc,
        companyLogoSrc: f.companyLogoSrc,
      })))

  const swiperRef = useRef<any>(null)

  return (
    <section className="py-24 bg-transparent relative overflow-visible" style={{
      backgroundImage: "url(/assets/images/testimonials/testimonial_1920.png)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-block text-[12px] uppercase tracking-wider text-[#68CA68] font-medium px-4 py-2 border border-[#E7F2EA] rounded-full bg-[#F0F7ED0]">
            TESTIMONIALS
          </div>
          <h2 className="mt-6 text-3xl md:text-5xl font-semibold text-gray-900">
            Trusted by Leaders & Innovators
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Join hundreds of engineering teams who trust Opslyft to optimize their cloud infrastructure costs.
          </p>
        </div>

        {/* Navigation arrows */}
        <button className="testimonials-prev absolute left-2 md:left-36 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-600" aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button className="testimonials-next absolute right-2 md:right-36 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-600" aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        {/* Testimonials carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{ prevEl: '.testimonials-prev', nextEl: '.testimonials-next' }}
          loop
          slidesPerView={3}
          spaceBetween={0}
          autoplay={{ delay: 1500}}
          onSwiper={(swiper) => { swiperRef.current = swiper; swiper.autoplay.stop() }}
          onMouseEnter={() => swiperRef.current?.autoplay.start()}
          onMouseLeave={() => swiperRef.current?.autoplay.stop()}
          wrapperClass="testimonials-wrapper"
          className="!px-2 relative mx-auto"
          style={{ maxWidth: '1172.13px' }}
        >
          {items.map((t, index) => (
            <SwiperSlide key={t.key} className="!w-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="p-8 rounded-[30px] mx-auto"
                style={{
                  width: '373.894px',
                  height: '390.268px',
                  background:
                    'linear-gradient(195deg, rgba(69, 131, 48, 0.08) -23.3%, rgba(15, 29, 11, 0.08) 89.49%)',
                }}
              >
                <div className="text-[#41B36B] text-6xl leading-none mb-4">“</div>
                <p className="text-gray-800 text-lg leading-relaxed">
                  {t.quote}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image src={t.avatarSrc} alt={t.author} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900 font-medium text-sm">{t.author}</div>
                    <div className="text-gray-500 text-xs">{t.position}</div>
                  </div>
                  <div className="w-12 h-6 relative">
                    <Image src={t.companyLogoSrc} alt="company" fill className="object-contain" />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Company logos row */}
        <div className="flex items-center mt-20 text-center justify-center gap-x-8">
          <p className="text-sm text-gray-500 max-w-[200px] text-start">Trusted by fast-growing companies around the world</p>
          <div className="flex flex-wrap justify-center items-center opacity-90">
            {logoRowFallback.map(l => (
              <div key={l.alt} className="relative h-10 w-36">
                <Image src={l.src} alt={l.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
