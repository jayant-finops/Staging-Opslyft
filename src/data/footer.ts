export type NavigationLink = {
  title: string
  url: string
}

export type NavigationColumn = {
  title: string
  links: NavigationLink[]
}

export type SocialLink = {
  platform: string
  url: string
  iconSrc: string
}

export type CertificationLogo = {
  name: string
  src: string
  alt: string
}

export type LocalFooter = {
  logoSrc: string
  tagline: string
  newsletter: {
    title: string
    description: string
    placeholder: string
    buttonText: string
  }
  navigation: NavigationColumn[]
  socialLinks: SocialLink[]
  certifications: CertificationLogo[]
  legal: {
    copyright: string
    address: string
    legalLinks: NavigationLink[]
  }
  backgroundSrc: string
}

export const footerFallback: LocalFooter = {
  logoSrc: '/assets/images/footer/opslyft-logo.svg',
  tagline: 'We make cloud cost management hassle-free.',
  newsletter: {
    title: 'Stay updated with cloud cost insights',
    description: 'Get the latest tips, strategies, and industry insights delivered to your inbox.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe'
  },
  navigation: [
    {
      title: 'Use Case',
      links: [
        { title: 'For Engineering Leadership', url: '#' },
        { title: 'For Engineering Manager', url: '#' },
        { title: 'For DevOps Engineer', url: '#' },
        { title: 'For Finance Leadership', url: '#' }
      ]
    },
    {
      title: 'Product',
      links: [
        { title: 'Cost Saving Insights', url: '#' },
        { title: 'Cost Explorer+++', url: '#' },
        { title: 'Asset Management', url: '#' },
        { title: 'Instance Scheduler', url: '#' },
        { title: 'Budget Management', url: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { title: 'Blogs', url: '#' },
        { title: 'Case Studies', url: '#' },
        { title: 'Webinar', url: '#' },
        { title: 'Slack Community', url: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { title: 'About Us', url: '#' },
        { title: 'Careers', url: '#' },
        { title: 'News Room', url: '#' },
        { title: 'Contact Us', url: '#' },
        { title: 'Book a Demo', url: '#' }
      ]
    }
  ],
  socialLinks: [
    {
      platform: 'Twitter',
      url: 'https://twitter.com/opslyft',
      iconSrc: '/assets/images/footer/twitter.svg'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/opslyft',
      iconSrc: '/assets/images/footer/linkedin.svg'
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/opslyft',
      iconSrc: '/assets/images/footer/fb.svg'
    }
  ],
  certifications: [
    {
      name: 'ISO 27001',
      src: '/assets/images/footer/iso-logo.png',
      alt: 'ISO 27001 Certification'
    },
    {
      name: 'SOC 2',
      src: '/assets/images/footer/aicpa-logo.png',
      alt: 'SOC 2 Type II Certification'
    },
    {
      name: 'FinOps Foundation',
      src: '/assets/images/footer/finops-logo.png',
      alt: 'FinOps Foundation Member'
    },
    {
      name: 'Linux Foundation',
      src: '/assets/images/footer/linux-logo.png',
      alt: 'Linux Foundation Silver Member'
    }
  ],
  legal: {
    copyright: '© 2025 Opslyft, Inc. All rights reserved.',
    address: 'Suite-403, 550 Battery Street, San Francisco, CA, 94111',
    legalLinks: [
      { title: 'Terms & Conditions', url: '/terms' },
      { title: 'Privacy Policy', url: '/privacy' }
    ]
  },
  backgroundSrc: '/assets/images/footer/bg.png'
}
