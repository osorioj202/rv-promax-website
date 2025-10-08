import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discovery Hub - Trending RV Content | RV-Pro Max',
  description: 'Discover trending RV tutorials, top product lists, and viral comparisons. Fresh content updated daily for RV enthusiasts.',
  alternates: {
    canonical: 'https://www.rv-promax.com/discovery',
  },
  openGraph: {
    title: 'Discovery Hub - Trending RV Content | RV-Pro Max',
    description: 'Discover trending RV tutorials, top product lists, and viral comparisons. Fresh content updated daily for RV enthusiasts.',
    url: 'https://www.rv-promax.com/discovery',
    siteName: 'RV-Pro Max',
    images: [
      {
        url: 'https://www.rv-promax.com/images/hero/hero-1.png',
        width: 1200,
        height: 630,
        alt: 'RV-Pro Max Discovery Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discovery Hub - Trending RV Content | RV-Pro Max',
    description: 'Discover trending RV tutorials, top product lists, and viral comparisons. Fresh content updated daily for RV enthusiasts.',
    images: ['https://www.rv-promax.com/images/hero/hero-1.png'],
  },
};

export default function DiscoveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Discovery Hub - Trending RV Content",
            "description": "Discover trending RV tutorials, top product lists, and viral comparisons. Fresh content updated daily for RV enthusiasts.",
            "url": "https://www.rv-promax.com/discovery",
            "publisher": {
              "@type": "Organization",
              "name": "RV-Pro Max",
              "url": "https://www.rv-promax.com"
            },
            "mainEntity": {
              "@type": "ItemList",
              "name": "Discovery Articles",
              "description": "Trending RV content including tutorials, lists, and comparisons"
            }
          })
        }}
      />
      {children}
    </>
  );
}



