"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { navbarFallback } from "@/data/navbar";
import Button from "./Button";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const thresholdPx = Math.max(window.innerHeight * 0.98, 560);

      // Always clear existing hide timers on scroll
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        setHideTimeout(null);
      }

      // Always show while scrolling
      setIsVisible(true);

      // Do not schedule hide if: within hero threshold or mobile menu open
      if (isMobileMenuOpen || currentScrollY < thresholdPx) {
        return;
      }

      // Schedule hide after inactivity past the threshold
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

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
  }, [lastScrollY, hideTimeout, isMobileMenuOpen]);

  // Keep navbar visible whenever the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsVisible(true);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        setHideTimeout(null);
      }
    }
  }, [isMobileMenuOpen, hideTimeout]);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-4 sm:top-6 lg:top-10 left-1/2 transform -translate-x-1/2 z-50 rounded-[16px] sm:rounded-[20px] backdrop-blur-md backdrop-saturate-125 border border-white/8"
            style={{
              background:
                "linear-gradient(176deg, rgba(7,8,8,0.72) -23.3%, rgba(0,25,16,0.52) 89.49%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 20px rgba(0,0,0,0.25)",
              width: "calc(100vw - 2rem)",
              maxWidth: "1228px",
            }}
          >
            <div className="px-4 sm:px-6">
              <div className="flex items-center justify-between h-14 sm:h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                  <div className="relative w-20 h-6 sm:w-24 sm:h-8">
                    <Image
                      src={navbarFallback.logoSrc}
                      alt="Opslyft"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>

                {/* Navigation Links - Desktop */}
                <div className="hidden lg:flex items-center space-x-8">
                  {navbarFallback.navigation.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="text-[#e9dddd] hover:text-white text-sm font-medium transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                {/* CTA Buttons - Desktop */}
                <div className="hidden lg:flex items-center space-x-4">
                  <Link
                    href={navbarFallback.cta.loginUrl}
                    className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                  >
                    {navbarFallback.cta.loginText}
                  </Link>
                  <Link href={navbarFallback.cta.buttonUrl}>
                    <Button variant="secondary" size="sm">
                      {navbarFallback.cta.buttonText}
                    </Button>
                  </Link>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="p-2 text-gray-300 hover:text-white transition-colors"
                  >
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-[60] lg:hidden"
            style={{ backgroundColor: "#0E1821" }}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div className="relative w-20 h-6">
                  <Image
                    src={navbarFallback.logoSrc}
                    alt="Opslyft"
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 flex flex-col justify-center px-6 space-y-8">
                {/* Navigation Links */}
                <nav className="space-y-6">
                  {navbarFallback.navigation.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.url}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-gray-300 hover:text-white text-lg font-medium transition-colors py-3 border-b border-gray-700/50"
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="space-y-4 pt-8"
                >
                  <Link
                    href={navbarFallback.cta.buttonUrl}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block"
                  >
                    <Button variant="secondary" size="md" className="w-full">
                      {navbarFallback.cta.buttonText}
                    </Button>
                  </Link>
                  <Link
                    href={navbarFallback.cta.loginUrl}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center text-gray-300 hover:text-white text-sm font-medium transition-colors py-3"
                  >
                    {navbarFallback.cta.loginText}
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
