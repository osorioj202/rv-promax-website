'use client';

import { trackFilterChange } from '@/components/DiscoveryAnalytics';

interface DiscoveryHeroProps {
  filter: 'all' | 'tutorial' | 'list' | 'comparison';
  sortBy: 'recent' | 'trending';
  onFilterChange: (filter: 'all' | 'tutorial' | 'list' | 'comparison') => void;
  onSortChange: (sort: 'recent' | 'trending') => void;
}

export default function DiscoveryHero({
  filter,
  sortBy,
  onFilterChange,
  onSortChange
}: DiscoveryHeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            🔥 Trending Content
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4">
            Discovery Hub
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4">
            Trending RV tips, viral comparisons, and popular tutorials
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
          <div className="flex flex-wrap justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-2">
            <button
              onClick={() => {
                onFilterChange('all');
                trackFilterChange('type', 'all');
              }}
              className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-white text-blue-600'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              All
            </button>
            <button
              onClick={() => {
                onFilterChange('tutorial');
                trackFilterChange('type', 'tutorial');
              }}
              className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition-all ${
                filter === 'tutorial'
                  ? 'bg-white text-blue-600'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <span className="hidden sm:inline">📚 </span>Tutorials
            </button>
            <button
              onClick={() => {
                onFilterChange('list');
                trackFilterChange('type', 'list');
              }}
              className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition-all ${
                filter === 'list'
                  ? 'bg-white text-blue-600'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <span className="hidden sm:inline">📋 </span>Lists
            </button>
            <button
              onClick={() => {
                onFilterChange('comparison');
                trackFilterChange('type', 'comparison');
              }}
              className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition-all ${
                filter === 'comparison'
                  ? 'bg-white text-blue-600'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <span className="hidden sm:inline">⚡ </span>Compare
            </button>
          </div>

          <div className="flex justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-2">
            <button
              onClick={() => {
                onSortChange('recent');
                trackFilterChange('sort', 'recent');
              }}
              className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition-all ${
                sortBy === 'recent'
                  ? 'bg-white text-blue-600'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              🕒 Recent
            </button>
            <button
              onClick={() => {
                onSortChange('trending');
                trackFilterChange('sort', 'trending');
              }}
              className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition-all ${
                sortBy === 'trending'
                  ? 'bg-white text-blue-600'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              🔥 Trending
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

