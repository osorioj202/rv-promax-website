// app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Header from '../src/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'RV-Pro Max - Expert RV & Camping Gear Reviews | Best Amazon Deals 2025',
    template: '%s | RV-Pro Max'
  },
  description: 'Discover the best RV accessories, camping gear, and outdoor equipment with expert reviews. Trusted by 60K+ RV owners. Complete buying guides, installation tips & exclusive Amazon deals.',
  keywords: 'RV accessories, camping gear, RV reviews, amazon RV products, RV maintenance, camping equipment, RV accessories 2025, best RV gear, motorhome accessories, travel trailer parts, RV covers, camping supplies',
  authors: [{ name: 'RV-Pro Max Team', email: 'info@shonexxa.com' }],
  creator: 'RV-Pro Max',
  publisher: 'RV-Pro Max',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rv-promax.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rv-promax.com',
    title: 'RV-Pro Max - Expert RV & Camping Gear Reviews | Best Amazon Deals 2025',
    description: 'Discover the best RV accessories, camping gear, and outdoor equipment with expert reviews. Trusted by 60K+ RV owners. Complete buying guides, installation tips & exclusive Amazon deals.',
    siteName: 'RV-Pro Max',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RV & Camping Gear Pro - Expert Reviews & Best Amazon Deals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RV-Pro Max - Expert RV & Camping Gear Reviews | Best Amazon Deals 2025',
    description: 'Discover the best RV accessories, camping gear, and outdoor equipment with expert reviews. Trusted by 60K+ RV owners.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // 🔁 Cambia por tu código de verificación
    yandex: 'your-yandex-verification-code', // 🔁 Cambia por tu código de verificación
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense - Descomenta cuando tengas tu código */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID" crossOrigin="anonymous"></script> */}
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "RV & Camping Gear Pro",
              "description": "Expert RV accessories and camping gear reviews. Trusted by 60K+ RV owners.",
              "url": "https://rv-promax.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://rv-promax.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "RV & Camping Gear Pro",
                "url": "https://rv-promax.com"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NWNG00LNYB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NWNG00LNYB');
          `}
        </Script>
      </body>
    </html>
  );
}


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 text-center text-sm">
      <div className="max-w-4xl mx-auto">
        <p>&copy; 2025 RV & Camping Gear Pro. All rights reserved.</p>
        <p className="mt-2 text-gray-300">
          This site contains affiliate links. We earn a commission when you purchase through our links at no additional cost to you.
        </p>
        
        {/* Contact Information */}
        <div className="mt-4 text-gray-300">
          <p>Contact us: <a href="mailto:info@shonexxa.com" className="text-blue-400 hover:text-blue-300 transition">info@shonexxa.com</a></p>
        </div>
        
        {/* Footer Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-gray-300">
          <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
          <Link href="/affiliate-disclosure" className="hover:text-white transition">Affiliate Disclosure</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>
        
        {/* Google AdSense Footer Ad - Descomenta cuando tengas tu código */}
        {/* <div className="mt-6">
          <ins className="adsbygoogle"
               style={{display: 'block'}}
               data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
               data-ad-slot="YOUR_AD_SLOT_ID"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div> */}
      </div>
    </footer>
  );
}

function Link({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`text-gray-700 hover:text-blue-600 transition ${className}`}
    >
      {children}
    </a>
  );
}
