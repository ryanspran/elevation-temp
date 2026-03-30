import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

import paverPatio from "@/assets/portfolio/paver-patio-project.jpg";
import stoneWall from "@/assets/portfolio/stone-wall-project.jpg";
import outdoorKitchen from "@/assets/portfolio/outdoor-kitchen-project.jpg";
import stonePathway from "@/assets/portfolio/stone-pathway-project.jpg";
import firePit from "@/assets/portfolio/fire-pit-project.jpg";
import poolDeck from "@/assets/portfolio/pool-deck-project.jpg";

const photos = [
  { src: paverPatio, alt: "Custom paver patio with fire feature by Elevation Landscapes in Greenville SC" },
  { src: stoneWall, alt: "Natural stone retaining wall with landscape lighting in Upstate South Carolina" },
  { src: firePit, alt: "Custom outdoor fire pit area designed by Elevation Landscapes" },
  { src: stonePathway, alt: "Hand-laid natural stone pathway through residential garden in Greenville SC" },
  { src: outdoorKitchen, alt: "Luxury outdoor kitchen installation by Elevation Landscapes Upstate SC" },
  { src: poolDeck, alt: "Pool deck with stone coping and paver surround in Greenville South Carolina" },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        page="portfolio"
        fallbackTitle="Portfolio | Elevation Landscapes Upstate SC"
        fallbackDescription="Explore our luxury landscape design portfolio — paver patios, stone walls, outdoor kitchens, fire pits, and more across Upstate South Carolina."
        path="/portfolio"
      />
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl text-secondary-foreground">
              A Glimpse at Our Work
            </h1>
            <p className="text-muted-foreground mt-1">
              Explore the landscapes and hardscapes we've brought to life.
            </p>
          </div>

          {/* Gallery with Coming Soon overlay */}
          <div className="relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/75 z-10 flex items-center justify-center rounded-lg">
              <div className="max-w-2xl text-center px-6 py-10">
                <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
                  We're a new team with seasoned hands. Our portfolio is being built in real time. Come back soon to see what we've been creating across Upstate, South Carolina.
                </p>
              </div>
            </div>

            {/* Bento Grid (visible but muted) */}
            <div className="pointer-events-none">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-3">
                <div className="md:col-span-3 overflow-hidden rounded-lg">
                  <img src={photos[0].src} alt={photos[0].alt} className="w-full h-[300px] md:h-[560px] object-cover" />
                </div>
                <div className="md:col-span-2 grid grid-rows-2 gap-3">
                  <div className="overflow-hidden rounded-lg">
                    <img src={photos[1].src} alt={photos[1].alt} className="w-full h-[200px] md:h-[272px] object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img src={photos[2].src} alt={photos[2].alt} className="w-full h-[200px] md:h-[272px] object-cover" />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {photos.slice(3, 6).map((p, i) => (
                  <div key={i} className="overflow-hidden rounded-lg">
                    <img src={p.src} alt={p.alt} className="w-full h-[240px] md:h-[280px] object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
