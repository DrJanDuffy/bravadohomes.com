'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  fallbackSrc?: string
}

export default function OptimizedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  fallbackSrc = 'https://via.placeholder.com/800x600/2563eb/ffffff?text=Bravado+Homes'
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    console.log('Image failed to load:', src, 'falling back to:', fallbackSrc)
    if (!hasError && fallbackSrc) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  const handleLoad = () => {
    console.log('Image loaded successfully:', src)
  }

  const imageProps = {
    src: imgSrc,
    alt,
    className: `${className} transition-opacity duration-300`,
    priority,
    sizes,
    onError: handleError,
    onLoad: handleLoad,
    ...(fill ? { fill: true } : { width, height })
  }

  return <Image {...imageProps} />
}

// Predefined fallback images for different categories
export const FALLBACK_IMAGES = {
  exterior: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
  interior: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
  kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
  bedroom: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
  bathroom: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
  community: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
  default: 'https://via.placeholder.com/800x600/2563eb/ffffff?text=Bravado+Homes'
}
