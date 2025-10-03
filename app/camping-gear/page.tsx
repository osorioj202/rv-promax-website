// app/camping-gear/page.tsx
import CategoryLayout from '@/components/CategoryLayout';
import ProductImage from '@/components/ProductImage';
import CanonicalURL from '@/components/CanonicalURL';

export default function CampingGearPage() {
  const products = [
    {
      name: "Coleman Sundome 4-Person Tent",
      url: "https://amzn.to/3K46DB0",
      badge: "Best Seller",
      price: "$89.99",
      description: "Weather-resistant tent with easy setup, perfect for family camping",
      image: "/images/products/camping-gear/coleman-sundome-4-person-tent.png"
    },
    {
      name: "Coleman 30°F Mummy Sleeping Bag",
      url: "https://amzn.to/3IfdlUn",
      badge: "Top Rated",
      price: "$29.99",
      description: "Lightweight, compressible sleeping bag rated for 30°F temperatures",
      image: "/images/products/camping-gear/coleman-30f-mummy-sleeping-bag.png"
    },
    {
      name: "Jetboil Flash Cooking System",
      url: "https://amzn.to/3VJBXaS",
      badge: "Best Seller",
      price: "$119.95",
      description: "Ultra-fast cooking system with integrated pot and burner for efficient camp cooking",
      image: "/images/products/camping-gear/jetboil-flash-cooking-system.png"
    },
    {
      name: "Black Diamond Spot Headlamp",
      url: "https://amzn.to/47G9pGD",
      badge: "Top Rated",
      price: "$39.95",
      description: "Bright, lightweight headlamp with multiple lighting modes for hands-free illumination",
      image: "/images/products/camping-gear/black-diamond-spot-headlamp.png"
    },
    {
      name: "Therm-a-Rest Z-Lite Sleeping Pad",
      url: "https://amzn.to/46hudBH",
      badge: "Best Value",
      price: "$44.95",
      description: "Lightweight, closed-cell foam sleeping pad that provides excellent insulation and comfort",
      image: "/images/products/camping-gear/therm-a-rest-z-lite-sleeping-pad.png"
    },
    {
      name: "MSR PocketRocket 2 Stove",
      url: "https://amzn.to/3JTrNSy",
      badge: "Top Pick",
      price: "$39.95",
      description: "Ultra-lightweight, compact backpacking stove perfect for solo and duo adventures",
      image: "/images/products/camping-gear/msr-pocketrocket-2-stove.png"
    },
    {
      name: "Osprey Atmos AG 65 Backpack",
      url: "https://amzn.to/3K0F1N9",
      badge: "Top Rated",
      price: "$249.95",
      description: "Premium backpacking pack with Anti-Gravity suspension for maximum comfort on long hikes",
      image: "/images/products/camping-gear/osprey-atmos-ag-65-backpack.png"
    },
    {
      name: "Stanley Adventure Camp Cook Set",
      url: "https://amzn.to/41RB5ED",
      badge: "Best Seller",
      price: "$24.99",
      description: "Complete cook set with pots, pans, and utensils for efficient camp cooking",
      image: "/images/products/camping-gear/stanley-adventure-camp-cook-set.png"
    },
    {
      name: "Nemo Dagger 2P Tent",
      url: "https://amzn.to/4n2tThC",
      badge: "Premium",
      price: "$399.95",
      description: "Ultra-lightweight, freestanding tent with excellent weather protection and spacious interior",
      image: "/images/products/camping-gear/nemo-dagger-2p-tent.png"
    }
  ];

  return (
    <>
      <CanonicalURL url="https://www.rv-promax.com/camping-gear" />
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
    </>
  );
}