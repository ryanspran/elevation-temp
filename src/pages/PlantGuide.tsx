import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Leaf, TreePine } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { usePlants, type Plant } from "@/hooks/usePlants";

const PlantGuide = () => {
  const { data: plants, isLoading, error } = usePlants();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const setSearch = (q: string) => {
    const params = new URLSearchParams(searchParams);
    if (q) params.set("q", q);
    else params.delete("q");
    setSearchParams(params, { replace: true });
  };

  const filtered = useMemo(() => {
    if (!plants) return [];
    if (!searchQuery.trim()) return plants;
    const q = searchQuery.toLowerCase();
    return plants.filter(
      (p) =>
        p.common_name.toLowerCase().includes(q) ||
        p.botanical_name?.toLowerCase().includes(q) ||
        p.plant_type?.toLowerCase().includes(q) ||
        p.guide_category?.toLowerCase().includes(q)
    );
  }, [plants, searchQuery]);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Plant & Tree Directory — Elevation Landscapes",
      description:
        "Browse 250+ plants and trees curated for Upstate South Carolina landscapes. USDA Zones 7b-8a.",
      url: "https://elevationlandscapes.com/plant-guide",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://elevationlandscapes.com/" },
        { "@type": "ListItem", position: 2, name: "Plant Guide", item: "https://elevationlandscapes.com/plant-guide" },
      ],
    },
  ];

  return (
    <>
      <SEOHead
        page="plant-guide"
        fallbackTitle="Plant & Tree Directory | Elevation Landscapes — Greenville, SC"
        fallbackDescription="Browse 250+ plants and trees curated for luxury landscapes in Upstate South Carolina. Filter by sun, water, type, and more. USDA Zones 7b-8a."
        path="/plant-guide"
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TreePine className="h-5 w-5 text-gold" />
            <span className="text-gold font-sans text-sm tracking-widest uppercase">
              Curated for Upstate SC — Zones 7b–8a
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-4">
            Plant & Tree{" "}
            <span className="text-gold">Directory</span>
          </h1>
          <p className="text-secondary-foreground/60 max-w-2xl mx-auto mb-8 text-lg">
            Explore our guide of 250 plants — shade trees, flowering shrubs,
            perennials, grasses, and more — hand-selected for the Greenville,
            Spartanburg & Anderson region.
          </p>

          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold/60" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, type, or category…"
              className="pl-12 h-12 bg-card border-gold/20 text-secondary-foreground placeholder:text-secondary-foreground/40 focus-visible:ring-gold/50"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-card rounded-lg overflow-hidden border border-gold/10">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-4 space-y-2">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-destructive text-lg">Failed to load plants. Please try again.</p>
            </div>
          ) : (
            <>
              <p className="text-secondary-foreground/50 text-sm mb-6">
                Showing {filtered.length} of {plants?.length ?? 0} plants
                {searchQuery && (
                  <> for "<span className="text-gold">{searchQuery}</span>"</>
                )}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <Leaf className="h-12 w-12 text-gold/30 mx-auto mb-4" />
                  <p className="text-secondary-foreground/50 text-lg">No plants match your search.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-secondary-foreground mb-4">
            Ready to bring your landscape vision to <span className="text-gold">life</span>?
          </h2>
          <p className="text-secondary-foreground/60 mb-8">
            Our team designs and installs luxury landscapes throughout Upstate South Carolina.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-gold text-gold px-8 py-3 rounded hover:bg-gold hover:text-navy transition-all uppercase text-sm tracking-wider font-sans"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

function PlantCard({ plant }: { plant: Plant }) {
  return (
    <Link
      to={`/plant-guide/${plant.id}`}
      className="group bg-card rounded-lg overflow-hidden border border-gold/10 hover:border-gold/30 transition-all"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        {plant.photo_url ? (
          <img
            src={plant.photo_url}
            alt={plant.common_name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Leaf className="h-12 w-12 text-gold/20" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg text-secondary-foreground group-hover:text-gold transition-colors leading-tight">
          {plant.common_name}
        </h3>
        {plant.botanical_name && (
          <p className="text-secondary-foreground/40 text-sm italic mt-0.5">{plant.botanical_name}</p>
        )}
        <div className="flex flex-wrap gap-2 mt-3">
          {plant.guide_category && (
            <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded">{plant.guide_category}</span>
          )}
          {plant.sc_native && (
            <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded">SC Native</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default PlantGuide;
