import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import CTABanner from "@amitkk/basic/static/CTABanner";

const CAREERS_EMAIL = "careers@savitursolutions.com";

const openings = [
  {
    title: "Finance Domain Expert — Audit & Assurance",
    type: "Full-time",
    location: "Gurugram, India",
    dept: "Audit",
    desc: "Lead statutory, internal and tax audits for SME and mid-market clients. You'll own audit planning, fieldwork, finalisation and client conversations end-to-end.",
    skills: ["Finance Domain · 4-8 yrs", "Ind AS / IFRS", "Statutory & Tax Audit", "Client Management"],
  },
  {
    title: "Fund Accountant — Investment Operations",
    type: "Full-time",
    location: "Gurugram / Remote",
    dept: "Fund Management",
    desc: "Run NAV calculation, waterfall and carry computations, capital calls, distributions and investor reporting for PE/VC funds, FoF and SPVs.",
    skills: ["CFA / MBA Finance / Finance Domain", "Fund Accounting · 2-5 yrs", "FundCount / NAV Tools", "US GAAP / IFRS"],
  },
  {
    title: "FP&A Analyst — Business Consulting",
    type: "Full-time",
    location: "Gurugram, India",
    dept: "Consulting",
    desc: "Build financial models, rolling forecasts, driver-based plans and MIS dashboards for founder-led businesses. Partner directly with client CFOs and CEOs.",
    skills: ["MBA Finance / Finance Domain · 2-4 yrs", "Advanced Excel / Power BI", "Financial Modelling", "MIS & KPIs"],
  },
  {
    title: "Tax & Compliance Manager",
    type: "Full-time",
    location: "Gurugram, India",
    dept: "Tax",
    desc: "Own GST, TDS, direct tax, ROC and FEMA compliance calendars for a portfolio of clients. Handle assessments, litigation support and proactive advisory.",
    skills: ["Finance Domain · 3-6 yrs", "GST · Direct Tax", "FEMA / RBI Filings", "Litigation Support"],
  },
  {
    title: "AI Solutions Engineer — Skimaa & Product Group",
    type: "Full-time",
    location: "Remote / India",
    dept: "Product Engineering",
    desc: "Ship production-grade AI features into our reconciliation and finance-automation products. RAG pipelines, document intelligence and matching engines.",
    skills: ["Python · 3-6 yrs", "LangChain / LLMs", "ML Ops · Vector DBs", "Postgres / MongoDB"],
  },
  {
    title: "Process Digitisation Consultant",
    type: "Full-time",
    location: "Gurugram (Travel required)",
    dept: "Tech Consulting",
    desc: "Translate finance and operations workflows into digital systems — Zoho, RPA, custom apps. Run discovery, scoping, design and rollout for clients.",
    skills: ["B.Tech / MBA · 3-7 yrs", "Zoho One / RPA", "Process Mapping", "Stakeholder Management"],
  },
  {
    title: "Senior Business Consultant — Founder-Led Companies",
    type: "Full-time",
    location: "Gurugram, India",
    dept: "Consulting",
    desc: "Act as a fractional CFO and growth partner for early- and growth-stage businesses. Strategy, fundraising readiness, board reporting and unit economics.",
    skills: ["MBA / Finance Domain · 6-10 yrs", "CFO / FP&A Background", "Fundraising Support", "Board Communication"],
  },
];

const perks = [
  {
    name: "Founder-Grade Ownership",
    desc: "You'll own the client outcome, not just a slice. The co-founders stay engaged on every account — you'll see how they think.",
    iconPath: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 6l1.035-.259a3.375 3.375 0 002.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
  },
  {
    name: "Top-Tier Exposure",
    desc: "Work alongside ex-Goldman, KPMG, Macquarie, Vedanta and Samsung leaders. Pick up the playbooks they brought from those firms.",
    iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    name: "Hybrid & Flexible",
    desc: "Gurugram HQ with remote flexibility. We optimise for output and quality of judgement, not seat time.",
    iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    name: "Competitive Compensation",
    desc: "Market-rate salaries, performance bonuses and ESOPs for senior roles in the product group.",
    iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

function applyHref(role?: string) {
  if (!role) return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("Open application — Savitron.ai")}`;
  const subject = encodeURIComponent(`Application — ${role}`);
  const body = encodeURIComponent(
    `Hi Savitron.ai team,\n\nI'd like to apply for the ${role} role.\n\nPlease find my CV and a short note about my background attached / pasted below.\n\nName:\nLocation:\nYears of experience:\nLinkedIn:\nNotice period:\n\nThanks,`
  );
  return `mailto:${CAREERS_EMAIL}?subject=${subject}&body=${body}`;
}

export default function CareersPage() {
  return (
    <>
      <Hero
        tag="Careers"
        title="Join the team building"
        titleAccent="Savitron.ai."
        tagline="We're a finance-domain technology firm. We hire people who care about craft, clarity and client outcomes."
        variant="dark"
        align="left"
        size="md"
        ctas={[
          { label: "View Open Roles", href: "#openings" },
          { label: "Send Us Your CV", href: applyHref(), variant: "outline" },
        ]}
      />

      {/* Culture + perks */}
      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal direction="left">
              <SectionTag>Culture</SectionTag>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink leading-tight">
                How we <span className="text-gradient-gold">work</span>
              </h2>
              <div className="divider-gold-left" />
              <p className="text-base md:text-lg text-ink-muted mt-2">
                We believe the best work comes from people who genuinely care — about the numbers, about the client, and about each other.
              </p>
              <p className="text-sm md:text-base text-ink-muted mt-4">
                Savitron.ai is small enough that ownership is real. Every team member has direct exposure to founders, CFOs and audit committees from day one. Senior leaders coach, but they don&apos;t hand-off — you&apos;ll see how decisions get made, not just hear about them afterwards.
              </p>
              <p className="text-sm md:text-base text-ink-muted mt-4">
                We move fast, but we don&apos;t cut corners. Accuracy is non-negotiable. Quality of judgement compounds over a career, and we&apos;re here for the long arc.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {perks.map((perk, i) => (
                <ScrollReveal key={perk.name} delay={i * 80} direction="right">
                  <div className="card-hover h-full bg-surface rounded-2xl p-5 md:p-6 shadow-sm border border-border">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 text-gold mb-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d={perk.iconPath} />
                      </svg>
                    </span>
                    <h3 className="font-heading text-base md:text-lg font-semibold text-ink mb-1">{perk.name}</h3>
                    <p className="text-sm text-ink-muted">{perk.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="openings" className="bg-platinum py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal>
              <SectionTag>Open positions</SectionTag>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Current <span className="text-gradient-gold">openings</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <div className="divider-gold" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-2xl mx-auto">{openings.length} roles open across audit, fund operations, consulting and the product group.</p>
            </ScrollReveal>
          </div>

          <div className="space-y-4 md:space-y-5">
            {openings.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 60}>
                <div className="bg-surface border border-border rounded-2xl p-5 md:p-7 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">{job.dept}</span>
                        <span className="text-ink-faint">·</span>
                        <span className="text-xs text-ink-muted">{job.type}</span>
                        <span className="text-ink-faint">·</span>
                        <span className="text-xs text-ink-muted">{job.location}</span>
                      </div>
                      <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-semibold text-ink mb-2">{job.title}</h3>
                      <p className="text-sm text-ink-muted leading-relaxed mb-4">{job.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span key={skill} className="text-xs px-3 py-1 rounded-full bg-gold/10 text-ink border border-gold/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <a href={applyHref(job.title)} className="btn-primary whitespace-nowrap text-sm">
                        Apply Now<span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-10 md:mt-14 text-center">
              <div className="bg-surface border border-border rounded-2xl p-7 md:p-10 max-w-2xl mx-auto">
                <SectionTag>Open application</SectionTag>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-ink mb-2">Don&apos;t see a role that fits?</h3>
                <p className="text-sm md:text-base text-ink-muted mb-5">
                  We&apos;re always looking for exceptional Chartered Accountants, fund accountants, consultants and product engineers. If you&apos;d like to work with us, drop your CV — we read every application.
                </p>
                <a href={applyHref()} className="btn-outline">
                  Send Us Your CV<span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner
        tag="Let's talk"
        title="Curious about a role?"
        titleAccent="Have a chat."
        body="Reach out to our talent team — even an exploratory conversation. We're happy to share what working at Savitron.ai looks like."
        primaryCta={{ label: "Email Careers", href: `mailto:${CAREERS_EMAIL}` }}
        secondaryCta={{ label: "About Savitron.ai", href: "/about" }}
      />
    </>
  );
}
