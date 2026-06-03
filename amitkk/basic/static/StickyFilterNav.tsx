import React from "react";

export interface FilterNavItem {
  id: string;
  label: string;
}

interface StickyFilterNavProps {
  items: FilterNavItem[];
  className?: string;
}

export default function StickyFilterNav({ items, className = "" }: StickyFilterNavProps) {
  return (
    <nav className={`sticky top-20 z-30 bg-page/95 backdrop-blur-md border-b border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium border border-border text-ink-muted hover:border-gold hover:text-gold transition-colors bg-surface"
            >
              {it.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
