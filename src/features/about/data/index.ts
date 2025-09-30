export interface LocalAboutHero {
  backgroundSrc: string;
  titleLines: string[];
  subtitle: string;
  ctaButton: {
    text: string;
    url: string;
  };
  decorativeCircles: {
    src: string;
    alt: string;
  };
}

export const aboutHeroFallback: LocalAboutHero = {
  backgroundSrc: "/assets/images/about/hero-bg.png",
  titleLines: ["Shaping the Future of", "Cloud Efficiency"],
  subtitle:
    "Join our growing team at OpsLyft and empower people to optimize their current cloud use.",
  ctaButton: {
    text: "Book a demo",
    url: "/pricing",
  },
  decorativeCircles: {
    src: "/assets/images/hero/circles.png",
    alt: "Decorative circles",
  },
};

export interface LocalAboutMission {
  title: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
}

export const aboutMissionFallback: LocalAboutMission = {
  title: "Our Mission",
  description:
    "We believe the cloud should accelerate innovation, not drain resources. Opslyft’s mission is to redefine how the world runs the cloud — turning cost into clarity, complexity into simplicity, and engineering into a true business advantage.",
  stats: [
    { label: "Team members", value: "20+" },
    { label: "Features", value: "100+" },
    { label: "Companies", value: "3K+" },
  ],
};

export interface LocalCompanyTimelineItem {
  id: number;
  phase: string;
  period: string;
  description: string;
  bullets?: string[];
}

export const companyTimelineFallback: LocalCompanyTimelineItem[] = [
  {
    id: 1,
    phase: "Origins",
    period: "2018–2019",
    description:
      "Aayush Kumar, a young DevOps engineer, cut AWS costs by more than $1M at his first job, turning a crisis into innovation.",
  },
  {
    id: 2,
    phase: "Finding the Gap",
    period: "2020",
    description:
      "Speaking at IIT Madras, Aayush Kumar realized cloud cost optimization was an industry-wide challenge. He declined a US job offer to start Opslyft.",
  },
  {
    id: 3,
    phase: "Research & Development",
    period: "2020–2024",
    description:
      "OpsLyft spent 5 years experimenting and refining the solution",
    bullets: [
      "400+ conversations with industry leaders shaped the product vision.",
      "Early customers from media, gaming, and health-tech validated the approach.",
      "The team stood united through COVID, strengthening company culture.",
      "Iterations sharpened the ICP and paved the way for product–market fit.",
    ],
  },
  {
    id: 4,
    phase: "Product‑Market Fit",
    period: "2024",
    description:
      "After years of research, iteration, and customer learnings, Opslyft achieved PMF and began scaling rapidly across APAC and the US.",
  },
];

export interface LocalTeamMember {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
  linkedin?: string;
}

export interface LocalInvestor {
  name: string;
  org: string;
  imageSrc: string;
  linkedin?: string;
}

export interface LocalTeamData {
  heading: string;
  subheading: string;
  members: LocalTeamMember[];
  investorsHeading: string;
  investorsSubheading: string;
  investors: LocalInvestor[];
}

export const teamFallback: LocalTeamData = {
  heading: "Our Team",
  subheading: "The Creative Minds Behind the Work We Do",
  members: [
    {
      name: "Aayush Kumar",
      title: "Founder | Chief Executive Officer",
      bio: "Managed $11M in cloud spending & delivered $3M in cost savings",
      imageSrc: "/assets/images/team/aayush.png",
      linkedin: "#",
    },
    {
      name: "Aayush Srivastava",
      title: "Head of Growth",
      bio: "Closed 30+ customers & added $7M in new ARR in 2 years",
      imageSrc: "/assets/images/team/AS.png",
      linkedin: "#",
    },
    {
      name: "Raj Vaibhav Dubey",
      title: "Head of Product",
      bio: "Delivered 10+ products to clients with full customisation and tech support",
      imageSrc: "/assets/images/team/Raj.png",
      linkedin: "#",
    },
  ],
  investorsHeading: "Backed by Top Industry Investors",
  investorsSubheading:
    "Discover the visionary investors behind OpsLyft, who empower engineering teams to streamline their cloud infrastructure and reduce costs.",
  investors: Array.from({ length: 8 }, () => ({
    name: "Ankit Senapati",
    org: "Innovaccer",
    imageSrc: "/assets/images/team/investor.png",
    linkedin: "#",
  })),
};

export interface LocalJoinSection {
  heading: string;
  subheading: string;
  ctaText: string;
  ctaHref: string;
  backgroundSrc: string;
}

export const joinFallback: LocalJoinSection = {
  heading: "Join Our Team of Creators,\nBuilders, and Thinkers",
  subheading:
    "We’re always looking for curious minds and passionate hearts to grow with us. If you’re ready to make an impact and be part of something meaningful, we’d love to hear from you.",
  ctaText: "Join Us",
  ctaHref: "#",
  backgroundSrc: "/assets/images/join/team.svg",
};
