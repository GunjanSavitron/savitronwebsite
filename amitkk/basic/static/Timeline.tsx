import React from "react";
import ScrollReveal from "./ScrollReveal";
import SectionTag from "./SectionTag";

export interface TimelineEvent {
  year: string;
  title: string;
  desc?: string;
}

interface TimelineProps {
  tag?: string;
  title?: string;
  titleAccent?: string;
  events: TimelineEvent[];
}

export default function Timeline({ tag, title, titleAccent, events }: TimelineProps) {
  return (
    <section className="relative bg-platinum text-ink py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {(tag || title) && (
          <div className="text-center mb-10 md:mb-14">
            {tag && (
              <ScrollReveal>
                <SectionTag>{tag}</SectionTag>
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

        <ol className="relative border-l border-gold/30 ml-3">
          {events.map((e, i) => (
            <ScrollReveal key={`${e.year}-${i}`} delay={i * 80}>
              <li className="mb-8 ml-6">
                <span className="absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gold ring-4 ring-platinum" />
                <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">{e.year}</p>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-ink mb-2">{e.title}</h3>
                {e.desc && <p className="text-sm md:text-base text-ink-muted">{e.desc}</p>}
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
