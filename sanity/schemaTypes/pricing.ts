import { defineType, defineField } from "sanity";

export const pricing = defineType({
  name: "pricing",
  title: "Pricing Page",
  type: "document",
  fields: [
    defineField({
      name: "badgeLabel",
      title: "Badge Label",
      type: "string",
      description:
        "Badge text (e.g., 'BUILT FOR ENGINEERING AND FINANCE TEAMS')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titleLines",
      title: "Title Lines",
      type: "array",
      of: [{ type: "string" }],
      description: "Main title split into lines (3 lines)",
      validation: (Rule) => Rule.required().min(1).max(3),
    }),
    defineField({
      name: "decorativeImage",
      title: "Decorative Circles Image",
      type: "image",
      description: "Decorative circles background image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "backgroundImage1",
      title: "Background Gradient Image 1",
      type: "image",
      description: "First animated gradient background image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "backgroundImage2",
      title: "Background Gradient Image 2",
      type: "image",
      description: "Second animated gradient background image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "logosTop",
      title: "Top Row Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "logo",
              title: "Logo Image",
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
              description: "Alternative text for the logo",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      description: "Top row of company logos (3 logos)",
      validation: (Rule) => Rule.required().min(3).max(3),
    }),
    defineField({
      name: "logosBottom",
      title: "Bottom Row Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "logo",
              title: "Logo Image",
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
              description: "Alternative text for the logo",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      description: "Bottom row of company logos (2 logos)",
      validation: (Rule) => Rule.required().min(2).max(2),
    }),
    defineField({
      name: "formHeading",
      title: "Form Heading",
      type: "string",
      description: "Heading text for the contact form",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formFields",
      title: "Form Fields",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "placeholder",
              title: "Placeholder Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "type",
              title: "Field Type",
              type: "string",
              options: {
                list: [
                  { title: "Text", value: "text" },
                  { title: "Email", value: "email" },
                ],
              },
              initialValue: "text",
            }),
          ],
        },
      ],
      description: "Contact form fields",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "submitText",
      title: "Submit Button Text",
      type: "string",
      description: "Text for the form submit button",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
