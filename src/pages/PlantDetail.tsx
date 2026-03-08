import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Leaf, Sun, Droplets, Ruler, TreePine, Flower2, Bug, Wrench, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Skeleton } from "@/components/ui/skeleton";
import { usePlant } from "@/hooks/usePlant";

const PlantDetail = () => {
  const { id } = useParams();
  const plantId = id ? parseInt(id, 10) : undefined;
  const { data: plant, isLoading, error } = usePlant(plantId);

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
        fallbackTitle={
          plant
            ? `${plant.common_name} | Plant Guide — Elevation Landscapes`
            : "Plant Guide — Elevation Landscapes"
        }
        fallbackDescription={
          plant
            ? `${plant.common_name} (${plant.botanical_name}) — ${plant.special_features}. Perfect for Upstate SC landscapes.`
            : "Plant details for Upstate SC landscapes."
        }
        path={`/plant-guide/${plantId}`}
        jsonLd={jsonLd}
      />
      <Navbar />

      <div className="bg-navy pt-28 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/plant-guide"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors text-sm uppercase tracking-wider"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Directory
          </Link>
        </div>
      </div>

      {isLoading ? (
        <section className="bg-navy pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Skeleton className="aspect-[4/3] rounded-lg" />
              <div className="space-y-4">
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </div>
        </section>
      ) : error || !plant ? (
        <section className="bg-navy pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <p className="text-destructive text-lg">Plant not found.</p>
            <Link to="/plant-guide" className="text-gold mt-4 inline-block hover:underline">
              Return to directory
            </Link>
          </div>
        </section>
      ) : (
        <>
          {/* Hero */}
          <section className="bg-navy pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-card border border-gold/10">
                  {plant.photo_url ? (
                    <img
                      src={plant.photo_url}
                      alt={plant.common_name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Leaf className="h-16 w-16 text-gold/20" />
                    </div>
                  )}
                </div>
                <div className="py-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {plant.guide_category && (
                      <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded uppercase tracking-wider">
                        {plant.guide_category}
                      </span>
                    )}
                    {plant.sc_native && (
                      <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded uppercase tracking-wider">
                        SC Native
                      </span>
                    )}
                  </div>
                  <h1 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-2">
                    {plant.common_name}
                  </h1>
                  {plant.botanical_name && (
                    <p className="text-secondary-foreground/50 text-lg italic mb-6">
                      {plant.botanical_name}
                    </p>
                  )}
                  {plant.special_features && (
                    <p className="text-secondary-foreground/70 leading-relaxed">
                      {plant.special_features}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Details Grid */}
          <section className="bg-background py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-2xl text-secondary-foreground mb-8">
                Plant <span className="text-gold">Details</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <DetailCard icon={<TreePine />} label="Plant Type" value={plant.plant_type} />
                <DetailCard icon={<Ruler />} label="Mature Size" value={plant.mature_size} />
                <DetailCard icon={<Sun />} label="Sun Requirements" value={plant.sun_requirements} />
                <DetailCard icon={<Droplets />} label="Water Needs" value={plant.water_needs} />
                <DetailCard icon={<MapPin />} label="Soil Preferences" value={plant.soil_preferences} />
                <DetailCard icon={<Flower2 />} label="Bloom Time & Color" value={plant.bloom_time_color} />
                <DetailCard icon={<Leaf />} label="Fall Color" value={plant.fall_color} />
                <DetailCard icon={<Bug />} label="Wildlife Value" value={plant.wildlife_value} />
                <DetailCard icon={<TreePine />} label="Landscape Use" value={plant.landscape_use} />
                <DetailCard icon={<Wrench />} label="Maintenance Level" value={plant.maintenance_level} />
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-navy py-16">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="font-serif text-3xl text-secondary-foreground mb-4">
                Want {plant.common_name} in your <span className="text-gold">landscape</span>?
              </h2>
              <p className="text-secondary-foreground/60 mb-8">
                Our design team can incorporate this plant into a custom plan for your property.
              </p>
              <Link
                to="/contact"
                className="inline-block border border-gold text-gold px-8 py-3 rounded hover:bg-gold hover:text-navy transition-all uppercase text-sm tracking-wider font-sans"
              >
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

function DetailCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | null;
}) {
  if (!value) return null;
  return (
    <div className="bg-card border border-gold/10 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2 text-gold">
        <span className="[&_svg]:h-4 [&_svg]:w-4">{icon}</span>
        <span className="text-xs uppercase tracking-wider font-sans">{label}</span>
      </div>
      <p className="text-secondary-foreground/80 text-sm">{value}</p>
    </div>
  );
}

export default PlantDetail;
