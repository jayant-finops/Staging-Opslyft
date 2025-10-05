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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      validation: (Rule) => Rule.required(),
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
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required().min(1),
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
          validation: (Rule) => Rule.required(),
        },
        {
          name: "buttonText",
          title: "Button Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "buttonUrl",
          title: "Button URL",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
  ],
});
