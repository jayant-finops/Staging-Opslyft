import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "document",
  fields: [
    defineField({
      name: "badgeText",
      title: "Badge Text",
      type: "string",
      description: "Text displayed in the badge (e.g., 'TESTIMONIALS')",
    }),
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Main heading for the testimonials section",
    }),
    defineField({
      name: "subtitle",
      title: "Section Subtitle",
      type: "text",
      description: "Subtitle text below the heading",
    }),
    defineField({
      name: "logoRowText",
      title: "Company Logos Row Text",
      type: "string",
      description:
        "Text displayed above the company logos (e.g., 'Trusted by fast-growing companies around the world')",
    }),
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
            },
            {
              name: "author",
              title: "Author Name",
              type: "string",
            },
            {
              name: "role",
              title: "Role/Position",
              type: "string",
            },
            {
              name: "company",
              title: "Company",
              type: "string",
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
      name: "companyLogos",
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
            },
            {
              name: "logo",
              title: "Logo Image",
              type: "image",
              options: {
                hotspot: true,
              },
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
