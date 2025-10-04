"use client";

import { PrivacySection as PrivacySectionType } from "../data";

interface PrivacySectionProps {
  section: PrivacySectionType;
}

// Helper function to render text with bold markers
const renderTextWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const boldText = part.slice(2, -2);
      return (
        <strong key={index} className="font-semibold">
          {boldText}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

export default function PrivacySection({ section }: PrivacySectionProps) {
  return (
    <section className="mb-12">
      <h2
        className="text-[#343434] text-2xl lg:text-[32px] font-medium leading-[40px] mb-6"
        style={{ fontFamily: '"Funnel Display", sans-serif' }}
      >
        {section.title}
      </h2>
      <div
        className="text-[#0E1821] text-base lg:text-[16px] leading-[150%] space-y-4"
        style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
      >
        {section.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {section.listItems && (
          <ul className="list-disc space-y-3 pl-6 mt-4">
            {section.listItems.map((item, index) => (
              <li key={index}>{renderTextWithBold(item)}</li>
            ))}
          </ul>
        )}

        {section.contentAfterList &&
          section.contentAfterList.map((paragraph, index) => (
            <p key={`after-${index}`} className="mt-4">
              {paragraph}
            </p>
          ))}

        {section.subsections && (
          <div className="space-y-6 mt-6">
            {section.subsections.map((subsection, subIndex) => (
              <div key={subIndex}>
                {subsection.title && (
                  <h3
                    className="text-[#343434] text-lg lg:text-xl font-medium mb-3"
                    style={{ fontFamily: '"Funnel Display", sans-serif' }}
                  >
                    {subsection.title}
                  </h3>
                )}
                <div className="space-y-3">
                  {subsection.content.map((subParagraph, subParaIndex) => (
                    <p key={subParaIndex} className="text-base">
                      {subParagraph}
                    </p>
                  ))}
                  {subsection.listItems && (
                    <ul className="list-disc space-y-3 pl-6 mt-4">
                      {subsection.listItems.map((item, itemIndex) => (
                        <li key={itemIndex}>{renderTextWithBold(item)}</li>
                      ))}
                    </ul>
                  )}
                  {subsection.contentAfterList &&
                    subsection.contentAfterList.map((paragraph, paraIndex) => (
                      <p key={`sub-after-${paraIndex}`} className="mt-4">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
