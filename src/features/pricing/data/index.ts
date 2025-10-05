export type PricingLogo = {
  src: string;
  alt: string;
};

export type PricingFormField = {
  placeholder: string;
  type?: "text" | "email";
};

export type LocalPricing = {
  badgeLabel: string;
  titleLines: string[];
  decorativeImage?: string;
  backgroundImage1?: string;
  backgroundImage2?: string;
  logosTop: PricingLogo[]; // 3 items
  logosBottom: PricingLogo[]; // 2 items
  form: {
    heading: string;
    fields: PricingFormField[];
    submitText: string;
  };
};

// Type for Sanity pricing data (slightly different structure)
export type SanityPricing = {
  badgeLabel: string;
  titleLines: string[];
  decorativeImage?: string;
  backgroundImage1?: string;
  backgroundImage2?: string;
  logosTop: PricingLogo[];
  logosBottom: PricingLogo[];
  formHeading: string;
  formFields: PricingFormField[];
  submitText: string;
};

// Helper to convert Sanity pricing to LocalPricing format
export function convertSanityPricing(
  sanityData: SanityPricing | null
): LocalPricing | null {
  if (!sanityData) return null;

  return {
    badgeLabel: sanityData.badgeLabel,
    titleLines: sanityData.titleLines,
    decorativeImage: sanityData.decorativeImage,
    backgroundImage1: sanityData.backgroundImage1,
    backgroundImage2: sanityData.backgroundImage2,
    logosTop: sanityData.logosTop,
    logosBottom: sanityData.logosBottom,
    form: {
      heading: sanityData.formHeading,
      fields: sanityData.formFields,
      submitText: sanityData.submitText,
    },
  };
}

export const pricingFallback: LocalPricing = {
  badgeLabel: "BUILT FOR ENGINEERING AND FINANCE TEAMS",
  titleLines: [
    "Cloud cost intelligence",
    "that pays for itself in",
    "weeks, not months",
  ],
  logosTop: [
    { src: "/assets/images/testimonials/Inshorts_logo.png", alt: "Inshorts" },
    {
      src: "/assets/images/testimonials/verified-safe-security-logo-2.png",
      alt: "Safe Security",
    },
    { src: "/assets/images/testimonials/innovaccer.png", alt: "Innovaccer" },
  ],
  logosBottom: [
    { src: "/assets/images/testimonials/Xactly.png", alt: "Xactly" },
    { src: "/assets/images/testimonials/HDFC-Life-Logo.png", alt: "HDFC Life" },
  ],
  form: {
    heading: "Start Cutting Cloud Waste Today!",
    fields: [
      { placeholder: "First Name*" },
      { placeholder: "Last Name*" },
      { placeholder: "Company Name*" },
      { placeholder: "Work Email*", type: "email" },
      { placeholder: "How did you hear about us?*" },
    ],
    submitText: "Request Pricing",
  },
};
