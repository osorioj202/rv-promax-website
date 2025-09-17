// app/outdoor-recreation/page.tsx
import CategoryLayout from '@/components/CategoryLayout';
import ProductImage from '@/components/ProductImage';

export default function OutdoorRecreationPage() {
  const products = [
    {
      name: "Coleman RoadTrip 285 Portable Propane Grill",
      url: "https://amzn.to/46A2L3x",
      badge: "Best Seller",
      price: "$149.99",
      description: "Portable propane grill with 285 sq in cooking surface, perfect for RV outdoor cooking",
      image: "/images/products/outdoor-recreation/coleman-roadtrip-285-portable-propane-grill.png"
    },
    {
      name: "Eno DoubleNest Hammock with Atlas Straps",
      url: "https://amzn.to/46fhVKc",
      badge: "Top Rated",
      price: "$79.99",
      description: "Lightweight parachute nylon hammock with heavy-duty suspension straps for relaxation",
      image: "/images/products/outdoor-recreation/eno-doublenest-hammock-with-atlas-straps.png"
    },
    {
      name: "Keter Portable Folding Camping Table",
      url: "https://amzn.to/4mduJqw",
      badge: "Best Value",
      price: "$39.99",
      description: "Foldable camping table with cup holders, perfect for RV outdoor dining and activities",
      image: "/images/products/outdoor-recreation/keter-portable-folding-camping-table.png"
    },
    {
      name: "YETI Rambler 30 oz Tumbler with MagSlider Lid",
      url: "https://amzn.to/46kJEJx",
      badge: "Editor's Choice",
      price: "$45.00",
      description: "Insulated stainless steel tumbler that keeps drinks cold for hours during outdoor adventures",
      image: "/images/products/outdoor-recreation/yeti-rambler-30-oz-tumbler-with-magslider-lid.png"
    },
    {
      name: "REI Co-op Trailbreak 30 Sleeping Bag",
      url: "https://amzn.to/3IiI2Ie",
      badge: "Top Pick",
      price: "$79.99",
      description: "Lightweight, compressible sleeping bag rated for 30°F temperatures, ideal for camping",
      image: "/images/products/outdoor-recreation/rei-co-op-trailbreak-30-sleeping-bag.png"
    },
    {
      name: "Black Diamond Spot 350 Headlamp",
      url: "https://amzn.to/4nxL3Ub",
      badge: "Professional",
      price: "$39.95",
      description: "Bright LED headlamp with multiple lighting modes for hands-free outdoor activities",
      image: "/images/products/outdoor-recreation/black-diamond-spot-350-headlamp.png"
    },
    {
      name: "Kelty Cosmic Down 20 Sleeping Bag",
      url: "https://amzn.to/4meNaLy",
      badge: "Best Value",
      price: "$89.99",
      description: "Down-filled sleeping bag with 20°F temperature rating and compressible design",
      image: "/images/products/outdoor-recreation/kelty-cosmic-down-20-sleeping-bag.png"
    },
    {
      name: "Coleman Sundome 4-Person Tent",
      url: "https://amzn.to/4mi4mQa",
      badge: "Best Seller",
      price: "$89.99",
      description: "Weather-resistant tent with easy setup, perfect for family camping adventures",
      image: "/images/products/outdoor-recreation/coleman-sundome-4-person-tent.png"
    },
    {
      name: "MSR PocketRocket 2 Stove",
      url: "https://amzn.to/4mc26da",
      badge: "Top Pick",
      price: "$44.95",
      description: "Ultra-lightweight backpacking stove with reliable performance for outdoor cooking",
      image: "/images/products/outdoor-recreation/msr-pocketrocket-2-stove.png"
    }
  ];

  return (
    <CategoryLayout
      title="Outdoor Recreation"
      description="Enhance your outdoor adventures with quality recreation gear. Expert reviews, top-rated products, and best Amazon deals for unforgettable outdoor experiences."
      products={products}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🏕️ Enhance Your Outdoor Adventures</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          From portable grills and hammocks to sleeping bags and camping gear, discover the top-rated outdoor recreation products that adventure enthusiasts trust. Our expert-curated selection features the best-selling products from leading brands like Coleman, Eno, YETI, REI, Black Diamond, and MSR.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">🔥 Cooking & Dining</h3>
            <p className="text-gray-600">Portable grills, stoves, and dining equipment for outdoor cooking adventures</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-800">🏕️ Camping & Sleep</h3>
            <p className="text-gray-600">Tents, sleeping bags, and hammocks for comfortable outdoor rest and relaxation</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-orange-800">🎒 Gear & Accessories</h3>
            <p className="text-gray-600">Headlamps, tumblers, tables, and essential accessories for outdoor activities</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Why Choose Our Outdoor Recreation Recommendations?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Adventure Tested</h4>
                <p className="text-gray-600 text-sm">Products tested by outdoor enthusiasts in real camping and adventure conditions</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Durable Construction</h4>
                <p className="text-gray-600 text-sm">Built to withstand outdoor elements and frequent use in harsh conditions</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Portable Design</h4>
                <p className="text-gray-600 text-sm">Lightweight and compact gear that's easy to transport and store in your RV</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Top Brand Quality</h4>
                <p className="text-gray-600 text-sm">From trusted outdoor brands known for reliability and performance</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="/articles"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Outdoor Guides →
        </a>
      </div>
    </CategoryLayout>
  );
}