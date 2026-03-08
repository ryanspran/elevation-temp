

## Slug-Based Plant Routing

### 1. Database Migration

Add `slug` column to `plants` table and populate from `common_name`:

```sql
ALTER TABLE public.plants ADD COLUMN slug text;

UPDATE public.plants
SET slug = regexp_replace(
  regexp_replace(
    regexp_replace(
      lower(trim(common_name)),
      '[^a-z0-9\s-]', '', 'g'
    ),
    '\s+', '-', 'g'
  ),
  '-+', '-', 'g'
);

-- Trim trailing hyphens
UPDATE public.plants SET slug = trim(both '-' from slug);

CREATE UNIQUE INDEX plants_slug_unique ON public.plants (slug);
ALTER TABLE public.plants ALTER COLUMN slug SET NOT NULL;
```

### 2. Files to Modify

| File | Changes |
|---|---|
| `src/hooks/usePlants.ts` | Add `slug` to `Plant` interface; include slug in dedup logic |
| `src/hooks/usePlant.ts` | Change to `usePlantBySlug(slug)` — query by slug instead of id |
| `src/pages/PlantDetail.tsx` | Use `slug` param; update SEO title/description per spec; update JSON-LD to WebPage + BreadcrumbList; update prev/next links to use slugs; update canonical/OG URLs to `/plants/[slug]` |
| `src/pages/PlantGuide.tsx` | Update seasonal picks links to `/plants/${plant.slug}`; update SEO title/description per spec |
| `src/components/PlantCard.tsx` | Link to `/plants/${plant.slug}` |
| `src/App.tsx` | Add route `/plants/:slug`; add redirect route for old `/plant-guide/:id` → `/plants/:slug` |
| `supabase/functions/generate-plant-og/index.ts` | Accept `slug` param (or keep `id` — the OG function can stay id-based internally since it's not user-facing) |

### 3. Key Details

**Routing (`App.tsx`)**:
- New route: `/plants/:slug` → `PlantDetail`
- Keep `/plant-guide` for directory page
- Add `/plant-guide/:id` redirect component that fetches the plant by id, then redirects to `/plants/:slug`

**Plant interface** — add `slug: string` field

**`usePlantBySlug(slug)`** — replaces `usePlant(id)`:
```ts
supabase.from("plants").select("*").eq("slug", slug).single()
```

**PlantDetail SEO**:
- Title: `"{Common Name} — Growing Guide for Greenville SC | Elevation Landscapes"`
- Description: `"{Common Name} ({Botanical Name}): {Sun}, {Water} water, {Size}. Expert guide for Upstate SC Zones 7b-8a. View growing conditions, landscape uses, and seasonal interest."`
- Canonical: `https://elevationlandscapes.com/plants/{slug}`
- JSON-LD: WebPage schema + BreadcrumbList (Home > Plant Directory > Common Name)

**PlantGuide SEO**:
- Title: `"Plant & Tree Directory — 250 Plants for Upstate SC | Elevation Landscapes"`
- Description: `"Browse 250 trees, shrubs, perennials, and grasses curated for Greenville, Spartanburg, and Anderson SC (Zones 7b-8a). Filter by sun, water, native status, and more."`

**Prev/Next links**: Use `plant.slug` in URLs

**Old URL redirect**: A small component at `/plant-guide/:id` that loads the plant by id, then uses `<Navigate to={/plants/${slug}}/>` with replace

