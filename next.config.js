/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for Next.js 15
  experimental: {
    // Enable any experimental features if needed
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.centurycommunities.com',
        port: '',
        pathname: '/globalassets/**',
      },
      {
        protocol: 'https',
        hostname: 'www.centurycommunities.com',
        port: '',
        pathname: '/contentassets/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }
    ],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
