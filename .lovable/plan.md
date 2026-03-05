

## Content Management System (CMS) for Elevation Landscapes

### Overview

Build a database-backed CMS that lets your client log in and edit all website copy, photos, and SEO metadata through a clean admin interface. Every page section becomes editable — no code changes needed to update content.

### Architecture

```text
┌─────────────────────────────────┐
│         Admin Panel (/admin)    │
│  ┌───────────┐ ┌─────────────┐ │
│  │ Page List  │ │ Section     │ │
│  │ - Home     │ │ Editor      │ │
│  │ - About    │ │ - Copy      │ │
│  │ - Contact  │ │ - Photos    │ │
│  │ - Portfolio│ │ - SEO Meta  │ │
│  │ - Services │ │             │ │
│  └───────────┘ └─────────────┘ │
└─────────────────────────────────┘
        │                │
   Supabase DB     Supabase Storage
   (content rows)  (uploaded photos)
```

### Database Schema

**1. `site_content` table** — stores all editable text blocks:
- `id`, `page` (e.g. "home", "about"), `section` (e.g. "hero", "intro"), `field` (e.g. "heading", "body"), `value` (text content), `updated_at`
- Composite unique on (page, section, field)

**2. `site_images` table** — stores photo references:
- `id`, `page`, `section`, `position` (integer for ordering), `storage_path`, `alt_text`, `updated_at`

**3. `seo_metadata` table** — per-page SEO:
- `id`, `page` (unique), `title`, `description`, `og_title`, `og_description`, `og_image_path`, `updated_at`

**4. `user_roles` table** — role-based access:
- Uses the security-definer pattern from project guidelines
- `admin` role required to access the CMS

**5. Storage bucket** — `site-assets` for uploaded photos

### Admin Interface

Located at `/admin` (protected route, requires admin role):

- **Sidebar navigation** listing each page (Home, About, Contact, Portfolio, Services)
- **Section editor** for the selected page showing all editable fields grouped by section
- **Rich text inputs** for headings and body copy
- **Image upload** with drag-and-drop, preview thumbnails, alt text fields
- **SEO panel** per page: meta title, meta description, OG fields with character counters and preview
- **Save button** per section with optimistic UI and toast confirmations
- **Service sub-pages** editable individually (each service's copy, FAQs, trust signals)

### SEO Features

- Character counters for title (60 char target) and description (160 char target)
- Google SERP preview showing how the page will appear in search results
- OG image preview for social sharing
- Dynamic `<title>` and `<meta>` tags injected via React Helmet (or document.title)

### Frontend Content Loading

- Custom `useContent(page, section)` hook that fetches from `site_content` table
- Falls back to current hardcoded content if no database entry exists (graceful migration)
- `usePageSEO(page)` hook for meta tags
- Content cached via React Query with background revalidation

### Authentication

- Supabase Auth with email/password login
- `/admin/login` page
- Admin role check via `has_role()` security-definer function
- Protected route wrapper that redirects non-admins

### Implementation Steps

1. **Enable Lovable Cloud** and set up database tables, storage bucket, RLS policies, and role functions
2. **Build auth flow** — login page, protected route wrapper, role checking
3. **Build admin layout** — sidebar navigation, page/section structure
4. **Build section editors** — text fields, image uploaders, SEO panel
5. **Create content hooks** — `useContent`, `usePageSEO`, `usePageImages`
6. **Integrate hooks into public pages** — replace hardcoded content with hook-driven content, keeping current values as fallbacks
7. **Seed database** with current hardcoded content so the admin starts populated

### What Stays the Same

- All current page layouts and styling remain unchanged
- Current content becomes the default fallback
- No visual changes to the public site until the client makes edits

