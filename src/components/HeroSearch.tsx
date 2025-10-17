'use client';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';

interface SearchSuggestion {
  id: string;
  title: string;
  category: string;
  url: string;
  type: 'product' | 'category' | 'article';
}

const searchSuggestions: SearchSuggestion[] = [
  // Products
  { id: '1', title: 'Zinus Memory Foam RV Mattress', category: 'Mattresses & Bedding', url: '/mattresses-bedding', type: 'product' },
  { id: '2', title: 'Renogy Solar Panel 100W', category: 'Electrical & Electronics', url: '/electrical-electronics', type: 'product' },
  { id: '3', title: 'Coleman Portable Grill', category: 'Outdoor Recreation', url: '/outdoor-recreation', type: 'product' },
  { id: '4', title: 'Curt Trailer Hitch', category: 'Towing & Hitches', url: '/towing-hitches', type: 'product' },
  { id: '5', title: 'Berkey Water Filter', category: 'General RV', url: '/general-rv', type: 'product' },
  
  // Categories
  { id: '6', title: 'RV Accessories', category: 'Category', url: '/rv-accessories', type: 'category' },
  { id: '7', title: 'Camping Gear', category: 'Category', url: '/camping-gear', type: 'category' },
  { id: '8', title: 'Maintenance & Repair', category: 'Category', url: '/maintenance-repair', type: 'category' },
  { id: '9', title: 'Furniture & Interior', category: 'Category', url: '/furniture-interior', type: 'category' },
  { id: '10', title: 'RV Covers & Protection', category: 'Category', url: '/rv-covers-protection', type: 'category' },
  
  // Articles
  { id: '11', title: 'Best RV Mattresses 2024', category: 'Article', url: '/articles/best-rv-mattresses-2024', type: 'article' },
  { id: '12', title: 'Solar Panel Installation Guide', category: 'Article', url: '/articles/solar-panel-installation-guide', type: 'article' },
  { id: '13', title: 'RV Water System Setup', category: 'Article', url: '/articles/rv-water-system-setup', type: 'article' },
];

export default function HeroSearch() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 🚀 OPTIMIZED: Debounced search with memoization
  const debouncedQuery = useMemo(() => {
    const timeoutId = setTimeout(() => query, 150);
    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length > 1) {
        const filtered = searchSuggestions.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 8);
        setSuggestions(filtered);
        setIsOpen(true);
      } else {
        setSuggestions([]);
        setIsOpen(false);
      }
      setSelectedIndex(-1);
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [query]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSuggestionClick(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  // 🚀 OPTIMIZED: Memoized functions
  const handleSuggestionClick = useCallback((suggestion: SearchSuggestion) => {
    setQuery(suggestion.title);
    setIsOpen(false);
    // Navigate to the suggestion URL
    window.location.href = suggestion.url;
  }, []);

  const getSuggestionIcon = useCallback((type: string) => {
    switch (type) {
      case 'product': return '🛍️';
      case 'category': return '📂';
      case 'article': return '📄';
      default: return '🔍';
    }
  }, []);

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto mb-6 md:mb-8 px-4 md:px-0">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
          <svg className="h-4 w-4 md:h-5 md:w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 1 && setIsOpen(true)}
          placeholder="Search products, categories..."
          className="w-full pl-10 md:pl-12 pr-10 md:pr-4 py-3 md:py-4 text-base md:text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute inset-y-0 right-0 pr-3 md:pr-4 flex items-center text-white/60 hover:text-white transition-colors"
          >
            <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Suggestions */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden z-50 max-h-80 overflow-y-auto">
          <div className="py-1 md:py-2">
            {suggestions.map((suggestion, index) => (
              <Link
                key={suggestion.id}
                href={suggestion.url}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`flex items-center px-3 md:px-4 py-2 md:py-3 hover:bg-white/20 transition-colors ${
                  index === selectedIndex ? 'bg-white/20' : ''
                }`}
              >
                <div className="flex-shrink-0 mr-2 md:mr-3 text-base md:text-lg">
                  {getSuggestionIcon(suggestion.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-800 font-medium truncate text-sm md:text-base">
                    {suggestion.title}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm">
                    {suggestion.category}
                  </div>
                </div>
                <div className="flex-shrink-0 ml-2">
                  <svg className="h-3 w-3 md:h-4 md:w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Footer - Hidden on mobile */}
          <div className="hidden md:block px-4 py-2 bg-gray-50/50 border-t border-gray-200/50">
            <div className="text-xs text-gray-500 text-center">
              Press <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs">Enter</kbd> to search
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
