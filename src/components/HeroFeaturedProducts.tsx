'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedProduct {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  badge: string;
  badgeColor: string;
  image: string;
  amazonUrl: string;
  category: string;
  discount?: string;
}

const featuredProducts: FeaturedProduct[] = [
  {
    id: '1',
    name: 'Zinus 6 Inch Green Tea Memory Foam RV Mattress',
    price: '$89.99',
    originalPrice: '$119.99',
    badge: 'Best Seller',
    badgeColor: 'bg-orange-500',
    image: '/images/hero-products/featured-1.png',
    amazonUrl: 'https://amzn.to/42xPV3n',
    category: 'Mattresses & Bedding',
    discount: '25% OFF'
  },
  {
    id: '2',
    name: 'Renogy 100W 12V Monocrystalline Solar Panel',
    price: '$99.99',
    originalPrice: '$129.99',
    badge: 'Top Rated',
    badgeColor: 'bg-blue-500',
    image: '/images/hero-products/featured-2.png',
    amazonUrl: 'https://amzn.to/4pvjr3y',
    category: 'Electrical & Electronics',
    discount: '23% OFF'
  },
  {
    id: '3',
    name: 'Coleman RoadTrip 285 Portable Propane Grill',
    price: '$149.99',
    originalPrice: '$179.99',
    badge: 'Editor\'s Choice',
    badgeColor: 'bg-green-500',
    image: '/images/hero-products/featured-3.png',
    amazonUrl: 'https://amzn.to/4nGAs9n',
    category: 'Outdoor Recreation',
    discount: '17% OFF'
  },
  {
    id: '4',
    name: 'Curt 17000 Class V Trailer Hitch',
    price: '$189.99',
    originalPrice: '$229.99',
    badge: 'Professional',
    badgeColor: 'bg-purple-500',
    image: '/images/hero-products/featured-4.png',
    amazonUrl: 'https://amzn.to/3I3cq9C',
    category: 'Towing & Hitches',
    discount: '17% OFF'
  },
  {
    id: '5',
    name: 'Berkey Travel Water Filter System',
    price: '$299.99',
    originalPrice: '$349.99',
    badge: 'Premium',
    badgeColor: 'bg-teal-500',
    image: '/images/hero-products/featured-5.png',
    amazonUrl: 'https://amzn.to/3VU44Ej',
    category: 'General RV',
    discount: '14% OFF'
  }
];

export default function HeroFeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(3);

  // Calculate visible products based on screen size
  useEffect(() => {
    const updateVisibleProducts = () => {
      const width = window.innerWidth;
      if (width < 640) { // Mobile
        setVisibleProducts(1);
      } else if (width < 768) { // Small tablet
        setVisibleProducts(2);
      } else if (width < 1024) { // Tablet
        setVisibleProducts(3);
      } else if (width < 1280) { // Desktop
        setVisibleProducts(4);
      } else { // Large desktop
        setVisibleProducts(5);
      }
    };

    updateVisibleProducts();
    window.addEventListener('resize', updateVisibleProducts);
    return () => window.removeEventListener('resize', updateVisibleProducts);
  }, []);

  // Reset index when all products are visible
  useEffect(() => {
    if (featuredProducts.length <= visibleProducts) {
      setCurrentIndex(0);
    }
  }, [visibleProducts]);

  // Auto-rotate every 8 seconds (only if there are more products than visible slots)
  useEffect(() => {
    // Don't auto-rotate if all products are visible
    if (featuredProducts.length <= visibleProducts) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [visibleProducts]);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, featuredProducts.length - visibleProducts);
    if (currentIndex >= maxIndex) {
      goToSlide(0);
    } else {
      goToSlide(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, featuredProducts.length - visibleProducts);
    if (currentIndex <= 0) {
      goToSlide(maxIndex);
    } else {
      goToSlide(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          🔥 Featured Products
        </h3>
        <p className="text-white/80 text-sm md:text-base">
          Top-rated products with exclusive discounts
        </p>
      </div>

      {/* Products Carousel */}
      <div className="relative overflow-hidden">
        {/* Products Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)` }}
        >
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-shrink-0 px-2">
              <div className="relative bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border-2 border-white/40 hover:border-yellow-400 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,215,0,0.5)] transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group overflow-hidden">
                
                {/* Borde superior con gradiente animado */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                
                {/* Efecto de brillo diagonal */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                
                {/* Product Image */}
                <div className="relative mb-4">
                  {/* Fondo circular con gradiente */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-xl"></div>
                  </div>
                  
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto relative z-10">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-2xl group-hover:scale-125 group-hover:rotate-3 transition-all duration-500"
                      loading="lazy"
                      quality={75}
                      sizes="(max-width: 640px) 112px, 128px"
                    />
                  </div>
                  
                  {/* Discount Badge Mejorado */}
                  {product.discount && (
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 text-white text-xs font-extrabold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg animate-pulse ring-2 ring-red-400/50 flex items-center gap-1 z-20">
                      <span>🔥</span>
                      {product.discount}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="text-center relative z-10">
                  {/* Badge con Gradiente Premium */}
                  <div className={`inline-flex items-center gap-1 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3 shadow-lg backdrop-blur-sm ${
                    product.badge === 'Best Seller' ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-orange-500/50' :
                    product.badge === 'Top Rated' ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 shadow-blue-500/50' :
                    product.badge === "Editor's Choice" ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 shadow-green-500/50' :
                    product.badge === 'Professional' ? 'bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 shadow-purple-500/50' :
                    'bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 shadow-teal-500/50'
                  }`}>
                    {product.badge === 'Best Seller' && '🏆'}
                    {product.badge === 'Top Rated' && '⭐'}
                    {product.badge === "Editor's Choice" && '✨'}
                    {product.badge === 'Professional' && '💎'}
                    {product.badge === 'Premium' && '👑'}
                    <span>{product.badge}</span>
                  </div>

                  {/* Product Name */}
                  <h4 className="text-gray-900 font-bold text-sm sm:text-base mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h4>

                  {/* Category Mejorada */}
                  <div className="inline-block text-gray-700 text-xs sm:text-sm font-semibold bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/40 mb-3 shadow-sm">
                    {product.category}
                  </div>

                  {/* Price con Gradiente */}
                  <div className="mb-4">
                    <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                      {product.price}
                    </div>
                    {product.originalPrice && (
                      <div className="text-white/90 text-sm sm:text-base line-through decoration-2 decoration-red-400 mt-1">
                        {product.originalPrice}
                      </div>
                    )}
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center items-center gap-1 mb-4">
                    <div className="flex text-yellow-400 text-sm sm:text-base">
                      {'⭐'.repeat(5)}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-700 font-semibold ml-1">(4.8)</span>
                  </div>

                  {/* Amazon Button Premium */}
                  <Link
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block w-full bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 hover:from-orange-600 hover:via-yellow-500 hover:to-orange-500 text-white font-black py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 text-xs sm:text-sm shadow-[0_10px_30px_rgba(251,146,60,0.5)] hover:shadow-[0_15px_40px_rgba(251,146,60,0.7)] overflow-hidden group/btn"
                  >
                    {/* Efecto de brillo en el botón */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                    
                    <span className="relative flex items-center justify-center gap-2">
                      <span>View on Amazon</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Only show if there are more products than visible slots */}
        {featuredProducts.length > visibleProducts && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 z-10 group"
              aria-label="Previous product"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 z-10 group"
              aria-label="Next product"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator - Only show if there are more products than visible slots */}
      {featuredProducts.length > visibleProducts && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.max(1, featuredProducts.length - visibleProducts + 1) }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
