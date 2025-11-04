# Google Setup Checklist for BravadoHomes.com

## ✅ Current Status: FULLY CONFIGURED

### 1. Google Search Console Verification
- **Status**: ✅ Configured
- **Location**: `app/layout-server.tsx` (line 94)
- **Method**: Meta tag verification
- **Code**: `googleVerification` from domain config
- **Domains**:
  - `bravadohomes.com`: Uses `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env var
  - `mayfieldestateslasvegas.com`: `w71TQeqa-UkSYT-8KlV3Ut4Fr3YY1JfVF6r3alXfoQs`

### 2. Google Analytics 4 (GA4)
- **Status**: ✅ Active
- **Location**: `app/components/google-analytics.tsx`
- **Implementation**: Next.js Script component with `afterInteractive` strategy
- **Measurement ID**: `G-6H8SG3KDBY` (default) or from domain config
- **Multi-domain Support**: ✅ Yes - dynamic measurement IDs per domain

### 3. Sitemap.xml
- **Status**: ✅ Generated Dynamically
- **Location**: `app/sitemap.ts`
- **URL**: `https://bravadohomes.com/sitemap.xml`
- **Pages Included**:
  - Homepage (priority: 1.0)
  - Floor Plans (priority: 0.95)
  - Contact (priority: 0.95)
  - Model Pages (priority: 0.9)
  - Community, Location, Reviews (priority: 0.85)
  - Lennar Comparison (priority: 0.8)
  - All other pages with appropriate priorities
  - Blog posts (priority: 0.5)
- **Referenced in**: `robots.txt`

### 4. Robots.txt
- **Status**: ✅ Configured
- **Location**: `app/robots.ts`
- **Googlebot Rules**: ✅ Explicitly configured
- **Sitemap Reference**: ✅ Yes
- **Disallowed Paths**: `/api/`, `/admin/`, `/private/`, `/_next/static/`, `/_next/image/`

### 5. Structured Data (Schema.org)
- **Status**: ✅ Comprehensive
- **Location**: `app/components/schema.tsx`
- **Types Included**:
  - HomeAndConstructionBusiness
  - RealEstateAgent
  - LocalBusiness
  - Organization
  - WebSite
  - WebPage
- **Additional**: AI Optimization Schema (`app/components/ai-optimization-schema.tsx`)
  - FAQPage
  - Article
  - HowTo

### 6. Metadata & SEO
- **Status**: ✅ Optimized
- **Title Tags**: Dynamic, keyword-optimized per page
- **Meta Descriptions**: Compelling, keyword-rich
- **Canonical URLs**: ✅ Every page has unique canonical
- **Open Graph**: ✅ Configured for social sharing
- **Twitter Cards**: ✅ Configured
- **Keywords**: Strategic keyword targeting

### 7. Page-Specific Optimizations
- **Homepage**: Optimized for "Bravado Homes", "Century Communities Las Vegas"
- **Floor Plans**: Optimized for "Bravado homes las vegas floor plans"
- **Reviews**: Optimized for "Bravado homes las vegas reviews"
- **Century Communities**: Optimized for builder comparisons
- **Lennar Comparison**: Captures "Lennar homes Las Vegas" searches

### 8. Technical SEO
- **HTTPS**: ✅ Enforced (middleware redirect)
- **Mobile-Friendly**: ✅ Responsive design
- **Page Speed**: ✅ Optimized images, Next.js optimizations
- **Core Web Vitals**: ✅ Vercel Speed Insights integrated
- **404 Handling**: ✅ Custom not-found page

## 📋 Verification Steps

### Google Search Console Setup
1. Visit: https://search.google.com/search-console
2. Add property: `https://bravadohomes.com`
3. Verify ownership using HTML tag method (code already in metadata)
4. Submit sitemap: `https://bravadohomes.com/sitemap.xml`
5. Request indexing for key pages

### Google Analytics Verification
1. Visit: https://analytics.google.com
2. Check property: `G-6H8SG3KDBY`
3. Verify real-time data is flowing
4. Set up goals/conversions as needed

### Testing URLs
- **Sitemap**: https://bravadohomes.com/sitemap.xml
- **Robots**: https://bravadohomes.com/robots.txt
- **Homepage**: https://bravadohomes.com
- **Schema Validation**: Use Google Rich Results Test

## 🎯 Key Pages for Google Indexing Priority

1. **Homepage** - `/` (Priority: 1.0)
2. **Floor Plans** - `/floor-plans` (Priority: 0.95)
3. **Contact** - `/contact` (Priority: 0.95)
4. **Model Pages** - `/models/residence-*` (Priority: 0.9)
5. **Reviews** - `/reviews` (Priority: 0.85)
6. **Century Communities** - `/century-communities` (Priority: 0.7)
7. **Lennar Comparison** - `/lennar-vs-century-communities` (Priority: 0.8)

## 🔍 Environment Variables Needed

Make sure these are set in Vercel:
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - For bravadohomes.com verification
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - For Google Analytics (optional, has default)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID_MAYFIELD` - For mayfield domain (optional)

## ✨ Next Steps

1. **Submit to Google Search Console** (if not already done)
2. **Monitor Search Performance** in Search Console
3. **Track in Google Analytics** - Verify events and conversions
4. **Request Indexing** for new pages after deployment
5. **Monitor Core Web Vitals** in Search Console
6. **Set up Alerts** for indexing issues

## 📊 Expected Results

With this setup, you should see:
- ✅ All pages indexed by Google
- ✅ Rich results in search (business info, reviews, etc.)
- ✅ Accurate traffic data in Analytics
- ✅ Search Console insights and recommendations
- ✅ Improved rankings for target keywords

---

**Last Updated**: November 2025
**Status**: Production Ready ✅

