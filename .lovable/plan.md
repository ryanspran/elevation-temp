

## Install Google Analytics Tag

Add the GA4 tracking snippet (`G-YRTYTYMCSM`) to `index.html` immediately after the `<head>` tag. Since this is a single-page app, placing it in `index.html` covers every page automatically — no per-page changes needed.

### Changes

**`index.html`** — Add the two Google tag script lines right after `<head>`:
```html
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-YRTYTYMCSM"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YRTYTYMCSM');
    </script>
    <meta charset="UTF-8" />
    ...
```

One file, ~6 lines added. No other changes required.

