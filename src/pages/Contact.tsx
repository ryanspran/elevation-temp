import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import contactSidebar from "@/assets/contact-sidebar.jpg";
import contactHero from "@/assets/contact-hero.jpg";

const budgetOptions = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

const timeframeOptions = [
  "As soon as possible",
  "Within 1–3 months",
  "3–6 months",
  "6–12 months",
  "Just exploring options",
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [message, setMessage] = useState("");

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for reaching out. We'll be in touch within 24 hours.",
    });
    setName("");
    setEmail("");
    setPhone("");
    setSelectedServices([]);
    setBudget("");
    setTimeframe("");
    setMessage("");
  };

  return (
    <div className="min-h-screen">
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
            {/* Form — left 3 cols */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-3xl md:text-4xl text-text-dark mb-2">
                Schedule Your Consultation
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-8" />

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name / Email / Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-text-dark font-sans text-sm mb-2 block">
                      Full Name *
                    </Label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Smith"
                      className="w-full bg-popover border border-border rounded px-4 py-3 text-text-dark placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>
                  <div>
                    <Label className="text-text-dark font-sans text-sm mb-2 block">
                      Email Address *
                    </Label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full bg-popover border border-border rounded px-4 py-3 text-text-dark placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-text-dark font-sans text-sm mb-2 block">
                    Phone Number
                  </Label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(864) 555-0123"
                    className="w-full bg-popover border border-border rounded px-4 py-3 text-text-dark placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>

                {/* Services checkboxes */}
                <div>
                  <Label className="text-text-dark font-sans text-sm mb-3 block">
                    Services Interested In
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((s) => (
                      <label
                        key={s.slug}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <Checkbox
                          checked={selectedServices.includes(s.name)}
                          onCheckedChange={() => toggleService(s.name)}
                          className="border-border data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                        />
                        <span className="text-text-dark/80 text-sm group-hover:text-text-dark transition-colors">
                          {s.name}
                        </span>
                      </label>
                    ))}
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <Checkbox
                        checked={selectedServices.includes("Other")}
                        onCheckedChange={() => toggleService("Other")}
                        className="border-border data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                      />
                      <span className="text-text-dark/80 text-sm group-hover:text-text-dark transition-colors">
                        Other
                      </span>
                    </label>
                  </div>
                </div>

                {/* Budget & Timeframe dropdowns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-text-dark font-sans text-sm mb-2 block">
                      Budget Range
                    </Label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-popover border border-border rounded px-4 py-3 text-text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
                    >
                      <option value="" className="text-muted-foreground">
                        Select a range
                      </option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label className="text-text-dark font-sans text-sm mb-2 block">
                      Timeframe
                    </Label>
                    <select
                      value={timeframe}
                      onChange={(e) => setTimeframe(e.target.value)}
                      className="w-full bg-popover border border-border rounded px-4 py-3 text-text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
                    >
                      <option value="" className="text-muted-foreground">
                        Select a timeframe
                      </option>
                      {timeframeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label className="text-text-dark font-sans text-sm mb-2 block">
                    Tell Us About Your Project
                  </Label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Describe your vision, property details, or any questions you have..."
                    className="w-full bg-popover border border-border rounded px-4 py-3 text-text-dark placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gold text-navy font-sans font-semibold px-10 py-4 rounded hover:bg-gold-light transition-colors uppercase text-sm tracking-wider"
                >
                  <Send className="h-4 w-4" />
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Right sidebar — image + contact info */}
            <div className="lg:col-span-2 space-y-8">

              <div className="bg-navy rounded-xl p-8">
                <h3 className="font-serif text-xl text-secondary-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <a
                    href="tel:+18641234567"
                    className="flex items-center gap-4 text-secondary-foreground/80 hover:text-gold transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 text-gold" />
                    </div>
                    <span className="font-sans text-sm">(864) 123-4567</span>
                  </a>
                  <div className="flex items-center gap-4 text-secondary-foreground/80">
                    <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-gold" />
                    </div>
                    <span className="font-sans text-sm">
                      Greenville, SC &amp; Upstate South Carolina
                    </span>
                  </div>
                </div>
              </div>

              {/* Vertical image */}
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
