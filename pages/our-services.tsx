import Link from "next/link";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import CTABanner from "@amitkk/basic/static/CTABanner";

type Service = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  desc: string;
  highlights: string[];
  bestFor: string;
  href: string;
};

const services: Service[] = [
  {
    slug: "business-consulting",
    name: "Business Consulting",
    tagline: "Strategy, finance leadership and operational excellence — for founders, SMEs and growing enterprises.",
    category: "Advisory",
    desc: "Savitron.ai's Business Consulting practice partners with founders and CFOs to build resilient, scalable businesses — from entity set-up and fundraising readiness to virtual CFO support, FP&A and compliance. Tailored playbooks for Startups, Mid-Size and Large organisations.",
    highlights: [
      "Virtual CFO & FP&A for founder-led businesses",
      "Fundraising readiness — model, data room, diligence",
      "Working capital, treasury and audit-ready closes",
      "Group consolidation, M&A and finance transformation",
    ],
    bestFor: "Founders, CFOs and leadership teams who need a finance-domain technology partner that owns outcomes.",
    href: "/business-consulting",
  },
  {
    slug: "tech-consulting",
    name: "Tech Consulting",
    tagline: "Pick the right technology bets — and actually ship them. AI, automation and platforms that earn their place in the P&L.",
    category: "Technology",
    desc: "Our Tech Consulting practice combines deep business understanding with hands-on engineering. We deliver AI solutions, process digitisation, Zoho implementations, hosting, customer communications and custom platforms — as one accountable partner, not a stack of vendors.",
    highlights: [
      "AI Solutions — generative AI, RAG, document intelligence",
      "Process digitisation, workflow automation & RPA",
      "Zoho One implementation and managed support",
      "Cloud hosting, DevOps and custom platform engineering",
    ],
    bestFor: "Founders, CFOs and operations leaders who want technology that moves real metrics — not a science project.",
    href: "/tech-consulting",
  },
  {
    slug: "offshore-consulting",
    name: "Offshore Consulting",
    tagline: "Build your India backbone — GCC setup, finance & fund operations, and cross-border compliance for global firms.",
    category: "Global Delivery",
    desc: "We help US, UK and Middle-East firms set up Global Capability Centers in India, run finance and fund operations from offshore teams, and stay compliant across jurisdictions. Senior, hands-on bench with time-zone aligned coverage and one accountable SLA.",
    highlights: [
      "End-to-end India GCC setup — entity, hiring, vendors",
      "Finance & Accounting Outsourcing (AP/AR, close, MIS)",
      "Fund accounting, NAV, waterfalls, investor reporting",
      "SEC, FCA, FEMA and US-India tax structuring",
    ],
    bestFor: "Global firms — from $50M growth-stage GPs to multi-billion enterprises — building India-based operations.",
    href: "/offshore-consulting",
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    tagline: "Production-grade generative AI, predictive analytics and intelligent automation — engineered for real outcomes.",
    category: "AI · Featured",
    desc: "Part of our Tech Consulting practice, AI Solutions covers four pillars: Generative AI, AI Automation, Predictive Analytics and AI Integration. From enterprise chatbots and document intelligence to forecasting models and MLOps — we ship to production, not demos.",
    highlights: [
      "Enterprise chatbots, RAG and AI copilots",
      "Document intelligence at scale (95%+ accuracy)",
      "Demand, risk and anomaly-detection models",
      "Legacy AI enablement and MLOps",
    ],
    bestFor: "Enterprises that need AI features in production — with monitoring, guardrails and clear ownership.",
    href: "/ai-solutions",
  },
];

export default function OurServices() {
  return (
    <>
      <Hero
        tag="Our Practice"
        title="Consulting built from"
        titleAccent="three decades of corporate experience"
        tagline="AI and Business Performance Acceleration — combining domain expertise, full-stack AI and cloud engineering to deliver measurable outcomes across Business, Tech and Offshore."
        variant="dark"
        backgroundVideo="/video/SERVICES.mp4"
        ctas={[
          { label: "Engage Us", href: "/contact-us" },
          { label: "Our Products", href: "/our-products", variant: "outline" },
        ]}
      />

      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12">
          {services.map((s, idx) => (
            <ScrollReveal key={s.slug} direction={idx % 2 === 0 ? "left" : "right"}>
              <div
                className={`bg-surface rounded-2xl border border-border shadow-sm overflow-hidden grid grid-cols-12 gap-0 ${
                  idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="col-span-12 lg:col-span-5 relative min-h-[240px] md:min-h-[300px] lg:min-h-full bg-navbar bg-dark-grain flex items-center justify-center p-8">
                  <div className="text-center text-page">
                    <SectionTag hero>{s.category}</SectionTag>
                    <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 leading-tight">{s.name}</p>
                    <div className="divider-gold mx-auto" />
                    <p className="text-sm md:text-base text-page/80 max-w-sm mx-auto">{s.tagline}</p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-7 p-6 md:p-8 lg:p-10">
                  <p className="text-sm md:text-base text-ink-muted mb-6">{s.desc}</p>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-3">What we deliver</h4>
                  <ul className="space-y-2 mb-6">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm md:text-base text-ink">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gold text-gold text-xs font-bold flex-shrink-0">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-platinum rounded-xl p-4 md:p-5 mb-6 border border-border">
                    <p className="text-xs uppercase tracking-widest text-ink-faint mb-1">Best fit</p>
                    <p className="text-sm md:text-base text-ink">{s.bestFor}</p>
                  </div>
                  <Link href={s.href} className="btn-primary">
                    Explore {s.name}<span aria-hidden>→</span>
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
            <ScrollReveal>
              <SectionTag>Why Savitron.ai Services</SectionTag>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                One trusted partner, <span className="text-gradient-gold">three practices</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <div className="divider-gold" />
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: "Finance + tech, one team",
                desc: "Our founders bring deep finance domain knowledge and enterprise engineering experience — you get both rigour and velocity, not one or the other.",
              },
              {
                title: "Outcomes, not slide decks",
                desc: "We don't disappear after the strategy session. We own delivery — finance ops, advisory, reporting, regulatory work and technology — under one accountable SLA.",
              },
              {
                title: "Built to compound",
                desc: "Most of our clients stay with us for years. As you scale, we add capacity, sharper consultants and product enablement — without you having to re-vendor.",
              },
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
        title="Not sure where to"
        titleAccent="start?"
        body="Tell us about your business — we'll point you to the practice (or combination) that moves the needle fastest."
        primaryCta={{ label: "Engage Us", href: "/contact-us" }}
        secondaryCta={{ label: "Explore Products", href: "/our-products" }}
      />
    </>
  );
}
