const fs = require('fs');

const pages = [
  'app/page.tsx',
  'app/reviews/page.tsx',
  'app/floor-plans/page.tsx',
  'app/century-communities/page.tsx',
];

pages.forEach(pagePath => {
  try {
    const content = fs.readFileSync(pagePath, 'utf8');
    const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
    const h2Count = (content.match(/<h2[^>]*>/gi) || []).length;
    const h3Count = (content.match(/<h3[^>]*>/gi) || []).length;
    let textContent = content.replace(/{\/\*[\s\S]*?\*\/}/g, '');
    textContent = textContent.replace(/import[\s\S]*?from\s+['"][^'"]*['"];?\s*/g, '');
    textContent = textContent.replace(/<[^>]*>/g, ' ');
    textContent = textContent.replace(/{[^}]*}/g, ' ');
    textContent = textContent.replace(/['"`][^'"`]*['"`]/g, ' ');
    textContent = textContent.replace(/\s+/g, ' ').trim();
    const words = textContent.split(/\s+/).filter(w => w.length > 0 && !w.match(/^[^a-zA-Z]*$/));
    const wordCount = words.length;
    const status = wordCount >= 1500 ? '✅' : '❌';
    console.log(`${status} ${pagePath}: H1=${h1Count}, H2=${h2Count}, H3=${h3Count}, Words=${wordCount}`);
  } catch (e) {
    console.log(`${pagePath}: ERROR`);
  }
});

