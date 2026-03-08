import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-navy"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Elevation Landscapes" className="w-auto" style={{ height: '4.17rem' }} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="font-sans text-sm tracking-wider text-secondary-foreground hover:text-gold transition-colors uppercase"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="font-sans text-sm tracking-wider text-secondary-foreground hover:text-gold transition-colors uppercase flex items-center gap-1">
                Services
                <ChevronDown className={`h-3 w-3 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="bg-navy border border-gold/20 rounded-lg shadow-2xl p-4 w-[520px] grid grid-cols-2 gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="px-3 py-2 text-sm text-secondary-foreground hover:text-gold hover:bg-gold/5 rounded transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              className="font-sans text-sm tracking-wider text-secondary-foreground hover:text-gold transition-colors uppercase"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="font-sans text-sm tracking-wider text-secondary-foreground hover:text-gold transition-colors uppercase"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-sans text-sm tracking-wider border border-gold text-gold px-5 py-2 rounded hover:bg-gold hover:text-navy transition-all uppercase"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-secondary-foreground hover:text-gold transition-colors"
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-navy border-t border-gold/20">
          <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <Link to="/" className="block text-secondary-foreground hover:text-gold transition-colors uppercase text-sm tracking-wider">
              Home
            </Link>
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-secondary-foreground hover:text-gold transition-colors uppercase text-sm tracking-wider w-full"
              >
                Services
                <ChevronDown className={`h-3 w-3 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block text-sm text-secondary-foreground/80 hover:text-gold transition-colors py-1"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/portfolio" className="block text-secondary-foreground hover:text-gold transition-colors uppercase text-sm tracking-wider">
              Portfolio
            </Link>
            <Link to="/about" className="block text-secondary-foreground hover:text-gold transition-colors uppercase text-sm tracking-wider">
              About
            </Link>
            <Link to="/faq" className="block text-secondary-foreground hover:text-gold transition-colors uppercase text-sm tracking-wider">
              FAQ
            </Link>
            <Link to="/contact" className="block border border-gold text-gold px-5 py-2 rounded text-center hover:bg-gold hover:text-navy transition-all uppercase text-sm tracking-wider">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
