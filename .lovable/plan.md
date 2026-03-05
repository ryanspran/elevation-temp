

## Add Mac Dock-Style Zoom Effect to Testimonials Carousel

Use Embla's API to track the active/centered slide and apply a CSS scale transform with smooth transitions. The centered slide scales up (e.g., `scale(1.08)`) while non-centered slides stay at `scale(0.9)` with reduced opacity — mimicking macOS dock magnification.

### Technical Approach

**`src/pages/Index.tsx`** — Testimonials section (~lines 257-278):

1. Extract the carousel API using `setApi` prop on `<Carousel>`
2. Add a `useState` for `activeIndex` and listen to Embla's `select` event to track the centered slide
3. On each `CarouselItem`, conditionally apply:
   - Active (centered): `scale-105 opacity-100` with `transition-all duration-300`
   - Inactive: `scale-90 opacity-60` with same transition
4. Apply the transform on the inner card `div` so the carousel layout isn't affected

This creates the "pulled forward" dock-like effect with smooth spring-like transitions as slides change.

