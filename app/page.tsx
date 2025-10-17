'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Head from 'next/head';
import articles from '@/lib/articles-comprehensive.json';
import HeroCarousel from '@/components/HeroCarousel';
import HeroFeaturedProducts from '@/components/HeroFeaturedProducts';
import HeroSearch from '@/components/HeroSearch';

export default function Home() {
  const [featuredArticles, setFeaturedArticles] = useState([]);

  // 🚀 OPTIMIZED: Memoized article processing
  const processedArticles = useMemo(() => {
    return articles
      .filter(article => article.monthlySearches > 0)
      .sort((a, b) => b.monthlySearches - a.monthlySearches)
      .slice(0, 6);
  }, []);

  useEffect(() => {
    setFeaturedArticles(processedArticles);
  }, [processedArticles]);

  // 🚀 OPTIMIZED: Memoized icon functions
  const getCategoryIcon = useCallback((title: string) => {
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
  }, []);

  const getCategoryIconForSection = useCallback((title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('rv accessories')) return '🚐';
    if (titleLower.includes('electrical')) return '⚡';
    if (titleLower.includes('camping')) return '🏕️';
    if (titleLower.includes('maintenance')) return '🔧';
    if (titleLower.includes('furniture')) return '🪑';
    if (titleLower.includes('towing')) return '🚛';
    if (titleLower.includes('mattress')) return '🛏️';
    if (titleLower.includes('outdoor')) return '🎯';
    if (titleLower.includes('covers')) return '🛡️';
    if (titleLower.includes('general rv')) return '🏠';
    return '📦';
  }, []);

  return (
    <>
      <main className="min-h-screen">
      {/* Enhanced Hero Section with Carousel */}
      <section className="relative text-white min-h-screen overflow-hidden" role="banner" aria-label="Hero section">
        {/* Hero Carousel Background */}
        <HeroCarousel />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center z-30 py-24 px-6 flex flex-col justify-center min-h-screen">
          {/* Logo Section */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-4 group">
              {/* Large Logo SVG */}
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 40 40" className="w-12 h-12 text-white">
                  {/* Mountain range background */}
                  <path d="M2 22 L6 16 L10 18 L14 12 L18 14 L22 8 L26 10 L30 6 L34 8 L38 4 L38 22 Z" fill="currentColor" opacity="0.4"/>
                  {/* RV/Motorhome body */}
                  <rect x="8" y="12" width="24" height="12" fill="currentColor" rx="1"/>
                  {/* RV front cab */}
                  <rect x="6" y="14" width="6" height="8" fill="currentColor" rx="1"/>
                  {/* Windows */}
                  <rect x="10" y="14" width="3" height="2" fill="white" opacity="0.9"/>
                  <rect x="15" y="14" width="3" height="2" fill="white" opacity="0.9"/>
                  <rect x="20" y="14" width="3" height="2" fill="white" opacity="0.9"/>
                  <rect x="25" y="14" width="3" height="2" fill="white" opacity="0.9"/>
                  {/* Wheels */}
                  <circle cx="12" cy="26" r="2" fill="white" opacity="0.9"/>
                  <circle cx="28" cy="26" r="2" fill="white" opacity="0.9"/>
                  {/* RV roof line */}
                  <line x1="8" y1="12" x2="32" y2="12" stroke="white" strokeWidth="0.5" opacity="0.7"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-4xl md:text-5xl font-bold text-white group-hover:text-teal-300 transition-colors">
                  RV-Pro Max
                </div>
                <div className="text-lg text-teal-200 -mt-1">
                  Expert Reviews & Guides
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              🏆 Trusted by 60,000+ RV Owners Worldwide
            </span>
          </div>

          {/* Hero Search */}
          <HeroSearch />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            RV & Camping Gear
            <span className="block text-teal-300">Expert Reviews</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Discover the best RV accessories, camping gear, and off-grid solutions with our comprehensive guides. 
            Expert reviews, professional installation tips, and exclusive Amazon deals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/articles"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              Browse 100+ Expert Guides
            </Link>
            <Link
              href="#featured-articles"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
            >
              View Featured Articles
            </Link>
          </div>
          
          {/* Trust Indicators - Horizontal Layout */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-2">
              <div className="text-2xl sm:text-3xl font-bold text-teal-300">100+</div>
              <div className="text-sm opacity-80">Expert Guides</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="text-2xl sm:text-3xl font-bold text-teal-300">60K+</div>
              <div className="text-sm opacity-80">Happy Customers</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="text-2xl sm:text-3xl font-bold text-teal-300">4.9/5</div>
              <div className="text-sm opacity-80">Average Rating</div>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-teal-500 text-white" aria-label="Featured products">
        <div className="max-w-7xl mx-auto">
          <HeroFeaturedProducts />
        </div>
      </section>

      {/* Featured Articles Section */}
      <section id="featured-articles" className="py-20 px-6 bg-white" aria-label="Featured articles">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Expert Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and comprehensive guides, trusted by thousands of RV owners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden article-card"
              >
                <Link href={`/articles/${article.slug}`} className="block h-full">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-4xl">{getCategoryIcon(article.title)}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            #{index + 1} Most Popular
                          </span>
                          <span className="text-gray-500 text-sm">
                            {article.monthlySearches.toLocaleString()}/mo
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 leading-tight">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-6">
                      Expert guide covering everything you need to know about {article.targetKeyword || 'RV essentials'} for RV owners. 
                      Complete with product recommendations, installation tips, and maintenance advice.
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          ⭐ 4.9/5
                        </span>
                        <span>•</span>
                        <span>Expert Guide</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-600 font-semibold">
                        Read Guide
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              View All 100+ Expert Guides
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find exactly what you need with our comprehensive category guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { href: '/rv-accessories', title: 'RV Accessories', desc: 'Essential accessories for every RV owner', count: '25+ Guides' },
              { href: '/electrical-electronics', title: 'Electrical & Electronics', desc: 'Power systems, batteries, and electronics', count: '15+ Guides' },
              { href: '/camping-gear', title: 'Camping Gear', desc: 'Outdoor equipment and camping essentials', count: '20+ Guides' },
              { href: '/maintenance-repair', title: 'Maintenance & Repair', desc: 'Keep your RV in perfect condition', count: '18+ Guides' },
              { href: '/furniture-interior', title: 'Furniture & Interior', desc: 'Comfortable and functional RV furniture', count: '12+ Guides' },
              { href: '/towing-hitches', title: 'Towing Hitches', desc: 'Safe and reliable towing solutions', count: '8+ Guides' },
              { href: '/mattresses-bedding', title: 'Mattresses & Bedding', desc: 'Comfortable sleep solutions for your RV', count: '10+ Guides' },
              { href: '/outdoor-recreation', title: 'Outdoor Recreation', desc: 'Enhance your outdoor adventures', count: '15+ Guides' },
              { href: '/general-rv', title: 'General RV', desc: 'Comprehensive RV guides and resources', count: '22+ Guides' },
              { href: '/rv-covers-protection', title: 'RV Covers & Protection', desc: 'Protect your RV from the elements', count: '12+ Guides' },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center category-button"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {getCategoryIconForSection(cat.title)}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{cat.desc}</p>
                <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {cat.count}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose RV & Camping Gear Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just reviewers - we're RV enthusiasts who understand your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Expert Reviews',
                desc: 'Professional RV technicians and camping experts review every product'
              },
              {
                icon: '💰',
                title: 'Best Deals',
                desc: 'Exclusive Amazon deals and discounts on top-rated RV gear'
              },
              {
                icon: '🛠️',
                title: 'Installation Guides',
                desc: 'Step-by-step installation guides with professional tips'
              },
              {
                icon: '📱',
                title: 'Mobile Optimized',
                desc: 'Access our guides anywhere, anytime on any device'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated with the Latest RV Gear
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert reviews, exclusive deals, and installation tips delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm mt-4 opacity-80">
            Join 10,000+ RV owners who trust our recommendations
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Upgrade Your RV Experience?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Browse our complete collection of 100+ expert guides and find the perfect gear for your next adventure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/articles"
              className="bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Browse All Guides
            </Link>
            <Link
              href="/rv-accessories"
              className="border-2 border-blue-600 text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Start with RV Accessories
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}