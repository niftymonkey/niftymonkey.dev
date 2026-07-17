import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      // The dossier is now the notebook's first entry. Its original URL was
      // published and shared, so it keeps working, permanently.
      { source: '/ai-adoption', destination: '/notebook/adopting-ai', permanent: true },
      { source: '/ai-adoption/index.html', destination: '/notebook/adopting-ai', permanent: true },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
