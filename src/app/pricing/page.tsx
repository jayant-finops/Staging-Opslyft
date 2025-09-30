"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { pricingFallback } from "@/features/pricing";

export default function PricingPage() {
  const [submitted, setSubmitted] = useState(false);
  const content = pricingFallback;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <section className="relative  overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[100vh]">
          {/* Left: Gradient + copy */}
          <div className="relative text-white flex flex-col w-full pl-[20px] md:pl-[40px] pr-[20px] md:pr-[10px] lg:pl-[60px] py-[40px] md:py-[50px] 2xl:pl-[180px] 2xl:py-[60px] overflow-hidden">
            {/* Solid background */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(185deg, #000000 0%, #0E1821 100%)",
              }}
            />

            {/* Animated gradient overlays */}
            <div className="absolute inset-0">
              <div
                className="absolute animated-gradient-bg1"
                style={{
                  backgroundImage: "url('/assets/images/pricing/bg-1.png')",
                  backgroundSize: "110% 110%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  opacity: 0.6,
                  top: "-5%",
                  left: "-5%",
                  right: "-5%",
                  bottom: "-5%",
                  mask: "radial-gradient(ellipse at center, black 60%, transparent 90%)",
                  WebkitMask:
                    "radial-gradient(ellipse at center, black 60%, transparent 90%)",
                }}
              />
              <div
                className="absolute animated-gradient-bg2"
                style={{
                  backgroundImage: "url('/assets/images/pricing/bg-2.png')",
                  backgroundSize: "110% 110%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  opacity: 0.6,
                  top: "-5%",
                  left: "-5%",
                  right: "-5%",
                  bottom: "-5%",
                  mask: "radial-gradient(ellipse at center, black 60%, transparent 90%)",
                  WebkitMask:
                    "radial-gradient(ellipse at center, black 60%, transparent 90%)",
                }}
              />
            </div>

            {/* Opslyft logo top-left */}
            <div className="z-10 mb-[70px] lg:mb-[141px]">
              <Link href="/" aria-label="Go to homepage" className="block">
                <div className="relative w-[90px] h-[28px] md:w-[110px] md:h-[34px]">
                  <Image
                    src="/assets/images/footer/opslyft-logo.svg"
                    alt="Opslyft"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* decorative circles */}
            <div className="pointer-events-none absolute -right-[120px] -top-[70px] lg:-right-[180px] lg:-top-[50px] 2xl:-top-[60px] w-[280px] h-[280px] md:w-[560px] md:h-[360px]">
              <Image
                src="/assets/images/hero/circles.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="relative z-10 lg:ml-[60px] xl:ml-[80px] 2xl:ml-[60px] max-w-[343px] md:max-w-[460px] lg:max-w-[520px] xl:max-w-[573px] 2xl:max-w-[708px] space-y-[20px] md:space-y-[28px] lg:space-y-[48px] xl:space-y-[60px] 2xl:space-y-[65px] mb-[24px] md:mb-[28px] lg:mb-[80px] xl:mb-[121px] 2xl:mb-[86px]">
              <div
                className="text-[9px] lg:text-[13px] 2xl:text-[15px] uppercase tracking-[1px] text-[#68CA68] font-light rounded-[20px] border border-white/10 max-w-[276px] h-[30px] lg:max-w-[349px] lg:h-[32px] 2xl:max-w-[420px] 2xl:h-[35px] flex items-center justify-center"
                style={{
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  background:
                    "linear-gradient(180deg, rgba(31,65,50,0.78) 0%, rgba(19,48,31,0.28) 100%)",
                  borderColor: "rgba(135, 135, 135, 0.36)",
                  borderWidth: 0.5,
                  boxShadow:
                    "0 14px 22px rgba(0,0,0,0.32), inset 0 1px 0 rgba(238,250,247,0.10), inset 0 -2px 6px rgba(0,0,0,0.35)",
                }}
              >
                {content.badgeLabel}
              </div>

              <h1
                className="text-[32px] lg:text-[48px] 2xl:text-[64px] leading-[1.25] lg:leading-[1.2] tracking-[-1px] 2xl:tracking-[-1.08px]  font-semibold text-[#f1f1f1] lg:text-[#eaeaea]"
                style={{ fontFamily: '"Funnel Display", sans-serif' }}
              >
                {content.titleLines?.[0]}
                <br />
                {content.titleLines?.[1]}
                <br />
                {content.titleLines?.[2]}
              </h1>
            </div>

            {/* Logos - 3 on top, 2 on bottom (centered) */}
            <div className="z-10 mt-8 space-y-8 w-fit mx-auto lg:mx-0 lg:ml-[60px] xl:ml-[80px] 2xl:ml-[60px]">
              <div className="grid grid-cols-3 gap-x-[16px] lg:gap-x-8 xl:gap-x-10 max-w-[345px] md:max-w-[420px] lg:max-w-[460px] xl:max-w-[477px] 2xl:max-w-[517px]">
                {content.logosTop?.map((logo: { src: string; alt: string }) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={132}
                    height={28}
                    className="w-[90px] h-[40px] lg:h-[55px] lg:w-[130px] 2xl:w-[140px] 2xl:h-[60px] object-contain invert brightness-0 opacity-90"
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-x-16 w-fit mx-auto">
                {content.logosBottom?.map(
                  (logo: { src: string; alt: string }) => (
                    <Image
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      width={132}
                      height={28}
                      className="h-7 w-auto object-contain invert brightness-0 opacity-90"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right: Form or Thank You */}
          <div className="bg-[#EDEDED] py-[32px] px-[15px] md:py-[60px] lg:py-[120px] lg:px-[60px] xl:py-[225px] xl:px-[120px] 2xl:px-[180px] flex items-start justify-start self-stretch h-full min-h-full lg:items-center lg:justify-center">
            {submitted ? (
              // Thank you message
              <div className="text-center w-[341px] lg:w-[474px] 2xl:w-[600px]">
                <h2
                  className="text-[#202020] text-[24px] lg:text-[40px] font-medium leading-[1.2]"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  Thank you! We&apos;ll get in touch with you soon.
                </h2>
              </div>
            ) : (
              // Form
              <div className="w-full max-w-[520px] mx-auto">
                <h2
                  className="text-center text-[#202020] text-[24px] font-medium leading-[1.2] mb-[24px] md:mb-[38px] lg:mb-[60px] 2xl:mb-[78px]"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {content.form?.heading}
                </h2>

                <form
                  className="space-y-6 md:space-y-8 w-[311px] lg:w-[436px] 2xl:w-[547px] rounded-[10px] mx-auto"
                  onSubmit={handleSubmit}
                >
                  {content.form?.fields?.map(
                    (f: { placeholder: string; type?: string }) => (
                      <input
                        key={f.placeholder}
                        name={f.placeholder
                          .toLowerCase()
                          .replace(/[^a-z0-9]/g, "_")}
                        required
                        type={f.type === "email" ? "email" : "text"}
                        placeholder={f.placeholder}
                        className="w-full rounded-[10px] border border-[#7c7c7c] bg-[#d3d3d3] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#24823D] placeholder:text-[#202020] font-[16px]"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                      />
                    )
                  )}

                  <button
                    type="submit"
                    className="w-full mt-2 rounded-[12px] text-white text-sm lg:text-[18px] font-medium py-3 shimmer-button relative overflow-hidden border border-white/20 shadow-lg"
                    style={{
                      background:
                        "linear-gradient(180deg, #2D9B4B 0%, #1E7A37 100%)",
                      boxShadow:
                        "0 12px 28px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)",
                    }}
                  >
                    {content.form?.submitText}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
