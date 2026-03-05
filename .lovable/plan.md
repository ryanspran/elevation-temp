

**Problem:** The overlapping/stacked photo layout on the About page looks off.

**Fix:** Replace the stacked photo layout with a side-by-side arrangement — two photos in a row, equal size, with rounded corners and shadow. This keeps it clean and simple.

**Changes:**
1. **`src/pages/About.tsx`** — Replace the relative-positioned overlapping photo layout with a simple two-column grid showing both owner photos side by side at equal size. Remove the absolute positioning and the `hidden md:block` logic.

