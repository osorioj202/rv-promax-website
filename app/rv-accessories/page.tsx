// app/rv-accessories/page.tsx
import CategoryLayout from '@/components/CategoryLayout';

export default function RVAccessoriesPage() {
  const products = [
    {
      name: "Top-rated rv accessories on Amazon",
      url: "https://www.amazon.com/s?k=rv+accessories&tag=your-affiliate-tag-20",
      badge: "Top Pick",
      price: "$20 - $150",
      description: "Best-selling RV accessories with high customer ratings"
    },
    {
      name: "Professional rv accessories accessories",
      url: "https://www.amazon.com/s?k=rv+accessories+accessories&tag=your-affiliate-tag-20",
      badge: "Professional",
      price: "$50 - $200",
      description: "Professional-grade RV accessories for serious enthusiasts"
    },
    {
      name: "Budget-friendly rv accessories options",
      url: "https://www.amazon.com/s?k=rv+accessories+budget&tag=your-affiliate-tag-20",
      badge: "Best Value",
      price: "$15 - $75",
      description: "Affordable RV accessories without compromising quality"
    },
    {
      name: "Top-rated recreational vehicle accessories on Amazon",
      url: "https://www.amazon.com/s?k=recreational+vehicle+accessories&tag=your-affiliate-tag-20",
      badge: "Top Pick",
      price: "$30 - $180",
      description: "Premium recreational vehicle accessories for all RV types"
    },
    {
      name: "Professional recreational vehicle accessories accessories",
      url: "https://www.amazon.com/s?k=recreational+vehicle+accessories+accessories&tag=your-affiliate-tag-20",
      badge: "Professional",
      price: "$60 - $250",
      description: "Professional-grade accessories for serious RV owners"
    },
    {
      name: "Budget-friendly recreational vehicle accessories options",
      url: "https://www.amazon.com/s?k=recreational+vehicle+accessories+budget&tag=your-affiliate-tag-20",
      badge: "Best Value",
      price: "$25 - $100",
      description: "Cost-effective recreational vehicle accessories"
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