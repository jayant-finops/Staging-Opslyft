"use client";

import Image from "next/image";

export default function ProductWinsSection() {
  const items = [
    {
      title: "Closed-loop FinOps",
      sub: "Insight → Action → Savings",
    },
    {
      title: "Faster response",
      sub: "High-severity spikes get flagged and routed instantly.",
    },
    {
      title: "Clear ROI",
      sub: "Dashboards that show exactly how much you saved last quarter.",
    },
    {
      title: "Scales with you",
      sub: "Whether you're spending $2M or $200M, manual FinOps breaks. OpsLyft doesn't.",
    },
  ];

  return (
    <section className="relative" style={{ background: "#154B23" }}>
      <div className="relative max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-0 py-[60px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-[40px] lg:gap-[120px]">
          <h2
            className="text-[36px] sm:text-[44px] lg:text-[48px] font-semibold text-[#F1F1F1]"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            Why OpsLyft Wins
          </h2>

          <div className="flex flex-col gap-4 w-full max-w-[616px]">
            {items.map((it, idx) => (
              <div
                key={idx}
                className="rounded-[30px] bg-[#0E1821] shadow-[0_1.44px_4px_rgba(0,0,0,0.34)] backdrop-blur-[2px] px-6 py-6"
              >
                <div className="flex flex-col gap-2">
                  <div
                    className="text-[#F1F1F1]"
                    style={{
                      fontFamily: '"Funnel Display", sans-serif',
                      fontSize: 24,
                      lineHeight: "27px",
                    }}
                  >
                    {it.title}
                  </div>
                  <div
                    className="text-[#AFAFAF]"
                    style={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontSize: 16,
                      lineHeight: "22px",
                      fontWeight: 300,
                    }}
                  >
                    {it.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative circles */}
        <div
          className="pointer-events-none absolute -top-[180px] lg:left-[0px] lg:-top-[100px] block"
          aria-hidden="true"
        >
          <div className="relative lg:w-[580px] lg:h-[580px] w-[350px] h-[350px]">
            <Image
              src="/assets/images/win/circle.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
