import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Shield, TreePine, Users, Gem, Handshake, Award, Phone, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import introBg from "@/assets/intro-bg.jpg";
import introPhoto from "@/assets/intro-photo.jpg";
import SCMap from "@/components/SCMap";
import portfolioBefore from "@/assets/portfolio-before.jpg";
import portfolioAfter from "@/assets/portfolio-after.jpg";
import whyUsPhoto from "@/assets/why-us-photo.jpg";
import processPhoto from "@/assets/process-photo.jpg";
import landscapePhoto from "@/assets/landscape-photo.jpg";
import testimonialsBg from "@/assets/testimonials-bg.jpg";


const Index = () => {
  const [testimonialApi, setTestimonialApi] = useState<CarouselApi>();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    if (!testimonialApi) return;
    const onSelect = () => setActiveTestimonial(testimonialApi.selectedScrollSnap());
    testimonialApi.on("select", onSelect);
    onSelect();
    return () => { testimonialApi.off("select", onSelect); };
  }, [testimonialApi]);
  const whyUsItems = [
    { icon: Gem, title: "Exclusive Luxury Focus", desc: "We serve only residential clients who demand the absolute finest in landscape design and craftsmanship." },
    { icon: TreePine, title: "Deep Upstate SC Expertise", desc: "Decades of experience with Piedmont soils, regional climate, and the nuances that define successful landscapes here." },
    { icon: Users, title: "Principal-Led Management", desc: "Our principals are personally involved in every project — no hand-offs to junior teams or subcontractors." },
    { icon: Shield, title: "Premium Materials & Craftsmanship", desc: "We source the finest materials and employ master craftsmen who take pride in work that endures." },
    { icon: Handshake, title: "Seamless Design Collaboration", desc: "We work with your architects, designers, and engineers to produce a cohesive, unified result." },
    { icon: Award, title: "Reputation Built on Referrals", desc: "Our business grows through the recommendations of satisfied clients — the highest compliment we can receive." },
  ];

  const processSteps = [
    { icon: Phone, title: "Private Consultation", desc: "We begin with an on-site meeting to understand your vision, evaluate your property, and discuss possibilities." },
    { icon: Gem, title: "Custom Design", desc: "Our team develops a detailed design tailored to your architecture, lifestyle, and the unique characteristics of your land." },
    { icon: Shield, title: "Expert Installation", desc: "Our in-house crews execute with precision, managing every detail from materials to timing to final finishing." },
    { icon: Handshake, title: "Lasting Relationship", desc: "Your landscape is a living investment. We provide ongoing guidance and maintenance to ensure it thrives." },
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
    "Greenville", "Travelers Rest", "Greer", "Simpsonville",
    "Mauldin", "Easley", "Taylors", "Spartanburg", "Anderson", "Fountain Inn"
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
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
              <Link
                to="/contact"
                className="inline-block bg-gold text-navy font-sans font-semibold px-8 py-4 rounded hover:bg-gold-light transition-colors uppercase text-sm tracking-wider text-center"
              >
                Schedule a Consultation
              </Link>
              <a
                href="tel:+18641234567"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold font-sans font-semibold px-8 py-4 rounded hover:bg-gold/10 transition-colors uppercase text-sm tracking-wider text-center"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <p className="text-gold font-sans text-sm tracking-wider uppercase mb-4">Greenville's Premier Landscape Firm</p>
              <h2 className="font-serif text-3xl md:text-4xl text-text-dark leading-tight mb-8">
                The Standard Your Property Deserves
              </h2>
              <p className="text-text-dark/70 text-lg leading-relaxed mb-6">
                Elevation Landscapes exists for a singular purpose: to create outdoor environments that reflect the
                same uncompromising quality as the homes they surround. We are not a lawn care company. We are a
                luxury landscape design and hardscape firm serving exclusively residential clients across Greenville
                and Upstate South Carolina.
              </p>
              <p className="text-text-dark/70 text-lg leading-relaxed mb-8">
                Our principals are personally involved in every project — from the initial consultation through
                final walkthrough. The result is a landscape that performs as beautifully in its tenth year as it does on completion day.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gold text-navy font-sans font-semibold px-8 py-4 rounded hover:bg-gold-light transition-colors uppercase text-sm tracking-wider"
              >
                Schedule a Consultation
              </Link>
            </div>
            {/* Right — Photo with overlapping quote */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <img src={introPhoto} alt="Expert landscape craftsman at work" className="w-full h-auto object-cover" />
              </div>
              {/* Overlapping quote card */}
              <div className="relative lg:absolute lg:-bottom-8 lg:-left-12 bg-popover border border-border rounded-xl p-6 shadow-lg mt-6 lg:mt-0 max-w-sm">
                <span className="font-serif text-gold text-4xl leading-none block mb-2">"</span>
                <p className="text-text-dark/80 italic text-sm leading-relaxed mb-3">
                  We take the time to understand each property's unique character and our clients' vision to ensure the finished landscape exceeds every expectation.
                </p>
                <p className="text-text-dark font-sans text-xs tracking-wider uppercase font-semibold">— Principal, Elevation Landscapes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-4">Our Services</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <Carousel opts={{ align: "start", loop: true, dragFree: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {services.map((service) => (
                <CarouselItem key={service.slug} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block"
                  >
                    <div className="w-full aspect-[3/4] bg-secondary-foreground/5 rounded-lg mb-4 overflow-hidden">
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
            <CarouselPrevious className="-left-2 md:-left-4 lg:-left-6 h-10 w-10 border-gold/40 bg-navy text-gold hover:bg-gold hover:text-navy" />
            <CarouselNext className="-right-2 md:-right-4 lg:-right-6 h-10 w-10 border-gold/40 bg-navy text-gold hover:bg-gold hover:text-navy" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Process steps */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-4">Our Proven Process</h2>
              <div className="w-16 h-0.5 bg-gold mb-12" />
              <div className="space-y-8">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center flex-shrink-0 bg-navy">
                      <step.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-gold mb-2">{step.title}</h3>
                      <p className="text-secondary-foreground/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — Photo with overlapping quote */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <img src={processPhoto} alt="Landscape design consultation" className="w-full h-auto object-cover" />
              </div>
              <div className="relative lg:absolute lg:-bottom-8 lg:-left-12 bg-popover border border-border rounded-xl p-6 shadow-lg mt-6 lg:mt-0 max-w-sm">
                <span className="font-serif text-gold text-4xl leading-none block mb-2">"</span>
                <p className="text-text-dark/80 italic text-sm leading-relaxed mb-3">
                  Every great landscape begins with listening. We don't impose a style — we reveal what your property is meant to become.
                </p>
                <p className="text-text-dark font-sans text-xs tracking-wider uppercase font-semibold">— Principal, Elevation Landscapes</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* TESTIMONIALS */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img src={testimonialsBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">Client Reviews</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">What Our Clients Say</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>

          <Carousel opts={{ align: "center", loop: true }} setApi={setTestimonialApi} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 basis-[85%] md:basis-[60%] lg:basis-[40%]">
                  <div className={`backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-10 rounded-2xl h-full transition-all duration-300 ${i === activeTestimonial ? 'scale-105 opacity-100' : 'scale-90 opacity-60'}`}>
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-white/90 italic mb-6 leading-relaxed text-base">"{t.text}"</p>
                    <div>
                      <p className="font-serif text-white font-semibold">{t.name}</p>
                      <p className="text-sm text-white/60">{t.location}, Greenville</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 md:-left-4 lg:-left-6 h-10 w-10 border-gold/40 bg-navy/80 text-gold hover:bg-gold hover:text-navy" />
            <CarouselNext className="-right-2 md:-right-4 lg:-right-6 h-10 w-10 border-gold/40 bg-navy/80 text-gold hover:bg-gold hover:text-navy" />
          </Carousel>
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
              <p className="text-text-dark/70 text-sm leading-relaxed mb-4">
                From custom stone patios and retaining walls in Greenville to landscape lighting installations in Greer and full outdoor kitchen builds in Simpsonville, our team delivers premium hardscaping and softscaping solutions tailored to the unique terrain and climate of Upstate South Carolina. Whether you need expert grading, underground drainage, or a complete landscape transformation, Elevation Landscapes is the trusted residential landscape architect for discerning homeowners throughout the region.
              </p>
              <p className="text-text-dark/70 text-sm leading-relaxed mb-4">
                As a high-end landscape contractor in Greenville, we specialize in custom stone work, paver patios in Travelers Rest, outdoor living spaces in Greer, and drainage solutions across Upstate SC. Our residential landscape architecture blends luxury design with lasting craftsmanship — from boulder retaining walls in Simpsonville to irrigation systems in Mauldin and beyond.
              </p>
              <p className="text-text-dark/60 text-sm leading-relaxed">
                If you have a project in mind and would like to know whether we cover your area, please{" "}
                <Link to="/contact" className="text-gold hover:text-gold-light underline transition-colors">
                  contact our team
                </Link>{" "}
                who will be happy to assist.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <SCMap />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;
