import { defineType, defineField } from "sanity";

export default defineType({
  name: "privacyPolicy",
  title: "Privacy Policy",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "string",
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Section Title",
              type: "string",
            }),
            defineField({
              name: "content",
              title: "Content Paragraphs",
              type: "array",
              of: [{ type: "text" }],
              description: "Each item is a separate paragraph",
            }),
            defineField({
              name: "listItems",
              title: "List Items (Bullet Points)",
              type: "array",
              of: [{ type: "text" }],
              description:
                "Bullet points. Use **text** for bold (e.g., **Right to Access** for GDPR rights)",
            }),
            defineField({
              name: "subsections",
              title: "Subsections",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Subsection Title",
                      type: "string",
                    }),
                    defineField({
                      name: "content",
                      title: "Content Paragraphs",
                      type: "array",
                      of: [{ type: "text" }],
                      description: "Each item is a separate paragraph",
                    }),
                    defineField({
                      name: "listItems",
                      title: "List Items (Bullet Points)",
                      type: "array",
                      of: [{ type: "text" }],
                      description: "Bullet points. Use **text** for bold",
                    }),
                    defineField({
                      name: "contentAfterList",
                      title: "Content After List",
                      type: "array",
                      of: [{ type: "text" }],
                      description:
                        "Paragraphs that appear after the list items",
                    }),
                  ],
                  preview: {
                    select: {
                      title: "title",
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "lastUpdated",
    },
  },
});
