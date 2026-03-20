

## Plan: Add "Aaron Approved" Filter Category

### Approach
Add a boolean `aaron_approved` column to the `plants` table and a new filter chip at the top of the Category section in the sidebar. When selected, it filters to only plants where `aaron_approved = true`. This is cleaner than duplicating rows and lets you tag/untag plants independently of their existing categories.

### Steps

1. **Database migration** — Add `aaron_approved boolean default false` column to the `plants` table.

2. **Update `usePlants.ts`** — Add `aaron_approved: boolean` to the `Plant` interface and map it from the query results (defaulting to `false`).

3. **Update `PlantFilterSidebar.tsx`** — Add an "Aaron Approved" toggle at the top of the Category chip group (styled distinctly, e.g. with a star or highlighted gold). Add `aaron_approved: boolean` to `FilterState`.

4. **Update `PlantGuide.tsx`** — Wire the new filter into URL params and the filtering logic so `aaron_approved=true` filters plants where that column is true.

5. **Wait for your plant list** — Once you provide the list of approved plants, I'll run an `UPDATE` to set `aaron_approved = true` on those rows.

### Technical Details
- New column: `ALTER TABLE plants ADD COLUMN aaron_approved boolean DEFAULT false;`
- Filter state gets a new `aaron_approved` boolean alongside `native`
- The chip appears first in the Category section, visually distinguished
- No existing plants or data are modified beyond adding the new column

