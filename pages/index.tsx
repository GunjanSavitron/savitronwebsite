import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import SectionTag from "@amitkk/basic/static/SectionTag";
import CTABanner from "@amitkk/basic/static/CTABanner";
import StatsStrip from "@amitkk/basic/static/StatsStrip";

const industries = [
  { icon: "⚙", label: "Auto Ancillaries" },
  { icon: "✈", label: "Aviation" },
  { icon: "🏨", label: "Hospitality" },
  { icon: "🛒", label: "Retail — GT" },
  { icon: "💊", label: "Pharmaceuticals" },
  { icon: "🛍", label: "E-Commerce" },
  { icon: "🚢", label: "Shipping" },
  { icon: "🏭", label: "Manufacturing" },
  { icon: "🤝", label: "Service Industry" },
  { icon: "💎", label: "Customer Experience" },
];

const tickerItems = [
  "Business Consulting",
  "Tech Consulting",
  "AI & ERP Transformation",
  "Fund Accounting",
  "Tax Advisory",
  "CFO Advisory",
  "Product Engineering",
  "Agentic AI",
  "Digital Transformation",
];

const services = [
  { id: "business-consulting", title: "Business Consulting", icon: "/images/icons/services/business-consulting.svg", desc: "Strategy, growth planning and operational excellence." },
  { id: "tech-consulting", title: "Tech Consulting", icon: "/images/icons/services/process-digitisation.svg", desc: "AI solutions, automation and platform modernisation." },
  { id: "offshore-consulting", title: "Offshore Consulting", icon: "/images/icons/services/fund-management.svg", desc: "GCC setup, finance outsourcing and regulatory reporting." },
  { id: "ai-solutions", title: "AI Solutions", icon: "/images/icons/services/hr-management.svg", desc: "Generative AI, predictive analytics and intelligent automation." },
];

const problems = [
  {
    category: "Platform Sprawl",
    problem: "The business runs on 6 different platforms — CRM, ERP, HRMS, billing, banking and analytics — none of which talk to each other. Every report is a manual stitch-up and every decision is made on stale data.",
    solution: "We co-work with your team to map the full platform landscape, design a unified data and integration architecture, and implement it on best-fit technology — Zoho, AWS, Microsoft or a custom stack — so your systems finally speak one language.",
    href: "/tech-consulting",
    cta: "Explore Tech Consulting",
  },
  {
    category: "Invisible ROI",
    problem: "Tech budgets keep growing but leadership can't connect the spend to a business outcome. Projects get delivered, dashboards go live, and six months later no one can say whether it was worth it.",
    solution: "Our finance experts define measurable ROI targets before the first line of code is written — cost per transaction, close cycle days, headcount per revenue unit. Every build decision is made through that lens, and we track the numbers after go-live.",
    href: "/business-consulting",
    cta: "Explore Business Consulting",
  },
  {
    category: "Build vs. Buy",
    problem: "The team spends months debating whether to build a custom solution or buy a SaaS product — and ends up doing both badly. Customised off-the-shelf tools that don't fit, or bespoke builds that nobody maintains.",
    solution: "We bring domain consultants and technology architects into the same room to run a structured build-vs-buy analysis — factoring in total cost of ownership, integration complexity, vendor lock-in and your team's ability to operate it long-term. You get a defensible decision, not a guess.",
    href: "/tech-consulting",
    cta: "Talk to our architects",
  },
  {
    category: "Fragmented Data",
    problem: "Finance data is in Tally. Operations data is in Excel. Customer data is in the CRM. Each source tells a different story and reconciling them for a board pack takes a week every month.",
    solution: "We design and implement a centralised data layer — a cloud data lake on AWS, Azure or GCP — that pulls from every source, normalises the schema and makes clean, consistent data available to your analytics, AI and reporting tools in real time.",
    href: "/tech-consulting",
    cta: "See how we build it",
  },
];


const whyChooseUs = [
  {
    title: "Co-design with the Customer",
    desc: "We sit with your team to co-design the Data, IT and AI framework — not hand over a blueprint and walk away. The outcome is built together, so it actually gets adopted.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Bridging Domain & Technology",
    desc: "We close the gap between what domain experts know and what technology can do. Our team combines finance, operations and engineering — so nothing gets lost in translation between the business and the build.",
    icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    title: "Industry Nuance, Not Generic Playbooks",
    desc: "Finance, fund management, manufacturing, retail, aviation — each industry has its own language and edge cases. We bring in practitioners who have worked inside these sectors, not consultants reading about them.",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
  {
    title: "Best-in-Class Technology Partners",
    desc: "We are certified partners with Zoho, AWS, Microsoft, OpenAI and Anthropic — giving you access to the best platforms without the overhead of managing multiple vendor relationships yourself.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Investment that Pays Back",
    desc: "We marry deep finance expertise with technology execution to make every rupee of tech spend traceable to a business outcome — faster close, lower headcount cost, better compliance, measurable ROI.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const productsTeaser = [
  { name: "Skimaa", desc: "Automated reconciliation, controls and audit support.", href: "/skimaa" },
  { name: "Zoho Tech Partner", desc: "End-to-end implementation of the Zoho suite.", href: "/zoho-tech-partner" },
  { name: "HostOps", desc: "Managed hosting and infrastructure operations.", href: "/hostops" },
  { name: "eTCR", desc: "Intelligent service operations and collection reconciliation platform.", href: "/etcr" },
];


export default function HomePage() {
  return (
    <div className="w-full">
      {/* HERO VIDEO — autoplaying brand intro. Height sized so the ticker peeks in on first load. */}
      <section className="relative w-full overflow-hidden bg-navbar h-[420px] md:h-[600px] lg:h-[calc(100vh-72px)]">
        <video
          className="w-full h-full object-cover object-center block"
          src="/video/Home_Page_Video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Savitron.ai intro"
        />
      </section>

      {/* TICKER — gold strip with seamless horizontal scroll */}
      <div className="ticker">
        <div className="ticker-inner">
          {/* duplicate the list for seamless loop */}
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-16">
              <span className="ticker-item">{item}</span>
              <span className="ticker-sep">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* INDUSTRY PORTFOLIO — sectors grid, no icon images */}
      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-14">
            <ScrollReveal>
              <SectionTag>Sectors We Serve</SectionTag>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Cross-industry <span className="text-gradient-gold">expertise</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <div className="divider-gold-left" />
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-border border border-border rounded-2xl overflow-hidden">
              {industries.map((item) => (
                <div
                  key={item.label}
                  className="group bg-surface py-7 px-4 text-center transition-colors duration-200 hover:bg-navbar cursor-default"
                >
                  <span className="block text-2xl md:text-3xl mb-2 text-gold group-hover:text-gold-light transition-colors" aria-hidden>
                    {item.icon}
                  </span>
                  <p className="text-sm font-medium text-ink-muted group-hover:text-page transition-colors">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES OFFERED — alternating to dark for contrast */}
      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal>
              <SectionTag>What we do</SectionTag>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Services <span className="text-gradient-gold">Offered</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <div className="divider-gold" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-2xl mx-auto">A comprehensive suite of services designed to address your most pressing business needs and unlock your full potential.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 80}>
                <Link href={`/${s.id}`} className="group card-hover h-full block bg-surface rounded-2xl border border-border p-5 md:p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/5">
                    <Image src={s.icon} alt={s.title} width={24} height={24} className="object-contain" />
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-ink-muted mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all">
                    Learn more <span aria-hidden>→</span>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS USECASES */}
      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal>
              <SectionTag>Proven in the field</SectionTag>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Business Usecases <span className="text-gradient-gold">We Solved</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <div className="divider-gold" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-2xl mx-auto">
                Every product and service we build started as a problem we kept seeing inside real businesses. Here&apos;s how we solve them.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {problems.map((p, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <Link href={p.href} className="group block h-full bg-surface rounded-2xl border border-border card-hover p-6 md:p-8">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 border border-gold/25 px-3 py-1 rounded-full mb-5">
                    {p.category}
                  </span>
                  <div className="flex items-start gap-4 mb-5">
                    <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-red-400 mb-1">The Problem</p>
                      <p className="text-sm md:text-base font-medium text-ink-muted leading-snug">{p.problem}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-1">How We Solve It</p>
                      <p className="text-sm md:text-base text-ink leading-snug">{p.solution}</p>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all">
                      {p.cta} <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsStrip
        tag="Track record"
        title="Numbers that"
        titleAccent="speak"
        variant="dark"
        items={[
          { value: "30+", label: "Years of Experience" },
          { value: "20+", label: "Clients Served" },
          { value: "1", label: "Location — Gurugram, India" },
        ]}
      />

      {/* WHY CHOOSE US */}
      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal>
              <SectionTag>Why us</SectionTag>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Why Choose <span className="text-gradient-gold">Savitron.ai</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <div className="divider-gold" />
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {whyChooseUs.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 70}>
                <div className={`card-hover h-full bg-surface rounded-2xl border border-border p-6 md:p-8 flex flex-col${i === 4 ? " sm:col-span-2 lg:col-span-1" : ""}`}>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 mb-5 flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d={w.icon} />
                    </svg>
                  </span>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-3">{w.title}</h3>
                  <p className="text-sm md:text-base text-ink-muted leading-relaxed">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS TEASER */}
      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal>
              <SectionTag>From Savitron.ai</SectionTag>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Our <span className="text-gradient-gold">Products</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <div className="divider-gold" />
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {productsTeaser.map((p, i) => (
              <ScrollReveal key={p.href} delay={i * 80}>
                <Link href={p.href} className="block card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-7">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-ink mb-2">{p.name}</h3>
                  <p className="text-sm text-ink-muted mb-4">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold">
                    Explore <span aria-hidden>→</span>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner
        tag="Let's talk"
        title="Ready to take your business"
        titleAccent="forward?"
        body="Speak to our consultants and discover how we can support your growth journey."
        primaryCta={{ label: "Engage Us", href: "/contact-us" }}
        secondaryCta={{ label: "Explore Services", href: "/business-consulting" }}
      />
    </div>
  );
}
