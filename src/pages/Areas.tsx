import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import SCMap from "@/components/SCMap";
import { cityPages } from "@/data/cityPages";

const Areas = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Areas We Serve" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        page="areas"
        fallbackTitle="Areas We Serve — Upstate South Carolina | Elevation Landscapes"
        fallbackDescription="Elevation Landscapes serves Greenville, Simpsonville, Greer, Travelers Rest, Mauldin, Taylors, and Easley with premium landscaping and hardscaping services."
        path="/areas"
      />
      <Navbar />

      {/* HERO */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-secondary-foreground mb-6">
            Areas We Serve
          </h1>
          <p className="text-gold text-lg md:text-xl font-sans max-w-2xl mx-auto">
            Premium landscaping and hardscaping across Upstate South Carolina's most distinguished communities.
          </p>
        </div>
      </section>

      {/* BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* INTRO + MAP */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-6">
                Serving the Entire Upstate Region
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Elevation Landscapes proudly serves homeowners, builders, and commercial clients across the Upstate South Carolina region. From the bustling streets of downtown Greenville to the mountain-adjacent communities of Travelers Rest, we bring the same precision craftsmanship and luxury design to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each community we serve has its own character, terrain, and landscape challenges. That's why we take a site-specific approach to every property — understanding the local soil conditions, elevation, HOA requirements, and design aesthetic that define each neighborhood. Explore our city-specific pages below to learn how we serve your area.
              </p>
            </div>
            <SCMap />
          </div>
        </div>
      </section>

      {/* CITY GRID */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
            Explore Our Service Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityPages.map((city) => (
              <Link
                key={city.slug}
                to={`/areas/${city.slug}`}
                className="group bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                    {city.city}, {city.state}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {city.indexDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-sans font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gold mb-10 text-lg">
            Schedule a private consultation and discover what's possible for your outdoor space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground font-sans font-semibold px-8 py-4 rounded hover:scale-105 hover:shadow-lg transition-all duration-200 uppercase text-sm tracking-wider"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:864-325-1623"
              className="inline-flex items-center justify-center gap-2 border border-gold text-gold font-sans font-semibold px-8 py-4 rounded hover:bg-gold hover:text-secondary transition-all duration-200 uppercase text-sm tracking-wider"
            >
              <Phone className="h-4 w-4" />
              Call 864-325-1623
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Areas;
