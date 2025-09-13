// app/rv-accessories/page.tsx
import CategoryLayout from '@/components/CategoryLayout';

export default function RVAccessoriesPage() {
  const products = [
    {
      name: "Camco RV Leveling Blocks",
      url: "https://amzn.to/4pmYQ1r",
      badge: "Best Seller",
      price: "$24.99",
      description: "Essential leveling blocks for stable RV setup on uneven ground"
    },
    {
      name: "Valterra RV Sewer Hose Kit",
      url: "https://amzn.to/42rrDYI",
      badge: "Top Rated",
      price: "$39.99",
      description: "Complete sewer hose kit with fittings and storage bag for RV waste disposal"
    },
    {
      name: "Camco RV Water Pressure Regulator",
      url: "https://amzn.to/42v2rk6",
      badge: "Editor's Choice",
      price: "$19.99",
      description: "Essential water pressure regulator to protect RV plumbing from high pressure"
    },
    {
      name: "Thetford RV Holding Tank Treatment",
      url: "https://amzn.to/48h6hRF",
      badge: "Best Value",
      price: "$12.99",
      description: "Essential holding tank treatment for odor control and waste breakdown"
    },
    {
      name: "Camco RV Wheel Chocks",
      url: "https://amzn.to/41PDvnl",
      badge: "Top Pick",
      price: "$19.99",
      description: "Heavy-duty wheel chocks to prevent RV movement when parked"
    },
    {
      name: "Valterra RV Sewer Hose Support",
      url: "https://amzn.to/3VfafTa",
      badge: "Professional",
      price: "$24.99",
      description: "Support system for sewer hose to ensure proper drainage and prevent kinks"
    },
    {
      name: "Camco RV Water Filter",
      url: "https://amzn.to/3InczVl",
      badge: "Best Seller",
      price: "$29.99",
      description: "High-capacity water filter system for clean, safe drinking water in RVs"
    },
    {
      name: "Thetford RV Toilet Paper",
      url: "https://amzn.to/46gBuSq",
      badge: "Top Rated",
      price: "$8.99",
      description: "Specially designed toilet paper that dissolves quickly in RV holding tanks"
    },
    {
      name: "Camco RV Sewer Hose Elbow",
      url: "https://amzn.to/4pmZ2xH",
      badge: "Editor's Choice",
      price: "$12.99",
      description: "Durable sewer hose elbow fitting for proper waste disposal connections"
    }
  ];

  return (
    <CategoryLayout
      title="RV Accessories"
      description="Essential accessories for every RV owner. Expert reviews, installation guides, and best Amazon deals."
      products={products}
    >
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Upgrade Your RV Setup</h2>
        <p className="text-gray-600 mb-6">
          From storage solutions to lighting and tech, find the best gear for your rig.
        </p>
        <a
          href="/articles"
          className="text-blue-600 font-semibold border-b border-blue-600 hover:bg-blue-50 px-2 pb-1 transition"
        >
          View All Guides
        </a>
      </div>
    </CategoryLayout>
  );
}