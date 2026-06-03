import React from "react";
import ScrollReveal from "./ScrollReveal";
import SectionTag from "./SectionTag";

export interface ValueItem {
  title: string;
  desc: string;
  Icon?: React.ElementType;
}

interface ValuesGridProps {
  tag?: string;
  title?: string;
  titleAccent?: string;
  items: ValueItem[];
  columns?: 3 | 4;
  variant?: "light" | "dark";
}

export default function ValuesGrid({
  tag,
  title,
  titleAccent,
  items,
  columns = 4,
  variant = "light",
}: ValuesGridProps) {
  const isDark = variant === "dark";
  const colsCls = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4";

  return (
    <section className={`relative ${isDark ? "bg-navbar text-page bg-dark-grain" : "bg-page text-ink bg-warm-grain"} py-14 md:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(tag || title) && (
          <div className="text-center mb-10 md:mb-14">
            {tag && (
              <ScrollReveal>
                <SectionTag hero={isDark}>{tag}</SectionTag>
              </ScrollReveal>
            )}
            {title && (
              <ScrollReveal delay={80}>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                  {title}
                  {titleAccent && (
                    <>
                      {" "}
                      <span className="text-gradient-gold">{titleAccent}</span>
                    </>
                  )}
                </h2>
              </ScrollReveal>
            )}
            <ScrollReveal delay={140}>
              <div className="divider-gold" />
            </ScrollReveal>
          </div>
        )}

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${colsCls} gap-5 md:gap-6`}>
          {items.map((it, i) => {
            const Icon = it.Icon;
            return (
              <ScrollReveal key={it.title} delay={i * 80}>
                <div
                  className={`card-hover h-full rounded-2xl border p-5 md:p-6 ${
                    isDark ? "bg-white/5 border-gold/25" : "bg-surface border-border"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gold/40 text-gold">
                      {Icon ? <Icon fontSize="small" /> : <span className="h-2 w-2 rounded-full bg-gold" />}
                    </span>
                    <h3 className={`font-heading text-lg md:text-xl font-semibold ${isDark ? "text-page" : "text-ink"}`}>
                      {it.title}
                    </h3>
                  </div>
                  <p className={`text-sm md:text-base ${isDark ? "text-page/75" : "text-ink-muted"}`}>{it.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
