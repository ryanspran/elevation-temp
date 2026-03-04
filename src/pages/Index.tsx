import { Link } from "react-router-dom";
import { Star, ArrowRight, Shield, TreePine, Users, Gem, Handshake, Award, Phone, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import introBg from "@/assets/intro-bg.jpg";
import SCMap from "@/components/SCMap";
import portfolioBefore from "@/assets/portfolio-before.jpg";
import portfolioAfter from "@/assets/portfolio-after.jpg";
import whyUsPhoto from "@/assets/why-us-photo.jpg";

const Index = () => {
  const whyUsItems = [
    { icon: Gem, title: "Exclusive Luxury Focus", desc: "We serve only residential clients who demand the absolute finest in landscape design and craftsmanship." },
    { icon: TreePine, title: "Deep Upstate SC Expertise", desc: "Decades of experience with Piedmont soils, regional climate, and the nuances that define successful landscapes here." },
    { icon: Users, title: "Principal-Led Management", desc: "Our principals are personally involved in every project — no hand-offs to junior teams or subcontractors." },
    { icon: Shield, title: "Premium Materials & Craftsmanship", desc: "We source the finest materials and employ master craftsmen who take pride in work that endures." },
    { icon: Handshake, title: "Seamless Design Collaboration", desc: "We work with your architects, designers, and engineers to produce a cohesive, unified result." },
    { icon: Award, title: "Reputation Built on Referrals", desc: "Our business grows through the recommendations of satisfied clients — the highest compliment we can receive." },
  ];

  const processSteps = [
    { num: "01", title: "Private Consultation", desc: "We begin with an on-site meeting to understand your vision, evaluate your property, and discuss possibilities." },
    { num: "02", title: "Custom Design", desc: "Our team develops a detailed design tailored to your architecture, lifestyle, and the unique characteristics of your land." },
    { num: "03", title: "Expert Installation", desc: "Our in-house crews execute with precision, managing every detail from materials to timing to final finishing." },
    { num: "04", title: "Lasting Relationship", desc: "Your landscape is a living investment. We provide ongoing guidance and maintenance to ensure it thrives." },
  ];

  const testimonials = [
    { name: "Katherine M.", location: "Thornblade", text: "Elevation Landscapes transformed our property into something we never imagined possible. Their attention to detail is unmatched." },
    { name: "Robert & Lisa T.", location: "Augusta Road", text: "From the initial consultation to the final walkthrough, every interaction reflected professionalism and genuine care for our vision." },
    { name: "James W.", location: "The Cliffs", text: "We've worked with landscape companies before. Elevation is in a different category entirely. The craftsmanship speaks for itself." },
  ];

  const portfolioItems = [
    "Estate Garden Transformation", "Natural Stone Terrace", "Pool & Outdoor Kitchen",
    "Boulder Wall & Plantings", "Custom Water Feature", "Landscape Lighting Design"
  ];

  const serviceAreas = [
    "Greenville", "Travelers Rest", "Greer", "Simpsonville"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-foreground leading-tight mb-6">
              Luxury Landscape Design & Master Craftsmanship in{" "}
              <span className="text-gold">Greenville, SC</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
              Bespoke landscape architecture, precision hardscaping, and premium outdoor living
              for Upstate South Carolina's most discerning homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-block bg-gold text-navy font-sans font-semibold px-8 py-4 rounded hover:bg-gold-light transition-colors uppercase text-sm tracking-wider text-center"
              >
                Schedule a Consultation
              </a>
              <a
                href="#services"
                className="inline-block border-2 border-gold text-gold font-sans font-semibold px-8 py-4 rounded hover:bg-gold/10 transition-colors uppercase text-sm tracking-wider text-center"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative overflow-hidden bg-cream py-20 md:py-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${introBg})` }} />
        <div className="absolute inset-0 bg-cream/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-text-dark mb-8">
            The Standard Your Property Deserves
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          <p className="text-text-dark/70 text-lg leading-relaxed mb-6">
            Elevation Landscapes exists for a singular purpose: to create outdoor environments that reflect the
            same uncompromising quality as the homes they surround. We are not a lawn care company. We are a
            luxury landscape design and hardscape firm serving exclusively residential clients across Greenville
            and Upstate South Carolina.
          </p>
          <p className="text-text-dark/70 text-lg leading-relaxed">
            Our principals are personally involved in every project — from the initial consultation through
            final walkthrough. We bring decades of deep Upstate SC expertise to every decision, from soil
            composition to stone selection to seasonal planting. The result is a landscape that performs as
            beautifully in its tenth year as it does on completion day.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-4">Our Services</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {services.map((service) => (
                <CarouselItem key={service.slug} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block"
                  >
                    <div className="w-full aspect-[4/3] bg-secondary-foreground/5 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-serif text-xl text-secondary-foreground group-hover:text-gold transition-colors mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-secondary-foreground/60 mb-3 line-clamp-2">{service.tagline}</p>
                    <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 h-10 w-10 border-gold/40 bg-navy text-gold hover:bg-gold hover:text-navy" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6 h-10 w-10 border-gold/40 bg-navy text-gold hover:bg-gold hover:text-navy" />
          </Carousel>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-text-dark mb-4">
              Why Greenville's Most Discerning Homeowners Choose Us
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large image on the left */}
            <div className="lg:row-span-2 rounded-xl overflow-hidden">
              <img src={whyUsPhoto} alt="Luxury landscape design" className="w-full h-full object-cover" />
            </div>
            {/* 4 cards in 2x2 grid on the right */}
            {whyUsItems.slice(0, 4).map((item, i) => (
              <div key={i} className="bg-popover rounded-xl p-8 border border-border">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                  <item.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-serif text-lg text-text-dark font-semibold mb-3">{item.title}</h3>
                <p className="text-text-dark/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-4">Our Proven Process</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gold/30" />
            {processSteps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-6 bg-navy relative z-10">
                  <span className="font-serif text-gold text-lg">{step.num}</span>
                </div>
                <h3 className="font-serif text-lg text-gold mb-3">{step.title}</h3>
                <p className="text-secondary-foreground/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-text-dark mb-4">What Our Clients Say</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-popover p-8 rounded-lg shadow-sm border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-text-dark/70 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-serif text-text-dark font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.location}, Greenville</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO — Before & After */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground">
              See the<br />Difference
            </h2>
            <div>
              <p className="text-secondary-foreground/70 text-lg leading-relaxed mb-4">
                From neglected yards to breathtaking outdoor spaces — our expert design and craftsmanship transforms your property into something truly extraordinary.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-1 text-gold hover:text-gold-light transition-colors font-sans text-sm tracking-wider"
              >
                View Full Portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img src={portfolioBefore} alt="Before landscaping" className="w-full h-full object-cover" />
              <span className="absolute bottom-4 left-4 bg-gold text-navy font-sans font-semibold text-sm px-5 py-2 rounded-full">
                Before
              </span>
            </div>
            {/* After */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img src={portfolioAfter} alt="After landscaping" className="w-full h-full object-cover" />
              <span className="absolute top-4 right-4 bg-gold text-navy font-sans font-semibold text-sm px-5 py-2 rounded-full">
                After
              </span>
            </div>
            {/* Center nav arrows */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-gold rounded-full p-2 gap-1 shadow-lg">
              <ChevronLeft className="h-5 w-5 text-navy" />
              <ChevronRight className="h-5 w-5 text-navy" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-text-dark mb-4">
                Areas We Cover
              </h2>
              <p className="text-text-dark/70 text-lg mb-10">
                Elevation Landscapes proudly serves homeowners across Upstate South Carolina, including:
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-10">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-text-dark font-sans text-base">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-dark/60 text-sm leading-relaxed">
                If you have a project in mind and would like to know whether we cover your area, please{" "}
                <a href="#contact" className="text-gold hover:text-gold-light underline transition-colors">
                  contact our team
                </a>{" "}
                who will be happy to assist.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <SCMap />
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="bg-navy py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-4">
                Ready to Elevate Your Landscape?
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-secondary-foreground/70 text-lg leading-relaxed mb-8">
                Schedule a private consultation. Our principals are personally involved in every project.
              </p>
              <a
                href="tel:+18641234567"
                className="flex items-center gap-3 text-gold text-xl font-serif hover:text-gold-light transition-colors"
              >
                <Phone className="h-5 w-5" />
                (864) 123-4567
              </a>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-secondary-foreground/5 border border-secondary-foreground/20 rounded px-4 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-secondary-foreground/5 border border-secondary-foreground/20 rounded px-4 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-secondary-foreground/5 border border-secondary-foreground/20 rounded px-4 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              />
              <select className="w-full bg-secondary-foreground/5 border border-secondary-foreground/20 rounded px-4 py-3 text-secondary-foreground/40 focus:outline-none focus:border-gold transition-colors">
                <option value="">Service Interest</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.name}</option>
                ))}
              </select>
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full bg-secondary-foreground/5 border border-secondary-foreground/20 rounded px-4 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-gold transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gold text-navy font-sans font-semibold px-8 py-4 rounded hover:bg-gold-light transition-colors uppercase text-sm tracking-wider"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
