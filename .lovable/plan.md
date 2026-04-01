

## Fix: Invalid object type for field "parent_node"

Google Search Console is reporting this error because the site outputs multiple JSON-LD objects (e.g. FAQPage + BreadcrumbList) as a single JSON array in one `<script>` tag. Google's validator sometimes misinterprets array-based JSON-LD, treating one object as a parent of another.

**Root cause**: In `SEOHead.tsx`, when `jsonLd` is an array, it serializes the entire array into one `<script>` block.

**Fix**: Render each JSON-LD object in its own separate `<script type="application/ld+json">` tag.

### Change

**`src/components/SEOHead.tsx`** — Replace the single JSON-LD script block with a loop that outputs one `<script>` per object:

```tsx
{jsonLd && (
  Array.isArray(jsonLd)
    ? jsonLd.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))
    : (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )
)}
```

One file, ~10 lines changed. This affects all pages (FAQ, ServicePage, PlantDetail, ArticlePage, PlantGuide) that pass JSON-LD arrays — no changes needed in those files.

