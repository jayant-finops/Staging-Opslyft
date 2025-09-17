/**
 * Sanity CMS Configuration
 * 
 * To set up Sanity:
 * 1. Create a new Sanity project at https://sanity.io
 * 2. Install Sanity Studio: npm install -g @sanity/cli
 * 3. Run: sanity init
 * 4. Add these environment variables to your .env.local:
 *    - NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
 *    - NEXT_PUBLIC_SANITY_DATASET=production
 *    - SANITY_API_TOKEN=your_api_token
 */

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
}

// Sanity schemas for the CMS
export const schemas = [
  {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'subtitle', title: 'Subtitle', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'ctaText', title: 'CTA Button Text', type: 'string' },
      { name: 'ctaUrl', title: 'CTA Button URL', type: 'url' },
      { name: 'backgroundImage', title: 'Background Image', type: 'image' },
      { name: 'laptopImage', title: 'Laptop Image', type: 'image' },
    ],
  },
  {
    name: 'testimonial',
    title: 'Testimonials',
    type: 'document',
    fields: [
      { name: 'quote', title: 'Quote', type: 'text' },
      { name: 'author', title: 'Author Name', type: 'string' },
      { name: 'position', title: 'Position', type: 'string' },
      { name: 'company', title: 'Company', type: 'string' },
      { name: 'avatar', title: 'Avatar', type: 'image' },
      { name: 'companyLogo', title: 'Company Logo', type: 'image' },
    ],
  },
  {
    name: 'feature',
    title: 'Features',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'icon', title: 'Icon', type: 'image' },
      { name: 'order', title: 'Order', type: 'number' },
    ],
  },
  {
    name: 'struggleSection',
    title: 'Struggle Section',
    type: 'document',
    fields: [
      { name: 'sectionLabel', title: 'Section Label', type: 'string' },
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'subtitle', title: 'Subtitle', type: 'text' },
      {
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' },
              { name: 'icon', title: 'Icon', type: 'image' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'solutionsSection',
    title: 'Solutions Section',
    type: 'document',
    fields: [
      { name: 'sectionLabel', title: 'Section Label', type: 'string' },
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'subtitle', title: 'Subtitle', type: 'text' },
      {
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' },
              { name: 'buttonText', title: 'Button Text', type: 'string' },
              { name: 'image', title: 'Image', type: 'image' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
      { name: 'companyName', title: 'Company Name', type: 'string' },
      { name: 'logo', title: 'Logo', type: 'image' },
      {
        name: 'links',
        title: 'Links',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'url', title: 'URL', type: 'url' },
            ],
          },
        ],
      },
      {
        name: 'socialLinks',
        title: 'Social Links',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'platform', title: 'Platform', type: 'string' },
              { name: 'url', title: 'URL', type: 'url' },
            ],
          },
        ],
      },
    ],
  },
]
