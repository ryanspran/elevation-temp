import { useMemo } from "react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import type { Plant } from "@/hooks/usePlants";

interface Props {
  plant: Plant;
}

const KEYWORD_MAP: Record<string, string[]> = {
  "new-plant-installation": [
    "border", "foundation", "accent", "specimen", "hedge", "screen",
    "mass planting", "mixed border", "container",
  ],
  "irrigation-installation-repair": [
    "irrigation", "water", "moist", "wet", "bog",
  ],
  "landscape-remediation": [
    "erosion", "slope", "bank", "remediation", "restoration",
  ],
  "landscape-lighting": [
    "specimen", "accent", "focal", "night",
  ],
  "sod-and-seeding": [
    "lawn", "turf", "groundcover", "ground cover",
  ],
};

function matchServices(plant: Plant): string[] {
  const text = [
    plant.landscape_use,
    plant.special_features,
    plant.water_needs,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const matched = new Set<string>();

  for (const [slug, keywords] of Object.entries(KEYWORD_MAP)) {
    if (keywords.some((kw) => text.includes(kw))) {
      matched.add(slug);
    }
  }

  // Always include plant installation as a default
  matched.add("new-plant-installation");

  // Cap at 3
  return Array.from(matched).slice(0, 3);
}

export default function RelatedServices({ plant }: Props) {
  const matchedServices = useMemo(() => {
    const slugs = matchServices(plant);
    return slugs
      .map((slug) => services.find((s) => s.slug === slug))
      .filter(Boolean);
  }, [plant]);

  if (matchedServices.length === 0) return null;

  return (
    <section className="bg-navy py-8 md:py-12 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-gold font-serif text-2xl mb-6">Related Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {matchedServices.map((svc) => (
            <Link
              key={svc!.slug}
              to={`/services/${svc!.slug}`}
              className="group bg-card-dark rounded-lg overflow-hidden border border-gold/10 hover:border-gold/40 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={svc!.image}
                  alt={svc!.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-base text-secondary-foreground group-hover:text-gold transition-colors">
                  {svc!.name}
                </h3>
                <p className="text-secondary-foreground/50 text-xs font-sans mt-1 line-clamp-2">
                  {svc!.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
