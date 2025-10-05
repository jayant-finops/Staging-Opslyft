import { defineType, defineField } from "sanity";

export const productHero = defineType({
  name: "productHero",
  title: "Product Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "badge",
      title: "Badge Text",
      type: "string",
      description:
        "Text displayed in the badge (e.g., 'BUILT FOR ENGINEERING AND FINANCE TEAMS')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "Main hero headline",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Supporting text below the title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      description: "Text for the call-to-action button",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaUrl",
      title: "CTA Button URL",
      type: "string",
      description: "URL for the call-to-action button",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
