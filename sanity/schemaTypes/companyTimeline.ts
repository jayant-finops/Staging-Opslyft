import { defineType, defineField } from "sanity";

export default defineType({
  name: "companyTimeline",
  title: "Company Timeline",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      description: "Main heading for the timeline section",
    }),
    defineField({
      name: "subheading",
      title: "Section Subheading",
      type: "text",
      description: "Subheading/description for the timeline section",
    }),
    defineField({
      name: "timelineItems",
      title: "Timeline Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "phase",
              title: "Phase Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "period",
              title: "Time Period",
              type: "string",
              validation: (Rule) => Rule.required(),
              description: "e.g., 2018–2019",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "bullets",
              title: "Bullet Points",
              type: "array",
              of: [{ type: "string" }],
              description: "Optional bullet points for additional details",
            },
          ],
          preview: {
            select: {
              title: "phase",
              subtitle: "period",
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
