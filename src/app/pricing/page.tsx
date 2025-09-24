"use client";

import { useState } from "react";
import Image from "next/image";
import { pricingFallback } from "@/data/pricing";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100vh]">
          {/* Left: Gradient + copy */}
          <div className="relative text-white flex flex-col min-w-[375px] lg:w-[720px] 2xl:min-w-[960px] px-[10px] lg:pl-[60px] py-[50px] 2xl:pl-[180px] 2xl:py-[60px] ">
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
                className="absolute inset-0 animated-gradient-bg1"
                style={{
                  backgroundImage: "url('/assets/images/pricing/bg-1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div
                className="absolute inset-0 animated-gradient-bg2"
                style={{
                  backgroundImage: "url('/assets/images/pricing/bg-2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>

            {/* Opslyft logo top-left */}
            <div className="z-10 mb-[70px] lg:mb-[141px]">
              <div className="relative w-[90px] h-[28px] md:w-[110px] md:h-[34px]">
                <Image
                  src="/assets/images/footer/opslyft-logo.svg"
                  alt="Opslyft"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* decorative circles */}
            <div className="pointer-events-none absolute right-2 top-2 md:right-6 md:top-4 w-[280px] h-[280px] md:w-[360px] md:h-[360px] opacity-60 ">
              <Image
                src="/assets/images/hero/circles.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="relative z-10 lg:ml-[80px] 2xl:ml-[60px] w-[343px] h-[182px] lg:w-[573px] lg:h-[272px] 2xl:w-[708px] 2xl:h-[340px] space-y-[32px] lg:space-y-[60px] 2xl:space-y-[65px] mb-[32px] lg:mb-[121px] 2xl:mb-[86px]">
              <div
                className="text-[9px] lg:text-[13px] 2xl:text-[15px] uppercase tracking-[1px] text-[#68CA68] font-light rounded-[20px] border border-white/10 w-[276px] h-[30px] lg:w-[349px] lg:h-[32px] 2xl:w-[420px] 2xl:h-[35px] flex items-center justify-center"
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
            <div className="z-10 mt-8 space-y-8 w-fit lg:ml-[80px] 2xl:ml-[60px]">
              <div className="grid grid-cols-3 gap-x-[16px] lg:gap-x-10 2xl:[50px] w-[345px] lg:w-[477px] 2xl:[517px] ">
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
          <div className="bg-[#EDEDED] py-[52px] px-[15px] lg:py-[225px] lg:px-[120px] 2xl:px-[180px] flex items-center justify-center h-[100vh]">
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
                  className="text-center text-[#202020] text-[24px] font-medium leading-[1.2] mb-[38px] lg:mb-[60px] 2xl:mb-[78px]"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {content.form?.heading}
                </h2>

                <form
                  className="space-y-8 w-[311px] lg:w-[436px] 2xl:w-[547px] rounded-[10px] mx-auto"
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
                    className="w-full mt-2 rounded-[12px] text-white text-sm lg:text-[18px] font-medium py-3 shimmer-button relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, #2D9B4B 0%, #1E7A37 100%)",
                      boxShadow: "0 8px 18px rgba(0,0,0,0.10)",
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
