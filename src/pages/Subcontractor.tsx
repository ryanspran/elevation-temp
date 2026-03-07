import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Phone, Clock, Shield, Users, Gem, MessageSquare, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import whyUsPhoto from "@/assets/why-us-photo.jpg";
import processPhoto from "@/assets/process-photo.jpg";

const reasons = [
  {
    icon: Clock,
    title: "We Show Up and We Deliver",
    body: "When you schedule us for a mobilization date, we show up. We understand that delays on our end create costly ripple effects across your entire project, and we treat your schedule with the same urgency we treat our own. Our crews are full-time, not subcontracted day laborers, which means we control our capacity and deliver consistent performance from groundbreaking to final walkthrough.",
  },
  {
    icon: Shield,
    title: "Fully Licensed, Insured, and Bonded",
    body: "Elevation Landscapes carries full general liability insurance and workers compensation coverage sized for commercial and high-value residential scopes. We are properly licensed in South Carolina and can provide certificates of insurance, additional insured endorsements, and documentation packages that meet your procurement and closeout requirements without the administrative back-and-forth.",
  },
  {
    icon: Users,
    title: "Experienced, Dedicated Crews",
    body: "Our installation crews average over eight years of hands-on hardscape and landscape construction experience, and they work together consistently as trained teams — not rotating strangers. That continuity means faster mobilization, fewer quality issues, and no need for your superintendent to babysit the work or re-explain scope every morning.",
  },
  {
    icon: Gem,
    title: "Luxury Hardscape Expertise at Every Scope",
    body: "Hardscape is all we do, and we do it at a luxury level. From engineer-spec retaining walls to intricate natural stone paver patterns and outdoor living environments that photograph well for developer marketing, our work reflects the quality standard that protects your reputation and keeps your clients happy at final walkthrough.",
  },
  {
    icon: MessageSquare,
    title: "Responsive Communication, Every Step",
    body: "You will have a direct point of contact at Elevation Landscapes throughout the project — not a rotating answering service or a crew foreman who doesn't check email. We respond to RFIs promptly, flag issues before they become change orders, and communicate proactively when site conditions shift so you can make informed decisions in real time.",
  },
  {
    icon: CheckCircle,
    title: "Quality That Reflects Well on Your Business",
    body: "We know that when our work looks great, you look great — and when it falls short, that falls on you. Every project we subcontract goes through a structured quality control process that includes base compaction verification, pattern review, and a formal punch walk before we ever call the work complete. We deliver scopes that pass inspection the first time.",
  },
];

const Subcontractor = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hardscape & Landscape Subcontractor Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Elevation Landscapes",
      areaServed: "Greenville, SC",
    },
    description:
      "Licensed hardscape and landscape subcontractor serving general contractors, custom home builders, and landscape companies across Upstate South Carolina.",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        page="subcontractor"
        fallbackTitle="Hardscape & Landscape Subcontractor in Greenville, SC | Elevation Landscapes"
        fallbackDescription="Elevation Landscapes partners with general contractors, custom home builders, and landscape companies across Upstate South Carolina as a trusted hardscape and landscape subcontractor."
        path="/subcontractor"
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left py-32">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary-foreground leading-tight mb-6 max-w-4xl">
            Hardscape and Landscape Subcontractor in Greenville, SC{" "}
            <span className="block text-gold mt-2 text-2xl sm:text-3xl md:text-4xl font-sans tracking-wide">
              Built for General Contractors Who Can't Afford a Bad Sub
            </span>
          </h1>
          <p className="text-secondary-foreground/80 text-base sm:text-lg max-w-3xl leading-relaxed mb-10">
            Elevation Landscapes partners with general contractors, custom home builders, and
            landscape companies across Upstate South Carolina as a trusted hardscape and landscape
            subcontractor — bringing licensed crews, full insurance, and the on-time performance your
            schedule depends on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded font-sans uppercase text-sm tracking-wider hover:bg-primary/90 transition-all"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+18641234567"
              className="border border-gold text-gold px-8 py-4 rounded font-sans uppercase text-sm tracking-wider hover:bg-gold hover:text-navy transition-all flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" />
              (864) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Body Intro */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <span className="text-primary font-sans uppercase tracking-widest text-sm">
                A True Construction Partner
              </span>
              <p className="text-foreground/80 leading-relaxed mt-4 text-base sm:text-lg">
                Your reputation rides on every sub you bring onto a job. When a hardscape or
                landscape scope goes sideways — wrong materials, missed mobilization, poor quality on
                a high-visibility finish — you're the one standing in front of the owner explaining
                it. Elevation Landscapes exists to eliminate that risk for general contractors, custom
                home builders, and landscape companies operating across Upstate South Carolina.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4 text-base sm:text-lg">
                We are a licensed, fully insured hardscape and landscape construction company based
                in Greenville, SC, with the experienced crews, project management systems, and
                professional track record to function as a true construction partner — not just a
                vendor you hope shows up. Whether you need a paver subcontractor for a luxury pool
                deck, a retaining wall subcontractor for a hillside site, or a full outdoor living
                scope delivered on a tight builder schedule, we bring the capacity, communication, and
                craft to get it done right the first time.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4 text-base sm:text-lg">
                We understand procurement, submittals, schedule coordination, and closeout
                documentation. We speak your language because we operate in your world.
              </p>
            </div>
            <div className="lg:col-span-2">
              <img
                src={processPhoto}
                alt="Elevation Landscapes hardscape construction in progress"
                className="w-full aspect-[3/4] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-sans uppercase tracking-widest text-sm">
              The Elevation Difference
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mt-3">
              Why Partner With Elevation Landscapes
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Large image card */}
            <div className="lg:row-span-2 rounded-lg overflow-hidden shadow-xl hidden lg:block">
              <img
                src={whyUsPhoto}
                alt="Premium hardscape installation by Elevation Landscapes"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Reason cards */}
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-navy/50 border border-gold/10 rounded-lg p-6 hover:border-gold/30 transition-colors"
              >
                <reason.icon className="h-8 w-8 text-gold mb-4" />
                <h3 className="font-serif text-lg text-secondary-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
            Ready to Partner?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Let's discuss your next project. We'll walk through your scope, timeline, and
            expectations — and show you why the best GCs in Upstate SC trust Elevation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-navy text-secondary-foreground px-8 py-4 rounded font-sans uppercase text-sm tracking-wider hover:bg-navy/90 transition-all"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+18641234567"
              className="border border-navy text-navy px-8 py-4 rounded font-sans uppercase text-sm tracking-wider hover:bg-navy hover:text-secondary-foreground transition-all flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Subcontractor;
