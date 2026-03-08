

## Dynamic OG Images for Plant Shares

When a plant page link is shared on social media, show a branded image with the plant photo and "Elevation Landscapes" company name.

### Approach

Create an **Edge Function** (`generate-plant-og`) that dynamically composites an OG image on-the-fly:

1. **Edge Function** (`supabase/functions/generate-plant-og/index.ts`):
   - Accepts `?id=86` query param
   - Fetches plant data from DB (name, botanical name, photo_url)
   - Uses the Lovable AI image model (`google/gemini-3-pro-image-preview`) to generate a branded OG card — plant photo with "Elevation Landscapes" branding, plant name, and botanical name overlaid
   - Caches the generated image in `site-assets` storage bucket (e.g. `og/plant-86.png`) so it's only generated once per plant
   - Returns the cached image URL (or serves the image directly)

2. **SEOHead updates** (`src/components/SEOHead.tsx`):
   - Add optional `ogImage` prop override that takes priority over DB-stored `og_image_path`

3. **PlantDetail updates** (`src/pages/PlantDetail.tsx`):
   - Pass the OG image URL to SEOHead: construct the edge function URL as the `og:image` value (e.g. `https://<project>.supabase.co/functions/v1/generate-plant-og?id=86`)
   - Social crawlers will hit this URL when scraping the page

### Important consideration

Social media crawlers (Facebook, iMessage, etc.) don't execute JavaScript — they only read the HTML meta tags. Since this is a client-rendered React app, **the `og:image` meta tag won't be visible to crawlers** from `react-helmet`. 

**Realistic options:**
- **Option A**: Pre-generate OG images and store the public URL in the `plants` table. The edge function generates on first request and caches. The `og:image` URL points directly to the stored image in the storage bucket.
- **Option B**: Have the edge function itself serve the image (redirect or stream), so the `og:image` meta tag points to the edge function URL which returns the image bytes directly.

**Option B is simpler** — the edge function URL *is* the og:image, and crawlers fetch it directly as an image.

### Files to create/modify

| File | Change |
|---|---|
| `supabase/functions/generate-plant-og/index.ts` | New — fetches plant, generates branded image via AI, caches in storage, serves image bytes |
| `src/components/SEOHead.tsx` | Add `ogImageOverride` prop |
| `src/pages/PlantDetail.tsx` | Pass edge function URL as `ogImageOverride` |

### Edge function flow
1. Parse `id` from query string
2. Check if `og/plant-{id}.png` exists in storage → serve cached version
3. If not, fetch plant from DB, call Gemini image model with prompt like: *"Create a social media preview card (1200×630px) for a plant called '{name}' ({botanical}). Show the plant prominently with elegant gold text 'Elevation Landscapes' branding at bottom. Dark navy background theme."*
4. Upload result to `site-assets/og/plant-{id}.png`
5. Return image bytes with `Content-Type: image/png`

