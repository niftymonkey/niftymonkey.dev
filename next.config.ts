import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // The AI adoption dossier is a self-contained static document under public/.
      // Next serves public/ by exact path only, so this maps the clean URL onto the file.
      { source: "/ai-adoption", destination: "/ai-adoption/index.html" },
    ];
  },
};

export default nextConfig;
