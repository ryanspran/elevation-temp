import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Plant } from "./usePlants";

async function fetchPlant(id: number): Promise<Plant> {
  // First get the plant row
  const { data: row, error } = await supabase
    .from("plants")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;

  // Then fetch all rows with same common_name to gather all categories
  const { data: siblings } = await supabase
    .from("plants")
    .select("guide_category")
    .eq("common_name", row.common_name);

  const categories: string[] = [];
  for (const s of siblings ?? []) {
    if (s.guide_category && !categories.includes(s.guide_category)) {
      categories.push(s.guide_category);
    }
  }

  return {
    ...(row as any),
    sc_native: row.sc_native ?? false,
    guide_categories: categories,
  };
}

export function usePlant(id: number | undefined) {
  return useQuery({
    queryKey: ["plant", id],
    queryFn: () => fetchPlant(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 10,
  });
}
