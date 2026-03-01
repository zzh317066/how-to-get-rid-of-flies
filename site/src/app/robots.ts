import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/personalized-plan/result/'],
        },
        sitemap: 'https://flyawayguide.com/sitemap.xml',
    };
}
