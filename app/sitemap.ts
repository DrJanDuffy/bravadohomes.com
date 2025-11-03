import { getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/config'

export default async function sitemap() {
  // Safely get blog posts with error handling
  let blogs: Array<{ url: string; lastModified: string }> = []
  try {
    const posts = getBlogPosts()
    blogs = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }))
  } catch (error) {
    // If blog posts can't be loaded, continue without them
    // This prevents the sitemap from crashing the entire site
    console.error('Error loading blog posts for sitemap:', error)
  }

  // All main pages with priority and change frequency - optimized for landing page structure
  let routes = [
    // Core pages (highest priority - main conversion pages)
    { route: '', priority: 1.0, changefreq: 'daily' },
    { route: '/floor-plans', priority: 0.95, changefreq: 'daily' },
    { route: '/contact', priority: 0.95, changefreq: 'daily' },
    
    // High-priority model pages (main product pages)
    { route: '/models/residence-1792', priority: 0.9, changefreq: 'weekly' },
    { route: '/models/residence-1943', priority: 0.9, changefreq: 'weekly' },
    { route: '/models/residence-2119', priority: 0.9, changefreq: 'weekly' },
    
    // Important supporting pages
    { route: '/community', priority: 0.85, changefreq: 'weekly' },
    { route: '/location', priority: 0.85, changefreq: 'weekly' },
    { route: '/about', priority: 0.8, changefreq: 'monthly' },
    
    // Service and informational pages
    { route: '/services', priority: 0.75, changefreq: 'weekly' },
    { route: '/amenities', priority: 0.7, changefreq: 'monthly' },
    { route: '/smart-home-technology', priority: 0.7, changefreq: 'monthly' },
    
    // SEO landing pages (if they exist)
    { route: '/north-las-vegas-homes', priority: 0.8, changefreq: 'weekly' },
    { route: '/new-homes-las-vegas', priority: 0.75, changefreq: 'weekly' },
    { route: '/north-las-vegas-neighborhoods', priority: 0.7, changefreq: 'weekly' },
    { route: '/century-communities', priority: 0.7, changefreq: 'weekly' },
    { route: '/new-home-construction', priority: 0.7, changefreq: 'monthly' },
    { route: '/buyer-representation', priority: 0.7, changefreq: 'monthly' },
    { route: '/financing-incentives', priority: 0.6, changefreq: 'monthly' },
    
    // Blog pages (medium priority)
    { route: '/blog', priority: 0.6, changefreq: 'weekly' },
  ].map(({ route, priority, changefreq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    priority,
    changefreq,
  }))

  // Add blog posts with lower priority
  let blogPosts = blogs.map((blog) => ({
    ...blog,
    priority: 0.5,
    changefreq: 'monthly',
  }))

  return [...routes, ...blogPosts]
}
