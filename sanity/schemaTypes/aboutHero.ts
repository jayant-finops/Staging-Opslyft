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
      validation: (Rule) => Rule.required().min(1).max(3),
      description: "Each line of the title (typically 2 lines)",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      validation: (Rule) => Rule.required(),
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
          validation: (Rule) => Rule.required(),
        },
        {
          name: "url",
          title: "Button URL",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
