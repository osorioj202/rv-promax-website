import Link from 'next/link';

export default function DiscoveryNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the article you're looking for. It may have been moved or removed.
        </p>
        <Link
          href="/discovery"
          className="inline-block px-8 py-4 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Back to Discovery Hub
        </Link>
      </div>
    </div>
  );
}



