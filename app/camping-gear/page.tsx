// app/camping-gear/page.tsx
import CategoryLayout from '@/components/CategoryLayout';

export default function CampingGearPage() {
  const products = [
    {
      name: "Coleman Sundome 4-Person Tent",
      url: "https://amzn.to/47HCmC6",
      badge: "Best Seller",
      price: "$89.99",
      description: "Weather-resistant tent with easy setup, perfect for family camping"
    },
    {
      name: "Coleman 30°F Mummy Sleeping Bag",
      url: "https://amzn.to/4gsmtSo",
      badge: "Top Rated",
      price: "$29.99",
      description: "Lightweight, compressible sleeping bag rated for 30°F temperatures"
    },
    {
      name: "Coleman Classic Propane Stove",
      url: "https://amzn.to/3JYVBNC",
      badge: "Best Seller",
      price: "$49.99",
      description: "Durable 2-burner propane stove perfect for camping"
    },
    {
      name: "Coleman LED Lantern with USB Charging",
      url: "https://amzn.to/4n4ps5Q",
      badge: "Top Rated",
      price: "$39.99",
      description: "Bright LED lantern with USB charging port for devices"
    },
    {
      name: "Coleman 2-Person Airbed",
      url: "https://amzn.to/4gixghG",
      badge: "Best Value",
      price: "$34.99",
      description: "Comfortable airbed with built-in pump for easy inflation"
    },
    {
      name: "Coleman 50-Quart Xtreme Cooler",
      url: "https://amzn.to/42uNbnk",
      badge: "Top Pick",
      price: "$79.99",
      description: "High-performance cooler that keeps ice for up to 5 days"
    },
    {
      name: "Coleman Folding Camping Chair",
      url: "https://amzn.to/4mZ6EES",
      badge: "Top Rated",
      price: "$24.99",
      description: "Comfortable folding chair with cup holder and side table"
    },
    {
      name: "Coleman Portable Camping Table",
      url: "https://amzn.to/4meG3CK",
      badge: "Best Seller",
      price: "$44.99",
      description: "Lightweight, portable table perfect for camping meals"
    },
    {
      name: "Coleman 4-Person Cabin Tent with Instant Setup",
      url: "https://amzn.to/4n9sHJq",
      badge: "Premium",
      price: "$129.99",
      description: "Instant setup tent with pre-attached poles for quick assembly"
    }
  ];

  return (
    <CategoryLayout
      title="Camping Gear"
      description="Essential camping equipment and outdoor gear for every adventure. Expert reviews, top-rated products, and best Amazon deals for camping enthusiasts and outdoor lovers."
      products={products}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🏕️ Essential Camping Equipment</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          From tents and sleeping bags to cooking systems and backpacks, discover the top-rated camping gear that outdoor enthusiasts trust. Our expert-curated selection features the best-selling products from leading brands like Coleman, REI, MSR, and more.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">🏠 Shelter & Sleep</h3>
            <p className="text-gray-600">Tents, sleeping bags, and sleeping pads for comfortable nights under the stars</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-800">🍳 Cooking & Food</h3>
            <p className="text-gray-600">Stoves, cookware, and water systems for delicious camp meals</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-orange-800">🎒 Gear & Accessories</h3>
            <p className="text-gray-600">Backpacks, headlamps, and essential camping accessories</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Why Choose Our Recommendations?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Expert Tested</h4>
                <p className="text-gray-600 text-sm">Every product is tested by outdoor professionals</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Top Rated</h4>
                <p className="text-gray-600 text-sm">Only the highest-rated products make our list</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Best Value</h4>
                <p className="text-gray-600 text-sm">Great quality at competitive prices</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Durable & Reliable</h4>
                <p className="text-gray-600 text-sm">Built to last through countless adventures</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="/articles"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Camping Guides →
        </a>
      </div>
    </CategoryLayout>
  );
}