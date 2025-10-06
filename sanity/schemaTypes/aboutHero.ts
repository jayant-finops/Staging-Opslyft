import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutHero",
  title: "About Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "titleLines",
      title: "Title Lines",
      type: "array",
      of: [{ type: "string" }],
      description: "Each line of the title (typically 2 lines)",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
    }),
    defineField({
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "string",
        },
        {
          name: "url",
          title: "Button URL",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "decorativeCircles",
      title: "Decorative Circles Image",
      type: "image",
      description: "Decorative circles image for the hero section",
      options: {
        hotspot: true,
      },
    }),
  ],
});
