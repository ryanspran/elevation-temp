

## Create 7 City-Specific Service Area Landing Pages

Add city landing pages under `/areas/` for local SEO, plus an index page, and link them from the homepage.

### Files to Create

1. **`src/data/cityPages.ts`** — Central data file containing all 7 city configurations (hero text, intro paragraphs, neighborhoods, emphasized service slugs, meta titles/descriptions). Single source of truth.

2. **`src/pages/CityPage.tsx`** — Dynamic page component (uses `useParams` for city slug). Sections:
   - Breadcrumbs (Home > Areas > City, SC)
   - Hero with H1, subheadline, dual CTA buttons
   - Unique 2-3 paragraph city introduction
   - Services grid (6-8 cards linking to `/services/[slug]`, reusing service card design)
   - "Why [City] Homeowners Choose Us" differentiators
   - Featured Neighborhoods list
   - Bottom CTA section
   - SEOHead with unique meta per city

3. **`src/pages/Areas.tsx`** — Index page at `/areas` with grid of city cards, intro text, SC map, and bottom CTA.

### Files to Modify

4. **`src/App.tsx`** — Add 3 routes:
   - `/areas` → Areas index
   - `/areas/:citySlug` → CityPage
   
5. **`src/pages/Index.tsx`** — In the "Areas We Cover" section (~line 372-378), wrap each city name in a `<Link>` to its `/areas/` page. Only the 7 cities with pages get links; the other 3 (Spartanburg, Anderson, Fountain Inn) remain plain text.

### Design Approach

- Reuse existing patterns: navy/gold palette, Playfair Display headings, same CTA button styles, Breadcrumbs component, SEOHead component
- Pull service images and names from `src/data/services.ts` for the service grid cards
- Use the existing hero background image for city pages
- No JSON-LD schema on these pages
- No navigation menu changes
- All unique content (intros, neighborhoods, differentiators) hardcoded in the data file per the user's specifications

### Content Summary

Each city gets genuinely unique intro paragraphs, 4-6 featured neighborhoods with descriptions, city-specific service emphasis, and unique meta descriptions — all as specified in the request.

