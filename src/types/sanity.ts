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
  _id?: string;
  _type?: "footer";
  logoSrc?: string;
  tagline?: string;
  newsletterTitle?: string;
  newsletterDescription?: string;
  newsletterPlaceholder?: string;
  newsletterButtonText?: string;
  newsletter?: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
  navigationColumns?: {
    title: string;
    links: {
      title: string;
      url: string;
    }[];
  }[];
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
  copyright?: string;
  address?: string;
  legalLinks?: {
    title: string;
    url: string;
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

export interface AboutHeroSection {
  _id: string;
  _type: "aboutHero";
  titleLines?: string[];
  subtitle?: string;
  ctaButton?: {
    text?: string;
    url?: string;
  };
  decorativeCircles?: SanityImage;
}

export interface AboutMissionSection {
  _id: string;
  _type: "aboutMission";
  title?: string;
  description?: string;
  stats?: { label?: string; value?: string }[];
}

export interface CompanyTimelineDoc {
  _id: string;
  _type: "companyTimeline";
  heading?: string;
  subheading?: string;
  items: {
    id: number;
    phase: string;
    period: string;
    title: string;
    description: string;
    bullets?: string[];
  }[];
}

export interface TeamDoc {
  _id: string;
  _type: "team";
  heading?: string;
  subheading?: string;
  members?: {
    name?: string;
    title?: string;
    bio?: string;
    image?: SanityImage;
    linkedin?: string;
  }[];
  investorsHeading?: string;
  investorsSubheading?: string;
  investors?: {
    name?: string;
    org?: string;
    image?: SanityImage;
    linkedin?: string;
  }[];
}

export interface JoinDoc {
  _id: string;
  _type: "join";
  heading: string;
  subheading: string;
  ctaText: string;
  ctaHref: string;
  background?: SanityImage;
}
