

# Elevation Landscapes — Full Website Build

## Overview
A luxury landscaping company website for Elevation Landscapes in Greenville, SC. Dark navy + gold branding with serif headlines (Playfair Display) and clean body text (Inter). The site includes a home page and 16 service landing pages, all designed to convert affluent homeowners.

## Branding & Design System
- **Colors**: Navy (#0F1B2D), Gold (#C8A84E), Light Gold (#E8D48B), Cream backgrounds (#F8F6F0, #FAF8F2), Dark text (#1A1A2E)
- **Typography**: Playfair Display for headlines, Inter for body text
- **Feel**: Luxury architecture firm — refined, exclusive, premium
- **Logo**: Uploaded Elevation Landscapes logo (gold mountains) used in navbar and footer

## Global Components

### Sticky Navbar
- Gold logo (uploaded image) on left
- Links: Home, Services (dropdown with all 16 services), Portfolio, About, Contact (gold outlined button)
- Backdrop blur on scroll, mobile hamburger menu

### Footer
- Logo, tagline, all 16 service links organized in columns
- Contact info (phone/email placeholders), service area list
- Social media icons, gold "Schedule Your Consultation" CTA, copyright

## Home Page (9 sections)
1. **Hero** — Full-width background image with dark gradient overlay, H1 headline, subheadline, two CTAs (gold filled + gold outlined)
2. **Intro** — Light background, "The Standard Your Property Deserves" with two paragraphs about exclusive residential focus
3. **Services Grid** — Navy background, 16 service cards in 4-column grid (responsive), gold hover borders, links to each service page
4. **Why Us** — Light background, 6 icon+text blocks highlighting differentiators
5. **Process** — Navy background, 4 numbered gold circles with connecting line showing the journey
6. **Testimonials** — Light background, 3 placeholder testimonial cards with star ratings
7. **Portfolio** — Navy background, 6 placeholder project images with overlay text
8. **Service Area** — Light background, list of 12 communities served
9. **CTA Section** — Navy background, contact form (Name, Email, Phone, Service dropdown, Message) with gold submit button

## Reusable Service Landing Page Template
A template component at `/services/:slug` with these sections:
- Hero with background image, H1, subheadline, 2 CTAs
- Body copy section (light background)
- Trust signals (navy background, 5 icon cards)
- 3-step process section
- FAQ accordion (6 items, gold accents)
- Testimonial card
- CTA section with contact form
- Related Services row (3-4 cards)

## 16 Service Landing Pages
Each page uses the template, populated with unique content:

1. `/services/grading-solutions` — Grading Solutions
2. `/services/underground-drainage-solutions` — Underground Drainage
3. `/services/irrigation-installation-repair` — Irrigation Install & Repair
4. `/services/landscape-remediation` — Landscape Remediation
5. `/services/custom-water-features` — Custom Water Features
6. `/services/natural-stone-staircases` — Natural Stone Staircases
7. `/services/custom-stone-pathways` — Custom Stone Pathways
8. `/services/boulder-retaining-walls` — Boulder Retaining Walls
9. `/services/block-retaining-walls` — Block Retaining Walls
10. `/services/paver-patios` — Paver Patios
11. `/services/pool-decks-pool-coping` — Pool Decks & Coping
12. `/services/outdoor-kitchens` — Outdoor Kitchens
13. `/services/outdoor-gas-fire-pits` — Gas Fire Pits
14. `/services/new-plant-installation` — New Plant Installation
15. `/services/sod-and-seeding` — Sod & Seeding
16. `/services/landscape-lighting` — Landscape Lighting

Each page includes unique: SEO title, H1, subheadline, 4-5 paragraphs of body copy with keywords, 5 trust signals, 6 FAQ items, CTA text, and 3 related service links.

## Routing Structure
- `/` — Home page
- `/services/:slug` — Dynamic service pages with data-driven content
- Portfolio, About, Contact pages as placeholder routes for future build-out

## Technical Approach
- Service page data stored in a centralized data file for all 16 services
- Reusable template component consuming service data by slug
- Google Fonts loaded for Playfair Display and Inter
- Responsive design throughout (mobile-first)
- Smooth scroll animations for visual polish
- All content is static (no backend needed)

