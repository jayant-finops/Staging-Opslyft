// Sanity document types
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface Hero {
  _id: string;
  _type: "hero";
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  backgroundImage?: SanityImage;
  laptopImage?: SanityImage;
}

export interface Testimonial {
  _id: string;
  _type: "testimonial";
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: SanityImage;
  companyLogo?: SanityImage;
}

export interface Feature {
  _id: string;
  _type: "feature";
  title: string;
  description: string;
  icon?: SanityImage;
  order: number;
}

export interface StruggleSection {
  _id: string;
  _type: "struggleSection";
  sectionLabel: string;
  title: string;
  subtitle: string;
  features: {
    title: string;
    description: string;
    icon?: SanityImage;
  }[];
}

export interface SolutionsSection {
  _id: string;
  _type: "solutionsSection";
  sectionLabel: string;
  title: string;
  subtitle: string;
  features: {
    title: string;
    description: string;
    buttonText?: string;
    image?: SanityImage;
  }[];
  ctaCard?: {
    title: string;
    buttonText: string;
  };
}

export interface Footer {
  _id: string;
  _type: "footer";
  logoSrc?: string;
  tagline?: string;
  newsletter?: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
  navigation?: {
    title: string;
    links: {
      title: string;
      url: string;
    }[];
  }[];
  socialLinks?: {
    platform: string;
    url: string;
    iconSrc?: string;
  }[];
  certifications?: {
    name: string;
    src: string;
    alt: string;
  }[];
  legal?: {
    copyright: string;
    address: string;
    legalLinks: {
      title: string;
      url: string;
    }[];
  };
}

export interface PricingPageDoc {
  _id: string;
  _type: "pricingPage";
  badgeLabel: string;
  titleLines: string[];
  logosTop: { src?: string; alt: string; image?: SanityImage }[];
  logosBottom: { src?: string; alt: string; image?: SanityImage }[];
  form: {
    heading: string;
    fields: { placeholder: string; type?: string }[];
    submitText: string;
  };
}
