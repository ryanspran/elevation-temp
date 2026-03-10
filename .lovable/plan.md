

## Add "How to Choose a Hardscape Contractor" Article

### Overview
Add a new article with slug `hardscape-contractor-greenville` to the Articles listing page and the ArticlePage detail page. Generate two AI images (hero + detail) of high-end stonework on a luxury home using the existing edge function pipeline.

### Changes

**1. Generate two images via the `generate-service-image` edge function**
- Hero image: prompt for a high-end home exterior with professional stonework, stone veneer, and hardscape features in a Greenville SC setting
- Detail image: close-up of quality stone craftsmanship on a luxury property
- Save locally as `src/assets/articles/hardscape-contractor-hero.jpg` and `hardscape-contractor-detail.jpg`

**2. `src/pages/Articles.tsx`**
- Add the new article to the `latestArticles` array next to the drainage article:
  - slug: `hardscape-contractor-greenville`
  - title: "How to Choose a Hardscape Contractor in Greenville, SC: 10 Questions to Ask"
  - excerpt: "Finding the right hardscape contractor is crucial — here are ten essential questions to ask before hiring."
  - category: "Hardscaping"
  - image: new hero image

**3. `src/pages/ArticlePage.tsx`**
- Import the two new images
- Add the full article data to the `articles` record with all 10 questions as sections plus intro and closing paragraphs
- slug key: `hardscape-contractor-greenville`

