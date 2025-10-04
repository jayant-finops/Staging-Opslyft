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

// Home page schemas
const heroSchema: SchemaTypeDefinition = {
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "ctaText", title: "CTA Button Text", type: "string" },
    { name: "ctaUrl", title: "CTA Button URL", type: "url" },
    {
      name: "laptopImage",
      title: "Laptop Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

const testimonialsSectionSchema: SchemaTypeDefinition = {
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "document",
  fields: [
    { name: "badgeText", title: "Badge Text", type: "string" },
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "text" },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "quote", title: "Quote", type: "text" },
            { name: "author", title: "Author Name", type: "string" },
            { name: "position", title: "Position", type: "string" },
            { name: "company", title: "Company", type: "string" },
            {
              name: "avatar",
              title: "Avatar",
              type: "image",
              options: { hotspot: true },
            },
            { name: "companyLine", title: "Company Line", type: "string" },
            {
              name: "companyLogo",
              title: "Company Logo",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
    {
      name: "companyLogos",
      title: "Company Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Company Name", type: "string" },
            {
              name: "logo",
              title: "Logo",
              type: "image",
              options: { hotspot: true },
            },
            { name: "alt", title: "Alt Text", type: "string" },
          ],
        },
      ],
    },
  ],
};

const featureSchema: SchemaTypeDefinition = {
  name: "feature",
  title: "Features",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: { hotspot: true },
    },
    { name: "order", title: "Order", type: "number" },
  ],
};

const struggleSectionSchema: SchemaTypeDefinition = {
  name: "struggleSection",
  title: "Struggle Section",
  type: "document",
  fields: [
    { name: "sectionLabel", title: "Section Label", type: "string" },
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "text" },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
};

const solutionsSectionSchema: SchemaTypeDefinition = {
  name: "solutionsSection",
  title: "Solutions Section",
  type: "document",
  fields: [
    { name: "sectionLabel", title: "Section Label", type: "string" },
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "text" },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            { name: "buttonText", title: "Button Text", type: "string" },
            { name: "buttonUrl", title: "Button URL", type: "url" },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
    {
      name: "ctaCard",
      title: "CTA Card",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "buttonText", title: "Button Text", type: "string" },
        { name: "buttonUrl", title: "Button URL", type: "url" },
      ],
    },
  ],
};

// Layout schemas
const footerSchema: SchemaTypeDefinition = {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    },
    { name: "tagline", title: "Tagline", type: "string" },
    {
      name: "newsletter",
      title: "Newsletter",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "description", title: "Description", type: "text" },
        { name: "placeholder", title: "Placeholder", type: "string" },
        { name: "buttonText", title: "Button Text", type: "string" },
      ],
    },
    {
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "title", title: "Title", type: "string" },
                    { name: "url", title: "URL", type: "url" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Platform", type: "string" },
            { name: "url", title: "URL", type: "url" },
            { name: "iconSrc", title: "Icon Source", type: "string" },
          ],
        },
      ],
    },
    {
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "src", title: "Source", type: "string" },
            { name: "alt", title: "Alt Text", type: "string" },
          ],
        },
      ],
    },
    {
      name: "legal",
      title: "Legal",
      type: "object",
      fields: [
        { name: "copyright", title: "Copyright", type: "string" },
        { name: "address", title: "Address", type: "text" },
        {
          name: "legalLinks",
          title: "Legal Links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "url", title: "URL", type: "url" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const navbarSchema: SchemaTypeDefinition = {
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "navigation",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    },
    { name: "ctaText", title: "CTA Button Text", type: "string" },
    { name: "ctaUrl", title: "CTA Button URL", type: "url" },
  ],
};

// Pricing page schema
const pricingPageSchema: SchemaTypeDefinition = {
  name: "pricingPage",
  title: "Pricing Page",
  type: "document",
  fields: [
    { name: "badgeLabel", title: "Badge Label", type: "string" },
    {
      name: "titleLines",
      title: "Title Lines",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "logosTop",
      title: "Logos Top",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "src", title: "Source", type: "string" },
            { name: "alt", title: "Alt Text", type: "string" },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
    {
      name: "logosBottom",
      title: "Logos Bottom",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "src", title: "Source", type: "string" },
            { name: "alt", title: "Alt Text", type: "string" },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
    {
      name: "form",
      title: "Form",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "fields",
          title: "Fields",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "placeholder", title: "Placeholder", type: "string" },
                { name: "type", title: "Type", type: "string" },
              ],
            },
          ],
        },
        { name: "submitText", title: "Submit Text", type: "string" },
      ],
    },
  ],
};

// About page schemas
const aboutHeroSchema: SchemaTypeDefinition = {
  name: "aboutHero",
  title: "About Hero Section",
  type: "document",
  fields: [
    { name: "badgeText", title: "Badge Text", type: "string" },
    {
      name: "titleLines",
      title: "Title Lines",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "subtitle", title: "Subtitle", type: "text" },
    {
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      fields: [
        { name: "text", title: "Text", type: "string" },
        { name: "url", title: "URL", type: "url" },
      ],
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "decorativeCircles",
      title: "Decorative Circles",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

const aboutMissionSchema: SchemaTypeDefinition = {
  name: "aboutMission",
  title: "About Mission Section",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    {
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
          ],
        },
      ],
    },
  ],
};

// Company page schemas
const companyTimelineSchema: SchemaTypeDefinition = {
  name: "companyTimeline",
  title: "Company Timeline",
  type: "document",
  fields: [
    {
      name: "items",
      title: "Timeline Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "number" },
            { name: "phase", title: "Phase", type: "string" },
            { name: "period", title: "Period", type: "string" },
            { name: "badgeText", title: "Badge Text", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            {
              name: "bullets",
              title: "Bullets",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
  ],
};

const teamSchema: SchemaTypeDefinition = {
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    { name: "heading", title: "Heading", type: "string" },
    { name: "subheading", title: "Subheading", type: "text" },
    {
      name: "members",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "bio", title: "Bio", type: "text" },
            { name: "linkedin", title: "LinkedIn URL", type: "url" },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
    { name: "investorsHeading", title: "Investors Heading", type: "string" },
    {
      name: "investorsSubheading",
      title: "Investors Subheading",
      type: "text",
    },
    {
      name: "investors",
      title: "Investors",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "org", title: "Organization", type: "string" },
            { name: "linkedin", title: "LinkedIn URL", type: "url" },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
};

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
    heroSchema,
    homeHero, // New separate home hero schema
    testimonialsSectionSchema,
    testimonialsSection, // New testimonials schema
    featureSchema,
    struggleSectionSchema,
    struggleSection, // New struggle section schema
    solutionsSectionSchema,
    solutionsSection, // New solutions section schema

    // Layout schemas
    footerSchema,
    navbarSchema,

    // Pricing page schema
    pricingPageSchema,

    // About page schemas
    aboutHeroSchema,
    aboutHero, // New about hero schema
    aboutMissionSchema,
    aboutMission, // New about mission schema

    // Company page schemas
    companyTimelineSchema,
    companyTimeline, // New company timeline schema
    teamSchema,
    team, // New team schema
    joinSchema,

    // Legal pages
    privacyPolicy,
  ],
};
