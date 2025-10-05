import { defineType, defineField } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Company logo",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Company tagline",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "newsletterTitle",
      title: "Newsletter Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "newsletterDescription",
      title: "Newsletter Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "newsletterPlaceholder",
      title: "Newsletter Input Placeholder",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "newsletterButtonText",
      title: "Newsletter Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "navigationColumns",
      title: "Navigation Columns",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Column Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Link Title",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "url",
                      title: "URL",
                      type: "url",
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
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
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "platform",
              media: "icon",
            },
          },
        },
      ],
    }),
    defineField({
      name: "certifications",
      title: "Certification Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Certification Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "logo",
              title: "Logo",
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
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "name",
              media: "logo",
            },
          },
        },
      ],
    }),
    defineField({
      name: "copyright",
      title: "Copyright Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Company Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "legalLinks",
      title: "Legal Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Link Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Footer background image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
