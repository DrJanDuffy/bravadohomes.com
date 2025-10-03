# Bravado Images Directory

This directory contains images for the Bravado Homes website, sourced from the Century Communities Bravado page.

## Directory Structure

- `exterior/` - Exterior home photos, community entrances, landscaping
- `interior/` - Interior photos (kitchens, living rooms, bedrooms, bathrooms)
- `floor-plans/` - Floor plan images and layouts
- `community/` - Community amenities, parks, walking paths

## Image Sources

All images should be sourced from the official Century Communities Bravado page:
https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/north-las-vegas/bravado/

## Recommended Images to Download

### Exterior Images:
- Houses with fences around them
- Building signs and entrances
- Brick walkways and landscaping
- Community paths with trees and plants
- Stone monuments and water features

### Interior Images:
- Kitchens with white and black cabinets
- Large kitchen islands
- Living rooms with couches and large windows
- Dining rooms with tables and chairs
- Bathrooms with glass showers
- Bedrooms with various layouts

### Floor Plan Images:
- Residence 1792 layout
- Residence 1943 layout
- Residence 2119 layout

### Community Images:
- Gated community entrance
- Community park with grass area
- Walking paths
- Neighborhood views

## Usage in Code

Images should be referenced using Next.js Image component:

```jsx
import Image from 'next/image'

<Image
  src="/images/bravado/exterior/community-entrance.jpg"
  alt="Bravado Community Entrance"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## Image Optimization

- Use WebP format when possible
- Optimize for web (compress but maintain quality)
- Include alt text for accessibility
- Use appropriate dimensions for responsive design
