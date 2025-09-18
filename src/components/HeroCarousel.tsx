'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroImage {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const heroImages: HeroImage[] = [
  {
    src: '/images/hero/hero-1.png',
    alt: 'RV in mountain landscape',
    title: 'Adventure Awaits',
    subtitle: 'Explore the great outdoors with confidence'
  },
  {
    src: '/images/hero/hero-2.png',
    alt: 'RV at beach destination',
    title: 'Beach Getaways',
    subtitle: 'Relax by the ocean in comfort'
  },
  {
    src: '/images/hero/hero-3.png',
    alt: 'RV camping community',
    title: 'Community Spirit',
    subtitle: 'Join thousands of RV enthusiasts'
  },
  {
    src: '/images/hero/hero-4.png',
    alt: 'Modern RV interior',
    title: 'Modern Comfort',
    subtitle: 'Experience luxury on the road'
  },
  {
    src: '/images/hero/hero-5.png',
    alt: 'Family RV adventure',
    title: 'Family Memories',
    subtitle: 'Create unforgettable moments together'
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    goToSlide(currentIndex === heroImages.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex === 0 ? heroImages.length - 1 : currentIndex - 1);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
              quality={85}
            />
            
            {/* Overlay for text readability - optimized for square images */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 via-blue-700/85 to-teal-600/85"></div>
            
            {/* Image-specific content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white z-10 px-4">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-in">
                  {image.title}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl opacity-0 animate-fade-in-delay max-w-2xl mx-auto">
                  {image.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20 group"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20 group"
        aria-label="Next image"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
