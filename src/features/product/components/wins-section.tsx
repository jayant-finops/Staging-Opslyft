"use client";

import Image from "next/image";
import { productWinsFallback } from "@/features/product/data";

type ProductWinsSectionProps = {
  data?: typeof productWinsFallback | null;
};

export default function ProductWinsSection({ data }: ProductWinsSectionProps) {
  const winsData = data || productWinsFallback;

  return (
    <section className="relative" style={{ background: "#154B23" }}>
      <div className="relative max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-0 py-[60px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-[40px] lg:gap-[120px]">
          <h2
            className="text-[36px] sm:text-[44px] lg:text-[48px] font-semibold text-[#F1F1F1]"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {winsData.title}
          </h2>

          <div className="flex flex-col gap-4 w-full max-w-[616px]">
            {winsData.wins.map((it, idx) => (
              <div
                key={idx}
                className="rounded-[30px] px-6 py-6"
                style={{
                  background: "rgba(14, 24, 33, 0.38)",
                  boxShadow: "inset 0px 3px 5px rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(3.4px)",
                  borderRadius: "30px",
                }}
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
                    {it.description}
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
              src={winsData.decorativeImage}
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
