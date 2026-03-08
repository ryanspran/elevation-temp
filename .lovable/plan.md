

## Business Features for Plant Directory

Four additions: consultation CTAs, seasonal picks section, share/print on detail pages, and source credits in footer.

### Files to Change

| File | Change |
|------|--------|
| `src/pages/PlantDetail.tsx` | Replace existing CTA with sticky bottom bar; add Share button; add print styles |
| `src/pages/PlantGuide.tsx` | Add "Seasonal Picks" section above grid; update bottom CTA copy |
| `src/components/Footer.tsx` | Add plant data source credits section |
| `src/index.css` | Add `@media print` stylesheet for plant detail |

### 1. Plant Detail CTA Bar

Replace the current CTA section (lines 160-171) with a persistent bottom bar:
- Background `bg-[#242938]` with `border-t border-gold/20`
- Left-aligned text: "Love this plant for your property? Let us design with it."
- Right side: gold filled button `bg-gold text-primary-foreground` linking to `/contact` — "GET A CONSULTATION"
- Not sticky/fixed — just a prominent section at the bottom before footer
- On mobile, stack vertically

### 2. Share Button

Add a Share button in the hero info section (right column) next to the SC Native / Maintenance badges:
- Gold outline style, small — `border border-gold/40 text-gold`
- Icon: `Share2` from lucide
- On click: `navigator.clipboard.writeText(window.location.href)` then show a toast
- Toast: use sonner's `toast()` with dark styling (sonner already imported globally)

### 3. Print Stylesheet

Add `@media print` rules in `src/index.css`:
- White background, black text
- Hide navbar, footer, CTA bar, share button, prev/next nav
- Show plant photo + all detail sections cleanly
- Add page URL at bottom via `@page` or `::after`

### 4. Seasonal Picks Section (PlantGuide.tsx)

Add between the hero and the main grid section:
- Define a `SEASONAL_PLANTS` map: `Record<number, string[]>` mapping month (0-11) to an array of plant common names for that season
- March (2): Eastern Redbud, Star Magnolia, Piedmont Azalea, Flowering Dogwood, Serviceberry, Creeping Phlox
- Filter loaded plants by matching `common_name` against the current month's list
- Render as a horizontal scroll row (`overflow-x-auto flex gap-4`) with slightly larger cards
- Gold section title: "Spring Bloomers" (or season-appropriate label)
- Each card links to plant detail, shows image + name
- Only show section if matching plants are found in the data

Seasonal data for other months (hardcoded common names):
- Jan/Feb: Winter Jasmine, Lenten Rose, Witch Hazel, Camellia
- Mar: Eastern Redbud, Star Magnolia, Piedmont Azalea, Flowering Dogwood, Serviceberry, Creeping Phlox
- Apr/May: Carolina Jessamine, Virginia Sweetspire, Oakleaf Hydrangea, Black-Eyed Susan, Coneflower, Butterfly Weed
- Jun/Jul/Aug: Crape Myrtle, Daylily, Lantana, Coreopsis, Blanket Flower, Joe Pye Weed
- Sep/Oct: Aster, Goldenrod, Beautyberry, Muhly Grass, Switchgrass
- Nov/Dec: Winterberry, Nandina, Holly, Ornamental Cabbage

### 5. Directory Bottom CTA

Update the existing CTA section (lines 399-415) text to:
- "Need help choosing? Our designers can create a custom plant palette for your property."
- Keep the gold outline button style

### 6. Footer Source Credits

Add a new section in `Footer.tsx` above the copyright bar:
- Small text: "Plant data compiled from:"
- Three gold-colored links: Clemson HGIC (hgic.clemson.edu), SC Native Plant Society (scnps.org), Missouri Botanical Garden (missouribotanicalgarden.org)
- Below: "Compiled specifically for Upstate SC, Zones 7b–8a" in muted text
- Subtle, doesn't overwhelm the footer

