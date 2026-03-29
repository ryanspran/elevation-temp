

## Plan: Add Aaron Approved Copy to Plant Guide Hero

### What Changes
Add a short paragraph about the Aaron Approved collection below the existing subtitle in the Plant Guide hero section, with a link to the Aaron Approved article.

### Steps

1. **Update `src/pages/PlantGuide.tsx`** — After the existing subtitle paragraph (line 328-332), add a new block with copy about the Aaron Approved collection. It will include:
   - A brief sentence or two introducing the Aaron Approved collection (e.g., "Looking for a sure thing? Explore our Aaron Approved Collection — 47 plants hand-picked by our owner, Aaron, for proven performance in Upstate SC's clay soils and climate.")
   - A link to `/articles/aaron-approved-collection` styled in gold to match existing design
   - The Aaron Approved badge image displayed inline or nearby for visual recognition
   - Styled slightly smaller/subtler than the main subtitle so it reads as a secondary callout

### Technical Details
- Import the Aaron Approved badge from `@/assets/aaron-approved-badge.png`
- Insert between the subtitle `<p>` and the search `<div>` (around line 332-333)
- Use `Link` from react-router-dom pointing to `/articles/aaron-approved-collection`
- Match existing text styling: `text-secondary-foreground/60`, gold accent for the link

