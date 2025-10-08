import { defineField, defineType } from "sanity";

export const announcementBanner = defineType({
  name: "announcementBanner",
  title: "Announcement Banner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Banner Title",
      type: "string",
      description: "Main text displayed in the banner",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "linkText",
      title: "Link Text",
      type: "string",
      description: "Text for the call-to-action link",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "linkUrl",
      title: "Link URL",
      type: "url",
      description: "URL the link should navigate to",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Show Banner",
      type: "boolean",
      description: "Toggle to show/hide the banner",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "linkText",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, subtitle, isActive } = selection;
      return {
        title: title || "Announcement Banner",
        subtitle: `${subtitle} - ${isActive ? "Active" : "Inactive"}`,
      };
    },
  },
});
