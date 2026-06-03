import React from "react";
import ScrollReveal from "./ScrollReveal";
import SectionTag from "./SectionTag";

interface SplitPanelProps {
  tag?: string;
  title?: string;
  titleAccent?: string;
  body?: React.ReactNode;
  side?: "left" | "right";
  alt?: boolean;
  dark?: boolean;
  id?: string;
  className?: string;
  children?: React.ReactNode;
  paddingY?: string;
}

export default function SplitPanel({
  tag,
  title,
  titleAccent,
  body,
  side = "left",
  alt = false,
  dark = false,
  id,
  className = "",
  children,
  paddingY = "py-14 md:py-20",
}: SplitPanelProps) {
  const bg = dark
    ? "bg-navbar text-page bg-dark-grain"
    : alt
    ? "bg-platinum text-ink"
    : "bg-page text-ink bg-warm-grain";

  const textCol = (
    <ScrollReveal direction={side === "left" ? "left" : "right"}>
      <div className={`max-w-xl ${side === "left" ? "" : "lg:ml-auto"}`}>
        {tag && <SectionTag hero={dark}>{tag}</SectionTag>}
        {title && (
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="text-gradient-gold">{titleAccent}</span>
              </>
            )}
          </h2>
        )}
        <div className="divider-gold-left" />
        {body && (
          <div className={`text-base md:text-lg ${dark ? "text-page/80" : "text-ink-muted"} space-y-4`}>
            {body}
          </div>
        )}
      </div>
    </ScrollReveal>
  );

  const contentCol = (
    <ScrollReveal direction={side === "left" ? "right" : "left"} delay={120}>
      <div>{children}</div>
    </ScrollReveal>
  );

  return (
    <section id={id} className={`relative ${bg} ${paddingY} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {side === "left" ? (
            <>
              {textCol}
              {contentCol}
            </>
          ) : (
            <>
              {contentCol}
              {textCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
