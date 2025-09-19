"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { navbarFallback } from "@/data/navbar";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear existing timeout
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        setHideTimeout(null);
      }

      // Show navbar when scrolling
      setIsVisible(true);

      // Set timeout to hide navbar after scroll stops
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 2000); // Hide after 2 seconds of no scrolling

      setHideTimeout(timeout);
      setLastScrollY(currentScrollY);
    };

    // Show navbar when scrolling starts
    const handleScrollStart = () => {
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scrollstart", handleScrollStart, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollstart", handleScrollStart);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [lastScrollY, hideTimeout]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 rounded-[20px] shadow-2xl backdrop-blur-md border border-white/10"
          style={{
            background:
              "linear-gradient(176deg, #070808 -23.3%, #001910 89.49%)",
            width: "1228px",
            maxWidth: "calc(100vw - 2rem)",
          }}
        >
          <div className="px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="relative w-24 h-8">
                  <Image
                    src={navbarFallback.logoSrc}
                    alt="Opslyft"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Navigation Links */}
              <div className="hidden lg:flex items-center space-x-8">
                {navbarFallback.navigation.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-4">
                <Link
                  href={navbarFallback.cta.loginUrl}
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                >
                  {navbarFallback.cta.loginText}
                </Link>
                <Link
                  href={navbarFallback.cta.buttonUrl}
                  className="bg-[#41B36B] hover:bg-[#369856] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  {navbarFallback.cta.buttonText}
                </Link>
              </div>

              {/* Mobile menu button (for future mobile implementation) */}
              <div className="lg:hidden">
                <button className="text-gray-300 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
