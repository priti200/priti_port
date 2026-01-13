import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://pritigupta.dev' // Replace with your actual domain

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        // Add more routes if/when you add blog posts or project detail pages
    ]
}
