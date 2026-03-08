import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Plant } from "./usePlants";

async function fetchPlantBySlug(slug: string): Promise<Plant> {
  // Fetch all rows with this slug (may be multiple for different guide_categories)
  const { data: rows, error } = await supabase
    .from("plants")
    .select("*")
    .eq("slug", slug);

  if (error) throw error;
  if (!rows || rows.length === 0) throw new Error("Plant not found");

  const primary = rows[0];
  const categories: string[] = [];
  for (const r of rows) {
    if (r.guide_category && !categories.includes(r.guide_category)) {
      categories.push(r.guide_category);
    }
  }

  return {
    ...(primary as any),
    sc_native: primary.sc_native ?? false,
    guide_categories: categories,
  };
}

/** Fetch a single plant by its old numeric ID (for redirects) */
async function fetchPlantById(id: number): Promise<{ slug: string } | null> {
  const { data, error } = await supabase
    .from("plants")
    .select("slug")
    .eq("id", id)
    .limit(1)
    .single();
  if (error || !data) return null;
  return { slug: data.slug };
}

export function usePlantBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ["plant", "slug", slug],
    queryFn: () => fetchPlantBySlug(slug!),
    enabled: !!slug,
    staleTime: 1000 * 60 * 10,
  });
}

export function usePlantRedirect(id: number | undefined) {
  return useQuery({
    queryKey: ["plant-redirect", id],
    queryFn: () => fetchPlantById(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 60,
  });
}
