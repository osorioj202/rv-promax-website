// app/general-rv/page.tsx
import CategoryLayout from '@/components/CategoryLayout';
import ProductImage from '@/components/ProductImage';
import CanonicalURL from '@/components/CanonicalURL';

export default function GeneralRVPage() {
  const products = [
    {
      name: "Berkey Travel Water Filter System",
      url: "https://amzn.to/462EQtl",
      badge: "Best Seller",
      price: "$249.99",
      description: "Portable water filtration system perfect for RV travel, removes 99.9% of contaminants",
      image: "/images/products/general-rv/berkey-travel-water-filter-system.png"
    },
    {
      name: "Dometic Penguin II RV Air Conditioner",
      url: "https://amzn.to/41M4osk",
      badge: "Top Rated",
      price: "$599.99",
      description: "High-efficiency 13,500 BTU RV air conditioner with digital thermostat control",
      image: "/images/products/general-rv/dometic-penguin-ii-rv-air-conditioner.png"
    },
    {
      name: "Dicor 501LSW-1 Self-Leveling Lap Sealant",
      url: "https://amzn.to/3I9vmn4",
      badge: "Best Value",
      price: "$12.99",
      description: "Professional-grade self-leveling sealant for RV roof and sidewall maintenance",
      image: "/images/products/general-rv/dicor-501lsw-1-self-leveling-lap-sealant.png"
    },
    {
      name: "Camco RV Water Pressure Regulator with Gauge",
      url: "https://amzn.to/4gpmZ3x",
      badge: "Editor's Choice",
      price: "$24.99",
      description: "Essential water pressure regulator to protect RV plumbing from high pressure damage",
      image: "/images/products/general-rv/camco-rv-water-pressure-regulator-with-gauge.png"
    },
    {
      name: "Renogy 100W 12V Monocrystalline Solar Panel",
      url: "https://amzn.to/4gmgONi",
      badge: "Top Pick",
      price: "$99.99",
      description: "High-efficiency solar panel perfect for RV roof mounting and off-grid power",
      image: "/images/products/general-rv/renogy-100w-12v-monocrystalline-solar-panel.png"
    },
    {
      name: "Zinus 6 Inch Green Tea Memory Foam RV Mattress",
      url: "https://amzn.to/48h8n3Z",
      badge: "Best Value",
      price: "$89.99",
      description: "CertiPUR-US certified memory foam mattress with green tea extract, perfect for RV beds",
      image: "/images/products/general-rv/zinus-6-inch-green-tea-memory-foam-rv-mattress.png"
    },
    {
      name: "Coleman RoadTrip 285 Portable Propane Grill",
      url: "https://amzn.to/4ns6aqL",
      badge: "Professional",
      price: "$149.99",
      description: "Portable propane grill with 285 sq in cooking surface, perfect for RV outdoor cooking",
      image: "/images/products/general-rv/coleman-roadtrip-285-portable-propane-grill.png"
    },
    {
      name: "Curt 17000 Class V Trailer Hitch",
      url: "https://amzn.to/4nxWvza",
      badge: "Top Pick",
      price: "$189.99",
      description: "Heavy-duty Class V hitch with 17,000 lb towing capacity and 1,700 lb tongue weight",
      image: "/images/products/general-rv/curt-17000-class-v-trailer-hitch.png"
    },
    {
      name: "Classic Accessories OverDrive PolyPro 3 RV Cover",
      url: "https://amzn.to/4pjv8KC",
      badge: "Best Seller",
      price: "$189.99",
      description: "Heavy-duty 3-layer polypropylene cover with UV protection and breathable fabric",
      image: "/images/products/general-rv/classic-accessories-overdrive-polypro-3-rv-cover.png"
    }
  ];

  return (
    <>
      <CanonicalURL url="https://www.rv-promax.com/general-rv" />
      <CategoryLayout
      title="General RV"
      description="Essential RV products and accessories for all types of recreational vehicles. Expert reviews, top-rated products, and best Amazon deals for complete RV solutions."
      products={products}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🚐 Essential RV Products</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          From water filtration systems and air conditioners to solar panels and towing equipment, discover the top-rated general RV products that every owner needs. Our expert-curated selection features the best-selling products from leading brands like Berkey, Dometic, Dicor, Camco, Renogy, and Coleman.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">💧 Water & Climate</h3>
            <p className="text-gray-600">Water filters, air conditioners, and climate control systems for comfortable RV living</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-800">⚡ Power & Maintenance</h3>
            <p className="text-gray-600">Solar panels, sealants, and maintenance products for reliable RV operation</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-orange-800">🏠 Comfort & Protection</h3>
            <p className="text-gray-600">Mattresses, grills, hitches, and covers for complete RV comfort and protection</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Why Choose Our General RV Recommendations?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Essential Products</h4>
                <p className="text-gray-600 text-sm">Core RV products that every owner needs for safe and comfortable travel</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Top Brand Quality</h4>
                <p className="text-gray-600 text-sm">From trusted RV brands known for reliability, durability, and performance</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Universal Compatibility</h4>
                <p className="text-gray-600 text-sm">Products designed to work with all types of RVs and recreational vehicles</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Expert Tested</h4>
                <p className="text-gray-600 text-sm">Products tested by RV experts and real-world users for reliability</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="/articles"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All RV Guides →
        </a>
      </div>
    </CategoryLayout>
    </>
  );
}







