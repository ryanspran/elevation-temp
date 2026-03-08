

## Plan: Add Landscape Lighting Article

### 1. Generate two images
- **Hero image**: Luxury home exterior at dusk with professional landscape lighting illuminating pathways, trees, and architectural features in a Greenville, SC setting
- **Detail image**: Close-up of elegant landscape lighting along a stone pathway or highlighting garden features at night
- Save to `src/assets/articles/landscape-lighting-hero.jpg` and `src/assets/articles/landscape-lighting-detail.jpg`

### 2. Add article data to `src/pages/ArticlePage.tsx`
- Import the two new images
- Add a `"landscape-lighting-greenville"` entry to the `articles` record with all 8 sections from the provided copy, matching the exact same structure as the outdoor kitchen article (category: "Design Tips", detail image after section 3, same CTA)

### 3. Update `src/pages/Articles.tsx`
- Import the new landscape lighting hero image
- Update the "Landscape Lighting Tips for Curb Appeal" entry in `latestArticles` (id: 5) to add a `slug: "landscape-lighting-greenville"` and use the new hero image, making it clickable

