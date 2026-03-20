import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Leaf, TreePine, SlidersHorizontal, X } from "lucide-react";
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

/* ── Seasonal Picks Data ── */
const SEASONAL_LABELS: Record<number, string> = {
  0: "Winter Interest", 1: "Winter Interest",
  2: "Spring Bloomers", 3: "Spring Bloomers", 4: "Spring Bloomers",
  5: "Summer Bloomers", 6: "Summer Bloomers", 7: "Summer Bloomers",
  8: "Fall Favorites", 9: "Fall Favorites",
  10: "Winter Interest", 11: "Winter Interest",
};

const SEASONAL_PLANTS: Record<number, string[]> = {
  0: ["Winter Jasmine", "Lenten Rose", "Witch Hazel", "Camellia"],
  1: ["Winter Jasmine", "Lenten Rose", "Witch Hazel", "Camellia"],
  2: ["Eastern Redbud", "Star Magnolia", "Piedmont Azalea", "Flowering Dogwood", "Serviceberry", "Creeping Phlox"],
  3: ["Carolina Jessamine", "Virginia Sweetspire", "Oakleaf Hydrangea", "Black-Eyed Susan", "Coneflower", "Butterfly Weed"],
  4: ["Carolina Jessamine", "Virginia Sweetspire", "Oakleaf Hydrangea", "Black-Eyed Susan", "Coneflower", "Butterfly Weed"],
  5: ["Crape Myrtle", "Daylily", "Lantana", "Coreopsis", "Blanket Flower", "Joe Pye Weed"],
  6: ["Crape Myrtle", "Daylily", "Lantana", "Coreopsis", "Blanket Flower", "Joe Pye Weed"],
  7: ["Crape Myrtle", "Daylily", "Lantana", "Coreopsis", "Blanket Flower", "Joe Pye Weed"],
  8: ["Aster", "Goldenrod", "Beautyberry", "Muhly Grass", "Switchgrass"],
  9: ["Aster", "Goldenrod", "Beautyberry", "Muhly Grass", "Switchgrass"],
  10: ["Winterberry", "Nandina", "Holly", "Ornamental Cabbage"],
  11: ["Winterberry", "Nandina", "Holly", "Ornamental Cabbage"],
};

function SeasonalPicks({ plants }: { plants: Plant[] }) {
  const month = new Date().getMonth();
  const names = SEASONAL_PLANTS[month] || [];
  const label = SEASONAL_LABELS[month] || "Seasonal Picks";
  const lowerNames = names.map((n) => n.toLowerCase());
  const picks = plants.filter((p) => lowerNames.includes(p.common_name.toLowerCase()));

  const scrollRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0, dragged: false });

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    dragState.current = { isDown: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft, dragged: false };
    el.style.cursor = "grabbing";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    const s = dragState.current;
    if (!s.isDown) return;
    e.preventDefault();
    const el = scrollRef.current!;
    const x = e.pageX - el.offsetLeft;
    const walk = x - s.startX;
    if (Math.abs(walk) > 3) s.dragged = true;
    el.scrollLeft = s.scrollLeft - walk;
  };
  const onMouseUp = () => {
    dragState.current.isDown = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };
  const onLinkClick = (e: React.MouseEvent) => {
    if (dragState.current.dragged) e.preventDefault();
  };

  if (picks.length === 0) return null;

  return (
    <section className="bg-navy py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl text-gold mb-5">{label}</h2>
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          className="seasonal-scroll flex gap-4 overflow-x-auto pb-3 select-none cursor-grab"
        >
          {picks.map((plant) => (
            <Link
              key={plant.id}
              to={`/plants/${plant.slug}`}
              onClick={onLinkClick}
              className="shrink-0 w-48 md:w-56 bg-card-dark rounded-lg overflow-hidden border border-gold/10 hover:border-gold/30 transition-all group"
            >
              <div className="aspect-[4/3] bg-navy overflow-hidden">
                {plant.photo_url ? (
                  <img src={plant.photo_url} alt={plant.common_name} draggable={false} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl font-serif text-gold/20">{plant.common_name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="font-serif text-secondary-foreground text-sm">{plant.common_name}</p>
                {plant.botanical_name && (
                  <p className="text-secondary-foreground/40 text-xs italic font-sans truncate">{plant.botanical_name}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── URL param helpers ── */
function parseList(val: string | null): string[] {
  return val ? val.split(",").filter(Boolean) : [];
}
function serializeList(arr: string[]): string | undefined {
  return arr.length > 0 ? arr.join(",") : undefined;
}

/* ── Active filter count ── */
function countActiveFilters(f: FilterState): number {
  return (f.native ? 1 : 0) + (f.aaron_approved ? 1 : 0) + f.categories.length + f.types.length + f.sun.length + f.water.length + f.maintenance.length;
}

/* ── Active filter pills data ── */
function getActiveFilterPills(f: FilterState): { group: keyof Omit<FilterState, "native" | "aaron_approved"> | "native" | "aaron_approved"; value: string }[] {
  const pills: { group: keyof Omit<FilterState, "native" | "aaron_approved"> | "native" | "aaron_approved"; value: string }[] = [];
  if (f.aaron_approved) pills.push({ group: "aaron_approved", value: "Aaron Approved" });
  if (f.native) pills.push({ group: "native", value: "SC Native" });
  for (const v of f.categories) pills.push({ group: "categories", value: v });
  for (const v of f.types) pills.push({ group: "types", value: v });
  for (const v of f.sun) pills.push({ group: "sun", value: v });
  for (const v of f.water) pills.push({ group: "water", value: v });
  for (const v of f.maintenance) pills.push({ group: "maintenance", value: v });
  return pills;
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
    aaron_approved: searchParams.get("aaron_approved") === "true",
    categories: parseList(searchParams.get("categories")),
    types: parseList(searchParams.get("types")),
    sun: parseList(searchParams.get("sun")),
    water: parseList(searchParams.get("water")),
    maintenance: parseList(searchParams.get("maintenance")),
  }), [searchParams]);

  const searchQuery = searchParams.get("q") || "";
  const sortBy = searchParams.get("sort") || "az";

  // Debounced search
  const [searchInput, setSearchInput] = useState(searchQuery);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchParams((prev) => {
        const p = new URLSearchParams(prev);
        if (searchInput.trim()) p.set("q", searchInput.trim());
        else p.delete("q");
        return p;
      }, { replace: true });
      setVisibleCount(ITEMS_PER_PAGE);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput, setSearchParams]);

  // Sync searchInput when URL changes externally
  useEffect(() => {
    const urlQ = searchParams.get("q") || "";
    setSearchInput((prev) => prev !== urlQ && document.activeElement?.tagName !== "INPUT" ? urlQ : prev);
  }, [searchParams]);

  const updateParams = useCallback((updates: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams);
    for (const [key, val] of Object.entries(updates)) {
      if (val) params.set(key, val);
      else params.delete(key);
    }
    setSearchParams(params, { replace: true });
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchParams, setSearchParams]);

  const setSort = (sort: string) => updateParams({ sort: sort === "az" ? undefined : sort });

  const handleToggle = useCallback((group: keyof Omit<FilterState, "native" | "aaron_approved">, value: string) => {
    const current = filters[group];
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
    updateParams({ [group]: serializeList(next) });
  }, [filters, updateParams]);

  const handleNativeToggle = useCallback((native: boolean) => {
    updateParams({ native: native ? "true" : undefined });
  }, [updateParams]);

  const handleAaronApprovedToggle = useCallback((val: boolean) => {
    updateParams({ aaron_approved: val ? "true" : undefined });
  }, [updateParams]);

  const handleClear = useCallback(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    setSearchParams(params, { replace: true });
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchQuery, setSearchParams]);

  const handleRemovePill = useCallback((group: string, value: string) => {
    if (group === "native") {
      handleNativeToggle(false);
    } else if (group === "aaron_approved") {
      handleAaronApprovedToggle(false);
    } else {
      handleToggle(group as keyof Omit<FilterState, "native" | "aaron_approved">, value);
    }
  }, [handleNativeToggle, handleAaronApprovedToggle, handleToggle]);

  // Filter + sort
  const filtered = useMemo(() => {
    if (!plants) return [];
    let result = plants;

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

    if (filters.native) result = result.filter((p) => p.sc_native);
    if (filters.categories.length)
      result = result.filter((p) => p.guide_categories.some((c) => filters.categories.includes(c)));
    if (filters.types.length)
      result = result.filter((p) => p.plant_type && filters.types.includes(p.plant_type));
    if (filters.sun.length)
      result = result.filter((p) => p.sun_category && filters.sun.includes(p.sun_category));
    if (filters.water.length)
      result = result.filter((p) => p.water_category && filters.water.includes(p.water_category));
    if (filters.maintenance.length)
      result = result.filter((p) => p.maintenance_level && filters.maintenance.includes(p.maintenance_level));

    const sorted = [...result];
    switch (sortBy) {
      case "za": sorted.sort((a, b) => b.common_name.localeCompare(a.common_name)); break;
      case "category": sorted.sort((a, b) => (a.guide_category || "").localeCompare(b.guide_category || "")); break;
      case "native": sorted.sort((a, b) => (b.sc_native ? 1 : 0) - (a.sc_native ? 1 : 0)); break;
      default: sorted.sort((a, b) => a.common_name.localeCompare(b.common_name));
    }
    return sorted;
  }, [plants, searchQuery, filters, sortBy]);

  const visiblePlants = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const activeFilterCount = countActiveFilters(filters);
  const activePills = getActiveFilterPills(filters);

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
        fallbackTitle="Plant & Tree Directory — Over 250 Plants for Upstate SC | Elevation Landscapes"
        fallbackDescription="Browse over 250 trees, shrubs, perennials, and grasses curated for Upstate SC (Zones 7b-8a). Filter by sun, water, native status, and more."
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
            Explore our guide of over 250 plants — shade trees, flowering shrubs,
            perennials, grasses, and more — hand-selected for the Upstate SC
            region.
          </p>
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold/60" />
            <Input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by name, type, or category…"
              aria-label="Search plants"
              className="pl-12 pr-10 h-12 bg-card-dark border-gold/20 text-secondary-foreground placeholder:text-secondary-foreground/40 focus-visible:ring-gold/50"
            />
            {searchInput && (
              <button
                onClick={() => setSearchInput("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-foreground/40 hover:text-gold transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Mobile Plant Identifier CTA - Only visible on mobile */}
          {isMobile && (
            <div className="mt-4 mb-6 text-center">
              <Link
                to="/identify"
                className="text-gold text-base font-sans hover:underline group transition-all duration-200"
              >
                See a plant you love but don't know what it is? Snap a photo and we'll identify it instantly{" "}
                <span className="inline-block group-active:translate-x-0.5 transition-transform duration-200">→</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Seasonal Picks */}
      {!isLoading && !error && <SeasonalPicks plants={plants ?? []} />}

      {/* Main Content */}
      <section className="bg-navy py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-card-dark rounded-lg overflow-hidden border border-gold/10">
                  <div className="aspect-[4/3] shimmer-bg animate-shimmer" />
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
                <div className="mb-6 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-secondary-foreground/50 text-sm font-sans">
                      Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} plants
                      {searchQuery && (
                        <> for "<span className="text-gold">{searchQuery}</span>"</>
                      )}
                    </p>
                    <Select value={sortBy} onValueChange={setSort}>
                      <SelectTrigger aria-label="Sort plants" className="w-[160px] h-9 bg-card-dark border-gold/20 text-secondary-foreground text-xs font-sans">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-card-dark border-gold/20">
                        <SelectItem value="az" className="text-secondary-foreground text-xs focus:bg-navy focus:text-secondary-foreground">A → Z</SelectItem>
                        <SelectItem value="za" className="text-secondary-foreground text-xs focus:bg-navy focus:text-secondary-foreground">Z → A</SelectItem>
                        <SelectItem value="category" className="text-secondary-foreground text-xs focus:bg-navy focus:text-secondary-foreground">Category</SelectItem>
                        <SelectItem value="native" className="text-secondary-foreground text-xs focus:bg-navy focus:text-secondary-foreground">Native First</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Active filter pills */}
                  {activePills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {activePills.map((pill) => (
                        <button
                          key={`${pill.group}-${pill.value}`}
                          onClick={() => handleRemovePill(pill.group, pill.value)}
                          className="inline-flex items-center gap-1 text-xs border border-gold/40 text-gold px-2.5 py-1 rounded-full font-sans hover:bg-gold hover:text-primary-foreground transition-all"
                        >
                          {pill.value}
                          <X className="h-3 w-3" />
                        </button>
                      ))}
                      <button
                        onClick={handleClear}
                        className="text-xs text-secondary-foreground/40 hover:text-gold transition-colors font-sans px-2 py-1"
                      >
                        Clear all
                      </button>
                    </div>
                  )}
                </div>

                {/* Grid */}
                {filtered.length > 0 ? (
                  <>
                    <div
                      role="list"
                      className={`grid gap-4 md:gap-6 grid-cols-2 ${isMobile ? "" : "lg:grid-cols-3 xl:grid-cols-3"}`}
                    >
                      {visiblePlants.map((plant, i) => (
                        <PlantCard key={plant.id} plant={plant} index={i} searchQuery={searchQuery} />
                      ))}
                    </div>

                    {hasMore && (
                      <div className="text-center mt-10">
                        <button
                          onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
                          className="inline-block border border-gold text-gold px-8 py-3 rounded hover:bg-gold hover:text-primary-foreground transition-all uppercase text-sm tracking-wider font-sans focus-gold"
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
            aria-label={`Filters${activeFilterCount > 0 ? `, ${activeFilterCount} active` : ""}`}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-gold text-primary-foreground px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wider"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-1 bg-primary-foreground text-gold text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
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
                  className="w-full bg-gold text-primary-foreground py-3 rounded font-sans text-sm font-semibold uppercase tracking-wider"
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
            Need help <span className="text-gold">choosing</span>?
          </h2>
          <p className="text-secondary-foreground/60 mb-8">
            Our designers can create a custom plant palette for your property.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-gold text-gold px-8 py-3 rounded hover:bg-gold hover:text-primary-foreground transition-all uppercase text-sm tracking-wider font-sans focus-gold"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Plant Data Credits */}
      <div className="bg-navy border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-xs text-secondary-foreground/30 mb-1">
            Plant data compiled from{" "}
            <a
              href="https://hgic.clemson.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              Clemson Cooperative Extension HGIC
            </a>
            ,{" "}
            <a
              href="https://scnps.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              SC Native Plant Society
            </a>
            , &{" "}
            <a
              href="https://www.missouribotanicalgarden.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              Missouri Botanical Garden
            </a>
          </p>
          <p className="text-[11px] text-secondary-foreground/20">Compiled specifically for Upstate SC, Zones 7b–8a</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PlantGuide;
