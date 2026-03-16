

## Replace "Greenville" with "Upstate SC" Across All Pages

### Scope
763 matches across 14 files. The "Areas We Cover" section in `Index.tsx` (lines 380–411, plus the `serviceAreas` array and JSON-LD `areaServed`) is **excluded** from changes.

### Important nuance
Some instances of "Greenville" appear in **article body copy** that references the local real estate market, county permits, climate, etc. in a natural, SEO-friendly way ("In Greenville's dynamic real estate landscape…", "In Greenville County, most standard landscaping…"). These should be **kept as-is** — they read naturally and are good for local SEO within long-form content.

Article **titles, SEO titles, and SEO descriptions** will be updated since those are the primary positioning copy. Article **slugs** (URL paths like `outdoor-kitchen-greenville`) will stay unchanged to avoid breaking existing links.

### Files & changes

**1. `src/pages/Index.tsx`** — ~6 edits (excluding Areas We Cover section)
- Line 92: SEO title `"…Greenville SC"` → `"…Upstate SC"`
- Line 110: Hero h1 `"Greenville, SC"` → `"Upstate, SC"`
- Line 141: `"Greenville's Premier Landscape Firm"` → `"Upstate SC's Premier Landscape Firm"`
- Line 148: `"across Greenville and Upstate South Carolina"` → `"across Upstate South Carolina"`
- Line 233: `"Why Greenville's Most Discerning…"` → `"Why Upstate SC's Most Discerning…"`
- Line 325: `"{t.location}, Greenville"` → `"{t.location}, Upstate SC"`
- JSON-LD `addressLocality` (line 29) stays "Greenville" — it's a structured data address, not copy

**2. `src/pages/About.tsx`** — 2 edits
- SEO title: `"Greenville SC"` → `"Upstate SC"`
- SEO description: `"Greenville's premier"` → `"Upstate South Carolina's premier"`

**3. `src/components/Footer.tsx`** — 2 edits
- `"Luxury Landscape & Hardscape — Greenville, SC"` → `"…Upstate, SC"`
- MapPin line: `"Greenville, SC"` → `"Upstate, SC"`

**4. `src/pages/Contact.tsx`** — 3 edits
- SEO title: `"Greenville SC"` → `"Upstate SC"`
- SEO description: `"Greenville's premier"` → `"Upstate SC's premier"`
- Address line: `"Greenville, SC & Upstate South Carolina"` → `"Upstate South Carolina"`

**5. `src/pages/Portfolio.tsx`** — 2 edits
- SEO title/description: `"Greenville SC"` / `"across Greenville and Upstate"` → `"Upstate SC"` / `"across Upstate"`

**6. `src/pages/FAQ.tsx`** — 3 edits
- SEO title: `"Greenville SC"` → `"Upstate SC"`
- FAQ answer: `"in the Greenville area"` → `"in the Upstate SC area"`
- FAQ answer: `"In Greenville County"` stays — it's a factual reference to the county

**7. `src/pages/Identify.tsx`** — 1 edit
- SEO description: `"Greenville SC"` → `"Upstate SC"`

**8. `src/pages/Subcontractor.tsx`** — 4 edits
- SEO title/description, h1, body copy: all `"Greenville, SC"` → `"Upstate, SC"`
- JSON-LD `areaServed`: `"Greenville, SC"` → `"Upstate South Carolina"`

**9. `src/pages/PlantGuide.tsx`** — 2 edits
- SEO description: `"Greenville, Spartanburg"` → `"Upstate SC (Zones 7b-8a)"`
- Body copy: `"for the Greenville, Spartanburg & Anderson region"` → `"for the Upstate SC region"`

**10. `src/pages/PlantDetail.tsx`** — 1 edit
- SEO title: `"Greenville SC"` → `"Upstate SC"`
- JSON-LD `addressLocality` stays "Greenville" (structured data)

**11. `src/pages/ServicePage.tsx`** — 2 edits
- JSON-LD `areaServed`: `"Greenville, SC and Upstate South Carolina"` → `"Upstate South Carolina"`
- Default testimonial attribution: `"Greenville Homeowner"` → `"Upstate SC Client"`

**12. `src/pages/Articles.tsx`** — article titles updated
- `"…in Greenville, SC"` → `"…in Upstate SC"` in titles
- `"Transform Your Greenville Landscape…"` → `"Transform Your Upstate SC Landscape…"`
- Excerpt mentioning `"Greenville, Simpsonville, and Greer"` stays (specific location reference)
- Slugs unchanged

**13. `src/pages/ArticlePage.tsx`** — SEO titles/descriptions updated
- Article `seoTitle` and `seoDescription` fields: `"Greenville"` → `"Upstate SC"`
- Article body copy largely stays as-is (natural local SEO references)
- Key heading/title fields updated

**14. `src/data/services.ts`** — ~50+ edits across 16 services
- All `seoTitle` fields: `"Greenville SC"` → `"Upstate SC"`
- All `h1` fields: `"in Greenville, SC"` → `"in Upstate SC"`
- `subheadline` fields: `"Greenville's"` → `"Upstate SC's"`
- Trust signals: `"Greenville's piedmont soils"` → `"Upstate SC's piedmont soils"`, etc.
- FAQ questions: `"Greenville grading"` → `"Upstate SC grading"`, etc.
- Body paragraphs mentioning `"Greenville and Upstate South Carolina"` → `"Upstate South Carolina"`
- Testimonial attributions: `"Greenville Homeowner"` → `"Upstate SC Client"`

### What stays unchanged
- **Areas We Cover section** in Index.tsx (lines 380–411) and its `serviceAreas` array
- **JSON-LD `addressLocality`** fields (structured data requiring a real city name)
- **Article slugs** (URLs stay the same)
- **Article body copy** that naturally references Greenville in a factual/local context
- **FAQ answer** referencing "Greenville County" (factual/legal reference)

