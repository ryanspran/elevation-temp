import { useParams, Link, Navigate } from "react-router-dom";
import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";

import outdoorKitchenHero from "@/assets/articles/outdoor-kitchen-hero.jpg";
import outdoorKitchenDetail from "@/assets/articles/outdoor-kitchen-detail.jpg";
import landscapeLightingHero from "@/assets/articles/landscape-lighting-hero.jpg";
import landscapeLightingDetail from "@/assets/articles/landscape-lighting-detail.jpg";

interface ArticleData {
  title: string;
  category: string;
  heroImage: string;
  detailImage: string;
  seoTitle: string;
  seoDescription: string;
  sections: { heading?: string; body: string }[];
}

const articles: Record<string, ArticleData> = {
  "outdoor-kitchen-greenville": {
    title:
      "Transform Your Backyard: Exploring the Benefits of Adding an Outdoor Kitchen in Greenville, SC",
    category: "Outdoor Living",
    heroImage: outdoorKitchenHero,
    detailImage: outdoorKitchenDetail,
    seoTitle:
      "Outdoor Kitchen Benefits in Greenville SC | Elevation Landscapes",
    seoDescription:
      "Discover how an outdoor kitchen can boost home value, enhance entertaining, and take advantage of Greenville's year-round climate.",
    sections: [
      {
        body: "As more homeowners in Greenville, SC, seek ways to enhance their living spaces, outdoor kitchens have emerged as a popular trend, bringing the joys of alfresco dining to the heart of their homes. With the Upstate's moderate climate, growing real estate market, and culture of community bonding, investing in an outdoor kitchen offers both aesthetic and functional benefits. Let's explore how this enticing upgrade could transform your living experience.",
      },
      {
        heading: "Boosting Home Value and Real Estate Appeal",
        body: "In Greenville's dynamic real estate landscape, homes with unique amenities such as outdoor kitchens are highly sought-after. These amenities increase your home's usable square footage and enhance its curb appeal, a crucial factor in a competitive market. Real estate experts in the area often note that features like fully-equipped outdoor kitchens can offer a significant return on investment, similar to indoor kitchen renovations. Not only do these spaces make your home more attractive to potential buyers, but they also provide a distinctive edge, setting your property apart.",
      },
      {
        heading: "Year-Round Enjoyment in Upstate Climate",
        body: "One of the great perks of living in the Upstate is the climate's suitability for outdoor living. With mild winters and long, warm summers, an outdoor kitchen can be enjoyed almost all year round. Whether it's spring gatherings, summer barbecues, or cozy fall evenings by the grill, Greenville's weather supports a wide range of outdoor activities. To maximize usability, consider weather-resistant materials and designs that offer shelter from the elements, such as retractable awnings and pergolas.",
      },
      {
        heading: "Lifestyle and Entertaining Benefits",
        body: "Outdoor kitchens provide an exceptional opportunity to enhance your lifestyle and make entertaining effortless. Imagine hosting cookouts, birthday parties, or football watch parties without having to dash indoors for supplies. By incorporating features like built-in grills, pizza ovens, and refrigerators, you can create a versatile environment that caters to any occasion. These spaces not only serve as culinary hubs but also as inviting focal points for friends and family to gather, reinforcing community ties and fostering connections.",
      },
      {
        heading: "Common Features and Design Ideas for Greenville",
        body: "When designing an outdoor kitchen in Greenville, consider popular features that align with local preferences. Essential elements often include a grilling station, sink, prep area, refrigerator, and bar seating. For flooring, opt for durable materials such as pavers or natural stone, which offer both style and longevity. Customization is key, so plan your design around existing patios or porches to ensure a seamless flow. Integrated lighting and stylish seating can further enhance usability and elegance, making your outdoor kitchen a true extension of your home.",
      },
      {
        heading: "Local Considerations: Permits, Materials, and Sustainability",
        body: "Before diving into construction, be mindful of the local regulations. Many outdoor kitchen projects require permits for electrical, plumbing, and structural alterations. It's advisable to work with local professionals who are familiar with Greenville's building codes to streamline this process. When it comes to material selection, prioritize those that withstand the region's humidity and temperature variations, such as stainless steel appliances and granite countertops. Additionally, consider incorporating sustainable elements like solar lighting or rainwater harvesting systems to enhance your kitchen's eco-friendliness.",
      },
      {
        heading: "Next Steps for Homeowners",
        body: "Adding an outdoor kitchen is a significant, yet rewarding investment for homeowners in Greenville, SC. By increasing your home's value, enhancing your lifestyle, and taking advantage of the Upstate's climate, you can create a vibrant outdoor living space that meets your needs year-round. If you're considering this exciting upgrade, start by consulting with local designers and builders, get inspired by the latest trends, and ensure your design aligns with both your vision and practical requirements. Ultimately, an outdoor kitchen offers a way to enjoy the beauty of the outdoors while enhancing your home's entertaining potential.",
      },
      {
        body: "For Greenville homeowners considering an outdoor kitchen project, Elevation Landscapes exemplifies quality and personalization in crafting unique outdoor environments. Specializing in custom designs, this local company prides itself on delivering seamless indoor-outdoor transitions, ensuring your new space is practical and beautifully integrated with your existing home. With a strong local presence and a full-service design/build approach, Elevation Landscapes manages every aspect of your project, from initial concept to final installation, providing peace of mind with their commitment to quality craftsmanship and personalized service. Their expertise in creating cohesive, year-round outdoor environments makes them a trusted partner for bringing your dream backyard to life. Engaging Elevation Landscapes means investing in a vibrant outdoor living space perfectly tailored to enjoy the Upstate's pleasant climate while enhancing your home's value and lifestyle.",
      },
    ],
  },
};

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : undefined;

  if (!article) return <Navigate to="/articles" replace />;

  // Insert detail image after the 3rd section
  const insertImageAfter = 3;

  return (
    <>
      <SEOHead
        page={`article-${slug}`}
        fallbackTitle={article.seoTitle}
        fallbackDescription={article.seoDescription}
        path={`/articles/${slug}`}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[340px] md:h-[440px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <Badge className="bg-gold/15 text-gold border-gold/30 hover:bg-gold/25 text-xs font-sans uppercase tracking-wider mb-4">
            {article.category}
          </Badge>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-secondary-foreground max-w-3xl leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-background py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="font-serif text-2xl md:text-3xl text-navy mt-10 mb-4">
                  {section.heading}
                </h2>
              )}
              <p className="text-muted-foreground font-sans text-base leading-relaxed mb-6">
                {section.body}
              </p>

              {/* Detail image after designated section */}
              {i === insertImageAfter && (
                <div className="my-10">
                  <img
                    src={article.detailImage}
                    alt={`${article.title} — detail`}
                    className="w-full rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 pt-10 border-t border-gold/10">
            <Link
              to="/contact"
              className="bg-gold text-navy font-sans text-sm uppercase tracking-wider px-8 py-3 rounded hover:bg-gold-light transition-colors"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+18641234567"
              className="flex items-center gap-2 border border-gold text-gold font-sans text-sm uppercase tracking-wider px-8 py-3 rounded hover:bg-gold hover:text-navy transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ArticlePage;
