import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

// Use first 6 service images for the bento grid
const photos = services.slice(0, 6).map((s) => ({
  src: s.image,
  alt: s.name,
}));

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-secondary-foreground">
                A Glimpse at Our Work
              </h1>
              <p className="text-muted-foreground mt-1">
                Explore the landscapes and hardscapes we've brought to life.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="hidden sm:flex items-center gap-1 text-sm text-foreground underline underline-offset-4 hover:text-primary transition-colors font-sans"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Bento Grid — exact reference layout */}
          {/* Row 1: 1 large (60%) + 2 stacked (40%) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-3">
            <div className="md:col-span-3 overflow-hidden rounded-lg">
              <img
                src={photos[0]?.src}
                alt={photos[0]?.alt}
                className="w-full h-[300px] md:h-[560px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-2 grid grid-rows-2 gap-3">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={photos[1]?.src}
                  alt={photos[1]?.alt}
                  className="w-full h-[200px] md:h-[272px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={photos[2]?.src}
                  alt={photos[2]?.alt}
                  className="w-full h-[200px] md:h-[272px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Row 2: 3 equal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {photos.slice(3, 6).map((p, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-[240px] md:h-[280px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Mobile gallery link */}
          <div className="sm:hidden mt-6 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1 text-sm text-foreground underline underline-offset-4 hover:text-primary transition-colors font-sans"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
