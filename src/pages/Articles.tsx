import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";

import heroImg from "@/assets/articles-hero.jpg";
import outdoorKitchenImg from "@/assets/articles/outdoor-kitchen-hero.jpg";
import img1 from "@/assets/articles/stone-vs-pavers-hero.jpg";
import img3 from "@/assets/articles/retaining-walls-hero.jpg";
import img4 from "@/assets/articles/outdoor-living-hero.jpg";
import img5 from "@/assets/articles/landscape-lighting-hero.jpg";
import img6 from "@/assets/articles/drainage-hero.jpg";
import hardscapeContractorImg from "@/assets/articles/hardscape-contractor-hero.jpg";
import plantDirectoryImg from "@/assets/articles/plant-directory-hero.jpg";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  slug?: string;
}

const popularArticles: Article[] = [
  {
    id: 7,
    title:
      "Transform Your Backyard: Exploring the Benefits of Adding an Outdoor Kitchen in Upstate SC",
    excerpt:
      "Discover how an outdoor kitchen can boost home value, enhance your lifestyle, and take full advantage of the Upstate's year-round climate.",
    category: "Outdoor Living",
    image: outdoorKitchenImg,
    slug: "outdoor-kitchen-greenville",
  },
  {
    id: 5,
    title: "Illuminate Your Home: The Transformative Benefits of Landscape Lighting in Upstate SC",
    excerpt:
      "Discover how professional landscape lighting can enhance curb appeal, increase security, and extend your outdoor living space in the Upstate.",
    category: "Design Tips",
    image: img5,
    slug: "landscape-lighting-greenville",
  },
  {
    id: 3,
    title: "Retaining Walls on Sloped Lots in Upstate SC: Boulder, Block, or Natural Stone?",
    excerpt:
      "Discover the best retaining wall materials for sloped properties in Greenville, Simpsonville, and Greer — from boulders to block to natural stone.",
    category: "Hardscaping",
    image: img3,
    slug: "retaining-walls-upstate-sc",
  },
];

const latestArticles: Article[] = [
  {
    id: 4,
    title: "The Complete Guide to Outdoor Living Spaces in Greenville, SC",
    excerpt:
      "From patios and outdoor kitchens to fire pits, water features, and lighting — everything you need to create an exceptional outdoor living space.",
    category: "Outdoor Living",
    image: img4,
    slug: "outdoor-living-greenville",
  },
  {
    id: 8,
    title: "Transform Your Upstate SC Landscape with Our Comprehensive Plant & Tree Directory",
    excerpt:
      "Discover our 250-plant directory tailored for Upstate SC's climate — filter by sun, water, soil, and native status to plan your perfect yard.",
    category: "Plant Guide",
    image: plantDirectoryImg,
    slug: "plant-directory-greenville",
  },
  {
    id: 1,
    title: "Natural Stone vs. Concrete Pavers: Which Is Right for Your Upstate SC Home?",
    excerpt:
      "Compare aesthetics, durability, cost, and installation of natural stone and concrete pavers for pathways, patios, and pool decks.",
    category: "Hardscaping",
    image: img1,
    slug: "natural-stone-vs-pavers",
  },
  {
    id: 6,
    title: "Why Upstate SC Homeowners Need a Proper Drainage System Before Any Landscaping Project",
    excerpt:
      "Learn why addressing drainage first is crucial for protecting your landscape investment on Upstate SC's sloped terrain.",
    category: "Drainage",
    image: img6,
    slug: "drainage-before-landscaping",
  },
  {
    id: 9,
    title: "How to Choose a Hardscape Contractor in Greenville, SC: 10 Questions to Ask",
    excerpt:
      "Finding the right hardscape contractor is crucial — here are ten essential questions to ask before hiring.",
    category: "Hardscaping",
    image: hardscapeContractorImg,
    slug: "hardscape-contractor-greenville",
  },
];

const ArticleCard = ({
  article,
  large = false,
}: {
  article: Article;
  large?: boolean;
}) => {
  const inner = (
    <div
      className={`group bg-cream rounded-xl overflow-hidden border border-gold/10 hover:shadow-lg transition-shadow ${
        large ? "flex flex-col h-full" : ""
      }`}
    >
      <div
        className={`overflow-hidden ${large ? "aspect-[16/10]" : "aspect-[16/9]"}`}
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className={`p-5 ${large ? "flex-1 flex flex-col" : ""}`}>
        <div className="mb-3">
          <Badge className="bg-gold/15 text-gold border-gold/30 hover:bg-gold/25 text-xs font-sans uppercase tracking-wider">
            {article.category}
          </Badge>
        </div>
        <h3
          className={`font-serif text-navy leading-snug mb-2 ${
            large ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {article.title}
        </h3>
        <p
          className={`text-muted-foreground font-sans text-sm leading-relaxed ${large ? "flex-1" : "line-clamp-2"}`}
        >
          {article.excerpt}
        </p>
      </div>
    </div>
  );

  if (article.slug) {
    return <Link to={`/articles/${article.slug}`}>{inner}</Link>;
  }

  return inner;
};

const Articles = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Elevation Landscapes Insights",
    url: "https://elevationlandscapes.com/articles",
  };

  return (
    <>
      <SEOHead
        page="articles"
        fallbackTitle="Landscape Insights | Elevation Landscapes"
        fallbackDescription="Expert articles on hardscaping, landscape design, and outdoor living from the Upstate SC luxury landscape professionals."
        path="/articles"
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[340px] md:h-[400px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Luxury landscaped backyard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-secondary-foreground">
            Landscape Insights
          </h1>
          <p className="text-secondary-foreground/70 font-sans mt-2 max-w-lg">
            Expert guidance on design, hardscaping, and outdoor living from our
            team.
          </p>
        </div>
      </section>

      {/* Popular Articles — Bento */}
      <section className="bg-cream-alt py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-navy mb-8">
            Popular Articles
          </h2>
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Featured large card */}
            <div className="lg:col-span-3">
              <ArticleCard article={popularArticles[0]} large />
            </div>
            {/* Stacked smaller cards */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {popularArticles.slice(1).map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-background py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-navy mb-8">
            Latest Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link
              to="/contact"
              className="bg-gold text-navy font-sans text-sm uppercase tracking-wider px-8 py-3 rounded hover:bg-gold-hover hover:scale-105 hover:shadow-lg transition-all duration-200"
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

export default Articles;
