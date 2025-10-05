// Sanity CMS API types
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
    url?: string;
  };
  alt?: string;
}

export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt?: string;
  _updatedAt?: string;
}

// Home page types
export interface Hero extends SanityDocument {
  _type: "hero";
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  backgroundImage?: SanityImage;
  laptopImage?: SanityImage;
}

export interface TestimonialsSection extends SanityDocument {
  _type: "testimonialsSection";
  logoRowText?: string;
  badgeText: string;
  title: string;
  subtitle: string;
  testimonials: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar?: SanityImage;
    companyLogo?: SanityImage;
  }[];
  companyLogos: {
    name: string;
    logo?: SanityImage;
    alt: string;
  }[];
}

export interface Feature extends SanityDocument {
  _type: "feature";
  title: string;
  description: string;
  icon?: SanityImage;
  order: number;
}

export interface StruggleSection extends SanityDocument {
  _type: "struggleSection";
  sectionLabel: string;
  title: string;
  subtitle: string;
  backgroundImage?: SanityImage;
  features: {
    title: string;
    description: string;
    icon?: SanityImage;
  }[];
}

export interface SolutionsSection extends SanityDocument {
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

// Layout types
export interface Footer extends SanityDocument {
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

// Pricing page types
export interface PricingPageDoc extends SanityDocument {
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

// About page types
export interface AboutHeroSection extends SanityDocument {
  _type: "aboutHero";
  badgeText: string;
  titleLines: string[];
  subtitle: string;
  ctaButton: {
    text: string;
    url: string;
  };
  backgroundImage?: SanityImage;
  decorativeCircles?: SanityImage;
}

export interface AboutMissionSection extends SanityDocument {
  _type: "aboutMission";
  title: string;
  description: string;
  stats: { label: string; value: string }[];
}

// Company page types
export interface CompanyTimelineDoc extends SanityDocument {
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

export interface TeamDoc extends SanityDocument {
  _type: "team";
  heading: string;
  subheading: string;
  members: {
    name: string;
    title: string;
    bio: string;
    image?: SanityImage;
    linkedin?: string;
  }[];
  investorsHeading: string;
  investorsSubheading: string;
  investors: {
    name: string;
    org: string;
    image?: SanityImage;
    linkedin?: string;
  }[];
}

export interface JoinDoc extends SanityDocument {
  _type: "join";
  heading: string;
  subheading: string;
  ctaText: string;
  ctaHref: string;
  background?: SanityImage;
}
