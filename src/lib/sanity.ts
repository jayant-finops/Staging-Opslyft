import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { env } from "./env";
import {
  AboutHeroSection,
  AboutMissionSection,
  CompanyTimelineDoc,
  TeamDoc,
  JoinDoc,
} from "@/types";

export const client = createClient(env.sanity);

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// Fetch functions for different content types
export async function getHeroData() {
  return await client.fetch(`*[_type == "hero"][0]`);
}

export async function getTestimonials() {
  return await client.fetch(
    `*[_type == "testimonial"] | order(_createdAt asc)`
  );
}

export async function getFeatures() {
  return await client.fetch(`*[_type == "feature"] | order(order asc)`);
}

export async function getFooterData() {
  return await client.fetch(`*[_type == "footer"][0]`);
}

export async function getNavbarData() {
  return await client.fetch(`*[_type == "navbar"][0]`);
}

export async function getStruggleSection() {
  return await client.fetch(`*[_type == "struggleSection"][0]`);
}

export async function getSolutionsSection() {
  return await client.fetch(`*[_type == "solutionsSection"][0]`);
}

// Pricing page document
export async function getPricingPage() {
  return await client.fetch(`*[_type == "pricingPage"][0]`);
}

// About page hero section
export async function getAboutHero(): Promise<AboutHeroSection | null> {
  return await client.fetch(`
    *[_type == "aboutHero"][0]{
      _id,
      _type,
      badgeText,
      titleLines,
      subtitle,
      ctaButton{
        text,
        url
      },
      backgroundImage{
        asset->{
          _ref,
          url
        },
        alt
      },
      decorativeCircles{
        asset->{
          _ref,
          url
        },
        alt
      }
    }
  `);
}

// About mission section
export async function getAboutMission(): Promise<AboutMissionSection | null> {
  return await client.fetch(`
    *[_type == "aboutMission"][0]{
      _id,
      _type,
      title,
      description,
      stats[]{ label, value }
    }
  `);
}

// Company timeline
export async function getCompanyTimeline(): Promise<CompanyTimelineDoc | null> {
  return await client.fetch(`
    *[_type == "companyTimeline"][0]{
      _id,
      _type,
      items[]{ id, phase, period, title, description, bullets }
    }
  `);
}

// Team
export async function getTeam(): Promise<TeamDoc | null> {
  return await client.fetch(`
    *[_type == "team"][0]{
      _id,
      _type,
      heading,
      subheading,
      members[]{ name, title, bio, linkedin, image{ asset->{ _ref, url }, alt } },
      investorsHeading,
      investorsSubheading,
      investors[]{ name, org, linkedin, image{ asset->{ _ref, url }, alt } }
    }
  `);
}

// Join section
export async function getJoin(): Promise<JoinDoc | null> {
  return await client.fetch(`
    *[_type == "join"][0]{
      _id,
      _type,
      heading,
      subheading,
      ctaText,
      ctaHref,
      background{ asset->{ _ref, url }, alt }
    }
  `);
}
