import { defineType, defineField } from "sanity";

export default defineType({
  name: "solutionsSection",
  title: "Solutions Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "bulletPoints",
              title: "Bullet Points",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "buttonText",
              title: "Button Text",
              type: "string",
            },
            {
              name: "buttonUrl",
              title: "Button URL",
              type: "url",
              description: "URL for the button link",
            },
            {
              name: "image",
              title: "Image/Animation",
              type: "image",
              description:
                "Upload an image (Lottie animations can be handled via JSON)",
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
              media: "image",
            },
          },
        },
      ],
    }),
    defineField({
      name: "ctaCard",
      title: "CTA Card",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "buttonText",
          title: "Button Text",
          type: "string",
        },
        {
          name: "buttonUrl",
          title: "Button URL",
          type: "string",
        },
      ],
    }),
  ],
});
