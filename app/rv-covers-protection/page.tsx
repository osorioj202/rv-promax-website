// app/rv-covers-protection/page.tsx
import CategoryLayout from '@/components/CategoryLayout';

export default function RVCoversProtectionPage() {
  const products = [
    {
      name: "Classic Accessories OverDrive PolyPro 3 RV Cover",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Seller",
      price: "$189.99",
      description: "Heavy-duty 3-layer polypropylene cover with UV protection and breathable fabric"
    },
    {
      name: "ADCO Designer Series SFS Aqua Shed RV Cover",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Rated",
      price: "$299.99",
      description: "Premium 5-layer fabric with Aqua Shed technology for superior water resistance"
    },
    {
      name: "Camco RV Cover for Class A Motorhomes",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Value",
      price: "$149.99",
      description: "Durable polyester cover with reinforced corners and adjustable straps"
    },
    {
      name: "Classic Accessories OverDrive PolyPro 4 RV Cover",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Editor's Choice",
      price: "$229.99",
      description: "4-layer polypropylene cover with enhanced UV protection and tear resistance"
    },
    {
      name: "ADCO RV Cover for Class C Motorhomes",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Professional",
      price: "$249.99",
      description: "Professional-grade cover with SFS Aqua Shed technology and reinforced seams"
    },
    {
      name: "Camco RV Cover for Travel Trailers",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Pick",
      price: "$119.99",
      description: "Heavy-duty polyester cover with zippered panels for easy access to doors and compartments"
    },
    {
      name: "Classic Accessories OverDrive PolyPro 5 RV Cover",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Value",
      price: "$279.99",
      description: "5-layer polypropylene cover with maximum UV protection and weather resistance"
    },
    {
      name: "ADCO RV Cover for Fifth Wheels",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Professional",
      price: "$329.99",
      description: "Heavy-duty cover designed specifically for fifth wheel trailers with reinforced corners"
    },
    {
      name: "Camco RV Cover for Class B Motorhomes",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Pick",
      price: "$89.99",
      description: "Compact cover for Class B motorhomes with breathable fabric and easy installation"
    }
  ];

  return (
    <CategoryLayout
      title="RV Covers & Protection"
      description="Protect your RV from the elements with quality covers and protection gear. Expert reviews, top-rated products, and best Amazon deals for long-lasting RV protection."
      products={products}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🛡️ Protect Your Investment</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          From all-season covers with UV protection to specialized covers for different RV types, discover the top-rated protection gear that RV owners trust. Our expert-curated selection features the best-selling products from leading brands like Classic Accessories, ADCO, and Camco.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">🌞 UV Protection</h3>
            <p className="text-gray-600">Multi-layer covers with UV protection to prevent sun damage and fading</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-800">🌧️ Weather Resistance</h3>
            <p className="text-gray-600">Water-resistant and breathable fabrics for all-season protection</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-orange-800">🚐 RV-Specific Design</h3>
            <p className="text-gray-600">Covers designed for Class A, Class B, Class C, travel trailers, and fifth wheels</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Why Choose Our RV Cover Recommendations?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Premium Materials</h4>
                <p className="text-gray-600 text-sm">High-quality polypropylene and polyester fabrics for maximum durability</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Easy Installation</h4>
                <p className="text-gray-600 text-sm">Simple setup with adjustable straps and reinforced corners for secure fit</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Long-Lasting Protection</h4>
                <p className="text-gray-600 text-sm">Designed to withstand harsh weather conditions and protect your RV investment</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">RV-Specific Sizing</h4>
                <p className="text-gray-600 text-sm">Covers designed specifically for different RV types and sizes</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="/articles"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Protection Guides →
        </a>
      </div>
    </CategoryLayout>
  );
}