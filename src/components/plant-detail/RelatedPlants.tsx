import { useMemo } from "react";
import { Link } from "react-router-dom";
import type { Plant } from "@/hooks/usePlants";

interface Props {
  current: Plant;
  allPlants: Plant[];
}

/** Deterministic shuffle seeded by plant id so it's stable per page */
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const out = [...arr];
  let s = seed;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function RelatedPlants({ current, allPlants }: Props) {
  const related = useMemo(() => {
    const candidates = allPlants.filter((p) => {
      if (p.id === current.id) return false;
      if (p.plant_type && p.plant_type === current.plant_type) return true;
      if (
        current.guide_categories.length > 0 &&
        p.guide_categories.some((c) => current.guide_categories.includes(c))
      )
        return true;
      return false;
    });

    return seededShuffle(candidates, current.id).slice(0, 6);
  }, [current, allPlants]);

  if (related.length === 0) return null;

  return (
    <section className="bg-navy py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-gold font-serif text-2xl mb-6">Related Plants</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {related.map((plant) => (
            <CompactPlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CompactPlantCard({ plant }: { plant: Plant }) {
  const letter = plant.common_name.charAt(0).toUpperCase();

  return (
    <Link
      to={`/plants/${plant.slug}`}
      className="group bg-card-dark rounded-lg overflow-hidden border border-gold/10 hover:border-gold/40 hover:shadow-[0_4px_20px_-4px_hsl(var(--gold)/0.2)] transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden bg-card-dark relative">
        {plant.photo_url ? (
          <img
            src={plant.photo_url}
            alt={`${plant.common_name}${plant.botanical_name ? ` (${plant.botanical_name})` : ""} — ${plant.plant_type || "plant"} for Upstate SC`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-card-dark to-navy flex items-center justify-center">
            <span className="font-serif text-4xl text-gold/30">{letter}</span>
          </div>
        )}
        {plant.sc_native && (
          <span className="absolute top-2 right-2 bg-gold text-primary-foreground text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
            SC Native
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-serif text-sm text-secondary-foreground group-hover:text-gold transition-colors leading-tight">
          {plant.common_name}
        </h3>
        {plant.botanical_name && (
          <p className="text-secondary-foreground/40 text-xs italic mt-0.5 font-sans">
            {plant.botanical_name}
          </p>
        )}
      </div>
    </Link>
  );
}
