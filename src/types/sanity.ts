// Sanity document types
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface Hero {
  _id: string
  _type: 'hero'
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaUrl: string
  backgroundImage?: SanityImage
  laptopImage?: SanityImage
}

export interface Testimonial {
  _id: string
  _type: 'testimonial'
  quote: string
  author: string
  position: string
  company: string
  avatar?: SanityImage
  companyLogo?: SanityImage
}

export interface Feature {
  _id: string
  _type: 'feature'
  title: string
  description: string
  icon?: SanityImage
  order: number
}

export interface StruggleSection {
  _id: string
  _type: 'struggleSection'
  sectionLabel: string
  title: string
  subtitle: string
  features: {
    title: string
    description: string
    icon?: SanityImage
  }[]
}

export interface SolutionsSection {
  _id: string
  _type: 'solutionsSection'
  sectionLabel: string
  title: string
  subtitle: string
  features: {
    title: string
    description: string
    buttonText?: string
    image?: SanityImage
  }[]
}

export interface Footer {
  _id: string
  _type: 'footer'
  companyName: string
  logo?: SanityImage
  links: {
    title: string
    url: string
  }[]
  socialLinks: {
    platform: string
    url: string
  }[]
}
