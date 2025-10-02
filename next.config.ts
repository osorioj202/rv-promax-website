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
  // Ensure proper URL handling for SEO
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'rv-promax.com',
          },
        ],
        destination: 'https://www.rv-promax.com/:path*',
        permanent: true,
      },
    ];
  },
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
