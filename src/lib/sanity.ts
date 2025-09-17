import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { env } from './env'

export const client = createClient(env.sanity)

const builder = imageUrlBuilder(client)

export function urlFor(source: unknown) {
  return builder.image(source)
}

// Fetch functions for different content types
export async function getHeroData() {
  return await client.fetch(`*[_type == "hero"][0]`)
}

export async function getTestimonials() {
  return await client.fetch(`*[_type == "testimonial"] | order(_createdAt asc)`)
}

export async function getFeatures() {
  return await client.fetch(`*[_type == "feature"] | order(order asc)`)
}

export async function getFooterData() {
  return await client.fetch(`*[_type == "footer"][0]`)
}

export async function getStruggleSection() {
  return await client.fetch(`*[_type == "struggleSection"][0]`)
}

export async function getSolutionsSection() {
  return await client.fetch(`*[_type == "solutionsSection"][0]`)
}
