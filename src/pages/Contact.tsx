import { useEffect, useState, useRef } from "react";
import { Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import contactSidebar from "@/assets/contact-sidebar.jpg";
import contactHero from "@/assets/contact-hero.jpg";

const JOBBER_CONTAINER_ID = "3572b14d-90ae-44ae-a1fa-521130ecb4d1-2540855";

const Contact = () => {
  const [formLoaded, setFormLoaded] = useState(false);
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    const source = document.getElementById(JOBBER_CONTAINER_ID);
    const slot = slotRef.current;

    if (!source || !slot) return;

    // Move the pre-loaded Jobber container into our component
    source.style.display = "";
    slot.appendChild(source);

    const markLoaded = () => {
      if (isMounted) setFormLoaded(true);
    };

    // Check if iframe is already loaded
    const iframe = source.querySelector("iframe");
    if (iframe instanceof HTMLIFrameElement) {
      if (iframe.clientHeight > 0) {
        markLoaded();
      } else {
        iframe.addEventListener("load", markLoaded, { once: true });
      }
    }

    // Watch for iframe injection
    const observer = new MutationObserver(() => {
      const el = source.querySelector("iframe");
      if (el instanceof HTMLIFrameElement) {
        if (el.clientHeight > 0) {
          markLoaded();
        } else {
          el.addEventListener("load", markLoaded, { once: true });
        }
      }
    });
    observer.observe(source, { childList: true, subtree: true });

    const fallback = window.setTimeout(() => {
      if (source.children.length) markLoaded();
    }, 2000);

    return () => {
      isMounted = false;
      observer.disconnect();
      window.clearTimeout(fallback);
      // Move container back to body so it persists across navigations
      source.style.display = "none";
      document.body.appendChild(source);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        page="contact"
        fallbackTitle="Contact Us — Free Consultation | Elevation Landscapes"
        fallbackDescription="Schedule a private consultation with Upstate SC's premier luxury landscape design firm. Share your vision and we'll craft a landscape that exceeds expectations."
        path="/contact"
      />
      <Navbar />

      {/* HERO */}
      <section className="relative py-32 md:py-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-foreground leading-tight mb-6 max-w-3xl">
            Let's Create Something{" "}
            <span className="text-gold">Extraordinary</span>
          </h1>
          <p className="text-secondary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            Tell us about your vision and we'll craft a landscape that exceeds every expectation.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="font-serif text-3xl md:text-4xl text-text-dark mb-2">
                Schedule Your Consultation
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-8" />

              {!formLoaded && (
                <div className="space-y-4 animate-pulse">
                  <div className="h-10 bg-muted rounded w-full" />
                  <div className="h-10 bg-muted rounded w-full" />
                  <div className="h-10 bg-muted rounded w-3/4" />
                  <div className="h-24 bg-muted rounded w-full" />
                  <div className="h-10 bg-muted rounded w-1/3" />
                </div>
              )}
              <div ref={slotRef} className={formLoaded ? "" : "hidden"} />
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-navy rounded-xl p-8">
                <h3 className="font-serif text-xl text-secondary-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <a
                    href="tel:+18643251623"
                    className="flex items-center gap-4 text-secondary-foreground/80 hover:text-gold transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 text-gold" />
                    </div>
                    <span className="font-sans text-sm">(864) 325-1623</span>
                  </a>
                  <div className="flex items-center gap-4 text-secondary-foreground/80">
                    <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-gold" />
                    </div>
                    <span className="font-sans text-sm">
                      Upstate South Carolina
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden">
                <img
                  src={contactSidebar}
                  alt="Luxury landscape design at dusk"
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
