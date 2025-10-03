'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
  thumbnail: string
  index: number
}

export default function PhotoGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Diverse, high-quality images with proper framing
  const galleryImages: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&h=1382&q=80",
      alt: "Residence 2119 Exterior - Modern Contemporary Luxury Home",
      thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      index: 0
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&h=1369&q=80",
      alt: "Residence 2119 Entry - Elegant Mediterranean Style",
      thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      index: 1
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380&q=80",
      alt: "Residence 1943 Exterior - Spanish Mission Architecture",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      index: 2
    },
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380&q=80",
      alt: "Residence 1943 Entry - Traditional Two-Story Design",
      thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      index: 3
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380&q=80",
      alt: "Modern Kitchen - Gourmet Design with Premium Appliances",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      index: 4
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&h=1372&q=80",
      alt: "Spacious Living Room - Open Concept Design",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      index: 5
    },
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380&q=80",
      alt: "Master Bedroom - Luxury Primary Suite",
      thumbnail: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      index: 6
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380&q=80",
      alt: "Luxury Bathroom - Modern Spa-Like Design",
      thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      index: 7
    },
    {
      src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380&q=80",
      alt: "Backyard Patio - Outdoor Living Space",
      thumbnail: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      index: 8
    },
    {
      src: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380&q=80",
      alt: "Community Aerial View - Bravado Neighborhood",
      thumbnail: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      index: 9
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="photo-gallery mb-12" data-image-count={galleryImages.length} role="region" aria-label="Photo Gallery">
      {/* Gallery Flags */}
      <div className="gallery_flags mb-4">
        <span className="gallery_flags_icon custom-flag1-icon flag-dark-purple inline-block px-3 py-1 rounded-full text-white text-sm font-bold mr-2">
          Two Stunning Models
        </span>
        <span className="gallery_flags_icon custom-flag2-icon flag-light-purple inline-block px-3 py-1 rounded-full text-white text-sm font-bold">
          Tour Today!
        </span>
      </div>

      {/* Main Gallery */}
      <div id="main-gallery" className="carousel slide" data-ride="carousel" data-interval="false">
        {/* Navigation Arrows */}
        <button 
          className="carousel-control-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-r-lg transition-all"
          onClick={prevSlide}
          type="button"
        >
          <span className="arrow" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.159 8.409" className="w-6 h-6">
              <g data-name="Group 1218" fill="none" stroke="currentColor" strokeLinecap="round">
                <path d="M7.5 4.205h-7" data-name="Shape 2056" strokeLinejoin="round" />
                <path d="M4.5 7.705l3-3.5-3-3.5" data-name="Shape 2057" />
              </g>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        <button 
          className="carousel-control-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-l-lg transition-all"
          onClick={nextSlide}
          type="button"
        >
          <span className="arrow" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.159 8.409" className="w-6 h-6">
              <g data-name="Group 1218" fill="none" stroke="currentColor" strokeLinecap="round">
                <path d="M0.5 4.205h7" data-name="Shape 2056" strokeLinejoin="round" />
                <path d="M3.5 0.705l-3 3.5 3 3.5" data-name="Shape 2057" />
              </g>
            </svg>
          </span>
          <span className="sr-only">Next</span>
        </button>

        {/* Carousel Content */}
        <div className="carousel-inner relative overflow-hidden rounded-lg">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`carousel-item relative ${index === currentSlide ? 'active' : ''}`}
              data-index={index}
            >
              <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div id="thumbnail-list" className="mt-4">
        <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              className={`thumbnail relative overflow-hidden rounded-lg transition-all ${
                index === currentSlide ? 'active ring-2 ring-blue-600 ring-offset-2' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => goToSlide(index)}
              data-target="#main-gallery"
              data-slide-to={index}
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image
                  src={image.thumbnail}
                  alt={`${image.alt} thumbnail`}
                  fill
                  className="object-cover object-center"
                  sizes="80px"
                />
              </div>
              <span className="sr-only">Slide {index + 1} of {galleryImages.length}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Info */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Showing {currentSlide + 1} of {galleryImages.length} images
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Professional photography by Century Communities
        </p>
      </div>
    </div>
  )
}
