import Link from "next/link";
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
    tagline: "Automated reconciliation, controls and audit support for modern finance teams.",
    category: "Finance Automation",
    desc: "Skimaa cuts the grind out of month-end. It plugs into your ERP, banks, payment processors and marketplaces to reconcile millions of transactions, surface exceptions in real time and produce audit-ready trails — without spreadsheets.",
    highlights: [
      "Bank, ERP and payment-gateway reconciliation",
      "Configurable matching rules with AI-assisted exception handling",
      "Audit-ready trails, evidence and reports",
      "SOC-2 friendly access controls",
    ],
    bestFor: "Finance controllers, internal audit teams, and CFOs running high-volume transaction businesses.",
    href: "/skimaa",
  },
  {
    slug: "zoho-tech-partner",
    name: "Zoho Tech Partner",
    tagline: "Implementation, customisation and managed support for the full Zoho One suite.",
    category: "Business Platform",
    desc: "As a Zoho Authorised Partner, we implement, customise and run Zoho One stacks for growing businesses — CRM, Books, People, Desk, Creator, Inventory, Analytics and more — all stitched into one operating system.",
    highlights: [
      "Zoho One end-to-end implementation",
      "Custom apps and workflows on Zoho Creator",
      "API integrations with banks, ERPs and third-party tools",
      "Managed support, training and admin services",
    ],
    bestFor: "SMEs and scaling businesses that want a unified, cost-effective business platform.",
    href: "/zoho-tech-partner",
  },
  {
    slug: "hostops",
    name: "HostOps",
    tagline: "Managed hosting, infrastructure and DevOps — without an internal SRE team.",
    category: "Cloud & Infrastructure",
    desc: "HostOps handles your cloud hosting, application infrastructure, security and observability so your team can ship features, not babysit servers. Whether AWS, Azure, GCP or hybrid — we cover provisioning, monitoring, backups and incident response.",
    highlights: [
      "Managed cloud hosting (AWS / Azure / GCP)",
      "CI/CD pipelines and DevOps automation",
      "Security hardening, patching and backups",
      "24x7 monitoring with SLA-backed support",
    ],
    bestFor: "Tech, SaaS and growing digital businesses that need uptime without the SRE headcount.",
    href: "/hostops",
  },
  {
    slug: "etcr",
    name: "eTCR",
    tagline: "Intelligent service operations and collection reconciliation for pan-India service networks.",
    category: "Service Operations",
    desc: "eTCR unifies service call management, engineer closures, cash and UPI collection tracking, and automated reconciliation into one operational backbone — built for high-volume service networks across mobile, AC, TV, appliance and electronics service centres.",
    highlights: [
      "Bulk call upload, branch allocation, engineer assignment",
      "Mobile, geo-tagged engineer closures with digital proof",
      "Cash & UPI collection tracking per call, per engineer",
      "Automated reconciliation engine — leakage stops at source",
    ],
    bestFor: "Pan-India service operations teams managing high-volume field calls and collections.",
    href: "/etcr",
  },
];

export default function OurProducts() {
  return (
    <>
      <Hero
        tag="Our Portfolio"
        title="Products built from"
        titleAccent="real consulting battles"
        tagline="Every product in the Savitron.ai portfolio was born inside a client engagement — solving a problem we kept seeing again and again."
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
                  <Link href={p.href} className="btn-primary">
                    Explore {p.name}<span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Why Savitron.ai Products</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Built to <span className="text-gradient-gold">work together</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { title: "One trusted partner", desc: "Buy from the team that supports you. Same accountability across every product in the stack." },
              { title: "Integrated by default", desc: "Skimaa, Zoho, HostOps and eTCR share data, identity and reporting — not separate silos." },
              { title: "Consulting-led, product-grade", desc: "Each product is honed by real client work, then engineered to product-grade reliability." },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-7">
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-2">{c.title}</h3>
                  <p className="text-sm md:text-base text-ink-muted">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        tag="Let's talk"
        title="Not sure which product"
        titleAccent="fits?"
        body="Tell us about your operations — we'll point you to what actually moves the needle."
        primaryCta={{ label: "Talk to Our Team", href: "/contact-us" }}
        secondaryCta={{ label: "All Services", href: "/business-consulting" }}
      />
    </>
  );
}
