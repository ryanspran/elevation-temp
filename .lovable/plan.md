

## Fix: Sitemap XML Structure

The `</urlset>` closing tag was placed before the plant URLs instead of after them. Google only parses URLs inside the `<urlset>...</urlset>` block, so all plant pages are being ignored.

### Change

**`public/sitemap.xml`** — Move the `</urlset>` closing tag from line 33 to the very end of the file (after the last plant URL on line 311).

This is a one-line fix: remove `</urlset>` from line 33 and append it after line 311.

After deploying, resubmit the sitemap in Google Search Console so it re-reads the corrected file.

