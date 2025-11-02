// app/articles/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import articles from '@/lib/articles-comprehensive.json';
import ProductCard from '@/components/ProductCard';
import AdSenseArticle from '@/components/AdSense';
import '../../../src/lib/styles/article-structure.css';

// Generar metadata dinámica para cada artículo
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: article.title,
    description: article.metaDescription || `Expert guide: ${article.title}. Complete buying guide for RV owners and camping enthusiasts.`,
    keywords: `${article.targetKeyword}, RV accessories, camping gear, ${article.title.toLowerCase()}`,
    openGraph: {
      title: article.title,
      description: article.metaDescription || `Expert guide: ${article.title}. Complete buying guide for RV owners and camping enthusiasts.`,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.lastUpdated,
      authors: ['RV & Camping Gear Pro Team'],
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDescription || `Expert guide: ${article.title}. Complete buying guide for RV owners and camping enthusiasts.`,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `https://www.rv-promax.com/articles/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Schema.org structured data para el artículo
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "image": "/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": "RV & Camping Gear Pro"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RV & Camping Gear Pro",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": article.publishedAt,
    "dateModified": article.lastUpdated,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.rv-promax.com/articles/${slug}`
    },
    "keywords": article.targetKeyword,
    "wordCount": article.wordCount,
    "articleSection": article.category
  };

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />

      {/* Hero Image - Full Width */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gradient-to-br from-blue-600 to-teal-600">
        {(article as any).featuredImage && (
          <Image
            src={(article as any).featuredImage}
            alt={article.title}
            fill
            className="object-cover opacity-90"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Article Header on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-600 rounded-full text-sm font-bold text-white">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-white/90">
              {article.wordCount && (
                <>
                  <span>{article.wordCount.toLocaleString()} words</span>
                  <span className="hidden sm:inline">•</span>
                </>
              )}
              {article.monthlySearches && (
                <>
                  <span>{article.monthlySearches.toLocaleString()} monthly searches</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span className="mx-2">→</span>
          <a href="/articles" className="hover:text-blue-600">Articles</a>
          <span className="mx-2">→</span>
          <span className="text-gray-700">{article.title}</span>
        </nav>

        {/* Article content */}
        <article
          className="prose prose-lg prose-blue mx-auto max-w-none article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* AdSense Banner después del contenido del artículo */}
        {/* Descomenta cuando tengas tu código de AdSense */}
        {/* <AdSenseArticle 
          client="ca-pub-YOUR_PUBLISHER_ID"
          slot="YOUR_ARTICLE_AD_SLOT_ID"
        /> */}

        {/* Products section */}
        {article.products && article.products.length > 0 && (
          <section className="mt-16 bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow border">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
              🛒 Expert-Recommended Products on Amazon
            </h2>
            <p className="text-center text-gray-600 mb-8">
              <strong>Our RV experts have tested and approved these top-rated products:</strong>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {article.products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
            
            <div className="text-center mt-8 text-sm text-gray-500">
              <p>
                <strong>💡 Expert Promise:</strong> These recommendations are based on real-world testing by our team of RVIA-certified technicians.
              </p>
            </div>
          </section>
        )}

        {/* AdSense Banner después de los productos */}
        {/* Descomenta cuando tengas tu código de AdSense */}
        {/* <AdSenseArticle 
          client="ca-pub-YOUR_PUBLISHER_ID"
          slot="YOUR_PRODUCTS_AD_SLOT_ID"
        /> */}

        {/* Related articles section */}
        <section className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles
              .filter(a => a.slug !== slug && a.category === article.category)
              .slice(0, 4)
              .map((relatedArticle) => (
                <a
                  key={relatedArticle.slug}
                  href={`/articles/${relatedArticle.slug}`}
                  className="block p-4 border rounded-lg hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {relatedArticle.metaDescription}
                  </p>
                </a>
              ))}
          </div>
        </section>

        {/* Affiliate disclosure */}
        <div className="mt-16 border-t pt-8 text-sm text-gray-600">
          <p>
            <strong>Affiliate Disclosure:</strong> We earn a commission when you purchase through our links at no additional cost to you. 
            This helps us continue providing expert content and reviews.
          </p>
        </div>
      </main>
    </>
  );
}