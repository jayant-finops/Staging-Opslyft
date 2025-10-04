export type DropdownCategory = {
  title: string;
  icon: string;
  items: string[];
};

export type NavigationItem = {
  title: string;
  url: string;
  hasDropdown?: boolean;
  dropdownCategories?: DropdownCategory[];
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
      title: "PRODUCT",
      url: "/product",
      hasDropdown: true,
      dropdownCategories: [
        {
          title: "Cost Visibility",
          icon: "/assets/images/navbar/dropdown-feat1.svg",
          items: [
            "AI Cost Allocation",
            "Showback/Chargeback",
            "K8s Cost Visibility",
            "Custom Dashboards",
          ],
        },
        {
          title: "Cost Control",
          icon: "/assets/images/navbar/dropdown-feat2.svg",
          items: [
            "Anomaly Detection",
            "Contextual Optimisation",
            "Workflow Management",
          ],
        },
        {
          title: "Cost Governance",
          icon: "/assets/images/navbar/dropdown-feat3.svg",
          items: ["Asset Management", "Budgeting", "Unit Economics"],
        },
      ],
    },
    {
      title: "PRICING",
      url: "/pricing",
    },
    {
      title: "ABOUT US",
      url: "/about",
    },
    {
      title: "CUSTOMER STORIES",
      url: "/customer-stories",
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
