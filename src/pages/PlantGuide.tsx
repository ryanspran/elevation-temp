import { useState, useMemo, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Leaf, TreePine, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePlants, type Plant } from "@/hooks/usePlants";
import PlantFilterSidebar, { type FilterState } from "@/components/PlantFilterSidebar";
import PlantCard from "@/components/PlantCard";

const ITEMS_PER_PAGE = 24;

/* ── helpers to read/write URL params ── */
function parseList(val: string | null): string[] {
  return val ? val.split(",").filter(Boolean) : [];
}

function serializeList(arr: string[]): string | undefined {
  return arr.length > 0 ? arr.join(",") : undefined;
}

const PlantGuide = () => {
  const { data: plants, isLoading, error } = usePlants();
  const [searchParams, setSearchParams] = useSearchParams();
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Parse filter state from URL
  const filters: FilterState = useMemo(() => ({
    native: searchParams.get("native") === "true",
    categories: parseList(searchParams.get("categories")),
    types: parseList(searchParams.get("types")),
    sun: parseList(searchParams.get("sun")),
    water: parseList(searchParams.get("water")),
    maintenance: parseList(searchParams.get("maintenance")),
  }), [searchParams]);

  const searchQuery = searchParams.get("q") || "";
  const sortBy = searchParams.get("sort") || "az";

  const updateParams = useCallback((updates: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams);
    for (const [key, val] of Object.entries(updates)) {
      if (val) params.set(key, val);
      else params.delete(key);
    }
    setSearchParams(params, { replace: true });
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchParams, setSearchParams]);

  const setSearch = (q: string) => updateParams({ q: q || undefined });
  const setSort = (sort: string) => updateParams({ sort: sort === "az" ? undefined : sort });

  const handleToggle = useCallback((group: keyof Omit<FilterState, "native">, value: string) => {
    const current = filters[group];
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
    updateParams({ [group]: serializeList(next) });
  }, [filters, updateParams]);

  const handleNativeToggle = useCallback((native: boolean) => {
    updateParams({ native: native ? "true" : undefined });
  }, [updateParams]);

  const handleClear = useCallback(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    setSearchParams(params, { replace: true });
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchQuery, setSearchParams]);

  // Filter + sort
  const filtered = useMemo(() => {
    if (!plants) return [];
    let result = plants;

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) =>
        p.common_name.toLowerCase().includes(q) ||
        p.botanical_name?.toLowerCase().includes(q) ||
        p.special_features?.toLowerCase().includes(q) ||
        p.plant_type?.toLowerCase().includes(q) ||
        p.guide_category?.toLowerCase().includes(q)
      );
    }

    // Native
    if (filters.native) result = result.filter((p) => p.sc_native);

    // Multi-select filters (OR within group)
    if (filters.categories.length)
      result = result.filter((p) => p.guide_category && filters.categories.includes(p.guide_category));
    if (filters.types.length)
      result = result.filter((p) => p.plant_type && filters.types.includes(p.plant_type));
    if (filters.sun.length)
      result = result.filter((p) => p.sun_category && filters.sun.includes(p.sun_category));
    if (filters.water.length)
      result = result.filter((p) => p.water_category && filters.water.includes(p.water_category));
    if (filters.maintenance.length)
      result = result.filter((p) => p.maintenance_level && filters.maintenance.includes(p.maintenance_level));

    // Sort
    const sorted = [...result];
    switch (sortBy) {
      case "za":
        sorted.sort((a, b) => b.common_name.localeCompare(a.common_name));
        break;
      case "category":
        sorted.sort((a, b) => (a.guide_category || "").localeCompare(b.guide_category || ""));
        break;
      case "native":
        sorted.sort((a, b) => (b.sc_native ? 1 : 0) - (a.sc_native ? 1 : 0));
        break;
      default:
        sorted.sort((a, b) => a.common_name.localeCompare(b.common_name));
    }
    return sorted;
  }, [plants, searchQuery, filters, sortBy]);

  const visiblePlants = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Plant & Tree Directory — Elevation Landscapes",
      description: "Browse 250+ plants and trees curated for Upstate South Carolina landscapes. USDA Zones 7b-8a.",
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

  const sidebarContent = (
    <PlantFilterSidebar
      filters={filters}
      onToggle={handleToggle}
      onNativeToggle={handleNativeToggle}
      onClear={handleClear}
    />
  );

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
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold/60" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, type, or category…"
              className="pl-12 h-12 bg-card-dark border-gold/20 text-secondary-foreground placeholder:text-secondary-foreground/40 focus-visible:ring-gold/50"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-navy py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-card-dark rounded-lg overflow-hidden border border-gold/10">
                  <Skeleton className="aspect-[4/3] w-full bg-navy" />
                  <div className="p-4 space-y-2">
                    <Skeleton className="h-3 w-16 bg-navy" />
                    <Skeleton className="h-5 w-3/4 bg-navy" />
                    <Skeleton className="h-4 w-1/2 bg-navy" />
                    <div className="flex gap-1.5 pt-1">
                      <Skeleton className="h-5 w-14 rounded-full bg-navy" />
                      <Skeleton className="h-5 w-14 rounded-full bg-navy" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-destructive text-lg">Failed to load plants. Please try again.</p>
            </div>
          ) : (
            <div className="flex gap-8">
              {/* Desktop Sidebar */}
              {!isMobile && (
                <aside className="w-[260px] shrink-0">
                  <div className="sticky top-24 bg-card-dark rounded-lg border border-gold/10 p-5 max-h-[calc(100vh-7rem)] overflow-y-auto scrollbar-thin">
                    {sidebarContent}
                  </div>
                </aside>
              )}

              {/* Grid Area */}
              <div className="flex-1 min-w-0">
                {/* Results bar */}
                <div className="flex items-center justify-between mb-6 gap-4">
                  <p className="text-secondary-foreground/50 text-sm font-sans">
                    Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} plants
                    {searchQuery && (
                      <> for "<span className="text-gold">{searchQuery}</span>"</>
                    )}
                  </p>
                  <Select value={sortBy} onValueChange={setSort}>
                    <SelectTrigger className="w-[160px] h-9 bg-card-dark border-gold/20 text-secondary-foreground text-xs font-sans">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card-dark border-gold/20">
                      <SelectItem value="az" className="text-secondary-foreground text-xs">A → Z</SelectItem>
                      <SelectItem value="za" className="text-secondary-foreground text-xs">Z → A</SelectItem>
                      <SelectItem value="category" className="text-secondary-foreground text-xs">Category</SelectItem>
                      <SelectItem value="native" className="text-secondary-foreground text-xs">Native First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Grid */}
                {filtered.length > 0 ? (
                  <>
                    <div className={`grid gap-4 md:gap-6 grid-cols-2 ${isMobile ? "" : "lg:grid-cols-3 xl:grid-cols-3"}`}>
                      {visiblePlants.map((plant) => (
                        <PlantCard key={plant.id} plant={plant} />
                      ))}
                    </div>

                    {hasMore && (
                      <div className="text-center mt-10">
                        <button
                          onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
                          className="inline-block border border-gold text-gold px-8 py-3 rounded hover:bg-gold hover:text-navy transition-all uppercase text-sm tracking-wider font-sans"
                        >
                          Load More
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-20">
                    <Leaf className="h-12 w-12 text-gold/30 mx-auto mb-4" />
                    <p className="text-secondary-foreground/50 text-lg font-sans">No plants match your filters.</p>
                    <button onClick={handleClear} className="text-gold text-sm mt-2 hover:underline font-sans">
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mobile Floating Filter Button + Drawer */}
      {isMobile && !isLoading && (
        <>
          <button
            onClick={() => setDrawerOpen(true)}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-gold text-navy px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wider"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerContent className="bg-card-dark border-gold/10 max-h-[85vh]">
              <DrawerHeader>
                <DrawerTitle className="text-gold font-serif">Filters</DrawerTitle>
              </DrawerHeader>
              <div className="px-4 pb-4 overflow-y-auto">
                {sidebarContent}
              </div>
              <DrawerFooter>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-full bg-gold text-navy py-3 rounded font-sans text-sm font-semibold uppercase tracking-wider"
                >
                  Apply Filters
                </button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}

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

export default PlantGuide;
