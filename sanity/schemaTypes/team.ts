import { defineType, defineField } from "sanity";

export default defineType({
  name: "team",
  title: "Team Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "members",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "title",
              title: "Job Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "bio",
              title: "Bio",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              title: "Profile Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "linkedin",
              title: "LinkedIn URL",
              type: "url",
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "title",
              media: "image",
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "investorsHeading",
      title: "Investors Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "investorsSubheading",
      title: "Investors Subheading",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "investors",
      title: "Investors",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "org",
              title: "Organization",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              title: "Profile Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "linkedin",
              title: "LinkedIn URL",
              type: "url",
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "org",
              media: "image",
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
