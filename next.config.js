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
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig
