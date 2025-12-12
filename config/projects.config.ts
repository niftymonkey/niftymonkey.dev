export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  tech: string[];
  status: 'live' | 'beta' | 'development';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ai-consensus',
    name: 'AI Consensus',
    description: 'Ask a question and watch three leading AI models collaborate to reach consensus',
    url: 'https://ai-consensus.niftymonkey.dev',
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'Anthropic', 'Google'],
    status: 'live',
    featured: true
  },
];
