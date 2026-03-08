

## Build a Standalone FAQ / Knowledge Base Page

### What We're Building
A dedicated `/faq` page with an accordion layout covering common landscaping questions organized by category (Project Planning, Costs & Pricing, Materials, Maintenance, Permits & HOA). Includes FAQPage JSON-LD structured data for Google "People Also Ask" rich snippets, plus a CTA to the contact page.

### Plan

1. **Create `src/pages/FAQ.tsx`**
   - Hero section matching the existing page pattern (Navbar, SEOHead, hero with title/subtitle)
   - Category sections with questions grouped under headings (e.g., "Project Planning," "Costs & Pricing," "Materials & Design," "Maintenance," "Permits & HOA")
   - Each category uses the existing `Accordion` component for expandable Q&A
   - ~20-25 curated questions relevant to Upstate SC landscaping
   - Bottom CTA section linking to `/contact`
   - FAQPage + BreadcrumbList JSON-LD structured data

2. **Update `src/App.tsx`**
   - Add route: `/faq` → `<FAQ />`

3. **Update `src/components/Navbar.tsx`**
   - Add "FAQ" link to both desktop and mobile navigation

4. **Update `public/sitemap.xml`**
   - Add `/faq` entry

5. **Update `src/components/Footer.tsx`**
   - Add FAQ link to the footer navigation

### Sample FAQ Categories
- **Project Planning**: Timelines, consultation process, best season to start
- **Costs & Pricing**: Ballpark ranges, payment terms, what affects cost
- **Materials & Design**: Stone vs pavers, drainage considerations, lighting options
- **Maintenance**: Seasonal care, irrigation, plant health
- **Permits & HOA**: When permits are needed, HOA navigation, setback requirements

All FAQ content will be hardcoded with SEO-optimized answers specific to the Upstate SC market. The FAQPage schema will make these eligible for rich snippets in Google search results.

