import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import CTABanner from "@amitkk/basic/static/CTABanner";

type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  desc: string;
  highlights: string[];
  bestFor: string;
  href: string;
};

const products: Product[] = [
  {
    slug: "skimaa",
    name: "Skimaa",
    tagline: "An AI-driven schemes computation engine, purpose-built for the way sales channels actually run.",
    category: "Finance Automation",
    desc: "Ingest sales from partners, configure scheme logic once, and let Skimaa compute every qualifying pay-out — with a full audit trail and partner-facing transparency.",
    highlights: [
      "AI-driven scheme algorithms — slabs, growth, mix and bundled logic, computed in one engine",
      "Built for the full channel — brands, distributors and dealers all plug into the same backbone",
      "Settlement in days, not weeks — partners get paid faster, disputes drop, relationships stay healthy",
      "Audit-ready by design — every computation logged with inputs, rule version and timestamp",
    ],
    bestFor: "Brands, distributors and sales channel managers running high-volume scheme payouts.",
    href: "https://skimaa.savitursolutions.com/login",
  },
  {
    slug: "hostops",
    name: "HostOps",
    tagline: "An AI-driven operations and finance platform purpose-built for the hospitality industry.",
    category: "Hospitality Intelligence",
    desc: "From front-of-house transactions to owner-share settlements, HostOps replaces fragmented systems and email approvals with one unified, audit-ready ecosystem.",
    highlights: [
      "Hospitality-native workflows — built for hotels, resorts, serviced apartments, clubs and restaurants",
      "Approval-first architecture — every transaction logged, routed and audit-ready by default",
      "Real-time financial control — live P&L, cash flow and budget variance across every property",
      "Owner settlement engine — algorithmic, multi-owner ready, defensible at every payout",
    ],
    bestFor: "Hotel owners, hospitality groups and property managers who need financial control without the admin overhead.",
    href: "https://hostops.savitursolutions.com/login",
  },
];

export default function OurProducts() {
  return (
    <>
      <Hero
        tag="Our Portfolio"
        title="Products built from"
        titleAccent="real consulting battles"
        tagline="Every product in the Savitur portfolio was born inside a client engagement — solving a problem we kept seeing again and again."
        variant="dark"
        backgroundVideo="/video/PRODUCTS.mp4"
        ctas={[
          { label: "Talk to Our Team", href: "/contact-us" },
          { label: "Tech Consulting", href: "/tech-consulting", variant: "outline" },
        ]}
      />

      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12">
          {products.map((p, idx) => (
            <ScrollReveal key={p.slug} direction={idx % 2 === 0 ? "left" : "right"}>
              <div
                className={`bg-surface rounded-2xl border border-border shadow-sm overflow-hidden grid grid-cols-12 gap-0 ${
                  idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="col-span-12 lg:col-span-5 relative min-h-[240px] md:min-h-[300px] lg:min-h-full bg-navbar bg-dark-grain flex items-center justify-center p-8">
                  <div className="text-center text-page">
                    <SectionTag hero>{p.category}</SectionTag>
                    <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mt-2">{p.name}</p>
                    <div className="divider-gold mx-auto" />
                    <p className="text-sm md:text-base text-page/80 max-w-sm mx-auto">{p.tagline}</p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-7 p-6 md:p-8 lg:p-10">
                  <p className="text-sm md:text-base text-ink-muted mb-6">{p.desc}</p>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-3">What you get</h4>
                  <ul className="space-y-2 mb-6">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm md:text-base text-ink">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gold text-gold text-xs font-bold flex-shrink-0">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-platinum rounded-xl p-4 md:p-5 mb-6 border border-border">
                    <p className="text-xs uppercase tracking-widest text-ink-faint mb-1">Best fit</p>
                    <p className="text-sm md:text-base text-ink">{p.bestFor}</p>
                  </div>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Explore {p.name}<span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTABanner
        tag="Let's talk"
        title="Not sure which product"
        titleAccent="fits?"
        body="Tell us about your operations — we'll point you to what actually moves the needle."
        primaryCta={{ label: "Talk to Our Team", href: "/contact-us" }}
      />
    </>
  );
}
