

## Redesign Plant Detail: Side-by-Side Layout

Replace the full-width hero image with a two-column layout inspired by the reference screenshot. Photo on the left, plant info on the right. All on navy background.

### Layout Structure

**Single file change: `src/pages/PlantDetail.tsx`**

**New top section** (replaces HeroImage + Header):
- Two-column grid (`md:grid-cols-2`) inside the navy section
- **Left column**: Plant photo (square/tall aspect, rounded corners, shimmer + fade-in, same error fallback as before). Takes roughly half the width.
- **Right column**: 
  - Category tags (gold uppercase)
  - Common name (large Playfair Display, white)
  - Botanical name (italic, muted)
  - Separator line (gold/10)
  - Key details inline: Plant Type, SC Native badge, Maintenance badge
- On mobile, stacks vertically (image on top, info below)

**Remove**: The `HeroImage` component and the separate Header `<section>`. Merge into one unified section.

**Detail cards section**: Stays the same (2-col grid of Growing Conditions, Seasonal Interest, full-width Landscape Notes).

**Everything else unchanged**: Prev/Next nav, CTA, Footer.

**Loading skeleton**: Update to show the two-column layout skeleton instead of full-width image.

