import { defineType, defineField } from "sanity";

export const customerStoriesHero = defineType({
  name: "customerStoriesHero",
  title: "Customer Stories Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "badgeText",
      title: "Badge Text",
      type: "string",
      description: "Badge text (e.g., 'CUSTOMER STORIES')",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Main hero title",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Hero description text",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      description: "Call-to-action button text",
    }),
    defineField({
      name: "ctaUrl",
      title: "CTA Button URL",
      type: "string",
      description: "Call-to-action button URL",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Hero background image/SVG",
      options: {
        hotspot: true,
      },
    }),
  ],
});
