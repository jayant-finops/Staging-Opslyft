import { defineType, defineField } from "sanity";

export const productFeatures = defineType({
  name: "productFeatures",
  title: "Product Features Section",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Feature Category",
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
      name: "badgeText",
      title: "Badge Text",
      type: "string",
      description:
        "Badge text at the top of the section (e.g., 'PRODUCT FEATURES')",
    }),
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Main section heading",
    }),
    defineField({
      name: "sectionDescription",
      title: "Section Description",
      type: "text",
      description: "Supporting text below the title",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "Feature ID",
              type: "string",
              description: "Unique identifier (e.g., 'ai-cost-allocation')",
            }),
            defineField({
              name: "tabLabel",
              title: "Tab Label",
              type: "string",
              description: "Label shown in the tab navigation",
            }),
            defineField({
              name: "badge",
              title: "Badge Text",
              type: "string",
              description: "Badge text displayed above the title",
            }),
            defineField({
              name: "title",
              title: "Feature Title",
              type: "string",
              description: "Main feature heading",
            }),
            defineField({
              name: "kicker",
              title: "Kicker Text",
              type: "string",
              description: "Supporting text below the title",
            }),
            defineField({
              name: "points",
              title: "Feature Points",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "heading",
                      title: "Point Heading",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Point Description",
                      type: "text",
                    }),
                  ],
                },
              ],
            }),
            defineField({
              name: "outcome",
              title: "Outcome Text",
              type: "text",
              description: "The outcome/benefit statement",
            }),
            defineField({
              name: "visualImage",
              title: "Visual Image",
              type: "image",
              description: "Feature visualization image",
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),
  ],
});
