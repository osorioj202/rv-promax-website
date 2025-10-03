// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ✅ Ignore type errors in build
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Also ignore ESLint warnings
  },
  // SEO and Performance optimizations
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  // Headers for better SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
