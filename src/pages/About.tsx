import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import ownerPhoto from "@/assets/about-owner.jpg";
import teamPhoto from "@/assets/about-team.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        page="about"
        fallbackTitle="About Elevation Landscapes | Upstate SC Landscape Design"
        fallbackDescription="Learn about Elevation Landscapes — Upstate South Carolina's premier luxury landscape design firm serving the region's most discerning residential and commercial clients."
        path="/about"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-4">
            About <span className="text-primary">Elevation</span>
          </h1>
          <p className="text-secondary-foreground/70 max-w-xl mx-auto text-lg">
            Crafting outdoor spaces that stand the test of time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div>
              <img
                src={ownerPhoto}
                alt="Owner of Elevation Landscapes"
                className="w-full aspect-[3/4] object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Copy */}
            <div className="lg:pl-8">
              <span className="text-primary font-sans uppercase tracking-widest text-sm">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3 mb-6">
                Built on Hard Work &amp; a Commitment to Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Elevation Landscapes was founded with a simple belief: every client deserves an outdoor space 
                they're proud of. We're a team of hardscaping and landscaping professionals serving the Upstate 
                South Carolina community, and everything we do is guided by five core principals: Craftsmanship, 
                Innovation, Integrity, Legacy, and Service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We approach every project with the kind of craftsmanship that turns a backyard patio into a 
                full-scale outdoor living transformation, because the details are what separate good work from 
                great work. We bring innovation to every design, finding smarter solutions that stand the test 
                of time and become a lasting part of your property's legacy for years to come.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our mission is straightforward: deliver an excellent product, every single time. We don't cut 
                corners, we don't rush timelines, and we don't walk away until the job meets our standard. That's 
                our integrity, and it's non-negotiable. From the first consultation to the final walkthrough, we 
                pour genuine service into every interaction and treat your property like it's our own.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                That's the Elevation difference, and it's why our clients keep coming back.
              </p>
              <Link
                to="/contact"
                className="inline-block border border-primary text-primary px-8 py-3 rounded font-sans uppercase text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-sans uppercase tracking-widest text-sm">The Team</span>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mt-3 mb-10">
            People Who Take Pride in Their Craft
          </h2>
          <img
            src={teamPhoto}
            alt="The Elevation Landscapes team at work"
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
