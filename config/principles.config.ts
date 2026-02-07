export interface Principle {
  id: string;
  title: string;
  summary: string;
  details: string[];
}

export const principles: Principle[] = [
  {
    id: 'trust-mechanism',
    title: 'Trust Through Transparency',
    summary: 'Open source is not an ideology for me, it is a practical way to establish trust.',
    details: [
      'When software makes claims about encryption, privacy, or anything else, users should be able to verify.',
      'Open source lets what is on the packaging match what is actually inside.',
      'Less about ideology, more about credibility.',
    ],
  },
  {
    id: 'open-core',
    title: 'Open Core First',
    summary: 'Every project starts with a free, open-source product core that is complete and useful on its own.',
    details: [
      'The core is the product. Not a limited demo, not a framework.',
      'Something I would happily use myself.',
      'Only after the foundation is solid do I consider premium features.',
    ],
  },
  {
    id: 'premium-convenience',
    title: 'Premium = Convenience',
    summary: 'Premium features reduce friction and save time. They never unlock basics.',
    details: [
      'The free version remains worth using on its own.',
      'Premium focuses on workflow improvements, not artificial limitations.',
      'People pay because it makes things easier, not because they are forced to.',
    ],
  },
  {
    id: 'beyond-code',
    title: 'Value Beyond Code',
    summary: 'The real value is the product decisions, UX, iteration, and ongoing maintenance.',
    details: [
      'Most people do not want to run or maintain software themselves.',
      'They want something reliable, evolving, and supported.',
      'Code can be copied. Thoughtful execution cannot.',
    ],
  },
  {
    id: 'sustainable-monetization',
    title: 'Sustainable Monetization',
    summary: 'Revenue enables continued development and support. It is optional and additive, never forced.',
    details: [
      'I am not trying to force monetization.',
      'I just do not want to rule it out by accident.',
      'The distinction is contractual, not architectural.',
    ],
  },
  {
    id: 'flexibility',
    title: 'Preserving Flexibility',
    summary: 'Each project stands on its own, preserving options for the future.',
    details: [
      'A transparent, trusted core reduces risk and builds credibility.',
      'Premium features demonstrate sustainability.',
      'This builds acquisition value, rather than limiting future paths.',
    ],
  },
];
