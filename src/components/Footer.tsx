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
      className="relative text-white py-8 overflow-hidden"
      style={{
        backgroundColor: "#0E1821",
      }}
    >
      <div className="container mx-auto px-4 relative z-10 ">
        {/* Top section - Logo and tagline and navigationLinks*/}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="mb-16">
            <div className="space-y-6">
              <div className="relative w-24 h-12">
                <Image
                  src={footerFallback.logoSrc}
                  alt="Opslyft"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg text-gray-300 font-ibm-plex-sans font-light mt-8 max-w-1/3">
                {footerFallback.tagline}
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 leading-7">
            {footerFallback.navigation.map((column, index) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.url}
                        className="text-gray-300 hover:text-[#68CA68] transition-colors"
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

        {/* Newsletter signup section */}
        <div className="mb-6 border-t border-slate-700 pt-6">
          <div className=" mx-auto text-center px-16 ">
            <div className="flex gap-12">
              <div>
                <h3 className="text-[#68CA68] text-lg font-medium mb-2 text-start">
                  {footerFallback.newsletter.title}
                </h3>
                <p className="text-gray-300">
                  {footerFallback.newsletter.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder={footerFallback.newsletter.placeholder}
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#68CA68]"
                />
                <button className="bg-[#41B36B] hover:bg-[#369856] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  {footerFallback.newsletter.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center items-center gap-32 py-8 border-t border-b border-slate-700">
          {footerFallback.certifications.map((cert) => (
            <div
              key={cert.name}
              className="relative h-22 w-22 opacity-80 hover:opacity-100 transition-opacity"
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
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-8">
          {/* Legal links */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              {footerFallback.legal.legalLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  className="text-gray-400 hover:text-white text-sm transition-colors "
                >
                  {link.title}
                </a>
              ))}
            </div>
            {/* Legal info */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-1">
                {footerFallback.legal.copyright} {footerFallback.legal.address}
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {footerFallback.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className="w-6 h-6 relative opacity-70 hover:opacity-100 transition-opacity"
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
