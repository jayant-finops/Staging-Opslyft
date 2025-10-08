import { type SchemaTypeDefinition } from "sanity";
import privacyPolicy from "./privacyPolicy";
import homeHero from "./homeHero";
import testimonialsSection from "./testimonials";
import struggleSection from "./struggleSection";
import solutionsSection from "./solutionsSection";
import aboutHero from "./aboutHero";
import aboutMission from "./aboutMission";
import companyTimeline from "./companyTimeline";
import team from "./team";
import { productHero } from "./productHero";
import { productTrust } from "./productTrust";
import { productProblem } from "./productProblem";
import { productWins } from "./productWins";
import { productBanner } from "./productBanner";
import { productFeatures } from "./productFeatures";
import { pricing } from "./pricing";
import { customerStoriesHero } from "./customerStoriesHero";
import { blog } from "./blog";
import { termsOfUse } from "./termsOfUse";
import { navbar } from "./navbar";
import { footer } from "./footer";
import { announcementBanner } from "./announcementBanner";

// Company page schemas (Join Section)
const joinSchema: SchemaTypeDefinition = {
  name: "join",
  title: "Join Section",
  type: "document",
  fields: [
    { name: "heading", title: "Heading", type: "string" },
    { name: "subheading", title: "Subheading", type: "text" },
    { name: "ctaText", title: "CTA Text", type: "string" },
    { name: "ctaHref", title: "CTA Href", type: "url" },
    {
      name: "background",
      title: "Background",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Home page schemas
    homeHero, // Home hero schema with all fields including laptopImage
    testimonialsSection, // Complete testimonials schema
    struggleSection, // Complete struggle section schema with backgroundImage and icon
    solutionsSection, // Complete solutions section schema

    // Pricing page schema
    pricing,

    // Product page schemas
    productHero,
    productTrust,
    productProblem,
    productWins,
    productBanner,
    productFeatures,

    // About page schemas
    aboutHero, // Complete about hero schema
    aboutMission, // Complete about mission schema

    // Company page schemas
    companyTimeline, // Complete company timeline schema
    team, // Complete team schema
    joinSchema,

    // Customer Stories / Blog page schemas
    customerStoriesHero,
    blog,

    // Layout components
    navbar,
    footer,
    announcementBanner,

    // Legal pages
    privacyPolicy,
    termsOfUse,
  ],
};
