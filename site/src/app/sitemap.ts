import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://howtogetridofflies.top';

    return [
        {
            url: baseUrl,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/fruit-flies`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/drain-flies`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/house-flies`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/fruit-fly-trap`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/personalized-plan`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/fungus-gnats`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/outdoor-fly-control`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pet-safe-fly-removal`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/diy-fly-repellents`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/restaurant-fly-control`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date('2026-03-06'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}
