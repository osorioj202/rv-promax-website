// app/furniture-interior/page.tsx
import CategoryLayout from '@/components/CategoryLayout';

export default function FurnitureInteriorPage() {
  const products = [
    {
      name: "Zinus 6 Inch Green Tea Memory Foam RV Mattress",
      url: "https://www.amazon.com/dp/B00BFCNFRM?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Seller",
      price: "$89.99",
      description: "6-inch memory foam mattress with green tea infusion, perfect for RV short queen beds"
    },
    {
      name: "Linenspa 8 Inch Memory Foam and Innerspring Hybrid RV Mattress",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Rated",
      price: "$149.99",
      description: "Hybrid mattress combining memory foam comfort with innerspring support for RVs"
    },
    {
      name: "LUCID 4 Inch Memory Foam RV Mattress Topper",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Value",
      price: "$49.99",
      description: "Memory foam topper to enhance existing RV mattress comfort and support"
    },
    {
      name: "Flash Furniture RV Dinette Table with Storage",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Editor's Choice",
      price: "$199.99",
      description: "Space-saving dinette table with built-in storage compartments for RVs"
    },
    {
      name: "Furinno RV Folding Table with Storage",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Pick",
      price: "$79.99",
      description: "Lightweight folding table with storage shelf, perfect for RV dining and work"
    },
    {
      name: "Mainstays RV Curtains Set of 2 Panels",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Value",
      price: "$24.99",
      description: "Blackout curtains with grommets, designed specifically for RV windows"
    },
    {
      name: "Camco RV Window Insulation Kit",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Professional",
      price: "$39.95",
      description: "Reflective window insulation kit to keep RV cool in summer and warm in winter"
    },
    {
      name: "Command RV Hooks and Strips Value Pack",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Best Seller",
      price: "$12.99",
      description: "Damage-free hanging solution for towels, coats, and accessories in RVs"
    },
    {
      name: "Simple Houseware RV Storage Organizer",
      url: "https://www.amazon.com/dp/B001QW1B5E?tag=rvpromax-20&linkCode=ur2&linkId=rvpromax-20",
      badge: "Top Pick",
      price: "$19.99",
      description: "Over-the-door storage organizer with 6 pockets for RV bathroom and closet"
    }
  ];

  return (
    <CategoryLayout
      title="Furniture & Interior"
      description="Comfortable and functional furniture for your RV interior. Expert reviews, top-rated products, and best Amazon deals for creating a home-like RV experience."
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