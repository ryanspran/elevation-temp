import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

const Footer = () => {
  const serviceColumns = [
    services.slice(0, 8),
    services.slice(8, 16),
  ];

  const serviceAreas = [
    "Greenville", "Travelers Rest", "Simpsonville", "Greer",
    "Spartanburg", "Anderson", "Clemson", "Lake Keowee",
    "Lake Hartwell", "The Cliffs", "Thornblade", "Chanticleer"
  ];

  return (
    <footer className="bg-navy text-secondary-foreground">
      {/* CTA banner */}
      <div className="border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-gold mb-4">
            Schedule Your Consultation
          </h3>
          <p className="text-secondary-foreground/70 mb-6 max-w-xl mx-auto">
            Every extraordinary landscape begins with a conversation. Reach out today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold text-navy font-sans font-semibold px-8 py-3 rounded hover:bg-gold-light transition-colors uppercase text-sm tracking-wider"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Elevation Landscapes" className="h-14 w-auto mb-4" />
            <p className="text-gold-light font-serif text-sm italic mb-4">
              Luxury Landscape & Hardscape — Greenville, SC
            </p>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <a href="tel:+18641234567" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="h-4 w-4 text-gold" />
                (864) 123-4567
              </a>
              <a href="mailto:info@elevationlandscapes.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail className="h-4 w-4 text-gold" />
                info@elevationlandscapes.com
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                Greenville, SC
              </p>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-secondary-foreground/50 hover:text-gold transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-secondary-foreground/50 hover:text-gold transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-secondary-foreground/50 hover:text-gold transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Service columns */}
          {serviceColumns.map((col, i) => (
            <div key={i}>
              <h4 className="font-serif text-gold text-lg mb-4">
                {i === 0 ? "Services" : "More Services"}
              </h4>
              <ul className="space-y-2">
                {col.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-sm text-secondary-foreground/70 hover:text-gold transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Service Areas */}
          <div>
            <h4 className="font-serif text-gold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-secondary-foreground/70">{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-secondary-foreground/40">
          © {new Date().getFullYear()} Elevation Landscapes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
