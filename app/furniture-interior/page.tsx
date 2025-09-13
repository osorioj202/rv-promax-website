// app/furniture-interior/page.tsx
import CategoryLayout from '@/components/CategoryLayout';

export default function FurnitureInteriorPage() {
  const products = [
    {
      name: "Thetford Aqua-Magic V RV Toilet",
      url: "https://amzn.to/46iqvbb",
      badge: "Best Seller",
      price: "$89.99",
      description: "High-quality RV toilet with foot pedal flush and water-saving design"
    },
    {
      name: "Dometic 320 Series RV Toilet",
      url: "https://amzn.to/4nmuPgu",
      badge: "Top Rated",
      price: "$199.99",
      description: "Premium RV toilet with porcelain bowl and residential-style flush"
    },
    {
      name: "Camco RV Toilet Treatment",
      url: "https://amzn.to/3Vbate9",
      badge: "Best Value",
      price: "$12.99",
      description: "Essential toilet treatment for holding tank odor control and waste breakdown"
    },
    {
      name: "Valterra RV Toilet Paper Holder",
      url: "https://amzn.to/4n3Kodf",
      badge: "Editor's Choice",
      price: "$24.99",
      description: "Space-saving toilet paper holder with built-in storage for RV bathrooms"
    },
    {
      name: "Thetford RV Toilet Seal and Gasket Kit",
      url: "https://amzn.to/3Iff107",
      badge: "Top Pick",
      price: "$19.99",
      description: "Complete seal and gasket replacement kit for RV toilet maintenance"
    },
    {
      name: "Dometic 310 Standard Toilet",
      url: "https://amzn.to/46lb9Tq",
      badge: "Professional",
      price: "$246.07",
      description: "Lightweight RV toilet with pressure-enhanced PowerFlush and slow-close seat cover"
    },
    {
      name: "Camco RV Toilet Deodorant",
      url: "https://amzn.to/3Vg9yJs",
      badge: "Best Seller",
      price: "$8.99",
      description: "Long-lasting toilet deodorant for fresh holding tank odor control"
    },
    {
      name: "Valterra RV Toilet Flush Valve",
      url: "https://amzn.to/42mypis",
      badge: "Top Rated",
      price: "$34.99",
      description: "Replacement flush valve assembly for RV toilet repair and maintenance"
    },
    {
      name: "Thetford RV Toilet Bowl Cleaner",
      url: "https://amzn.to/46AQ9ZW",
      badge: "Editor's Choice",
      price: "$15.99",
      description: "Specialized toilet bowl cleaner safe for RV holding tanks and seals"
    }
  ];

  return (
    <CategoryLayout
      title="Furniture & Interior"
      description="Essential RV bathroom and interior accessories for comfort and functionality. Expert reviews, top-rated products, and best Amazon deals for maintaining your RV's interior systems."
      products={products}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🏠 Make Your RV Feel Like Home</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          From memory foam mattresses and space-saving tables to blackout curtains and storage organizers, discover the top-rated furniture and interior accessories that RV owners trust. Our expert-curated selection features the best-selling products from leading brands like Zinus, Linenspa, Flash Furniture, and more.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">🛏️ Sleep & Comfort</h3>
            <p className="text-gray-600">Memory foam mattresses, toppers, and bedding for restful nights on the road</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-800">🪑 Tables & Seating</h3>
            <p className="text-gray-600">Folding tables, dinette sets, and space-saving furniture for dining and work</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-orange-800">🏠 Interior Accessories</h3>
            <p className="text-gray-600">Curtains, storage organizers, and decorative elements for a cozy home feel</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Why Choose Our Furniture Recommendations?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">RV-Specific Sizing</h4>
                <p className="text-gray-600 text-sm">Designed to fit standard RV dimensions and space constraints</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Space-Saving Design</h4>
                <p className="text-gray-600 text-sm">Multi-functional furniture that maximizes limited RV space</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Easy Installation</h4>
                <p className="text-gray-600 text-sm">Simple setup with minimal tools required for RV installation</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <div>
                <h4 className="font-semibold text-gray-800">Durable Materials</h4>
                <p className="text-gray-600 text-sm">Built to withstand RV travel vibrations and frequent use</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="/articles"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Furniture Guides →
        </a>
      </div>
    </CategoryLayout>
  );
}