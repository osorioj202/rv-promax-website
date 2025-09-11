// app/towing-hitches/page.tsx
import CategoryLayout from '@/components/CategoryLayout';

export default function TowingHitchesPage() {
  const products = [
    {
      name: "Curt 17000 Class V Trailer Hitch",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Seller",
      price: "$189.99",
      description: "Heavy-duty Class V hitch with 17,000 lb towing capacity and 1,700 lb tongue weight"
    },
    {
      name: "Reese Towpower 80073 Weight Distribution Hitch",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Rated",
      price: "$299.99",
      description: "Professional weight distribution hitch with 10,000 lb capacity and sway control"
    },
    {
      name: "Curt 4500 Class III Trailer Hitch",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Value",
      price: "$89.99",
      description: "Durable Class III hitch with 4,500 lb towing capacity and 450 lb tongue weight"
    },
    {
      name: "Reese Towpower 80073 Sway Control Kit",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Editor's Choice",
      price: "$149.99",
      description: "Dual cam sway control system for improved towing stability and safety"
    },
    {
      name: "Curt 16000 Class V Trailer Hitch",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Professional",
      price: "$229.99",
      description: "Heavy-duty Class V hitch with 16,000 lb towing capacity and 1,600 lb tongue weight"
    },
    {
      name: "Reese Towpower 80073 Weight Distribution Kit",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Pick",
      price: "$199.99",
      description: "Complete weight distribution kit with 8,000 lb capacity and sway control"
    },
    {
      name: "Curt 3500 Class III Trailer Hitch",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Value",
      price: "$69.99",
      description: "Reliable Class III hitch with 3,500 lb towing capacity and 350 lb tongue weight"
    },
    {
      name: "Reese Towpower 80073 Sway Control Bar",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Professional",
      price: "$79.99",
      description: "Heavy-duty sway control bar for improved towing stability and control"
    },
    {
      name: "Curt 5000 Class IV Trailer Hitch",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Pick",
      price: "$129.99",
      description: "Heavy-duty Class IV hitch with 5,000 lb towing capacity and 500 lb tongue weight"
    }
  ];

  return (
    <CategoryLayout
      title="Towing Hitches"
      description="Safe and reliable towing solutions for your RV. Expert reviews, top-rated products, and best Amazon deals for secure towing equipment."
      products={products}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🚛 Safe Towing Solutions</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          From weight distribution hitches and sway control systems to Class III, IV, and V trailer hitches, discover the top-rated towing equipment that RV owners trust. Our expert-curated selection features the best-selling products from leading brands like Curt and Reese Towpower.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">🔗 Trailer Hitches</h3>
            <p className="text-gray-600">Class III, IV, and V hitches with various towing capacities for different RV sizes</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-800">⚖️ Weight Distribution</h3>
            <p className="text-gray-600">Weight distribution hitches and kits for safe towing of heavy trailers</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-orange-800">🛡️ Sway Control</h3>
            <p className="text-gray-600">Sway control systems and bars for improved stability and safety while towing</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Why Choose Our Towing Hitch Recommendations?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Safety First</h4>
                <p className="text-gray-600 text-sm">Engineered for maximum safety with proper weight ratings and secure connections</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Heavy-Duty Construction</h4>
                <p className="text-gray-600 text-sm">Built with high-grade steel and precision engineering for reliable performance</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Easy Installation</h4>
                <p className="text-gray-600 text-sm">Simple bolt-on installation with clear instructions and mounting hardware included</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Proper Weight Ratings</h4>
                <p className="text-gray-600 text-sm">Accurate towing and tongue weight capacities for safe towing of your specific RV</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="/articles"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Towing Guides →
        </a>
      </div>
    </CategoryLayout>
  );
}