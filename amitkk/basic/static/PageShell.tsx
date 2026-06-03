import React from "react";
import Hero, { HeroCTA, HeroStat } from "./Hero";
import CTABanner from "./CTABanner";

interface PageShellProps {
  hero: {
    tag?: string;
    title: string;
    titleAccent?: string;
    titleAfter?: string;
    tagline?: string;
    ctas?: HeroCTA[];
    variant?: "dark" | "light";
    backgroundImage?: string;
    stats?: HeroStat[];
  };
  cta?: {
    tag?: string;
    title: string;
    titleAccent?: string;
    body?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
  hideCta?: boolean;
  children: React.ReactNode;
}

export default function PageShell({ hero, cta, hideCta = false, children }: PageShellProps) {
  return (
    <>
      <Hero {...hero} />
      {children}
      {!hideCta && (
        <CTABanner
          tag={cta?.tag}
          title={cta?.title ?? "Ready to move forward?"}
          titleAccent={cta?.titleAccent ?? "Let's talk."}
          body={cta?.body ?? "Tell us about your challenge — we'll show you the highest-leverage path forward."}
          primaryCta={cta?.primaryCta}
          secondaryCta={cta?.secondaryCta}
        />
      )}
    </>
  );
}
