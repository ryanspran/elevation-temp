import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import aaronBadge from "@/assets/aaron-approved-badge.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Skeleton } from "@/components/ui/skeleton";
import { usePlantBySlug } from "@/hooks/usePlant";
import { usePlants } from "@/hooks/usePlants";
import { useState } from "react";
import { toast } from "sonner";

const PlantDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const { data: plant, isLoading, error } = usePlantBySlug(slug);
  const { data: allPlants } = usePlants();

  const sortedPlants = allPlants ?? [];
  const currentIndex = sortedPlants.findIndex((p) => p.slug === slug);
  const prevPlant = currentIndex > 0 ? sortedPlants[currentIndex - 1] : null;
  const nextPlant = currentIndex >= 0 && currentIndex < sortedPlants.length - 1 ? sortedPlants[currentIndex + 1] : null;

  const backUrl = `/plant-guide${location.search}`;

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: plant ? `${plant.common_name} | Plant Guide` : "Plant Guide",
          text: plant?.botanical_name ? `Check out ${plant.common_name} (${plant.botanical_name})` : undefined,
          url,
        });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = url;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand("copy");
        document.body.removeChild(textarea);

        if (!copied) {
          window.prompt("Copy this link:", url);
          return;
        }
      }
      toast.success("Link copied to clipboard");
    } catch {
      window.prompt("Copy this link:", url);
    }
  };

  // SEO
  const seoTitle = plant
    ? `${plant.common_name} — Growing Guide for Upstate SC | Elevation Landscapes`
    : "Plant Guide — Elevation Landscapes";

  const seoDescription = plant
    ? `${plant.common_name}${plant.botanical_name ? ` (${plant.botanical_name})` : ""}: ${plant.sun_requirements || "Various sun"}, ${plant.water_needs || "Moderate"} water, ${plant.mature_size || "Various sizes"}. Expert guide for Upstate SC Zones 7b-8a. View growing conditions, landscape uses, and seasonal interest.`
    : "Plant details for Upstate SC landscapes.";

  const jsonLd = plant
    ? [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: plant.common_name,
          description: `${plant.common_name}${plant.botanical_name ? ` (${plant.botanical_name})` : ""}. ${plant.special_features || ""} ${plant.landscape_use ? `Landscape use: ${plant.landscape_use}.` : ""}`.trim(),
          url: `https://elevationlandscapes.com/plants/${plant.slug}`,
          image: plant.photo_url || undefined,
          publisher: {
            "@type": "LocalBusiness",
            name: "Elevation Landscapes",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Greenville",
              addressRegion: "SC",
            },
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://elevationlandscapes.com/" },
            { "@type": "ListItem", position: 2, name: "Plant Directory", item: "https://elevationlandscapes.com/plant-guide" },
            { "@type": "ListItem", position: 3, name: plant.common_name, item: `https://elevationlandscapes.com/plants/${plant.slug}` },
          ],
        },
      ]
    : undefined;

  const ogImageUrl = plant
    ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-plant-og?id=${plant.id}`
    : undefined;

  return (
    <>
      <SEOHead
        page={`plant-${slug}`}
        fallbackTitle={seoTitle}
        fallbackDescription={seoDescription}
        path={`/plants/${slug}`}
        jsonLd={jsonLd}
        ogImageOverride={ogImageUrl}
      />
      <Navbar />

      <div className="bg-navy pt-28 pb-4 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={backUrl} className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors text-sm uppercase tracking-wider font-sans">
            <ArrowLeft className="h-4 w-4" />
            Back to Directory
          </Link>
        </div>
      </div>

      {isLoading ? <LoadingSkeleton /> : error || !plant ? <NotFoundState backUrl={backUrl} /> : (
        <>
          {/* Hero: side-by-side */}
          <section className="bg-navy pb-10 pt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <PlantPhoto plant={plant} />

                <div className="flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {plant.plant_type && (
                      <span className="text-xs text-gold uppercase tracking-[0.15em] font-sans">{plant.plant_type}</span>
                    )}
                    {plant.guide_categories?.filter((c) => {
                      const catLower = c.toLowerCase().replace(/s$/, '');
                      const typeLower = (plant.plant_type || '').toLowerCase().replace(/s$/, '');
                      return catLower !== typeLower;
                    }).map((cat, index) => (
                      <span key={cat} className="flex items-center gap-2">
                        <span className="text-gold/30">·</span>
                        <span className="text-xs text-gold uppercase tracking-[0.15em] font-sans">{cat}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 mb-2">
                    <h1 className="font-serif text-4xl md:text-5xl text-secondary-foreground">{plant.common_name}</h1>
                    {plant.aaron_approved && (
                      <img src={aaronBadge} alt="Aaron Approved" className="h-20 md:h-24 w-auto object-contain shrink-0" />
                    )}
                  </div>
                  {plant.botanical_name && (
                    <p className="text-secondary-foreground/50 text-lg italic mb-5 font-sans">{plant.botanical_name}</p>
                  )}

                  <div className="border-t border-gold/10 pt-5 mb-5" />

                  <div className="flex flex-wrap gap-2 items-center">
                    {plant.sc_native && (
                      <span className="text-xs bg-gold text-primary-foreground px-3 py-1 rounded font-sans font-medium uppercase tracking-wider">SC Native</span>
                    )}
                    {plant.maintenance_level && (
                      <span className="text-xs border border-gold/40 text-gold px-3 py-1 rounded font-sans uppercase tracking-wider">{plant.maintenance_level} Maintenance</span>
                    )}
                    <button
                      onClick={handleShare}
                      className="print:hidden inline-flex items-center gap-1.5 text-xs border border-gold/40 text-gold px-3 py-1 rounded font-sans uppercase tracking-wider hover:bg-gold hover:text-primary-foreground transition-all ml-auto"
                    >
                      <Share2 className="h-3.5 w-3.5" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detail Sections */}
          <section className="bg-navy py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-6">
                <DetailSection title="🌱 Growing Conditions">
                  <DetailRow label="Sun Requirements" value={plant.sun_requirements} />
                  <DetailRow label="Water Needs" value={plant.water_needs} />
                  <DetailRow label="Soil Preferences" value={plant.soil_preferences} />
                  <DetailRow label="Mature Size" value={plant.mature_size} />
                </DetailSection>

                <DetailSection title="🍂 Seasonal Interest">
                  <DetailRow label="Bloom Time & Color" value={plant.bloom_time_color} />
                  <DetailRow label="Fall Color" value={plant.fall_color} />
                  <DetailRow label="Wildlife Value" value={plant.wildlife_value} />
                </DetailSection>

                <div className="md:col-span-2">
                  <DetailSection title="🏡 Landscape Notes">
                    <DetailRow label="Landscape Use" value={plant.landscape_use} />
                    {plant.special_features && (
                      <div className="pt-3">
                        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 font-sans">Special Features</p>
                        <p className="text-secondary-foreground/90 leading-relaxed font-sans">{plant.special_features}</p>
                      </div>
                    )}
                  </DetailSection>
                </div>
              </div>
            </div>
          </section>

          {/* Prev / Next */}
          <section className="bg-navy py-8 border-t border-gold/10 print:hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              {prevPlant ? (
                <Link to={`/plants/${prevPlant.slug}${location.search}`} className="inline-flex items-center gap-2 border border-gold/40 text-gold px-5 py-2.5 rounded hover:bg-gold hover:text-primary-foreground transition-all text-sm uppercase tracking-wider font-sans">
                  <ChevronLeft className="h-4 w-4" />
                  {prevPlant.common_name}
                </Link>
              ) : <div />}
              {nextPlant ? (
                <Link to={`/plants/${nextPlant.slug}${location.search}`} className="inline-flex items-center gap-2 border border-gold/40 text-gold px-5 py-2.5 rounded hover:bg-gold hover:text-primary-foreground transition-all text-sm uppercase tracking-wider font-sans">
                  {nextPlant.common_name}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ) : <div />}
            </div>
          </section>

          {/* CTA Bar */}
          <section className="bg-[#242938] border-t border-gold/20 py-10 print:hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-secondary-foreground font-serif text-xl md:text-2xl">
                  Love this plant for your property? <span className="text-gold">Let us design with it.</span>
                </p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 bg-gold text-primary-foreground px-8 py-3 rounded font-sans text-sm font-semibold uppercase tracking-wider hover:bg-gold/90 transition-colors"
              >
                Get a Consultation
              </Link>
            </div>
          </section>
        </>
      )}

      <Footer />
    </>
  );
};

/* ---- Sub-components ---- */

function PlantPhoto({ plant }: { plant: { common_name: string; photo_url: string | null } }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const letter = plant.common_name.charAt(0).toUpperCase();

  if (!plant.photo_url || imgError) {
    return (
      <div className="w-full aspect-[4/5] rounded-lg bg-gradient-to-br from-card-dark to-navy flex items-center justify-center">
        <span className="text-8xl font-serif text-gold/30">{letter}</span>
      </div>
    );
  }

  return (
    <div className="w-full aspect-[4/5] relative overflow-hidden rounded-lg bg-card-dark">
      {!imgLoaded && <div className="absolute inset-0 shimmer-bg animate-shimmer rounded-lg" />}
      <img
        src={plant.photo_url}
        alt={plant.common_name}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgError(true)}
      />
    </div>
  );
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card-dark rounded-lg p-6">
      <h3 className="text-gold font-serif text-xl mb-5">{title}</h3>
      <div className="space-y-0">{children}</div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;
  return (
    <div className="flex justify-between items-baseline py-3 border-b border-gold/10 last:border-0">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-sans">{label}</span>
      <span className="text-secondary-foreground text-sm font-sans text-right ml-4">{value}</span>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <section className="bg-navy pb-16 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Skeleton className="w-full aspect-[4/5] rounded-lg" />
          <div className="space-y-4 pt-4">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-px w-full mt-4" />
            <div className="flex gap-2 mt-4">
              <Skeleton className="h-7 w-24 rounded" />
              <Skeleton className="h-7 w-36 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NotFoundState({ backUrl }: { backUrl: string }) {
  return (
    <section className="bg-navy pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <p className="text-destructive text-lg">Plant not found.</p>
        <Link to={backUrl} className="text-gold mt-4 inline-block hover:underline font-sans">Return to directory</Link>
      </div>
    </section>
  );
}

export default PlantDetail;
