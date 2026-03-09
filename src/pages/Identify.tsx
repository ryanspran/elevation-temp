import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Loader2, AlertCircle, CheckCircle, ArrowRight, RefreshCw, Share, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePlants } from "@/hooks/usePlants";
import PlantCard from "@/components/PlantCard";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Plant } from "@/hooks/usePlants";

interface PlantIdentification {
  confidence: number;
  commonName: string;
  botanicalName: string;
  description: string;
  identificationNotes: string;
}

interface IdentifyResponse {
  identifications: PlantIdentification[];
  error?: string;
}

interface HistoryEntry {
  image: string;
  identifications: PlantIdentification[];
  matchedPlant: Plant | null;
  timestamp: number;
}

const Identify = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [identifications, setIdentifications] = useState<PlantIdentification[]>([]);
  const [matchedPlant, setMatchedPlant] = useState<Plant | null>(null);
  const [tipsExpanded, setTipsExpanded] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [expandedHistoryIndex, setExpandedHistoryIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const { data: plants } = usePlants();

  // Redirect desktop users to plant guide
  useEffect(() => {
    if (isMobile === false) { // Only redirect when explicitly false (not undefined)
      toast({
        title: "Mobile Feature",
        description: "Plant identification is available on mobile devices — try it on your phone!",
        variant: "default",
      });
      navigate("/plant-guide");
    }
  }, [isMobile, navigate, toast]);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setSelectedImage(result);
      // Auto-identify after image selection
      identifyPlant(result);
    };
    reader.readAsDataURL(file);
  };

  const identifyPlant = async (imageData: string) => {
    setIsLoading(true);
    setIdentifications([]);
    setMatchedPlant(null);

    try {
      // Extract base64 data (remove data:image/...;base64, prefix)
      const base64Data = imageData.split(',')[1];

      const response = await fetch('/supabase/functions/v1/identify-plant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: base64Data }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const result: IdentifyResponse = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }

      setIdentifications(result.identifications || []);

      // Try to find matching plant in our database
      if (result.identifications && result.identifications.length > 0 && plants) {
        const match = findPlantMatch(result.identifications, plants);
        setMatchedPlant(match);
      }

      // Add to history
      if (result.identifications && result.identifications.length > 0) {
        const historyEntry: HistoryEntry = {
          image: imageData,
          identifications: result.identifications,
          matchedPlant: plants ? findPlantMatch(result.identifications, plants) : null,
          timestamp: Date.now()
        };
        
        setHistory(prev => [historyEntry, ...prev.slice(0, 2)]);
      }

    } catch (error) {
      console.error('Plant identification error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      
      if (errorMessage.includes('temporarily unavailable')) {
        toast({
          title: "Service Busy",
          description: "Our plant identification service is experiencing high demand. Please try again in a few minutes.",
          variant: "destructive",
        });
      } else if (errorMessage.includes('quota exceeded')) {
        toast({
          title: "Service Limit Reached",
          description: "We've reached our daily identification limit. Please try again tomorrow.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Identification Failed", 
          description: "We couldn't analyze your photo. Please try again with a clear, well-lit image of the plant.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const findPlantMatch = (identifications: PlantIdentification[], plantsList: Plant[]): Plant | null => {
    for (const identification of identifications) {
      const commonLower = identification.commonName.toLowerCase();
      const botanicalLower = identification.botanicalName.toLowerCase();

      const match = plantsList.find((plant) => {
        const plantCommon = plant.common_name.toLowerCase();
        const plantBotanical = (plant.botanical_name || "").toLowerCase();
        
        return (
          plantCommon.includes(commonLower) || 
          commonLower.includes(plantCommon) ||
          (plantBotanical && botanicalLower && (
            plantBotanical.includes(botanicalLower) || 
            botanicalLower.includes(plantBotanical)
          ))
        );
      });

      if (match) return match;
    }
    return null;
  };

  const shareResult = async () => {
    const primaryResult = identifications.find(id => id.confidence >= 85);
    if (!primaryResult) return;

    const baseUrl = window.location.origin;
    const shareUrl = matchedPlant 
      ? `${baseUrl}/plants/${matchedPlant.slug}`
      : `${baseUrl}/identify`;
    
    const shareText = `I just identified a ${primaryResult.commonName}${primaryResult.botanicalName ? ` (${primaryResult.botanicalName})` : ''} using the Elevation Landscapes plant identifier! ${shareUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Plant Identified!',
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        // User cancelled the share or error occurred
        console.log('Share cancelled');
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(shareText);
        toast({
          title: "Copied to clipboard",
          description: "Share text has been copied to your clipboard",
          variant: "default",
        });
      } catch (error) {
        console.error('Failed to copy to clipboard:', error);
        toast({
          title: "Share failed",
          description: "Unable to share or copy to clipboard",
          variant: "destructive",
        });
      }
    }
  };

  const resetIdentification = () => {
    setSelectedImage(null);
    setIdentifications([]);
    setMatchedPlant(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const primaryResult = identifications.find(id => id.confidence >= 85);
  const secondaryResults = identifications.filter(id => id.confidence >= 70 && id.confidence < 85);
  const hasResults = identifications.length > 0;
  const hasHighConfidence = !!primaryResult;

  // Show loading state if mobile status is still being determined
  if (isMobile === undefined) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gold" />
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        page="identify"
        fallbackTitle="AI Plant Identifier — Snap a Photo, Identify Any Plant | Elevation Landscapes" 
        fallbackDescription="Take a photo of any plant, tree, or flower and our AI will identify it instantly. Free mobile plant identification tool from Elevation Landscapes, Greenville SC."
        path="/identify"
      />
      <div className="min-h-screen bg-navy text-secondary-foreground">
        <Navbar />
        
        <div className="pt-20 pb-16">
          {/* Hero Section */}
          <div className="px-4 py-12 text-center">
            <h1 className="font-serif text-4xl font-bold text-white mb-4">
              See a Plant You <span className="text-gold">Love</span>?
            </h1>
            <p className="text-secondary-foreground/80 text-lg mb-2">
              Take a photo and let AI identify it instantly
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              Get expert identification + links to our growing guides
            </p>
              </div>

            {/* Photo Tips Section */}
            {!selectedImage && (
              <div className="mb-6">
                <Collapsible open={tipsExpanded} onOpenChange={setTipsExpanded}>
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-center gap-2 text-secondary-foreground/60 text-sm">
                      <span>Tips for best results</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${tipsExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4 space-y-3 px-2">
                      <div className="flex items-center gap-3 text-secondary-foreground/70 text-sm">
                        <span className="text-lg">🍃</span>
                        <span>Get a clear shot of the leaves</span>
                      </div>
                      <div className="flex items-center gap-3 text-secondary-foreground/70 text-sm">
                        <span className="text-lg">🌸</span>
                        <span>Include flowers or fruit if present</span>
                      </div>
                      <div className="flex items-center gap-3 text-secondary-foreground/70 text-sm">
                        <span className="text-lg">🌳</span>
                        <span>Capture the overall shape</span>
                      </div>
                      <div className="flex items-center gap-3 text-secondary-foreground/70 text-sm">
                        <span className="text-lg">💡</span>
                        <span>Good lighting — avoid heavy shadows</span>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            )}

          <div className="max-w-md mx-auto px-4">
            {/* Upload Area */}
            {!selectedImage && (
              <div className="mb-8">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageSelect}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-card border-2 border-dashed border-gold/30 rounded-lg p-8 hover:border-gold/50 transition-colors min-h-[200px] flex flex-col items-center justify-center gap-4"
                >
                  <Camera className="h-12 w-12 text-gold" />
                  <div className="text-center">
                    <p className="text-white font-medium mb-2">Tap to Take Photo</p>
                    <p className="text-secondary-foreground/60 text-sm">
                      Point your camera at any plant
                    </p>
                  </div>
                </button>
              </div>
            )}

            {/* Selected Image */}
            {selectedImage && (
              <div className="mb-6">
                <div className="relative rounded-lg overflow-hidden border-2 border-gold/20">
                  <img
                    src={selectedImage}
                    alt="Selected plant"
                    className={`w-full h-auto ${isLoading ? 'animate-pulse' : ''}`}
                  />
                  {isLoading && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="text-center">
                        <Loader2 className="h-8 w-8 animate-spin text-gold mx-auto mb-3" />
                        <p className="text-white font-medium">Identifying your plant...</p>
                        <div className="flex justify-center mt-2">
                          <div className="flex space-x-1">
                            {[0, 1, 2].map((i) => (
                              <div
                                key={i}
                                className="w-2 h-2 bg-gold rounded-full animate-bounce"
                                style={{
                                  animationDelay: `${i * 0.3}s`,
                                  animationDuration: '1.4s'
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {!isLoading && (
                  <Button
                    onClick={resetIdentification}
                    variant="outline"
                    size="sm"
                    className="w-full mt-3 border-gold/30 text-gold hover:bg-gold/10"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Try Another Photo
                  </Button>
                )}
              </div>
            )}

            {/* Results */}
            {!isLoading && hasResults && (
              <div className="space-y-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
                {/* Primary Result */}
                {hasHighConfidence && primaryResult && (
                  <div className="bg-card border border-gold/20 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="h-5 w-5 text-gold" />
                      <span className="text-gold font-medium">We found a match!</span>
                    </div>
                    
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">
                      {primaryResult.commonName}
                    </h3>
                    
                    {primaryResult.botanicalName && (
                      <p className="text-secondary-foreground/70 italic mb-3">
                        {primaryResult.botanicalName}
                      </p>
                    )}
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-secondary-foreground/60">Confidence</span>
                        <span className="text-sm text-gold font-medium">{primaryResult.confidence}%</span>
                      </div>
                      <Progress value={primaryResult.confidence} className="h-2" />
                    </div>
                    
                    <p className="text-secondary-foreground/80 text-sm mb-3">
                      {primaryResult.description}
                    </p>
                    
                    {primaryResult.identificationNotes && (
                      <p className="text-secondary-foreground/60 text-xs border-l-2 border-gold/30 pl-3">
                        <strong>ID Notes:</strong> {primaryResult.identificationNotes}
                      </p>
                    )}
                  </div>
                )}

                {/* Database Match Card */}
                {matchedPlant && (
                  <div className="bg-card border-l-4 border-gold rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="h-5 w-5 text-gold" />
                      <span className="text-gold font-medium">This plant is in our Upstate SC Growing Guide!</span>
                    </div>
                    
                    <PlantCard plant={matchedPlant} />
                    
                    <Button 
                      onClick={() => navigate(`/plants/${matchedPlant.slug}`)}
                      className="w-full mt-4 bg-gold text-navy hover:bg-gold/90"
                    >
                      View Full Growing Guide
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                )}

                {/* No Database Match */}
                {!matchedPlant && hasHighConfidence && (
                  <div className="bg-card border border-secondary/20 rounded-lg p-6">
                    <p className="text-secondary-foreground/70 text-sm mb-4">
                      This plant isn't in our South Carolina growing guide yet, but our experts can help you learn more about it.
                    </p>
                    <Button 
                      onClick={() => navigate("/contact")}
                      variant="outline"
                      className="w-full border-gold/30 text-gold hover:bg-gold/10"
                    >
                      Ask Our Experts
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                )}

                {/* Secondary Results */}
                {secondaryResults.length > 0 && (
                  <div className="bg-card border border-secondary/20 rounded-lg p-6">
                    <h4 className="text-white font-medium mb-4">Could also be:</h4>
                    <div className="space-y-4">
                      {secondaryResults.map((result, index) => (
                        <div key={index} className="border-b border-secondary/10 pb-4 last:border-0 last:pb-0">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-white">{result.commonName}</h5>
                            <span className="text-xs text-gold">{result.confidence}%</span>
                          </div>
                          {result.botanicalName && (
                            <p className="text-secondary-foreground/60 italic text-sm mb-2">
                              {result.botanicalName}
                            </p>
                          )}
                          <p className="text-secondary-foreground/70 text-sm">
                            {result.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Low Confidence or No Results */}
            {!isLoading && selectedImage && (!hasResults || (!hasHighConfidence && secondaryResults.length === 0)) && (
              <div className="text-center py-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
                <AlertCircle className="h-12 w-12 text-secondary-foreground/40 mx-auto mb-4" />
                <h3 className="text-white font-medium mb-2">
                  {!hasResults ? "That doesn't look like a plant to us!" : "We weren't able to identify this plant with confidence"}
                </h3>
                <p className="text-secondary-foreground/60 text-sm mb-6">
                  Try taking another photo with better lighting or a clearer view of the leaves and overall plant structure.
                </p>
                <Button 
                  onClick={resetIdentification}
                  className="bg-gold text-navy hover:bg-gold/90"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
              </div>
            )}

            {/* Bottom CTAs */}
            {!isLoading && (
              <div className="mt-12 space-y-4 text-center">
                <p className="text-secondary-foreground/60 text-sm">
                  Want expert help choosing the right plants for your landscape?
                </p>
                
                <div className="space-y-3">
                  <Button 
                    onClick={() => navigate("/contact")}
                    className="w-full bg-gold text-navy hover:bg-gold/90"
                  >
                    Schedule a Consultation
                  </Button>
                  
                  <Button 
                    onClick={() => navigate("/plant-guide")}
                    variant="outline"
                    className="w-full border-gold/30 text-gold hover:bg-gold/10"
                  >
                    Browse Our Full Plant Directory
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Identify;