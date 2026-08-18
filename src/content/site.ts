export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  // { label: "Contact", href: "/contact" },
];

export const services = [
  {
    number: '01',
    title: 'Migration strategy & readiness',
    short: 'A clear, risk-aware plan before a single workload moves.',
    detail:
      'We examine your estate, dependencies, risk profile, and cost baseline to build a migration roadmap your team can act on.',
    includes: [
      'Readiness assessment',
      'Dependency mapping',
      'Migration roadmap',
    ],
  },
  {
    number: '02',
    title: 'Cloud landing zones',
    short: 'Secure foundations built to scale with your business.',
    detail:
      'Establish governed accounts, identity, networking, logging, and guardrails so every workload begins on solid ground.',
    includes: [
      'Identity & access design',
      'Network architecture',
      'Security guardrails',
    ],
  },
  {
    number: '03',
    title: 'Application & data migration',
    short: 'Phased delivery with less disruption to the work that matters.',
    detail:
      'Move applications and data through carefully sequenced waves, with validation, rollback thinking, and transparent progress.',
    includes: ['Wave planning', 'Data migration', 'Cutover support'],
  },
  {
    number: '04',
    title: 'Cloud optimization',
    short: 'Better reliability, visibility, and cost control after go-live.',
    detail:
      'Turn a successful migration into a more resilient operating model with observability, security hardening, and FinOps practices.',
    includes: ['Cost visibility', 'Observability', 'Reliability improvements'],
  },
];

export const caseStudies = [
  {
    industry: 'B2B SaaS',
    title: 'A safer path to a scalable cloud platform',
    challenge:
      'A growing product team needed a migration plan that reduced operational risk while supporting faster releases.',
    outcome: 'Landing-zone foundation and phased migration roadmap.',
  },
  {
    industry: 'Financial services',
    title: 'Modernizing a complex application estate',
    challenge:
      'A regulated business needed clear governance and workload sequencing before it could move with confidence.',
    outcome: 'Risk-led assessment and cloud governance blueprint.',
  },
  {
    industry: 'Digital commerce',
    title: 'Making cloud spend easier to manage',
    challenge:
      'A high-growth retailer needed visibility and reliability improvements after its initial move to cloud.',
    outcome: 'Optimization backlog focused on resilience and cost visibility.',
  },
];
