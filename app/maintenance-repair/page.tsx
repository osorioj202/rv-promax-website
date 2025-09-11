// app/maintenance-repair/page.tsx
import CategoryLayout from '@/components/CategoryLayout';

export default function MaintenanceRepairPage() {
  const products = [
    {
      name: "Dicor 501LSW-1 Self-Leveling Lap Sealant",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Seller",
      price: "$12.99",
      description: "Professional-grade self-leveling sealant for RV roof and sidewall maintenance"
    },
    {
      name: "Camco RV Water Pressure Regulator with Gauge",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Rated",
      price: "$24.99",
      description: "Essential water pressure regulator to protect RV plumbing from high pressure"
    },
    {
      name: "Valterra T58 Twist-On Waste Valve",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Value",
      price: "$8.99",
      description: "Durable waste valve replacement for RV holding tank systems"
    },
    {
      name: "Camco RV Holding Tank Treatment Pods",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Editor's Choice",
      price: "$15.99",
      description: "Convenient holding tank treatment pods for odor control and waste breakdown"
    },
    {
      name: "Thetford Aqua-Max RV Toilet Paper",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Pick",
      price: "$9.99",
      description: "Specially designed toilet paper that dissolves quickly in RV holding tanks"
    },
    {
      name: "Camco RV Sewer Hose Support Kit",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Professional",
      price: "$29.99",
      description: "Heavy-duty support system for RV sewer hoses with proper drainage slope"
    },
    {
      name: "Valterra RV Fresh Water Hose",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Seller",
      price: "$19.99",
      description: "Lead-free drinking water safe hose for RV fresh water connections"
    },
    {
      name: "Camco RV Leveling Blocks Set of 10",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Pick",
      price: "$34.99",
      description: "Heavy-duty leveling blocks for stabilizing RV on uneven ground"
    },
    {
      name: "Dicor RV Roof Coating Kit",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Professional",
      price: "$89.99",
      description: "Complete roof coating kit to protect and extend RV roof life"
    }
  ];

  return (
    <CategoryLayout
      title="Maintenance & Repair"
      description="Keep your RV in perfect condition with professional maintenance tools and repair supplies. Expert reviews, top-rated products, and best Amazon deals for reliable RV upkeep."
      products={products}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🔧 Keep Your RV Running Smoothly</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          From roof sealants and water pressure regulators to holding tank treatments and leveling blocks, discover the top-rated maintenance and repair products that RV owners trust. Our expert-curated selection features the best-selling products from leading brands like Dicor, Camco, Valterra, and Thetford.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">🔧 Sealants & Repairs</h3>
            <p className="text-gray-600">Roof sealants, lap sealants, and repair kits to prevent leaks and maintain structural integrity</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-800">💧 Water Systems</h3>
            <p className="text-gray-600">Pressure regulators, hoses, and treatment products for clean, safe water systems</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-orange-800">🚽 Waste Management</h3>
            <p className="text-gray-600">Holding tank treatments, sewer hoses, and waste valves for proper sanitation</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Why Choose Our Maintenance Recommendations?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Professional Grade</h4>
                <p className="text-gray-600 text-sm">Commercial-quality products used by RV service professionals</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Long-Lasting Protection</h4>
                <p className="text-gray-600 text-sm">Durable materials designed to withstand harsh RV travel conditions</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Easy Application</h4>
                <p className="text-gray-600 text-sm">Simple DIY installation with clear instructions and minimal tools</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Cost Effective</h4>
                <p className="text-gray-600 text-sm">Prevent expensive repairs with regular maintenance using quality products</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="/articles"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Maintenance Guides →
        </a>
      </div>
    </CategoryLayout>
  );
}