import { defineType, defineField } from "sanity";

export const Blogs = defineType({
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly identifier for the story",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description:
        "Blog post category (e.g., 'Case Studies', 'Technical', etc.)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Blog post title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Short description/preview of the blog post",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      description: "Card thumbnail image (optional)",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "cardBackgroundImage",
      title: "Card Background Image",
      type: "image",
      description: "Background image for the card (grid effect or pattern)",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Order in which this blog post appears (lower numbers appear first)",
      validation: (Rule) => Rule.required().min(0),
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
