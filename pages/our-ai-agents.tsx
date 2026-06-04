import Link from "next/link";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import CTABanner from "@amitkk/basic/static/CTABanner";

type Agent = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  desc: string;
  highlights: string[];
  bestFor: string;
  href: string;
};

const agents: Agent[] = [
  {
    slug: "savi-ap",
    name: "Savi-AP",
    tagline: "Your always-on AI Accounts Payable agent — from invoice arrival to payment dispatch.",
    category: "AI Accounts Payable Agent",
    desc: "Savi-AP automates the entire accounts payable lifecycle. It fetches and reads invoices across email, WhatsApp, vendor portals and uploads, performs 3-way PO matching, creates vendor records and posts entries into your ERP, runs MSME and GST 2A/2B compliance checks, and schedules payments — with near-zero human touch.",
    highlights: [
      "Omni-channel invoice ingestion (Email, WhatsApp, portals, OCR + NLP)",
      "Automated 3-way PO matching with real-time exception flagging",
      "Auto vendor creation, expense classification and ledger posting",
      "MSME, GST 2A/2B and TDS compliance monitoring built in",
      "Universal ERP compatibility — SAP, Navision, Zoho, Odoo, QuickBooks, Tally",
    ],
    bestFor: "Finance and AP teams drowning in manual invoice processing, PO matching and India-specific compliance checks.",
    href: "/savi-ap",
  },
];

export default function OurAiAgents() {
  return (
    <>
      <Hero
        tag="AI Agents"
        title="Intelligent agents built for"
        titleAccent="finance & operations"
        tagline="Purpose-built AI agents that accelerate business performance — running the full lifecycle of finance and operations processes autonomously, with compliance and ERP integration built in from day one."
        variant="dark"
        backgroundImage="/images/static/banners/business-consulting-web-banner.jpg"
        ctas={[
          { label: "Talk to Our Team", href: "/contact-us" },
          { label: "Tech Consulting", href: "/tech-consulting", variant: "outline" },
        ]}
      />

      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12">
          {agents.map((a, idx) => (
            <ScrollReveal key={a.slug} direction={idx % 2 === 0 ? "left" : "right"}>
              <div
                className={`bg-surface rounded-2xl border border-border shadow-sm overflow-hidden grid grid-cols-12 gap-0 ${
                  idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="col-span-12 lg:col-span-5 relative min-h-[240px] md:min-h-[300px] lg:min-h-full bg-navbar bg-dark-grain flex items-center justify-center p-8">
                  <div className="text-center text-page">
                    <SectionTag hero>{a.category}</SectionTag>
                    <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mt-2">{a.name}</p>
                    <div className="divider-gold mx-auto" />
                    <p className="text-sm md:text-base text-page/80 max-w-sm mx-auto">{a.tagline}</p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-7 p-6 md:p-8 lg:p-10">
                  <p className="text-sm md:text-base text-ink-muted mb-6">{a.desc}</p>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-3">What it does</h4>
                  <ul className="space-y-2 mb-6">
                    {a.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm md:text-base text-ink">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gold text-gold text-xs font-bold flex-shrink-0">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-platinum rounded-xl p-4 md:p-5 mb-6 border border-border">
                    <p className="text-xs uppercase tracking-widest text-ink-faint mb-1">Best fit</p>
                    <p className="text-sm md:text-base text-ink">{a.bestFor}</p>
                  </div>
                  <Link href={a.href} className="btn-primary">
                    Explore {a.name}<span aria-hidden>→</span>
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
            <ScrollReveal><SectionTag>Why Savitron.ai AI Agents</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Automation that <span className="text-gradient-gold">understands India</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { title: "Compliance-native", desc: "MSME timelines, GST 2A/2B reconciliation and TDS checks are built in — not bolted on as an afterthought." },
              { title: "ERP-agnostic", desc: "Plug into SAP, Navision, Zoho, Odoo, QuickBooks or Tally without re-architecting your finance stack." },
              { title: "Consulting-led, product-grade", desc: "Each agent is shaped by real finance engagements, then engineered to product-grade reliability." },
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
        title="Want to put an AI agent"
        titleAccent="to work?"
        body="Tell us where your team loses time to manual, repetitive work — we'll show you what an agent can take off their plate."
        primaryCta={{ label: "Talk to Our Team", href: "/contact-us" }}
        secondaryCta={{ label: "All Products", href: "/our-products" }}
      />
    </>
  );
}
