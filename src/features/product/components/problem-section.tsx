"use client";

export default function ProductProblemSection() {
  return (
    <section
      className="relative overflow-x-auto"
      style={{ background: "#F1F1F1" }}
    >
      {/* Decorative circles (hidden by default, hooks for future) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* right stack */}
        <div className="hidden md:block absolute opacity-50" style={{ left: 1149.33, top: -132.16, width: 381.37, height: 396.33 }} />
        {/* left stack */}
        <div className="hidden md:block absolute opacity-50" style={{ left: -94.68, top: 453.84, width: 381.37, height: 396.33 }} />
      </div>

      {/* Heading area */}
      <div className="relative max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-[218px] pt-[117px] pb-6">
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

        <h2
          className="text-center text-[#202020] font-semibold"
          style={{
            fontFamily: '"Funnel Display", sans-serif',
            fontSize: 48,
            lineHeight: "55px",
            maxWidth: 770,
          }}
        >
          Why Cloud Cost Control Feels Broken
        </h2>

        <p
          className="text-center text-[#154B23] font-light"
          style={{
            fontFamily: '"IBM Plex Sans", sans-serif',
            fontSize: 14,
            lineHeight: "150%",
            maxWidth: 480.61,
          }}
        >
          From inaccurate allocations to misaligned decisions, here are the core issues
          slowing down cost efficiency and value realization.
        </p>
      </div>

      {/* Cards row */}
      <div className="relative max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-0 pb-10" style={{ marginTop: 20 }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                "Tools don’t connect, and leadership can’t measure the ROI of FinOps.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="rounded-[27.4681px] shadow-[0_5px_15px_rgba(0,0,0,0.25)] px-8 py-8"
              style={{
                background:
                  "linear-gradient(194.89deg, rgba(69,131,48,0.08) -23.3%, rgba(15,29,11,0.08) 89.49%)",
              }}
            >
              <div className="flex flex-col gap-4">
                <h3
                  className="text-[#24823D]"
                  style={{ fontFamily: '"Funnel Display", sans-serif', fontSize: 24, lineHeight: "27px" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[#343434]"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif', fontSize: 16, lineHeight: "22px", fontWeight: 300 }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 md:mt-14 rounded-[27.4681px] px-8 py-6">
          <p
            className="text-[#7C7C7C]"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif', fontSize: 16, lineHeight: "21px" }}
          >
            Most FinOps platforms stop at surfacing anomalies and recommendations. But without engineering context, ownership clarity, or workflow automation, insights remain static in dashboards. This creates cost leakages, delays in action, and difficulty proving ROI. Opslyft changes that by combining deep engineering context, accurate anomaly detection, and closed-loop workflow automation so every insight directly translates into measurable savings.
          </p>
        </div>
      </div>
    </section>
  );
}


