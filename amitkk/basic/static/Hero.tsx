import React from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import SectionTag from "./SectionTag";

export interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

export interface HeroStat {
  value: string;
  label: string;
}

interface HeroProps {
  tag?: string;
  title: string;
  titleAccent?: string;
  titleAfter?: string;
  tagline?: string;
  ctas?: HeroCTA[];
  variant?: "dark" | "light";
  backgroundImage?: string;
  backgroundVideo?: string;
  stats?: HeroStat[];
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
}

export default function Hero({
  tag,
  title,
  titleAccent,
  titleAfter,
  tagline,
  ctas,
  variant = "dark",
  backgroundImage,
  backgroundVideo,
  stats,
  align = "left",
  size = "md",
}: HeroProps) {
  // Shared hero band height — matches the home page video so every page lines up.
  const heroBandHeight = "h-[280px] md:h-[400px] lg:h-[calc(100vh-160px)] lg:max-h-[520px]";

  // When a banner video is provided, render video-only banner with NO overlay text.
  if (backgroundVideo) {
    return (
      <section className={`relative w-full overflow-hidden bg-navbar ${heroBandHeight}`}>
        <video
          className="w-full h-full object-cover object-center block"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label=""
        />
      </section>
    );
  }

  // When a banner image is provided, render image-only banner with NO overlay text.
  if (backgroundImage) {
    return (
      <section className={`relative w-full overflow-hidden bg-navbar ${heroBandHeight}`}>
        <img src={backgroundImage} alt="" className="w-full h-full object-cover object-center block" />
      </section>
    );
  }

  // Text-only hero (used when no banner image is provided).
  const isDark = variant === "dark";
  const heightCls = size === "lg" ? "min-h-[560px] md:min-h-[640px]" : size === "sm" ? "min-h-[300px] md:min-h-[360px]" : "min-h-[420px] md:min-h-[520px]";
  const containerAlign = align === "center" ? "items-center text-center" : "items-start text-left";
  const dividerCls = align === "center" ? "divider-gold" : "divider-gold-left";

  return (
    <section className={`relative overflow-hidden ${isDark ? "bg-navbar text-page bg-dark-grain" : "bg-page text-ink bg-warm-grain"} ${heightCls}`}>
      <div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 h-full">
        <div className={`flex flex-col justify-center h-full ${containerAlign}`}>
          {tag && (
            <ScrollReveal>
              <SectionTag hero={isDark}>{tag}</SectionTag>
            </ScrollReveal>
          )}
          <ScrollReveal delay={80}>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl">
              {title}{" "}
              {titleAccent && <span className="text-gradient-gold">{titleAccent}</span>}
              {titleAfter && <span> {titleAfter}</span>}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <div className={dividerCls} />
          </ScrollReveal>
          {tagline && (
            <ScrollReveal delay={200}>
              <p className={`max-w-2xl text-base md:text-lg ${isDark ? "text-page/80" : "text-ink-muted"} mt-2`}>
                {tagline}
              </p>
            </ScrollReveal>
          )}
          {ctas && ctas.length > 0 && (
            <ScrollReveal delay={260}>
              <div className={`mt-6 md:mt-8 flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}>
                {ctas.map((c) => (
                  <Link key={c.href} href={c.href} className={c.variant === "outline" ? "btn-outline" : "btn-primary"}>
                    {c.label}
                    <span aria-hidden>→</span>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          )}

          {stats && stats.length > 0 && (
            <ScrollReveal delay={320}>
              <div className={`mt-10 md:mt-14 grid grid-cols-2 ${stats.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3"} gap-4 md:gap-6 ${align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"}`}>
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className={`rounded-2xl p-4 md:p-5 text-center border ${isDark ? "bg-white/5 border-gold/25" : "bg-surface border-border"}`}
                  >
                    <p className="font-heading text-2xl md:text-3xl font-bold text-gradient-gold">{s.value}</p>
                    <p className={`text-xs md:text-sm mt-1 ${isDark ? "text-page/70" : "text-ink-muted"}`}>{s.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
