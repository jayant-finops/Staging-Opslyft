"use client";
import Image from "next/image";

export default function ProductProblemSection() {
  return (
    <section className="relative h-auto lg:h-[871px] bg-[#F1F1F1] -mt-[1px]">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute inset-0 lg:h-[574px] lg:w-[574px] mx-auto mt-55">
        <Image
          src="/assets/images/problems/circles.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Heading area */}
      <div className="relative max-w-[375px] lg:max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-4 px-6 lg:px-[218px] pt-[60px] lg:pt-[117px] pb-6">
        {/* Pill badge */}
        <div
          className="inline-flex items-center justify-center px-[14px] py-[4px] rounded-full border text-[#24823D] shadow-sm"
          style={{
            background: "rgba(36, 130, 61, 0.10)",
            borderColor: "rgba(211, 211, 211, 0.25)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.09)",
            fontFamily: '"IBM Plex Sans", sans-serif',
            letterSpacing: "1px",
            fontWeight: 500,
            fontSize: 13,
            lineHeight: "22px",
          }}
        >
          PROBLEM STATEMENT
        </div>

        {/* Heading */}
        <h2
          className="text-center text-[#202020] font-semibold text-[28px] leading-[25px] lg:text-[48px] lg:leading-[55px] tracking-[-1px] w-full max-w-[354.98px] lg:max-w-[770px] "
          style={{
            fontFamily: '"Funnel Display", sans-serif',
          }}
        >
          Why Cloud Cost Control Feels Broken
        </h2>

        {/* Description */}
        <p
          className="text-center text-[#154B23] font-light text-[14px] leading-[150%] w-full max-w-[339.56px] lg:max-w-[480.61px]"
          style={{
            fontFamily: '"IBM Plex Sans", sans-serif',
          }}
        >
          From inaccurate allocations to misaligned decisions, here are the core
          issues slowing down cost efficiency and value realization.
        </p>
      </div>

      {/* Cards row */}
      <div className="relative max-w-[348px] lg:max-w-[1170px] mx-auto px-0 lg:px-0 pt-6 lg:pt-5 pb-10">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
          {[
            {
              title: "Nobody owns it →",
              description:
                "Finance and Engineering toss costs back and forth, and nothing sticks.",
            },
            {
              title: "Too slow to act →",
              description:
                "Dashboards flag issues, but fixes drag on for days and money leaks out.",
            },
            {
              title: "Hard to see the value →",
              description:
                "Tools don't connect, and leadership can't measure the ROI of FinOps.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="flex flex-row justify-center items-center p-8 gap-[10px] w-full h-[173px] rounded-[27.4681px] shadow-[0px_5px_15px_rgba(0,0,0,0.25)] bg-gradient-to-br from-[rgba(69,131,48,0.08)] to-[rgba(15,29,11,0.08)]"
            >
              {/* Content */}
              <div className="flex flex-col justify-center items-start gap-4 w-full max-w-[284px]">
                {/* Heading */}
                <h3
                  className="text-[#24823D] font-semibold text-[24px] leading-[27px] w-full"
                  style={{
                    fontFamily: '"Funnel Display", sans-serif',
                  }}
                >
                  {card.title}
                </h3>
                {/* Sub-heading */}
                <p
                  className="text-[#343434] font-light text-[16px] leading-[22px] tracking-[-0.002em] w-full"
                  style={{
                    fontFamily: '"IBM Plex Sans", sans-serif',
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
