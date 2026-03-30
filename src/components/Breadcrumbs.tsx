import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: Props) {
  return (
    <nav aria-label="Breadcrumb" className={`font-sans text-xs tracking-wider ${className}`}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3 w-3 text-gold/40 shrink-0" />}
            {item.href && i < items.length - 1 ? (
              <Link to={item.href} className="text-gold/70 hover:text-gold transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-secondary-foreground/50 truncate max-w-[200px]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
