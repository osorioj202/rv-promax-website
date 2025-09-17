// src/components/CategoryLayout.tsx
import Link from 'next/link';
import ProductImage from './ProductImage';

export default function CategoryLayout({ 
  title, 
  description, 
  products, 
  children 
}: { 
  title: string;
  description: string;
  products: Array<{
    name: string;
    url: string;
    badge: string;
    price?: string;
    description?: string;
    image?: string;
  }>;
  children?: React.ReactNode;
}) {
  // Extraer la categoría del título para usar en ProductImage
  const getCategoryFromTitle = (title: string) => {
    return title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };
  
  const category = getCategoryFromTitle(title);
  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="category-page-title">{title}</h1>
      <p className="category-page-description">
        {description}
      </p>

      {/* Recommended Products */}
      <section className="bg-white rounded-lg p-8 shadow mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">🛒 Top Amazon Products</h2>
        <p className="text-center text-gray-600 mb-8">
          <strong>Our experts recommend these top-rated products:</strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div key={i} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              {/* Product Image */}
              {product.image && (
                <div className="relative">
                  <ProductImage
                    productName={product.name}
                    category={category}
                    className="w-full h-48 object-cover"
                    priority={i < 3} // First 3 images load with priority
                    imagePath={product.image}
                  />
                </div>
              )}
              
              <div className="p-4">
                <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded mb-2">
                  {product.badge}
                </span>
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 line-clamp-2 mb-2">
                  {product.name}
                </h3>
                {product.description && (
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                )}
                {product.price && (
                  <p className="text-green-600 font-medium">{product.price}</p>
                )}
              </div>
              <div className="bg-gray-50 px-4 py-3 text-center border-t">
                <Link
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 text-white text-sm py-1.5 px-4 rounded hover:bg-orange-600 transition"
                >
                  View on Amazon →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles & Guides */}
      {children && (
        <section className="mt-12">
          {children}
        </section>
      )}

      <div className="mt-16 border-t pt-8 text-sm text-gray-600 text-center">
        <p>
          <strong>Affiliate Disclosure:</strong> We earn a commission when you purchase through our links at no additional cost to you.
        </p>
      </div>
    </main>
  );
}