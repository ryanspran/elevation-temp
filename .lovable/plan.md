

## New Article: Plant & Tree Directory

### Changes

**1. Generate two article images** using the existing `generate-service-image` edge function or Lovable AI:
- `src/assets/articles/plant-directory-hero.jpg` — lush plant/tree landscape scene for the hero
- `src/assets/articles/plant-directory-detail.jpg` — close-up of curated plantings for mid-article break

**2. `src/pages/Articles.tsx`** — Add the new article card to `latestArticles` as a 4th entry. Since the grid is `lg:grid-cols-3`, this will naturally start a new row below the existing three cards:
```
{ id: 8, title: "Transform Your Greenville Landscape...", slug: "plant-directory-greenville", category: "Plant Guide", image: plantDirectoryImg }
```

**3. `src/pages/ArticlePage.tsx`** — Add the full `"plant-directory-greenville"` entry to the `articles` record with:
- All sections from the provided copy (Intro, Key Features, How to Leverage, Success Story, Professional Edge, Unlock Your Dream Yard)
- Hero and detail image imports
- SEO title/description
- A CTA linking to `/plant-guide` ("Browse Our Directory") alongside the standard consultation CTA
- Category badge: "Plant Guide"

### Article Structure (sections)
1. Intro paragraph (no heading)
2. "Introducing the Essential Plant & Tree Directory..."
3. "Key Features of Our Directory"
4. "How to Leverage Our Plant Directory..." — detail image inserted after this section
5. "Success Story: Achieving a Dream Yard..."
6. "The Professional Edge: Why Installation by Experts Matters"
7. "Unlock Your Dream Yard Today" — with link to `/plant-guide`

