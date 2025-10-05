import { defineType, defineField } from "sanity";

export default defineType({
  name: "homeHero",
  title: "Home Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaUrl",
      title: "CTA Button URL",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "laptopImage",
      title: "Laptop Image",
      type: "image",
      description: "Laptop/hero image displayed in the hero section",
      options: {
        hotspot: true,
      },
    }),
  ],
});
