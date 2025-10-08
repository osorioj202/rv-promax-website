'use client';

import Link from 'next/link';
import { DiscoveryArticle } from '@/lib/discovery-articles';

interface DiscoverySidebarProps {
  trendingArticles: DiscoveryArticle[];
}

export default function DiscoverySidebar({ trendingArticles }: DiscoverySidebarProps) {
  return (
    <div className="space-y-6">
      {/* Trending Now */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          Trending Now
        </h3>
        <div className="space-y-4">
          {trendingArticles.slice(0, 5).map((article, index) => (
            <Link
              key={article.slug}
              href={`/discovery/${article.slug}`}
              className="block group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-blue-600 flex-shrink-0">
                  #{index + 1}
                </span>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {article.readTime} min
                    </span>
                    <span>•</span>
                    <span className="text-red-600 font-semibold">
                      {article.trendingScore}🔥
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          <Link
            href="/discovery?filter=tutorial"
            className="block px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
          >
            📚 Tutorials
          </Link>
          <Link
            href="/discovery?filter=list"
            className="block px-4 py-3 bg-green-50 text-green-600 rounded-lg font-semibold hover:bg-green-100 transition-colors"
          >
            📋 Top Lists
          </Link>
          <Link
            href="/discovery?filter=comparison"
            className="block px-4 py-3 bg-purple-50 text-purple-600 rounded-lg font-semibold hover:bg-purple-100 transition-colors"
          >
            ⚡ Comparisons
          </Link>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['solar', 'batteries', 'upgrades', 'diy', 'tutorial', 'comparison', 'trending', 'essential'].map((tag) => (
            <Link
              key={tag}
              href={`/discovery?tag=${tag}`}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-6 shadow-lg text-white">
        <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
        <p className="text-white/90 text-sm mb-4">
          Get the latest RV tips and trending content delivered to your inbox.
        </p>
        <input
          type="email"
          placeholder="Your email..."
          className="w-full px-4 py-2 rounded-lg text-gray-900 mb-2 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
        <button className="w-full px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
}



