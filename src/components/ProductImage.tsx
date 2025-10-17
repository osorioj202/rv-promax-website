'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ProductImageProps {
  productName: string;
  category: string;
  className?: string;
  priority?: boolean;
  imagePath?: string; // Ruta directa a la imagen si está disponible
}

export default function ProductImage({ 
  productName, 
  category, 
  className = "w-full h-48 object-cover rounded-lg",
  priority = false,
  imagePath: providedImagePath
}: ProductImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Convertir nombre del producto a slug para el archivo
  const getImageSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[°]/g, '') // Eliminar símbolos de grado primero
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Usar la ruta proporcionada o generar una desde el nombre
  const imagePath = providedImagePath || `/images/products/${category}/${getImageSlug(productName)}.png`;
  const fallbackPath = '/images/placeholders/product-placeholder.png';

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}
      
      <Image
        src={imageError ? fallbackPath : imagePath}
        alt={productName}
        width={400}
        height={400}
        className={className}
        priority={priority}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading={priority ? "eager" : "lazy"}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  );
}
