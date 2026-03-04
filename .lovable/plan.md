

# Add Service Photos to Carousel

## Approach
Add a unique example photo for each of the 16 services in the "Our Services" carousel. I'll use the AI image generation API (Gemini) to create luxury-styled photos for each service, save them as static assets, and update the carousel to display them.

## Changes

### 1. Generate 16 service images
Use the AI image generation model to create realistic, luxury-styled photos for each service:
- Grading Solutions — excavation equipment on a luxury estate
- Underground Drainage — French drain installation in manicured yard
- Irrigation — sprinkler system on lush green lawn
- Landscape Remediation — before/after garden restoration
- Custom Water Features — natural stone waterfall in garden
- Natural Stone Staircases — bluestone steps on wooded hillside
- Custom Stone Pathways — flagstone path through landscaped garden
- Boulder Retaining Walls — natural boulder wall with plantings
- Block Retaining Walls — segmental block terraced wall
- Paver Patios — travertine patio with outdoor furniture
- Pool Decks & Coping — luxury pool with stone deck
- Outdoor Kitchens — stone outdoor kitchen with grill island
- Gas Fire Pits — stone fire pit at dusk with flames
- New Plant Installation — specimen trees and ornamental plantings
- Sod & Seeding — fresh sod being laid on prepared soil
- Landscape Lighting — illuminated garden and home at night

Each image saved to `src/assets/services/` directory.

### 2. Update `src/data/services.ts`
Add an `image` field to `ServiceData` interface and import the generated images for each service entry.

### 3. Update `src/pages/Index.tsx`
Replace the gradient/icon placeholder in the carousel with `<img src={service.image}>` displaying the actual photo, maintaining the `aspect-[4/3]` ratio and `object-cover` styling.

