

## Update Sitemap with All Plant Pages

The current `public/sitemap.xml` has ~30 URLs but is missing 100+ plant detail pages. We need to add them all.

### Changes

**1. Update `public/sitemap.xml`**
- Add all plant slugs as `/plants/{slug}` entries with priority 0.6 and monthly changefreq
- Remove duplicate slugs (the database has some duplicates like `astilbe`, `autumn-fern`, etc.)
- Keep all existing URLs intact

**2. Update `public/robots.txt`** (if needed)
- Ensure sitemap URL points to `https://elevationlandscapes.com/sitemap.xml`

### After Implementation
Submit `https://elevationlandscapes.com/sitemap.xml` to Google Search Console under **Sitemaps → Add a new sitemap**.

