import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <main className="container mx-auto px-4 pt-8 pb-16">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/logo-small.png"
              alt="NiftyMonkey Logo"
              width={80}
              height={80}
            />
            <h1 className="text-4xl text-terminal-green">niftymonkey.dev</h1>
          </div>

          <div className="space-y-2 text-lg">
            <p className="text-terminal-cyan">&gt; whoami</p>
            <p className="ml-4">Software engineer building interesting things</p>

            <p className="mt-6 text-terminal-cyan">&gt; ls projects/</p>
            <p className="ml-4 text-terminal-gray">Loading projects...</p>
          </div>
        </section>

        {/* Projects Section Placeholder */}
        <section>
          <h2 className="text-2xl text-terminal-amber mb-6">Projects</h2>
          <div className="border border-terminal-gray bg-terminal-dark p-6 rounded">
            <h3 className="text-xl text-terminal-green mb-2">AI Consensus</h3>
            <p className="text-terminal-gray mb-4">
              Ask a question and watch three leading AI models collaborate to reach consensus
            </p>
            <a
              href="https://ai-consensus.niftymonkey.dev"
              className="text-terminal-cyan hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-terminal-gray">
          <p className="text-terminal-gray text-sm">
            © 2024 niftymonkey.dev
          </p>
        </footer>
      </main>
    </div>
  );
}
