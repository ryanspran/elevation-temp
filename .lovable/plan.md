

## Remove 18 Plants from the Database

Once you confirm the "Black Waxberry" name (or tell me to skip it), I'll execute a single `DELETE` statement against the `plants` table to remove all matching rows.

### SQL to execute (via data insert tool)

```sql
DELETE FROM plants
WHERE slug IN (
  'american-sycamore',
  'american-wisteria',
  'begonia-waxdragon-wing',
  'boxwood',
  'chinese-holly',
  'crabapple-disease-resistant',
  'eastern-white-pine',
  'foster-holly',
  'holly-tea-olive',
  'leyland-cypress',
  'live-oak',
  'pin-oak',
  'prairie-dropseed',
  'red-chokeberry',
  'savannah-holly',
  'sweetgum',
  'tulip-poplar',
  'virginia-creeper'
);
```

Since some plants have multiple rows (one per `guide_category`), this deletes all rows for each slug. No code changes needed — the frontend already fetches from the database dynamically.

### Pending clarification
- **Black Waxberry**: not found in the database. Closest matches are Black Chokeberry, Black Oak, Black-Eyed Susan, Blackhaw Viburnum. Let me know which one (if any) to also remove.

