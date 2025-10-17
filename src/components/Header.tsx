'use client';

import { useState } from 'react';

// 🚀 ACCESSIBILITY: Improved contrast for better readability
function Link({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`text-gray-800 hover:text-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm ${className}`}
    >
      {children}
    </a>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow px-6 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Top Row - Logo + Hamburger */}
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo SVG */}
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 40 40" className="w-8 h-8 text-white">
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
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-600 group-hover:text-teal-600 transition-colors">RV-Pro Max</span>
              <span className="text-xs text-gray-500 -mt-1">Expert Reviews & Guides</span>
            </div>
          </Link>

          {/* 🚀 ACCESSIBILITY: Improved hamburger button with better contrast and touch area */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav className="hidden md:block mt-4">
          <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/articles">Articles</Link></li>
            <li>
              <Link href="/discovery" className="font-semibold text-orange-600 hover:text-orange-700">
                🔥 Discovery
              </Link>
            </li>
            <li><Link href="/general-rv">General RV</Link></li>
            <li><Link href="/rv-accessories">RV Accessories</Link></li>
            <li><Link href="/electrical-electronics">Electrical & Electronics</Link></li>
            <li><Link href="/camping-gear">Camping Gear</Link></li>
            <li><Link href="/maintenance-repair">Maintenance & Repair</Link></li>
            <li><Link href="/furniture-interior">Furniture & Interior</Link></li>
            <li><Link href="/towing-hitches">Towing Hitches</Link></li>
            <li><Link href="/mattresses-bedding">Mattresses & Bedding</Link></li>
            <li><Link href="/outdoor-recreation">Outdoor Recreation</Link></li>
            <li><Link href="/rv-covers-protection">RV Covers & Protection</Link></li>
          </ul>
        </nav>

        {/* Mobile Navigation - Dropdown */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 border-t border-gray-200 pt-4">
            <ul className="space-y-3">
              <li><Link href="/" className="block py-3 px-2 text-gray-800 hover:text-blue-700 transition min-h-[44px] flex items-center">Home</Link></li>
              <li><Link href="/articles" className="block py-3 px-2 text-gray-800 hover:text-blue-700 transition min-h-[44px] flex items-center">Articles</Link></li>
              <li><Link href="/discovery" className="block py-3 px-2 font-semibold text-orange-700 hover:text-orange-800 transition min-h-[44px] flex items-center">🔥 Discovery</Link></li>
              <li><Link href="/general-rv" className="block py-3 px-2 text-gray-800 hover:text-blue-700 transition min-h-[44px] flex items-center">General RV</Link></li>
              <li><Link href="/rv-accessories" className="block py-3 px-2 text-gray-800 hover:text-blue-700 transition min-h-[44px] flex items-center">RV Accessories</Link></li>
              <li><Link href="/electrical-electronics" className="block py-3 px-2 text-gray-800 hover:text-blue-700 transition min-h-[44px] flex items-center">Electrical & Electronics</Link></li>
              <li><Link href="/camping-gear" className="block py-3 px-2 text-gray-800 hover:text-blue-700 transition min-h-[44px] flex items-center">Camping Gear</Link></li>
              <li><Link href="/maintenance-repair" className="block py-3 px-2 text-gray-800 hover:text-blue-700 transition min-h-[44px] flex items-center">Maintenance & Repair</Link></li>
              <li><Link href="/furniture-interior" className="block py-3 px-2 text-gray-800 hover:text-blue-700 transition min-h-[44px] flex items-center">Furniture & Interior</Link></li>
              <li><Link href="/towing-hitches" className="block py-3 px-2 text-gray-800 hover:text-blue-700 transition min-h-[44px] flex items-center">Towing Hitches</Link></li>
              <li><Link href="/mattresses-bedding" className="block py-3 px-2 text-gray-800 hover:text-blue-700 transition min-h-[44px] flex items-center">Mattresses & Bedding</Link></li>
              <li><Link href="/outdoor-recreation" className="block py-3 px-2 text-gray-800 hover:text-blue-700 transition min-h-[44px] flex items-center">Outdoor Recreation</Link></li>
              <li><Link href="/rv-covers-protection" className="block py-3 px-2 text-gray-800 hover:text-blue-700 transition min-h-[44px] flex items-center">RV Covers & Protection</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
