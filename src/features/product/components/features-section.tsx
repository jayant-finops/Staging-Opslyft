"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProductFeaturesSection() {
  const features = [
    {
      tabLabel: "Contextual optimization",
      badge: "Contextual Optimization",
      title: "Features Built for Real-World Cost Control",
      kicker: "Stop chasing engineers on Slack. Start closing tickets.",
      points: [
        {
          heading: "Closed-Loop FinOps",
          description:
            "Every anomaly, recommendation, and allocation dispute becomes a tracked ticket — full visibility from detection → action → realized savings.",
        },
        {
          heading: "Clear Ownership & SLAs",
          description:
            "Tickets auto-assign to the right service owners with deadlines, eliminating ambiguity and driving accountability.",
        },
        {
          heading: "Embedded in Workflows",
          description:
            "Deep integrations with Jira, ServiceNow, Asana, and Slack ensure engineers see optimization tickets in the same backlog as product work.",
        },
      ],

      visualUrl: "/assets/images/features/feature1-card.svg",
    },
    {
      tabLabel: "AI-Powered Anomaly Detection",
      badge: "AI-Powered Anomaly Detection",
      title: "AI-Powered Anomaly Detection",
      kicker: "Stop chasing engineers on Slack. Start closing tickets.",
      points: [
        {
          heading: "100% accuracy",
          description:
            "No anomalies missed, thanks to Meta Prophet modeling trained on customer data.",
        },
        {
          heading: "Context-aware detection",
          description:
            "Seasonality & spend patterns ensure only relevant spikes are flagged.",
        },
        {
          heading: "Root cause and diagnosis built-in",
          description:
            "Move beyond alerts. Know why the spike happened and how to fix it.",
        },
      ],
      outcome:
        "Finance and Engineering stop firefighting; anomalies are explained and resolved faster.",
      visualUrl: "/assets/images/features/feature2-card.svg",
    },
    {
      tabLabel: "Workflow Management That Drives Action",
      badge: "Workflow Automation",
      title: "Workflow Management That Drives Action",
      kicker: "Stop chasing engineers on Slack. Start closing tickets.",
      points: [
        {
          heading: "Closed-Loop FinOps",
          description: "Insight → Action → Savings with measurable outcomes.",
        },
        {
          heading: "Ownership & SLAs",
          description:
            "Auto-assignment, due dates, and reminders to drive accountability.",
        },
        {
          heading: "Integrations",
          description:
            "Jira, ServiceNow, Asana, Slack — embedded where engineers already work.",
        },
      ],
      outcome: "Less chaos, more accountability, measurable ROI.",
      visualUrl: "/assets/images/features/feature3-card.svg",
    },
    {
      tabLabel: "Pravin powered anomaly detection",
      badge: "Workflow Automation",
      title: "Workflow Management That Drives Action",
      kicker: "Stop chasing engineers on Slack. Start closing tickets.",
      points: [
        {
          heading: "Closed-Loop FinOps",
          description: "Insight → Action → Savings with measurable outcomes.",
        },
        {
          heading: "Ownership & SLAs",
          description:
            "Auto-assignment, due dates, and reminders to drive accountability.",
        },
        {
          heading: "Integrations",
          description:
            "Jira, ServiceNow, Asana, Slack — embedded where engineers already work.",
        },
      ],
      outcome: "Less chaos, more accountability, measurable ROI.",
      visualUrl: "/assets/images/features/feature4-card.svg",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll tracker with scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      let newActiveTab = 0;

      // Iterate through cards in reverse to prioritize later cards when overlapping
      for (let idx = features.length - 1; idx >= 0; idx--) {
        const element = document.getElementById(`feature-${idx}`);
        if (element) {
          // Get position relative to the viewport
          const rect = element.getBoundingClientRect();

          // Calculate the actual document position
          const elementTop = rect.top + scrollPosition;
          const elementBottom = elementTop + rect.height;

          // Calculate card offset dynamically (same formula as sticky top)
          const cardOffset = isMobile ? 100 : 120 + idx * 20;
          const viewPosition = scrollPosition + cardOffset;

          // Check if view position is within this card's range
          // Add a buffer zone of 100px to make transitions smoother
          if (
            viewPosition >= elementTop - 100 &&
            viewPosition < elementBottom
          ) {
            newActiveTab = idx;
            break; // Found the active card, stop searching
          }
        }
      }

      setActiveTab(newActiveTab);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [isMobile, features]);

  const scrollToFeature = (index: number) => {
    const element = document.getElementById(`feature-${index}`);
    if (!element) return;

    // For stacked cards, we need to scroll to the parent container position
    // plus the accumulated height of all previous cards
    const container = element.parentElement;
    if (!container) return;

    const cards = Array.from(container.children);
    const targetCardIndex = cards.indexOf(element);

    // Calculate the total height of all cards before the target
    let accumulatedHeight = 0;
    for (let i = 0; i < targetCardIndex; i++) {
      const card = cards[i] as HTMLElement;
      accumulatedHeight += card.offsetHeight;
      // Add gap between cards (24px = gap-6)
      if (i < targetCardIndex - 1) {
        accumulatedHeight += 24;
      }
    }

    // Get container's position
    const containerTop =
      container.getBoundingClientRect().top + window.pageYOffset;

    // The sticky top offset for positioning (responsive)
    const checkIsMobile = window.innerWidth < 1024;
    const stickyTop = checkIsMobile ? 60 : 120 + index * 20;

    // Calculate final scroll position
    const scrollTarget = containerTop + accumulatedHeight - stickyTop;

    // Always scroll to ensure proper positioning
    window.scrollTo({
      top: scrollTarget,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative" style={{ background: "#F1F1F1" }}>
      {/* Heading */}
      <div className="relative mx-auto max-w-[375px] lg:max-w-[1440px] px-6 sm:px-6 lg:px-8 pt-[60px] lg:pt-8 pb-6 lg:pb-2">
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-4">
          <div
            className="inline-flex items-center justify-center px-[14px] py-[4px] rounded-full border text-[#24823D] shadow-sm w-[167px] lg:w-auto h-[25px] lg:h-auto"
            style={{
              background: "rgba(36, 130, 61, 0.10)",
              borderColor: "rgba(211, 211, 211, 0.25)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.09)",
              fontFamily: '"IBM Plex Sans", sans-serif',
              letterSpacing: "1px",
              fontWeight: 400,
              fontSize: 13,
              lineHeight: "17px",
              textTransform: "uppercase",
            }}
          >
            FEATURES
          </div>

          <h2
            className="text-center text-[#202020] font-semibold text-[28px] lg:text-[48px] leading-[25px] lg:leading-[55px] w-full max-w-[354.98px] lg:max-w-[770px]"
            style={{
              fontFamily: '"Funnel Display", sans-serif',
            }}
          >
            Features Built for Real-World Cost Control
          </h2>

          <p
            className="text-center text-[#154B23] font-light text-[14px] leading-[150%] w-full max-w-[339.56px] lg:max-w-[770px]"
            style={{
              fontFamily: '"IBM Plex Sans", sans-serif',
            }}
          >
            Managing cloud costs isn&apos;t just about spotting inefficiencies —
            it&apos;s about continuously improving performance, reliability, and
            spend efficiency across complex environments. That&apos;s where
            Opslyft&apos;s optimization engine comes in.
          </p>
        </div>
      </div>

      {/* Feature toggle row + stacked cards */}
      <div className="relative mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-0 pb-[24px] lg:pb-[90px] 2xl:pb-[110px] ">
        {/* Toggle row */}
        <div className="w-full mb-6 pt-20 lg:sticky top-5 lg:-top-12 z-[1]">
          <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-1 md:gap-3">
            {features.map((item, i) => {
              const isActive = i === activeTab;
              return (
                <button
                  key={item.tabLabel}
                  onClick={() => {
                    setActiveTab(i);
                    scrollToFeature(i);
                  }}
                  className="flex items-center justify-start gap-2 md:gap-3 rounded-[10px] md:rounded-[20px]  md:h-[64px]  md:w-auto p-2 md:px-6 border transition-colors bg-white shadow-[0_5px_14px_rgba(8,15,52,0.04)]"
                  style={{
                    borderColor: isActive ? "#24823D" : "#EFF0F7",
                    color: isActive ? "#24823D" : "#6F6C90",
                  }}
                >
                  <div className="relative w-7 h-7 md:w-12 md:h-12 flex-shrink-0">
                    <Image
                      src={`/assets/images/features/feature${i + 1}${isActive ? "-active" : ""}.svg`}
                      alt={`feature ${i + 1}`}
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                  <span
                    className={`text-[12px] md:text-[16px] font-medium text-center md:text-left leading-5 ${isActive ? "font-bold" : ""}`}
                    style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                  >
                    {item.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {features.map((f, idx) => (
            <div
              key={f.badge + idx}
              id={`feature-${idx}`}
              className="rounded-[10px] lg:rounded-[30px] lg:bg-white lg:shadow-[0_5px_15px_rgba(8,15,52,0.04)] py-6 px-4 lg:p-6 lg:sticky"
              style={{
                top: isMobile ? 100 : 120 + idx * 20,
                scrollMarginTop: isMobile ? 100 : 120 + idx * 20,
                zIndex: 10 + idx,
              }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6 ">
                {/* Left copy */}
                <div className="flex flex-col gap-4 lg:gap-6 w-full lg:max-w-[480px] lg:flex-shrink-0 order-2 lg:order-1">
                  {/* Icon */}
                  <div className="w-[60px] h-[60px] rounded-[14px] flex items-center justify-center">
                    <Image
                      src={`/assets/images/features/feature${idx + 1}${idx === activeTab ? "-active" : ""}.svg`}
                      alt={`feature ${idx + 1}`}
                      width={32}
                      height={32}
                      className="w-15 h-15"
                    />
                  </div>

                  <div
                    className="text-[#170F49] text-[28px] lg:text-[36px] leading-[35px] font-bold"
                    style={{
                      fontFamily: '"Funnel Display", sans-serif',
                    }}
                  >
                    {f.badge}
                  </div>

                  <div
                    className="text-[#0E1821] text-[14px] lg:text-[18px] leading-[18px] lg:leading-[30px] font-semibold"
                    style={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                    }}
                  >
                    {f.kicker}
                  </div>

                  <div className="space-y-3">
                    {f.points.map((p, i) => (
                      <div className="flex gap-1 lg:gap-2" key={i}>
                        <div className="w-[24px] h-[24px] mt-0.5 lg:mt-1 flex-shrink-0 relative">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.2"
                              d="M12.5625 12.4593V22.1071C12.4365 22.1066 12.3127 22.0744 12.2025 22.0134L3.9525 17.4984C3.8347 17.4339 3.73636 17.339 3.66776 17.2236C3.59916 17.1082 3.5628 16.9764 3.5625 16.8421V7.8759C3.56253 7.77023 3.5849 7.66576 3.62813 7.56934L12.5625 12.4593Z"
                              fill="#24823D"
                            />
                            <path
                              d="M21.5325 6.55815L13.2825 2.04408C13.0621 1.92229 12.8143 1.8584 12.5625 1.8584C12.3107 1.8584 12.0629 1.92229 11.8425 2.04408L3.5925 6.56002C3.3569 6.68893 3.16022 6.87873 3.02302 7.10961C2.88581 7.34048 2.81311 7.60396 2.8125 7.87252V16.8388C2.81311 17.1073 2.88581 17.3708 3.02302 17.6017C3.16022 17.8326 3.3569 18.0224 3.5925 18.1513L11.8425 22.6672C12.0629 22.789 12.3107 22.8529 12.5625 22.8529C12.8143 22.8529 13.0621 22.789 13.2825 22.6672L21.5325 18.1513C21.7681 18.0224 21.9648 17.8326 22.102 17.6017C22.2392 17.3708 22.3119 17.1073 22.3125 16.8388V7.87346C22.3124 7.60442 22.2399 7.34035 22.1027 7.10894C21.9655 6.87753 21.7685 6.68729 21.5325 6.55815ZM12.5625 3.35658L20.0944 7.48158L12.5625 11.6066L5.03062 7.48158L12.5625 3.35658ZM4.3125 8.79408L11.8125 12.8985V20.9413L4.3125 16.8397V8.79408ZM13.3125 20.9413V12.9022L20.8125 8.79408V16.836L13.3125 20.9413Z"
                              fill="#24823D"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p
                            className="text-[#0E1821] text-[12px] lg:text-[16px] leading-[16px] lg:leading-[24px] font-semibold"
                            style={{
                              fontFamily: '"IBM Plex Sans", sans-serif',
                              fontWeight: 600,
                            }}
                          >
                            {p.heading}
                          </p>
                          <p
                            className="text-[#0E1821] text-[12px] lg:text-[16px] leading-[16px] lg:leading-[24px]"
                            style={{
                              fontFamily: '"IBM Plex Sans", sans-serif',
                              fontWeight: 400,
                            }}
                          >
                            {p.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 hidden lg:block">
                    <p
                      className="text-[#0E1821] "
                      style={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontSize: 18,
                        lineHeight: "100%",
                        fontWeight: 600,
                      }}
                    >
                      {f.outcome && "Outcome"}
                    </p>
                    <p
                      className="text-[#0E1821]"
                      style={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontSize: 16,
                        lineHeight: "30px",
                        fontWeight: 400,
                      }}
                    >
                      {f.outcome}
                    </p>
                  </div>
                  <button
                    className="w-fit text-[#24823D]"
                    style={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontSize: 16,
                      lineHeight: "18px",
                      fontWeight: 500,
                    }}
                  >
                    Learn more
                  </button>
                </div>

                {/* Right visual */}
                <div className="w-full lg:flex-shrink-0 lg:max-w-[592px] order-1 lg:order-2">
                  <div className="relative w-full h-[348px] lg:h-[601px] rounded-[30px] overflow-hidden">
                    <Image
                      src={f.visualUrl}
                      alt={`${f.badge} visualization`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
