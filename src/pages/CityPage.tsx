import { useParams, Link } from "react-router-dom";
import { Phone, ArrowRight, MapPin, Home, TreePine, Shield, Gem } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { cityPages } from "@/data/cityPages";
import { services } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";
import NotFound from "./NotFound";

const differentiatorIcons = [Shield, Gem, TreePine, Home];

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = cityPages.find((c) => c.slug === citySlug);

  if (!city) return <NotFound />;

  const cityServices = city.serviceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Areas", href: "/areas" },
    { label: `${city.city}, ${city.state}` },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        page={`area-${city.slug}`}
        fallbackTitle={city.metaTitle}
        fallbackDescription={city.metaDescription}
        path={`/areas/${city.slug}`}
      />
      <Navbar />

      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24 md:py-32">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6">
            {city.h1}
          </h1>
          <p className="text-gold text-lg md:text-xl font-sans mb-10 max-w-2xl mx-auto">
            {city.subheadline}
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

      {/* BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* CITY INTRODUCTION */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {city.introParagraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-6 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* SERVICES IN CITY */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground text-center mb-4">
            Services Offered in {city.city}
          </h2>
          <p className="text-gold text-center mb-12 max-w-2xl mx-auto">
            Premium hardscaping and landscaping solutions tailored to {city.city}'s unique properties and terrain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityServices.map((service) =>
              service ? (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-xl text-white mb-1">{service.name}</h3>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-sans group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* WHY CITY HOMEOWNERS CHOOSE US */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
            Why {city.city} Homeowners Choose Elevation Landscapes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {city.differentiators.map((diff, i) => {
              const Icon = differentiatorIcons[i % differentiatorIcons.length];
              return (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">{diff.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED NEIGHBORHOODS */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
            Featured Neighborhoods in {city.city}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We proudly serve homeowners throughout {city.city} and its surrounding communities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.neighborhoods.map((n, i) => (
              <div key={i} className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <h3 className="font-serif text-lg text-foreground">{n.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{n.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-6">
            Ready to Transform Your {city.city} Property?
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

export default CityPage;
