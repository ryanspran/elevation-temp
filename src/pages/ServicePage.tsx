import { useParams, Link } from "react-router-dom";
import { ArrowRight, Shield, Star, Phone, CheckCircle, Diamond, Mountain, Users, Eye, Award, Gem, Handshake } from "lucide-react";
import { getServiceBySlug, getRelatedServices, services } from "@/data/services";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import NotFound from "./NotFound";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <NotFound />;

  const relatedServices = getRelatedServices(service.relatedSlugs);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${service.heroImage ?? heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-secondary-foreground leading-tight mb-6">
            {service.h1}
          </h1>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl leading-relaxed">
            {service.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-block bg-gold text-navy font-sans font-semibold px-8 py-4 rounded hover:bg-gold-light transition-colors uppercase text-sm tracking-wider text-center">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Body Copy */}
      <section id="learn-more" className="bg-cream pt-12 md:pt-16 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {service.bodyParagraphs.map((p, i) => (
              <p key={i} className="text-text-dark/70 text-lg leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-4">Why Choose Elevation Landscapes</h2>
          <div className="w-16 h-0.5 bg-gold mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            {/* Left: Photo */}
            <div className="lg:col-span-2">
              <img
                src={service.heroImage ?? heroBg}
                alt={service.name}
                className="w-full h-80 lg:h-full lg:min-h-[500px] object-cover rounded-2xl"
              />
            </div>
            {/* Right: Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.trustSignals.map((signal, i) => {
                const icons = [Diamond, Mountain, Users, Shield, Eye, Award];
                const Icon = icons[i % icons.length];
                return (
                  <div key={i} className="bg-secondary-foreground/5 backdrop-blur-md border border-secondary-foreground/10 rounded-xl p-4 flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-secondary-foreground font-semibold text-sm mb-1">{signal.title}</h3>
                      <p className="text-secondary-foreground/60 text-xs leading-relaxed">{signal.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-text-dark mb-4">How We Work</h2>
          <div className="w-16 h-0.5 bg-gold mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Steps */}
            <div className="space-y-10">
              {(service.processSteps ?? [
                { num: "01", title: "Consultation & Assessment", desc: "On-site evaluation of your property, understanding your vision and establishing project objectives." },
                { num: "02", title: "Custom Design & Planning", desc: "Detailed plans with material specifications, timelines, and transparent pricing tailored to your project." },
                { num: "03", title: "Expert Execution", desc: "Our in-house craftsmen bring the vision to life with meticulous attention to every detail." },
              ]).map((step, i) => {
                const stepIcons = [Phone, Gem, Shield, Handshake];
                const StepIcon = stepIcons[i % stepIcons.length];
                return (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center shrink-0">
                      <StepIcon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-gold mb-2">{step.title}</h3>
                      <p className="text-text-dark/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Right: Photo with overlapping quote */}
            <div className="relative pb-8">
              <img
                src={service.heroImage ?? heroBg}
                alt={`${service.name} process`}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 left-4 right-4 md:left-8 md:right-8 bg-popover rounded-xl p-6 shadow-lg">
                <span className="text-gold font-serif text-2xl leading-none">"</span>
                <p className="font-serif text-text-dark/80 italic text-sm leading-relaxed mt-1">
                  {service.testimonial?.quote ?? "Every great landscape begins with listening. We don't impose a style — we reveal what your property is meant to become."}
                </p>
                <p className="text-text-dark font-semibold text-xs uppercase tracking-wider mt-3">
                  — {service.testimonial?.attribution ?? "Principal, Elevation Landscapes"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-alt py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-text-dark mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {service.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-lg px-6 bg-popover"
              >
                <AccordionTrigger className="font-serif text-text-dark text-left hover:no-underline hover:text-gold transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-dark/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${service.heroImage ?? heroBg})` }} />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary-foreground/10 backdrop-blur-xl border border-secondary-foreground/20 rounded-2xl p-10 md:p-14 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="font-serif text-xl md:text-2xl text-secondary-foreground italic mb-6 leading-relaxed">
              "{service.testimonial?.quote ?? "Elevation Landscapes exceeded every expectation. Their professionalism, craftsmanship, and genuine care for our property made all the difference."}"
            </p>
            <p className="text-secondary-foreground font-semibold">— {service.testimonial?.attribution ?? "Greenville Homeowner"}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-navy py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-4">
            {service.ctaHeading ?? "Ready to Get Started?"}
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-secondary-foreground/70 text-lg leading-relaxed mb-8">
            {service.ctaText}
          </p>
          <Link to="/contact" className="inline-block bg-gold text-navy font-sans font-semibold px-10 py-4 rounded hover:bg-gold-light transition-colors uppercase text-sm tracking-wider">
            Schedule a Consultation
          </Link>
          <div className="mt-8">
            <a href="tel:+18641234567" className="inline-flex items-center gap-3 text-gold text-xl font-serif hover:text-gold-light transition-colors">
              <Phone className="h-5 w-5" />
              (864) 123-4567
            </a>
          </div>
          {service.urgencyText && (
            <p className="text-gold/80 text-sm mt-6 italic">{service.urgencyText}</p>
          )}
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-text-dark mb-4">Related Services</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.filter((rs) => rs.slug !== slug).map((rs) => (
              <Link
                key={rs.slug}
                to={`/services/${rs.slug}`}
                className="group border border-border rounded-lg p-6 bg-popover hover:border-gold/60 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-serif text-xl text-text-dark group-hover:text-gold transition-colors mb-2">
                  {rs.name}
                </h3>
                <p className="text-sm text-text-dark/60 mb-4">{rs.tagline}</p>
                <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
