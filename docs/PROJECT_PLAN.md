# NiftyMonkey.dev Homepage - Project Plan

## Project Overview
Create a minimalistic, terminal-inspired homepage for niftymonkey.dev that showcases software projects, starting with ai-consensus.niftymonkey.dev.

## Tech Stack Decisions
- **Framework**: Next.js (consistent with ai-consensus project)
- **Styling**: Tailwind CSS
- **Font**: Monospace (JetBrains Mono or Fira Code)
- **Hosting**: Deploy to niftymonkey.dev domain

## Design Aesthetic: Tech/Terminal Inspired
- Dark terminal color scheme
- Monospace typography throughout
- Terminal-style window frames for project cards
- Cursor blink animations
- Terminal prompt aesthetic
- Suggested colors: dark background with green, cyan, or amber accents

## Content Structure

### 1. Hero Section
- ASCII art or stylized logo/branding
- Terminal prompt with introduction
- `$ whoami` → brief bio with typing effect animation
- Developer-focused, minimalist copy

### 2. Projects Section
- Grid layout of terminal-window styled cards
- First project: **AI Consensus** (ai-consensus.niftymonkey.dev)
  - Description: Multi-LLM consensus platform
  - Link to subdomain
  - Tech stack badges/tags
- Easily extensible for future projects

### 3. Footer
- Social/contact links
  - GitHub
  - Email
  - Other relevant profiles
- Copyright/credits

## Key Features to Implement

### Core Functionality
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Terminal-style typing animation for intro text
- [ ] Cursor blink effect
- [ ] Smooth scroll navigation
- [ ] Project cards with hover effects

### Developer Experience
- [ ] Simple config file (JSON/TS) to add new projects
- [ ] Reusable project card component
- [ ] Easy to maintain and expand
- [ ] Clean component structure

### Future Expandability
- Easy to add blog section later
- Modular architecture for new sections
- Potentially add:
  - Blog/articles section
  - Case studies for projects
  - About page with more details
  - RSS feed for blog posts

## Implementation Steps

### Phase 1: Setup
1. Initialize Next.js app in /home/mlo/dev/niftymonkey.dev
2. Install dependencies (Tailwind, fonts, etc.)
3. Set up basic project structure
4. Configure TypeScript and linting

### Phase 2: Core Design
5. Create terminal color theme with Tailwind config
6. Set up typography (monospace fonts)
7. Build layout structure (header, main, footer)
8. Create hero section with ASCII/logo

### Phase 3: Components
9. Build project card component
10. Create projects config file
11. Implement terminal window styling
12. Add AI Consensus as first project

### Phase 4: Interactions
13. Add typing animation effect
14. Implement cursor blink
15. Add hover effects on project cards
16. Smooth scrolling and transitions

### Phase 5: Polish & Deploy
17. Responsive design testing
18. Performance optimization
19. SEO meta tags
20. Deploy to niftymonkey.dev domain
21. Test on production

## Project Configuration Example

```typescript
// projects.config.ts
export const projects = [
  {
    id: 'ai-consensus',
    name: 'AI Consensus',
    description: 'Multi-LLM consensus platform for better AI decision making',
    url: 'https://ai-consensus.niftymonkey.dev',
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'Anthropic'],
    status: 'live',
    featured: true
  },
  // Easy to add more projects here
]
```

## Visual Reference Ideas
- Terminal window with colored title bar
- Syntax highlighting-inspired colors
- `$ command prompt` style headers
- ASCII art borders or decorative elements
- Matrix-style text effects (subtle)
- Monospace grid layouts

## Technical Considerations
- Use Next.js App Router (modern approach)
- Server-side rendering for fast initial load
- Static generation where possible
- Optimize fonts for performance
- Consider dark mode toggle (future)

## Success Criteria
- Loads quickly (< 2s)
- Looks professional and unique
- Easy to add new projects
- Responsive on all devices
- Memorable visual identity
- Reflects developer/tech aesthetic

## Notes
- Keep it simple initially - can always add more features
- Focus on making it easy to maintain
- Terminal aesthetic should be tasteful, not overwhelming
- Content is king - make projects easy to discover and explore
