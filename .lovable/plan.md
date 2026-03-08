

## Plan: Outdoor Kitchen Article Page + Articles Page Updates

### 1. Generate two images for the outdoor kitchen article
- Generate a hero image of a luxury outdoor kitchen in a Greenville, SC backyard setting
- Generate a second image showing an outdoor kitchen detail (e.g., built-in grill area or entertaining scene)
- Save both to `src/assets/articles/`

### 2. Create `src/pages/ArticlePage.tsx` — individual article detail page
- Clean, readable layout with Navbar + Footer
- Hero image at top (full-width with overlay, similar to other pages)
- Article title, category badge
- Body content rendered as styled paragraphs with section headings
- Second image placed mid-article as a full-width break
- CTA buttons (Schedule a Consultation + Call Now) at the bottom
- For now, only the outdoor kitchen article will have a real detail page; other cards won't link anywhere yet

### 3. Update `src/pages/Articles.tsx`
- **Remove dates** from the `Article` interface and all article data, remove date rendering from `ArticleCard`
- **Move outdoor kitchen article to position #1** in the `popularArticles` array (featured/large card) with updated title, excerpt, and new generated image
- **Wrap article cards in `<Link>`** — the outdoor kitchen card links to `/articles/outdoor-kitchen-greenville`; other cards can be non-clickable or link to `#`

### 4. Update `src/App.tsx`
- Add route: `/articles/:slug` → `<ArticlePage />`

### Article detail page design
- Matches site aesthetic (navy, gold, cream, Playfair Display headings)
- Max-width prose container (~720px) for readability
- Structured sections with `h2` headings styled in serif font
- Images with rounded corners and subtle shadow

