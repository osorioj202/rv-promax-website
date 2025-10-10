'use client';

import { useState } from 'react';
import DiscoveryHero from '@/components/DiscoveryHero';
import DiscoveryArticleCard from '@/components/DiscoveryArticleCard';
import DiscoverySidebar from '@/components/DiscoverySidebar';
import DiscoveryAnalytics from '@/components/DiscoveryAnalytics';
import { discoveryArticles } from '@/lib/discovery-articles';

export default function DiscoveryPage() {
  const [filter, setFilter] = useState<'all' | 'tutorial' | 'list' | 'comparison'>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'trending'>('recent');

  const filteredArticles = discoveryArticles
    .filter(article => filter === 'all' || article.type === filter)
    .sort((a, b) => {
      if (sortBy === 'trending') {
        return b.trendingScore - a.trendingScore;
      }
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    });

  const trendingArticles = [...discoveryArticles].sort((a, b) => b.trendingScore - a.trendingScore);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Analytics Tracking */}
      <DiscoveryAnalytics />
      
      {/* Hero Section with Filters */}
      <DiscoveryHero
        filter={filter}
        sortBy={sortBy}
        onFilterChange={setFilter}
        onSortChange={setSortBy}
      />

      {/* Main Content with Sidebar */}
      <section className="py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Articles Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <DiscoveryArticleCard key={article.slug} article={article} />
                ))}
              </div>

              {/* Empty State */}
              {filteredArticles.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg">No articles found for this filter.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80">
              <DiscoverySidebar trendingArticles={trendingArticles} />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

