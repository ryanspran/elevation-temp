

## Polish Plant Directory

This plan covers all requested refinements across images, search, animations, filters, accessibility, SEO, and console error fixes.

### Files to Edit

| Action | File |
|--------|------|
| Rewrite | `src/components/PlantCard.tsx` — image fade-in, loading shimmer, search highlight, staggered animation, accessibility |
| Rewrite | `src/pages/PlantGuide.tsx` — debounced search with clear button, active filter tags in results bar, mobile filter count badge, staggered card animations, keyboard nav, aria labels |
| Edit | `src/components/PlantFilterSidebar.tsx` — aria labels on controls, scale bounce on chip click |
| Edit | `src/pages/PlantDetail.tsx` — fix forwardRef console warnings on DetailRow/DetailSection, image fade-in |
| Edit | `tailwind.config.ts` — add stagger-fade-in and shimmer keyframes |
| Edit | `src/index.css` — shimmer animation class, gold focus ring utility |

### 1. Images

**PlantCard.tsx**: Track `imgLoaded` state alongside `imgError`. Show a shimmer skeleton while loading. On `onLoad`, set `imgLoaded=true` which triggers a CSS `opacity 0→1` fade-in transition. The `<img>` is always rendered (for lazy loading to work) but invisible until loaded. Fallback on error: dark gradient `from-[#242938] to-[#1A1F2E]` with gold first-letter.

**PlantDetail.tsx HeroImage**: Same pattern — shimmer placeholder, fade-in on load.

For Wikimedia URLs: no code changes needed — browsers handle encoded URLs. The `onError` fallback already handles failures.

### 2. Search

**PlantGuide.tsx**: Add local `searchInput` state that updates on every keystroke. Use `useEffect` with a 300ms `setTimeout` to debounce updating the URL param `q`. Show an `X` clear button inside the search input (absolutely positioned right) when `searchInput` is non-empty.

Pass `searchQuery` to `PlantCard` as a prop so it can highlight matching text.

### 3. Search Highlighting

**PlantCard.tsx**: Accept optional `searchQuery` prop. Create a `Highlight` helper component that wraps matching substrings in `<mark className="bg-gold/30 text-secondary-foreground">`. Apply to common_name, botanical_name display.

### 4. Animations

**tailwind.config.ts**: Add `stagger-fade-in` keyframe (opacity 0→1, translateY 12px→0). Add `shimmer` keyframe for loading skeletons.

**PlantCard.tsx**: Each card gets `animate-fade-in` with an inline `animationDelay` based on its index within the current page (passed as prop). Use `opacity-0 animate-[fade-in_0.4s_ease-out_forwards]` with staggered delay.

**Filter chips** in PlantFilterSidebar: Add `active:scale-95` for click bounce effect.

**Load More**: New cards naturally get staggered animation via their index.

**Card hover**: Already has `hover:-translate-y-1`. Enhance to `hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_4px_20px_-4px_rgba(201,169,110,0.2)]`.

### 5. Active Filter Indicators

**Mobile filter button**: Compute `activeFilterCount` (sum of all selected filter arrays + native toggle). Show a gold circle badge with the count when > 0.

**Results bar**: Below the "Showing X of Y" text, render a row of active filter pills (gold outline, small X button). Each pill shows the filter value. Clicking X calls `handleToggle` to remove that specific filter. Include native toggle as a pill too.

### 6. Accessibility

- Filter chips: `role="checkbox"` + `aria-checked` + `aria-label`
- Native toggle buttons: `role="radio"` + `aria-checked`  
- Card grid: `role="list"`, each card `role="listitem"` with `tabIndex={0}`
- Focus states: Add `focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy` to cards, chips, buttons
- Plant images: `alt={plant.common_name}` (already present)
- Search input: `aria-label="Search plants"`
- Sort select: `aria-label="Sort plants"`

### 7. SEO

PlantGuide already has SEOHead with proper title/description. PlantDetail already sets dynamic title from plant name. Both have JSON-LD. No changes needed — already implemented.

### 8. Console Error Fix

The `DetailRow` and `DetailSection` warnings ("Function components cannot be given refs") are likely from them being passed as children in a context that tries to attach refs. Fix by wrapping them with `React.forwardRef` or ensuring they aren't used in a ref-forwarding context. Looking at the code, these are simple function components used as direct JSX — the warning may come from a parent trying to measure them. Will investigate and fix.

### 9. Dark Theme Consistency

Ensure Select dropdown (`SelectContent`) has `bg-card-dark` and dark item hover states. Drawer already has `bg-card-dark`. Will add dark hover states to SelectItem: `focus:bg-navy focus:text-secondary-foreground`.

