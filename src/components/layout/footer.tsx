"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import { Footer as FooterType } from "@/types/sanity";
import { footerFallback } from "./footer.data";

// interface FooterProps {
//   data: FooterType | null;
// }

export default function Footer() {
  // const footer = data || footerFallback;

  return (
    <footer
      className="relative text-white pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8"
      style={{
        backgroundColor: "#0E1821",
        fontFamily: '"IBM Plex Sans", sans-serif',
      }}
    >
      <div className="mx-auto px-6 sm:px-4 lg:px-12 relative z-10">
        {/* Top section - Logo/tagline left, navigation right on desktop */}
        <div className="mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-4 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
            {/* Logo and tagline */}
            <div className="space-y-4 sm:space-y-6 lg:flex-shrink-0 md:ml-12 md:mr-32">
              <div className="relative w-20 h-10 sm:w-24 sm:h-12">
                <Image
                  src={footerFallback.logoSrc}
                  alt="Opslyft"
                  fill
                  className="object-contain"
                />
              </div>
              <p
                className="text-lg text-gray-200 font-normal max-w-xs"
                style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
              >
                {footerFallback.tagline}
              </p>
            </div>

            {/* Navigation links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 sm:gap-x-12 lg:gap-x-20 gap-y-8 sm:gap-y-8 lg:flex-1">
              {footerFallback.navigation.map((column, index) => (
                <motion.div
                  key={column.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-[#ddd] font-semibold mb-3 sm:mb-4 text-sm sm:text-base leading-[24px]">
                    {column.title}
                  </h4>
                  <ul className="space-y-3 sm:space-y-3">
                    {column.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.url}
                          className="text-gray-400 hover:text-[#68CA68] transition-colors text-xs sm:text-sm"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter signup section */}
        <div className="mb-6 sm:mb-8 border-t border-[#767676] pt-6 sm:pt-8 ">
          <div className="flex">
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-24 items-center md:w-[1440px] sm:ml-[92px] w-[300px] mx-auto">
              <div className="flex-shrink-0 ">
                <h3
                  className="text-[#68CA68] text-base sm:text-lg font-medium mb-2"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {footerFallback.newsletter.title}
                </h3>
                <p
                  className="text-gray-400 text-base leading-[1.5]"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {footerFallback.newsletter.description}
                </p>
              </div>

              <form className="w-full max-w-md lg:max-w-xl mt-[34px] lg:mt-0 ">
                <label
                  htmlFor="newsletter-email"
                  className="sr-only"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {footerFallback.newsletter.placeholder}
                </label>
                <div className="relative flex items-center rounded-[4px] lg:rounded-xl border border-[#606060] bg-[#202020] opacity-92 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] w-[312px] lg::w-[372px] 2xl:w-[455px]">
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder={footerFallback.newsletter.placeholder}
                    className="flex-1 h-10  rounded-[12px] bg-transparent text-[#5f5f5f] placeholder-[#5f5f5f] pl-4 sm:pl-5 pr-24 sm:pr-36 focus:outline-none text-sm sm:text-[14px]"
                    style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                  />
                  <button
                    type="submit"
                    className="absolute right-0  px-[27.5px] lg:px-[24px] py-[8px] lg:py-[12px] lg:rounded-xl rounded-[4px] bg-[#24823D] hover:bg-[#1f6e33] text-white font-normal transition-colors text-sm  w-[119px] h-[42px] lg:w-[114px] lg:h-[44px] leading-[92%] tracking-[-0.28px]"
                    style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                  >
                    {footerFallback.newsletter.buttonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-16 lg:gap-[114px] py-6 sm:py-8 border-t border-b border-[#767676]">
          {footerFallback.certifications.map((cert) => (
            <div
              key={cert.name}
              className="relative h-[67px] w-[65px] sm:h-20 sm:w-32 lg:h-[111px] lg:w-[109px] opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[26px] sm:gap-6 mt-6 sm:mt-8 py-8 lg:py-0 lg:px-22 lg:mx-auto">
          {/* Legal links */}
          <div className="flex flex-col gap-[24px] lg:gap-[8px] text-center lg:text-left order-2 lg:order-1">
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-[#bababa] text-xs"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              {footerFallback.legal.legalLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
            {/* Legal info */}
            <div className="flex flex-col lg:flex-row">
              <p
                className="text-gray-600 text-[13px] font-normal sm:text-sm"
                style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
              >
                {footerFallback.legal.copyright}
              </p>
              <p
                className="text-gray-600 text-[13px] font-normal sm:text-sm"
                style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
              >
                {footerFallback.legal.address}
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-[16px] sm:gap-4 order-1 lg:order-2  lg:self-auto">
            {footerFallback.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className="w-5 h-5 relative opacity-70 hover:opacity-100 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.iconSrc}
                  alt={social.platform}
                  fill
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
