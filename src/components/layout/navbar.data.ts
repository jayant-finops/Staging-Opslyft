export type NavigationItem = {
  title: string;
  url: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    title: string;
    url: string;
  }[];
};

export type LocalNavbar = {
  logoSrc: string;
  navigation: NavigationItem[];
  cta: {
    loginText: string;
    loginUrl: string;
    buttonText: string;
    buttonUrl: string;
  };
};

export const navbarFallback: LocalNavbar = {
  logoSrc: "/assets/images/footer/opslyft-logo.svg",
  navigation: [
    {
      title: "WHY OPSLYFT?",
      url: "/why-opslyft",
    },
    {
      title: "PRODUCT",
      url: "/product",
    },
    {
      title: "PRICING",
      url: "/pricing",
    },
    {
      title: "RESOURCES",
      url: "/resources",
    },
    {
      title: "COMPANY",
      url: "/company",
    },
    {
      title: "DOCS",
      url: "/docs",
    },
  ],
  cta: {
    loginText: "Log in",
    loginUrl: "/login",
    buttonText: "Book a Demo",
    buttonUrl: "/book-demo",
  },
};
