

## Refine Plant Identifier Page

### Changes to `src/pages/Identify.tsx`

**1. Photo Tips (Collapsible Section)**
- Add a collapsible section below the upload area using `Collapsible` from `@radix-ui/react-collapsible` (already installed)
- Collapsed state shows "Tips for best results ▾" in muted gray
- Expanded shows 4 icon+text tip rows: leaves, flowers, shape, lighting
- Uses `ChevronDown` icon that rotates when open

**2. Session History (Last 3 IDs)**
- Add `history` state: `useState<HistoryEntry[]>([])` where each entry stores `{ image, identifications, matchedPlant, timestamp }`
- After successful identification, prepend to history (max 3, drop oldest)
- Below main results + CTAs, render a "Recent Identifications" section with stacked cards
- Each card shows: thumbnail (small square), plant name, confidence as a compact row
- Tapping a card sets `expandedHistoryIndex` state to toggle showing the full result details inline (description, notes, directory link)
- State resets naturally on page refresh (no localStorage)

**3. Share Button**
- Add `Share` icon import from lucide-react
- On successful high-confidence results, show a "Share" button next to "Try Another Photo"
- Uses `navigator.share()` if available with the specified text format
- Falls back to `navigator.clipboard.writeText()` + toast "Copied to clipboard"
- Share text includes the directory link (`/plants/{slug}`) if matched, otherwise `/identify`

**4. SEO Updates**
- Update `fallbackTitle` to: "AI Plant Identifier — Snap a Photo, Identify Any Plant | Elevation Landscapes"
- Update `fallbackDescription` to: "Take a photo of any plant, tree, or flower and our AI will identify it instantly. Free mobile plant identification tool from Elevation Landscapes, Greenville SC."

### New Types
```typescript
interface HistoryEntry {
  image: string;
  identifications: PlantIdentification[];
  matchedPlant: Plant | null;
  timestamp: number;
}
```

### File Changes
| File | Change |
|------|--------|
| `src/pages/Identify.tsx` | All 4 features above |

No other files need modification.

