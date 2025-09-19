"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Footer as FooterType } from "@/types/sanity";
import { footerFallback } from "@/data/footer";

interface FooterProps {
  data: FooterType | null;
}

export default function Footer({ data }: FooterProps) {
  const footer = data || footerFallback;

  return (
    <footer
      className="relative text-white pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 overflow-hidden"
      style={{
        backgroundColor: "#0E1821",
      }}
    >
      <div className="mx-auto px-2 sm:px-4 lg:px-12 relative z-10">
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
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 font-ibm-plex-sans font-normal max-w-xs">
                {footerFallback.tagline}
              </p>
            </div>

            {/* Navigation links */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 sm:gap-x-12 lg:gap-x-20 gap-y-6 sm:gap-y-8 lg:flex-1">
              {footerFallback.navigation.map((column, index) => (
                <motion.div
                  key={column.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                    {column.title}
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {column.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.url}
                          className="text-gray-300 hover:text-[#68CA68] transition-colors text-sm sm:text-base"
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
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:items-center">
              <div className="flex-shrink-0">
                <h3 className="text-[#68CA68] text-base sm:text-lg font-medium mb-2">
                  {footerFallback.newsletter.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {footerFallback.newsletter.description}
                </p>
              </div>

              <form className="w-full max-w-md lg:max-w-xl">
                <label htmlFor="newsletter-email" className="sr-only">
                  {footerFallback.newsletter.placeholder}
                </label>
                <div className="relative flex items-center rounded-xl border border-[#3C3C3C] bg-neutral-900 opacity-92 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder={footerFallback.newsletter.placeholder}
                    className="flex-1 h-10 sm:h-12 rounded-full bg-transparent text-white placeholder-gray-400 pl-4 sm:pl-5 pr-24 sm:pr-36 focus:outline-none text-sm sm:text-base"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 sm:px-5 rounded-full bg-[#24823D] hover:bg-[#1f6e33] text-white font-medium transition-colors text-sm sm:text-base"
                  >
                    {footerFallback.newsletter.buttonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16 lg:gap-32 py-6 sm:py-8 border-t border-b border-[#767676]">
          {footerFallback.certifications.map((cert) => (
            <div
              key={cert.name}
              className="relative h-16 w-24 sm:h-20 sm:w-32 lg:h-28 lg:w-42 opacity-80 hover:opacity-100 transition-opacity"
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
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          {/* Legal links */}
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
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
            <div>
              <p className="text-gray-400 text-xs sm:text-sm">
                {footerFallback.legal.copyright}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                {footerFallback.legal.address}
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3 sm:gap-4">
            {footerFallback.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className="w-5 h-5 sm:w-6 sm:h-6 relative opacity-70 hover:opacity-100 transition-opacity"
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
