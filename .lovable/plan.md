# Fix: Jobber form never appears on direct visits (QR code scans)

## What's wrong

Confirmed by inspecting the live page at `https://elevationlandscapes.com/contact`:

The Jobber form container and its loader script currently live in `index.html`, and the Contact page moves that container into the page after React mounts. Two problems combine on a cold, direct visit (exactly what a QR scan does):

1. The prerendered static HTML that gets served has the Jobber container baked **inside** the page markup (`<div class="hidden"><div id="3572b14d-...."></div></div>`) instead of at the end of `<body>`. When React boots it wipes and re-renders that markup, so the container the Jobber script was told to fill is destroyed.
2. The Jobber snippet script runs once, on page load, against that now-missing container. It never runs again, so no iframe is ever created. The page is left showing the grey loading skeleton forever, because the "loaded" fallback only fires if the container has children.

On a soft in-app navigation (landing on the homepage first, then tapping Contact) the container often survives, which is why it looks fine in normal browsing but fails when someone lands straight on `/contact` from a QR code.

## The fix

Stop hoisting the form into `index.html` and let the Contact page own it.

1. **`index.html`** — remove the hidden Jobber container `<div>` and the Jobber `<script>` tag. Keep the `preconnect` / `preload` hints for the Jobber CSS and script so the network work still starts early.
2. **`src/pages/Contact.tsx`** — render the Jobber container `<div id="...">` directly in JSX, and on mount inject the Jobber snippet `<script>` (with `clienthub_id` and `form_url` attributes) into the document. This guarantees the script always runs *after* the container exists, on every entry path including a cold direct load.
3. **Loading state** — always keep the container mounted (never `hidden`), and show the skeleton as an overlay above it that disappears once the iframe reports a height. Extend the safety timeout so a slow mobile connection doesn't strand the user, and remove the "container has children" condition that currently blocks it.
4. **Fallback for blocked/failed embeds** — if the iframe still hasn't appeared after a few seconds, show a gold "Open our request form" button linking directly to the public Jobber form URL, plus the existing tap-to-call number. In-app browsers (Instagram, Facebook, some QR scanner apps) sometimes block third-party iframes entirely, and right now that dead-ends the visitor.

## Verification

Test in a mobile viewport with a cold load straight to `/contact` (no prior navigation) and confirm the form iframe renders; also confirm the soft-navigation path from the homepage still works.

## Notes

Frontend only — no schema, routing, or backend changes. Styling stays consistent with the existing navy/gold/cream system.
