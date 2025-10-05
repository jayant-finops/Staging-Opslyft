import { defineType, defineField } from "sanity";

export const navbar = defineType({
  name: "navbar",
  title: "Navigation Bar",
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
      name: "navigation",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
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
              name: "hasDropdown",
              title: "Has Dropdown?",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "dropdownCategories",
              title: "Dropdown Categories",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Category Title",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "icon",
                      title: "Category Icon",
                      type: "image",
                      options: {
                        hotspot: true,
                      },
                    }),
                    defineField({
                      name: "url",
                      title: "Category URL",
                      type: "url",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "items",
                      title: "Dropdown Items",
                      type: "array",
                      of: [
                        {
                          type: "object",
                          fields: [
                            defineField({
                              name: "label",
                              title: "Label",
                              type: "string",
                              validation: (Rule) => Rule.required(),
                            }),
                            defineField({
                              name: "featureId",
                              title: "Feature ID",
                              type: "string",
                              description: "URL-friendly ID for anchor links",
                              validation: (Rule) => Rule.required(),
                            }),
                          ],
                        },
                      ],
                    }),
                  ],
                },
              ],
              hidden: ({ parent }) => !parent?.hasDropdown,
            }),
          ],
          preview: {
            select: {
              title: "title",
              hasDropdown: "hasDropdown",
            },
            prepare({ title, hasDropdown }) {
              return {
                title: title,
                subtitle: hasDropdown ? "Has dropdown" : "Simple link",
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "loginText",
      title: "Login Text",
      type: "string",
      description: "Text for login link",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "loginUrl",
      title: "Login URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      description: "Text for main CTA button",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaUrl",
      title: "CTA Button URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
