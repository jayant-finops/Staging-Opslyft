import { defineType, defineField } from "sanity";

export const productWins = defineType({
  name: "productWins",
  title: "Product Wins Section",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Product Category",
      type: "string",
      description:
        "Category: cost-visibility, cost-control, or cost-governance",
      options: {
        list: [
          { title: "Cost Visibility", value: "cost-visibility" },
          { title: "Cost Control", value: "cost-control" },
          { title: "Cost Governance", value: "cost-governance" },
        ],
      },
    }),
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Main section heading (e.g., 'Why OpsLyft Wins')",
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
            }),
            defineField({
              name: "description",
              title: "Win Description",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],
});
