import { X, Star } from "lucide-react";

interface FilterState {
  native: boolean;
  aaron_approved: boolean;
  categories: string[];
  types: string[];
  sun: string[];
  water: string[];
  maintenance: string[];
}

interface PlantFilterSidebarProps {
  filters: FilterState;
  onToggle: (group: keyof Omit<FilterState, "native">, value: string) => void;
  onNativeToggle: (native: boolean) => void;
  onClear: () => void;
  counts?: { total: number; filtered: number };
}

const CATEGORIES = [
  "Shade Trees", "Ornamental/Flowering Trees", "Evergreen Trees",
  "Flowering Shrubs", "Evergreen Shrubs", "Native Plants & Shrubs",
  "Ornamental Grasses", "Perennials", "Annuals", "Ground Covers",
  "Vines & Climbers", "Deer Resistant", "Drought Tolerant",
  "Poolside/Water-Tolerant", "Shade-Loving Plants",
];

const PLANT_TYPES = [
  "Shade Tree", "Ornamental/Flowering Tree", "Evergreen Tree",
  "Flowering Shrub", "Evergreen Shrub", "Native Shrub",
  "Ornamental Grass", "Perennial", "Annual", "Ground Cover", "Vine",
];

const SUN_OPTIONS = ["Full Sun", "Part Sun/Shade", "Shade"];
const WATER_OPTIONS = ["Low", "Low to Moderate", "Moderate", "High"];
const MAINTENANCE_OPTIONS = ["Low", "Medium", "High"];

function ChipGroup({
  label,
  options,
  selected,
  groupKey,
  onToggle,
}: {
  label: string;
  options: string[];
  selected: string[];
  groupKey: keyof Omit<FilterState, "native">;
  onToggle: (group: keyof Omit<FilterState, "native">, value: string) => void;
}) {
  return (
    <div role="group" aria-label={`Filter by ${label}`}>
      <p className="text-[10px] uppercase tracking-[0.15em] text-secondary-foreground/50 font-sans font-medium mb-2">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const active = selected.includes(opt);
          return (
            <button
              key={opt}
              onClick={() => onToggle(groupKey, opt)}
              role="checkbox"
              aria-checked={active}
              aria-label={opt}
              className={`text-xs px-2.5 py-1 rounded-full border transition-all font-sans active:scale-95 focus-gold ${
                active
                  ? "bg-gold text-primary-foreground border-gold font-medium"
                  : "border-gold/20 text-secondary-foreground/60 hover:border-gold/40 hover:text-secondary-foreground/80"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const hasActiveFilters = (f: FilterState) =>
  f.native || f.categories.length > 0 || f.types.length > 0 || f.sun.length > 0 || f.water.length > 0 || f.maintenance.length > 0;

export default function PlantFilterSidebar({ filters, onToggle, onNativeToggle, onClear }: PlantFilterSidebarProps) {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg text-gold">Filters</h3>
        {hasActiveFilters(filters) && (
          <button
            onClick={onClear}
            className="text-xs text-secondary-foreground/40 hover:text-gold transition-colors font-sans flex items-center gap-1 focus-gold"
          >
            <X className="h-3 w-3" /> Clear All
          </button>
        )}
      </div>

      {/* SC Native Toggle */}
      <div role="radiogroup" aria-label="Filter by SC Native status">
        <p className="text-[10px] uppercase tracking-[0.15em] text-secondary-foreground/50 font-sans font-medium mb-2">
          SC Native
        </p>
        <div className="flex gap-1">
          {[false, true].map((val) => (
            <button
              key={String(val)}
              onClick={() => onNativeToggle(val)}
              role="radio"
              aria-checked={filters.native === val}
              className={`flex-1 text-xs py-1.5 rounded border transition-all font-sans active:scale-95 focus-gold ${
                filters.native === val
                  ? "bg-gold text-primary-foreground border-gold font-medium"
                  : "border-gold/20 text-secondary-foreground/60 hover:border-gold/40"
              }`}
            >
              {val ? "Native Only" : "All"}
            </button>
          ))}
        </div>
      </div>

      <ChipGroup label="Category" options={CATEGORIES} selected={filters.categories} groupKey="categories" onToggle={onToggle} />
      <ChipGroup label="Plant Type" options={PLANT_TYPES} selected={filters.types} groupKey="types" onToggle={onToggle} />
      <ChipGroup label="Sun" options={SUN_OPTIONS} selected={filters.sun} groupKey="sun" onToggle={onToggle} />
      <ChipGroup label="Water" options={WATER_OPTIONS} selected={filters.water} groupKey="water" onToggle={onToggle} />
      <ChipGroup label="Maintenance" options={MAINTENANCE_OPTIONS} selected={filters.maintenance} groupKey="maintenance" onToggle={onToggle} />
    </div>
  );
}

export type { FilterState };
