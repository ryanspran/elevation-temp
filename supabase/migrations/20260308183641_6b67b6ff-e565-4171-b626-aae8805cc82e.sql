
CREATE TABLE public.plants (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  common_name text NOT NULL,
  botanical_name text,
  plant_type text,
  mature_size text,
  sun_requirements text,
  water_needs text,
  soil_preferences text,
  bloom_time_color text,
  fall_color text,
  wildlife_value text,
  special_features text,
  landscape_use text,
  maintenance_level text,
  sc_native boolean DEFAULT false,
  guide_category text,
  photo_url text,
  sun_category text,
  water_category text
);

ALTER TABLE public.plants ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read plants"
  ON public.plants
  FOR SELECT
  TO anon, authenticated
  USING (true);
