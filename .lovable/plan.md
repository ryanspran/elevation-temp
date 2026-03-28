

## Plan: Replace Contact Form with Jobber Embedded Form

### What Changes
Replace the custom-built form (name, email, phone, services, budget, timeframe, message fields) with the Jobber embedded work request form. The form submissions will go directly into your Jobber CRM. The right sidebar with contact info and image stays unchanged.

### Steps

1. **Update `Contact.tsx`**
   - Remove all form state (`useState` hooks), `handleSubmit`, `toggleService`, budget/timeframe options, and unused imports (`Checkbox`, `Label`, `toast`, `services`, `Send`)
   - Replace the `<form>` block (lines 104-245) with a `useEffect` that dynamically injects the Jobber CSS and JS into the page, plus the target `<div id="3572b14d-90ae-44ae-a1fa-521130ecb4d1-2363681">` container
   - The script needs attributes: `clienthub_id` and `form_url` set on the `<script>` element
   - Clean up injected script/link on component unmount
   - Keep the heading "Schedule Your Consultation" and gold divider above the embedded form

2. **Update `index.html`** (if needed)
   - Alternatively, inject via `useEffect` to keep it React-friendly — this is the preferred approach since the script needs to run after the target div is in the DOM

### Technical Details
- Use `useEffect` to create `<link>` and `<script>` elements, append to `document.head`/`document.body`
- Set `script.setAttribute('clienthub_id', '3572b14d-...')` and `script.setAttribute('form_url', '...')`
- Return cleanup function to remove both elements on unmount

