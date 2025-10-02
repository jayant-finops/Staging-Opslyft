"use client";

import Link from "next/link";

export default function ProductBannerSection() {
  return (
    <section className="relative" style={{ background: "#F1F1F1" }}>
      <div className="mx-auto w-full max-w-[1920px] flex flex-col items-center justify-center py-[100px] gap-[10px]">
        {/* inner frame */}
        <div className="relative w-full max-w-[1170px] h-[385px] rounded-[40px] overflow-hidden">
          {/* dark download app block */}
          <div className="absolute inset-0 bg-[#0E1821]" />

          {/* soft radial highlights */}
          <div
            className="pointer-events-none absolute right-2 top-0 bottom-[-33%] w-[680.82px] blur-[200px] opacity-90"
            style={{ background: "#0B2E19" }}
          />
          <div
            className="pointer-events-none absolute opacity-60"
            style={{ left: 349, top: -184, width: 573.78, height: 578.58 }}
          >
            <div
              className="absolute opacity-20"
              style={{
                left: 136.12,
                top: 137.26,
                width: 301.55,
                height: 304.07,
                background:
                  "radial-gradient(24.09% 24.09% at 25.73% 76.28%, #D9D9D9 0%, rgba(217,217,217,0) 100%)",
              }}
            />
            <div
              className="absolute opacity-20"
              style={{
                left: 0,
                top: 0,
                width: 573.78,
                height: 578.58,
                background:
                  "radial-gradient(24.09% 24.09% at 25.73% 76.28%, #D9D9D9 0%, rgba(217,217,217,0) 100%)",
              }}
            />
            <div
              className="absolute opacity-20"
              style={{
                left: 201.03,
                top: 202.71,
                width: 171.72,
                height: 173.15,
                background:
                  "radial-gradient(24.09% 24.09% at 25.73% 76.28%, #D9D9D9 0%, rgba(217,217,217,0) 100%)",
              }}
            />
            <div
              className="absolute opacity-20"
              style={{
                left: 69.11,
                top: 69.68,
                width: 435.57,
                height: 439.22,
                background:
                  "radial-gradient(24.09% 24.09% at 25.73% 76.28%, #D9D9D9 0%, rgba(217,217,217,0) 100%)",
              }}
            />
          </div>

          {/* headline */}
          <h3
            className="absolute left-[157px] top-[81px] text-center text-white"
            style={{
              width: 973,
              height: 114,
              fontFamily: '"Funnel Display", sans-serif',
              fontWeight: 600,
              fontSize: 48,
              lineHeight: "57px",
            }}
          >
            Cloud waste? Bench it. OpsLyft puts the right players on the field
          </h3>

          {/* CTA */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[248px]">
            <Link href="/book-demo" className="block">
              <button
                className="inline-flex items-center justify-center rounded-[12px] bg-[#24823D] text-white shadow-md"
                style={{ width: 220, height: 60, padding: "22px 32px" }}
              >
                <span
                  style={{
                    fontFamily: '"IBM Plex Sans", sans-serif',
                    fontWeight: 600,
                    fontSize: 18,
                    lineHeight: "16px",
                  }}
                >
                  Book a demo
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
