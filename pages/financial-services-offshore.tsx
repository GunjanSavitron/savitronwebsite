import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import StickyFilterNav from "@amitkk/basic/static/StickyFilterNav";
import CTABanner from "@amitkk/basic/static/CTABanner";
import SplitPanel from "@amitkk/basic/static/SplitPanel";

const differentiators = [
  { title: "Global Leadership Experience", desc: "Our senior team has built and run finance functions inside Goldman Sachs, Samsung, Macquarie, KPMG, Vedanta, Jindal, Mitsubishi and UNO Minda. We know what good looks like at scale — and we bring those standards to every engagement." },
  { title: "Fund Finance & Regulatory Depth", desc: "Years of hands-on experience running fund accounting, NAV calculation, waterfalls, SEC reporting, and regulatory submissions for some of the world's most demanding institutions. This is not a generalist team learning on the job." },
  { title: "Execution Ownership", desc: "We're not advisors who hand over a slide deck and walk away. We integrate with your team, take ownership of deliverables, and stay on the hook for outcomes — from day-one bookkeeping through quarter-end close and audit support." },
];

const offerings = [
  { id: "gcc", title: "Indian Entity Setup & GCC", tagline: "Stand up a Global Capability Center in India — without learning the hard way." },
  { id: "fao", title: "Finance & Accounting Outsourcing", tagline: "Bookkeeping to controller-level support, delivered offshore with US-quality output." },
  { id: "fund", title: "Fund Accounting & Investment Support", tagline: "Full back-office for GP/LP, FoF, secondaries, co-invest and SPV structures." },
  { id: "automation", title: "Process Transformation & Automation", tagline: "Move finance teams off transactional grind and onto strategic work." },
  { id: "compliance", title: "Regulatory & Compliance Support", tagline: "SEC, Indian entity compliance, and US-India tax structuring — handled end-to-end." },
];

const gccEntity = [
  { title: "India subsidiary / LLP / branch office setup", desc: "Choose the right structure based on your US parent's strategy, repatriation needs and operating model. We handle the full Companies Act setup, from name reservation to certificate of incorporation." },
  { title: "FEMA, RBI & FDI compliance advisory", desc: "Cross-border investments trigger a long list of filings. We map every obligation up front and execute the FC-GPR, ODI, FLA, APR and ECB filings as they arise — so nothing surfaces during diligence years later." },
  { title: "Optimal legal + tax structuring for US parent", desc: "We model the tax exposure on the US side (Subpart F, GILTI, FDII, transfer pricing) and the India side (CIT, equalisation levy, BEPS) before structuring the entity — not after." },
];

const gccShared = [
  { title: "End-to-end GCC setup", desc: "Strategy through go-live: business case, target operating model, location selection, hiring plan, facility, IT, security, vendors and governance." },
  { title: "Location strategy", desc: "Bangalore, Gurgaon, Hyderabad, Pune, Chennai — we benchmark talent depth, cost, infrastructure and regulatory ease so the location matches the function you're moving offshore." },
  { title: "Hiring model & org structure", desc: "Pyramid design, span of control, leadership hiring, mid-career sourcing and graduate intake — calibrated to your target run-rate and ramp-up." },
  { title: "Cost benchmarking", desc: "Salary bands, fully loaded cost models, real-estate norms and savings vs onshore — so you walk into the boardroom with defensible numbers." },
  { title: "Vendor onboarding", desc: "Payroll, HR services, IT infrastructure, security and managed services — we shortlist, evaluate and onboard the right partners and hand over clean contracts." },
];

const gccExecution = [
  { title: "Bank account opening", desc: "Coordinate with Indian banks for current account, escrow and cross-border banking — including KYC for offshore directors." },
  { title: "Statutory registrations", desc: "GST, PAN, TAN, Shops & Establishment, Professional Tax, EPF, ESI and Import/Export codes — sequenced and filed without delay." },
  { title: "Accounting & compliance framework", desc: "Chart of accounts aligned to US parent reporting, books policy, monthly close calendar, intercompany framework and audit-ready documentation from day one." },
];

const faoServices = [
  { category: "Transactional Accounting", items: [
    { title: "Accounts Payable", desc: "Invoice ingestion, three-way match, approval routing, payment run preparation and vendor reconciliations." },
    { title: "Accounts Receivable", desc: "Invoice generation, collections support, cash application, deductions management and AR ageing analysis." },
    { title: "General Ledger Accounting", desc: "Journal entries, prepaid and accrual schedules, fixed-asset accounting, intercompany eliminations and month-end close." },
    { title: "Reconciliations", desc: "Bank, credit card, intercompany, payroll clearing and balance-sheet account reconciliations — supported by a clean, evidence-backed audit trail." },
  ] },
  { category: "Financial Reporting", items: [
    { title: "US GAAP reporting", desc: "Monthly, quarterly and annual financial statements prepared and reviewed against US GAAP — with footnote support and disclosure schedules." },
    { title: "IFRS reporting", desc: "Group-level IFRS reporting for parent entities that consolidate under IFRS, including bridge schedules between local-GAAP and IFRS." },
    { title: "Consolidation & group reporting", desc: "Multi-entity, multi-currency consolidation with elimination entries, minority interest, and segment reporting." },
  ] },
  { category: "Controller / CFO Support", items: [
    { title: "Management reporting packs", desc: "Board-ready monthly packs with P&L, balance sheet, cash flow, KPI dashboards and commentary you can read on a phone." },
    { title: "FP&A", desc: "Variance analysis, driver-based models, scenario planning and decision-support work for leadership." },
    { title: "Budgeting & forecasting", desc: "Annual operating plan, rolling forecasts, cash forecasting and headcount planning — built collaboratively with your business owners." },
  ] },
];

const fundStructures = [
  { name: "GP / LP Structures", desc: "Full back-office for traditional GP-LP structures including capital account maintenance, allocations and investor reporting." },
  { name: "Fund of Funds (FoF)", desc: "Look-through accounting, underlying-fund roll-ups and aggregated investor reporting across multiple managers." },
  { name: "Secondaries", desc: "Stub-period valuations, cost basis adjustments and reporting for LP-led and GP-led secondary transactions." },
  { name: "Co-invest & SPV Accounting", desc: "Single-asset SPVs, co-invest sleeves, and bespoke vehicle accounting with clean carry and fee modelling." },
];

const fundServices = [
  { title: "NAV Calculation & Investor Reporting", desc: "Periodic NAV calculation, investor-level capital account statements, IRR, TVPI, DPI and RVPI metrics — delivered on time, every cycle." },
  { title: "Capital Calls & Distributions", desc: "Notice preparation, allocation across LPs, recallable distributions, equalisation, and bank-level execution support." },
  { title: "Management Fees & Waterfall / Carry", desc: "Management fee accruals, fee offsets, European and American waterfalls, hurdle and catch-up modelling, carry true-ups." },
  { title: "Performance & Side-Letter Reporting", desc: "Performance attribution, GP commitment tracking, side-letter compliance monitoring and bespoke LP reporting." },
  { title: "Regulatory Reporting", desc: "Form PF, Form ADV, AIFMD Annex IV, FATCA, CRS, and SEBI AIF returns — prepared, reviewed and filed." },
  { title: "Audit Support", desc: "Year-end auditor liaison, PBC preparation, valuation memos and confirmation handling — keeping your audit short, clean and predictable." },
];

const processTransformation = [
  { title: "Finance Process Optimisation", desc: "We map your current finance workflows, benchmark against best-in-class, and redesign for speed, accuracy and control. Most clients see month-end shrink by 3–7 days within the first quarter." },
  { title: "Automation", desc: "RPA, scripted bots, AI-driven document processing and workflow tools deployed where they actually pay back — not as science projects. We pick the simplest tool that works." },
  { title: "System Implementation Support", desc: "NetSuite, QuickBooks, Sage Intacct, Xero, SAP, Zoho — implementation, customisation, data migration and post-go-live stabilisation. We've been on every side of these projects." },
];

const complianceAreas = [
  { title: "SEC & Other Regulatory Reporting", items: ["Form PF (private fund reporting)", "Form ADV (investment adviser registration)", "Form 13F & 13H (large position reporting)", "Form CRS (customer relationship summary)", "AIFMD Annex IV reporting", "FATCA / CRS classification & filings", "Schedule of Investments and audited financials"] },
  { title: "Indian Entity Compliances", items: ["GST returns (GSTR-1, GSTR-3B, GSTR-9)", "TDS deductions, deposits and quarterly returns", "Companies Act filings (ROC, AOC-4, MGT-7)", "Annual income tax return & tax audit", "Transfer pricing study & 3CEB filings", "FEMA/RBI filings (FC-GPR, FLA, APR)", "PF, ESI, PT and labour-law compliances"] },
  { title: "US–India Tax Structuring", items: ["Transfer pricing policy design", "Permanent establishment risk assessment", "Subpart F / GILTI / FDII analysis", "DTAA benefit optimisation", "Equalisation levy and significant economic presence review", "Withholding tax planning on cross-border payments", "Tax residency certificates and Form 10F coordination"] },
];

const engagementSteps = [
  { step: "01", title: "Scoping Call", desc: "30–45 minute call to understand your structure, scale, timelines and the specific finance or regulatory pain points you're solving for." },
  { step: "02", title: "Proposal & Pricing", desc: "Within 5 business days, you receive a written proposal with scope, deliverables, team composition, ramp plan and a transparent fee schedule." },
  { step: "03", title: "Transition & Ramp", desc: "We document existing workflows, run a parallel period if needed, and gradually take ownership of deliverables under a defined SLA framework." },
  { step: "04", title: "Steady-State Run", desc: "Monthly close, quarterly reporting, audit support and continuous improvement — with dashboards, governance reviews and clear escalation paths." },
];

const team = [
  { name: "Hena Agrawal", role: "Co-Founder", image: "/images/static/team/hena-agrawal.jpg", desc: "Seasoned finance professional with nearly 14 years of experience in Controlling, Accounting and Reporting. Deep background in Fund Reporting, Regulatory Reporting, IFRS, US GAAP Reporting, Corporate Accounting, Financial Management and Control, and FP&A.", ex: "KPMG · Goldman Sachs · Vedanta · Macquarie Group" },
  { name: "Vivek Sharma", role: "Co-Founder", image: "/images/static/team/vivek-sharma.jpg", desc: "14+ years of experience in Consulting, Process Automation and Corporate Finance Leadership with a focus on business strategy, FP&A, Taxation, finalisation of accounts and commercials. Deep operational experience scaling finance teams across multinationals.", ex: "Jindal Stainless · Mitsubishi Electricals · UNO Minda · Samsung" },
];

const faqs = [
  { q: "How is this different from a generic finance BPO?", a: "We're a technology firm with deep finance domain expertise — staffed with professionals who've worked inside the institutions our clients answer to. We own outcomes, not just task lists, and our senior team stays engaged on every account." },
  { q: "What's the typical timeline to stand up a GCC in India?", a: "From signed engagement to a fully operational entity with first hires onboard, we typically deliver in 10–14 weeks. Entity incorporation alone takes 2–3 weeks; the rest is hiring, infrastructure, vendor onboarding and process transition." },
  { q: "Do you support US GAAP reporting end-to-end?", a: "Yes. Our team has prepared US GAAP financials for venture-backed startups, private companies and large multinationals. We're equally comfortable owning the full close cycle or supplementing your in-house controller." },
  { q: "Can you integrate with our existing systems?", a: "Yes — NetSuite, QuickBooks Online, Sage Intacct, Xero, SAP, Oracle, Workday, Bill.com, Concur, Coupa, Ramp, and a long list of niche tools. We adapt to your stack rather than imposing ours." },
  { q: "How do you handle data security and confidentiality?", a: "ISO 27001-aligned controls, MSA-level NDAs, role-based access, MFA-enforced systems, encrypted transmission and on-premise/VPN delivery models when required. We can also operate inside your own systems with named-user access." },
];

const filterItems = [
  { id: "overview", label: "Overview" },
  { id: "offerings", label: "Practice Areas" },
  { id: "gcc", label: "GCC" },
  { id: "fao", label: "FAO" },
  { id: "fund", label: "Fund Services" },
  { id: "compliance", label: "Compliance" },
  { id: "engage", label: "How We Engage" },
];

export default function FinancialServicesOffshore() {
  return (
    <>
      <Hero
        tag="Financial Services · Offshore"
        title="Finance & Regulatory Execution,"
        titleAccent="delivered from India"
        tagline="A specialised offshore partner for US companies and funds — finance-domain deep, technology-powered, and built to integrate with your team."
        variant="dark"
        backgroundImage="/images/static/banners/fund-management-web-banner.jpg"
        ctas={[
          { label: "Book a Scoping Call", href: "/contact-us" },
          { label: "Explore Offerings", href: "#offerings", variant: "outline" },
        ]}
        stats={[
          { value: "30+", label: "Years combined experience" },
          { value: "All", label: "Fund structures supported" },
          { value: "US · IST", label: "Time-zone coverage" },
        ]}
      />

      <StickyFilterNav items={filterItems} />

      <SplitPanel
        id="overview"
        tag="Company overview"
        title="A specialised offshore partner for"
        titleAccent="US companies and funds"
        side="left"
        body={
          <>
            <p>Savitron.ai is a finance-domain technology firm and a specialised offshore execution partner for US companies. We pair high-skill offshore capabilities with the rigour expected by US auditors, regulators and investors.</p>
            <p>Whether you&apos;re standing up a Global Capability Center in India, looking to outsource a slice of your finance function, or trying to fix a fund-accounting back office that&apos;s creaking under volume — we&apos;ve done it before, and we own the outcome.</p>
          </>
        }
      >
        <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border shadow-sm">
          <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-4">What Makes Us Different</h3>
          <ul className="space-y-4">
            {differentiators.map((d) => (
              <li key={d.title} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gold/10 border border-gold/40 text-gold text-xs font-bold flex-shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-sm md:text-base text-ink">{d.title}</p>
                  <p className="text-xs md:text-sm text-ink-muted leading-relaxed">{d.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SplitPanel>

      <section id="offerings" className="bg-platinum py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Practice areas</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                What do we <span className="text-gradient-gold">offer?</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-2xl mx-auto">Five practice areas, fully customisable and combinable. Most clients start with one and expand as trust builds.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {offerings.map((o, idx) => (
              <ScrollReveal key={o.id} delay={idx * 80}>
                <a href={`#${o.id}`} className="block card-hover h-full bg-surface border border-border rounded-2xl p-5 md:p-6">
                  <div className="font-heading text-3xl font-bold text-gradient-gold mb-2">{String(idx + 1).padStart(2, "0")}</div>
                  <h3 className="font-heading text-base md:text-lg font-semibold text-ink mb-2">{o.title}</h3>
                  <p className="text-xs md:text-sm text-ink-muted">{o.tagline}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-center text-xs md:text-sm text-ink-faint mt-6">All services can be combined or customised to suit your needs.</p>
        </div>
      </section>

      <section id="gcc" className="bg-page bg-warm-grain py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Practice Area 01</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                India Entry &amp; <span className="text-gradient-gold">GCC / Captive Setup</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto">From entity structuring to first hires walking through the door — we run the entire India-entry programme so your US team can stay focused on the business.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              { title: "Entity Setup & Structuring", items: gccEntity },
              { title: "GCC / Shared Services Setup", items: gccShared },
              { title: "Setup Execution", items: gccExecution },
            ].map((col, i) => (
              <ScrollReveal key={col.title} delay={i * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-7">
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-4">{col.title}</h3>
                  <ul className="space-y-3">
                    {col.items.map((e) => (
                      <li key={e.title} className="text-sm">
                        <p className="font-semibold text-ink">{e.title}</p>
                        <p className="text-xs md:text-sm text-ink-muted">{e.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="fao" className="bg-platinum py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Practice Area 02</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Finance &amp; Accounting <span className="text-gradient-gold">Outsourcing</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto">A full-stack offshore finance team — from AP clerks through to controllers and fractional CFOs — operating against US deadlines and US reporting standards.</p>
            </ScrollReveal>
          </div>
          <div className="space-y-10">
            {faoServices.map((group) => (
              <ScrollReveal key={group.category}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1 w-8 bg-gold rounded-full" />
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-ink">{group.category}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                  {group.items.map((it) => (
                    <div key={it.title} className="card-hover h-full bg-surface rounded-2xl border border-border p-5">
                      <div className="w-2 h-2 rounded-full bg-gold mb-3" />
                      <h4 className="font-semibold text-sm md:text-base text-ink mb-2">{it.title}</h4>
                      <p className="text-xs md:text-sm text-ink-muted leading-relaxed">{it.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="fund" className="bg-page bg-warm-grain py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Practice Area 03</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Fund Accounting &amp; <span className="text-gradient-gold">Investment Support</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto">Built specifically for US GPs, family offices and fund administrators who need senior, regulated-experience hands on the books — not a generalist outsourcer.</p>
            </ScrollReveal>
          </div>

          <div className="mb-10">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-ink mb-5 text-center">All Structures Supported</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {fundStructures.map((fs, i) => (
                <ScrollReveal key={fs.name} delay={i * 60}>
                  <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5">
                    <h4 className="font-heading text-lg font-semibold text-ink mb-2">{fs.name}</h4>
                    <p className="text-xs md:text-sm text-ink-muted leading-relaxed">{fs.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-ink mb-5 text-center">Core Fund Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {fundServices.map((s, i) => (
                <ScrollReveal key={s.title} delay={(i % 3) * 60}>
                  <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-6">
                    <h4 className="font-heading text-base md:text-lg font-semibold text-ink mb-2">{s.title}</h4>
                    <p className="text-xs md:text-sm text-ink-muted leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="automation" className="bg-platinum py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Practice Area 04</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Process Transformation &amp; <span className="text-gradient-gold">Automation</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto">Beyond efficiency, digitisation allows finance teams to shift focus from transactional tasks to strategic roles such as financial planning, forecasting and performance analysis.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {processTransformation.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 mb-4">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </span>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-2">{p.title}</h3>
                  <p className="text-sm md:text-base text-ink-muted">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="compliance" className="bg-page bg-warm-grain py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Practice Area 05</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Regulatory &amp; <span className="text-gradient-gold">Compliance Support</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto">Regulatory reporting is complex, time-sensitive and high-risk. With our experience preparing reports for Goldman Sachs, Macquarie and others, we offer expert preparation, data sourcing and submission.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {complianceAreas.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-7">
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-3 pb-3 border-b border-border">{c.title}</h3>
                  <ul className="space-y-2">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-ink">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="engage" className="bg-platinum py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>How we engage</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                A 4-step path to <span className="text-gradient-gold">steady-state</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {engagementSteps.map((p, i) => (
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

      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Our team</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Senior people you&apos;ll <span className="text-gradient-gold">actually work with</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
            {team.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-7">
                  <div className="flex items-start gap-4 md:gap-6">
                    <img src={t.image} alt={t.name} className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-gold/40 shadow-sm flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-heading text-lg md:text-xl font-semibold text-ink">{t.name}</h3>
                      <p className="text-gold font-medium text-sm mb-3">{t.role}</p>
                      <p className="text-xs md:text-sm text-ink-muted leading-relaxed mb-3">{t.desc}</p>
                      <div className="text-xs text-ink-faint border-t border-border pt-3">
                        <span className="font-semibold text-ink-muted">Ex:</span> {t.ex}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>FAQs</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Frequently asked <span className="text-gradient-gold">questions</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-surface rounded-xl border border-border p-5 md:p-6 transition-all hover:shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-heading text-base md:text-lg font-semibold text-ink pr-4">{f.q}</h3>
                  <svg className="w-5 h-5 text-gold flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-sm md:text-base text-ink-muted mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        tag="Get in touch"
        title="Let's chat"
        titleAccent="further"
        body="We're ready to hear your business story and help you find the solution that makes the most sense — whether that's a single fund-accounting hire or a full GCC build-out."
        primaryCta={{ label: "Start the Conversation", href: "/contact-us" }}
        secondaryCta={{ label: "Offshore Consulting", href: "/offshore-consulting" }}
      />
    </>
  );
}
