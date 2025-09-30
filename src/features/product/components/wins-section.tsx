"use client";

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
                    style={{ fontFamily: '"Funnel Display", sans-serif', fontSize: 24, lineHeight: "27px" }}
                  >
                    {it.title}
                  </div>
                  <div
                    className="text-[#AFAFAF]"
                    style={{ fontFamily: '"IBM Plex Sans", sans-serif', fontSize: 16, lineHeight: "22px", fontWeight: 300 }}
                  >
                    {it.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative radial rings */}
        <div className="pointer-events-none absolute left-[322px] -top-[100px] opacity-60 hidden md:block" aria-hidden>
          <div className="absolute" style={{ width: 573.78, height: 578.58, opacity: 0.2, background: "radial-gradient(24.09% 24.09% at 25.73% 76.28%, #D9D9D9 0%, rgba(217,217,217,0) 100%)" }} />
          <div className="absolute" style={{ width: 301.55, height: 304.07, left: 136.12, top: 137.26, opacity: 0.2, background: "radial-gradient(24.09% 24.09% at 25.73% 76.28%, #D9D9D9 0%, rgba(217,217,217,0) 100%)" }} />
          <div className="absolute" style={{ width: 171.72, height: 173.15, left: 201.03, top: 202.71, opacity: 0.2, background: "radial-gradient(24.09% 24.09% at 25.73% 76.28%, #D9D9D9 0%, rgba(217,217,217,0) 100%)" }} />
          <div className="absolute" style={{ width: 435.57, height: 439.22, left: 69.11, top: 69.68, opacity: 0.2, background: "radial-gradient(24.09% 24.09% at 25.73% 76.28%, #D9D9D9 0%, rgba(217,217,217,0) 100%)" }} />
        </div>
      </div>
    </section>
  );
}


