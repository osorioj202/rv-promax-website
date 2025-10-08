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
      <div className="relative h-[60vh] bg-gradient-to-br from-blue-600 to-teal-600">
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Article Header */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span>
                {new Date(article.publishDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span>•</span>
              <span>{article.readTime} min read</span>
              <span>•</span>
              <span>Trending Score: {article.trendingScore}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Excerpt */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.type === 'heading' && (
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {section.text}
                  </h2>
                )}
                {section.type === 'paragraph' && (
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {section.text}
                  </p>
                )}
                {section.type === 'list' && (
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {section.items?.map((item, i) => (
                      <li key={i} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                )}
                {section.type === 'image' && section.src && (
                  <div className="relative h-96 rounded-2xl overflow-hidden my-8">
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
            <div className="flex gap-4">
              <button 
                onClick={() => trackSocialShare('Facebook', article.slug)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Share on Facebook
              </button>
              <button 
                onClick={() => trackSocialShare('Twitter', article.slug)}
                className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors"
              >
                Share on Twitter
              </button>
              <button 
                onClick={() => trackSocialShare('Pinterest', article.slug)}
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Share on Pinterest
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to upgrade your RV?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Explore our complete collection of RV accessories, camping gear, and expert guides.
            </p>
            <Link
              href="/articles"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Browse All Guides
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
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

