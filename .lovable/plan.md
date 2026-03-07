

## Problem

The file `src/assets/why-us-photo.jpg` is shared between both `Index.tsx` (home page) and `Subcontractor.tsx`. When I overwrote it with the waterfall image, it changed both pages.

## Plan

1. **Restore the original home page photo** — Save the original `why-us-photo.jpg` back (need to recover it from git/previous state).

2. **Create a separate asset for the subcontractor page** — Save the waterfall image as a new file, e.g. `src/assets/subcontractor-why-us.jpg`.

3. **Update `Subcontractor.tsx`** — Change the import from `why-us-photo.jpg` to `subcontractor-why-us.jpg`.

4. **Leave `Index.tsx` untouched** — It will continue using the restored `why-us-photo.jpg`.

This ensures each page has its own independent image asset.

