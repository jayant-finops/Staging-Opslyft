import { defineType, defineField } from "sanity";

export const productBanner = defineType({
  name: "productBanner",
  title: "Product Banner Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Banner Title",
      type: "string",
      description: "Main banner headline",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      description: "Text for the call-to-action button",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaUrl",
      title: "CTA Button URL",
      type: "string",
      description: "URL for the call-to-action button",
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
  ],
});
