import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

// Image URL builder
const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => {
  return builder.image(source);
};

// Privacy Policy query
export async function getPrivacyPolicy() {
  const query = `*[_type == "privacyPolicy"][0]{
    title,
    lastUpdated,
    sections[]{
      title,
      content,
      listItems,
      contentAfterList,
      subsections[]{
        title,
        content,
        listItems,
        contentAfterList
      }
    }
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching privacy policy from Sanity:", error);
    return null;
  }
}

// About Hero query
export async function getAboutHero() {
  const query = `*[_type == "aboutHero"][0]{
    titleLines,
    subtitle,
    ctaButton{
      text,
      url
    }
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching about hero from Sanity:", error);
    return null;
  }
}

// About Mission query
export async function getAboutMission() {
  const query = `*[_type == "aboutMission"][0]{
    title,
    description,
    stats[]{
      label,
      value
    }
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching about mission from Sanity:", error);
    return null;
  }
}

// Company Timeline query
export async function getCompanyTimeline() {
  const query = `*[_type == "companyTimeline"][0]{
    timelineItems[]{
      phase,
      period,
      description,
      bullets
    }
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching company timeline from Sanity:", error);
    return null;
  }
}

// Team query
export async function getTeam() {
  const query = `*[_type == "team"][0]{
    heading,
    subheading,
    members[]{
      name,
      title,
      bio,
      image,
      linkedin
    },
    investorsHeading,
    investorsSubheading,
    investors[]{
      name,
      org,
      image,
      linkedin
    }
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching team from Sanity:", error);
    return null;
  }
}

// Hero Data query (for home page)
export async function getHeroData() {
  const query = `*[_type == "homeHero"][0]{
    title,
    subtitle,
    description,
    ctaText,
    ctaUrl
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching home hero from Sanity:", error);
    return null;
  }
}

// Testimonials Section query
export async function getTestimonialsSection() {
  const query = `*[_type == "testimonialsSection"][0]{
    testimonials[]{
      quote,
      author,
      role,
      company,
      avatar,
      companyLogo
    },
    logoRow[]{
      alt,
      logo
    }
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching testimonials from Sanity:", error);
    return null;
  }
}

// Struggle Section query
export async function getStruggleSection() {
  const query = `*[_type == "struggleSection"][0]{
    sectionLabel,
    title,
    subtitle,
    features[]{
      title,
      description
    }
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching struggle section from Sanity:", error);
    return null;
  }
}

// Solutions Section query
export async function getSolutionsSection() {
  const query = `*[_type == "solutionsSection"][0]{
    sectionLabel,
    title,
    subtitle,
    features[]{
      title,
      description,
      bulletPoints,
      buttonText,
      image
    },
    ctaCard{
      title,
      buttonText,
      buttonUrl
    }
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching solutions section from Sanity:", error);
    return null;
  }
}
