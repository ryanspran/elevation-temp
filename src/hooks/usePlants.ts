import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Plant {
  id: number;
  common_name: string;
  botanical_name: string | null;
  plant_type: string | null;
  mature_size: string | null;
  sun_requirements: string | null;
  water_needs: string | null;
  soil_preferences: string | null;
  bloom_time_color: string | null;
  fall_color: string | null;
  wildlife_value: string | null;
  special_features: string | null;
  landscape_use: string | null;
  maintenance_level: string | null;
  sc_native: boolean;
  guide_category: string | null;
  guide_categories: string[];
  photo_url: string | null;
  sun_category: string | null;
  water_category: string | null;
  slug: string;
}

function normalizeName(name: string) {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

function isGenericBotanicalName(name: string | null) {
  if (!name) return true;
  return /\bspp\.?\b/i.test(name);
}

async function fetchAllPlants(): Promise<Plant[]> {
  const { data, error } = await supabase
    .from("plants")
    .select("*")
    .order("common_name");

  if (error) throw error;

  // Deduplicate by common_name (single card per plant in directory)
  const map = new Map<string, Plant>();

  for (const row of data as any[]) {
    const key = normalizeName(row.common_name);
    const existing = map.get(key);

    if (!existing) {
      map.set(key, {
        ...row,
        sc_native: row.sc_native ?? false,
        guide_categories: row.guide_category ? [row.guide_category] : [],
      });
      continue;
    }

    if (row.guide_category && !existing.guide_categories.includes(row.guide_category)) {
      existing.guide_categories.push(row.guide_category);
    }

    // Prefer a more specific botanical name over generic "spp."
    if (isGenericBotanicalName(existing.botanical_name) && !isGenericBotanicalName(row.botanical_name)) {
      existing.botanical_name = row.botanical_name;
    }

    if (!existing.photo_url && row.photo_url) existing.photo_url = row.photo_url;
    if (!existing.special_features && row.special_features) existing.special_features = row.special_features;
    if (!existing.guide_category && row.guide_category) existing.guide_category = row.guide_category;
  }

  return Array.from(map.values()).sort((a, b) => a.common_name.localeCompare(b.common_name));
}

export function usePlants() {
  return useQuery({
    queryKey: ["plants", "dedup-v2"],
    queryFn: fetchAllPlants,
    staleTime: 1000 * 60 * 10,
  });
}

export function getUniqueValues(plants: Plant[], key: keyof Plant): string[] {
  const values = new Set<string>();

  for (const p of plants) {
    if (key === "guide_categories") {
      for (const c of p.guide_categories) {
        if (c.trim()) values.add(c.trim());
      }
    } else {
      const v = p[key];
      if (typeof v === "string" && v.trim()) values.add(v.trim());
    }
  }

  return Array.from(values).sort();
}

export const getUniqueCategories = (plants: Plant[]) => getUniqueValues(plants, "guide_categories");
export const getUniquePlantTypes = (plants: Plant[]) => getUniqueValues(plants, "plant_type");
export const getUniqueSunCategories = (plants: Plant[]) => getUniqueValues(plants, "sun_category");
export const getUniqueWaterCategories = (plants: Plant[]) => getUniqueValues(plants, "water_category");
export const getUniqueMaintenanceLevels = (plants: Plant[]) => getUniqueValues(plants, "maintenance_level");
