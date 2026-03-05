

**Problem:** The services dropdown menu background is too transparent, making text hard to read against the page content behind it.

**Fix:** In `src/components/Navbar.tsx`, change the dropdown background from `bg-navy/98` to a fully opaque `bg-navy` (or near-opaque with a solid fallback) for both desktop and mobile menus.

**Changes:**
1. **`src/components/Navbar.tsx`** — Update the desktop services dropdown `div` class from `bg-navy/98 backdrop-blur-md` to `bg-navy` to make it fully opaque. Same for the mobile menu container.

