

## Build Plant & Tree Directory

This is a large, multi-step feature. Here's the plan broken into clear phases.

### Step 1 -- Database Setup

Create a `plants` table via migration with all 20 columns specified. Enable RLS with public SELECT access (no auth needed -- public directory). Use `bigint generated always as identity` for the ID primary key.

Then insert all 250 plants from the CSV using the insert tool, computing:
- **sun_category**: derived from `sun_requirements` using the specified rules
- **water_category**: derived from `water_needs` using the specified rules  
- **guide_category**: strip the "N. " number prefix (e.g. "1. Shade Trees" -> "Shade Trees")
- **sc_native**: convert "Yes"/"No" to boolean

### Step 2 -- Data Layer

Create two hooks:
- **`src/hooks/usePlants.ts`** -- fetches all 250 plants with `useQuery`, exports helper functions (`getUniqueCategories()`, `getUniquePlantTypes()`, `getUniqueSunCategories()`, `getUniqueWaterCategories()`, `getUniqueMaintenanceLevels()`) that derive unique filter values from the data
- **`src/hooks/usePlant.ts`** -- fetches a single plant by ID, also via `useQuery`

Both use the existing Supabase client and TanStack Query (already installed).

### Step 3 -- Routing

Add two new routes to `src/App.tsx`:
- `/plant-guide` -> `<PlantGuide />` (directory listing)
- `/plant-guide/:id` -> `<PlantDetail />` (single plant page)

Use `useSearchParams` on the listing page to persist filter/search state in the URL.

### Step 4 -- Page Shell (PlantGuide.tsx)

Following the existing page pattern (Navbar, SEOHead, hero, Footer):

- **Hero section**: Dark navy background, title "Plant & Tree Directory" with "Directory" in gold, subtitle about 250 plants for Zones 7b-8a, and a search input
- **Placeholder grid area**: Shows loading skeletons while data loads, then a simple card grid (placeholder -- filters and full cards come in next prompt)
- **Bottom CTA**: Link to contact page
- **Footer**: Standard site footer

Match existing design exactly: Playfair Display headings, Inter body, navy/gold/cream palette, uppercase nav links with letter-spacing.

### Step 5 -- Plant Detail Page (PlantDetail.tsx)

- Hero with plant photo, common name, botanical name in italic
- Detail grid showing all plant attributes in a card layout
- Back link to directory
- JSON-LD `Product` or `Article` schema for SEO

### Step 6 -- Navigation & Sitemap

- Add "Plant Guide" link to Navbar (desktop + mobile)
- Add to Footer links
- Add `/plant-guide` to `sitemap.xml`

### Files to Create/Edit

| Action | File |
|--------|------|
| Create | `src/pages/PlantGuide.tsx` |
| Create | `src/pages/PlantDetail.tsx` |
| Create | `src/hooks/usePlants.ts` |
| Create | `src/hooks/usePlant.ts` |
| Edit | `src/App.tsx` (add routes) |
| Edit | `src/components/Navbar.tsx` (add Plant Guide link) |
| Edit | `src/components/Footer.tsx` (add link) |
| Edit | `public/sitemap.xml` |
| Migration | Create `plants` table |
| Insert | 250 plant rows from CSV |

### Technical Notes

- The 250-row dataset is small enough to fetch all at once -- no pagination needed
- External Wikipedia image URLs are used as `photo_url` -- these will be rendered as `<img>` tags with lazy loading
- Filter state persisted via URL search params for shareability
- The placeholder grid will use Skeleton components during loading
- RLS: single policy allowing anonymous SELECT on all rows

