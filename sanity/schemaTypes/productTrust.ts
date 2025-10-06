import { defineType, defineField } from "sanity";

export const productTrust = defineType({
  name: "productTrust",
  title: "Product Trust Section",
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
      name: "heading",
      title: "Heading",
      type: "string",
      description:
        "Trust section heading (e.g., 'Trusted by fast-growing companies around the world')",
    }),
    defineField({
      name: "logos",
      title: "Company Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "logo",
              title: "Logo Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Alternative text for the logo",
            }),
          ],
        },
      ],
    }),
  ],
});
