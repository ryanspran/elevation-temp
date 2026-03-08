

## Articles/Blog Page

Create an articles/blog page inspired by the uploaded reference design, adapted to the Elevation Landscapes brand (navy, gold, cream). Accessible from the footer only.

### Changes

**1. Create `src/pages/Articles.tsx`**
- Hero section with a dark overlay background, breadcrumb, and heading ("Landscape Insights" or similar)
- "Popular Articles" section: bento-style layout with one large featured card on the left and 2-3 smaller cards stacked on the right (mimicking the reference)
- "Latest Articles" section: 3-column grid of article cards with placeholder images, titles, category tags, and dates
- All placeholder content themed around landscaping/hardscaping
- Uses Navbar + Footer layout consistent with other pages
- Placeholder images reuse existing assets from `src/assets/services/` and `src/assets/portfolio/`

**2. Update `src/App.tsx`**
- Add route: `/articles` → `<Articles />`

**3. Update `src/components/Footer.tsx`**
- Add an "Articles" link in the footer links section, alongside Services/Contact

### Article Card Design
- Rounded image thumbnail at top
- Category badge (e.g., "Hardscaping", "Design Tips")
- Title in Playfair Display
- Short excerpt
- Date stamp
- Cream background card with subtle border, matching site aesthetic

### Placeholder Articles (6 total)
Topics like: retaining wall design, outdoor kitchen trends, seasonal lawn care, paver patio maintenance, landscape lighting tips, drainage solutions.

