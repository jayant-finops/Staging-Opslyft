import { defineType, defineField, defineArrayMember } from "sanity";

export const customerStories = defineType({
  name: "customerStories",
  title: "Customer Stories",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Customer story title",
      validation: (Rule) => Rule.required().error("Required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly identifier for the story",
      validation: (Rule) => Rule.required().error("Required"),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required().error("Required"),
      description: "Customer Story category (e.g., 'Case Studies', 'Technical')",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule) => Rule.required().error("Required"),
      description: "Short description/preview of the story",
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      validation: (Rule) => Rule.required().error("Required"),
      options: { hotspot: true },
    }),
    defineField({
      name: "ogImage",
      title: "OG(sharing) Image",
      type: "image",
      description: "The image should have aspect ratio: 1.91:1",
      validation: (Rule) => Rule.required().error("Required"),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required().error("Required"),
      options: { hotspot: true },
    }),
    defineField({
      name: "cardBackgroundImage",
      title: "Card Background Image",
      type: "image",
      validation: (Rule) => Rule.required().error("Required"),
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which this story appears (lower numbers first)",
    }),
    defineField({
      name: "industry",
      title: "Industry",
      validation: (Rule) => Rule.required().error("Required"),
      type: "string"
    }),
    defineField({
      name: "usecase",
      title: "Usecase",
      validation: (Rule) => Rule.required().error("Required"),
      type: "string"
    }),
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      validation: (Rule) => Rule.required().error("Required"),
      type: "string"
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      validation: (Rule) => Rule.required().error("Required"),
      type: "string"
    }),
    defineField({
      name: "scale",
      title: "Scale",
      type: "string"
    }),
    // ---------------------------
    // Sections array with rich text + jumplink content
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "section",
          title: "Section",
          fields: [
            defineField({
              name: "jumplinkContent",
              title: "Jumplink Content",
              type: "string",
              description: "Short label for jump links (e.g., 'Introduction')",
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "array",
              description: "Rich text content for this section",
              of: [
                { type: "block" },          // Paragraphs, headings, lists, etc.
                { type: "image", options: { hotspot: true } }, // Inline images
                {
                  type: "object",
                  name: "componentBlock",
                  title: "Component Block",
                  fields: [
                            {
                              name: "component",
                              title: "Component Type",
                              type: "string",
                              description: "Type of custom component to render (e.g., GreenCard, Testimonial, Video)",
                            },
                            {
                              name: "props",
                              title: "Props",
                              type: "object",
                              description: "JSON-like props for this component",
                              fields: [
                                { name: "text", type: "text" },
                                { name: "color", type: "string" },
                                // you can add more generic fields here or even allow a "raw JSON" string
                              ],
                            },
                          ],
                  preview: {
                    select: { title: "component" },
                    prepare(selection) {
                      return { title: selection.title || "Custom Component" };
                    },
                  },
                },
                // You can add more custom blocks here
              ],
            }),
          ],
          preview: {
            select: {
              title: "jumplinkContent",
            },
          },
        }),
      ],
    }),
    // Array for impact cards
    defineField({
      name: "impactCards",
      title: "Impact Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "card",
          title: "Card",
          fields: [
            defineField({
              name: "metricValue",
              title: "Metric Value",
              type: "string",
              validation: (Rule)=> Rule.required().error("Required"),
            }),
            defineField({
              name: "explainingText",
              title: "Explaining Text",
              type: "string",
              validation: (Rule)=> Rule.required().error("Required"),
            }),
          ],
        preview: {
          select: { title: "metricValue", subtitle: "explainingText" },
        },
        }),
      ]
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "featuredImage",
    },
  },
});