// app/electrical-electronics/page.tsx
import CategoryLayout from '@/components/CategoryLayout';

export default function ElectricalElectronicsPage() {
  const products = [
    {
      name: "Renogy 100W 12V Monocrystalline Solar Panel",
      url: "https://www.amazon.com/dp/B00BFCNFRM?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Seller",
      price: "$99.99",
      description: "High-efficiency solar panel perfect for RV roof mounting and off-grid power"
    },
    {
      name: "Victron Energy SmartSolar MPPT 100/20 Charge Controller",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Premium",
      price: "$149.95",
      description: "Advanced MPPT charge controller with Bluetooth monitoring and app control"
    },
    {
      name: "Battle Born LiFePO4 Deep Cycle Battery 100Ah",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Rated",
      price: "$899.99",
      description: "Lithium iron phosphate battery with 10+ year lifespan and 3000+ cycles"
    },
    {
      name: "Go Power! GP-SW3000-12 3000W Pure Sine Wave Inverter",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Professional",
      price: "$399.99",
      description: "High-capacity pure sine wave inverter for sensitive electronics and appliances"
    },
    {
      name: "Victron Energy BMV-712 Smart Battery Monitor",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Editor's Choice",
      price: "$179.95",
      description: "Precision battery monitor with Bluetooth connectivity and detailed analytics"
    },
    {
      name: "Renogy 2000W Pure Sine Wave Inverter",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Value",
      price: "$199.99",
      description: "Reliable 2000W inverter with built-in safety features and remote control"
    },
    {
      name: "Blue Sea Systems 12V Circuit Breaker Panel",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Professional",
      price: "$89.95",
      description: "Marine-grade circuit breaker panel with 6 switches and LED indicators"
    },
    {
      name: "NOCO Genius G3500 3.5A Smart Battery Charger",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Pick",
      price: "$49.95",
      description: "Smart battery charger for AGM, gel, and lithium batteries with desulfation"
    },
    {
      name: "Samlex PST-1500-12 Pure Sine Wave Inverter",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Premium",
      price: "$299.99",
      description: "Compact 1500W pure sine wave inverter with advanced protection features"
    }
  ];

  return (
    <CategoryLayout
      title="Electrical & Electronics"
      description="Complete RV power systems, solar panels, batteries, and electronic accessories. Expert reviews, top-rated products, and best Amazon deals for reliable off-grid power."
      products={products}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">⚡ Power Your RV Adventures</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          From solar panels and lithium batteries to inverters and charge controllers, discover the top-rated electrical systems that RV owners trust. Our expert-curated selection features the best-selling products from leading brands like Victron Energy, Renogy, Battle Born, and more.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">☀️ Solar Power</h3>
            <p className="text-gray-600">Solar panels, charge controllers, and monitoring systems for sustainable energy</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-800">🔋 Battery Systems</h3>
            <p className="text-gray-600">Lithium batteries, monitors, and chargers for reliable power storage</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-orange-800">⚡ Power Conversion</h3>
            <p className="text-gray-600">Inverters, converters, and electrical panels for AC/DC power management</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Why Choose Our Electrical Recommendations?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Marine-Grade Quality</h4>
                <p className="text-gray-600 text-sm">Built to withstand harsh RV environments and vibrations</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Energy Efficient</h4>
                <p className="text-gray-600 text-sm">Maximum power output with minimal energy waste</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Easy Installation</h4>
                <p className="text-gray-600 text-sm">Clear instructions and mounting hardware included</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Smart Monitoring</h4>
                <p className="text-gray-600 text-sm">Bluetooth connectivity and mobile app control</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="/articles"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Electrical Guides →
        </a>
      </div>
    </CategoryLayout>
  );
}