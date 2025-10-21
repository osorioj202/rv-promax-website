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
    optimizePackageImports: ['react', 'react-dom', 'next', 'next/image', 'next/link'], // Tree-shake unused code
  },
  
  // 🚀 WEBPACK OPTIMIZATIONS - Optimized for production
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          // 🚀 CRITICAL: Separate articles JSON into async chunk
          articles: {
            test: /articles-comprehensive\.json/,
            name: 'articles',
            chunks: 'async',
            priority: 30,
            enforce: true,
          },
          // 🚀 CRITICAL: Separate discovery articles
          discovery: {
            test: /discovery-articles\.json/,
            name: 'discovery',
            chunks: 'async',
            priority: 25,
            enforce: true,
          },
          // 🚀 OPTIMIZED: Separate Google Analytics/Tag Manager
          analytics: {
            test: /[\\/]node_modules[\\/](gtag|google-analytics|googletagmanager)/,
            name: 'analytics',
            chunks: 'async',
            priority: 25,
            enforce: true,
          },
          // 🚀 OPTIMIZED: Separate React libraries
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)/,
            name: 'react',
            chunks: 'all',
            priority: 22,
            enforce: true,
          },
          // 🚀 OPTIMIZED: Separate Next.js libraries
          nextjs: {
            test: /[\\/]node_modules[\\/]next/,
            name: 'nextjs',
            chunks: 'all',
            priority: 21,
            enforce: true,
          },
          // Vendor libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 20,
          },
          // Common code
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            enforce: true,
          },
        },
      };
      
      // 🚀 OPTIMIZED: Enable tree shaking for better performance
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
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
