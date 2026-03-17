

## Insert 32 New Plants (31 after dedup)

### Database state
- Current: 229 plants, max ID = 250
- Duplicate found: **Tea Olive** (id=51) — will be skipped
- Common Yarrow: not found — will be inserted
- **31 new rows** will be inserted, IDs 251–281

### Approach
Single SQL INSERT via the data insertion tool with all 31 rows. Each row will have:
- `sun_category` computed from Sun Requirements using the established logic
- `water_category` computed from Water Needs using the established logic
- `slug` generated from common_name (lowercase, hyphens, strip apostrophes/parentheses)
- `sc_native` mapped from Yes/No

### No code changes needed
The existing PlantCard, PlantDetail, PlantGuide, filters, search, and prev/next navigation all work dynamically from the `plants` table query. New plants will appear automatically.

### Post-insert verification
- Confirm 260 total plants (229 + 31)
- Spot-check a few slugs render on `/plants/[slug]`

