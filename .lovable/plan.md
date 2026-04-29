## Problem

Google Search Console shows `elevationlandscapes.com` is excluded by a `noindex` tag. Confirmed via curl: the live homepage HTML contains `<meta name="robots" content="noindex, nofollow">`.

**Root cause:** The conditional `noindex` script in `index.html` was meant to keep the Lovable staging domain out of Google. But our prerender pipeline (`lovable-agency-prerender.js`) uses Playwright to crawl `http://localhost:4174/` and saves the rendered HTML. At crawl time, `location.hostname === "localhost"`, so the script injects the `noindex` tag — and that tag gets baked into every static page deployed to GitHub Pages at `elevationlandscapes.com`.

## Fix

Replace the runtime hostname check with a build-time approach that the prerenderer can recognize as production.

### Change 1: `index.html`

Update the conditional so it treats the prerender crawler as production. The prerender hits `localhost:4174`, but the **final deployed URL** is `elevationlandscapes.com`. We need the script to NOT inject noindex during prerendering.

Two options, ordered by simplicity:

**Option A (recommended):** Allowlist both `elevationlandscapes.com` AND `localhost` (the prerender host). The Lovable preview domains (`*.lovable.app`, `*.lovableproject.com`) will still get noindex correctly at runtime.

```html
<script>
  var h = location.hostname;
  if (h !== 'elevationlandscapes.com' && h !== 'localhost' && h !== '127.0.0.1') {
    var m = document.createElement('meta');
    m.name = 'robots';
    m.content = 'noindex, nofollow';
    document.head.appendChild(m);
  }
</script>
```

This keeps the staging-noindex memory rule intact (Lovable preview domain still gets noindex) and removes it from production.

### Change 2: Force a fresh Google recrawl

After deploy, in Search Console:
1. URL Inspection → enter `https://elevationlandscapes.com/` → **Request Indexing**
2. Repeat for a few key pages (e.g. `/services/outdoor-kitchens`, `/plant-guide`, `/about`).
3. The full site will recrawl naturally over the following days.

### Verification (after deploy completes)

```bash
curl -s https://elevationlandscapes.com/ | grep -i robots
# Expected: no output (no robots meta tag present)
```

Spot check a few prerendered subpages too (`/about`, `/services/paver-patios`, `/plants/caladium`).

## Files Changed

- `index.html` — update hostname allowlist in the noindex script

## Out of Scope

- The "URL is not on Google" referring page from `__media__/js/netsoltrademark.php?d=...sexiitrina.com` is a spammy backlink farm scraping your URL — ignore it, it's not something on your site.
- Sitemap is fine; pages are discoverable. The only blocker is the noindex tag.
