import { defineType, defineField } from "sanity";

export const productTrust = defineType({
  name: "productTrust",
  title: "Product Trust Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description:
        "Trust section heading (e.g., 'Trusted by fast-growing companies around the world')",
      validation: (Rule) => Rule.required(),
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
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Alternative text for the logo",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
