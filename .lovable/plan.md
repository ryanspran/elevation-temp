

## Remove Duplicate Plant Cards

### Problem
35 plants appear multiple times in the database because they belong to multiple `guide_category` values. For example, "Cast Iron Plant" has 3 rows (Ground Covers, Deer Resistant, Shade-Loving Plants). This causes duplicate cards in the grid.

### Solution
Deduplicate in `src/hooks/usePlants.ts` at fetch time. Group rows by `common_name + botanical_name`, merge their `guide_category` values into an array, and return one plant per unique name. This way:
- Each plant shows once in the grid
- Category filtering still works (check if ANY of the plant's categories match)
- All other fields stay the same (they're identical across duplicates)

### Changes

**1. `src/hooks/usePlants.ts`**
- Add `guide_categories: string[]` field to the `Plant` interface (array of all categories)
- In `fetchAllPlants`, group rows by `common_name + botanical_name`, merge `guide_category` into the array, return deduplicated list
- Keep `guide_category` as the first/primary category for display

**2. `src/pages/PlantGuide.tsx`**
- Update category filter logic: instead of `filters.categories.includes(p.guide_category)`, check if `p.guide_categories.some(c => filters.categories.includes(c))`

**3. `src/components/PlantCard.tsx`**
- No changes needed — it already displays `plant.guide_category` (primary) which stays as-is

**4. `src/pages/PlantDetail.tsx`**
- Show all categories if multiple exist (e.g., "Deer Resistant · Shade-Loving Plants")

This reduces the ~285 rows to ~250 unique plants while keeping full category filtering intact.

