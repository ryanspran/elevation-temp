import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";

import heroImg from "@/assets/articles-hero.jpg";
import img1 from "@/assets/services/block-walls.jpg";
import img2 from "@/assets/services/outdoor-kitchens.jpg";
import img3 from "@/assets/services/sod-seeding.jpg";
import img4 from "@/assets/services/paver-patios.jpg";
import img5 from "@/assets/services/landscape-lighting.jpg";
import img6 from "@/assets/services/underground-drainage.jpg";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

const popularArticles: Article[] = [
  {
    id: 1,
    title: "The Ultimate Guide to Retaining Wall Design",
    excerpt:
      "Discover how engineered retaining walls can transform sloped terrain into functional outdoor living space while adding lasting value to your property.",
    category: "Hardscaping",
    date: "Feb 18, 2026",
    image: img1,
  },
  {
    id: 2,
    title: "Outdoor Kitchen Trends for 2026",
    excerpt:
      "From built-in grills to full chef stations, explore the latest outdoor kitchen designs that elevate alfresco entertaining.",
    category: "Outdoor Living",
    date: "Jan 30, 2026",
    image: img2,
  },
  {
    id: 3,
    title: "Seasonal Lawn Care: A Year-Round Calendar",
    excerpt:
      "Keep your Upstate SC lawn lush with our month-by-month maintenance guide tailored to the Piedmont climate.",
    category: "Lawn Care",
    date: "Jan 12, 2026",
    image: img3,
  },
];

const latestArticles: Article[] = [
  {
    id: 4,
    title: "Paver Patio Maintenance: Protecting Your Investment",
    excerpt:
      "Learn the essential steps to keep your paver patio looking pristine for decades, from sealing to joint sand replacement.",
    category: "Maintenance",
    date: "Dec 28, 2025",
    image: img4,
  },
  {
    id: 5,
    title: "Landscape Lighting Tips for Curb Appeal",
    excerpt:
      "Strategic lighting placement can dramatically enhance your home's exterior beauty and security after dark.",
    category: "Design Tips",
    date: "Dec 10, 2025",
    image: img5,
  },
  {
    id: 6,
    title: "Drainage Solutions Every Homeowner Should Know",
    excerpt:
      "Prevent costly water damage with proven drainage techniques, from French drains to grading adjustments.",
    category: "Drainage",
    date: "Nov 22, 2025",
    image: img6,
  },
];

const ArticleCard = ({ article, large = false }: { article: Article; large?: boolean }) => (
  <div
    className={`group bg-cream rounded-xl overflow-hidden border border-gold/10 hover:shadow-lg transition-shadow ${
      large ? "flex flex-col h-full" : ""
    }`}
  >
    <div className={`overflow-hidden ${large ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className={`p-5 ${large ? "flex-1 flex flex-col" : ""}`}>
      <div className="flex items-center gap-3 mb-3">
        <Badge className="bg-gold/15 text-gold border-gold/30 hover:bg-gold/25 text-xs font-sans uppercase tracking-wider">
          {article.category}
        </Badge>
        <span className="text-xs text-muted-foreground font-sans">{article.date}</span>
      </div>
      <h3
        className={`font-serif text-navy leading-snug mb-2 ${
          large ? "text-2xl md:text-3xl" : "text-lg"
        }`}
      >
        {article.title}
      </h3>
      <p className={`text-muted-foreground font-sans text-sm leading-relaxed ${large ? "flex-1" : "line-clamp-2"}`}>
        {article.excerpt}
      </p>
    </div>
  </div>
);

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
          <img src={heroImg} alt="Luxury landscaped backyard" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-secondary-foreground">
            Landscape Insights
          </h1>
          <p className="text-secondary-foreground/70 font-sans mt-2 max-w-lg">
            Expert guidance on design, hardscaping, and outdoor living from our team.
          </p>
        </div>
      </section>

      {/* Popular Articles — Bento */}
      <section className="bg-cream-alt py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-navy mb-8">Popular Articles</h2>
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
          <h2 className="font-serif text-3xl text-navy mb-8">Latest Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Articles;
