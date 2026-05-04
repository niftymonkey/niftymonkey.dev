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
    id: 'brief',
    name: 'Brief',
    description: 'Transform YouTube videos into concise, structured briefs with timestamped sections',
    url: 'https://brief.niftymonkey.dev',
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
  {
    id: 'session-scribe',
    name: 'Session Scribe',
    description: 'Turn D&D session recordings into polished narrative recaps with scene-by-scene detail',
    url: 'https://github.com/niftymonkey/session-scribe',
    tech: ['Tauri', 'React', 'TypeScript', 'OpenAI'],
    status: 'development',
    featured: true
  },
  {
    id: 'pickai',
    name: 'pickai',
    description: 'npm package to classify, score, and recommend AI models for use in your apps',
    url: 'https://github.com/niftymonkey/pickai',
    tech: ['TypeScript', 'OpenRouter'],
    status: 'live',
    featured: true
  },
  {
    id: 'md',
    name: 'md',
    description: 'AI-friendly markdown sharing — upload from agent or human, get a rendered link',
    url: 'https://md.niftymonkey.dev',
    tech: ['Next.js', 'TypeScript', 'Postgres'],
    status: 'live',
    featured: true
  },
  {
    id: 'champ-sage',
    name: 'Champ Sage',
    description: 'Voice-first AI coaching assistant for League of Legends',
    url: 'https://github.com/niftymonkey/champ-sage',
    tech: ['Tauri', 'React', 'TypeScript', 'Rust'],
    status: 'development',
    featured: true
  },
  {
    id: 'memory-kit',
    name: 'Memory Kit',
    description: 'Voice-first notes app with an LLM-driven memory layer',
    url: 'https://github.com/niftymonkey/memory-kit',
    tech: ['TypeScript'],
    status: 'development',
    featured: false
  },
];
