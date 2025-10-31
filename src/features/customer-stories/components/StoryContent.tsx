"use client";

import { CustomerStory } from "../data";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { portableTextCustomerStoryComponent } from "./portableTextComponents";
import Link from "next/link";
import Image from "next/image";

export default function StoryContentSection({
  storyData,
}: {
  storyData: CustomerStory;
}) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  if (!storyData.sections?.length) return null;

  // ✅ Scroll spy effect to highlight active jumplink
  useEffect(() => {
    const handleScroll = () => {
      let currentSection: string | null = null;

      storyData.sections.forEach((section) => {
        const sectionId = section.jumplinkContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "_");
        const element = document.getElementById(sectionId);

        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust these values based on your layout offset
          if (rect.top <= 240 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [storyData.sections]);

  return (
    <section className="container-1170 bg-white sm:py-[80px] py-[60px] px-4 sm:px-0">
      <div className="w-full flex flex-row gap-6 items-start justify-between">
        {/* --- Jumplinks --- */}
        <div className="hidden sm:block w-[342px] sticky top-[160px]">
          <nav className="flex flex-col gap-0 mb-8">
            {storyData.sections.map((section, idx) => {
              const sectionId = section.jumplinkContent
                ?.toLowerCase()
                .replace(/[^a-z0-9]+/g, "_");
              const isActive = activeSection === sectionId;

              return (
                <a
                  href={`#${sectionId}`}
                  key={idx}
                  className={`text-sm font-medium w-full text-left p-3 transition-all duration-200 
                    ${
                      isActive
                        ? "bg-[#E8F6E3] border-l-4 border-l-[#24823D] text-[#24823D] hover:cursor-default"
                        : "border-b border-b-[#D3D3D3] text-[#D3D3D3] hover:bg-gray-50 hover:cursor-pointer"
                    }`}
                >
                  {section.jumplinkContent}
                </a>
              );
            })}
          </nav>
        {   
        storyData.scale &&      
          <>
          <span className="text-[#0E1821] font-semibold text-[14px] mb-3 block" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>STATS</span>
          <span className="text-[#7C7C7C] font-medium text-[24px] block leading-[110%]" style={{ fontFamily: '"Funnel Display", sans-serif' }}>{storyData?.scale}</span>
          <span className="text-[#0E1821] font-semibold text-[14px]" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>Scale</span>
          </>
        }
          <Link href="/customer-stories" className="flex flex-row items-center gap-2 my-12 hover:text-[#202020] text-[#7C7C7C]">
            <span className="text-[14px]">
                Read more Stories
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M5.63065 5.63065L0.630646 10.6306C0.559558 10.6969 0.465535 10.7329 0.368385 10.7312C0.271234 10.7295 0.178541 10.6902 0.109835 10.6215C0.0411284 10.5528 0.00177253 10.4601 5.84237e-05 10.3629C-0.00165568 10.2658 0.0344058 10.1717 0.100646 10.1006L4.83502 5.36565L0.100646 0.630646C0.0344058 0.559559 -0.00165568 0.465535 5.84237e-05 0.368385C0.00177253 0.271234 0.0411284 0.178541 0.109835 0.109835C0.178541 0.0411284 0.271234 0.00177253 0.368385 5.84237e-05C0.465535 -0.00165568 0.559558 0.0344058 0.630646 0.100646L5.63065 5.10065C5.70087 5.17096 5.74032 5.26627 5.74032 5.36565C5.74032 5.46502 5.70087 5.56033 5.63065 5.63065ZM10.6306 5.10065L5.63065 0.100646C5.55956 0.0344058 5.46554 -0.00165568 5.36838 5.84237e-05C5.27123 0.00177253 5.17854 0.0411284 5.10983 0.109835C5.04113 0.178541 5.00177 0.271234 5.00006 0.368385C4.99834 0.465535 5.03441 0.559559 5.10065 0.630646L9.83502 5.36565L5.10065 10.1006C5.0638 10.135 5.03425 10.1764 5.01375 10.2224C4.99326 10.2684 4.98224 10.318 4.98135 10.3684C4.98046 10.4187 4.98972 10.4688 5.00858 10.5154C5.02744 10.5621 5.05552 10.6046 5.09113 10.6402C5.12674 10.6758 5.16915 10.7038 5.21585 10.7227C5.26254 10.7416 5.31256 10.7508 5.36291 10.7499C5.41326 10.7491 5.46292 10.738 5.50891 10.7175C5.55491 10.697 5.59631 10.6675 5.63065 10.6306L10.6306 5.63065C10.7009 5.56033 10.7403 5.46502 10.7403 5.36565C10.7403 5.26627 10.7009 5.17096 10.6306 5.10065Z" fill="#7C7C7C"/>
            </svg>
          </Link>
        </div>

        {/* --- Sections content --- */}
        <div className="w-full max-w-[777px]">
          <div className="space-y-16">
            {/* main content body */}
            {storyData.sections.map((section, idx) => {
              const sectionId = section.jumplinkContent
                ?.toLowerCase()
                .replace(/[^a-z0-9]+/g, "_");

              return (
                <div key={idx} id={sectionId} className="scroll-mt-[120px]">
                  {/* ✅ Use PortableText for rich content rendering */}
                  <PortableText
                    value={section.content}
                    components={portableTextCustomerStoryComponent}
                  />

                  {/* ✅ Still support custom Sanity blocks */}
                  {section.content.map((block, bIdx) => {
                    if (block._type === "componentBlock") {
                      return (
                        <div
                          key={bIdx}
                          className="p-6 rounded-xl my-8"
                          style={{ backgroundColor: block.props?.color }}
                        >
                          <p>{block.props?.text}</p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              );
            })}

            {/* Impact Cards */}
            {storyData?.impactCards?.length && storyData?.impactCards?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:max-w-[80%] max-w-[100%] mx-auto -mt-[40px]">
                    
                    {storyData.impactCards.map((point, index: number) => (
                        <div
                        key={index}
                        className="px-6 py-8 rounded-[30px] bg-[#E8F6E3] transition"
                        >
                            <h4 className="text-[32px] text-center text-[#101828] mb-3">
                                {point.metricValue}
                            </h4>
                            <p className="text-xl text-center text-[#101828]">
                                {point.explainingText}
                            </p>
                        </div>
                    ))}
                </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
