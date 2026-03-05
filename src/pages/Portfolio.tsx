import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

// Use service images for the bento grid
const photos = services.map((s) => ({
  src: s.image,
  alt: s.name,
}));

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-3">
            A Glimpse at <span className="text-primary">Our Work</span>
          </h1>
          <p className="text-secondary-foreground/70 max-w-xl text-lg">
            Explore the landscapes and hardscapes we've brought to life.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Row 1: 1 large + 2 stacked */}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
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

          {/* Row 3: 2 stacked + 1 large (mirror of row 1) */}
          {photos.length > 6 && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-3">
              <div className="md:col-span-2 grid grid-rows-2 gap-3">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={photos[6]?.src}
                    alt={photos[6]?.alt}
                    className="w-full h-[200px] md:h-[272px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={photos[7]?.src}
                    alt={photos[7]?.alt}
                    className="w-full h-[200px] md:h-[272px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="md:col-span-3 overflow-hidden rounded-lg">
                <img
                  src={photos[8]?.src}
                  alt={photos[8]?.alt}
                  className="w-full h-[300px] md:h-[560px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          )}

          {/* Row 4: remaining in 3-col grid */}
          {photos.length > 9 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {photos.slice(9).map((p, i) => (
                <div key={i} className="overflow-hidden rounded-lg">
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-[240px] md:h-[280px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
