
## Add Mobile Plant Identifier CTA to Plant Guide Page

### **Objective**
Add a mobile-only call-to-action link below the search bar in the hero section of the Plant & Tree Directory page that promotes the plant identifier feature.

### **Changes Required**

**File: `src/pages/PlantGuide.tsx`**

**1. Add CTA Link in Hero Section**
- Insert the CTA link immediately after the search bar div (around line 341-342)
- Position it within the hero section but after the search input
- Use conditional rendering with `isMobile` to show only on mobile viewports

**2. CTA Content & Styling**
- Text: "See a plant you love but don't know what it is? Snap a photo and we'll identify it instantly →"
- Link to `/identify`
- Styling specifications:
  - Centered text link (not button style)
  - Gold color (`text-gold`) with subtle underline on hover
  - Font size: `text-base` (~16px)
  - Margins: `mt-4 mb-6` (16px top, 24px bottom)
  - Font family: `font-sans` (Inter)

**3. Arrow Animation**
- Use CSS transform to animate the arrow (→) slightly to the right on tap
- Add transition classes for smooth animation
- Use `active:translate-x-0.5` for the tap effect

**4. Implementation Details**
```tsx
{/* Mobile Plant Identifier CTA - Only visible on mobile */}
{isMobile && (
  <div className="mt-4 mb-6">
    <Link
      to="/identify"
      className="text-gold text-base font-sans hover:underline active:translate-x-0.5 transition-all duration-200 group"
    >
      See a plant you love but don't know what it is? Snap a photo and we'll identify it instantly{" "}
      <span className="inline-block group-active:translate-x-0.5 transition-transform duration-200">→</span>
    </Link>
  </div>
)}
```

### **Technical Approach**
- Leverage existing `isMobile` hook from `useIsMobile()`
- Use existing Tailwind color classes (`text-gold`)
- Apply consistent spacing with the page design
- Position between search bar and seasonal picks section
- Ensure responsive behavior matches page patterns

### **Visual Integration**
- Maintains hero section's centered layout
- Complements existing search functionality 
- Uses established color scheme and typography
- Provides clear visual hierarchy without competing with search bar

The CTA will feel like a natural extension of the search functionality while introducing users to the plant identification feature in a contextually appropriate location.
