# Multi-Domain SEO/AI Optimization Setup

## ✅ Implementation Complete

Your site now supports **multiple domains** with automatic SEO and AI optimization. All domains share the same codebase but display domain-specific content.

## 🌐 Supported Domains

### Currently Configured:
1. **bravadohomes.com** (Primary/Default)
   - Location: North Las Vegas, NV 89031
   - Google Verification: Via environment variable
   - GA Measurement ID: G-6H8SG3KDBY

2. **mayfieldestateslasvegas.com**
   - Location: Las Vegas, NV (TBD - needs update)
   - Google Verification: `w71TQeqa-UkSYT-8KlV3Ut4Fr3YY1JfVF6r3alXfoQs`
   - GA Measurement ID: Via environment variable

## 🎯 Features by Domain

### Automatic Domain Detection
- **Server-side**: Detects domain from request headers
- **Client-side**: Detects domain from window.location
- **Fallback**: Defaults to `bravadohomes.com` if domain not recognized

### Domain-Specific Content
Each domain automatically displays:
- ✅ Correct business name
- ✅ Domain-specific location (city, state, zip)
- ✅ Domain-specific contact information
- ✅ Domain-specific Google verification code
- ✅ Domain-specific GA measurement ID
- ✅ Domain-specific base URLs in all schemas
- ✅ Domain-specific metadata (title, description, keywords)

## 📁 File Structure

### Configuration Files:
- `app/domains-config.ts` - Central domain configuration
- `app/utils/domain.ts` - Domain detection utilities
- `app/layout-server.tsx` - Server-side metadata generation

### Domain-Aware Components:
- `app/layout.tsx` - Uses dynamic metadata
- `app/sitemap.ts` - Domain-specific sitemap
- `app/robots.ts` - Domain-specific robots.txt
- `app/components/schema.tsx` - Domain-specific structured data
- `app/components/ai-optimization-schema.tsx` - Domain-specific AI schemas
- `app/components/google-analytics.tsx` - Domain-specific GA tracking

## 🔧 Adding a New Domain

### Step 1: Add Domain Configuration
Edit `app/domains-config.ts`:

```typescript
'newdomain.com': {
  domain: 'newdomain.com',
  baseUrl: 'https://newdomain.com',
  googleVerification: 'your-verification-code',
  gaMeasurementId: 'G-XXXXXXXXXX',
  businessName: 'Your Business Name',
  location: {
    address: '123 Main Street',
    city: 'City Name',
    state: 'ST',
    zip: '12345',
    coordinates: {
      lat: '36.1234',
      lng: '-115.5678',
    },
  },
  contact: {
    phone: '+1234567890',
    email: 'contact@example.com',
  },
  realEstateAgent: {
    name: 'Dr. Janet Duffy',
    licenseNumber: 'S.0197614',
  },
},
```

### Step 2: Update Domain Validation
Edit `app/utils/domain.ts`:

```typescript
export function isValidDomain(domain: string): boolean {
  return domain === 'bravadohomes.com' 
    || domain === 'mayfieldestateslasvegas.com'
    || domain === 'newdomain.com'  // Add here
}
```

### Step 3: Deploy DNS Configuration
- Point domain to Vercel
- Add domain in Vercel project settings
- Configure DNS records (A, CNAME, MX, TXT)

### Step 4: Set Environment Variables (if needed)
In Vercel Dashboard → Settings → Environment Variables:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID_NEWDOMAIN` (if different GA ID)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (if using env var)

## 🔍 SEO Optimizations Applied

### For ALL Domains:
- ✅ Dynamic metadata (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Structured data (Schema.org)
- ✅ AI-optimized schemas (FAQ, Article, HowTo)
- ✅ Robots.txt with all crawlers allowed
- ✅ XML sitemap
- ✅ Google Analytics tracking
- ✅ Google Search Console verification
- ✅ Mobile-responsive viewport
- ✅ Geo-location metadata

## 🤖 AI Search Engine Optimization

### All Domains Include:
- ✅ FAQPage schema with domain-specific questions
- ✅ Article schema with domain-specific content
- ✅ HowTo schema with domain-specific steps
- ✅ Robots meta tags for AI bots
- ✅ Comprehensive robots.txt for all crawlers

## 📊 Monitoring

### Google Search Console
1. Add each domain as a separate property
2. Verify ownership using domain-specific verification code
3. Submit domain-specific sitemap: `https://yourdomain.com/sitemap.xml`

### Google Analytics
- Each domain can use its own GA4 Measurement ID
- Configured in `domains-config.ts` or environment variables
- Automatic tracking based on domain

## 🚀 Deployment

### Vercel Configuration:
1. Add all domains in Vercel project settings
2. Each domain will automatically use correct configuration
3. No code changes needed when adding domains (just config)

### DNS Configuration:
Each domain needs:
- A record pointing to Vercel
- CNAME for www → Vercel DNS
- MX records for email (if needed)
- TXT records for verification (Google, Vercel, etc.)

## 📝 Notes

### Current Limitations:
- Mayfield Estates needs location details updated (marked as "TBD")
- Some hardcoded Bravado-specific content may need updating for other domains

### Future Enhancements:
- Domain-specific floor plans/products
- Domain-specific images
- Domain-specific blog posts
- Domain-specific navigation

## ✅ Verification Checklist

For each domain:
- [ ] Domain added to `domains-config.ts`
- [ ] Domain added to `isValidDomain()` function
- [ ] DNS configured correctly
- [ ] Domain added in Vercel
- [ ] Google Search Console verified
- [ ] Google Analytics tracking working
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Metadata displaying correctly
- [ ] Schema markup validating
- [ ] AI schemas displaying correctly

---

**Last Updated**: January 2025  
**Status**: ✅ Multi-Domain System Active

