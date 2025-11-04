/**
 * Performance Audit Script
 * 
 * This script provides guidance for performance optimization auditing.
 * Run Google PageSpeed Insights and other performance checks.
 * 
 * Usage:
 * 1. Run Google PageSpeed Insights on all main pages
 * 2. Check Core Web Vitals (LCP, FID, CLS)
 * 3. Audit image compression
 * 4. Verify lazy loading
 * 5. Check font loading and critical CSS
 * 
 * Target: 90+ PageSpeed score on mobile and desktop
 */

export interface PerformanceMetrics {
  page: string
  mobileScore?: number
  desktopScore?: number
  lcp?: number // Largest Contentful Paint (target: <2.5s)
  fid?: number // First Input Delay (target: <100ms)
  cls?: number // Cumulative Layout Shift (target: <0.1)
  fcp?: number // First Contentful Paint
  ttfb?: number // Time to First Byte
}

export const TARGET_METRICS: PerformanceMetrics = {
  page: 'target',
  mobileScore: 90,
  desktopScore: 90,
  lcp: 2.5,
  fid: 100,
  cls: 0.1,
  fcp: 1.8,
  ttfb: 0.8
}

export const MAIN_PAGES_TO_AUDIT = [
  '/',
  '/buyers/55-plus',
  '/buyers/first-time',
  '/buyers/divorce',
  '/buyers/investors',
  '/about',
  '/transparency',
  '/case-studies',
  '/research',
  '/neighborhoods/summerlin',
  '/floor-plans',
  '/contact'
]

export const PERFORMANCE_CHECKLIST = [
  {
    category: 'Images',
    items: [
      'All images use Next.js Image component',
      'Images are in WebP or AVIF format',
      'Lazy loading is enabled on below-fold images',
      'Image sizes are optimized (not larger than needed)',
      'Alt text is provided for all images'
    ]
  },
  {
    category: 'Fonts',
    items: [
      'Fonts are preloaded for critical text',
      'Font-display: swap is used',
      'Unused fonts are removed',
      'Font subsets are used when possible'
    ]
  },
  {
    category: 'CSS',
    items: [
      'Critical CSS is inlined',
      'Unused CSS is removed',
      'CSS is minified',
      'CSS is loaded efficiently'
    ]
  },
  {
    category: 'JavaScript',
    items: [
      'JavaScript is minified',
      'Unused JavaScript is removed',
      'Code splitting is implemented',
      'Third-party scripts are optimized'
    ]
  },
  {
    category: 'Core Web Vitals',
    items: [
      'LCP (Largest Contentful Paint) < 2.5s',
      'FID (First Input Delay) < 100ms',
      'CLS (Cumulative Layout Shift) < 0.1',
      'FCP (First Contentful Paint) < 1.8s',
      'TTFB (Time to First Byte) < 0.8s'
    ]
  },
  {
    category: 'Mobile Optimization',
    items: [
      'Touch targets are at least 44x44px',
      'Viewport is properly configured',
      'Mobile load time < 3 seconds',
      'RealScout widgets are mobile-optimized',
      'Forms are mobile-friendly'
    ]
  }
]

export function generateAuditReport(metrics: PerformanceMetrics[]): string {
  let report = '# Performance Audit Report\n\n'
  report += `Generated: ${new Date().toISOString()}\n\n`
  
  report += '## Target Metrics\n\n'
  report += `- Mobile Score: ${TARGET_METRICS.mobileScore}+\n`
  report += `- Desktop Score: ${TARGET_METRICS.desktopScore}+\n`
  report += `- LCP: <${TARGET_METRICS.lcp}s\n`
  report += `- FID: <${TARGET_METRICS.fid}ms\n`
  report += `- CLS: <${TARGET_METRICS.cls}\n\n`
  
  report += '## Page Performance\n\n'
  metrics.forEach(metric => {
    report += `### ${metric.page}\n\n`
    if (metric.mobileScore) {
      report += `- Mobile Score: ${metric.mobileScore} ${metric.mobileScore >= 90 ? '✅' : '⚠️'}\n`
    }
    if (metric.desktopScore) {
      report += `- Desktop Score: ${metric.desktopScore} ${metric.desktopScore >= 90 ? '✅' : '⚠️'}\n`
    }
    if (metric.lcp) {
      report += `- LCP: ${metric.lcp}s ${metric.lcp <= 2.5 ? '✅' : '⚠️'}\n`
    }
    if (metric.fid) {
      report += `- FID: ${metric.fid}ms ${metric.fid <= 100 ? '✅' : '⚠️'}\n`
    }
    if (metric.cls) {
      report += `- CLS: ${metric.cls} ${metric.cls <= 0.1 ? '✅' : '⚠️'}\n`
    }
    report += '\n'
  })
  
  report += '## Optimization Checklist\n\n'
  PERFORMANCE_CHECKLIST.forEach(category => {
    report += `### ${category.category}\n\n`
    category.items.forEach(item => {
      report += `- [ ] ${item}\n`
    })
    report += '\n'
  })
  
  return report
}

// Instructions for running the audit
export const AUDIT_INSTRUCTIONS = `
# Performance Audit Instructions

## 1. Google PageSpeed Insights
- Visit: https://pagespeed.web.dev/
- Test all main pages: ${MAIN_PAGES_TO_AUDIT.join(', ')}
- Record mobile and desktop scores
- Target: 90+ on both mobile and desktop

## 2. Core Web Vitals
- Use Google Search Console to monitor Core Web Vitals
- Check LCP (Largest Contentful Paint) - target: <2.5s
- Check FID (First Input Delay) - target: <100ms
- Check CLS (Cumulative Layout Shift) - target: <0.1

## 3. Image Optimization
- Verify all images use Next.js Image component
- Check that images are served in WebP/AVIF format
- Ensure lazy loading is enabled
- Verify image sizes are appropriate

## 4. Mobile Testing
- Test on real mobile devices
- Check touch target sizes (min 44x44px)
- Verify mobile load times < 3 seconds
- Test RealScout widgets on mobile

## 5. Generate Report
- Use generateAuditReport() function with collected metrics
- Document findings and recommendations
- Track improvements over time
`
