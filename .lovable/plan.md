
## Mobile Plant Identifier - Implementation Plan

### Overview
Create a mobile-only plant identification page at `/identify` that uses Lovable AI to identify plants from photos, matches them against our database, and provides links to full growing guides for recognized plants.

---

### 1. Database & Backend

**Edge Function: `supabase/functions/identify-plant/index.ts`**
- Accept POST requests with base64-encoded image
- Call Lovable AI Gateway with vision model (`google/gemini-2.5-flash` supports images)
- Use specific JSON extraction prompt for plant identification
- Return structured JSON with up to 3 plant identifications (confidence, common name, botanical name, description, identification notes)
- Handle rate limits (429) and payment errors (402)
- 30-second timeout

**Database Matching Logic**
- Query `plants` table for fuzzy matches on `common_name` and `botanical_name`
- Case-insensitive, partial string matching (using PostgreSQL `ILIKE` or frontend filtering)
- Return the first matching plant with `slug` for routing

---

### 2. Frontend Components

**New Page: `src/pages/Identify.tsx`**

**Desktop Redirect Logic:**
- Use `useIsMobile()` hook on page load
- If desktop (viewport ≥768px), redirect to `/plant-guide` with toast message
- Toast: "Plant identification is available on mobile devices — try it on your phone!"

**Hero Section:**
- Dark navy background (#1A1F2E)
- Heading: "See a Plant You <span className="text-gold">Love</span>?" (serif font)
- Subheading: explain photo → AI → directory flow

**Photo Upload Area:**
- Large tap zone (min 44px height for thumb-friendly)
- Dashed gold border (#C9A96E) on dark card (#242938)
- Camera icon (from `lucide-react`) in gold
- File input: `accept="image/*" capture="environment"`
- Max file size: 10MB validation
- Show full-width preview after upload with rounded corners + gold border
- "Try Another" button to reset

**Loading State:**
- Uploaded photo with pulse animation
- "Identifying your plant..." text
- Animated gold dots loader (using CSS keyframes or existing Skeleton)

**Results Display (Confidence ≥85%):**
- Full-width uploaded photo at top
- "We found a match!" in gold
- Common name (large serif, white)
- Botanical name (italic, gray)
- Confidence progress bar (gold, using existing `<Progress>` component)
- Description and identification notes
- Fade-in/slide-up animation on reveal

**Secondary Results (70-84% confidence):**
- "Could also be:" section
- Stacked cards with name, botanical name, confidence

**Low Confidence (<85%) or Empty Results:**
- Friendly message: "We weren't able to identify..."
- Suggestion to retake photo
- Gold "Try Again" button

**Directory Match Card:**
- If plant found in DB: highlighted card with gold left border
- "This plant is in our Upstate SC Growing Guide!"
- Show plant photo, name, type (reuse `PlantCard` styling)
- Gold button: "View Full Growing Guide →" linking to `/plants/{slug}`
- If no match: subtle note + gold outline button to `/contact`

**Bottom CTA Section:**
- "Want expert help..." text
- "Schedule a Consultation" button (gold, links to `/contact`)
- "Browse Our Full Plant Directory" button (gold outline, links to `/plant-guide`)

**Error Handling:**
- API failure: "Something went wrong. Please try again." + retry button
- Non-plant image: "That doesn't look like a plant to us!" + retry button
- File size exceeded: toast message before upload

---

### 3. Navigation Updates

**`src/components/Navbar.tsx`**
- Add "IDENTIFY A PLANT" link in mobile menu section only
- Use `hidden lg:hidden` to show only on mobile viewports (<768px)
- Insert after "Plant Guide" link, before "Contact"
- Active state styling when on `/identify` route

---

### 4. Routing

**`src/App.tsx`**
- Add route: `<Route path="/identify" element={<Identify />} />`
- Place before the catch-all `*` route

---

### 5. Design System Alignment

**Colors:**
- Background: `#1A1F2E` (navy)
- Card background: `#242938` (card-dark)
- Gold accent: `#C9A96E`
- Text: white (secondary-foreground)

**Typography:**
- Headings: `font-serif` (Playfair Display)
- Body: `font-sans` (Inter)
- All caps tracking: `tracking-wider uppercase`

**Animations:**
- Use existing `animate-card-in` for results reveal
- Pulse animation for loading photo
- Smooth transitions on all interactive elements

**Touch Targets:**
- All buttons/tap zones: minimum 44px height
- Large padding for thumb-friendly interaction
- No side-by-side elements (single column layout)

---

### 6. Technical Implementation Notes

**Image Handling:**
- Convert file to base64 before sending to edge function
- Compress if needed (10MB limit, but API may have lower limits)
- Show preview immediately after selection for better UX

**AI Prompt Engineering:**
- System prompt: "You are a plant identification expert..."
- Request JSON-only response (no markdown)
- Specify exact schema with `confidence`, `commonName`, `botanicalName`, `description`, `identificationNotes`
- Request up to 3 results, ordered by confidence
- Empty array if non-plant or unidentifiable

**Fuzzy Matching:**
- Frontend: filter plants array where `common_name` or `botanical_name` includes AI result (case-insensitive)
- Check all returned results (top to secondary) for matches
- Prioritize exact matches over partial matches

**Mobile-First Responsive:**
- Page renders correctly on all mobile viewport sizes (320px+)
- No horizontal scroll
- Images scale properly within container
- Typography remains legible at all sizes

---

### Files to Create/Modify

| File | Change |
|------|--------|
| `supabase/functions/identify-plant/index.ts` | **NEW** - AI vision edge function |
| `src/pages/Identify.tsx` | **NEW** - Mobile plant identifier page |
| `src/components/Navbar.tsx` | Add mobile-only "IDENTIFY A PLANT" link |
| `src/App.tsx` | Add `/identify` route |
| `supabase/config.toml` | Register `identify-plant` function |

---

### User Flow Summary

1. Mobile user taps "IDENTIFY A PLANT" in nav
2. Arrives at `/identify` page with hero + upload zone
3. Taps upload → camera opens → takes photo
4. Photo preview shown + loading state
5. AI processes (3-5 seconds) → results displayed
6. If confident match (≥85%): show plant details + check our DB
7. If in DB: show matching plant card with link to `/plants/{slug}`
8. If not in DB: show CTA to contact for advice
9. Bottom CTAs: schedule consultation or browse full directory
10. Desktop users: automatic redirect to `/plant-guide` with toast

---

### Edge Cases

- **File too large**: Show toast before API call
- **Network timeout**: 30s timeout, show retry message
- **Non-plant photo**: AI returns empty results, show friendly message
- **Multiple matches in DB**: Show first match (alphabetically)
- **No photo_url in matched plant**: Still show plant card with placeholder
- **Desktop access**: Immediate redirect with explanatory toast
