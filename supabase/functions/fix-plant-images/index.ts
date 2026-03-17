import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, serviceKey);

  const { data: plants, error: fetchErr } = await supabase
    .from("plants")
    .select("id, common_name, botanical_name, photo_url, slug")
    .gte("id", 282)
    .lte("id", 310)
    .order("id");

  if (fetchErr) {
    return new Response(JSON.stringify({ error: fetchErr.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Filter to only plants that still have broken URLs (skip already-fixed ones)
  const toFix = (plants ?? []).filter(
    (p) => !p.photo_url || p.photo_url.includes("wikimedia")
  );

  const results: Array<{ id: number; name: string; status: string; detail?: string; newUrl?: string }> = [];

  for (const plant of toFix) {
    try {
      // Strategy 1: extract filename from broken URL and look it up via API
      const filename = extractWikimediaFilename(plant.photo_url);
      let imageUrl: string | null = null;

      if (filename) {
        imageUrl = await getWikimediaImageUrl(filename);
      }

      // Strategy 2: search by botanical name
      if (!imageUrl && plant.botanical_name) {
        imageUrl = await searchWikimediaImage(plant.botanical_name);
      }

      // Strategy 3: search by common name
      if (!imageUrl) {
        imageUrl = await searchWikimediaImage(plant.common_name);
      }

      if (!imageUrl) {
        results.push({ id: plant.id, name: plant.common_name, status: "not_found" });
        continue;
      }

      // Download and upload
      const storagePath = await downloadAndUpload(supabase, imageUrl, plant.slug);

      const publicUrl = `${supabaseUrl}/storage/v1/object/public/site-assets/${storagePath}`;
      await supabase.from("plants").update({ photo_url: publicUrl }).eq("id", plant.id);
      results.push({ id: plant.id, name: plant.common_name, status: "ok", newUrl: publicUrl });
    } catch (e) {
      results.push({ id: plant.id, name: plant.common_name, status: "error", detail: e.message });
    }
  }

  const ok = results.filter((r) => r.status === "ok").length;

  return new Response(
    JSON.stringify({ total: toFix.length, ok, failed: toFix.length - ok, results }),
    { headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
});

function extractWikimediaFilename(url: string | null): string | null {
  if (!url) return null;
  const match = url.match(/\/commons\/thumb\/[0-9a-f]\/[0-9a-f]{2}\/([^/]+)\/\d+px-/);
  if (match) return decodeURIComponent(match[1]);
  const segments = url.split("/").filter(Boolean);
  for (let i = segments.length - 1; i >= 0; i--) {
    if (/\.(jpg|jpeg|png|gif|svg|webp)/i.test(segments[i]) && !/^\d+px-/.test(segments[i])) {
      return decodeURIComponent(segments[i]);
    }
  }
  return null;
}

async function getWikimediaImageUrl(filename: string): Promise<string | null> {
  const title = `File:${filename}`;
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json`;
  const res = await fetch(apiUrl, { headers: { "User-Agent": "ElevationLandscapes/1.0" } });
  if (!res.ok) return null;
  const data = await res.json();
  const pages = data?.query?.pages;
  if (!pages) return null;
  for (const pageId of Object.keys(pages)) {
    if (pageId === "-1") continue;
    const info = pages[pageId]?.imageinfo?.[0];
    if (info?.thumburl) return info.thumburl;
    if (info?.url) return info.url;
  }
  return null;
}

async function searchWikimediaImage(query: string): Promise<string | null> {
  const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|mime&iiurlwidth=800&format=json`;
  const res = await fetch(searchUrl, { headers: { "User-Agent": "ElevationLandscapes/1.0" } });
  if (!res.ok) return null;
  const data = await res.json();
  const pages = data?.query?.pages;
  if (!pages) return null;
  // Pick first result that is actually an image (not SVG)
  for (const pageId of Object.keys(pages)) {
    const info = pages[pageId]?.imageinfo?.[0];
    if (!info) continue;
    const mime = info.mime || "";
    if (mime.startsWith("image/") && !mime.includes("svg")) {
      return info.thumburl || info.url;
    }
  }
  return null;
}

async function downloadAndUpload(supabase: any, imageUrl: string, slug: string): Promise<string> {
  const imgRes = await fetch(imageUrl, { headers: { "User-Agent": "ElevationLandscapes/1.0" } });
  if (!imgRes.ok) throw new Error(`download failed: ${imgRes.status} ${imgRes.statusText} for ${imageUrl}`);

  const contentType = imgRes.headers.get("content-type") || "image/jpeg";
  const ext = contentType.includes("png") ? "png" : contentType.includes("webp") ? "webp" : "jpg";
  const blob = await imgRes.blob();
  const arrayBuf = await blob.arrayBuffer();
  const bytes = new Uint8Array(arrayBuf);

  if (bytes.length < 1000) throw new Error(`image too small (${bytes.length} bytes), likely error page`);

  const path = `plants/${slug}.${ext}`;

  const { error: uploadErr } = await supabase.storage
    .from("site-assets")
    .upload(path, bytes, { contentType, upsert: true });

  if (uploadErr) throw new Error(`upload: ${uploadErr.message} (size=${bytes.length})`);

  return path;
}
