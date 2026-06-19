export const features = [
  {
    eyebrow: 'Global Reach',
    title: 'The First Fully Global Job Board, Anywhere, Ever',
    body:
      'RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.',
    image: '/assets/global-job-board.webp',
    alt: 'RemoteRecruit global job board preview with candidate cards',
    reverse: false,
  },
  {
    eyebrow: 'Actually Fee Free',
    title: 'Fee-Free Forever',
    body:
      'We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved.',
    image: '/assets/premium-card.webp',
    alt: 'RemoteRecruit premium membership preview',
    reverse: true,
  },
  {
    eyebrow: 'Custom Profile',
    title: 'Showcase Your Talents',
    body:
      'Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.',
    image: '/assets/showcase-profile.webp',
    alt: 'RemoteRecruit custom profile preview with skills and feedback',
    reverse: false,
  },
]

export const faqs = [
  {
    question: 'Do I have to sign a long-term contract?',
    answer:
      'Actually beard single-origin coffee, twee 90’s PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90’s, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party',
  },
  {
    question: 'Can I pay for a whole year?',
    answer:
      'Actually beard single-origin coffee, twee 90’s PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage',
  },
  {
    question: 'What if I need help?',
    answer:
      'Actually beard single-origin coffee, twee 90’s PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90’s, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party',
  },
]

export const plans = [
  {
    name: 'Free',
    subtitle: 'Basic',
    featured: false,
    items: [
      { text: '1 Active Job', ok: true },
      { text: 'Basic List Placement', ok: true },
      { text: 'Unlimited Job Applicants', ok: false },
      { text: 'Invite Anyone to Apply to Your Jobs', ok: false },
    ],
  },
  {
    name: 'Premium',
    price: '$79.99',
    subtitle: 'Per Month',
    featured: true,
    items: [
      { text: 'Unlimited Job Posts', ok: true },
      { text: 'Instant Job Post Approval', ok: true },
      { text: 'Premium List Placement', ok: true },
      { text: 'Unlimited Job Applicants', ok: true },
    ],
  },
]
