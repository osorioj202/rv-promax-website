export interface DiscoveryArticle {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  type: 'tutorial' | 'list' | 'comparison';
  tags: string[];
  publishDate: string;
  readTime: number;
  trendingScore: number;
  content: Array<{
    type: 'heading' | 'paragraph' | 'list' | 'image' | 'product';
    text?: string;
    items?: string[];
    src?: string;
    alt?: string;
    name?: string;
    price?: string;
    amazonLink?: string;
  }>;
}

import articlesData from './discovery-articles.json';

export const discoveryArticles: DiscoveryArticle[] = articlesData as DiscoveryArticle[];



