

## Internal Linking for Plant Detail Pages

Add a "Related Plants" section and a "Related Services" section to each plant detail page to improve crawl depth and SEO.

### How It Works

**Related Plants** — Show 4-6 plants that share the same `plant_type` or `guide_category` as the current plant. Query from the existing `usePlants` data, filter client-side, exclude the current plant, and randomize/limit results.

**Related Services** — Map plant attributes to relevant services. For example:
- Plants with `landscape_use` containing "border", "foundation" → link to Plant Installation
- Plants needing irrigation keywords → link to Irrigation
- All plants → link to Landscape Remediation, Plant Installation as defaults

### Files Changed

1. **`src/pages/PlantDetail.tsx`**
   - Add a `RelatedPlants` component after the Landscape Notes section showing 4-6 plant cards (photo, name, link) in a responsive grid
   - Add a `RelatedServices` component below that, showing 2-3 relevant service links based on the plant's attributes
   - Both sections use the existing `usePlants` hook data and `services` data from `src/data/services.ts`

2. **`src/components/PlantCard.tsx`** — Reuse existing card component for the related plants grid (or create a compact variant if needed)

### Design
- Sections sit between the detail cards and the prev/next nav
- Dark card style consistent with existing `bg-card-dark` design
- "Related Plants" as a 3-column grid (2 on mobile) with plant photo thumbnails and names linking to `/plants/[slug]`
- "Related Services" as horizontal cards linking to `/services/[slug]`

