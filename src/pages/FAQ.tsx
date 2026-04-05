import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Project Planning",
    questions: [
      {
        q: "How does the consultation process work?",
        a: "We start with a free on-site consultation where we walk your property, discuss your vision, and evaluate grading, drainage, and existing conditions. From there, we prepare a detailed proposal with scope, materials, timeline, and pricing — typically within one week.",
      },
      {
        q: "What's the best time of year to start a landscaping project in Upstate SC?",
        a: "Upstate South Carolina's mild climate allows us to work nearly year-round. Fall (September–November) is ideal for plantings and hardscape, while spring is popular for full outdoor living builds. Winter is a great time to plan and lock in scheduling before the busy season.",
      },
      {
        q: "How long does a typical project take from start to finish?",
        a: "Timeline depends on scope. A paver patio or fire pit may take 1–2 weeks, while a full outdoor kitchen with retaining walls and lighting can take 4–8 weeks. We provide a detailed timeline in every proposal and keep you updated throughout construction.",
      },
      {
        q: "Do you provide 3D renderings or design plans?",
        a: "Yes. For larger projects we provide detailed design concepts so you can visualize the finished result before any ground is broken. This ensures alignment on layout, materials, and aesthetics.",
      },
      {
        q: "Can I phase my project over multiple seasons?",
        a: "Absolutely. We regularly work with homeowners who want to spread their investment across phases — for example, retaining walls and grading in phase one, then a patio and outdoor kitchen in phase two. We design with the full vision in mind so each phase integrates seamlessly.",
      },
    ],
  },
  {
    title: "Costs & Pricing",
    questions: [
      {
        q: "How much does a typical hardscape project cost?",
        a: "Costs vary widely based on scope, materials, and site conditions. A basic paver patio starts around $8,000–$15,000, while comprehensive outdoor living spaces with kitchens, fire features, and lighting can range from $40,000–$150,000+. We provide transparent, itemized proposals with no hidden fees.",
      },
      {
        q: "What factors affect the cost of a landscaping project?",
        a: "The biggest factors are site preparation (grading, drainage, demolition), material selection (natural stone vs. manufactured pavers), project complexity, and accessibility. Sloped lots in the Upstate often require retaining walls or extra grading that flat-lot projects don't.",
      },
      {
        q: "Do you offer financing or payment plans?",
        a: "We typically structure payments in milestones — a deposit to secure scheduling, progress payments at key stages, and a final payment upon completion. For larger projects, we can discuss flexible payment arrangements during the proposal phase.",
      },
      {
        q: "Is the initial consultation really free?",
        a: "Yes. The on-site consultation and initial discussion are completely free with no obligation. If the project moves forward, the design and planning phase is outlined in our proposal.",
      },
    ],
  },
  {
    title: "Materials & Design",
    questions: [
      {
        q: "What's the difference between natural stone and pavers?",
        a: "Natural stone (flagstone, bluestone, fieldstone) offers a one-of-a-kind, organic aesthetic and exceptional durability. Manufactured pavers provide consistent sizing, a wider color palette, and are typically more budget-friendly. Both are excellent choices — the right pick depends on your design vision and budget. We cover this in depth in our article on natural stone vs. pavers.",
      },
      {
        q: "Do I need drainage work before hardscaping?",
        a: "In many cases, yes — especially in Upstate SC where clay soils and sloped terrain can cause water issues. Proper drainage prevents erosion, protects your investment, and keeps your outdoor spaces usable year-round. We always assess drainage during the consultation.",
      },
      {
        q: "What type of retaining wall is best for my property?",
        a: "It depends on the height, load, and aesthetic you're after. Boulder walls offer a natural look and work well for moderate grade changes. Block retaining walls (segmental or Allan Block) are engineered for taller walls and provide a clean, structured appearance. We'll recommend the right solution based on your site.",
      },
      {
        q: "Can you match new hardscape to my existing patio or home exterior?",
        a: "Yes. We carefully select materials that complement your home's architecture, existing stonework, and landscape. We bring physical samples to the site so you can see how everything will look together.",
      },
      {
        q: "What landscape lighting options do you offer?",
        a: "We install low-voltage LED landscape lighting including path lights, uplighting for trees and architecture, step lights, and ambient lighting for outdoor living areas. All systems are energy-efficient and can be controlled via timer or smart home integration.",
      },
    ],
  },
  {
    title: "Maintenance & Care",
    questions: [
      {
        q: "How do I maintain my paver patio or stone pathways?",
        a: "Regular maintenance is simple: sweep debris, rinse with a garden hose, and pull any weeds from joints. We recommend resealing pavers every 2–3 years to protect color and prevent staining. For natural stone, annual cleaning and occasional re-leveling keeps everything looking pristine.",
      },
      {
        q: "When should I winterize my irrigation system?",
        a: "In Upstate SC, irrigation systems should be winterized (blown out) by late November before the first hard freeze. We recommend scheduling spring startup in mid-March to check for any freeze damage and adjust heads for the growing season.",
      },
      {
        q: "How often should I fertilize my lawn and plants?",
        a: "For warm-season grasses common in the Upstate (Bermuda, Zoysia), fertilize 3–4 times from April through September. Cool-season fescue benefits from fall and early spring applications. Shrubs and perennials typically need one spring feeding and an optional fall application.",
      },
      {
        q: "Do you offer ongoing maintenance services?",
        a: "Our focus is on design and installation. However, we're happy to refer you to trusted maintenance partners in the Upstate SC area and can provide a customized care guide for your specific plantings and hardscape.",
      },
    ],
  },
  {
    title: "Permits & HOA",
    questions: [
      {
        q: "Do I need a permit for my landscaping or hardscape project?",
        a: "In Greenville County, most standard landscaping and patio work does not require a permit. However, retaining walls over 4 feet, structures with electrical or gas (outdoor kitchens), and projects near property lines or easements may require permits. We handle all permitting as part of our service.",
      },
      {
        q: "How do you handle HOA approval requirements?",
        a: "Many Upstate SC neighborhoods have architectural review boards. We prepare detailed plans, material specifications, and renderings that meet most HOA submission requirements. We'll work with you to get approval before breaking ground.",
      },
      {
        q: "Are there setback requirements I should know about?",
        a: "Yes. Most municipalities in Upstate SC require structures to be set back a certain distance from property lines — typically 5–15 feet depending on the zone and structure type. We verify setbacks and easements during the planning phase so there are no surprises.",
      },
      {
        q: "Do you carry insurance and licensing?",
        a: "Yes. Elevation Landscapes is fully licensed and insured, carrying both general liability and workers' compensation coverage. We're happy to provide certificates of insurance upon request.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        page="faq"
        fallbackTitle="Landscaping FAQ — Upstate SC | Elevation Landscapes"
        fallbackDescription="Answers to common landscaping and hardscape questions for Upstate SC homeowners — timelines, costs, materials, maintenance, permits, and more."
        path="/faq"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
            Everything you need to know about landscaping and hardscape projects in Upstate South Carolina.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-14 last:mb-0">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 border-b border-primary/20 pb-3">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((item, qIdx) => (
                  <AccordionItem
                    key={qIdx}
                    value={`cat${catIdx}-q${qIdx}`}
                    className="border border-border/50 rounded-lg px-5 data-[state=open]:bg-muted/30"
                  >
                    <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline hover:text-primary py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-secondary-foreground/70 mb-8 text-lg">
            We'd love to hear about your project. Reach out for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-primary text-primary px-8 py-3 rounded hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-wider font-sans text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
