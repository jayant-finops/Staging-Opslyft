import { defineType, defineField } from "sanity";

export const productBanner = defineType({
  name: "productBanner",
  title: "Product Banner Section",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Banner Category",
      type: "string",
      description:
        "Category: cost-visibility, cost-control, cost-governance, or customer-stories",
      options: {
        list: [
          { title: "Cost Visibility", value: "cost-visibility" },
          { title: "Cost Control", value: "cost-control" },
          { title: "Cost Governance", value: "cost-governance" },
          { title: "Customer Stories", value: "customer-stories" },
        ],
      },
    }),
    defineField({
      name: "title",
      title: "Banner Title",
      type: "string",
      description: "Main banner headline",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      description: "Text for the call-to-action button",
    }),
    defineField({
      name: "ctaUrl",
      title: "CTA Button URL",
      type: "string",
      description: "URL for the call-to-action button",
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
  ],
});
