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

  // Get plants with broken wikimedia URLs (IDs 282-310 are the new CSV batch)
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

  const results: Array<{
    id: number;
    name: string;
    status: string;
    newUrl?: string;
  }> = [];

  for (const plant of plants ?? []) {
    try {
      // Extract filename from the broken wikimedia thumbnail URL
      const filename = extractWikimediaFilename(plant.photo_url);
      if (!filename) {
        results.push({ id: plant.id, name: plant.common_name, status: "no_filename" });
        continue;
      }

      // Use Wikimedia API to get the correct thumbnail URL
      const imageUrl = await getWikimediaImageUrl(filename);
      if (!imageUrl) {
        // Fallback: search by botanical name
        const searchUrl = await searchWikimediaImage(
          plant.botanical_name || plant.common_name
        );
        if (!searchUrl) {
          results.push({ id: plant.id, name: plant.common_name, status: "not_found" });
          continue;
        }
        // Download and upload the search result
        const storagePath = await downloadAndUpload(
          supabase,
          searchUrl,
          plant.slug
        );
        if (storagePath) {
          const publicUrl = `${supabaseUrl}/storage/v1/object/public/site-assets/${storagePath}`;
          await supabase
            .from("plants")
            .update({ photo_url: publicUrl })
            .eq("id", plant.id);
          results.push({ id: plant.id, name: plant.common_name, status: "ok_search", newUrl: publicUrl });
        } else {
          results.push({ id: plant.id, name: plant.common_name, status: "upload_failed" });
        }
        continue;
      }

      // Download the image and upload to storage
      const storagePath = await downloadAndUpload(
        supabase,
        imageUrl,
        plant.slug
      );
      if (storagePath) {
        const publicUrl = `${supabaseUrl}/storage/v1/object/public/site-assets/${storagePath}`;
        await supabase
          .from("plants")
          .update({ photo_url: publicUrl })
          .eq("id", plant.id);
        results.push({ id: plant.id, name: plant.common_name, status: "ok", newUrl: publicUrl });
      } else {
        results.push({ id: plant.id, name: plant.common_name, status: "upload_failed" });
      }
    } catch (e) {
      results.push({
        id: plant.id,
        name: plant.common_name,
        status: `error: ${e.message}`,
      });
    }
  }

  const ok = results.filter((r) => r.status.startsWith("ok")).length;
  const failed = results.length - ok;

  return new Response(
    JSON.stringify({ total: results.length, ok, failed, results }),
    { headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
});

/** Extract the original filename from a wikimedia thumb URL */
function extractWikimediaFilename(url: string | null): string | null {
  if (!url) return null;
  // Pattern: /thumb/hash/hash/Filename.jpg/960px-Filename.jpg
  // We want "Filename.jpg"
  const match = url.match(
    /\/commons\/thumb\/[0-9a-f]\/[0-9a-f]{2}\/([^/]+)\/\d+px-/
  );
  if (match) return decodeURIComponent(match[1]);

  // Fallback: try to get the last meaningful segment
  const segments = url.split("/").filter(Boolean);
  for (let i = segments.length - 1; i >= 0; i--) {
    if (/\.(jpg|jpeg|png|gif|svg|webp)/i.test(segments[i]) && !/^\d+px-/.test(segments[i])) {
      return decodeURIComponent(segments[i]);
    }
  }
  return null;
}

/** Use Wikimedia Commons API to get a valid image URL by filename */
async function getWikimediaImageUrl(
  filename: string
): Promise<string | null> {
  const title = `File:${filename}`;
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(
    title
  )}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json`;

  const res = await fetch(apiUrl, {
    headers: { "User-Agent": "ElevationLandscapes/1.0 (plant-image-fix)" },
  });
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

/** Search Wikimedia Commons for an image by plant name */
async function searchWikimediaImage(
  query: string
): Promise<string | null> {
  const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(
    query
  )}&gsrnamespace=6&gsrlimit=3&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json`;

  const res = await fetch(searchUrl, {
    headers: { "User-Agent": "ElevationLandscapes/1.0 (plant-image-fix)" },
  });
  if (!res.ok) return null;

  const data = await res.json();
  const pages = data?.query?.pages;
  if (!pages) return null;

  for (const pageId of Object.keys(pages)) {
    const info = pages[pageId]?.imageinfo?.[0];
    if (info?.thumburl) return info.thumburl;
    if (info?.url) return info.url;
  }
  return null;
}

/** Download an image from URL and upload to site-assets bucket */
async function downloadAndUpload(
  supabase: any,
  imageUrl: string,
  slug: string
): Promise<string | null> {
  try {
    const imgRes = await fetch(imageUrl, {
      headers: { "User-Agent": "ElevationLandscapes/1.0 (plant-image-fix)" },
    });
    if (!imgRes.ok) return null;

    const contentType = imgRes.headers.get("content-type") || "image/jpeg";
    const ext = contentType.includes("png")
      ? "png"
      : contentType.includes("webp")
      ? "webp"
      : "jpg";
    const blob = await imgRes.blob();
    const arrayBuf = await blob.arrayBuffer();
    const bytes = new Uint8Array(arrayBuf);

    const path = `plants/${slug}.${ext}`;

    // Try upload, if it fails try removing first then re-uploading
    let { error: uploadErr } = await supabase.storage
      .from("site-assets")
      .upload(path, bytes, {
        contentType,
        upsert: true,
      });

    if (uploadErr) {
      // Return error detail for debugging
      throw new Error(`upload: ${uploadErr.message} (path=${path}, size=${bytes.length}, type=${contentType})`);
    }

    return path;
  } catch (e) {
    throw e; // propagate to caller for result tracking
  }
}
