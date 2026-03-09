import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

interface PlantIdentification {
  confidence: number;
  commonName: string;
  botanicalName: string;
  description: string;
  identificationNotes: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { image } = await req.json();

    if (!image) {
      return new Response(
        JSON.stringify({ error: 'Image data is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get the Lovable API key from secrets
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
    if (!lovableApiKey) {
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Call Lovable AI Gateway with plant identification prompt
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${lovableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are a plant identification expert specializing in plants that grow in the Southeastern United States, particularly South Carolina. 

Analyze the provided image and identify the plant shown. Return ONLY a JSON array with up to 3 plant identifications, ordered by confidence (highest first). Each identification should have this exact structure:

{
  "confidence": number (0-100),
  "commonName": "string",
  "botanicalName": "string", 
  "description": "string (2-3 sentences describing key identifying features)",
  "identificationNotes": "string (specific features that helped with identification)"
}

Requirements:
- Only return plants you're confident about (minimum 70% confidence)
- Focus on plants commonly found in South Carolina/Southeast US
- If you cannot identify the plant or if it's not a plant, return an empty array
- Return only valid JSON, no markdown or other text
- Be specific about botanical names when possible`
          },
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Please identify this plant:'
              },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/jpeg;base64,${image}`
                }
              }
            ]
          }
        ],
        max_tokens: 1000,
        temperature: 0.3
      })
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI API error:', errorText);
      
      if (aiResponse.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Service temporarily unavailable due to high demand. Please try again in a few minutes.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (aiResponse.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI service quota exceeded. Please try again later.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ error: 'Failed to analyze image' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const aiResult = await aiResponse.json();
    const content = aiResult.choices?.[0]?.message?.content;

    if (!content) {
      return new Response(
        JSON.stringify({ identifications: [] }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    try {
      // Parse the JSON response from AI
      const identifications: PlantIdentification[] = JSON.parse(content);
      
      // Validate the response format
      if (!Array.isArray(identifications)) {
        throw new Error('Invalid response format');
      }

      // Filter and validate identifications
      const validIdentifications = identifications.filter((id) => 
        typeof id.confidence === 'number' && 
        id.confidence >= 70 &&
        typeof id.commonName === 'string' &&
        typeof id.botanicalName === 'string' &&
        typeof id.description === 'string' &&
        typeof id.identificationNotes === 'string'
      );

      return new Response(
        JSON.stringify({ identifications: validIdentifications }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      return new Response(
        JSON.stringify({ identifications: [] }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error) {
    console.error('Error in identify-plant function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});