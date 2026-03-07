

# Plan: Create Subcontractor Partnership Page

## Overview
Create a new standalone page at `/subcontractor` with the provided copy, high-end imagery reusing existing assets, a footer link, SEO metadata, and sitemap entry. The page will not appear in the top navigation.

## Changes

### 1. Create `src/pages/Subcontractor.tsx`
A new page matching the site's luxury aesthetic with these sections:
- **Hero** — Full-width background image (reuse `hero-bg.jpg`), dark overlay, H1 + subheadline + CTA buttons
- **Body intro** — Cream background, the long intro paragraph
- **"Why Partner" section** — Navy background with 6 cards (icon + H3 + body copy) in a 2×3 grid, with a large image on the left (reuse `why-us-photo.jpg` or `process-photo.jpg`)
- **CTA band** — "Schedule a Consultation" + "Call Now" buttons
- **Final CTA** — Navy section with closing message

Uses `Navbar`, `Footer`, `SEOHead` components. Styled consistently with existing service pages.

### 2. Update `src/App.tsx`
Add route: `<Route path="/subcontractor" element={<Subcontractor />} />`

### 3. Update `src/components/Footer.tsx`
Add a `Link` to `/subcontractor` in the Links section with text "Need a subcontractor? Work with us"

### 4. Update `public/sitemap.xml`
Add `<url>` entry for `/subcontractor` with priority 0.8

### 5. Update `public/robots.txt`
No changes needed (already allows all non-admin pages)

