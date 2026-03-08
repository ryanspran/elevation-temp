

## Redesign Plant Detail Page

The existing `PlantDetail.tsx` already has the route (`/plant-guide/:id`), data fetching, and basic layout. We'll rewrite it to match the requested premium catalog design.

### Changes to `src/pages/PlantDetail.tsx`

**Full rewrite with these sections:**

1. **Back link** -- "← Back to Directory" in gold, linking to `/plant-guide` with `location.search` preserved so filters carry over

2. **Full-width hero image** -- ~340px height, `object-fit: cover`, dark gradient fallback on error (shows first letter in gold). No side-by-side layout -- image spans full width.

3. **Plant header below image:**
   - Plant type + category as small uppercase gold text
   - Common name as large Playfair Display heading in white
   - Botanical name in italic muted gray
   - Badge row: "SC Native" (gold bg, dark text) + maintenance level (gold outline)

4. **Detail sections in 2-column grid** (stacks on mobile):
   - **Growing Conditions** (🌱): Sun Requirements, Water Needs, Soil Preferences, Mature Size -- label/value rows with subtle bottom borders
   - **Seasonal Interest** (🍂): Bloom Time & Color, Fall Color, Wildlife Value -- same layout
   - **Landscape Notes** (🏡, full-width span): Landscape Use as label/value, Special Features as paragraph

5. **Previous/Next plant navigation** -- gold outline buttons at bottom. Use `usePlants` hook to get sorted plant list and find adjacent IDs.

6. **CTA section** -- keep existing "Want X in your landscape?" section

7. **Loading skeleton** -- full-width image skeleton + text skeletons below

### Additional: `src/hooks/usePlants.ts`

No changes needed -- we'll import `usePlants` in PlantDetail to derive prev/next plant IDs from the cached list.

### Files

| Action | File |
|--------|------|
| Rewrite | `src/pages/PlantDetail.tsx` |

All dark backgrounds (`bg-navy`, `bg-[#242938]`), gold accents, serif/sans pairing. No white backgrounds anywhere.

