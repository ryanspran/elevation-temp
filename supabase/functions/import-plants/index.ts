import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Papa from "https://esm.sh/papaparse@5";

function computeSunCategory(sun: string): string {
  if (!sun) return "Full Sun";
  const lower = sun.toLowerCase();
  const hasSun = lower.includes("full sun");
  const hasShade = lower.includes("shade");
  const hasPart = lower.includes("part");
  const hasFiltered = lower.includes("filtered");

  if (hasPart || hasFiltered || (hasSun && hasShade)) return "Part Sun/Shade";
  if (hasShade && !hasSun) return "Shade";
  return "Full Sun";
}

function computeWaterCategory(water: string): string {
  if (!water) return "Moderate";
  const lower = water.toLowerCase();
  const hasLow = lower.includes("low");
  const hasModerate = lower.includes("moderate");
  const hasHigh = lower.includes("high");

  if (hasHigh) return "High";
  if (hasLow && hasModerate) return "Low to Moderate";
  if (hasLow) return "Low";
  return "Moderate";
}

function stripCategoryPrefix(cat: string): string {
  if (!cat) return cat;
  return cat.replace(/^\d+\.\s*/, "");
}

Deno.serve(async (req) => {
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const csvText = await req.text();

  const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });

  const plants = parsed.data.map((row: Record<string, string>) => ({
    common_name: row["Common Name"]?.trim() || "",
    botanical_name: row["Botanical Name"]?.trim() || null,
    plant_type: row["Plant Type"]?.trim() || null,
    mature_size: row["Mature Size (H x W)"]?.trim() || null,
    sun_requirements: row["Sun Requirements"]?.trim() || null,
    water_needs: row["Water Needs"]?.trim() || null,
    soil_preferences: row["Soil Preferences"]?.trim() || null,
    bloom_time_color: row["Bloom Time & Color"]?.trim() || null,
    fall_color: row["Fall Color"]?.trim() || null,
    wildlife_value: row["Wildlife Value"]?.trim() || null,
    special_features: row["Special Features"]?.trim() || null,
    landscape_use: row["Landscape Use"]?.trim() || null,
    maintenance_level: row["Maintenance Level"]?.trim() || null,
    sc_native: row["SC Native"]?.trim()?.toLowerCase() === "yes",
    guide_category: stripCategoryPrefix(row["Guide Category"]?.trim() || ""),
    photo_url: row["Photo URL"]?.trim() || null,
    sun_category: computeSunCategory(row["Sun Requirements"]?.trim() || ""),
    water_category: computeWaterCategory(row["Water Needs"]?.trim() || ""),
  }));

  // Insert in batches of 50
  let inserted = 0;
  const errors: string[] = [];
  for (let i = 0; i < plants.length; i += 50) {
    const batch = plants.slice(i, i + 50);
    const { error } = await supabase.from("plants").insert(batch);
    if (error) {
      errors.push(`Batch ${i}: ${error.message}`);
    } else {
      inserted += batch.length;
    }
  }

  return new Response(
    JSON.stringify({ total: plants.length, inserted, errors }),
    { headers: { "Content-Type": "application/json" } }
  );
});
