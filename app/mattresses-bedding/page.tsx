// app/mattresses-bedding/page.tsx
import CategoryLayout from '@/components/CategoryLayout';

export default function MattressesBeddingPage() {
  const products = [
    {
      name: "Zinus 6 Inch Green Tea Memory Foam RV Mattress",
      url: "https://amzn.to/4nylcvo",
      badge: "Best Seller",
      price: "$89.99",
      description: "CertiPUR-US certified memory foam with green tea extract, perfect for RV short queen beds"
    },
    {
      name: "Linenspa 8 Inch Memory Foam and Innerspring Hybrid RV Mattress",
      url: "https://amzn.to/4pjACVF",
      badge: "Top Rated",
      price: "$149.99",
      description: "Hybrid mattress combining memory foam comfort with innerspring support for RVs"
    },
    {
      name: "LUCID 4 Inch Memory Foam RV Mattress Topper",
      url: "https://amzn.to/3IaPMfu",
      badge: "Best Value",
      price: "$49.99",
      description: "Memory foam topper to enhance existing RV mattress comfort and support"
    },
    {
      name: "Sleep Innovations 4 Inch Memory Foam RV Mattress Topper",
      url: "https://amzn.to/46hSfNb",
      badge: "Top Pick",
      price: "$39.99",
      description: "Memory foam topper with cooling gel for temperature regulation and added comfort"
    },
    {
      name: "Zinus 8 Inch Memory Foam RV Mattress",
      url: "https://amzn.to/48ftFyW",
      badge: "Editor's Choice",
      price: "$119.99",
      description: "Multiple foam layers with green tea and charcoal infusion for enhanced comfort and support"
    },
    {
      name: "Linenspa 6 Inch Memory Foam RV Mattress",
      url: "https://amzn.to/4meC1uc",
      badge: "Best Seller",
      price: "$79.99",
      description: "CertiPUR-US certified memory foam mattress with bamboo charcoal infusion for odor control"
    },
    {
      name: "LUCID 2 Inch Memory Foam RV Mattress Topper",
      url: "https://amzn.to/4god127",
      badge: "Top Pick",
      price: "$29.99",
      description: "Thin memory foam topper for subtle comfort enhancement without changing mattress height"
    },
    {
      name: "Sleep Innovations 2 Inch Memory Foam RV Mattress Topper",
      url: "https://amzn.to/463jLz5",
      badge: "Best Value",
      price: "$24.99",
      description: "Affordable memory foam topper with cooling gel for improved sleep comfort"
    },
    {
      name: "Zinus 4 Inch Memory Foam RV Mattress Topper",
      url: "https://amzn.to/4nx7oRK",
      badge: "Editor's Choice",
      price: "$34.99",
      description: "Medium-thickness memory foam topper with green tea extract for natural odor control"
    }
  ];

  return (
    <CategoryLayout
      title="Mattresses & Bedding"
      description="Comfortable sleep solutions for your RV. Expert reviews, top-rated products, and best Amazon deals for restful nights on the road."
      products={products}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🛏️ Sleep Better on the Road</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          From memory foam mattresses and cooling toppers to complete bedding sets and mattress protectors, discover the top-rated sleep solutions that RV owners trust. Our expert-curated selection features the best-selling products from leading brands like Zinus, LUCID, Milliard, and Classic Brands.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">🛏️ Memory Foam Mattresses</h3>
            <p className="text-gray-600">CertiPUR-US certified memory foam mattresses designed specifically for RV bed dimensions</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-800">❄️ Cooling Toppers</h3>
            <p className="text-gray-600">Gel-infused and ventilated toppers for temperature regulation and added comfort</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-orange-800">🛌 Bedding & Protection</h3>
            <p className="text-gray-600">Complete bedding sets, mattress protectors, and accessories for RV sleep comfort</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Why Choose Our Mattress Recommendations?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">RV-Specific Sizing</h4>
                <p className="text-gray-600 text-sm">Designed to fit standard RV bed dimensions including short queen and RV twin sizes</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">CertiPUR-US Certified</h4>
                <p className="text-gray-600 text-sm">Safe, non-toxic materials that meet strict standards for indoor air quality</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Easy Installation</h4>
                <p className="text-gray-600 text-sm">Lightweight and compressible for easy transport and setup in your RV</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Durable Construction</h4>
                <p className="text-gray-600 text-sm">Built to withstand RV travel vibrations and frequent use without losing shape</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="/articles"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Sleep Guides →
        </a>
      </div>
    </CategoryLayout>
  );
}