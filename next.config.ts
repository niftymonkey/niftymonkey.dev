import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      // The dossier is now the notebook's first entry. Its original URL was
      // published and shared, so it keeps working, permanently. The first
      // notebook slug (adopting-ai) was also shared before the entry was
      // renamed to adopting-ai-evidence; it keeps working too.
      { source: '/ai-adoption', destination: '/notebook/adopting-ai-evidence', permanent: true },
      { source: '/ai-adoption/index.html', destination: '/notebook/adopting-ai-evidence', permanent: true },
      { source: '/notebook/adopting-ai', destination: '/notebook/adopting-ai-evidence', permanent: true },
    ];
  },
  async headers() {
    // A robots meta tag only reaches a crawler that parses the HTML. The shelf
    // also serves PDFs, images, and downloads, so the instruction belongs on
    // the response itself. The segment comes from the environment for the same
    // reason it does everywhere else: this file is public.
    const shelf = process.env.SHELF_PATH;
    if (!shelf) return [];

    return [
      {
        source: `/${shelf}/:path*`,
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: `/${shelf}`,
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
