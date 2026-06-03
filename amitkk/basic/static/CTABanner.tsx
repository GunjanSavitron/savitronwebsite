import React from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import SectionTag from "./SectionTag";

interface CTABannerProps {
  tag?: string;
  title: string;
  titleAccent?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTABanner({
  tag = "Let's Talk",
  title,
  titleAccent,
  body,
  primaryCta = { label: "Engage Us", href: "/contact-us" },
  secondaryCta,
}: CTABannerProps) {
  return (
    <section className="relative bg-navbar bg-dark-grain text-page overflow-hidden">
      <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-gold/5 blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <ScrollReveal>
          <SectionTag hero>{tag}</SectionTag>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            {title}
            {titleAccent && <> <span className="text-gradient-gold">{titleAccent}</span></>}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <div className="divider-gold" />
        </ScrollReveal>
        {body && (
          <ScrollReveal delay={200}>
            <p className="text-page/80 max-w-2xl mx-auto text-base md:text-lg">{body}</p>
          </ScrollReveal>
        )}
        <ScrollReveal delay={260}>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label}
              <span aria-hidden>→</span>
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-outline">
                {secondaryCta.label}
                <span aria-hidden>→</span>
              </Link>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
