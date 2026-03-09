

## Problem

CTA buttons across the site use `hover:bg-gold-light` (a lighter, washed-out gold) or `hover:bg-primary/90` (90% opacity), both of which make the button appear dimmer on hover instead of more prominent.

## Solution

Replace the dim hover effects with a "pop" effect combining:
- **Brighter hover color** — use a slightly lighter gold that still feels vibrant (not washed out)
- **Scale up** — `hover:scale-105` for a subtle lift
- **Shadow** — `hover:shadow-lg` for depth
- **Smooth transition** — `transition-all duration-200`

### Changes

**1. `src/index.css`** — Add a new CSS variable for a bright hover gold:
- Add `--gold-hover: 40 55% 60%;` (brighter, more saturated than gold-light)

**2. `tailwind.config.ts`** — Add `gold-hover` color token

**3. Global find-and-replace across all pages/components:**

| Current hover class | Replacement |
|---|---|
| `hover:bg-gold-light` | `hover:bg-gold-hover hover:scale-105 hover:shadow-lg` |
| `hover:bg-primary/90` | `hover:bg-primary hover:scale-105 hover:shadow-lg` |

Files affected:
- `src/pages/Index.tsx` (3 CTAs)
- `src/pages/ServicePage.tsx` (3 CTAs)
- `src/pages/Articles.tsx` (1 CTA)
- `src/pages/ArticlePage.tsx` (2 CTAs)
- `src/pages/Contact.tsx` (1 CTA)
- `src/pages/Subcontractor.tsx` (2 CTAs)
- `src/pages/AdminLogin.tsx` (1 button)
- `src/components/ProtectedRoute.tsx` (1 button)
- `src/components/admin/AdminContentEditor.tsx` (1 button)
- `src/components/admin/AdminSEOEditor.tsx` (1 button)
- `src/components/ui/button.tsx` — default variant: change `hover:bg-primary/90` to `hover:bg-primary hover:scale-105 hover:shadow-lg`

**4. Outline/ghost CTA buttons** (the "Call Now" style with `border border-gold`):
- These already use `hover:bg-gold hover:text-navy` which is fine, but add `hover:scale-105 hover:shadow-lg` for consistency.

This gives every CTA a satisfying "lift" effect on hover instead of dimming.

