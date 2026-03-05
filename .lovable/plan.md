

## Plan: Update Block Retaining Walls Landing Page

The request involves two types of changes: updating the data for this specific service, and enhancing the shared template to support per-service customization (process steps, testimonial, CTA heading, urgency text).

### Current Limitations

The `ServicePage.tsx` template currently hardcodes:
- 3 process steps (request asks for 4)
- Generic testimonial quote and attribution
- Generic CTA heading ("Ready to Get Started?")
- No urgency text below the form

The `ServiceData` interface lacks fields for: `processSteps`, `testimonial`, `ctaHeading`, `urgencyText`.

### Changes

**1. Extend `ServiceData` interface** (`src/data/services.ts`)
Add optional fields so existing services keep working with defaults:
- `processSteps?: { num: string; title: string; desc: string }[]`
- `testimonial?: { quote: string; attribution: string }`
- `ctaHeading?: string`
- `urgencyText?: string`

**2. Update block-retaining-walls data** (`src/data/services.ts`)
Replace the existing entry at lines 298-329 with all the user-provided content:
- Updated subheadline (full version)
- 6 body paragraphs (instead of current 5)
- Updated trust signal descriptions
- 6 updated FAQs with full answers
- New `processSteps` (4 steps)
- New `testimonial` (James R., Thornblade)
- New `ctaHeading` ("Ready for a Retaining Wall That Performs and Elevates?")
- New `ctaText` and `urgencyText`
- Hero CTAs: "Schedule Your Free Consultation" + "Call (864) XXX-XXXX" -- these are already handled by the template

**3. Update `ServicePage.tsx` template** to use per-service data with fallbacks
- Process section: use `service.processSteps` if present, else fall back to current hardcoded 3 steps. Change grid to `md:grid-cols-4` when 4 steps, `md:grid-cols-3` when 3.
- Testimonial: use `service.testimonial` if present, else current generic quote.
- CTA heading: use `service.ctaHeading` if present, else "Ready to Get Started?"
- Urgency text: render `service.urgencyText` below the submit button if present.

No database or routing changes needed -- the `/services/block-retaining-walls` route already works via the dynamic `/:slug` pattern.

