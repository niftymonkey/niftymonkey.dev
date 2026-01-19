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
  {
    id: 'idea-vault',
    name: 'Idea Vault',
    description: 'Capture, organize, and refine your app ideas with structured templates and markdown support',
    url: 'https://idea-vault.niftymonkey.dev',
    tech: ['Next.js', 'TypeScript', 'Postgres', 'NextAuth'],
    status: 'beta',
    featured: true
  },
  {
    id: 'youtube-digest',
    name: 'YouTube Digest',
    description: 'Transform YouTube videos into structured, searchable study guides with timestamped sections',
    url: 'https://youtube-digest.niftymonkey.dev',
    tech: ['Next.js', 'TypeScript', 'Postgres', 'Claude'],
    status: 'beta',
    featured: true
  },
  {
    id: 'review-kit',
    name: 'ReviewKit',
    description: 'Brain-dump your accomplishments and let AI transform them into polished performance reviews',
    url: 'https://review-kit.niftymonkey.dev',
    tech: ['Next.js', 'Expo', 'TypeScript', 'OpenAI'],
    status: 'development',
    featured: false
  },
];
