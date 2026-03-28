

## Plan: Add "Coming Soon" Overlay to Portfolio Gallery

### What Changes
- Add a semi-transparent overlay on top of the photo grid to dim the images
- Display the provided message centered over the gallery
- Images remain visible but muted; gallery links are non-clickable

### Steps

1. **Update `src/pages/Portfolio.tsx`**
   - Wrap the bento grid section in a `relative` container
   - Add an absolute overlay div with white/light background at ~70% opacity and `pointer-events-none` to prevent clicks
   - Center the message text over the overlay using flex positioning
   - Remove or hide the "View Full Gallery" links since the gallery isn't active yet

