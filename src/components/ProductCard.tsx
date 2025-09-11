// src/components/ProductCard.tsx
import Link from 'next/link';

interface Product {
  name: string;
  url: string;
  badge: string;
  price?: string;
  description?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition group bg-white">
      <div className="p-4">
        <span className={`inline-block text-white text-xs px-2 py-1 rounded mb-3 font-medium ${
          product.badge === 'Top Pick' ? 'bg-green-500' :
          product.badge === 'Premium' ? 'bg-purple-500' :
          product.badge === 'Best Value' ? 'bg-blue-500' :
          'bg-orange-500'
        }`}>
          {product.badge}
        </span>
        
        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {product.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            {product.description}
          </p>
        )}
        
        {product.price && (
          <p className="text-green-600 font-semibold text-lg mb-3">
            {product.price}
          </p>
        )}
      </div>
      
      <div className="bg-gray-50 px-4 py-3 text-center border-t">
        <Link
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold w-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          🛒 View on Amazon →
        </Link>
      </div>
    </div>
  );
}