import { defineType, defineField } from "sanity";

export const productProblem = defineType({
  name: "productProblem",
  title: "Product Problem Section",
  type: "document",
  fields: [
    defineField({
      name: "badge",
      title: "Badge Text",
      type: "string",
      description: "Text displayed in the badge (e.g., 'PROBLEM STATEMENT')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Main section heading",
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
      name: "decorativeImage",
      title: "Decorative Background Image",
      type: "image",
      description: "Decorative circles/pattern image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "problems",
      title: "Problem Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Problem Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Problem Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(3),
    }),
  ],
});
