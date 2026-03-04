

# Add Faded Background Photo to Intro Section

## Change
Add a subtle, faded landscape photo as the background of the "The Standard Your Property Deserves" section (the INTRO section), overlaid with the existing cream color at high opacity to keep text readable.

## Implementation

### Modify `src/pages/Index.tsx` (INTRO section, ~lines 79-97)
- Add a background image div using one of the existing landscape assets (e.g., `landscape-photo.jpg` or `hero-bg.jpg`) with `absolute inset-0`, `bg-cover bg-center`
- Overlay with a semi-transparent cream layer (`bg-cream/90` or similar) to fade the photo
- Ensure text content sits above via `relative z-10`
- Section gets `relative overflow-hidden` to contain the absolute-positioned image

