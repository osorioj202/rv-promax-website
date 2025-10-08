'use client';

import Image from 'next/image';
import Link from 'next/link';
import { DiscoveryArticle } from '@/lib/discovery-articles';
import { trackArticleClick } from '@/components/DiscoveryAnalytics';

interface DiscoveryArticleCardProps {
  article: DiscoveryArticle;
}

export default function DiscoveryArticleCard({ article }: DiscoveryArticleCardProps) {
  return (
    <Link
      href={`/discovery/${article.slug}`}
      onClick={() => trackArticleClick(article.slug, article.title, article.type)}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${
            article.type === 'tutorial' ? 'bg-blue-600' :
            article.type === 'list' ? 'bg-green-600' :
            'bg-purple-600'
          }`}>
            {article.type === 'tutorial' ? '📚 Tutorial' :
             article.type === 'list' ? '📋 Top List' :
             '⚡ Comparison'}
          </span>
        </div>
        {/* Trending Score */}
        {article.trendingScore > 80 && (
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 bg-red-600 rounded-full text-xs font-bold text-white">
              🔥 {article.trendingScore}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            {new Date(article.publishDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {article.readTime} min read
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

