import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Elevation Landscapes" className="w-auto mb-3" style={{ height: '4.24rem' }} />
            <p className="text-gold-light font-serif text-sm italic">
              Luxury Landscape & Hardscape — Greenville, SC
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <a href="/#services" className="text-secondary-foreground/70 hover:text-gold transition-colors">
                Services
              </a>
              <Link to="/contact" className="text-secondary-foreground/70 hover:text-gold transition-colors">
                Contact
              </Link>
              <a href="tel:+18641234567" className="flex items-center gap-2 text-secondary-foreground/70 hover:text-gold transition-colors">
                <Phone className="h-4 w-4 text-gold" />
                (864) 123-4567
              </a>
              <span className="flex items-center gap-2 text-secondary-foreground/70">
                <MapPin className="h-4 w-4 text-gold" />
                Greenville, SC
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <Link to="/plant-guide" className="text-secondary-foreground/70 hover:text-gold transition-colors">
                Plant Guide
              </Link>
              <Link to="/articles" className="text-secondary-foreground/70 hover:text-gold transition-colors">
                Articles
              </Link>
              <Link to="/faq" className="text-secondary-foreground/70 hover:text-gold transition-colors">
                FAQ
              </Link>
              <Link to="/subcontractor" className="text-secondary-foreground/70 hover:text-gold transition-colors">
                Need a subcontractor? Work with us
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <a href="#" className="text-secondary-foreground/50 hover:text-gold transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-secondary-foreground/50 hover:text-gold transition-colors"><Instagram className="h-5 w-5" /></a>
            
          </div>
        </div>
      </div>



      {/* Copyright */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-sm text-secondary-foreground/40">
          © {new Date().getFullYear()} Elevation Landscapes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
