

## Redesign Testimonials Section — Carousel with Background Image

The current testimonials section shows 3 static cards in a grid on a cream background. The reference image shows a much more dynamic design with a full-width background photo, glassmorphism review cards in a carousel, and one focused card at a time.

### Design

- **Background:** Full-width landscape photo (reuse `landscape-photo.jpg` or similar asset) with a dark overlay for readability
- **Header:** Centered serif title ("What Our Clients Say") + subtitle + gold divider, white text
- **Cards:** Glassmorphism style — semi-transparent background (`bg-white/10 backdrop-blur-md`), rounded corners, border `border-white/20`
- **Card content:** 5 gold stars, client name, location, and testimonial text in white
- **Carousel:** Use the existing Embla `Carousel` component with `align: "center"` and `loop: true` so the active card is centered and adjacent cards peek from the sides
- **Scale effect:** Active slide at full scale, neighboring slides slightly smaller/dimmed to create the "focus" effect using Embla's scroll progress
- **Navigation arrows:** Gold circular arrows on either side (similar to services carousel styling)

### Technical Changes

**`src/pages/Index.tsx`** — Testimonials section (lines 240–264):
1. Replace the static grid with a `Carousel` wrapping `CarouselContent` and `CarouselItem` components
2. Add a background image container with overlay behind the section
3. Style cards with glassmorphism (`backdrop-blur-md bg-white/10 border border-white/20`)
4. Use `basis-[85%] md:basis-[60%] lg:basis-[40%]` on carousel items so adjacent cards are visible
5. Set carousel opts to `{ align: "center", loop: true }`
6. Add `CarouselPrevious` and `CarouselNext` with gold styling
7. Use the existing `landscape-photo.jpg` asset as the background image

No new dependencies needed — uses existing Embla carousel and Tailwind utilities.

