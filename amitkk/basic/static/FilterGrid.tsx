import React, { useMemo, useState } from "react";

export interface FilterGridItem {
  id: string;
  group?: string;
  searchText: string;
  render: (open: () => void) => React.ReactNode;
  detail?: React.ReactNode;
}

interface FilterGridProps {
  items: FilterGridItem[];
  groups?: string[];
  searchPlaceholder?: string;
  emptyTitle?: string;
  emptyBody?: string;
  className?: string;
  showSearch?: boolean;
  countLabel?: string;
}

export default function FilterGrid({
  items,
  groups,
  searchPlaceholder = "Search…",
  emptyTitle = "Nothing matches your filters",
  emptyBody = "Try clearing filters or searching by a different term.",
  className = "",
  showSearch = true,
  countLabel = "results",
}: FilterGridProps) {
  const allGroups = useMemo(() => (groups ? ["All", ...groups] : ["All"]), [groups]);
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<string>("All");
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((it) => {
      if (group !== "All" && it.group !== group) return false;
      if (!q) return true;
      return it.searchText.toLowerCase().includes(q);
    });
  }, [items, query, group]);

  const active = activeId ? items.find((i) => i.id === activeId) : null;

  return (
    <div className={`${className}`}>
      {(showSearch || allGroups.length > 1) && (
        <div className="bg-surface rounded-2xl shadow-sm border border-border p-4 md:p-6 mb-8 md:mb-10">
          <div className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
            {showSearch && (
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-faint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-page border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-ink text-sm"
                />
              </div>
            )}
            {allGroups.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {allGroups.map((g) => {
                  const isActive = g === group;
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGroup(g)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                        isActive
                          ? "bg-navbar text-page border-gold"
                          : "bg-page text-ink-muted border-border hover:border-gold hover:text-gold"
                      }`}
                    >
                      {g}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-ink-faint">
            <span>
              Showing <span className="font-semibold text-ink">{filtered.length}</span> of {items.length} {countLabel}
            </span>
            {(query || group !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setGroup("All");
                }}
                className="text-gold hover:underline font-medium"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="bg-surface rounded-2xl border border-dashed border-border p-14 text-center">
          <p className="text-xl text-ink font-semibold mb-2 font-heading">{emptyTitle}</p>
          <p className="text-ink-muted">{emptyBody}</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((it) => (
            <React.Fragment key={it.id}>{it.render(() => setActiveId(it.id))}</React.Fragment>
          ))}
        </div>
      )}

      {active && active.detail && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6 bg-navbar/70 backdrop-blur-sm"
          onClick={() => setActiveId(null)}
        >
          <div
            className="bg-surface w-full md:max-w-3xl max-h-[90vh] overflow-y-auto rounded-t-3xl md:rounded-3xl shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveId(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-navbar/70 text-page hover:bg-navbar flex items-center justify-center backdrop-blur-sm transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {active.detail}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
