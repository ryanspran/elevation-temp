import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

interface PortfolioItem {
  id: number;
  title: string;
  serviceSlug: string;
  serviceName: string;
  image: string;
  tall?: boolean;
}

// Build portfolio items from services, varying heights for masonry effect
const portfolioItems: PortfolioItem[] = services.map((s, i) => ({
  id: i + 1,
  title: s.name,
  serviceSlug: s.slug,
  serviceName: s.name,
  image: s.image,
  tall: i % 3 === 0, // every 3rd item is tall for masonry variety
}));

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const serviceFilters = useMemo(() => {
    const unique = Array.from(new Set(services.map((s) => s.name)));
    return unique;
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return portfolioItems;
    return portfolioItems.filter((item) => item.serviceName === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-secondary-foreground/70 max-w-xl mx-auto text-lg">
            Browse our completed projects across every service we offer.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-sans uppercase tracking-wider transition-all ${
                activeFilter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              }`}
            >
              All Projects
            </button>
            {serviceFilters.map((name) => (
              <button
                key={name}
                onClick={() => setActiveFilter(name)}
                className={`px-4 py-2 rounded-full text-sm font-sans uppercase tracking-wider transition-all ${
                  activeFilter === name
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    item.tall ? "h-[500px]" : "h-[320px]"
                  }`}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/70 transition-all duration-300 flex items-end">
                  <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary font-sans uppercase tracking-widest text-xs">
                      {item.serviceName}
                    </span>
                    <h3 className="font-serif text-xl text-secondary-foreground mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="text-center text-muted-foreground py-20 text-lg">
              No projects found for this category.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
