import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import aaronBadge from "@/assets/aaron-approved-badge.png";
import type { Plant } from "@/hooks/usePlants";

/* ── Search text highlight helper ── */
function Highlight({ text, query }: { text: string; query?: string }) {
  if (!query?.trim()) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="search-highlight">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

interface PlantCardProps {
  plant: Plant;
  index?: number;
  searchQuery?: string;
}

export default function PlantCard({ plant, index = 0, searchQuery }: PlantCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleLoad = useCallback(() => setImgLoaded(true), []);
  const handleError = useCallback(() => setImgError(true), []);

  const showImage = plant.photo_url && !imgError;
  const letter = plant.common_name.charAt(0).toUpperCase();

  return (
    <Link
      to={`/plants/${plant.slug}`}
      role="listitem"
      tabIndex={0}
      aria-label={`${plant.common_name}${plant.botanical_name ? ` — ${plant.botanical_name}` : ""}`}
      className="group bg-card-dark rounded-lg overflow-hidden border border-gold/10 hover:border-gold/40 hover:shadow-[0_4px_20px_-4px_hsl(var(--gold)/0.2)] hover:-translate-y-1 transition-all duration-300 opacity-0 animate-card-in focus-gold"
      style={{ animationDelay: `${Math.min(index, 23) * 40}ms` }}
    >
      {/* Photo */}
      <div className="aspect-[4/3] overflow-hidden bg-card-dark relative">
        {showImage ? (
          <>
            {/* Shimmer placeholder */}
            {!imgLoaded && (
              <div className="absolute inset-0 shimmer-bg animate-shimmer" />
            )}
            <img
              src={plant.photo_url!}
              alt={plant.common_name}
              loading="lazy"
              onLoad={handleLoad}
              onError={handleError}
              className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-card-dark to-navy flex items-center justify-center">
            <span className="font-serif text-4xl text-gold/30">{letter}</span>
          </div>
        )}
        {/* SC Native Badge */}
        {plant.sc_native && (
          <span className="absolute top-2 right-2 bg-gold text-primary-foreground text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
            SC Native
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 relative">
        {plant.aaron_approved && (
          <img src={aaronBadge} alt="Aaron Approved" className="absolute top-3 right-3 h-10 sm:h-14 w-auto object-contain" />
        )}

        {plant.plant_type && (
          <p className="text-[10px] uppercase tracking-[0.15em] text-gold font-sans font-medium mb-1 pr-12 sm:pr-16">
            {plant.plant_type}
          </p>
        )}

        <h3 className="font-serif text-base text-secondary-foreground group-hover:text-gold transition-colors leading-tight pr-16">
          <Highlight text={plant.common_name} query={searchQuery} />
        </h3>

        {plant.botanical_name && (
          <p className="text-secondary-foreground/40 text-xs italic mt-0.5 font-sans pr-16">
            <Highlight text={plant.botanical_name} query={searchQuery} />
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {plant.sun_category && (
            <span className="text-[10px] border border-gold/15 text-secondary-foreground/50 px-2 py-0.5 rounded-full font-sans">
              {plant.sun_category}
            </span>
          )}
          {plant.water_category && (
            <span className="text-[10px] border border-gold/15 text-secondary-foreground/50 px-2 py-0.5 rounded-full font-sans">
              {plant.water_category}
            </span>
          )}
          {plant.maintenance_level && (
            <span className="text-[10px] border border-gold/15 text-secondary-foreground/50 px-2 py-0.5 rounded-full font-sans">
              {plant.maintenance_level}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
