import Image from "next/image";
import Link from "next/link";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import StickyFilterNav from "@amitkk/basic/static/StickyFilterNav";
import CTABanner from "@amitkk/basic/static/CTABanner";
import SplitPanel from "@amitkk/basic/static/SplitPanel";

const services = [
  { title: "Global Capability Centers (GCC)", desc: "End-to-end India GCC setup — entity, location, hiring model, vendors, and a target operating model that scales from 10 to 500+ FTEs.", bullets: ["Entity structuring (Subsidiary / LLP / Branch)", "Location & talent benchmarking", "Org design & hiring strategy", "Vendor & infrastructure onboarding"] },
  { title: "Finance & Accounting Outsourcing", desc: "Bookkeeping, AP, AR, payroll, month-end close and controller-level reporting delivered offshore with US, UK and Middle-East quality standards.", bullets: ["Accounts payable & receivable", "Month-end close & reconciliations", "Management reporting & MIS", "Controller-grade reviews"] },
  { title: "Fund Accounting & Investor Services", desc: "Back-office for GP/LP, FoF, secondaries, co-invest and SPVs — NAV, waterfalls, capital calls, distributions and investor reporting.", bullets: ["Fund accounting & NAV", "Waterfall & carry calculations", "Capital call / distribution operations", "Investor reporting packs"] },
  { title: "Process Transformation & Automation", desc: "Move offshore teams off transactional grind and onto strategic work — SOPs, RPA, AI-assisted workflows and digital controls.", bullets: ["Process standardisation & SOPs", "RPA & workflow automation", "AI-assisted finance ops", "KPIs & continuous improvement"] },
  { title: "Regulatory & Compliance Support", desc: "Indian entity compliance, FEMA / RBI filings, transfer pricing, SEC / FCA reporting and cross-border tax structuring.", bullets: ["FEMA / RBI / FDI filings", "Transfer pricing & TP docs", "SEC, FCA & local regulator reporting", "Cross-border tax structuring"] },
  { title: "Compliance for Foreign-Owned Indian Cos", desc: "For overseas parents running an Indian subsidiary — we run the full Indian compliance stack so your offshore arm stays clean and audit-ready.", bullets: ["ROC & secretarial compliance", "Direct & indirect tax filings", "Statutory & internal audits", "Payroll & employee benefits"] },
];

const geographies = [
  { name: "United States", note: "GCC setup, fund services, SEC reporting and US-India tax structuring." },
  { name: "United Kingdom & EU", note: "Back-office services with GDPR-aligned controls and FCA reporting support." },
  { name: "Middle East (GCC region)", note: "Saudi, UAE and Bahrain finance support, VAT operations and ZATCA / FTA filings." },
  { name: "Singapore & APAC", note: "Fund admin, controller services and IFRS-aligned reporting for APAC GPs." },
];

const differentiators = [
  { title: "Senior bench, hands-on delivery", desc: "Ex-Goldman Sachs, KPMG, Macquarie, Vedanta and Samsung leaders review every engagement — not just at kickoff, but month after month." },
  { title: "Time-zone aligned coverage", desc: "Shifts calibrated to US, UK and Middle-East working hours — you get same-day responsiveness, not 24-hour ping-pong." },
  { title: "One accountable partner", desc: "Setup, operations, tech and compliance — under one roof, with one SLA. No vendor stitching, no hand-off gaps." },
];

const filterItems = [
  { id: "intro", label: "Overview" },
  { id: "services", label: "What We Offer" },
  { id: "geographies", label: "Where We Serve" },
  { id: "why", label: "Why Savitron.ai" },
];

export default function OffshoreConsulting() {
  return (
    <>
      <Hero
        tag="Services"
        title="Offshore"
        titleAccent="Consulting"
        tagline="Build your India backbone — GCC setup, finance & fund operations, and cross-border compliance for global firms."
        variant="dark"
        backgroundImage="/images/static/banners/business-consulting-web-banner.jpg"
        ctas={[
          { label: "Plan Your Offshore Strategy", href: "/contact-us" },
          { label: "Financial Services Offshore", href: "/financial-services-offshore", variant: "outline" },
        ]}
      />

      <StickyFilterNav items={filterItems} />

      <SplitPanel
        id="intro"
        tag="Our practice"
        title="India backbone, without the"
        titleAccent="learning curve"
        side="left"
        body={
          <>
            <p>Savitron.ai&apos;s Offshore Consulting practice helps global firms set up Global Capability Centers in India, run finance and fund operations from offshore teams, and stay compliant across jurisdictions. We&apos;ve delivered for US, UK and Middle-East clients — from $50M growth-stage GPs to multi-billion-dollar enterprises.</p>
            <p>From entity setup to ongoing operations, we operate as an extension of your finance and operations leadership — handing you cost savings, scalability and audit-ready quality without the operational grind.</p>
          </>
        }
      >
        <div className="h-[300px] md:h-[420px] rounded-2xl bg-cover bg-center shadow-sm border border-border" style={{ backgroundImage: "url('/images/static/parallax/business-consulting.jpg')" }} aria-label="Offshore Consulting" />
      </SplitPanel>

      <section id="services" className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>What we offer</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                A full-stack offshore <span className="text-gradient-gold">delivery partner</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-7 flex flex-col">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 mb-4">
                    <Image src="/images/icons/services/business-consulting.svg" alt={s.title} width={24} height={24} />
                  </span>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-2">{s.title}</h3>
                  <p className="text-sm md:text-base text-ink-muted mb-4">{s.desc}</p>
                  <ul className="space-y-1.5 mt-auto">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/financial-services-offshore" className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-gold hover:gap-3 transition-all">
              See our deep dive for US firms & fund managers <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="geographies" className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Coverage</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Where we <span className="text-gradient-gold">serve clients</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {geographies.map((g, i) => (
              <ScrollReveal key={g.name} delay={i * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-6">
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-2">{g.name}</h3>
                  <p className="text-sm text-ink-muted">{g.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Why Savitron.ai</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Why teams pick <span className="text-gradient-gold">Savitron.ai</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {differentiators.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-8">
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-2">{d.title}</h3>
                  <p className="text-sm md:text-base text-ink-muted">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        tag="Let's plan"
        title="Thinking about offshoring?"
        titleAccent="Let's de-risk it."
        body="From the first sizing conversation to a fully operational India team — we'll walk the journey with you."
        primaryCta={{ label: "Plan Your Offshore Strategy", href: "/contact-us" }}
      />
    </>
  );
}
