

## Generate 15 Hero Images for Service Pages

Each of the 15 services (excluding Block Retaining Walls, which already has one) needs a high-quality hero image. I will use Lovable AI's image generation model (`google/gemini-3-pro-image-preview`) to create photorealistic landscape/hardscape images for each service.

### Workflow

1. **Create an edge function** (`generate-service-image`) that calls the Lovable AI image generation endpoint, generates an image, and uploads it to the `site-assets` storage bucket.

2. **Create a one-time script/page** (or run sequentially) that generates images for these 15 services with tailored prompts:

| Service | Prompt Theme |
|---|---|
| Grading Solutions | Heavy equipment grading a residential hillside, red clay SC soil |
| Underground Drainage | French drain installation in a lush green yard |
| Irrigation Install & Repair | Sprinkler system watering a manicured lawn at golden hour |
| Landscape Remediation | Before/after eroded hillside being restored with retaining and plantings |
| Custom Water Features | Elegant natural stone water feature/fountain in upscale backyard |
| Natural Stone Staircases | Flagstone staircase winding through landscaped hillside |
| Custom Stone Pathways | Curved natural stone pathway through garden beds |
| Boulder Retaining Walls | Large boulder retaining wall on sloped residential property |
| Paver Patios | Expansive paver patio with outdoor furniture, evening light |
| Pool Decks & Coping | Travertine pool deck surrounding a blue pool |
| Outdoor Kitchens | Built-in stone outdoor kitchen with grill and counter |
| Gas Fire Pits | Stone gas fire pit with seating area at dusk |
| New Plant Installation | Fresh professional plantings — shrubs, ornamental grasses, mulch beds |
| Sod & Seeding | Freshly laid sod on a large residential lawn |
| Landscape Lighting | Dramatic low-voltage landscape lighting illuminating a home exterior at night |

3. **Upload each generated image** to the `site-assets` storage bucket under a `heroes/` folder.

4. **Update `src/data/services.ts`** to import and assign each new hero image URL to the corresponding service's `heroImage` field.

### Technical Details

- Model: `google/gemini-3-pro-image-preview` (higher quality image generation)
- Each prompt will specify: photorealistic, wide landscape orientation, Greenville SC upstate setting, luxury residential, no text/watermarks
- Images stored in storage bucket so they persist and load fast
- The edge function handles generation + upload; frontend code just references the public URLs

### Files Changed

- **New**: `supabase/functions/generate-service-image/index.ts` — edge function to generate and store images
- **Modified**: `src/data/services.ts` — add `heroImage` URLs for all 15 services after images are generated and uploaded

