// app/sitemap.ts
import { MetadataRoute } from 'next';
import articles from '@/lib/articles-comprehensive.json';
import { discoveryArticles } from '@/lib/discovery-articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rv-promax.com';
  
  // Páginas estáticas principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/discovery`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/general-rv`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rv-accessories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/camping-gear`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/electrical-electronics`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/maintenance-repair`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/furniture-interior`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/towing-hitches`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mattresses-bedding`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outdoor-recreation`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rv-covers-protection`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Páginas de artículos dinámicas
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.lastUpdated || article.publishedAt || Date.now()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Páginas de Discovery dinámicas
  const discoveryPages = discoveryArticles.map((article) => ({
    url: `${baseUrl}/discovery/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: 'daily' as const,
    priority: article.trendingScore > 80 ? 0.9 : 0.7,
  }));

  return [...staticPages, ...articlePages, ...discoveryPages];
}
