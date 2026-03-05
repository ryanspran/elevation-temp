

The SCMap component currently just renders a static PNG image. Since the star is baked into the image, we cannot animate it directly. Instead, we can overlay an animated glowing star on top of the map at the approximate location of the star in the image.

**Approach:**
- Add a positioned `div` overlay on the map container at the star's location (roughly centered on Greenville area)
- Use a pulsing glow effect with CSS animation — a radial gold glow that pulses in and out
- Use Tailwind's `animate-ping` or a custom pulse animation with a gold color to create the glowing effect
- Layer a solid gold dot on top of the ping animation for a clean look

**Changes:**
1. **`src/components/SCMap.tsx`** — Add an absolutely positioned glowing dot overlay with a ping/pulse animation using Tailwind classes. Position it over where the star appears in the map image (will need to estimate coordinates as percentages).

