'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { discoveryArticles } from '@/lib/discovery-articles';
import DiscoveryAnalytics, { trackSocialShare } from '@/components/DiscoveryAnalytics';

export default function DiscoveryArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = discoveryArticles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles
  const relatedArticles = discoveryArticles
    .filter(a => a.slug !== slug && a.type === article.type)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Analytics Tracking */}
      <DiscoveryAnalytics />
      
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gradient-to-br from-blue-600 to-teal-600">
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Article Header */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="mb-4">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white ${
                article.type === 'tutorial' ? 'bg-blue-600' :
                article.type === 'list' ? 'bg-green-600' :
                'bg-purple-600'
              }`}>
                {article.type === 'tutorial' ? '📚 Tutorial' :
                 article.type === 'list' ? '📋 Top List' :
                 '⚡ Comparison'}
              </span>
              {article.trendingScore > 80 && (
                <span className="inline-block ml-2 px-4 py-2 bg-red-600 rounded-full text-sm font-bold text-white">
                  🔥 Trending
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-white/90">
              <span>
                {new Date(article.publishDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="hidden sm:inline">•</span>
              <span>{article.readTime} min read</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden md:inline">Trending Score: {article.trendingScore}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Excerpt */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 md:p-6 rounded-lg mb-6 md:mb-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-base md:prose-lg max-w-none">
            {article.content.map((section, index) => (
              <div key={index} className="mb-6 md:mb-8">
                {section.type === 'heading' && (
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                    {section.text}
                  </h2>
                )}
                {section.type === 'paragraph' && (
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                    {section.text}
                  </p>
                )}
                {section.type === 'list' && (
                  <ul className="list-disc list-inside space-y-2 mb-4 text-base md:text-lg">
                    {section.items?.map((item, i) => (
                      <li key={i} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                )}
                {section.type === 'product' && (
                  <div className="my-4 md:my-6 p-4 md:p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-300 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          {section.name}
                        </h3>
                        <p className="text-xl md:text-2xl font-bold text-orange-600">
                          {section.price}
                        </p>
                      </div>
                      <a
                        href={section.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-base md:text-lg rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg w-full md:w-auto"
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.5 2C13.5 2 17.5 2.1 17.5 5.5C17.5 8.9 13.5 9 13.5 9M13.5 9C13.5 9 9.5 8.9 9.5 5.5C9.5 2.1 13.5 2 13.5 2M13.5 2V22M4 17L13.5 22L23 17M13.5 9L4 13.5M13.5 9L23 13.5" />
                        </svg>
                        View on Amazon
                      </a>
                    </div>
                  </div>
                )}
                {section.type === 'image' && section.src && (
                  <div className="relative h-64 md:h-80 lg:h-96 rounded-xl md:rounded-2xl overflow-hidden my-6 md:my-8">
                    <Image
                      src={section.src}
                      alt={section.alt || 'Article image'}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article:</h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={() => trackSocialShare('Facebook', article.slug)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Share on Facebook
              </button>
              <button 
                onClick={() => trackSocialShare('Twitter', article.slug)}
                className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors text-center"
              >
                Share on Twitter
              </button>
              <button 
                onClick={() => trackSocialShare('Pinterest', article.slug)}
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
              >
                Share on Pinterest
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 md:mt-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
              Ready to upgrade your RV?
            </h3>
            <p className="text-sm md:text-base text-white/90 mb-4 md:mb-6 max-w-2xl mx-auto">
              Explore our complete collection of RV accessories, camping gear, and expert guides.
            </p>
            <Link
              href="/articles"
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-colors"
            >
              Browse All Guides
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/discovery/${related.slug}`}
                  className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={related.featuredImage}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

