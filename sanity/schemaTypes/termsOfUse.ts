import { defineType, defineField } from "sanity";

export const termsOfUse = defineType({
  name: "termsOfUse",
  title: "Terms of Use Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Main page title (e.g., 'Terms of Use')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "string",
      description: "Last updated date text (e.g., 'Last updated July 2023')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Content Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "heading",
              title: "Section Heading",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "content",
              title: "Section Content",
              type: "array",
              of: [{ type: "block" }],
              description: "Rich text content for this section",
            }),
          ],
          preview: {
            select: {
              title: "heading",
            },
          },
        },
      ],
      description: "All content sections for the terms page",
    }),
  ],
});
