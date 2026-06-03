import Image from "next/image";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import SplitPanel from "@amitkk/basic/static/SplitPanel";
import CTABanner from "@amitkk/basic/static/CTABanner";
import StatsStrip from "@amitkk/basic/static/StatsStrip";

const trustHighlights = [
  "Pan-India Service Operations",
  "Real-Time Call Tracking",
  "Cash & UPI Reconciliation",
  "Engineer Productivity Analytics",
];

const problems = [
  { title: "Manual Call Tracking", desc: "Service calls live in spreadsheets, WhatsApp groups and engineer phone logs — never in one place." },
  { title: "Delayed Engineer Updates", desc: "Field engineers update status hours after closure. Operations chases for visibility every shift." },
  { title: "No Real-Time Closure View", desc: "Branch and national heads have no live picture of which calls closed today, where, by whom." },
  { title: "Cash Collection Blind Spots", desc: "Engineers collect cash, hand it over later, and the trail relies on memory and slips." },
  { title: "UPI Reconciliation Complexity", desc: "UPI transactions land in personal apps or branch accounts — matching them back to service calls is a manual nightmare." },
  { title: "Revenue Leakage Risk", desc: "Collections happen, calls close — but the two never tie up. Quiet leakage compounds across thousands of calls." },
  { title: "Scattered Branch Reporting", desc: "Every branch sends its own format, on its own cadence. Consolidation eats days of finance team capacity." },
  { title: "Weak Engineer Accountability", desc: "Productivity, SLA performance and collection efficiency by engineer — invisible until the customer complains." },
  { title: "Delayed MIS & Reporting", desc: "Operational dashboards arrive when the month is over. Decisions are always retrospective." },
  { title: "No Centralised Monitoring", desc: "Pan-India operations run as ten disconnected regional ops, not one unified network." },
];

const features = [
  {
    title: "Service Call Upload & Management",
    desc: "Bulk-upload service calls, allocate to branches and engineers, route by priority and SLA — all from one operational dashboard.",
    bullets: ["Bulk service call uploads", "Branch-wise call allocation", "Engineer assignment workflows", "Priority and SLA routing", "Real-time call monitoring"],
    iconPath: "M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2M3 7h18M3 12h18M3 17h12",
  },
  {
    title: "Engineer-Based Call Closure",
    desc: "Field engineers close calls from mobile with geo-tagging, digital proof and customer acknowledgement — instant operational visibility.",
    bullets: ["Mobile closure updates", "Live status tracking", "Geo-tagged completion", "Digital proof uploads", "Customer acknowledgement"],
    iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Cash & UPI Collection Tracking",
    desc: "Every collection — cash or UPI — captured against the service call, the engineer and the branch. Full audit trail from first rupee to settlement.",
    bullets: ["Call-wise payment tracking", "Cash recording", "UPI transaction monitoring", "Engineer-wise collections", "Full audit trail"],
    iconPath: "M3 10h18M3 6h18M5 14h14M7 18h10",
  },
  {
    title: "Automated Reconciliation Engine",
    desc: "Match every collection against every service call automatically. Mismatches surface instantly — leakage stops where it starts.",
    bullets: ["Auto-match collections to calls", "Instant mismatch detection", "Engineer-wise reconciliation", "Branch-wise reconciliation", "Pending settlement tracker", "Exception dashboard"],
    iconPath: "M5 13l4 4L19 7",
    flagship: true,
  },
  {
    title: "Engineer Productivity Dashboard",
    desc: "Live view of calls completed, turnaround time, collection efficiency and regional performance — by engineer, by team, by zone.",
    bullets: ["Calls per engineer", "Daily productivity", "TAT analytics", "Collection efficiency", "Regional comparison"],
    iconPath: "M3 3v18h18M9 17V9m4 8V5m4 12v-7",
  },
  {
    title: "Intelligent Call Tracker",
    desc: "Open vs closed, SLA breach alerts, zone-wise tracking and automatic escalation when calls go stale. Operations sees the truth, live.",
    bullets: ["Open vs closed visibility", "Pending call alerts", "SLA breach monitoring", "Escalation workflows", "Zone-wise tracking"],
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const workflow = [
  { step: "01", title: "Service Calls Uploaded", desc: "Bulk upload or system integration. Calls land in eTCR with priority and SLA pre-tagged.", iconPath: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" },
  { step: "02", title: "Engineer Assignment", desc: "Routed automatically by zone, skill and load — or assigned manually by the branch supervisor.", iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { step: "03", title: "Field Service Execution", desc: "Engineer attends, executes, captures status and customer feedback from the mobile app.", iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { step: "04", title: "Digital Call Closure", desc: "Closure logged with geo-tag, proof images, customer ack — visible to the entire operations chain.", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { step: "05", title: "Payment Collection", desc: "Cash or UPI captured against the call. Engineer-wise collection ledger updates in real time.", iconPath: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
  { step: "06", title: "Automated Reconciliation", desc: "Collections matched to calls. Mismatches flagged. Pending settlements queued for action.", iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
  { step: "07", title: "Productivity & MIS", desc: "National, branch, engineer dashboards refresh live. Decisions happen on today's data.", iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
];

const dashboards = [
  "National Operations Dashboard",
  "Branch-Wise Call Tracker",
  "Engineer Productivity Dashboard",
  "Collection Reconciliation Reports",
  "Cash vs UPI Analytics",
  "SLA Monitoring Dashboard",
  "Pending Closure Reports",
  "Operational MIS & Insights",
];

const comparison = [
  { label: "Service call tracking", traditional: "Spreadsheets and WhatsApp updates", etcr: "Real-time central dashboard, mobile-first" },
  { label: "Engineer closures", traditional: "Phone calls and end-of-day updates", etcr: "Geo-tagged, proof-backed, instant" },
  { label: "Collection visibility", traditional: "Slips, memory and end-of-week tallies", etcr: "Live cash and UPI ledger per engineer" },
  { label: "Reconciliation", traditional: "Manual matching, days behind", etcr: "Automated matching, exceptions only" },
  { label: "Reporting cadence", traditional: "Branch-wise, weekly, lagging", etcr: "Pan-India, live, drillable" },
  { label: "Engineer accountability", traditional: "Anecdotal, manager-driven", etcr: "Metric-driven, by call, by collection" },
  { label: "Revenue leakage", traditional: "Discovered after the fact, if at all", etcr: "Prevented at the source — flagged on day one" },
];

const automationFeatures = [
  { title: "Smart Reconciliation Engine", desc: "Pattern-based matching across UPI references, cash drops and call closures — handles the messy real-world cases." },
  { title: "Automated Mismatch Detection", desc: "Collections that don't tie to calls — or vice versa — surface within minutes, not weeks." },
  { title: "SLA Risk Alerts", desc: "Calls trending toward breach get flagged before they breach. Escalation routes engage automatically." },
  { title: "Exception Notifications", desc: "Anomalous patterns — collection drops, productivity dips, branch lag — alert the right people, right away." },
];

const benefits = [
  { title: "Faster Call Closures", desc: "Mobile-first workflow cuts hours from every service call." },
  { title: "Engineer Accountability", desc: "Every call, every collection, every minute — measurable per engineer." },
  { title: "Zero Collection Leakage", desc: "Automated reconciliation closes the gap between calls and cash." },
  { title: "Reconciliation Accuracy", desc: "Algorithmic matching replaces manual verification at scale." },
  { title: "Real-Time Visibility", desc: "Operations sees the truth as it happens — not three days later." },
  { title: "Faster Branch Reporting", desc: "Pan-India consolidation is automatic, not a Monday-morning fire drill." },
  { title: "Stronger Financial Controls", desc: "Cash and UPI flows are auditable end-to-end, by design." },
  { title: "Better Decision-Making", desc: "Productivity, leakage and SLA data — live, drillable, actionable." },
];

const testimonials = [
  { quote: "eTCR helped us centralise service operations across multiple cities while improving collection visibility significantly.", name: "National Service Operations Head", company: "Multi-City Service Network" },
  { quote: "The reconciliation engine reduced manual verification efforts drastically and improved operational transparency.", name: "Finance & Collections Manager", company: "Pan-India Service Group" },
  { quote: "Engineer productivity tracking and real-time closures have transformed how our branch operations actually run.", name: "Regional Operations Manager", company: "Appliances Service Chain" },
];

export default function ETCR() {
  return (
    <>
      <Hero
        tag="Product · Service Operations"
        title="eTCR"
        tagline="Intelligent service operations and collection reconciliation platform. Manage service calls, engineer closures, customer collections, UPI tracking and reconciliation workflows across your entire pan-India service network — from one unified operational platform."
        variant="dark"
        backgroundImage="/images/static/banners/business-consulting-web-banner.jpg"
        ctas={[
          { label: "Schedule Demo", href: "/contact-us" },
          { label: "Request Live Walkthrough", href: "/contact-us", variant: "outline" },
        ]}
      />

      {/* Supporting line + trust strip */}
      <section className="bg-platinum border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <p className="text-center text-sm md:text-base text-ink-muted italic mb-5">
            Built for mobile, AC, TV, appliance and electronics service centres handling high-volume field operations and collections.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {trustHighlights.map((indicator, i) => (
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
        titleAccent="eTCR"
        side="right"
        body={
          <>
            <p>An AI-driven service operations platform purpose-built for high-volume pan-India service networks. From the moment a service call is logged to the moment its collection is reconciled, eTCR replaces spreadsheets, WhatsApp groups and disconnected branch reporting with one unified operational backbone.</p>
            <ul className="space-y-3 mt-2">
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Pan-India operations in one view</strong> — every branch, every engineer, every call, every collection.</span></li>
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Mobile-first field execution</strong> — engineers close calls with geo-tagging, digital proof and customer acknowledgement.</span></li>
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Automated cash + UPI reconciliation</strong> — match every collection to every call, surface every mismatch.</span></li>
              <li className="flex items-start gap-3"><span className="text-gold text-xl leading-none mt-1">•</span><span><strong className="text-ink">Engineer productivity, measured</strong> — calls, TAT, collections, regional performance, all live.</span></li>
            </ul>
          </>
        }
      >
        <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-border shadow-sm bg-platinum">
          <Image
            src="/images/static/banners/etcr.jpeg"
            alt="eTCR — Intelligent Service Operations & Collection Reconciliation Platform"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover"
            priority
          />
        </div>
      </SplitPanel>

      {/* Industry problems */}
      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Industry reality</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Service operations become chaotic when <span className="text-gradient-gold">visibility is missing</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto mt-3 italic">&ldquo;Traditional service operations cannot scale efficiently on spreadsheets, WhatsApp updates and disconnected systems.&rdquo;</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {problems.map((p, i) => (
              <ScrollReveal key={p.title} delay={(i % 5) * 60}>
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
                Everything your service network needs — <span className="text-gradient-gold">in one platform</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto mt-3">Six capabilities that replace the spreadsheets, the WhatsApp updates and the disconnected branch systems.</p>
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

      {/* How eTCR works — 7 step workflow */}
      <section id="how-it-works" className="bg-platinum py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>How it works</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Simplifying end-to-end <span className="text-gradient-gold">service operations</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {workflow.map((w, i) => (
              <ScrollReveal key={w.step} delay={i * 60}>
                <div className="relative card-hover h-full bg-surface rounded-2xl p-6 md:p-7 border border-border">
                  <span className="absolute -top-4 left-6 px-3 py-0.5 rounded-full bg-navbar text-gold text-xs font-bold tracking-widest border border-gold/40">{w.step}</span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 mb-4 mt-2">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={w.iconPath} />
                    </svg>
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-ink mb-2 leading-tight">{w.title}</h3>
                  <p className="text-sm text-ink-muted">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard modules */}
      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Dashboards</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Complete operational <span className="text-gradient-gold">visibility</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto mt-3">Eight live dashboards covering every level of your service network — from a single engineer to the full pan-India view.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {dashboards.map((d, i) => (
              <ScrollReveal key={d} delay={(i % 4) * 60}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-6 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gold/40 bg-gold/5 flex-shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M7 17l4-4 4 4 5-5" />
                    </svg>
                  </span>
                  <h3 className="font-heading text-sm md:text-base font-semibold text-ink leading-tight">{d}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why eTCR — Traditional vs eTCR */}
      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Why eTCR</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Built specifically for high-volume <span className="text-gradient-gold">service networks</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>

          <div className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-navbar text-page text-sm md:text-base font-heading font-semibold">
              <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-page/15">Dimension</div>
              <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-page/15 text-page/75">Traditional process</div>
              <div className="p-4 md:p-5 text-gold">With eTCR</div>
            </div>
            {comparison.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-1 md:grid-cols-3 text-sm md:text-base ${i % 2 === 0 ? "bg-page" : "bg-platinum"}`}>
                <div className="p-4 md:p-5 border-b md:border-b border-border font-semibold text-ink md:border-r">{row.label}</div>
                <div className="p-4 md:p-5 border-b md:border-b border-border text-ink-muted md:border-r">{row.traditional}</div>
                <div className="p-4 md:p-5 border-b md:border-b border-border text-ink"><span className="text-gold mr-2">✓</span>{row.etcr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Automation Layer */}
      <section className="bg-navbar bg-dark-grain text-page py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag hero>Automation</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-page">
                Intelligent operations. <span className="text-gradient-gold">Automated control.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-page/75 max-w-3xl mx-auto mt-3">Smart workflows, automated reconciliation and exception-led alerts — the engine that keeps a pan-India service network running on autopilot.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {automationFeatures.map((a, i) => (
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
                Real <span className="text-gradient-gold">operational impact</span>
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
        tag="Built for scale"
        title="Engineered for"
        titleAccent="pan-India service"
        items={[
          { value: "Live", label: "Call & collection visibility" },
          { value: "100%", label: "Reconciliation accuracy" },
          { value: "Mobile", label: "First field execution" },
          { value: "Zero", label: "Leakage by design" },
        ]}
      />

      {/* Testimonials */}
      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Voices</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Trusted by <span className="text-gradient-gold">service operations teams</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 80}>
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
        tag="Digitise operations"
        title="Digitise every service call."
        titleAccent="Track every collection."
        body="Bring operational control, payment transparency and engineer accountability into one intelligent platform. Book a 30-minute walkthrough with the eTCR team."
        primaryCta={{ label: "Schedule Demo", href: "/contact-us" }}
        secondaryCta={{ label: "Talk to Expert", href: "/contact-us" }}
      />
    </>
  );
}
