import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Use the same environment pattern as sanity/env.ts with proper fallbacks
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "6i1nvf02";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
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
    },
    decorativeCircles
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
    heading,
    subheading,
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
    ctaUrl,
    laptopImage
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
    badgeText,
    title,
    subtitle,
    logoRowText,
    testimonials[]{
      quote,
      author,
      role,
      company,
      avatar,
      companyLogo
    },
    companyLogos[]{
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
    backgroundImage,
    features[]{
      title,
      description,
      icon
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
      buttonUrl,
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

// Product Hero query
export async function getProductHero(category: string) {
  const query = `*[_type == "productHero" && category == $category][0]{
    badge,
    title,
    description,
    ctaText,
    ctaUrl
  }`;

  try {
    const data = await client.fetch(query, { category });
    return data;
  } catch (error) {
    console.error(
      `Error fetching product hero for ${category} from Sanity:`,
      error
    );
    return null;
  }
}

// Product Trust query
export async function getProductTrust(category: string) {
  const query = `*[_type == "productTrust" && category == $category][0]{
    heading,
    logos[]{
      "src": logo.asset->url,
      alt
    }
  }`;

  try {
    const data = await client.fetch(query, { category });
    return data;
  } catch (error) {
    console.error(
      `Error fetching product trust for ${category} from Sanity:`,
      error
    );
    return null;
  }
}

// Product Problem query
export async function getProductProblem(category: string) {
  const query = `*[_type == "productProblem" && category == $category][0]{
    badge,
    title,
    description,
    "decorativeImage": decorativeImage.asset->url,
    problems[]{
      title,
      description
    }
  }`;

  try {
    const data = await client.fetch(query, { category });
    return data;
  } catch (error) {
    console.error(
      `Error fetching product problem for ${category} from Sanity:`,
      error
    );
    return null;
  }
}

// Product Wins query
export async function getProductWins(category: string) {
  const query = `*[_type == "productWins" && category == $category][0]{
    title,
    "decorativeImage": decorativeImage.asset->url,
    wins[]{
      title,
      description
    }
  }`;

  try {
    const data = await client.fetch(query, { category });
    return data;
  } catch (error) {
    console.error(
      `Error fetching product wins for ${category} from Sanity:`,
      error
    );
    return null;
  }
}

// Product Banner query
export async function getProductBanner(category: string) {
  const query = `*[_type == "productBanner" && category == $category][0]{
    title,
    ctaText,
    ctaUrl,
    "decorativeImage": decorativeImage.asset->url
  }`;

  try {
    const data = await client.fetch(query, { category });
    return data;
  } catch (error) {
    console.error(
      `Error fetching product banner for ${category} from Sanity:`,
      error
    );
    return null;
  }
}

// Product Features query (by category)
export async function getProductFeatures(category: string) {
  const query = `*[_type == "productFeatures" && category == $category][0]{
    badgeText,
    sectionTitle,
    sectionDescription,
    features[]{
      id,
      tabLabel,
      badge,
      title,
      kicker,
      points[]{
        heading,
        description
      },
      outcome,
      "visualUrl": visualImage.asset->url
    }
  }`;

  try {
    const data = await client.fetch(query, { category });
    return data;
  } catch (error) {
    console.error(
      `Error fetching product features for ${category} from Sanity:`,
      error
    );
    return null;
  }
}

// Pricing Page query
export async function getPricing() {
  const query = `*[_type == "pricing"][0]{
    badgeLabel,
    titleLines,
    "decorativeImage": decorativeImage.asset->url,
    "backgroundImage1": backgroundImage1.asset->url,
    "backgroundImage2": backgroundImage2.asset->url,
    logosTop[]{
      "src": logo.asset->url,
      alt
    },
    logosBottom[]{
      "src": logo.asset->url,
      alt
    },
    formHeading,
    formFields[]{
      placeholder,
      type
    },
    submitText
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching pricing from Sanity:", error);
    return null;
  }
}

// Customer Stories Hero query
export async function getCustomerStoriesHero() {
  const query = `*[_type == "customerStoriesHero"][0]{
    badgeText,
    title,
    description,
    ctaText,
    ctaUrl,
    "backgroundImage": backgroundImage.asset->url
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching customer stories hero from Sanity:", error);
    return null;
  }
}

// Blog posts query
export async function getCustomerStories() {
  const query = `*[_type == "blog"] | order(order asc){
    "slug": slug.current,
    category,
    title,
    excerpt,
    "featuredImage": featuredImage.asset->url,
    "cardBackgroundImage": cardBackgroundImage.asset->url,
    order
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching blog posts from Sanity:", error);
    return null;
  }
}

// Navbar query
export async function getNavbar() {
  const query = `*[_type == "navbar"][0]{
    "logoSrc": logo.asset->url,
    navigation[]{
      title,
      url,
      hasDropdown,
      dropdownCategories[]{
        title,
        "icon": icon.asset->url,
        url,
        items[]{
          label,
          featureId
        }
      }
    },
    loginText,
    loginUrl,
    ctaText,
    ctaUrl
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching navbar from Sanity:", error);
    return null;
  }
}

// Footer query
export async function getFooter() {
  const query = `*[_type == "footer"][0]{
    "logoSrc": logo.asset->url,
    tagline,
    newsletterTitle,
    newsletterDescription,
    newsletterPlaceholder,
    newsletterButtonText,
    navigationColumns[]{
      title,
      links[]{
        title,
        url
      }
    },
    socialLinks[]{
      platform,
      url,
      "iconSrc": icon.asset->url
    },
    certifications[]{
      name,
      "src": logo.asset->url,
      alt
    },
    copyright,
    address,
    legalLinks[]{
      title,
      url
    },
    "backgroundSrc": backgroundImage.asset->url
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching footer from Sanity:", error);
    return null;
  }
}

// Terms of Use query
export async function getTermsOfUse() {
  const query = `*[_type == "termsOfUse"][0]{
    title,
    lastUpdated,
    sections[]{
      heading,
      content
    }
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching terms of use from Sanity:", error);
    return null;
  }
}
