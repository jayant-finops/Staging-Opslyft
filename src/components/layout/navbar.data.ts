export type DropdownItem = {
  label: string;
  featureId: string;
};

export type DropdownCategory = {
  title: string;
  icon: string;
  url: string;
  items: DropdownItem[];
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
      title: "ABOUT US",
      url: "/company",
    },
    {
      title: "PRODUCT",
      url: "/product",
      hasDropdown: true,
      dropdownCategories: [
        {
          title: "Cost Visibility",
          icon: "/assets/images/navbar/dropdown-feat1.svg",
          url: "/product/cost-visibility",
          items: [
            { label: "AI Cost Allocation", featureId: "ai-cost-allocation" },
            { label: "Showback/Chargeback", featureId: "showback-chargeback" },
            { label: "K8s Cost Visibility", featureId: "k8s-cost-visibility" },
            { label: "Custom Dashboards", featureId: "custom-dashboards" },
          ],
        },
        {
          title: "Cost Control",
          icon: "/assets/images/navbar/dropdown-feat2.svg",
          url: "/product/cost-control",
          items: [
            { label: "Anomaly Detection", featureId: "anomaly-detection" },
            {
              label: "Contextual Optimisation",
              featureId: "contextual-optimisation",
            },
            { label: "Workflow Management", featureId: "workflow-management" },
          ],
        },
        {
          title: "Cost Governance",
          icon: "/assets/images/navbar/dropdown-feat3.svg",
          url: "/product/cost-governance",
          items: [
            { label: "Asset Management", featureId: "asset-management" },
            { label: "Budgeting", featureId: "budgeting" },
            { label: "Unit Economics", featureId: "unit-economics" },
          ],
        },
      ],
    },
    {
      title: "PRICING",
      url: "/pricing",
    },

    {
      title: "CUSTOMER STORIES",
      url: "/customer-stories",
    },
    {
      title: "DOCS",
      url: "https://docs.opslyft.com/",
    },
  ],
  cta: {
    loginText: "Log in",
    loginUrl: "/login",
    buttonText: "Book a Demo",
    buttonUrl: "/book-demo",
  },
};
