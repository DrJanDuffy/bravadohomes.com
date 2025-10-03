#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🖼️ Activating Images on Bravado Website...\n');

const homepagePath = path.join(__dirname, 'app', 'page.tsx');
let content = fs.readFileSync(homepagePath, 'utf8');

// Check if images exist
const imagesToCheck = [
    'public/images/bravado/exterior/community-hero.jpg',
    'public/images/bravado/interior/residence-1792-kitchen.jpg',
    'public/images/bravado/interior/residence-1943-living.jpg',
    'public/images/bravado/interior/residence-2119-master.jpg'
];

let imagesFound = 0;
imagesToCheck.forEach(imagePath => {
    if (fs.existsSync(imagePath)) {
        console.log(`✅ Found: ${imagePath.split('/').pop()}`);
        imagesFound++;
    } else {
        console.log(`❌ Missing: ${imagePath.split('/').pop()}`);
    }
});

if (imagesFound === 0) {
    console.log('\n📋 No images found yet. Please download the images first:');
    console.log('1. Go to Century Communities Bravado page');
    console.log('2. Download the 4 essential images listed above');
    console.log('3. Save them with the exact filenames shown');
    console.log('4. Run this script again to activate them\n');
} else if (imagesFound === imagesToCheck.length) {
    console.log('\n🎉 All images found! Activating them now...\n');
    
    // Uncomment the hero image
    content = content.replace(
        /\/\* Uncomment when you add the image:\s*\n\s*<Image[\s\S]*?\/>\s*\n\s*\*\//g,
        `<Image
            src="/images/bravado/exterior/community-hero.jpg"
            alt="Bravado Community Exterior"
            fill
            className="object-cover opacity-20"
            priority
          />`
    );
    
    // Uncomment floor plan images
    content = content.replace(
        /\/\* Uncomment when you add the image:\s*\n\s*<Image[\s\S]*?\/>\s*\n\s*\*\//g,
        (match) => {
            if (match.includes('residence-1792-kitchen.jpg')) {
                return `<Image
                  src="/images/bravado/interior/residence-1792-kitchen.jpg"
                  alt="Residence 1792 Kitchen"
                  fill
                  className="object-cover"
                />`;
            } else if (match.includes('residence-1943-living.jpg')) {
                return `<Image
                  src="/images/bravado/interior/residence-1943-living.jpg"
                  alt="Residence 1943 Living Room"
                  fill
                  className="object-cover"
                />`;
            } else if (match.includes('residence-2119-master.jpg')) {
                return `<Image
                  src="/images/bravado/interior/residence-2119-master.jpg"
                  alt="Residence 2119 Master Suite"
                  fill
                  className="object-cover"
                />`;
            }
            return match;
        }
    );
    
    // Remove placeholder content
    content = content.replace(
        /<div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center">[\s\S]*?<\/div>/g,
        ''
    );
    
    content = content.replace(
        /<div className="text-center text-gray-500">[\s\S]*?<\/div>/g,
        ''
    );
    
    fs.writeFileSync(homepagePath, content);
    console.log('✅ Images activated! Your website now shows the real photos.');
    console.log('🚀 Refresh your browser to see the changes!');
} else {
    console.log(`\n📊 Found ${imagesFound} out of ${imagesToCheck.length} images.`);
    console.log('💡 Download the missing images and run this script again to activate them all.');
}

console.log('\n🎯 Next Steps:');
console.log('1. Download missing images from Century Communities page');
console.log('2. Run: node activate-images.js');
console.log('3. Refresh your website to see the beautiful images!');
