'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface HeroImage {
  src: string;
  alt: string;
}

const heroImages: HeroImage[] = [
  {
    src: '/images/hero/hero-1.png',
    alt: 'RV in mountain landscape'
  },
  {
    src: '/images/hero/hero-2.png',
    alt: 'RV at beach destination'
  },
  {
    src: '/images/hero/hero-3.png',
    alt: 'RV camping community'
  },
  {
    src: '/images/hero/hero-4.png',
    alt: 'Modern RV interior'
  },
  {
    src: '/images/hero/hero-5.png',
    alt: 'Family RV adventure'
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🚀 OPTIMIZED: Memoized auto-rotate function
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  // Auto-rotate every 5 seconds - optimized with useCallback
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);


  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
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
              sizes="100vw"
              loading={index === 0 ? "eager" : "lazy"}
            />
            
            {/* Overlay for text readability - optimized for square images */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/80 to-teal-600/80"></div>
          </div>
        ))}
      </div>

    </div>
  );
}
