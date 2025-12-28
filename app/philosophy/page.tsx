import Link from 'next/link';

interface Principle {
  id: string;
  title: string;
  summary: string;
  details: string[];
}

const principles: Principle[] = [
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

function PrincipleCard({ principle }: { principle: Principle }) {
  return (
    <div className="border border-terminal-gray/50 rounded p-4">
      <h3 className="text-terminal-green font-bold mb-2">{principle.title}</h3>
      <p className="text-foreground/80 text-sm">{principle.summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-terminal-gray border-t border-terminal-gray/30 pt-4">
        {principle.details.map((detail, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-terminal-cyan shrink-0">-</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <main className="container mx-auto px-4 pt-8 pb-16">
        {/* Terminal Window */}
        <div className="border border-terminal-gray bg-terminal-dark rounded-lg overflow-hidden">
          {/* Terminal header */}
          <div className="bg-terminal-gray/20 px-4 py-2 flex items-center gap-2 border-b border-terminal-gray">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-terminal-gray text-xs ml-2">~/philosophy</span>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="text-terminal-cyan mb-2">&gt; cat README.md</div>
              <h1 className="text-2xl md:text-3xl font-bold text-terminal-green mb-4">
                How I Build Software
              </h1>
              <div className="text-base md:text-lg space-y-4">
                <p className="text-foreground/90">
                  I build software because I enjoy it and because it solves problems I personally have.
                  Over time, some of those tools have become useful to other people too, which means
                  I need to be more intentional about how I build things.
                </p>
                <p className="text-foreground/90">
                  The core question:
                </p>
                <p className="text-terminal-amber">
                  How can I build software that is transparent and trustworthy, while leaving monetization
                  as an option?
                </p>
              </div>
            </div>

            {/* Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {principles.map((principle) => (
                <PrincipleCard key={principle.id} principle={principle} />
              ))}
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-terminal-gray">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-terminal-gray text-sm">
              niftymonkey.dev
            </p>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-terminal-cyan hover:text-terminal-green transition-colors"
              >
                Home
              </Link>
              <a
                href="https://github.com/niftymonkey"
                className="text-terminal-cyan hover:text-terminal-green transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
