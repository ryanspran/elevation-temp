import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response("Missing id parameter", { status: 400, headers: corsHeaders });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const filePath = `og/plant-${id}.png`;

    // Check cache first
    const { data: existing } = await supabase.storage
      .from("site-assets")
      .download(filePath);

    if (existing && existing.size > 0) {
      const bytes = new Uint8Array(await existing.arrayBuffer());
      return new Response(bytes, {
        headers: {
          ...corsHeaders,
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=604800",
        },
      });
    }

    // Fetch plant data
    const { data: plant, error: plantError } = await supabase
      .from("plants")
      .select("common_name, botanical_name, photo_url")
      .eq("id", parseInt(id))
      .single();

    if (plantError || !plant) {
      return new Response("Plant not found", { status: 404, headers: corsHeaders });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    // Build prompt — include plant photo if available
    const messages: any[] = [];
    const textPrompt = `Create a social media preview card image (1200x630 pixels, landscape orientation) for a plant called "${plant.common_name}"${plant.botanical_name ? ` (${plant.botanical_name})` : ""}. 

Design requirements:
- Show the plant prominently as the main subject
- Dark navy blue background (#1a1f2e)
- The plant name "${plant.common_name}" in large elegant gold (#c9a96e) serif text
${plant.botanical_name ? `- The botanical name "${plant.botanical_name}" in smaller italic gold text below` : ""}
- "ELEVATION LANDSCAPES" in gold text at the bottom as branding
- Professional, elegant landscape company aesthetic
- Clean composition suitable for social media sharing`;

    if (plant.photo_url) {
      messages.push({
        role: "user",
        content: [
          { type: "text", text: textPrompt + "\n\nUse the provided plant photo as reference for the plant's appearance." },
          { type: "image_url", image_url: { url: plant.photo_url } },
        ],
      });
    } else {
      messages.push({ role: "user", content: textPrompt });
    }

    console.log(`Generating OG image for plant ${id}: ${plant.common_name}`);

    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-pro-image-preview",
        messages,
        modalities: ["image", "text"],
      }),
    });

    if (!aiResponse.ok) {
      const errText = await aiResponse.text();
      console.error("AI error:", aiResponse.status, errText);
      return new Response("Image generation failed", { status: 500, headers: corsHeaders });
    }

    const aiData = await aiResponse.json();
    const imageUrl = aiData.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!imageUrl) {
      console.error("No image in response:", JSON.stringify(aiData).slice(0, 500));
      return new Response("No image generated", { status: 500, headers: corsHeaders });
    }

    // Decode base64
    const base64Data = imageUrl.replace(/^data:image\/\w+;base64,/, "");
    const binaryString = atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Upload to cache
    const { error: uploadError } = await supabase.storage
      .from("site-assets")
      .upload(filePath, bytes, { contentType: "image/png", upsert: true });

    if (uploadError) {
      console.error("Upload error:", uploadError);
    }

    console.log(`OG image generated for plant ${id}`);

    return new Response(bytes, {
      headers: {
        ...corsHeaders,
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=604800",
      },
    });
  } catch (e) {
    console.error("Error:", e);
    return new Response("Internal error", { status: 500, headers: corsHeaders });
  }
});
