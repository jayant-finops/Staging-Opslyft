export type LocalSolutionFeature = {
  title: string;
  description: string;
  bulletPoints?: string[];
  buttonText?: string;
  buttonUrl?: string;
  imageSrc: string;
};

export type LocalSolutions = {
  sectionLabel: string;
  title: string;
  subtitle: string;
  features: LocalSolutionFeature[];
  ctaCard: {
    title: string;
    buttonText: string;
    buttonUrl?: string;
  };
};

export const solutionsFallback: LocalSolutions = {
  sectionLabel: "OPSLYFT'S IMPACT",
  title: "How Opslyft Solves These Challenges",
  subtitle:
    "From eliminating cloud waste to empowering finance and engineering alignment, here's how we deliver impact.",
  features: [
    {
      title: "Optimisation without blind spots",
      description: "",
      bulletPoints: [
        "Opslyft goes beyond visibility to deliver safe, context-aware savings.",
        "Instead of noisy alerts or risky rightsizing, it pinpoints waste across resources and workloads",
        "and then recommends optimisations you can trust.",
      ],
      buttonText: "Know more",
      buttonUrl: "#",
      imageSrc: "/assets/images/solution/feat1.json",
    },
    {
      title: "AI Powered Cost Allocation",
      description: "",
      bulletPoints: [
        "Allocate shared cloud spend with accuracy without perfect tagging.",
        "Opslyft uses business and usage data to auto-split costs by team, project, or customer.",
        "No spreadsheets, no guesswork.",
      ],
      buttonText: "Know more",
      buttonUrl: "#",
      imageSrc: "/assets/images/solution/feat2.json",
    },
    {
      title: "ChatGPT for Cloud",
      description: "",
      bulletPoints: [
        "Opslyft's AI copilot turns cloud cost management into a conversation.",
        'Just ask a question - "Which BU overspent last month and why?"',
        "And get instant answers with root causes and next steps..",
      ],
      buttonText: "Know more",
      buttonUrl: "#",
      imageSrc: "/assets/images/solution/feat3.json",
    },
  ],
  ctaCard: {
    title:
      "Cloud waste? Bench it.\nOpslyft puts the right players on the field",
    buttonText: "Speak to Us",
    buttonUrl: "#",
  },
};
