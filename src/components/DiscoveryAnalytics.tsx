'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

function DiscoveryAnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      // Track page view
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
      });

      // Track Discovery section visit
      window.gtag('event', 'discovery_visit', {
        page_path: pathname,
        filter: searchParams.get('filter') || 'all',
        tag: searchParams.get('tag') || null,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function DiscoveryAnalytics() {
  return (
    <Suspense fallback={null}>
      <DiscoveryAnalyticsContent />
    </Suspense>
  );
}

// Helper function to track article interactions
export function trackArticleClick(articleSlug: string, articleTitle: string, articleType: string) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'article_click', {
      article_slug: articleSlug,
      article_title: articleTitle,
      article_type: articleType,
      event_category: 'Discovery',
      event_label: articleTitle,
    });
  }
}

// Helper function to track filter changes
export function trackFilterChange(filterType: string, filterValue: string) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'filter_change', {
      filter_type: filterType,
      filter_value: filterValue,
      event_category: 'Discovery',
      event_label: `${filterType}: ${filterValue}`,
    });
  }
}

// Helper function to track social shares
export function trackSocialShare(platform: string, articleSlug: string) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'share', {
      method: platform,
      content_type: 'article',
      content_id: articleSlug,
      event_category: 'Discovery',
      event_label: `Share: ${platform}`,
    });
  }
}

// Helper function to track newsletter signup
export function trackNewsletterSignup(email: string) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'newsletter_signup', {
      event_category: 'Discovery',
      event_label: 'Newsletter Signup',
      value: 1,
    });
  }
}



