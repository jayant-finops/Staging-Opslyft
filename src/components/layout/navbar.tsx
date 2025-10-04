"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { navbarFallback, DropdownCategory } from "./navbar.data";
import { LegacyButton, Button } from "@/components/ui";

// Product Dropdown Component
const ProductDropdown = ({
  categories,
}: {
  categories: DropdownCategory[];
}) => {
  return (
    <div className="p-4 relative">
      <div className="grid grid-cols-[198px_1fr] gap-4">
        {/* Left Column - Category Cards */}
        <div className="flex flex-col gap-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col justify-center items-start px-4 py-4 gap-2 bg-[#0B2A1A] border border-[#7C7C7C] rounded-[20px] shadow-[0px_4px_15px_rgba(0,0,0,0.04)]"
            >
              <div className="relative w-[41px] h-[39px]">
                <Image
                  src={category.icon}
                  alt={category.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3
                className="text-white text-[18px] font-semibold leading-[22px]"
                style={{ fontFamily: '"Funnel Display", sans-serif' }}
              >
                {category.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Right Column - Items */}
        <div className="flex flex-col">
          {categories.map((category, index) => (
            <div key={category.title}>
              <div className="px-4 py-4 flex flex-col gap-2">
                {category.items.map((item) => (
                  <Link
                    key={item}
                    href={`/product/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[#F1F1F1] text-[15px] leading-[20px] hover:text-white transition-colors"
                    style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                  >
                    {item}
                  </Link>
                ))}
              </div>
              {index < categories.length - 1 && (
                <div className="w-full h-[1px] bg-[#343434]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Vertical divider */}
      <div className="absolute left-[214px] top-6 bottom-6 w-[1px] bg-[#343434]" />
    </div>
  );
};

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const thresholdPx = window.innerHeight; // Full 100vh

      // Always clear existing hide timers on scroll
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        setHideTimeout(null);
      }

      // If mobile menu is open, always keep visible
      if (isMobileMenuOpen) {
        setIsVisible(true);
        return;
      }

      // If within the first 100vh, always keep visible
      if (currentScrollY < thresholdPx) {
        setIsVisible(true);
        return;
      }

      // Beyond 100vh: Check if we're in the features section with stacking animation
      // Look for any element with id starting with "feature-"
      const featureElements = document.querySelectorAll('[id^="feature-"]');
      let inFeaturesSection = false;

      if (featureElements.length > 0) {
        const firstFeature = featureElements[0];
        const lastFeature = featureElements[featureElements.length - 1];

        if (firstFeature && lastFeature) {
          const firstRect = firstFeature.getBoundingClientRect();
          const lastRect = lastFeature.getBoundingClientRect();

          // Hide navbar if any feature is in the sticky position area
          // (between the top of viewport and middle of viewport)
          inFeaturesSection =
            firstRect.top <= window.innerHeight / 2 && lastRect.bottom >= 0;
        }
      }

      if (inFeaturesSection) {
        // Hide immediately when in features section
        setIsVisible(false);
        return;
      }

      // Beyond features section: show while scrolling, hide after inactivity
      setIsVisible(true);

      // Schedule hide after inactivity
      const timeout = setTimeout(() => {
        // Double check we're still beyond the threshold before hiding
        if (window.scrollY >= thresholdPx) {
          setIsVisible(false);
        }
      }, 3000);

      setHideTimeout(timeout);
      setLastScrollY(currentScrollY);
    };

    // Show navbar when scrolling starts (except in features section)
    const handleScrollStart = () => {
      const currentScrollY = window.scrollY;
      const thresholdPx = window.innerHeight;

      // Only show if not in features section or within first 100vh
      if (currentScrollY < thresholdPx) {
        setIsVisible(true);
      }
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
            className="fixed top-4 sm:top-6 lg:top-10 inset-x-4 lg:left-1/2 lg:-translate-x-1/2 lg:inset-x-auto lg:transform z-50 rounded-[16px] sm:rounded-[20px] backdrop-blur-md backdrop-saturate-125 border border-white/8 w-[calc(100vw-2rem)] lg:w-[calc(100vw-200px)] 2xl:w-[calc(100vw-300px)]"
            style={{
              background:
                "linear-gradient(176deg, rgba(7,8,8,0.72) -23.3%, rgba(0,25,16,0.52) 89.49%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 20px rgba(0,0,0,0.25)",
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
                    <div
                      key={item.title}
                      className="relative"
                      onMouseEnter={() =>
                        item.hasDropdown && setActiveDropdown(item.title)
                      }
                      onMouseLeave={() =>
                        item.hasDropdown && setActiveDropdown(null)
                      }
                    >
                      {item.hasDropdown ? (
                        <div
                          className={`flex items-center gap-1 px-6 py-2 rounded-[10px] border transition-all cursor-pointer ${
                            activeDropdown === item.title
                              ? "bg-[#0B2A1A] border-[#7C7C7C]"
                              : "bg-transparent border-transparent"
                          }`}
                        >
                          <span
                            className="text-[#CACACA] hover:text-white text-[15px] font-normal transition-colors"
                            style={{
                              fontFamily: '"IBM Plex Sans", sans-serif',
                            }}
                          >
                            {item.title}
                          </span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={`transition-transform ${
                              activeDropdown === item.title ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              d="M7 10L12 15L17 10"
                              stroke="#C2C2C2"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ) : (
                        <Link
                          href={item.url}
                          className="text-[#CACACA] hover:text-white text-[15px] font-normal transition-colors"
                          style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                        >
                          {item.title}
                        </Link>
                      )}

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {item.hasDropdown && activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-full mt-6 w-[529px] rounded-[30px] border border-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.25)] z-50"
                            style={{
                              background:
                                "linear-gradient(176.26deg, rgba(0, 25, 16, 0.7) 7.42%, rgba(7, 8, 8, 0.49) 102.27%)",
                            }}
                          >
                            <ProductDropdown
                              categories={item.dropdownCategories || []}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons - Desktop */}
                <div className="hidden lg:flex items-center space-x-4">
                  <Link
                    href={navbarFallback.cta.loginUrl}
                    className="text-[#CACACA] hover:text-white text-[14px] font-normal transition-colors"
                  >
                    <span style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
                      {navbarFallback.cta.loginText}
                    </span>
                  </Link>
                  <Link href={navbarFallback.cta.buttonUrl}>
                    <LegacyButton variant="secondary" size="sm">
                      <span
                        style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                      >
                        {navbarFallback.cta.buttonText}
                      </span>
                    </LegacyButton>
                  </Link>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="p-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M3.18774 12.043H15.1877M3.18774 6.04297H21.1877M3.18774 18.043H21.1877"
                        stroke="#AFAFAF"
                        strokeWidth="1.84615"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden flex items-start justify-center p-4 bg-black/70 backdrop-blur-[2px]"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-[343px] max-h-[90vh] rounded-[20px] border border-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col"
              style={{
                background:
                  "linear-gradient(176.19deg, rgba(7, 8, 8, 0.5) 12.83%, rgba(0, 25, 16, 0.5) 96.88%)",
              }}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-6 py-4 flex-shrink-0">
                <div className="relative w-[110px] h-9">
                  <Image
                    src={navbarFallback.logoSrc}
                    alt="Opslyft"
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setMobileDropdownOpen(false);
                  }}
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
              <div className="flex-1 px-3 overflow-y-auto">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navbarFallback.navigation.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.25 }}
                    >
                      {item.hasDropdown ? (
                        <div className="flex flex-col">
                          {/* Product Button with Dropdown */}
                          <button
                            onClick={() =>
                              setMobileDropdownOpen(!mobileDropdownOpen)
                            }
                            className={`flex items-center gap-2 px-4 py-2 rounded-[10px] border transition-all ${
                              mobileDropdownOpen
                                ? "bg-[#0B2A1A] border-[#7C7C7C]"
                                : "bg-transparent border-transparent"
                            }`}
                          >
                            <span
                              className="text-[#CACACA] text-[15px] font-normal"
                              style={{
                                fontFamily: '"IBM Plex Sans", sans-serif',
                              }}
                            >
                              {item.title}
                            </span>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              className={`transition-transform ${
                                mobileDropdownOpen ? "rotate-180" : ""
                              }`}
                            >
                              <path
                                d="M7 10L12 15L17 10"
                                stroke="#C2C2C2"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>

                          {/* Dropdown Content */}
                          <AnimatePresence>
                            {mobileDropdownOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-2 rounded-[10px] overflow-hidden"
                                style={{
                                  background:
                                    "linear-gradient(176.26deg, rgba(0, 25, 16, 0.7) 7.42%, rgba(7, 8, 8, 0.49) 102.27%)",
                                }}
                              >
                                <div className="p-3 flex flex-col gap-4">
                                  {item.dropdownCategories?.map(
                                    (category, idx) => (
                                      <div key={category.title}>
                                        {/* Category Card */}
                                        <div className="flex items-center gap-2 px-4 py-2 bg-[#0B2A1A] border border-[#7C7C7C] rounded-[10px] shadow-[0px_4px_15px_rgba(0,0,0,0.04)]">
                                          <div className="relative w-8 h-8 flex-shrink-0">
                                            <Image
                                              src={category.icon}
                                              alt={category.title}
                                              fill
                                              className="object-contain"
                                            />
                                          </div>
                                          <h3
                                            className="text-white text-[15px] font-semibold leading-[19px]"
                                            style={{
                                              fontFamily:
                                                '"Funnel Display", sans-serif',
                                            }}
                                          >
                                            {category.title}
                                          </h3>
                                        </div>

                                        {/* Category Items */}
                                        <div className="px-4 py-4 flex flex-col gap-4">
                                          {category.items.map((item) => (
                                            <Link
                                              key={item}
                                              href={`/product/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                              onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setMobileDropdownOpen(false);
                                              }}
                                              className="text-[#F1F1F1] text-[12px] leading-[16px] hover:text-white transition-colors"
                                              style={{
                                                fontFamily:
                                                  '"IBM Plex Sans", sans-serif',
                                              }}
                                            >
                                              {item}
                                            </Link>
                                          ))}
                                        </div>

                                        {/* Divider */}
                                        {idx <
                                          (item.dropdownCategories?.length ||
                                            0) -
                                            1 && (
                                          <div className="w-full h-[1px] bg-[#343434]" />
                                        )}
                                      </div>
                                    )
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.url}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                          className="block text-[#CACACA] hover:text-white text-[15px] font-normal transition-colors px-4 py-2 border-b border-[#343434]"
                          style={{
                            fontFamily: '"IBM Plex Sans", sans-serif',
                          }}
                        >
                          {item.title}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.25 }}
                  className="space-y-4 pt-8 pb-6"
                >
                  <Link
                    href={navbarFallback.cta.buttonUrl}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                    className="block"
                  >
                    <Button variant="secondary" size="md" className="w-full">
                      <span
                        style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                      >
                        {navbarFallback.cta.buttonText}
                      </span>
                    </Button>
                  </Link>
                  <Link
                    href={navbarFallback.cta.loginUrl}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                    className="block text-center text-[#AFAFAF] hover:text-white text-[14px] font-medium transition-colors py-2"
                    style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                  >
                    {navbarFallback.cta.loginText}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
