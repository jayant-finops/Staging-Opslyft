"use client";

import { useState, useEffect } from "react";
import { AnnouncementBanner as AnnouncementBannerType } from "@/types/sanity";

interface AnnouncementBannerProps {
  data?: AnnouncementBannerType | null;
}

export default function AnnouncementBanner({ data }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Show banner if: user hasn't closed it AND (Sanity data is active OR no data exists yet - use fallback)
  const shouldShow = isVisible && (!data || data.isActive);

  // Update body padding when banner visibility changes
  useEffect(() => {
    if (shouldShow) {
      document.body.style.paddingTop = "39px";
    } else {
      document.body.style.paddingTop = "0px";
    }

    return () => {
      document.body.style.paddingTop = "0px";
    };
  }, [shouldShow]);

  if (!shouldShow) return null;

  const title = data?.title || "Opslyft joins 500 Global portfolio";
  const linkText = data?.linkText || "Read here";
  const linkUrl =
    data?.linkUrl ||
    "https://www.prnewswire.com/news-releases/opslyft-joins-500-global-portfolio-sets-sights-on-us-market-with-ai-powered-cloud-cost-intelligence-302575733.html";

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-[60]">
      <div className="relative w-full h-[39px] bg-[#0E1821] overflow-hidden shadow-[inset_0_4px_4px_rgba(0,0,0,0.3)] shimmer-banner">
        {/* Content Container */}
        <div className="relative flex items-center justify-center h-[39px] px-12">
          {/* Confetti Icon */}
          <div className="flex-shrink-0 w-6 h-6">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.13854 4.31687C7.96239 4.14119 7.74482 4.0127 7.50592 3.94326C7.26702 3.87383 7.01447 3.86568 6.7716 3.91958C6.52872 3.97348 6.30333 4.08769 6.11622 4.25167C5.92912 4.41564 5.78633 4.6241 5.70104 4.85781L0.7801 18.3934C0.699261 18.6166 0.673149 18.856 0.703956 19.0914C0.734762 19.3268 0.821589 19.5513 0.957147 19.7462C1.09271 19.9411 1.27304 20.1006 1.48301 20.2114C1.69298 20.3222 1.92646 20.381 2.16385 20.3828C2.33863 20.3816 2.51187 20.3499 2.67572 20.2891L16.2104 15.3672C16.4442 15.282 16.6527 15.1393 16.8168 14.9522C16.9809 14.7652 17.0952 14.5398 17.1492 14.2969C17.2032 14.054 17.1951 13.8014 17.1258 13.5625C17.0564 13.3235 16.928 13.1059 16.7523 12.9297L8.13854 4.31687ZM7.3576 16.9928L4.07635 13.7116L5.3101 10.3169L10.7523 15.7591L7.3576 16.9928ZM2.20135 18.8678L3.51385 15.2669L5.80604 17.5591L2.20135 18.8678ZM12.3113 15.1928L5.87635 8.75781L7.0951 5.395L15.6667 13.9666L12.3113 15.1928ZM12.6863 6.13281C12.7004 5.62578 12.8232 5.12769 13.0463 4.67219C13.5432 3.67937 14.4807 3.13281 15.6863 3.13281C16.3145 3.13281 16.7176 2.91813 16.966 2.45688C17.0969 2.19883 17.1719 1.91614 17.1863 1.62719C17.1871 1.42828 17.2668 1.23781 17.408 1.09768C17.5492 0.957556 17.7402 0.879254 17.9392 0.88C18.1381 0.880746 18.3285 0.960479 18.4687 1.10166C18.6088 1.24284 18.6871 1.4339 18.6863 1.63281C18.6863 2.83844 17.8876 4.63281 15.6863 4.63281C15.0582 4.63281 14.6551 4.8475 14.4067 5.30875C14.2758 5.5668 14.2008 5.84948 14.1863 6.13844C14.186 6.23693 14.1662 6.33438 14.1282 6.42524C14.0902 6.51609 14.0346 6.59856 13.9647 6.66794C13.8948 6.73733 13.8119 6.79226 13.7208 6.82961C13.6296 6.86696 13.532 6.88599 13.4335 6.88562C13.335 6.88526 13.2376 6.86549 13.1467 6.82746C13.0559 6.78943 12.9734 6.73387 12.904 6.66397C12.8346 6.59406 12.7797 6.51117 12.7424 6.42004C12.705 6.3289 12.686 6.2313 12.6863 6.13281ZM10.4363 3.13281V0.882812C10.4363 0.6839 10.5154 0.493135 10.656 0.352482C10.7967 0.21183 10.9874 0.132813 11.1863 0.132812C11.3853 0.132813 11.576 0.21183 11.7167 0.352482C11.8573 0.493135 11.9363 0.6839 11.9363 0.882812V3.13281C11.9363 3.33172 11.8573 3.52249 11.7167 3.66314C11.576 3.80379 11.3853 3.88281 11.1863 3.88281C10.9874 3.88281 10.7967 3.80379 10.656 3.66314C10.5154 3.52249 10.4363 3.33172 10.4363 3.13281ZM19.967 10.8522C20.0366 10.9219 20.0918 11.0046 20.1295 11.0956C20.1671 11.1866 20.1865 11.2842 20.1864 11.3827C20.1864 11.4812 20.1669 11.5787 20.1292 11.6697C20.0915 11.7607 20.0362 11.8433 19.9665 11.913C19.8968 11.9826 19.8141 12.0378 19.7231 12.0755C19.6321 12.1131 19.5345 12.1325 19.436 12.1324C19.3375 12.1324 19.24 12.1129 19.149 12.0752C19.058 12.0375 18.9753 11.9822 18.9057 11.9125L17.4057 10.4125C17.265 10.2718 17.1859 10.0809 17.1859 9.88188C17.1859 9.68285 17.265 9.49198 17.4057 9.35125C17.5465 9.21052 17.7373 9.13146 17.9363 9.13146C18.1354 9.13146 18.3262 9.21052 18.467 9.35125L19.967 10.8522ZM20.4235 6.84437L18.1735 7.59437C17.9848 7.65728 17.7788 7.64264 17.6009 7.55368C17.423 7.46472 17.2877 7.30872 17.2248 7.12C17.1619 6.93128 17.1765 6.7253 17.2655 6.54738C17.3544 6.36945 17.5104 6.23416 17.6992 6.17125L19.9492 5.42125C20.1379 5.35834 20.3439 5.37298 20.5218 5.46194C20.6997 5.55091 20.835 5.70691 20.8979 5.89563C20.9608 6.08434 20.9462 6.29032 20.8572 6.46825C20.7683 6.64617 20.6123 6.78147 20.4235 6.84437Z"
                fill="#3CC35E"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="flex flex-row items-center justify-center gap-1 px-3">
            {/* Label Title */}
            <span
              className="text-white text-[13px] leading-[17px] font-medium tracking-[-0.01em] text-center"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              {title}
            </span>

            {/* Link */}
            <a
              href={linkUrl}
              className="text-[#3CC35E] text-[12px] leading-[16px] font-medium tracking-[-0.01em] text-center underline hover:text-[#4dd36f] transition-colors whitespace-nowrap"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              {linkText}
            </a>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-[16.5px] lg:right-4 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-6 lg:h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
          aria-label="Close banner"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#D2D3E0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
