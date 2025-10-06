import { defineType, defineField } from "sanity";

export const productProblem = defineType({
  name: "productProblem",
  title: "Product Problem Section",
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
      name: "badge",
      title: "Badge Text",
      type: "string",
      description: "Text displayed in the badge (e.g., 'PROBLEM STATEMENT')",
    }),
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Main section heading",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Supporting text below the title",
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
            }),
            defineField({
              name: "description",
              title: "Problem Description",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],
});
