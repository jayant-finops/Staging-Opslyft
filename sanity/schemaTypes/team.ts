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
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
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
            },
            {
              name: "title",
              title: "Job Title",
              type: "string",
            },
            {
              name: "bio",
              title: "Bio",
              type: "text",
            },
            {
              name: "image",
              title: "Profile Image",
              type: "image",
              options: {
                hotspot: true,
              },
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
    }),
    defineField({
      name: "investorsHeading",
      title: "Investors Heading",
      type: "string",
    }),
    defineField({
      name: "investorsSubheading",
      title: "Investors Subheading",
      type: "text",
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
            },
            {
              name: "org",
              title: "Organization",
              type: "string",
            },
            {
              name: "image",
              title: "Profile Image",
              type: "image",
              options: {
                hotspot: true,
              },
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
    }),
  ],
});
