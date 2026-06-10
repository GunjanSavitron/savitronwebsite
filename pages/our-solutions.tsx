import { useState } from "react";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import CTABanner from "@amitkk/basic/static/CTABanner";
import Image from "next/image";

type Tab = "Finance" | "Hospitality" | "General Trade" | "Domain Consultants";

const tabs: Tab[] = ["Finance", "Hospitality", "General Trade", "Domain Consultants"];

const domainContent: Record<Exclude<Tab, "Domain Consultants">, { problem: string; solution: string; highlights: string[] }> = {
  Finance: {
    problem:
      "Finance teams spend more time chasing data than analysing it. Reconciliation is done manually across disconnected systems, compliance deadlines are missed, and the month-end close stretches into weeks. Leadership makes decisions on stale MIS reports while the real numbers sit siloed in Tally, Excel and the ERP.",
    solution:
      "Savitron.ai's finance solutions bring AI-led automation to accounts payable, bank and ledger reconciliation, GST and TDS compliance, and real-time MIS reporting. We integrate your existing finance stack — Tally, Zoho Books, SAP or QuickBooks — into a single unified layer so your team works with clean, current data every day.",
    highlights: [
      "Automated reconciliation — bank, ledger, inter-company",
      "AI-powered accounts payable with 3-way PO matching",
      "GST 2A/2B, TDS and MSME compliance monitoring",
      "Real-time MIS dashboards connected to your ERP",
      "Month-end close acceleration — from weeks to days",
    ],
  },
  Hospitality: {
    problem:
      "Hotels and restaurant chains run on thin margins and complex operations — multiple properties, OTA channels, F&B outlets and a large hourly workforce. Revenue leakage happens through unreconciled OTA payouts, manual inventory tracking and disconnected POS systems. Guest experience suffers when staff spend time on admin instead of service.",
    solution:
      "We build integrated technology layers for hospitality businesses — connecting PMS, POS, OTA channels and finance into a single operating platform. AI-driven demand forecasting optimises room rates and inventory. Automated reconciliation of OTA payouts eliminates revenue leakage. Digital workflows free your staff to focus on guests, not spreadsheets.",
    highlights: [
      "OTA channel reconciliation — Booking.com, Expedia, Airbnb",
      "PMS and POS integration with real-time revenue dashboards",
      "AI demand forecasting for dynamic pricing",
      "F&B inventory management and wastage tracking",
      "Guest feedback intelligence and service automation",
    ],
  },
  "General Trade": {
    problem:
      "General trade businesses — distributors, wholesalers and FMCG networks — operate across hundreds of SKUs, dozens of distributors and thousands of retail touchpoints. Inventory is tracked in Excel, collections are chased manually, and field-force activity is invisible to leadership. Returns, credit notes and scheme payouts create a reconciliation nightmare every month.",
    solution:
      "Savitron.ai digitises general trade operations end-to-end — from order management and beat planning to collections, distributor payouts and trade scheme reconciliation. Our platforms give leadership real-time visibility into inventory, sales velocity and outstanding collections, while field teams work through a mobile app that eliminates paperwork.",
    highlights: [
      "Distributor and retailer portal with order management",
      "Field-force beat planning and visit tracking",
      "Collections management with automated reminders",
      "Trade scheme and claim reconciliation",
      "Real-time inventory and sell-through dashboards",
    ],
  },
};

const consultants = [
  {
    name: "Vivek Sharma",
    title: "Founder · Business & Growth",
    experience: "15+ years",
    domain: "Finance · Strategy",
    bio: "Vivek brings 15+ years of experience across commercials, strategic finance, FP&A and process optimisation. He has worked with Samsung, Jindal, Minda and Mitsubishi — and now leads Savitron.ai's business development and client finance engagements. He helps founders and CFOs build scalable, audit-ready financial operations.",
    photo: "/images/static/team/vivek-sharma.jpg",
    linkedin: "https://www.linkedin.com/in/vivek-sharma-25704867/",
    phone: "+917838136381",
  },
  {
    name: "Hena Agrawal",
    title: "Co-Founder · Financial Intelligence",
    experience: "15+ years",
    domain: "Fund Management · Financial Advisory",
    bio: "Hena brings over 15 years of expertise in private equity fund management, financial accounting & reporting, strategic finance and business advisory. Previously with Macquarie, Goldman Sachs, Vedanta and KPMG, she leads Savitron.ai's financial intelligence practice — helping companies build robust finance functions and navigate complex reporting requirements.",
    photo: "/images/static/team/hena-agrawal.jpg",
    linkedin: "https://www.linkedin.com/in/hena-agrawal-211aa056",
    phone: "+919916600370",
  },
];

export default function OurSolutionsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Finance");

  const isDomainConsultants = activeTab === "Domain Consultants";
  const domainData = !isDomainConsultants ? domainContent[activeTab] : null;

  return (
    <>
      <Hero
        tag="Our Solutions"
        title="Domain-specific solutions"
        titleAccent="built for real outcomes"
        tagline="AI and technology solutions designed around the unique challenges of Finance, Hospitality and General Trade — with domain experts who have lived inside these industries."
        variant="dark"
        ctas={[
          { label: "Engage Us", href: "/contact-us" },
        ]}
      />

      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab bar */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10 md:mb-14 border-b border-border pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors border ${
                    activeTab === tab
                      ? "bg-navbar text-page border-gold"
                      : "bg-surface text-ink-muted border-border hover:border-gold hover:text-gold"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Domain content */}
          {!isDomainConsultants && domainData && (
            <div key={activeTab} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <ScrollReveal direction="left">
                <SectionTag>{activeTab}</SectionTag>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink leading-tight">
                  The <span className="text-gradient-gold">challenge</span>
                </h2>
                <div className="divider-gold-left" />
                <div className="flex items-start gap-4 bg-surface border border-border rounded-2xl p-6 mt-4">
                  <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <p className="text-sm md:text-base text-ink-muted leading-relaxed">{domainData.problem}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <SectionTag>Our approach</SectionTag>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink leading-tight">
                  How we <span className="text-gradient-gold">solve it</span>
                </h2>
                <div className="divider-gold-left" />
                <div className="flex items-start gap-4 bg-surface border border-border rounded-2xl p-6 mt-4">
                  <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-sm md:text-base text-ink leading-relaxed">{domainData.solution}</p>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-3">What we deliver</h4>
                  <ul className="space-y-2">
                    {domainData.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm md:text-base text-ink">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gold text-gold text-xs font-bold flex-shrink-0">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* Domain Consultants tab */}
          {isDomainConsultants && (
            <div>
              <ScrollReveal>
                <div className="text-center mb-10 md:mb-14">
                  <SectionTag>Finance Domain</SectionTag>
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                    Meet our <span className="text-gradient-gold">domain experts</span>
                  </h2>
                  <div className="divider-gold" />
                  <p className="text-sm md:text-base text-ink-muted max-w-2xl mx-auto mt-2">
                    Our finance domain consultants bring decades of institutional experience from Goldman Sachs, Macquarie, Samsung, KPMG and more — available directly for your engagement.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {consultants.map((c, i) => (
                  <ScrollReveal key={c.name} delay={i * 80}>
                    <div className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-platinum">
                        <Image
                          src={c.photo}
                          alt={`${c.name} — ${c.title}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navbar/80 via-navbar/15 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-5 text-page">
                          <p className="font-heading text-xl font-bold leading-tight">{c.name}</p>
                          <p className="text-sm opacity-90 mt-0.5">{c.title}</p>
                        </div>
                      </div>
                      <div className="p-6 md:p-7">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center bg-gold/10 text-gold text-xs px-3 py-1.5 rounded-full border border-gold/30">
                            {c.experience} experience
                          </span>
                          <span className="inline-flex items-center bg-platinum border border-border text-ink-muted text-xs px-3 py-1.5 rounded-full">
                            {c.domain}
                          </span>
                        </div>
                        <p className="text-sm text-ink-muted leading-relaxed mb-5">{c.bio}</p>
                        <div className="flex flex-wrap gap-3">
                          {c.phone && (
                            <a
                              href={`tel:${c.phone}`}
                              className="inline-flex items-center gap-2 text-sm font-medium text-ink bg-platinum border border-border rounded-full px-4 py-2 hover:border-gold hover:text-gold transition-colors"
                            >
                              Call
                            </a>
                          )}
                          {c.linkedin && (
                            <a
                              href={c.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-medium text-ink bg-platinum border border-border rounded-full px-4 py-2 hover:border-gold hover:text-gold transition-colors"
                            >
                              LinkedIn
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        tag="Let's talk"
        title="Ready to explore"
        titleAccent="your domain solution?"
        body="Talk to our domain consultants — we'll map the right solution to your specific business challenges."
        primaryCta={{ label: "Engage Us", href: "/contact-us" }}
      />
    </>
  );
}
