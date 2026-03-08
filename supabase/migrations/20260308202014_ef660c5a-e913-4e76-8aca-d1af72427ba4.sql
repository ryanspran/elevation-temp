
ALTER TABLE public.plants ADD COLUMN IF NOT EXISTS slug text;

UPDATE public.plants
SET slug = trim(both '-' from
  regexp_replace(
    regexp_replace(
      regexp_replace(
        lower(trim(common_name)),
        '[^a-z0-9\s-]', '', 'g'
      ),
      '\s+', '-', 'g'
    ),
    '-+', '-', 'g'
  )
)
WHERE slug IS NULL;

ALTER TABLE public.plants ALTER COLUMN slug SET NOT NULL;
CREATE INDEX IF NOT EXISTS plants_slug_idx ON public.plants (slug);
