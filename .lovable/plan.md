

## Plan: Redesign Trust Signals Section

Redesign the "Why Choose Elevation Landscapes" section to match the reference screenshot layout: a large photo on the left taking up ~1/3 width, with trust signal cards in a 2-column grid on the right filling ~2/3 width. Keep the navy background.

### Layout

- Two-column layout: `lg:grid-cols-3` with the image spanning 1 column and cards spanning 2 columns
- Left: A tall photo (the service hero image or a generated block wall photo) with rounded corners, filling the full height of the section
- Right: Cards in a 2x3 grid (or 3x2) to fit all 5 signals, each card with a small gold icon in a cream-toned square, bold serif title, and description text
- Cards styled with `bg-popover` (white), rounded corners, padding, matching the reference aesthetic
- On mobile: image stacks on top, cards go single column below

### Changes

**`src/pages/ServicePage.tsx`** (lines 52-71):
- Replace the current centered 5-column icon grid with the new two-panel layout
- Left panel: image using `service.heroImage` or a fallback
- Right panel: 2-column grid of cards with varied icons (Diamond, Mountain, Users, Shield, Eye — from lucide) to differentiate each signal visually
- Remove the centered heading/divider; place the section heading above the two-column layout instead

