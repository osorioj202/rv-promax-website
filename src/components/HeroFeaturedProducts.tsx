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

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                {/* Product Image */}
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      quality={85}
                    />
                  </div>
                  
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {product.discount}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="text-center">
                  {/* Badge */}
                  <div className={`inline-block ${product.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full mb-3`}>
                    {product.badge}
                  </div>

                  {/* Product Name */}
                  <h4 className="text-white font-semibold text-sm mb-2 line-clamp-2 leading-tight">
                    {product.name}
                  </h4>

                  {/* Category */}
                  <p className="text-white/60 text-xs mb-3">
                    {product.category}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-white/60 text-sm line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Amazon Button */}
                  <Link
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    View on Amazon →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
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
      </div>

      {/* Dots Indicator */}
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
    </div>
  );
}
