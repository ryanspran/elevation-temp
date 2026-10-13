# Oakline Rebrand: Logo, Name Cleanup, Colors

## 1. Logos
- Add all 4 uploaded logos to the project. Before using them, check that their backgrounds are transparent and remove any white box.
- Header: white + green logo at about 64px tall on desktop and 48px on mobile. The header grows a little if it needs to. No stretching or cropping.
- Footer: white + green logo.
- Admin login and other light areas: blue + green logo.
- Keep the all-blue and all-white logos in the project for later use.
- Favicon and apple-touch-icon: the "O" cropped from the blue + green logo. Remove the old favicon files.
- Delete the old Elevation logo file.

## 2. Remove the name "Elevation"
- Search the whole project for "elevation" (any capitalization). Replace brand mentions with "Oakline" in page text, structured data, admin text, and backend function text.
- Domain URLs (elevationlandscapes.com in links, sitemap, robots.txt, CNAME, and the setting that hides the temporary site from Google) will **not** change, as you asked. I'll list them in my summary.
- Regenerate the social share image with the new logo and colors, at 1200x630.

## 3. New color palette
Update the site's color settings so the change reaches every page:
- Deep Sapphire #04163F replaces navy for the header, footer, and dark sections.
- Dark Sapphire #082567 is the main brand color.
- Oakline Green #3F6E35 is for main buttons and for accents on light backgrounds.
- Leaf Green #8FC27E replaces gold for accents on dark backgrounds. It also covers the Contact nav button, hover states, focus rings, and the "Upstate, SC" headline accent.
- Off-white #F5F7F4 for light sections, and white for text on dark backgrounds.
- "Schedule a Consultation" button: green with white text, slightly darker on hover.
- "Call Now" button: white outline with the phone icon and a faint white fill on hover.
- The dark tint over the hero photo changes to a Deep Sapphire tint.
- Replace hard-coded old colors (for example #242938 on the plant page and the print styles).
- The current "gold" color settings will point to green automatically, so every gold accent changes without editing each page one by one.

## 4. Checks
- Check text contrast against WCAG AA.
- Screenshot desktop and mobile, including the mobile menu and Services dropdown.
- Confirm no "Elevation" remains apart from the domain, email, and link list.
- Update project notes to the new palette and logo (replacing Navy/Gold).

## Technical details
- Retarget the --navy, --gold, and --gold-light/hover tokens to the new colors, and add --sapphire, --green, and --leaf aliases. Primary buttons that sit on light backgrounds switch to Oakline Green so contrast passes.
- Logos go in as asset pointers, except the favicon, which stays a real file in the public folder and gets cropped with magick.
