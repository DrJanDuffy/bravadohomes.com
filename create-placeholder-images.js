const fs = require('fs');
const path = require('path');

// Create placeholder images using SVG
const createSVGPlaceholder = (width, height, text, bgColor = '#f3f4f6', textColor = '#6b7280') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`;
};

// Create directories if they don't exist
const createDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Create placeholder images
const images = [
  {
    path: 'public/images/bravado/exterior/community-hero.jpg',
    svg: createSVGPlaceholder(1200, 600, 'Bravado Community Exterior', '#1e40af', '#ffffff'),
    description: 'Hero background image'
  },
  {
    path: 'public/images/bravado/exterior/community-aerial.jpg',
    svg: createSVGPlaceholder(800, 600, 'Aerial View of Bravado', '#3b82f6', '#ffffff'),
    description: 'Aerial view of community'
  },
  {
    path: 'public/images/bravado/exterior/street-view.jpg',
    svg: createSVGPlaceholder(800, 600, 'Bravado Street View', '#60a5fa', '#ffffff'),
    description: 'Street view of community'
  },
  {
    path: 'public/images/bravado/floor-plans/residence-1792.jpg',
    svg: createSVGPlaceholder(400, 300, 'Residence 1792 Floor Plan', '#f59e0b', '#ffffff'),
    description: 'Residence 1792 floor plan'
  },
  {
    path: 'public/images/bravado/floor-plans/residence-1943.jpg',
    svg: createSVGPlaceholder(400, 300, 'Residence 1943 Floor Plan', '#f59e0b', '#ffffff'),
    description: 'Residence 1943 floor plan'
  },
  {
    path: 'public/images/bravado/floor-plans/residence-2119.jpg',
    svg: createSVGPlaceholder(400, 300, 'Residence 2119 Floor Plan', '#f59e0b', '#ffffff'),
    description: 'Residence 2119 floor plan'
  },
  {
    path: 'public/images/bravado/interior/kitchen.jpg',
    svg: createSVGPlaceholder(600, 400, 'Modern Kitchen', '#10b981', '#ffffff'),
    description: 'Modern kitchen interior'
  },
  {
    path: 'public/images/bravado/interior/living-room.jpg',
    svg: createSVGPlaceholder(600, 400, 'Living Room', '#8b5cf6', '#ffffff'),
    description: 'Living room interior'
  },
  {
    path: 'public/images/bravado/community/amenities.jpg',
    svg: createSVGPlaceholder(800, 600, 'Community Amenities', '#06b6d4', '#ffffff'),
    description: 'Community amenities'
  }
];

// Create all placeholder images
images.forEach(image => {
  createDir(path.dirname(image.path));
  fs.writeFileSync(image.path.replace('.jpg', '.svg'), image.svg);
  console.log(`Created: ${image.path.replace('.jpg', '.svg')} - ${image.description}`);
});

console.log('\n✅ All placeholder images created successfully!');
console.log('\n📝 Next steps:');
console.log('1. Replace these SVG placeholders with actual images from Century Communities');
console.log('2. Use the same filenames but with .jpg extensions');
console.log('3. Recommended image sizes are included in the filenames');
