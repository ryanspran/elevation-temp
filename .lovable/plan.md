

# Replace Services Grid with Carousel

## Change
Replace the 16-card grid in the "Our Services" section on the home page with a horizontal carousel using the existing Embla-based carousel component. Each slide will show a large image area and the service name/description below, with left/right navigation arrows.

## Implementation

### Modify `src/pages/Index.tsx` (Services section, lines 102-132)
- Import `Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext` from `@/components/ui/carousel`
- Replace the grid with a carousel showing one slide at a time (or 2-3 on larger screens via Embla `slidesToScroll` option)
- Each slide: a large aspect-ratio image placeholder (16:9 or 4:3) on top, service name as heading, tagline as description, and "Learn More →" link below
- Gold-styled prev/next arrows positioned on the sides
- Style arrows to match the gold accent theme (override default outline variant)

### Carousel config
- Use Embla options: `{ align: "start", loop: true }` for infinite scrolling
- Show 1 slide on mobile, 2 on tablet, 3 on desktop via CSS `basis` classes on `CarouselItem`

