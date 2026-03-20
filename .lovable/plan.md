

## Plan: Add Aaron Approved Badge to Plant Cards and Detail Pages

### What You'll See
- On plant cards in the directory grid: a small "Aaron Approved" badge (the uploaded logo) displayed to the right of the plant name
- On the plant detail page: the same badge shown next to the plant name in the hero section

### Steps

1. **Copy the badge image** into `src/assets/aaron-approved-badge.png`

2. **Update `PlantCard.tsx`** — Import the badge and display it as a small inline image (roughly 20-24px tall) next to the `<h3>` plant name, only when `plant.aaron_approved` is true. Wrap the name and badge in a flex row.

3. **Update `PlantDetail.tsx`** — Import the badge and display it next to the `<h1>` plant name (roughly 36-40px tall) in the hero section, only when `plant.aaron_approved` is true. Use a flex row with alignment.

### Technical Details
- Badge rendered as `<img>` with fixed height, `object-contain`, and appropriate alt text
- Conditionally shown only for `aaron_approved === true` plants
- No database or schema changes needed — the `aaron_approved` column already exists

