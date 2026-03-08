

## Enable Mouse Drag Scrolling on Seasonal Picks

The seasonal picks section uses a plain `overflow-x-auto` div, so dragging grabs the image instead of scrolling. Fix by adding mouse-drag-to-scroll behavior and preventing image drag.

### Changes

**`src/pages/PlantGuide.tsx`** — `SeasonalPicks` component:

1. Add `useRef` + mouse event handlers (`onMouseDown`, `onMouseMove`, `onMouseUp`, `onMouseLeave`) on the scroll container to implement click-and-drag horizontal scrolling
2. Track `isDown`, `startX`, `scrollLeft` in a ref to calculate drag delta
3. Add `select-none` and `cursor-grab` / `cursor-grabbing` classes
4. Add `draggable={false}` and `pointer-events-none` on the `<img>` elements to prevent browser image drag
5. Prevent navigation on drag: track if a drag occurred, and use `onClick` with `e.preventDefault()` on the `<Link>` elements when dragging (so clicking still works, but drag doesn't navigate)

No other files need changes.

