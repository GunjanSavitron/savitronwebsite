import Image from "next/image";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import SplitPanel from "@amitkk/basic/static/SplitPanel";
import CTABanner from "@amitkk/basic/static/CTABanner";
import StatsStrip from "@amitkk/basic/static/StatsStrip";

const features = [
  { title: "AI-Driven Scheme Engine", desc: "Algorithms compute the right scheme for every partner — slabs, tiers, growth bonuses, mix-based incentives — without spreadsheets.", icon: "/images/icons/skimaa/reconcile.svg" },
  { title: "Sales Ingestion at Scale", desc: "Pull sales data straight from partners — Excel, CSV, ERP feed or API. Normalise once, compute every cycle.", icon: "/images/icons/skimaa/upload-data.svg" },
  { title: "Configurable Scheme Logic", desc: "Define qualifying SKUs, tenure rules, growth-over-LY logic and pay-out triggers — no code, no IT tickets.", icon: "/images/icons/skimaa/configure.svg" },
  { title: "Real-Time Computation", desc: "Partners see their projected pay-out as sales come in — no surprises at month-end, no disputes after.", icon: "/images/icons/skimaa/realtime.svg" },
  { title: "Zero Leakage", desc: "Every qualifying sale is computed exactly once against exactly one scheme. No double-paid, no missed pay-outs.", icon: "/images/icons/skimaa/zero-leakage.svg" },
  { title: "Channel Analytics", desc: "Drill into scheme performance by partner, region, SKU and quarter — see which schemes are actually moving sales.", icon: "/images/icons/skimaa/analytics.svg" },
  { title: "Audit-Ready Trails", desc: "Every computation is logged with inputs, rule version and timestamp. Defensible during partner reviews and statutory audits.", icon: "/images/icons/skimaa/audit.svg" },
  { title: "Instant Pay-Out Reports", desc: "Generate partner-wise pay-out statements, credit notes and TDS-ready summaries on a single click.", icon: "/images/icons/skimaa/reports.svg" },
  { title: "Automated Reconciliation", desc: "Match computed pay-outs against accounting entries — close the loop between sales, schemes and books.", icon: "/images/icons/skimaa/automated.svg" },
  { title: "Faster Cycle Time", desc: "Collapse scheme settlement from weeks to days. Partners get paid faster — and so does the relationship.", icon: "/images/icons/skimaa/time.svg" },
];

const segments = [
  {
    level: "01",
    audience: "Brands",
    headline: "Run schemes for your channel partners",
    desc: "Deploy Skimaa as your scheme computation backbone. Define national, zone and SKU-level schemes once, compute against partner sales every cycle, and pay out with zero ambiguity.",
    bullets: [
      "Centralised scheme master across regions and brands",
      "Slab, growth, mix and bundled-scheme logic out of the box",
      "Partner-facing transparency reduces disputes",
    ],
  },
  {
    level: "02",
    audience: "Distributors",
    headline: "Enable scheme computation for your dealers",
    desc: "Roll out Skimaa as a self-serve portal to your dealer network. Brand-funded schemes pass through cleanly, your own distributor schemes layer on top, and dealers see one consolidated pay-out view.",
    bullets: [
      "Layered schemes: brand + distributor in one engine",
      "Dealer-wise visibility into qualifying sales and projected pay-out",
      "Audit-ready reconciliation between brand claims and dealer payouts",
    ],
  },
  {
    level: "03",
    audience: "Channel Partners & Dealers",
    headline: "Get your schemes computed for you",
    desc: "Sell to your customers, send your sales data to Savitron.ai, and let Skimaa compute every scheme you qualify for — across every brand you carry. No more chasing distributors for clarity.",
    bullets: [
      "Computed pay-outs across all brands you sell",
      "Side-by-side: what you earned vs. what you were paid",
      "Evidence-grade trail for every claim and dispute",
    ],
  },
];

export default function Skimaa() {
  return (
    <>
      <Hero
        tag="Product · Channel Schemes"
        title="Skimaa"
        titleAfter=""
        tagline="AI-driven schemes computation for brands, distributors and channel partners. Take in sales, run the algorithms, pay out the right number — every time."
        variant="dark"
        backgroundImage="/images/static/banners/business-consulting-web-banner.jpg"
        ctas={[
          { label: "Request a Demo", href: "/contact-us" },
          { label: "Talk to Sales", href: "/contact-us", variant: "outline" },
        ]}
      />

      <SplitPanel
        tag="Product"
        title="Meet"
        titleAccent="Skimaa"
        side="right"
        body={
          <>
            <p>An AI-driven schemes computation engine, purpose-built for the way sales channels actually run. Ingest sales from partners, configure scheme logic once, and let Skimaa compute every qualifying pay-out — with a full audit trail and partner-facing transparency.</p>
            <ul className="space-y-3 mt-2">
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">AI-driven scheme algorithms</strong> — slabs, growth, mix and bundled logic, computed in one engine.</span></li>
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Built for the full channel</strong> — brands, distributors and dealers all plug into the same backbone.</span></li>
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Settlement in days, not weeks</strong> — partners get paid faster, disputes drop, relationships stay healthy.</span></li>
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Audit-ready by design</strong> — every computation logged with inputs, rule version and timestamp.</span></li>
            </ul>
          </>
        }
      >
        <div className="w-full">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border shadow-sm bg-platinum">
            <Image
              src="/images/static/banners/Skimaa_logo.jpeg"
              alt="Skimaa — AI-driven schemes computation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <a
            href="https://skimaa.savitursolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center mt-4"
          >
            Try Live Demo<span aria-hidden>→</span>
          </a>
        </div>
      </SplitPanel>

      <SplitPanel
        tag="Overview"
        title="Sales in."
        titleAccent="Schemes computed."
        side="left"
        alt
        body={
          <>
            <p>Skimaa is purpose-built for one of the messiest problems in distribution: turning partner sales into accurate scheme pay-outs. Brands, distributors and dealers all run schemes — slab-based, growth-linked, SKU-mix, bundled — and most of it still lives in spreadsheets, email chains and disputed reconciliations.</p>
            <p>Skimaa replaces that with an AI-driven engine. Take in sales from your partners, configure your scheme logic once, and let Skimaa compute every qualifying pay-out — with a full audit trail, partner-facing transparency and reports that pay out in days, not weeks.</p>
          </>
        }
      >
        <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border">
          <div className="grid grid-cols-2 gap-4">
            {features.slice(0, 4).map((f) => (
              <div key={f.title} className="bg-page rounded-xl p-4 text-center border border-border card-hover">
                <Image src={f.icon} alt={f.title} width={40} height={40} className="mx-auto mb-2" />
                <p className="text-sm font-medium text-ink">{f.title}</p>
              </div>
            ))}
          </div>
        </div>
      </SplitPanel>

      {/* Who it's for — 3-tier channel segmentation */}
      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Who it&apos;s for</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Built for every tier of the <span className="text-gradient-gold">channel</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto mt-3">Whether you set the schemes, pass them through or earn against them — Skimaa fits where you sit in the chain.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
            {segments.map((s, i) => (
              <ScrollReveal key={s.audience} delay={i * 80}>
                <div className="relative card-hover h-full bg-surface rounded-2xl border border-border p-6 md:p-7">
                  <span className="absolute -top-4 left-6 px-3 py-0.5 rounded-full bg-navbar text-gold text-xs font-bold tracking-widest border border-gold/40">{s.level}</span>
                  <p className="text-xs uppercase tracking-widest text-gold mb-2 mt-2">{s.audience}</p>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-ink mb-3 leading-tight">{s.headline}</h3>
                  <p className="text-sm md:text-base text-ink-muted mb-4">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink">
                        <span className="text-gold mt-1.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Capabilities</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Built for how schemes <span className="text-gradient-gold">actually run</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto mt-3">Every feature in Skimaa solves a problem you&apos;ve hit in scheme settlement — from messy partner data to disputed pay-outs.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={(i % 5) * 60}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 mb-4">
                    <Image src={f.icon} alt={f.title} width={24} height={24} />
                  </span>
                  <h3 className="font-heading text-base md:text-lg font-semibold text-ink mb-2">{f.title}</h3>
                  <p className="text-sm text-ink-muted">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>How it works</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                How Skimaa <span className="text-gradient-gold">works</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { step: "01", title: "Ingest Partner Sales", desc: "Pull sales from partner ERPs, Excel files, distributor portals or your own DMS. Skimaa normalises and validates as it ingests.", icon: "/images/icons/skimaa/upload-data.svg" },
              { step: "02", title: "Apply Scheme Algorithms", desc: "Skimaa runs every active scheme against qualifying sales — slabs, growth, mix, bundled — using AI to resolve overlaps and edge cases.", icon: "/images/icons/skimaa/configure.svg" },
              { step: "03", title: "Compute & Pay Out", desc: "Partner-wise pay-out statements, credit notes and audit-ready reports — generated automatically, on your settlement cycle.", icon: "/images/icons/skimaa/reports.svg" },
            ].map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 80}>
                <div className="relative card-hover h-full bg-surface rounded-2xl p-6 md:p-8 border border-border text-center">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-navbar text-gold text-xs font-bold tracking-widest border border-gold/40">{p.step}</span>
                  <Image src={p.icon} alt={p.title} width={56} height={56} className="mx-auto mb-4" />
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-2">{p.title}</h3>
                  <p className="text-sm md:text-base text-ink-muted">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsStrip
        tag="Why Skimaa"
        title="The numbers that"
        titleAccent="matter"
        variant="dark"
        items={[
          { value: "Days", label: "Settlement, not weeks" },
          { value: "100%", label: "Audit-ready computation" },
          { value: "0", label: "Spreadsheets in the loop" },
        ]}
      />

      <CTABanner
        tag="See it live"
        title="See Skimaa"
        titleAccent="in action"
        body="Book a 30-minute walkthrough with our product team and see how Skimaa fits your channel — whether you're a brand, a distributor or a dealer."
        primaryCta={{ label: "Request a Demo", href: "/contact-us" }}
        secondaryCta={{ label: "All Products", href: "/our-products" }}
      />
    </>
  );
}
