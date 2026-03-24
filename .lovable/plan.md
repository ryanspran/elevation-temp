

## Plan: Add "Aaron Approved Collection" Article

### Approach
Add the new article to the existing hardcoded article system in `ArticlePage.tsx` and `Articles.tsx`. The article will use the Aaron Approved badge logo as its hero/detail imagery and include a link to the Plant Guide with the Aaron Approved filter. We'll generate a proper hero image for the article using AI image generation (a luxury landscape scene with the Aaron Approved branding), and use the uploaded badge as the inline logo within the article body.

### Steps

1. **Copy the Aaron Approved logo** to `src/assets/` if not already there (it's already at `src/assets/aaron-approved-badge.png` from previous work).

2. **Generate article hero and detail images** using AI image generation — a luxury Upstate SC landscape scene appropriate for the article theme (curated plant collection, lush garden design).

3. **Add article data to `ArticlePage.tsx`** with slug `aaron-approved-collection`:
   - Title, category ("Plant Guide"), hero/detail images, SEO metadata
   - All sections from the provided copy, broken into heading/body pairs
   - The Aaron Approved badge displayed inline at the top of the article body (imported from assets)
   - Custom CTA at bottom linking to `/plant-guide` (Browse Aaron Approved Collection) and `/contact`

4. **Add article card to `Articles.tsx`** — add it to the `popularArticles` or `latestArticles` array so it appears on the articles listing page.

5. **Add internal links** within the article body where the text references "our plant guide" and "Contact Elevation Landscapes" — these will be rendered as actual links rather than plain text. This requires a small enhancement to support inline links in article sections (either via dangerouslySetInnerHTML or a custom renderer).

### Technical Details

- Article slug: `aaron-approved-collection`
- Category badge: "Plant Guide"
- Sections breakdown: ~12 heading/body pairs from the provided copy
- The Aaron Approved badge will be rendered as an `<img>` centered at the top of the article, before the first paragraph
- Internal links to `/plant-guide` and `/contact` will be added in the CTA section at the bottom (matching existing pattern)
- Hero image generated to match the luxury landscape aesthetic of other articles

