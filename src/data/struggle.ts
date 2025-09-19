export type LocalStruggleFeature = {
  title: string
  description: string
  iconSrc: string
}

export type LocalStruggle = {
  sectionLabel: string
  title: string
  subtitle: string
  features: LocalStruggleFeature[]
  backgroundSrc: string
}

export const struggleFallback: LocalStruggle = {
  sectionLabel: 'THE REAL STRUGGLE',
  title: 'Hidden Cost of Cloud Complexity',
  subtitle:
    'From inaccurate allocations to misaligned decisions, here are the core issues slowing down cost efficiency and value realization.',
  backgroundSrc: '/assets/images/hiddenCost/bg2.png',
  features: [
    {
      title: 'Broken Cost Allocation',
      description:
        'Manual processes are slow and inaccurate, leading to budget overruns, internal friction, and missed savings.',
      iconSrc: '/assets/images/hiddenCost/icon1.svg',
    },
    {
      title: 'Contextless Optimization',
      description:
        "Without clarity on what's critical or safe to rightsize, teams waste time, make ad-hoc decisions, and lose money.",
      iconSrc: '/assets/images/hiddenCost/icon2.svg',
    },
    {
      title: 'Misaligned Cost Data',
      description:
        'Complex dashboards keep finance and engineering out of sync. Without a smart, conversational copilot, decisions stall and savings stay hidden.',
      iconSrc: '/assets/images/hiddenCost/icon3.svg',
    },
  ],
}


