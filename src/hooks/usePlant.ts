import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Plant } from "./usePlants";

async function fetchPlant(id: number): Promise<Plant> {
  const { data, error } = await supabase
    .from("plants")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data as Plant;
}

export function usePlant(id: number | undefined) {
  return useQuery({
    queryKey: ["plant", id],
    queryFn: () => fetchPlant(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 10,
  });
}
