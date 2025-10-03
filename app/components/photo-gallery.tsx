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
  
  // Official Century Communities Bravado images
  const galleryImages: GalleryImage[] = [
    {
      src: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/2119/5052-wind-spgs-st---web-quality---003---02-exterior-front.jpg",
      alt: "Residence 2119 Exterior Front View",
      thumbnail: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/2119/5052-wind-spgs-st---web-quality---003---02-exterior-front.jpg?width=100&height=100&rmode=crop&rsampler=bicubic&compand=true",
      index: 0
    },
    {
      src: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/2119/5052-wind-spgs-st---web-quality---007---04-exterior-front-entry.jpg",
      alt: "Residence 2119 Exterior Front Entry",
      thumbnail: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/2119/5052-wind-spgs-st---web-quality---007---04-exterior-front-entry.jpg?width=100&height=100&rmode=crop&rsampler=bicubic&compand=true",
      index: 1
    },
    {
      src: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/1943/5056-wind-spgs-st---web-quality---004---02-exterior-front.jpg",
      alt: "Residence 1943 Exterior Front View",
      thumbnail: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/1943/5056-wind-spgs-st---web-quality---004---02-exterior-front.jpg?width=100&height=100&rmode=crop&rsampler=bicubic&compand=true",
      index: 2
    },
    {
      src: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/1943/5056-wind-spgs-st---web-quality---001---01-exterior-front.jpg",
      alt: "Residence 1943 Exterior Front Entry",
      thumbnail: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/1943/5056-wind-spgs-st---web-quality---001---01-exterior-front.jpg?width=100&height=100&rmode=crop&rsampler=bicubic&compand=true",
      index: 3
    },
    {
      src: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/2119/5052-wind-spgs-st---web-quality---014---11-kitchen.jpg",
      alt: "Residence 2119 Modern Kitchen",
      thumbnail: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/2119/5052-wind-spgs-st---web-quality---014---11-kitchen.jpg?width=100&height=100&rmode=crop&rsampler=bicubic&compand=true",
      index: 4
    },
    {
      src: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/1943/5056-wind-spgs-st---web-quality---016---15-kitchen.jpg",
      alt: "Residence 1943 Modern Kitchen",
      thumbnail: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/1943/5056-wind-spgs-st---web-quality---016---15-kitchen.jpg?width=100&height=100&rmode=crop&rsampler=bicubic&compand=true",
      index: 5
    },
    {
      src: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/2119/5052-wind-spgs-st---web-quality---010---07-living-room.jpg",
      alt: "Residence 2119 Spacious Living Room",
      thumbnail: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/2119/5052-wind-spgs-st---web-quality---010---07-living-room.jpg?width=100&height=100&rmode=crop&rsampler=bicubic&compand=true",
      index: 6
    },
    {
      src: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/1943/5056-wind-spgs-st---web-quality---012---11-living-room.jpg",
      alt: "Residence 1943 Open Living Room",
      thumbnail: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/1943/5056-wind-spgs-st---web-quality---012---11-living-room.jpg?width=100&height=100&rmode=crop&rsampler=bicubic&compand=true",
      index: 7
    },
    {
      src: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/2119/5052-wind-spgs-st---web-quality---023---22-2nd-floor-primary-bedroom.jpg",
      alt: "Residence 2119 Primary Bedroom",
      thumbnail: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/2119/5052-wind-spgs-st---web-quality---023---22-2nd-floor-primary-bedroom.jpg?width=100&height=100&rmode=crop&rsampler=bicubic&compand=true",
      index: 8
    },
    {
      src: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/1943/5056-wind-spgs-st---web-quality---023---26-2nd-floor-primary-bedroom.jpg",
      alt: "Residence 1943 Primary Bedroom",
      thumbnail: "https://www.centurycommunities.com/globalassets/century/assets/elevations--amenities/ccs/ccs-nv/bravado/models/1943/5056-wind-spgs-st---web-quality---023---26-2nd-floor-primary-bedroom.jpg?width=100&height=100&rmode=crop&rsampler=bicubic&compand=true",
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
                  className="object-cover"
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
                  className="object-cover"
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
