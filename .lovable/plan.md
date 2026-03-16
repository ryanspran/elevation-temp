

## Broaden Market Positioning Across All Pages

### Summary
Update all "exclusively residential" / "discerning homeowners" language site-wide to welcome homeowners, home builders, commercial developments, and commercial properties — while preserving the luxury tone.

### Files & Changes

**1. `src/pages/Index.tsx`** — 7 edits

| Line(s) | Current | New |
|---|---|---|
| 24 | "…most discerning homeowners." | "…residential, builder, and commercial clients who demand the finest in outdoor design." |
| 57 | "We serve only residential clients who demand the absolute finest…" | "We serve clients who demand the absolute finest — from luxury homes to custom builds and commercial properties." |
| 93 | "…most discerning homeowners." | "…residential, builder, and commercial clients who demand the finest." |
| 113-114 | "…most discerning homeowners." | "…residential, builder, and commercial clients who demand the finest." |
| 148-149 | "serving exclusively residential clients across Greenville" | "serving homeowners, builders, and commercial clients across Greenville" |
| 233 | "Why Greenville's Most Discerning Homeowners Choose Us" | "Why Greenville's Most Discerning Clients Choose Us" |
| 389 | "proudly serves homeowners across" | "proudly serves homeowners, builders, and commercial clients across" |
| 400 | "trusted residential landscape architect for discerning homeowners" | "trusted landscape partner for discerning clients" |
| 403 | "Our residential landscape architecture" | "Our landscape architecture" |

**2. `src/pages/About.tsx`** — 2 edits

| Line | Current | New |
|---|---|---|
| 14 | "…most discerning homeowners." | "…most discerning residential and commercial clients." |
| 51 | "every homeowner deserves" | "every client deserves" |

**3. `src/data/services.ts`** — ~25 edits across all 16 service entries

Systematic find-and-replace patterns:
- `"Curated clientele, no commercial or production work"` → `"Curated clientele committed to quality"`
- `"Exclusive residential across…"` → `"Residential and commercial projects across…"`
- `"Exclusive residential landscapes across…"` → `"Residential and commercial landscapes across…"`
- `"Exclusive residential work across…"` → `"Residential and commercial work across…"`
- `"Exclusive residential experience across…"` → `"Residential and commercial experience across…"`
- `"Exclusive residential focus…"` → `"Luxury focus across residential and commercial"`
- `"Exclusively Luxury Residential"` → `"Luxury Residential & Commercial"`
- `"Exclusive high-end residential across…"` → `"High-end residential and commercial projects across…"`
- `"Exclusive luxury residential projects…"` → `"Luxury residential and commercial projects…"`
- `"High-end residential only"` → `"High-end residential and commercial"`
- `"Working exclusively in luxury residential"` → `"Working exclusively in luxury landscape construction"`
- `"for discerning homeowners"` → `"for discerning clients"`
- `"accountable to the homeowner"` → `"accountable to the client"`
- `"15+ Years Luxury Hardscape" / "Exclusive residential focus"` → keep title, update description to `"Residential and commercial focus throughout Greenville and Upstate SC"`

**4. `src/pages/ArticlePage.tsx`** — Minor

- Any "Next Steps for Homeowners" headings → "Next Steps for Property Owners"
- Article body copy that naturally says "homeowners" in advice context stays (good for SEO)

### What stays unchanged
- Luxury tone and premium positioning throughout
- Subcontractor page (already builder-focused)
- Contact page (already neutral)
- Footer (already neutral)
- Article body copy using "homeowners" in a natural advice context

