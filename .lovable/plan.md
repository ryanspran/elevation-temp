

## Create Contact Page

### Overview
Build a dedicated `/contact` route with a styled contact form featuring service interest checkboxes, budget range dropdown, timeframe dropdown, and landscape imagery — consistent with the site's luxury navy/gold aesthetic. Update all "Contact" links across the site to point to it.

### New File: `src/pages/Contact.tsx`
- Full-page layout with Navbar and Footer
- Hero banner section with a landscape background image (reuse `hero-bg.jpg` or `landscape-photo.jpg`) and overlay, similar to service pages
- Form section with two-column layout on desktop (form left, decorative image right)
- Form fields:
  - **Name** (text input)
  - **Email** (email input)
  - **Phone** (tel input)
  - **Services Interested In** — checkbox group using the service names from `services` data (Grading Solutions, Underground Drainage, Paver Patios, etc.)
  - **Budget Range** — Select dropdown with options: "Under $10,000", "$10,000 – $25,000", "$25,000 – $50,000", "$50,000 – $100,000", "$100,000+"
  - **Timeframe** — Select dropdown with options: "As soon as possible", "Within 1–3 months", "3–6 months", "6–12 months", "Just exploring options"
  - **Message** (textarea)
  - **Submit button** styled with gold/navy theme
- On submit: show a success toast (no backend needed yet)
- Styled with the existing navy, gold, cream palette and Playfair Display headings

### Edit: `src/App.tsx`
- Import `Contact` page and add route: `<Route path="/contact" element={<Contact />} />`

### Edit: `src/components/Navbar.tsx`
- The desktop and mobile "Contact" links already point to `/contact` — no change needed (they're already `<Link to="/contact">`)

### Edit: `src/pages/Index.tsx`
- Update any CTA buttons/links that reference contact to use `<Link to="/contact">` instead of anchor links or phone numbers where appropriate

