import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useContent(page: string, section?: string) {
  return useQuery({
    queryKey: ["site-content", page, section],
    queryFn: async () => {
      let query = supabase.from("site_content").select("*").eq("page", page);
      if (section) query = query.eq("section", section);
      const { data, error } = await query;
      if (error) throw error;
      return data ?? [];
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useContentValue(page: string, section: string, field: string, fallback: string) {
  const { data } = useContent(page, section);
  const match = data?.find((r) => r.field === field);
  return match?.value ?? fallback;
}

export function useUpsertContent() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (row: { page: string; section: string; field: string; value: string }) => {
      const { error } = await supabase.from("site_content").upsert(row, {
        onConflict: "page,section,field",
      });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["site-content"] }),
  });
}

export function usePageSEO(page: string) {
  return useQuery({
    queryKey: ["seo-metadata", page],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("seo_metadata")
        .select("*")
        .eq("page", page)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useUpsertSEO() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (row: {
      page: string;
      title: string;
      description: string;
      og_title: string;
      og_description: string;
      og_image_path: string;
    }) => {
      const { error } = await supabase.from("seo_metadata").upsert(row, {
        onConflict: "page",
      });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["seo-metadata"] }),
  });
}

export function usePageImages(page: string, section?: string) {
  return useQuery({
    queryKey: ["site-images", page, section],
    queryFn: async () => {
      let query = supabase.from("site_images").select("*").eq("page", page).order("position");
      if (section) query = query.eq("section", section);
      const { data, error } = await query;
      if (error) throw error;
      return data ?? [];
    },
    staleTime: 5 * 60 * 1000,
  });
}
