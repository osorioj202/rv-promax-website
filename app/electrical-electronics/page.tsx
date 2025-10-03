// app/electrical-electronics/page.tsx
import CategoryLayout from '@/components/CategoryLayout';
import ProductImage from '@/components/ProductImage';
import CanonicalURL from '@/components/CanonicalURL';

export default function ElectricalElectronicsPage() {
  const products = [
    {
      name: "Renogy 100W 12V Monocrystalline Solar Panel",
      url: "https://amzn.to/3IkFkSt",
      badge: "Best Seller",
      price: "$99.99",
      description: "High-efficiency solar panel perfect for RV roof mounting and off-grid power",
      image: "/images/products/electrical-electronics/renogy-100w-12v-monocrystalline-solar-panel.png"
    },
    {
      name: "Victron Energy SmartSolar MPPT 100/20 Charge Controller",
      url: "https://amzn.to/3VL2SD4",
      badge: "Premium",
      price: "$149.95",
      description: "Advanced MPPT charge controller with Bluetooth monitoring and app control",
      image: "/images/products/electrical-electronics/victron-energy-smartsolar-mppt-100-20-charge-controller.png"
    },
    {
      name: "Battle Born LiFePO4 Deep Cycle Battery 100Ah",
      url: "https://amzn.to/4gjEHoN",
      badge: "Top Rated",
      price: "$899.99",
      description: "Lithium iron phosphate battery with 10+ year lifespan and 3000+ cycles",
      image: "/images/products/electrical-electronics/battle-born-lifepo4-deep-cycle-battery-100ah.png"
    },
    {
      name: "Go Power! GP-SW3000-12 3000W Pure Sine Wave Inverter",
      url: "https://amzn.to/4mdCtIS",
      badge: "Professional",
      price: "$399.99",
      description: "High-capacity pure sine wave inverter for sensitive electronics and appliances",
      image: "/images/products/electrical-electronics/go-power-gp-sw3000-12-3000w-pure-sine-wave-inverter.png"
    },
    {
      name: "Blue Sea Systems 12V Circuit Breaker Panel",
      url: "https://amzn.to/4mk7kDV",
      badge: "Best Seller",
      price: "$89.99",
      description: "Professional-grade circuit breaker panel for safe electrical distribution",
      image: "/images/products/electrical-electronics/blue-sea-systems-12v-circuit-breaker-panel.png"
    },
    {
      name: "Renogy 40A MPPT Solar Charge Controller",
      url: "https://amzn.to/48fo7V7",
      badge: "Top Pick",
      price: "$79.99",
      description: "Efficient MPPT charge controller for solar panel systems up to 500W",
      image: "/images/products/electrical-electronics/renogy-40a-mppt-solar-charge-controller.png"
    },
    {
      name: "Victron Energy Orion-TR Smart 12/24-15A DC-DC Charger",
      url: "https://amzn.to/42jYWwU",
      badge: "Premium",
      price: "$129.99",
      description: "Smart DC-DC charger with Bluetooth monitoring for dual battery systems",
      image: "/images/products/electrical-electronics/victron-energy-orion-tr-smart-12-24-15a-dc-dc-charger.png"
    },
    {
      name: "Blue Sea Systems 12V USB Charger Socket",
      url: "https://amzn.to/4mU3JNQ",
      badge: "Best Value",
      price: "$24.99",
      description: "Dual USB charging socket with LED indicator for mobile devices",
      image: "/images/products/electrical-electronics/blue-sea-systems-12v-usb-charger-socket.png"
    },
    {
      name: "Renogy 200W 12V Monocrystalline Solar Panel Kit",
      url: "https://amzn.to/4meRVEO",
      badge: "Editor's Choice",
      price: "$299.99",
      description: "Complete solar panel kit with charge controller and mounting hardware",
      image: "/images/products/electrical-electronics/renogy-200w-12v-monocrystalline-solar-panel-kit.png"
    }
  ];

  return (
    <>
      <CanonicalURL url="https://www.rv-promax.com/electrical-electronics" />
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
    </>
  );
}