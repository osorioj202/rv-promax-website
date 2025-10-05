'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import articles from '@/lib/articles-comprehensive.json';

// Metadata para la página de artículos
export const metadata = {
  title: 'Expert RV & Camping Gear Guides | RV-Pro Max',
  description: 'Browse 100+ expert guides on RV accessories, camping gear, and outdoor equipment. Professional reviews, installation tips, and exclusive Amazon deals.',
  alternates: {
    canonical: 'https://www.rv-promax.com/articles',
  },
};

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('title');

  // Extract unique categories from articles
  const categories = useMemo(() => {
    const cats = new Set<string>();
    articles.forEach(article => {
      const words = article.title.toLowerCase().split(' ');
      if (words.includes('rv') || words.includes('recreational')) cats.add('RV Essentials');
      if (words.includes('camping') || words.includes('camp')) cats.add('Camping Gear');
      if (words.includes('water') || words.includes('filter')) cats.add('Water Systems');
      if (words.includes('electrical') || words.includes('power') || words.includes('solar')) cats.add('Electrical');
      if (words.includes('maintenance') || words.includes('repair')) cats.add('Maintenance');
      if (words.includes('furniture') || words.includes('mattress')) cats.add('Furniture & Interior');
      if (words.includes('towing') || words.includes('hitch')) cats.add('Towing & Hitches');
      if (words.includes('outdoor') || words.includes('recreation')) cats.add('Outdoor Recreation');
    });
    return Array.from(cats).sort();
  }, []);

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    let filtered = articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.targetKeyword.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
        (selectedCategory === 'RV Essentials' && (article.title.toLowerCase().includes('rv') || article.title.toLowerCase().includes('recreational'))) ||
        (selectedCategory === 'Camping Gear' && (article.title.toLowerCase().includes('camping') || article.title.toLowerCase().includes('camp'))) ||
        (selectedCategory === 'Water Systems' && (article.title.toLowerCase().includes('water') || article.title.toLowerCase().includes('filter'))) ||
        (selectedCategory === 'Electrical' && (article.title.toLowerCase().includes('electrical') || article.title.toLowerCase().includes('power') || article.title.toLowerCase().includes('solar'))) ||
        (selectedCategory === 'Maintenance' && (article.title.toLowerCase().includes('maintenance') || article.title.toLowerCase().includes('repair'))) ||
        (selectedCategory === 'Furniture & Interior' && (article.title.toLowerCase().includes('furniture') || article.title.toLowerCase().includes('mattress'))) ||
        (selectedCategory === 'Towing & Hitches' && (article.title.toLowerCase().includes('towing') || article.title.toLowerCase().includes('hitch'))) ||
        (selectedCategory === 'Outdoor Recreation' && (article.title.toLowerCase().includes('outdoor') || article.title.toLowerCase().includes('recreation')));

      return matchesSearch && matchesCategory;
    });

    // Sort articles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          // Sort by article number instead of alphabetical title
          const numA = parseInt(a.title.match(/^(\d+)/)?.[1] || '0');
          const numB = parseInt(b.title.match(/^(\d+)/)?.[1] || '0');
          return numA - numB;
        case 'searches':
          return b.monthlySearches - a.monthlySearches;
        case 'recent':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'RV Essentials': '🚐',
      'Camping Gear': '🏕️',
      'Water Systems': '💧',
      'Electrical': '⚡',
      'Maintenance': '🔧',
      'Furniture & Interior': '🪑',
      'Towing & Hitches': '🚛',
      'Outdoor Recreation': '🎯'
    };
    return icons[category] || '📝';
  };

  const getArticleIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('water') || titleLower.includes('filter')) return '💧';
    if (titleLower.includes('electrical') || titleLower.includes('power') || titleLower.includes('solar')) return '⚡';
    if (titleLower.includes('camping') || titleLower.includes('camp')) return '🏕️';
    if (titleLower.includes('mattress') || titleLower.includes('bedding')) return '🛏️';
    if (titleLower.includes('towing') || titleLower.includes('hitch')) return '🚛';
    if (titleLower.includes('maintenance') || titleLower.includes('repair')) return '🔧';
    if (titleLower.includes('furniture') || titleLower.includes('interior')) return '🪑';
    if (titleLower.includes('outdoor') || titleLower.includes('recreation')) return '🎯';
    return '🚐';
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All RV & Camping Gear Guides</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explore our collection of 100+ expert-reviewed guides on RV accessories, camping gear, and off-grid solutions. 
            Trusted by over 60,000 RV enthusiasts worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="font-semibold">{articles.length}</span> Expert Guides
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="font-semibold">8</span> Categories
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="font-semibold">2025</span> Updated
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-6 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles by title or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent search-input"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {getCategoryIcon(category)} {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="w-full lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="title">Sort by Title</option>
                <option value="searches">Sort by Popularity</option>
                <option value="recent">Sort by Recent</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredArticles.length} of {articles.length} articles
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 articles-grid">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden article-card"
                >
                  <Link href={`/articles/${article.slug}`} className="block h-full">
                    {/* Article Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="text-3xl">{getArticleIcon(article.title)}</div>
                        <div className="flex-1">
                          <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 leading-tight">
                            {article.title}
                          </h2>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                              {article.targetKeyword}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span>{article.monthlySearches.toLocaleString()}/mo</span>
                          </div>
                        </div>
                      </div>

                      {/* Article Preview */}
                      <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                        Expert guide covering everything you need to know about {article.targetKeyword} for RV owners. 
                        Complete with product recommendations, installation tips, and maintenance advice.
                      </p>
                    </div>

                    {/* Article Footer */}
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            📖 Expert Guide
                          </span>
                          <span className="flex items-center gap-1">
                            ⭐ 4.9/5 Rating
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600 font-medium">
                          Read More
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 category-grid">
            {categories.map(category => {
              const categoryArticles = articles.filter(article => {
                const titleLower = article.title.toLowerCase();
                switch (category) {
                  case 'RV Essentials':
                    return titleLower.includes('rv') || titleLower.includes('recreational');
                  case 'Camping Gear':
                    return titleLower.includes('camping') || titleLower.includes('camp');
                  case 'Water Systems':
                    return titleLower.includes('water') || titleLower.includes('filter');
                  case 'Electrical':
                    return titleLower.includes('electrical') || titleLower.includes('power') || titleLower.includes('solar');
                  case 'Maintenance':
                    return titleLower.includes('maintenance') || titleLower.includes('repair');
                  case 'Furniture & Interior':
                    return titleLower.includes('furniture') || titleLower.includes('mattress');
                  case 'Towing & Hitches':
                    return titleLower.includes('towing') || titleLower.includes('hitch');
                  case 'Outdoor Recreation':
                    return titleLower.includes('outdoor') || titleLower.includes('recreation');
                  default:
                    return false;
                }
              });

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 text-center category-button ${
                    selectedCategory === category
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="text-4xl mb-3">{getCategoryIcon(category)}</div>
                  <h3 className="font-semibold text-lg mb-2">{category}</h3>
                  <p className="text-sm text-gray-600">{categoryArticles.length} articles</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}