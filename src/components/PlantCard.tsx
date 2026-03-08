import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import type { Plant } from "@/hooks/usePlants";

export default function PlantCard({ plant }: { plant: Plant }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      to={`/plant-guide/${plant.id}`}
      className="group bg-card-dark rounded-lg overflow-hidden border border-gold/10 hover:border-gold/40 hover:shadow-[0_8px_30px_-12px_hsl(var(--gold)/0.15)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* Photo */}
      <div className="aspect-[4/3] overflow-hidden bg-navy relative">
        {plant.photo_url && !imgError ? (
          <img
            src={plant.photo_url}
            alt={plant.common_name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy to-card-dark flex items-center justify-center">
            <span className="font-serif text-4xl text-gold/30">
              {plant.common_name.charAt(0)}
            </span>
          </div>
        )}
        {/* SC Native Badge */}
        {plant.sc_native && (
          <span className="absolute top-2 right-2 bg-gold text-navy text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
            SC Native
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Plant Type */}
        {plant.plant_type && (
          <p className="text-[10px] uppercase tracking-[0.15em] text-gold font-sans font-medium mb-1">
            {plant.plant_type}
          </p>
        )}

        <h3 className="font-serif text-base text-secondary-foreground group-hover:text-gold transition-colors leading-tight">
          {plant.common_name}
        </h3>

        {plant.botanical_name && (
          <p className="text-secondary-foreground/40 text-xs italic mt-0.5 font-sans">
            {plant.botanical_name}
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
