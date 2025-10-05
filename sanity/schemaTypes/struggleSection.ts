import { defineType, defineField } from "sanity";

export default defineType({
  name: "struggleSection",
  title: "Struggle Section (Hidden Cost)",
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
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Background image for the section",
      options: {
        hotspot: true,
      },
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
              name: "icon",
              title: "Icon",
              type: "image",
              description: "Icon image for this feature",
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
              media: "icon",
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(3),
    }),
  ],
});
