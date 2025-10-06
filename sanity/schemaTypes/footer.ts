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
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Company tagline",
    }),
    defineField({
      name: "newsletterTitle",
      title: "Newsletter Title",
      type: "string",
    }),
    defineField({
      name: "newsletterDescription",
      title: "Newsletter Description",
      type: "text",
    }),
    defineField({
      name: "newsletterPlaceholder",
      title: "Newsletter Input Placeholder",
      type: "string",
    }),
    defineField({
      name: "newsletterButtonText",
      title: "Newsletter Button Text",
      type: "string",
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
                    }),
                    defineField({
                      name: "url",
                      title: "URL",
                      type: "string",
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
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "string",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
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
            }),
            defineField({
              name: "logo",
              title: "Logo",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
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
    }),
    defineField({
      name: "address",
      title: "Company Address",
      type: "string",
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
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "string",
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
