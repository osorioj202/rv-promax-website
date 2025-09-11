// app/mattresses-bedding/page.tsx
import CategoryLayout from '@/components/CategoryLayout';

export default function MattressesBeddingPage() {
  const products = [
    {
      name: "Zinus 6 Inch Green Tea Memory Foam RV Mattress",
      url: "https://www.amazon.com/dp/B00Q7EPSHI?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Seller",
      price: "$89.99",
      description: "CertiPUR-US certified memory foam with green tea extract, perfect for RV short queen beds"
    },
    {
      name: "LUCID 4 Inch Gel Memory Foam Mattress Topper",
      url: "https://www.amazon.com/dp/B01N6PRX0A?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Value",
      price: "$49.99",
      description: "Cooling gel-infused memory foam topper for temperature regulation and added comfort"
    },
    {
      name: "Milliard Tri-Fold Foam Folding Mattress",
      url: "https://www.amazon.com/dp/B00V3QXJ6O?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Pick",
      price: "$79.99",
      description: "Tri-fold design for versatile use and easy storage, ideal for RV beds and camping"
    },
    {
      name: "Classic Brands Cool Gel Ventilated Memory Foam Mattress",
      url: "https://www.amazon.com/dp/B00EINBSEW?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Rated",
      price: "$149.99",
      description: "Ventilated gel memory foam for breathability and pressure relief, fits many RV bed sizes"
    },
    {
      name: "Zinus Ultima Comfort Memory Foam Mattress (8-Inch)",
      url: "https://www.amazon.com/dp/B00Q7EPSHI?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Editor's Choice",
      price: "$199.99",
      description: "Multiple foam layers with green tea and charcoal infusion for enhanced comfort and support"
    },
    {
      name: "Sleep Innovations 4-Inch Dual Layer Mattress Topper",
      url: "https://www.amazon.com/dp/B00EINBSEW?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Value",
      price: "$69.99",
      description: "Memory foam and fiberfill layers for softness and support, adds cushioning to firm mattresses"
    },
    {
      name: "Milliard Memory Foam RV Mattress (6-Inch)",
      url: "https://www.amazon.com/dp/B00V3QXJ6O?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Professional",
      price: "$129.99",
      description: "High-density memory foam designed specifically for RV beds with removable washable cover"
    },
    {
      name: "Bedsure RV Bedding Set with Sheets and Pillowcases",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Complete Set",
      price: "$39.99",
      description: "Complete RV bedding set including sheets and pillowcases designed for RV bed sizes"
    },
    {
      name: "SafeRest Premium Hypoallergenic Mattress Protector",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Essential",
      price: "$24.99",
      description: "Waterproof and breathable mattress protector designed for RV use, prevents moisture damage"
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