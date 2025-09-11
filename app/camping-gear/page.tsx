// app/camping-gear/page.tsx
import CategoryLayout from '@/components/CategoryLayout';

export default function CampingGearPage() {
  const products = [
    {
      name: "Coleman Sundome 4-Person Tent",
      url: "https://www.amazon.com/dp/B00000JZ0Q?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Seller",
      price: "$89.99",
      description: "Weather-resistant tent with easy setup, perfect for family camping"
    },
    {
      name: "REI Co-op Trailbreak 30 Sleeping Bag",
      url: "https://www.amazon.com/dp/B07ZQZQZQZ?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Rated",
      price: "$79.99",
      description: "Lightweight, compressible sleeping bag rated for 30°F temperatures"
    },
    {
      name: "Jetboil Flash Cooking System",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Premium",
      price: "$119.95",
      description: "Ultra-fast water boiling system for backpacking and camping"
    },
    {
      name: "Black Diamond Spot Headlamp",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Editor's Choice",
      price: "$39.95",
      description: "Bright, reliable headlamp with multiple lighting modes"
    },
    {
      name: "Therm-a-Rest Z-Lite Sleeping Pad",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Value",
      price: "$44.95",
      description: "Lightweight, durable foam sleeping pad for comfort and warmth"
    },
    {
      name: "MSR PocketRocket 2 Stove",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Pick",
      price: "$39.95",
      description: "Compact, reliable backpacking stove with excellent fuel efficiency"
    },
    {
      name: "Osprey Atmos AG 65 Backpack",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Professional",
      price: "$249.95",
      description: "Premium backpack with Anti-Gravity suspension system"
    },
    {
      name: "Stanley Adventure Camp Cook Set",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Seller",
      price: "$24.99",
      description: "Complete 2-person cook set with nesting cups and plates"
    },
    {
      name: "Nemo Dagger 2P Tent",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Premium",
      price: "$399.95",
      description: "Ultra-lightweight 2-person tent with excellent weather protection"
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