import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import SplitPanel from "@amitkk/basic/static/SplitPanel";
import CTABanner from "@amitkk/basic/static/CTABanner";
import StatsStrip from "@amitkk/basic/static/StatsStrip";

const problems = [
  { title: "Manual Invoice Chaos", desc: "Finance teams receive invoices across emails, WhatsApp and portals with no unified system. Human errors multiply daily." },
  { title: "PO Matching Nightmare", desc: "Reconciling invoices against Purchase Orders takes days. Mismatches cause payment delays and vendor disputes." },
  { title: "Compliance Blind Spots", desc: "MSME payment rules, GSTR 2A/2B mismatches and ITC errors go undetected — causing regulatory penalties and losses." },
  { title: "ERP Fragmentation", desc: "SAP, Zoho, Odoo, QuickBooks — each demands separate teams, separate processes and separate budgets." },
];

const ingestionSources = ["Email", "WhatsApp", "Vendor Portal", "Scan / Upload"];
const erpTargets = ["SAP", "Microsoft Dynamics NAV", "Zoho", "Odoo", "QuickBooks", "Tally"];

const features = [
  {
    title: "Omni-Channel Invoice Ingestion",
    desc: "Fetches invoices from Email, WhatsApp, ERP portals and uploads — extracting structured data via OCR + NLP.",
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "3-Way PO Matching",
    desc: "Validates invoices against POs and GRNs, verifies quantities, rates and taxes — flagging discrepancies in real time.",
    iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Auto Vendor & Ledger Posting",
    desc: "Creates vendor master records, classifies expenses and posts journal entries — with zero human touchpoint.",
    iconPath: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
  },
  {
    title: "MSME, GST & TDS Compliance",
    desc: "Auto-checks payment timelines per the MSMED Act, with proactive alerts for upcoming MSME due dates.",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "GSTR 2A/2B Reconciliation",
    desc: "Matches every purchase to GSTR 2A and 2B. Highlights mismatches, omissions and ITC discrepancies automatically.",
    iconPath: "M3 3v18h18M7 17l4-4 4 4 5-5",
    flagship: true,
  },
  {
    title: "Universal ERP Compatibility",
    desc: "Plug-and-play with SAP, Navision, Zoho Books, QuickBooks, Odoo, Tally and more — no re-architecture required.",
    iconPath: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z",
  },
];

const workflow = [
  { step: "01", title: "Invoice Capture", desc: "AI monitors Email, WhatsApp, portals and uploads. Extracts structured data via OCR + NLP.", iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { step: "02", title: "Validate & Match", desc: "Validates data and performs 3-way match against PO / GRN. Flags exceptions for review.", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { step: "03", title: "Vendor & Ledger Setup", desc: "Auto-creates vendor in ERP with GST / TDS / MSME flags. Classifies expenses and posts journal entries.", iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { step: "04", title: "Compliance Check", desc: "MSME Act timelines verified. GSTR 2A/2B reconciliation run. Violation alerts issued.", iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { step: "05", title: "Payment Scheduling", desc: "Queues payments, sends owner approval reminders and tracks disbursement status.", iconPath: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
];

const comparison = [
  { label: "India GST 2A/2B Reconciliation", saviap: "✓", generic: "Partial", manual: "Manual" },
  { label: "MSME Compliance Auto-Check", saviap: "✓", generic: "✗", manual: "Manual" },
  { label: "WhatsApp Invoice Ingestion", saviap: "✓", generic: "✗", manual: "✗" },
  { label: "Auto Vendor Creation in ERP", saviap: "✓", generic: "✗", manual: "✗" },
  { label: "SAP + Zoho + Odoo + QB (all ERPs)", saviap: "✓ All", generic: "1–2 ERPs only", manual: "✗" },
  { label: "Real-time PO Matching", saviap: "✓", generic: "Partial", manual: "Days" },
  { label: "Zero-touch Accounting Entry", saviap: "✓", generic: "Semi-auto", manual: "✗" },
  { label: "India-specific Regulatory AI", saviap: "✓", generic: "✗", manual: "✗" },
];

const benefits = [
  { title: "Zero-Touch Processing", desc: "From invoice arrival to ledger posting — handled by the agent, not your team." },
  { title: "Days to Minutes", desc: "PO matching that took days now happens in real time, the moment an invoice lands." },
  { title: "Compliance, Always On", desc: "MSME, GST 2A/2B and TDS checks run automatically — penalties caught before they happen." },
  { title: "One Agent, Every ERP", desc: "No more separate teams per ERP. Savi-AP works across SAP, Zoho, Odoo, QuickBooks and more." },
  { title: "Fewer Vendor Disputes", desc: "Accurate matching and on-time payments keep vendor relationships clean." },
  { title: "Audit-Ready by Default", desc: "Every action — fetch, match, post, pay — logged and traceable end to end." },
  { title: "Recovered ITC", desc: "GSTR 2A/2B reconciliation surfaces missed input tax credit you'd otherwise lose." },
  { title: "Finance Team, Freed", desc: "Your people move from data entry to decisions, exceptions and vendor strategy." },
];

export default function SaviAP() {
  return (
    <>
      <Hero
        tag="AI Agent · Accounts Payable"
        title="Savi-AP"
        tagline="Your AI-powered Accounts Payable agent — always on, always accurate. Savi-AP runs the full AP lifecycle: it fetches and reads invoices, performs 3-way PO matching, posts entries into your ERP, runs MSME and GST 2A/2B compliance checks, and schedules payments — autonomously."
        variant="dark"
        backgroundImage="/images/static/banners/business-consulting-web-banner.jpg"
        ctas={[
          { label: "Book a Demo", href: "/contact-us" },
          { label: "See How It Works", href: "#how-it-works", variant: "outline" },
        ]}
      />

      {/* Trust strip */}
      <section className="bg-platinum border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "AI Accounts Payable Agent",
              "India Compliance-Native",
              "Universal ERP Support",
              "Zero-Touch Processing",
            ].map((indicator, i) => (
              <ScrollReveal key={indicator} delay={i * 60}>
                <p className="text-xs md:text-sm font-semibold text-ink-muted tracking-wide">{indicator}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Savi-AP — ingestion → agent → ERP */}
      <SplitPanel
        tag="The agent"
        title="Meet"
        titleAccent="Savi-AP"
        side="right"
        body={
          <>
            <p>Your AI-powered Accounts Payable agent — always on, always accurate. Savi-AP sits between every invoice source and your ERP, taking the entire payables workflow off your team&apos;s plate.</p>
            <ul className="space-y-3 mt-2">
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Fetches &amp; reads invoices</strong> from email, WhatsApp, vendor portals and uploads.</span></li>
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Validates &amp; 3-way PO matches</strong> against POs and GRNs in real time.</span></li>
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Creates vendors &amp; posts entries</strong> directly into your ERP, zero-touch.</span></li>
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Runs MSME + GST 2A/2B checks</strong> and triggers payment reminders.</span></li>
            </ul>
          </>
        }
      >
        <div className="bg-navbar bg-dark-grain rounded-2xl p-6 md:p-7 border border-gold/30 text-page">
          <p className="font-heading text-2xl font-semibold text-center mb-1">Savi-AP</p>
          <p className="text-xs text-center text-gold mb-5">AI Accounts Payable Agent</p>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-page/60 mb-2">Ingests from</p>
              <ul className="space-y-1.5">
                {ingestionSources.map((s) => (
                  <li key={s} className="text-sm text-page/90 flex items-center gap-2"><span className="text-gold">→</span>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-page/60 mb-2">Posts into</p>
              <ul className="space-y-1.5">
                {erpTargets.map((e) => (
                  <li key={e} className="text-sm text-page/90 flex items-center gap-2"><span className="text-gold">✓</span>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SplitPanel>

      {/* Problem statement */}
      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Problem statement</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Accounts Payable is still <span className="text-gradient-gold">broken</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto mt-3 italic">Manually, painfully, expensively.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {problems.map((p, i) => (
              <ScrollReveal key={p.title} delay={(i % 2) * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-6">
                  <h3 className="font-heading text-base md:text-lg font-semibold text-ink mb-2 leading-tight">{p.title}</h3>
                  <p className="text-sm text-ink-muted">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key capabilities */}
      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Key capabilities</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                The full AP lifecycle — <span className="text-gradient-gold">end to end</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto mt-3">Savi-AP handles the full accounts-payable lifecycle — from ERP integration to India-specific compliance.</p>
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
                  <p className={`text-sm ${f.flagship ? "text-page/85" : "text-ink-muted"}`}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How Savi-AP works — 5 step workflow */}
      <section id="how-it-works" className="bg-platinum py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>How it works</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Five intelligent steps, <span className="text-gradient-gold">fully automated</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto mt-3">From invoice arrival to payment dispatch — Savi-AP runs every step on its own.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
            {workflow.map((w, i) => (
              <ScrollReveal key={w.step} delay={i * 60}>
                <div className="relative card-hover h-full bg-surface rounded-2xl p-6 md:p-7 border border-border">
                  <span className="absolute -top-4 left-6 px-3 py-0.5 rounded-full bg-navbar text-gold text-xs font-bold tracking-widest border border-gold/40">{w.step}</span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 mb-4 mt-2">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={w.iconPath} />
                    </svg>
                  </span>
                  <h3 className="font-heading text-base md:text-lg font-semibold text-ink mb-2 leading-tight">{w.title}</h3>
                  <p className="text-sm text-ink-muted">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Savi-AP wins — comparison table */}
      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Why Savi-AP wins</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                India-first, ERP-agnostic, <span className="text-gradient-gold">compliance-native</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto mt-3">No competitor matches this stack.</p>
            </ScrollReveal>
          </div>

          <div className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-4 bg-navbar text-page text-xs md:text-base font-heading font-semibold">
              <div className="p-3 md:p-5 border-r border-page/15">Feature</div>
              <div className="p-3 md:p-5 border-r border-page/15 text-gold">Savi-AP</div>
              <div className="p-3 md:p-5 border-r border-page/15 text-page/75">Generic AP Software</div>
              <div className="p-3 md:p-5 text-page/75">Manual Process</div>
            </div>
            {comparison.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-4 text-xs md:text-base ${i % 2 === 0 ? "bg-page" : "bg-platinum"}`}>
                <div className="p-3 md:p-5 border-b border-r border-border font-semibold text-ink">{row.label}</div>
                <div className="p-3 md:p-5 border-b border-r border-border text-gold font-semibold">{row.saviap}</div>
                <div className="p-3 md:p-5 border-b border-r border-border text-ink-muted">{row.generic}</div>
                <div className="p-3 md:p-5 border-b border-border text-ink-muted">{row.manual}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Outcomes</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                What changes when <span className="text-gradient-gold">Savi-AP runs</span>
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
        tag="Why Savi-AP"
        title="Built for"
        titleAccent="Indian finance teams"
        items={[
          { value: "Zero", label: "Touch invoice processing" },
          { value: "100%", label: "GST 2A/2B reconciliation" },
          { value: "All", label: "Major ERPs supported" },
          { value: "24×7", label: "Always-on AP agent" },
        ]}
      />

      <CTABanner
        tag="Get started"
        title="Put your Accounts Payable"
        titleAccent="on autopilot"
        body="Book a 30-minute walkthrough and see Savi-AP fetch, match, post and reconcile a live invoice into your ERP."
        primaryCta={{ label: "Book a Demo", href: "/contact-us" }}
        secondaryCta={{ label: "All AI Agents", href: "/our-ai-agents" }}
      />
    </>
  );
}
