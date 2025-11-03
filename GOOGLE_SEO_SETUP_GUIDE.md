# Google SEO Setup Guide for Bravado Homes

This guide will help you complete the Google setup for your website to ensure optimal search engine visibility.

## ✅ Already Implemented

Your site already has excellent SEO foundations:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Structured data (Schema.org) markup
- ✅ XML sitemap generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ Geo-location metadata
- ✅ Mobile-responsive viewport settings
- ✅ Vercel Analytics & Speed Insights

## 🔧 Required Setup Steps

### 1. Google Search Console Verification

**Step 1: Access Google Search Console**
1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Enter your domain: `bravadohomes.com`
4. Choose "Domain" property type (recommended) or "URL prefix"

**Step 2: Verify Ownership**
Google will provide you with a verification code. You have two options:

**Option A: HTML Meta Tag (Recommended)**
1. Copy the verification code from Google Search Console
2. Update `app/layout.tsx` line 105:
   ```typescript
   verification: {
     google: 'YOUR_ACTUAL_VERIFICATION_CODE_HERE', // Replace with code from Search Console
   },
   ```

**Option B: HTML File Upload**
1. Download the HTML verification file from Google
2. Place it in the `public/` folder
3. It will be automatically served at `https://bravadohomes.com/google[code].html`

**Step 3: Verify**
1. Click "Verify" in Google Search Console
2. Once verified, submit your sitemap:
   - Go to "Sitemaps" in the left menu
   - Enter: `https://bravadohomes.com/sitemap.xml`
   - Click "Submit"

### 2. Google Analytics 4 (GA4) Setup

**Step 1: Create GA4 Property**
1. Go to https://analytics.google.com
2. Create a new GA4 property (or use existing)
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)

**Step 2: Add Environment Variable**
1. Create or update `.env.local` in your project root:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID

**Step 3: Deploy**
1. The Google Analytics component is already integrated in `app/components/google-analytics.tsx`
2. It's automatically included in the layout
3. After deploying with the environment variable, analytics will start tracking

**Note:** For Vercel deployments:
- Add the environment variable in Vercel Dashboard → Settings → Environment Variables
- Redeploy after adding the variable

### 3. Google Business Profile (Optional but Recommended)

**Step 1: Create/Claim Business Profile**
1. Go to https://business.google.com
2. Create or claim your business listing
3. Use the exact business information:
   - Name: "Bravado Homes by Dr. Janet Duffy"
   - Address: 5060 Wind Springs Street, North Las Vegas, NV 89031
   - Phone: (702) 500-1955
   - Category: Real Estate Agent / Real Estate Service

**Step 2: Verify**
- Follow Google's verification process (usually via phone or mail)

### 4. Additional Google Services

#### Google My Business (Now Google Business Profile)
- Already configured in structured data
- Link your Business Profile to your website

#### Google Tag Manager (Optional)
If you want to manage multiple tracking scripts:
1. Create a GTM container at https://tagmanager.google.com
2. Replace the Google Analytics component with GTM
3. Add GA4 through GTM interface

## 📋 Post-Setup Checklist

After completing the above steps:

- [ ] Google Search Console verified
- [ ] Sitemap submitted and indexed
- [ ] Google Analytics tracking active (check in real-time reports)
- [ ] Google Business Profile created/claimed
- [ ] Test rich results in Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Test mobile-friendliness: https://search.google.com/test/mobile-friendly
- [ ] Check Core Web Vitals in Search Console
- [ ] Verify structured data: https://validator.schema.org

## 🔍 Monitoring & Optimization

### Google Search Console
- Monitor search performance weekly
- Check for indexing issues
- Review search queries and impressions
- Monitor Core Web Vitals scores

### Google Analytics
- Review traffic sources
- Track conversion goals (phone calls, form submissions)
- Monitor user behavior and engagement
- Set up custom events for key actions

### Regular SEO Tasks
- Update sitemap when adding new pages
- Monitor keyword rankings
- Review and optimize page titles/descriptions
- Check for broken links
- Update content regularly

## 🚀 Quick Start Commands

After adding environment variables:

```bash
# For local development
pnpm dev

# For production build
vercel build
```

## 📞 Support

If you encounter issues:
1. Check Google Search Console for specific error messages
2. Verify environment variables are set correctly
3. Ensure DNS is properly configured
4. Check that sitemap.xml is accessible at `/sitemap.xml`

## 📝 Notes

- **Google Search Console**: Takes 24-48 hours to start showing data after verification
- **Google Analytics**: Starts tracking immediately after deployment
- **Indexing**: Can take days to weeks for all pages to be indexed
- **Rich Results**: May take time to appear after schema markup is validated

---

**Last Updated**: January 2025
**Status**: Ready for Google verification code and GA4 measurement ID

