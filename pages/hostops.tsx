import Image from "next/image";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import SplitPanel from "@amitkk/basic/static/SplitPanel";
import CTABanner from "@amitkk/basic/static/CTABanner";
import StatsStrip from "@amitkk/basic/static/StatsStrip";

const problems = [
  { title: "Fragmented Property Operations", desc: "Each property runs on its own stack — POS, PMS, accounts, ops — with no unified view across the group." },
  { title: "Manual Approvals on Email & WhatsApp", desc: "Procurement, expenses and exceptions chase signatures across chats. Nothing is logged, nothing is auditable." },
  { title: "Delayed MIS & Reporting", desc: "Month-end consolidation takes weeks. By the time the numbers land, the month is already over." },
  { title: "Complex Owner Revenue Sharing", desc: "Multi-owner properties, layered shares, and seasonal logic make settlements painful — and error-prone." },
  { title: "Weak Budgeting Controls", desc: "Departments overshoot before anyone notices. Annual budgets and actuals never reconcile cleanly." },
  { title: "No Real-Time Profitability View", desc: "Property-wise P&L lives in spreadsheets. Group-level profitability is reconstructed, not observed." },
  { title: "Manual Data Entry Everywhere", desc: "Operations teams re-key the same transactions into three systems. Mistakes compound, time evaporates." },
  { title: "Operations & Finance Disconnected", desc: "Front-of-house decisions never reach the back office until the books close. Course-correction comes too late." },
];

const features = [
  {
    title: "Property-Wise Budgeting",
    desc: "Annual and monthly budgets with department-level controls. Variance analysis runs continuously, not at quarter-end.",
    bullets: ["Annual + monthly budgeting", "Department-wise controls", "Live variance analysis", "Multi-property roll-up"],
    iconPath: "M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2M3 7h18M3 12h18M3 17h18",
  },
  {
    title: "Live P&L and Cash Flow Tracking",
    desc: "Property-wise profitability and group consolidation in real time. Cash flow intelligence, not retrospective reporting.",
    bullets: ["Live property-wise P&L", "Multi-property consolidation", "Cash flow forecasting", "Trend dashboards"],
    iconPath: "M3 3v18h18M9 17V9m4 8V5m4 12v-7",
  },
  {
    title: "Approval-Driven Operations",
    desc: "Flagship capability. Smart workflows replace repetitive data entry — every transaction routed, logged and audit-ready by default.",
    bullets: ["Department-wise approval flows", "Auto-routed transactions", "Mobile approvals on the go", "Escalation matrix built in"],
    iconPath: "M5 13l4 4L19 7",
    flagship: true,
  },
  {
    title: "Algorithm-Based Owner Settlement",
    desc: "Configurable revenue-sharing engine handles multi-owner, layered and seasonal logic. Accurate settlements, every cycle.",
    bullets: ["Rule-based computation", "Multi-owner structures supported", "Transparent break-up per owner", "Reconciled against books"],
    iconPath: "M17 9V7a5 5 0 00-10 0v2M5 9h14l-1 12H6L5 9z",
  },
  {
    title: "End-to-End Transaction Mapping",
    desc: "Procurement, expenses, vendors and revenue all sit in one ledger of operational truth — not eight disconnected systems.",
    bullets: ["Procurement workflows", "Vendor master & lifecycle", "Expense approvals end-to-end", "Revenue ↔ ops linkage"],
    iconPath: "M4 4h16v4H4zM4 12h16v4H4zM4 20h10",
  },
  {
    title: "Multi-Property Management",
    desc: "Centralised control with property-level drilldowns. Comparative analytics across the group, without rebuilding reports each month.",
    bullets: ["Single pane across properties", "Drilldown to single property", "Comparative analytics", "Group-wide reporting"],
    iconPath: "M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01",
  },
];

const workflow = [
  { step: "01", title: "Operation Initiated", desc: "Front desk, F&B, procurement or any department raises a transaction.", iconPath: "M12 4v16m8-8H4" },
  { step: "02", title: "Smart Approval Flow", desc: "Routed automatically to the right approver, with escalation and mobile sign-off.", iconPath: "M9 5l7 7-7 7" },
  { step: "03", title: "Financial Mapping", desc: "Transaction is auto-tagged, posted to the right GL and linked back to ops.", iconPath: "M4 4h16v16H4zM8 12l3 3 5-7" },
  { step: "04", title: "Real-Time Reporting", desc: "Budget variance, P&L, cash flow and exceptions update the moment it happens.", iconPath: "M3 3v18h18M7 17l4-4 4 4 5-5" },
  { step: "05", title: "Owner Settlement", desc: "Revenue-sharing engine runs the rules, produces a per-owner break-up.", iconPath: "M17 9V7a5 5 0 00-10 0v2M5 9h14l-1 12H6L5 9z" },
  { step: "06", title: "Actionable Insights", desc: "AI-led signals on profitability, leakage and exceptions — surfaced where decisions get made.", iconPath: "M13 10V3L4 14h7v7l9-11h-7z" },
];

const comparison = [
  {
    label: "Approach to data entry",
    erp: "Repetitive manual entry across modules",
    hostops: "Approval-first — entry happens once, then flows",
  },
  {
    label: "Workflow logic",
    erp: "Generic, retrofitted for hospitality",
    hostops: "Hospitality-native, designed for the business",
  },
  {
    label: "Reporting cadence",
    erp: "Periodic, after the month closes",
    hostops: "Real-time, as operations happen",
  },
  {
    label: "Owner settlements",
    erp: "Custom spreadsheets and manual computation",
    hostops: "Algorithmic engine, multi-owner ready",
  },
  {
    label: "Ops + Finance integration",
    erp: "Disconnected — bridged by data entry teams",
    hostops: "Unified — one system, one source of truth",
  },
  {
    label: "Configurability",
    erp: "Long IT cycles for every change",
    hostops: "Rule changes by business users, no code",
  },
];

const aiFeatures = [
  { title: "AI-Assisted Approvals", desc: "Pattern recognition flags unusual approval requests and suggests routing based on history." },
  { title: "Smart Transaction Tagging", desc: "Auto-categorise transactions against budget heads and GL — humans review, not classify." },
  { title: "Predictive Financial Insights", desc: "Forward-looking cash flow, occupancy-linked revenue forecasts and budget burn projections." },
  { title: "Exception Alerts", desc: "Anomalies in spend, revenue leakage and approval bottlenecks surface before they become problems." },
];

const benefits = [
  { title: "Faster Approvals", desc: "From days on WhatsApp to minutes inside HostOps." },
  { title: "Reduced Manual Dependency", desc: "Operations teams stop re-keying. Finance teams stop chasing." },
  { title: "Real Financial Visibility", desc: "Live P&L, live cash flow, live variance — no waiting on month-end." },
  { title: "Accurate Owner Settlements", desc: "Algorithmic computation, defensible audit trail, zero disputes." },
  { title: "Operational Control", desc: "Budget governance with teeth. Spend stays where it should." },
  { title: "Real-Time Decisions", desc: "Decide on today's numbers, not last month's reconstruction." },
  { title: "Multi-Property Scale", desc: "Add a property without adding overhead. Group reporting just works." },
  { title: "Profitability Insights", desc: "Department, property, segment, owner — profitability sliced the way you actually run the business." },
];

const testimonials = [
  { quote: "We collapsed our month-end close from 18 days to under a week. The owner settlement engine alone has eliminated the disputes that used to take half of my reconciliation calls.", name: "Hospitality CFO", company: "Boutique Resort Group (12 properties)" },
  { quote: "Approvals used to live on WhatsApp. Now they live in HostOps — with a logged trail, escalation if they sit too long, and a real audit history. My ops team got their evenings back.", name: "Head of Operations", company: "City Hotel Chain" },
  { quote: "I run six properties with three different ownership structures. HostOps is the only system that handled my multi-owner share computation without bespoke spreadsheets.", name: "Hospitality Group Owner", company: "Mixed-Format Portfolio" },
  { quote: "Real-time P&L visibility changed how my GMs run their properties. They see the variance the same day, not three weeks later when nothing can be fixed.", name: "Finance Controller", company: "Serviced Apartments Group" },
];

export default function HostOps() {
  return (
    <>
      <Hero
        tag="Product · Hospitality Operations"
        title="HostOps"
        tagline="Intelligent hospitality operations and financial command centre. An AI-driven CRM and operational platform — built exclusively for hospitality — that unifies budgeting, approvals, owner settlements, profitability and transaction workflows in one ecosystem."
        variant="dark"
        backgroundImage="/images/static/banners/business-consulting-web-banner.jpg"
        ctas={[
          { label: "Book a Demo", href: "/contact-us" },
          { label: "See How It Works", href: "#how-it-works", variant: "outline" },
        ]}
      />

      {/* Trust indicators strip */}
      <section className="bg-platinum border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Built Exclusively for Hospitality",
              "Multi-Property Ready",
              "Approval-Driven Operations",
              "Finance + Operations Unified",
            ].map((indicator, i) => (
              <ScrollReveal key={indicator} delay={i * 60}>
                <p className="text-xs md:text-sm font-semibold text-ink-muted tracking-wide">{indicator}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product visual + intro */}
      <SplitPanel
        tag="Product"
        title="Meet"
        titleAccent="HostOps"
        side="right"
        body={
          <>
            <p>An AI-driven operations and finance platform purpose-built for the hospitality industry. From front-of-house transactions to owner-share settlements, HostOps replaces fragmented systems and email approvals with one unified, audit-ready ecosystem.</p>
            <ul className="space-y-3 mt-2">
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Hospitality-native workflows</strong> — built for hotels, resorts, serviced apartments, clubs and restaurants.</span></li>
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Approval-first architecture</strong> — every transaction logged, routed and audit-ready by default.</span></li>
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Real-time financial control</strong> — live P&L, cash flow and budget variance across every property.</span></li>
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Owner settlement engine</strong> — algorithmic, multi-owner ready, defensible at every payout.</span></li>
            </ul>
          </>
        }
      >
        <div className="w-full max-w-md mx-auto">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-border shadow-sm bg-platinum">
            <Image
              src="/images/static/banners/Host_Ops.jpeg"
              alt="HostOps — Intelligent Hospitality Operations"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
              priority
            />
          </div>
          <a
            href="https://hostops.savitursolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center mt-4"
          >
            Try Live Demo<span aria-hidden>→</span>
          </a>
        </div>
      </SplitPanel>

      {/* Industry problems */}
      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Industry reality</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Where hospitality teams <span className="text-gradient-gold">lose the plot</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto mt-3 italic">&ldquo;Hospitality operations are dynamic. Traditional ERPs were never built for them.&rdquo;</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {problems.map((p, i) => (
              <ScrollReveal key={p.title} delay={(i % 4) * 60}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-6">
                  <h3 className="font-heading text-base md:text-lg font-semibold text-ink mb-2 leading-tight">{p.title}</h3>
                  <p className="text-sm text-ink-muted">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core platform features */}
      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Core platform</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Built for how hospitality <span className="text-gradient-gold">actually runs</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto mt-3">Six capabilities that replace the spreadsheets, the WhatsApp groups and the disconnected systems.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={(i % 3) * 60}>
                <div className={`card-hover h-full rounded-2xl p-6 md:p-7 border transition-all ${f.flagship ? "bg-navbar text-page border-gold shadow-lg bg-dark-grain" : "bg-surface border-border"}`}>
                  {f.flagship && (
                    <span className="inline-block bg-gold text-navbar text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3">Flagship</span>
                  )}
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border mb-4 ${f.flagship ? "border-gold/60 bg-gold/15" : "border-gold/40 bg-gold/5"}`}>
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={f.iconPath} />
                    </svg>
                  </span>
                  <h3 className={`font-heading text-lg md:text-xl font-semibold mb-2 ${f.flagship ? "text-page" : "text-ink"}`}>{f.title}</h3>
                  <p className={`text-sm mb-4 ${f.flagship ? "text-page/85" : "text-ink-muted"}`}>{f.desc}</p>
                  <ul className="space-y-1.5">
                    {f.bullets.map((b) => (
                      <li key={b} className={`flex items-start gap-2 text-xs ${f.flagship ? "text-page/90" : "text-ink"}`}>
                        <span className="text-gold mt-0.5">✓</span>
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

      {/* How HostOps works — 6 step workflow */}
      <section id="how-it-works" className="bg-platinum py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>How it works</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Operations to insights — <span className="text-gradient-gold">in one flow</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {workflow.map((w, i) => (
              <ScrollReveal key={w.step} delay={i * 60}>
                <div className="relative card-hover h-full bg-surface rounded-2xl p-6 md:p-7 border border-border">
                  <span className="absolute -top-4 left-6 px-3 py-0.5 rounded-full bg-navbar text-gold text-xs font-bold tracking-widest border border-gold/40">{w.step}</span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 mb-4 mt-2">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={w.iconPath} />
                    </svg>
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-ink mb-2">{w.title}</h3>
                  <p className="text-sm text-ink-muted">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why HostOps is different — Traditional ERP vs HostOps */}
      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Why HostOps</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Traditional ERP vs <span className="text-gradient-gold">HostOps</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>

          <div className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-navbar text-page text-sm md:text-base font-heading font-semibold">
              <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-page/15">Dimension</div>
              <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-page/15 text-page/75">Traditional ERP</div>
              <div className="p-4 md:p-5 text-gold">HostOps</div>
            </div>
            {comparison.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-1 md:grid-cols-3 text-sm md:text-base ${i % 2 === 0 ? "bg-page" : "bg-platinum"}`}>
                <div className="p-4 md:p-5 border-b md:border-b border-border font-semibold text-ink md:border-r">{row.label}</div>
                <div className="p-4 md:p-5 border-b md:border-b border-border text-ink-muted md:border-r">{row.erp}</div>
                <div className="p-4 md:p-5 border-b md:border-b border-border text-ink"><span className="text-gold mr-2">✓</span>{row.hostops}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Automation Layer */}
      <section className="bg-navbar bg-dark-grain text-page py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag hero>Intelligence layer</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-page">
                Powered by intelligent <span className="text-gradient-gold">workflow automation</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-page/75 max-w-3xl mx-auto mt-3">AI doesn&apos;t replace your operators — it removes the work that shouldn&apos;t need them.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {aiFeatures.map((a, i) => (
              <ScrollReveal key={a.title} delay={(i % 4) * 60}>
                <div className="h-full bg-page/5 border border-page/15 rounded-2xl p-5 md:p-6 backdrop-blur-sm">
                  <h3 className="font-heading text-base md:text-lg font-semibold text-gold mb-2">{a.title}</h3>
                  <p className="text-sm text-page/80">{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Outcomes</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                What changes when <span className="text-gradient-gold">HostOps runs</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={(i % 4) * 60}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-6">
                  <h3 className="font-heading text-base md:text-lg font-semibold text-ink mb-2">{b.title}</h3>
                  <p className="text-sm text-ink-muted">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsStrip
        tag="Why HostOps"
        title="Built for"
        titleAccent="hospitality scale"
        items={[
          { value: "Days", label: "Close cycle, not weeks" },
          { value: "100%", label: "Audit-ready workflows" },
          { value: "Multi", label: "Property & owner ready" },
          { value: "Live", label: "P&L and cash flow" },
        ]}
      />

      {/* Testimonials */}
      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Voices</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                What hospitality leaders <span className="text-gradient-gold">tell us</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={(i % 2) * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-6 md:p-7 flex flex-col">
                  <p className="text-sm md:text-base text-ink-muted italic mb-5 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
                    <div className="w-10 h-10 rounded-full bg-navbar text-gold border border-gold/40 flex items-center justify-center font-bold flex-shrink-0">{t.name.charAt(0)}</div>
                    <div>
                      <p className="font-semibold text-ink text-sm">{t.name}</p>
                      <p className="text-xs text-ink-faint">{t.company}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        tag="Transform operations"
        title="Transform hospitality operations with"
        titleAccent="intelligence"
        body="Move beyond spreadsheets, fragmented approvals and delayed reporting. Book a 30-minute walkthrough with our HostOps team."
        primaryCta={{ label: "Schedule Demo", href: "/contact-us" }}
        secondaryCta={{ label: "Talk to Expert", href: "/contact-us" }}
      />
    </>
  );
}
