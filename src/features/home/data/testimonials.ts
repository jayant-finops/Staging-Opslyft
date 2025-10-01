export type LocalTestimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarSrc: string;
  companyLogoSrc: string;
};

export const testimonialsFallback: LocalTestimonial[] = [
  {
    id: "t1",
    quote: "The service was amazing. I never had to worry about cloud cost.",
    author: "Ajay Poddar",
    role: "Incubating Retirement Tech",
    company: "HDFC Life",
    avatarSrc: "/assets/images/testimonials/ajay_poddar.png",
    companyLogoSrc: "/assets/images/testimonials/HDFC-Life-Logo.png",
  },
  {
    id: "t2",
    quote: "The service was amazing. I never had to worry about cloud cost.",
    author: "Ajay Poddar",
    role: "Incubating Retirement Tech",
    company: "HDFC Life",
    avatarSrc: "/assets/images/testimonials/ajay_poddar.png",
    companyLogoSrc: "/assets/images/testimonials/HDFC-Life-Logo.png",
  },
  {
    id: "t3",
    quote: "The service was amazing. I never had to worry about cloud cost.",
    author: "Ajay Poddar",
    role: "Incubating Retirement Tech",
    company: "HDFC Life",
    avatarSrc: "/assets/images/testimonials/ajay_poddar.png",
    companyLogoSrc: "/assets/images/testimonials/HDFC-Life-Logo.png",
  },
  {
    id: "t4",
    quote: "The service was amazing. I never had to worry about cloud cost.",
    author: "Ajay Poddar",
    role: "Incubating Retirement Tech",
    company: "HDFC Life",
    avatarSrc: "/assets/images/testimonials/ajay_poddar.png",
    companyLogoSrc: "/assets/images/testimonials/HDFC-Life-Logo.png",
  },
  {
    id: "t5",
    quote: "The service was amazing. I never had to worry about cloud cost.",
    author: "Ajay Poddar",
    role: "Incubating Retirement Tech",
    company: "HDFC Life",
    avatarSrc: "/assets/images/testimonials/ajay_poddar.png",
    companyLogoSrc: "/assets/images/testimonials/HDFC-Life-Logo.png",
  },
];

export const logoRowFallback: { alt: string; src: string }[] = [
  { alt: "Inshorts", src: "/assets/images/testimonials/Inshorts_logo.png" },
  {
    alt: "SAFE",
    src: "/assets/images/testimonials/verified-safe-security-logo-2.png",
  },
  { alt: "Innovaccer", src: "/assets/images/testimonials/innovaccer.png" },
  { alt: "Xactly", src: "/assets/images/testimonials/Xactly.svg" },
  { alt: "HDFC Life", src: "/assets/images/testimonials/hdfc.svg" },
];
