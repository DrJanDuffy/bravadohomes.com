#!/usr/bin/env node

/**
 * 🖼️ Bravado Images Helper Script
 * 
 * This script helps you quickly add images to your Bravado Homes website.
 * 
 * Usage:
 * 1. Download images from Century Communities Bravado page
 * 2. Run: node add-images.js
 * 3. Follow the prompts to place images correctly
 */

const fs = require('fs');
const path = require('path');

console.log('🏡 Bravado Homes - Image Setup Helper\n');

// Check if images directory exists
const imagesDir = path.join(__dirname, 'public', 'images', 'bravado');
if (!fs.existsSync(imagesDir)) {
    console.log('❌ Images directory not found. Please run the main setup first.');
    process.exit(1);
}

console.log('📋 Essential Images to Add:\n');

const essentialImages = [
    {
        name: 'community-hero.jpg',
        path: 'exterior/community-hero.jpg',
        description: 'Beautiful community exterior for homepage hero background',
        emoji: '🏡'
    },
    {
        name: 'residence-1792-kitchen.jpg',
        path: 'interior/residence-1792-kitchen.jpg',
        description: 'Kitchen photo for Residence 1792 floor plan card',
        emoji: '🍳'
    },
    {
        name: 'residence-1943-living.jpg',
        path: 'interior/residence-1943-living.jpg',
        description: 'Living room photo for Residence 1943 floor plan card',
        emoji: '🛋️'
    },
    {
        name: 'residence-2119-master.jpg',
        path: 'interior/residence-2119-master.jpg',
        description: 'Master suite photo for Residence 2119 floor plan card',
        emoji: '🛏️'
    },
    {
        name: 'community-entrance.jpg',
        path: 'exterior/community-entrance.jpg',
        description: 'Gated community entrance for community sections',
        emoji: '🚪'
    }
];

essentialImages.forEach((img, index) => {
    const fullPath = path.join(imagesDir, img.path);
    const exists = fs.existsSync(fullPath);
    const status = exists ? '✅' : '❌';
    
    console.log(`${index + 1}. ${status} ${img.emoji} ${img.name}`);
    console.log(`   📁 Save to: public/images/bravado/${img.path}`);
    console.log(`   📝 ${img.description}\n`);
});

console.log('🎯 Quick Setup Instructions:\n');
console.log('1. Go to: https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/north-las-vegas/bravado/');
console.log('2. Right-click on images → "Save image as..."');
console.log('3. Rename to match the filenames above');
console.log('4. Save to the correct folders shown above');
console.log('5. Refresh your website - images will appear automatically!\n');

console.log('💡 Pro Tip: Start with the first 3 images for immediate visual impact!');
