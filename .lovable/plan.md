

## Enable Mouse Drag Scrolling on Services Carousel

Embla Carousel (which powers the `<Carousel>` component) supports drag/mouse scrolling natively — it just needs `dragFree: true` in the options. By default Embla already enables drag on touch devices, but adding `dragFree` makes the free-scroll drag behavior more natural on desktop with a mouse.

### Changes

**`src/pages/Index.tsx`** (line ~155): Add `dragFree: true` to the services carousel `opts`:

```tsx
<Carousel opts={{ align: "start", loop: true, dragFree: true }} className="w-full">
```

This single prop change enables mouse drag scrolling. No other files need modification — Embla handles pointer events (mouse + touch) out of the box. The `dragFree` option allows momentum-based free scrolling rather than snapping strictly to slides, which feels more natural for a browsable services list.

