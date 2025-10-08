'use client';

import { ReactNode } from 'react';

interface DiscoveryLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

export default function DiscoveryLayout({ children, sidebar }: DiscoveryLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {children}
          </div>

          {/* Sidebar */}
          {sidebar && (
            <aside className="lg:w-80 space-y-6">
              {sidebar}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}



