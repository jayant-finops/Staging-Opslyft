"use client";

import Link from "next/link";
import { LegacyButton } from "@/components/ui";

export default function CustomerStoriesHeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(104.85deg, #000000 8.41%, #0E1821 40.22%)",
      }}
    >
      {/* Desktop/mobile specific rounded bottom radius per spec */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0">
        {/* purely to reserve rounded corners on the container */}
      </div>

      <div className="mx-auto max-w-[1920px] overflow-hidden rounded-b-[17.1156px] lg:rounded-b-[40px]">
        {/* subtle bottom shadow on mobile like spec */}
        <div
          className="pointer-events-none absolute inset-x-0 -bottom-[1px] h-10"
          style={{ boxShadow: "0px 5px 12px rgba(36, 130, 56, 0.23)" }}
        />

        {/* Green glow rectangle (rotated gradient) */}
        <div
          className="pointer-events-none absolute left-[16px] -top-20 h-[1924.27px] w-[477.05px] -rotate-[89.99deg] opacity-60 blur-[50px] lg:block hidden"
          style={{
            background:
              "linear-gradient(261.34deg, rgba(53, 102, 68, 0.5) -21.5%, rgba(17, 150, 57, 0) 72.38%)",
            mixBlendMode: "plus-lighter" as any,
          }}
        />

        {/* Mobile blur variant */}
        <div
          className="pointer-events-none absolute lg:hidden left-1/2 -translate-x-1/2 -top-20 h-[459.53px] w-[477.05px] -rotate-[89.99deg] opacity-60 blur-[50px]"
          style={{
            background:
              "linear-gradient(261.34deg, rgba(53, 102, 68, 0.5) -21.5%, rgba(17, 150, 57, 0) 72.38%)",
            mixBlendMode: "plus-lighter" as any,
          }}
        />

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[603px] md:min-h-[669px] flex items-center">
            <div className="w-full text-center text-white space-y-4 md:space-y-6 py-20">
              {/* Badge */}
              <div className="inline-block">
                <div
                  className="relative inline-flex items-center justify-center h-8 px-4 rounded-full text-[11px] md:text-[13px] uppercase tracking-[1px] font-light text-[#68CA68]"
                  style={{
                    fontFamily:
                      'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif',
                    background: "rgba(240, 247, 237, 0.04)",
                    boxShadow:
                      "0px 38.8959px 10.8044px rgba(0,0,0,0.01), 0px 24.8501px 10.0841px rgba(0,0,0,0.05), 0px 14.0457px 8.28338px rgba(0,0,0,0.17), 0px 6.1225px 6.1225px rgba(0,0,0,0.29), 0px 1.44059px 3.60147px rgba(0,0,0,0.34)",
                  }}
                >
                  CUSTOMER STORIES
                </div>
              </div>

              {/* Headline */}
              <h1
                className="mx-auto max-w-[1125px] text-[30px] sm:text-[40px] lg:text-[56px] font-semibold leading-[1.25] lg:leading-[70px] tracking-[-1px]"
                style={{
                  fontFamily:
                    'var(--font-funnel-display), "Funnel Display", sans-serif',
                }}
              >
                Real Stories. Real Savings. Real Impact.
              </h1>

              {/* Subcopy */}
              <p
                className="mx-auto max-w-[600px] text-[#B7B7B7] text-sm sm:text-base leading-6 sm:leading-6 font-light"
                style={{
                  fontFamily:
                    'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif',
                }}
              >
                Cloud cost optimization isn’t just theory—it’s transformation in
                action. From fast- growing startups to Fortune 500 enterprises,
                OpsLyft helps organizations cut waste, scale smarter, and make
                cloud spend a true business advantage.
              </p>

              {/* CTA */}
              <div className="pt-2">
                <Link href="/book-demo">
                  <LegacyButton variant="primary" size="md">
                    Book a demo
                  </LegacyButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
