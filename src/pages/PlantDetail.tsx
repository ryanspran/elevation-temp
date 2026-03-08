import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Skeleton } from "@/components/ui/skeleton";
import { usePlant } from "@/hooks/usePlant";
import { usePlants } from "@/hooks/usePlants";
import { useState } from "react";

const PlantDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const plantId = id ? parseInt(id, 10) : undefined;
  const { data: plant, isLoading, error } = usePlant(plantId);
  const { data: allPlants } = usePlants();

  const sortedPlants = allPlants ?? [];
  const currentIndex = sortedPlants.findIndex((p) => p.id === plantId);
  const prevPlant = currentIndex > 0 ? sortedPlants[currentIndex - 1] : null;
  const nextPlant = currentIndex >= 0 && currentIndex < sortedPlants.length - 1 ? sortedPlants[currentIndex + 1] : null;

  const backUrl = `/plant-guide${location.search}`;

  const jsonLd = plant
    ? [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          name: `${plant.common_name} — Plant Guide`,
          description: `Learn about ${plant.common_name} (${plant.botanical_name}) for Upstate SC landscapes.`,
          url: `https://elevationlandscapes.com/plant-guide/${plant.id}`,
          image: plant.photo_url || undefined,
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://elevationlandscapes.com/" },
            { "@type": "ListItem", position: 2, name: "Plant Guide", item: "https://elevationlandscapes.com/plant-guide" },
            { "@type": "ListItem", position: 3, name: plant.common_name, item: `https://elevationlandscapes.com/plant-guide/${plant.id}` },
          ],
        },
      ]
    : undefined;

  return (
    <>
      <SEOHead
        page={`plant-${plantId}`}
        fallbackTitle={plant ? `${plant.common_name} | Plant Guide — Elevation Landscapes` : "Plant Guide — Elevation Landscapes"}
        fallbackDescription={plant ? `${plant.common_name} (${plant.botanical_name}) — ${plant.special_features}. Perfect for Upstate SC landscapes.` : "Plant details for Upstate SC landscapes."}
        path={`/plant-guide/${plantId}`}
        jsonLd={jsonLd}
      />
      <Navbar />

      <div className="bg-navy pt-28 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={backUrl} className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors text-sm uppercase tracking-wider font-sans">
            <ArrowLeft className="h-4 w-4" />
            Back to Directory
          </Link>
        </div>
      </div>

      {isLoading ? <LoadingSkeleton /> : error || !plant ? <NotFoundState backUrl={backUrl} /> : (
        <>
          {/* Hero Image */}
          <HeroImage plant={plant} />

          {/* Header */}
          <section className="bg-navy pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap gap-2 mb-3">
                {plant.plant_type && (
                  <span className="text-xs text-gold uppercase tracking-[0.15em] font-sans">{plant.plant_type}</span>
                )}
                {plant.guide_categories?.filter((c) => c !== plant.plant_type).map((cat, i) => (
                  <span key={cat} className="flex items-center gap-2">
                    <span className="text-gold/30">·</span>
                    <span className="text-xs text-gold uppercase tracking-[0.15em] font-sans">{cat}</span>
                  </span>
                ))}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-secondary-foreground mb-2">{plant.common_name}</h1>
              {plant.botanical_name && (
                <p className="text-secondary-foreground/50 text-lg italic mb-5 font-sans">{plant.botanical_name}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {plant.sc_native && (
                  <span className="text-xs bg-gold text-primary-foreground px-3 py-1 rounded font-sans font-medium uppercase tracking-wider">SC Native</span>
                )}
                {plant.maintenance_level && (
                  <span className="text-xs border border-gold/40 text-gold px-3 py-1 rounded font-sans uppercase tracking-wider">{plant.maintenance_level} Maintenance</span>
                )}
              </div>
            </div>
          </section>

          {/* Detail Sections */}
          <section className="bg-navy py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Growing Conditions */}
                <DetailSection title="🌱 Growing Conditions">
                  <DetailRow label="Sun Requirements" value={plant.sun_requirements} />
                  <DetailRow label="Water Needs" value={plant.water_needs} />
                  <DetailRow label="Soil Preferences" value={plant.soil_preferences} />
                  <DetailRow label="Mature Size" value={plant.mature_size} />
                </DetailSection>

                {/* Seasonal Interest */}
                <DetailSection title="🍂 Seasonal Interest">
                  <DetailRow label="Bloom Time & Color" value={plant.bloom_time_color} />
                  <DetailRow label="Fall Color" value={plant.fall_color} />
                  <DetailRow label="Wildlife Value" value={plant.wildlife_value} />
                </DetailSection>

                {/* Landscape Notes — full width */}
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
          <section className="bg-navy py-8 border-t border-gold/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              {prevPlant ? (
                <Link to={`/plant-guide/${prevPlant.id}${location.search}`} className="inline-flex items-center gap-2 border border-gold/40 text-gold px-5 py-2.5 rounded hover:bg-gold hover:text-primary-foreground transition-all text-sm uppercase tracking-wider font-sans">
                  <ChevronLeft className="h-4 w-4" />
                  {prevPlant.common_name}
                </Link>
              ) : <div />}
              {nextPlant ? (
                <Link to={`/plant-guide/${nextPlant.id}${location.search}`} className="inline-flex items-center gap-2 border border-gold/40 text-gold px-5 py-2.5 rounded hover:bg-gold hover:text-primary-foreground transition-all text-sm uppercase tracking-wider font-sans">
                  {nextPlant.common_name}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ) : <div />}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-card-dark py-16">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="font-serif text-3xl text-secondary-foreground mb-4">
                Want {plant.common_name} in your <span className="text-gold">landscape</span>?
              </h2>
              <p className="text-secondary-foreground/60 mb-8 font-sans">Our design team can incorporate this plant into a custom plan for your property.</p>
              <Link to="/contact" className="inline-block border border-gold text-gold px-8 py-3 rounded hover:bg-gold hover:text-primary-foreground transition-all uppercase text-sm tracking-wider font-sans">
                Schedule a Consultation
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

function HeroImage({ plant }: { plant: { common_name: string; photo_url: string | null } }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const letter = plant.common_name.charAt(0).toUpperCase();

  if (!plant.photo_url || imgError) {
    return (
      <div className="w-full h-[340px] bg-gradient-to-br from-card-dark to-navy flex items-center justify-center">
        <span className="text-8xl font-serif text-gold/30">{letter}</span>
      </div>
    );
  }

  return (
    <div className="w-full h-[340px] relative overflow-hidden bg-card-dark">
      {!imgLoaded && <div className="absolute inset-0 shimmer-bg animate-shimmer" />}
      <img
        src={plant.photo_url}
        alt={plant.common_name}
        className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
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
    <section className="bg-navy pb-16">
      <Skeleton className="w-full h-[340px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-4">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Skeleton className="h-64 rounded-lg" />
          <Skeleton className="h-64 rounded-lg" />
          <Skeleton className="h-40 rounded-lg md:col-span-2" />
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
