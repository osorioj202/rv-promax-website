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
  
  // 🚀 PERFORMANCE OPTIMIZATIONS
  experimental: {
    // optimizeCss: true, // Disabled - causes critters module error in production
    optimizePackageImports: ['react', 'react-dom'], // Tree-shake unused code
  },
  
  // 🚀 WEBPACK OPTIMIZATIONS
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }
    return config;
  },
  
  // Headers for better SEO and Performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
