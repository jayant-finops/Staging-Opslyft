import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "document",
  fields: [
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "quote",
              title: "Quote",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "author",
              title: "Author Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "role",
              title: "Role/Position",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "company",
              title: "Company",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "avatar",
              title: "Avatar Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "companyLogo",
              title: "Company Logo",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: "author",
              subtitle: "company",
              media: "avatar",
            },
          },
        },
      ],
    }),
    defineField({
      name: "logoRow",
      title: "Company Logos Row",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "logo",
              title: "Logo Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "alt",
              media: "logo",
            },
          },
        },
      ],
    }),
  ],
});
