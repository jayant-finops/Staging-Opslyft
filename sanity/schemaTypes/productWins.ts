import { defineType, defineField } from "sanity";

export const productWins = defineType({
  name: "productWins",
  title: "Product Wins Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Main section heading (e.g., 'Why OpsLyft Wins')",
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
      name: "wins",
      title: "Win Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Win Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Win Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
