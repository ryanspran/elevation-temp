

## Build Filter Sidebar + Plant Card Grid

### Overview
Replace the current simple grid in `PlantGuide.tsx` with a full filter sidebar + enhanced card grid layout. Extract the sidebar into its own component. Use the Drawer component for mobile.

### Files to Create/Edit

**1. Create `src/components/PlantFilterSidebar.tsx`**
- Reusable filter sidebar component accepting filter state + setters as props
- Sections: SC Native toggle (All / Native Only buttons), Category chips, Plant Type chips, Sun chips, Water chips, Maintenance chips
- Each section has uppercase label with letter-spacing
- "Filters" gold title + "Clear All" button at top
- Chip styling: inactive = subtle border on dark bg (`border-gold/20 text-secondary-foreground/60`), active = gold bg with dark text (`bg-gold text-navy`)
- Dark card background (`bg-[#242938]`) with sticky positioning on desktop

**2. Create `src/components/PlantCard.tsx`**
- Extract and enhance the existing `PlantCard` from PlantGuide.tsx
- Photo with lazy loading + `onError` fallback showing first letter in gold on dark gradient
- "SC Native" gold badge absolutely positioned top-right
- Plant type as small uppercase gold label
- Common name in serif white, botanical name italic muted
- 2-3 tag chips (sun_category, water_category, maintenance_level) with subtle borders
- Hover: slight lift (`hover:-translate-y-1`) + gold border glow (`hover:border-gold/40 hover:shadow-gold/10`)

**3. Rewrite `src/pages/PlantGuide.tsx`**
- URL search params for all filter state: `q`, `categories`, `types`, `sun`, `water`, `maintenance`, `native`, `sort`
- Filter logic: AND across all filter groups, search also checks `special_features`
- Sort options: A-Z (default), Z-A, Category, Native First — dark-styled select dropdown
- Results bar: "Showing X of Y plants" + sort dropdown
- Layout: `flex` with 260px sidebar on left (hidden on mobile), grid on right
- Grid: `xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2` (adjusts when sidebar present)
- Load 24 initially with "Load More" gold outline button
- Loading skeleton grid, empty state with Leaf icon
- Mobile: floating "Filters" gold button fixed at bottom center, opens Drawer with sidebar content

### Filter State Management
All filters stored in URL search params as comma-separated values:
- `?q=oak&categories=Shade Trees,Evergreen Trees&sun=Full Sun&native=true&sort=az`
- Parse on mount, update with `setSearchParams({ replace: true })`

### Mobile Drawer
- Use existing `Drawer` component from `src/components/ui/drawer.tsx`
- Floating trigger: fixed bottom-center gold filled button with Filter icon
- Drawer opens from bottom with dark background, contains same `PlantFilterSidebar` content
- "Apply Filters" button at bottom of drawer to close it

### Filtering Logic (client-side)
```
plants
  .filter(matchesSearch)
  .filter(matchesCategories)    // OR within group
  .filter(matchesPlantTypes)    // OR within group
  .filter(matchesSun)           // OR within group
  .filter(matchesWater)         // OR within group
  .filter(matchesMaintenance)   // OR within group
  .filter(matchesNative)
  .sort(sortFn)
```
Within each filter group, values combine with OR (e.g., "Full Sun" OR "Shade"). Groups combine with AND.

