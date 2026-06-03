import { useState } from "react";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import StickyFilterNav from "@amitkk/basic/static/StickyFilterNav";
import CTABanner from "@amitkk/basic/static/CTABanner";
import StatsStrip from "@amitkk/basic/static/StatsStrip";

type Audience = "Startups" | "Mid-Size" | "Large Enterprise";

const audiences: { key: Audience; tag: string; headline: string; intro: string }[] = [
  {
    key: "Startups",
    tag: "0 — 50 Cr revenue · founder-led",
    headline: "Set the foundation right — so the first scale doesn't break you.",
    intro: "Most early ventures don't fail on the idea — they trip on entity choice, capital structure, cash discipline and missed compliances. We sit beside founders as a fractional finance and strategy team, getting the rails in place before fundraising or scale.",
  },
  {
    key: "Mid-Size",
    tag: "50 — 500 Cr revenue · scaling teams",
    headline: "Professionalise the finance function and unlock the next jump.",
    intro: "At the mid-market stage, the cost of an underbuilt finance function shows up in everything — slower decisions, surprise cash gaps, weak MIS, and exits at unfair valuations. We bring CFO-grade leadership, FP&A rigour, and the systems that make growth predictable.",
  },
  {
    key: "Large Enterprise",
    tag: "500 Cr+ revenue · complex group structures",
    headline: "Strategic CFO advisory, transformation and M&A horsepower.",
    intro: "Large organisations need partners who can operate at board level — across capital allocation, M&A, group consolidation, regulatory complexity and transformation. We work alongside CFO and CXO offices on the moves that change trajectory.",
  },
];

const offerings: Record<Audience, { title: string; desc: string }[]> = {
  Startups: [
    { title: "Company Incorporation & Structuring", desc: "Choosing the right legal vehicle (Pvt Ltd / LLP / OPC), founders' agreement, ESOP-ready cap tables and registrations." },
    { title: "Startup Finance Setup", desc: "Chart of accounts, accounting system selection, expense policies and a finance playbook your team can actually follow." },
    { title: "Virtual CFO for Founders", desc: "A part-time CFO covering cash runway, unit economics, monthly MIS and investor conversations — without the full-time cost." },
    { title: "Fundraising Readiness", desc: "Financial model, pitch financials, due diligence packs and data rooms — ready for seed, pre-Series A and Series A rounds." },
    { title: "Startup Compliance Pack", desc: "ROC, GST, TDS, PT, ESIC, PF and FEMA filings handled end-to-end so founders stay focused on building." },
    { title: "Founder Tax & Personal Finance", desc: "Founder taxation, ESOP exercise planning, share transfer and personal wealth structuring as the company scales." },
  ],
  "Mid-Size": [
    { title: "CFO Advisory", desc: "Full-spectrum CFO partnership — board reporting, capital strategy, banking relationships, treasury and audit ownership." },
    { title: "FP&A & Business Analytics", desc: "Budgeting, rolling forecasts, variance analysis, driver-based models and management dashboards that drive better decisions." },
    { title: "Working Capital Management", desc: "Receivables, payables and inventory optimisation, plus working-capital line structuring with lenders." },
    { title: "Internal Controls & Audit Readiness", desc: "Risk-based internal control frameworks, SOPs and audit-ready closes for statutory, tax and internal audits." },
    { title: "GST, Direct Tax & Regulatory", desc: "End-to-end tax operations, advance rulings, litigation support and proactive regulatory risk management." },
    { title: "Process Automation Bridge", desc: "Identify and automate finance, payroll and procurement processes — handing off to our Tech Consulting team where needed." },
  ],
  "Large Enterprise": [
    { title: "Strategic CFO Advisory", desc: "Board-level partnership on capital allocation, business plan reviews, group restructuring and CFO-office transformation." },
    { title: "Mergers, Acquisitions & Valuation", desc: "Buy-side and sell-side M&A advisory, valuation, due diligence, deal structuring and post-merger integration." },
    { title: "Group Consolidation & IND AS / IFRS", desc: "Multi-entity consolidation, accounting standard transitions, technical accounting opinions and disclosure-ready financials." },
    { title: "Finance Transformation", desc: "Operating model redesign, shared services / GCC strategy, ERP-aligned finance reporting and close acceleration." },
    { title: "Risk, Governance & Compliance", desc: "Enterprise risk frameworks, internal audit co-sourcing, SOX-style controls, ESG and regulatory reporting." },
    { title: "Treasury & Capital Markets", desc: "Treasury policy, FX and interest-rate risk, debt syndication, private placement and listing-readiness support." },
  ],
};

const outcomes: Record<Audience, string[]> = {
  Startups: ["Investor-ready financials in weeks, not quarters", "Zero missed statutory filings from day one", "A clear runway view and burn discipline founders can defend"],
  "Mid-Size": ["Forecast accuracy moves from ad-hoc to ±5%", "Audit-ready closes within 7–10 working days", "Working capital cycle compressed by 15–30 days"],
  "Large Enterprise": ["M&A and transformation programmes with board-grade governance", "Close-to-report cycle accelerated by 30–50%", "Capital cost reduced through smarter treasury and financing"],
};

const filterItems = [
  { id: "intro", label: "Overview" },
  { id: "audience", label: "By Stage" },
  { id: "process", label: "How We Engage" },
];

export default function BusinessConsulting() {
  const [active, setActive] = useState<Audience>("Startups");
  const currentAudience = audiences.find((a) => a.key === active)!;
  const currentOfferings = offerings[active];
  const currentOutcomes = outcomes[active];

  return (
    <>
      <Hero
        tag="Services"
        title="Business"
        titleAccent="Consulting"
        tagline="A trusted partner for business growth, financial leadership and operational excellence — for founders, SMEs and growing enterprises."
        variant="dark"
        backgroundImage="/images/static/banners/business-consulting-web-banner.jpg"
        ctas={[
          { label: "Engage Us", href: "/contact-us" },
          { label: "Talk to a Consultant", href: "/contact-us", variant: "outline" },
        ]}
      />

      <StickyFilterNav items={filterItems} />

      <section id="intro" className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <SectionTag>Our practice</SectionTag>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink leading-tight">
              Trusted partner for <span className="text-gradient-gold">business growth</span>
            </h2>
            <div className="divider-gold-left" />
            <p className="text-base md:text-lg text-ink-muted mb-4">Savitron.ai is a finance-domain technology firm offering end-to-end business advisory for founders, SMEs and growing enterprises. We combine deep finance expertise with modern AI and engineering to help you build a resilient, scalable business.</p>
            <p className="text-base md:text-lg text-ink-muted">From entity set-up to ongoing finance function support, we operate as an extension of your leadership team — delivering clarity on numbers, confidence in compliance and a platform for sustainable growth.</p>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={120}>
            <div className="h-[300px] md:h-full min-h-[360px] rounded-2xl bg-cover bg-center shadow-sm border border-border" style={{ backgroundImage: "url('/images/static/parallax/business-consulting.jpg')" }} aria-label="Business Consulting" />
          </ScrollReveal>
        </div>
      </section>

      <section id="audience" className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Built for every stage</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Tailored for <span className="text-gradient-gold">Startups, Mid-Size & Large</span> Organisations
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto mt-3">Pick where you are today — we&apos;ll show you exactly how Savitron.ai partners with companies at your stage.</p>
            </ScrollReveal>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12">
            {audiences.map((a) => (
              <button
                key={a.key}
                type="button"
                onClick={() => setActive(a.key)}
                className={`px-5 md:px-7 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium border transition-all ${
                  active === a.key
                    ? "bg-navbar text-page border-gold"
                    : "bg-surface text-ink-muted border-border hover:border-gold hover:text-gold"
                }`}
              >
                {a.key}
              </button>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-surface rounded-2xl shadow-sm border border-border p-6 md:p-10 mb-8 md:mb-10">
              <div className="grid grid-cols-12 gap-6 md:gap-8">
                <div className="col-span-12 lg:col-span-5">
                  <SectionTag>{currentAudience.tag}</SectionTag>
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-ink mb-3">{currentAudience.headline}</h3>
                  <p className="text-sm md:text-base text-ink-muted">{currentAudience.intro}</p>
                </div>
                <div className="col-span-12 lg:col-span-7">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-3">Expected outcomes</h4>
                  <ul className="space-y-3">
                    {currentOutcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gold text-gold text-xs font-bold">✓</span>
                        <span className="text-sm md:text-base text-ink">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {currentOfferings.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-7">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gold/40 text-gold mb-3">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </span>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-2">{s.title}</h3>
                  <p className="text-sm md:text-base text-ink-muted">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsStrip
        tag="Outcomes"
        title="What good"
        titleAccent="looks like"
        variant="dark"
        items={[
          { value: "±5%", label: "Forecast accuracy" },
          { value: "7-10d", label: "Audit-ready close" },
          { value: "15-30d", label: "Working capital compressed" },
          { value: "100%", label: "Statutory filings, on time" },
        ]}
      />

      <section id="process" className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>How we engage</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                A pragmatic <span className="text-gradient-gold">4-step</span> partnership
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
            {[
              { step: "01", title: "Diagnose", desc: "Workshop with leadership to map current state, risks and the highest-leverage moves." },
              { step: "02", title: "Plan", desc: "A pragmatic roadmap with milestones, owners and a measurement framework from day one." },
              { step: "03", title: "Execute", desc: "Hands-on delivery — finance ops, advisory, reporting and regulatory work, all under one roof." },
              { step: "04", title: "Sustain", desc: "Ongoing advisory, monthly business reviews and proactive course-corrections as you grow." },
            ].map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-7">
                  <p className="font-heading text-3xl md:text-4xl font-bold text-gold/30">{p.step}</p>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mt-2 mb-2">{p.title}</h3>
                  <p className="text-sm md:text-base text-ink-muted">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        tag="Let's talk"
        title="Ready to take your business"
        titleAccent="forward?"
        body="Speak to our consultants and discover how we can support your growth journey."
        primaryCta={{ label: "Engage Us", href: "/contact-us" }}
        secondaryCta={{ label: "Explore Products", href: "/our-products" }}
      />
    </>
  );
}
