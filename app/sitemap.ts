import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/services', '/commercial', '/maintenance-plans', '/about', '/contact',
    '/legal/privacy', '/legal/terms'];

  return [
    ...staticPaths.map((p) => ({
      url: `${site.url}${p}`,
      changeFrequency: 'monthly' as const,
      priority: p === '' ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ];
}
