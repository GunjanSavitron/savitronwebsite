import React from "react";
import ScrollReveal from "./ScrollReveal";
import SectionTag from "./SectionTag";

export interface StatItem {
  value: string;
  label: string;
}

interface StatsStripProps {
  tag?: string;
  title?: string;
  titleAccent?: string;
  items: StatItem[];
  variant?: "dark" | "light";
}

export default function StatsStrip({ tag, title, titleAccent, items, variant = "dark" }: StatsStripProps) {
  const isDark = variant === "dark";
  const cols = items.length >= 4 ? "md:grid-cols-4" : items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <section className={`relative ${isDark ? "bg-navbar text-page bg-dark-grain" : "bg-platinum text-ink bg-warm-grain"} py-14 md:py-20`}>
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

        <ScrollReveal>
          <div className={`grid grid-cols-2 ${cols} gap-4 md:gap-8`}>
            {items.map((s) => (
              <div
                key={s.label}
                className={`rounded-2xl border p-5 md:p-7 text-center ${
                  isDark ? "bg-white/5 border-gold/25" : "bg-surface border-border"
                }`}
              >
                <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold">{s.value}</p>
                <p className={`text-xs md:text-sm mt-2 uppercase tracking-widest ${isDark ? "text-page/70" : "text-ink-muted"}`}>{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
