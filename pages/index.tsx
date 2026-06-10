import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import SectionTag from "@amitkk/basic/static/SectionTag";
import CTABanner from "@amitkk/basic/static/CTABanner";

const industries = [
  { icon: "⚙", label: "Auto Ancillaries" },
  { icon: "✈", label: "Aviation" },
  { icon: "🏨", label: "Hospitality" },
  { icon: "🛒", label: "Retail — GT" },
  { icon: "💊", label: "Pharmaceuticals" },
  { icon: "🛍", label: "E-Commerce" },
  { icon: "🚢", label: "Logistics" },
  { icon: "🏭", label: "Manufacturing" },
  { icon: "🤝", label: "Service Industry" },
  { icon: "💎", label: "Customer Experience" },
];

const tickerItems = [
  "AI Performance Acceleration",
  "Darwin Framework",
  "AI & ERP Transformation",
  "Business Outcome Focus",
  "Co-Design Partner",
  "Full Stack AI & Cloud",
  "Product Engineering",
  "Agentic AI",
  "Domain Expertise",
];

const services = [
  { id: "our-services", title: "Finance Domain Transformation", icon: "/images/icons/services/business-consulting.svg", desc: "End-to-end finance stack redesigned for outcomes — operations, compliance, fund management and FP&A." },
  { id: "our-solutions", title: "Our Solutions", icon: "/images/icons/services/hr-management.svg", desc: "Standalone AI agents and data modelling solutions — invoice processing, reconciliation, and intelligent automation." },
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

      {/* ABOUT SAVITRON.AI — brand origin story */}
      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionTag>About Savitron.ai</SectionTag>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mt-4 mb-6">
                  Where finance domain meets <span className="text-gradient-gold">AI engineering</span>
                </h2>
                <div className="divider-gold-left" />
                <p className="text-sm md:text-base text-ink-muted leading-relaxed">
                  Savitron.ai is a technology and domain-led business transformation company — formerly Savitur Solutions LLP, a CA-founded consultancy. Our founders recognised early that finance and technology can no longer operate in silos, and built Savitron.ai at that intersection.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={120}>
              <div className="bg-navbar rounded-2xl p-8 md:p-10 border border-gold/20">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">The name</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center font-heading text-gold text-xl font-bold">S</span>
                    <div>
                      <p className="font-heading text-lg font-semibold text-page">Savi</p>
                      <p className="text-sm text-page/70 mt-1">Savitur — Rising Sun. Our heritage as a CA-founded consultancy, built on precision and trust.</p>
                    </div>
                  </div>
                  <div className="border-t border-gold/10" />
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center font-heading text-gold text-xl font-bold">T</span>
                    <div>
                      <p className="font-heading text-lg font-semibold text-page">Tron</p>
                      <p className="text-sm text-page/70 mt-1">Transformation through AI &amp; Technology. The force that turns domain knowledge into measurable outcomes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal>
              <SectionTag>What we do</SectionTag>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Built for <span className="text-gradient-gold">measurable outcomes</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <div className="divider-gold" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-3xl mx-auto">
                We help businesses re-design and re-architect their finance function through technology to deliver measurable outcomes — not just deploy tools. We own KPIs alongside our clients and co-build solutions built to last.
              </p>
            </ScrollReveal>
          </div>

          {/* Finance Function Transformation */}
          <ScrollReveal>
            <div className="bg-surface rounded-2xl border border-border overflow-hidden mb-6 md:mb-8">
              <div className="bg-navbar px-6 md:px-10 py-5 md:py-6 border-b border-gold/20">
                <SectionTag hero>Core Strength</SectionTag>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-page mt-2">Finance Function Transformation</h3>
                <p className="text-sm md:text-base text-page/70 mt-2 max-w-2xl">End-to-end redesign of your finance stack — spanning four areas.</p>
              </div>
              <div className="p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                {[
                  { num: "01", title: "Operations Automation", desc: "Invoicing, clearing, data entry and day-to-day accounting workflows — zero manual touch." },
                  { num: "02", title: "Reporting Automation", desc: "Profitability statements, costing, audits and compliance — delivered with accuracy and speed." },
                  { num: "03", title: "Fund & Working Capital Planning", desc: "Cash flow forecasting, fund planning and working capital management automation." },
                  { num: "04", title: "FP&A & Business Intelligence", desc: "Cause-and-effect dashboards and conversational analytics across Sales, SCM, Costing and every driver of profitability." },
                ].map((item, i) => (
                  <ScrollReveal key={item.num} delay={i * 60}>
                    <div className="flex items-start gap-4 bg-platinum rounded-xl p-4 md:p-5 border border-border h-full">
                      <span className="flex-shrink-0 font-heading text-2xl font-bold text-gold/40 leading-none w-8">{item.num}</span>
                      <div>
                        <h4 className="font-heading text-base md:text-lg font-semibold text-ink mb-1">{item.title}</h4>
                        <p className="text-sm text-ink-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* AI Solutions */}
          <ScrollReveal delay={80}>
            <div className="bg-surface rounded-2xl border border-border overflow-hidden mb-6 md:mb-8">
              <div className="bg-navbar px-6 md:px-10 py-5 md:py-6 border-b border-gold/20">
                <SectionTag hero>AI · Featured</SectionTag>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-page mt-2">Our Solutions</h3>
                <p className="text-sm md:text-base text-page/70 mt-2 max-w-2xl">Standalone agents and end-to-end data modelling — engineered for real outcomes, not demos.</p>
              </div>
              <div className="p-6 md:p-10 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
                {[
                  {
                    title: "Standalone AI Agents",
                    desc: "AP Agent and Clearing Agent that run autonomously — reducing person-hours, eliminating manual errors and scaling with transaction volume.",
                  },
                  {
                    title: "Function Re-Architect",
                    desc: "End-to-end data modelling, process automation and analytics via knowledge graphs, giving founders a real-time view of their business.",
                  },
                  {
                    title: "Industry-Specific Products",
                    desc: "SkiMaa — real-time scheme computation for General Trade. HostOps — hospitality intelligence for budgeting, profitability, cash flows and occupancy.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 70}>
                    <div className="card-hover h-full bg-platinum rounded-xl border border-border p-5 md:p-6 flex flex-col">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/40 bg-gold/5 mb-4 flex-shrink-0">
                        <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      <h4 className="font-heading text-base md:text-lg font-semibold text-ink mb-2">{item.title}</h4>
                      <p className="text-sm text-ink-muted leading-relaxed flex-1">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <div className="px-6 md:px-10 pb-6 md:pb-8">
                <Link href="/our-solutions" className="btn-primary">
                  Explore Our Solutions <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Our Approach */}
          <ScrollReveal delay={120}>
            <div className="bg-navbar rounded-2xl border border-gold/20 p-6 md:p-10">
              <div className="mb-6">
                <SectionTag hero>Our Approach</SectionTag>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-page mt-2">How we work with you</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                  <div>
                    <p className="font-semibold text-page text-sm md:text-base mb-1">Platform-agnostic</p>
                    <p className="text-sm text-page/70">We design, architect and implement what fits your business, not what we sell. AWS · GCP · Azure · Anthropic · OpenAI</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                  <div>
                    <p className="font-semibold text-page text-sm md:text-base mb-1">Domain-first</p>
                    <p className="text-sm text-page/70">Our consultants bridge the gap between finance domain knowledge and technology execution, so nothing gets lost in translation.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INDUSTRY PORTFOLIO */}
      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-surface rounded-2xl border border-border overflow-hidden">
              <div className="bg-navbar px-6 md:px-10 py-5 md:py-6 border-b border-gold/20">
                <SectionTag hero>Sectors We Serve</SectionTag>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-page mt-2">Cross-industry <span className="text-gradient-gold">expertise</span></h3>
                <p className="text-sm md:text-base text-page/70 mt-2 max-w-2xl">Finance, Hospitality, General Trade and beyond — we bring domain depth to every engagement.</p>
              </div>
              <div className="p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                {industries.map((item, i) => (
                  <ScrollReveal key={item.label} delay={i * 40}>
                    <div className="flex items-start gap-4 bg-platinum rounded-xl p-4 md:p-5 border border-border h-full">
                      <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-xl" aria-hidden>
                        {item.icon}
                      </span>
                      <div className="flex items-center h-full">
                        <h4 className="font-heading text-base md:text-lg font-semibold text-ink">{item.label}</h4>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner
        tag="Let's talk"
        title="Ready to build your"
        titleAccent="AI advantage?"
        body="We partner with you to design, build and scale an AI strategy that delivers measurable business outcomes."
        primaryCta={{ label: "Engage Us", href: "/contact-us" }}
        secondaryCta={{ label: "Explore Our Solutions", href: "/our-solutions" }}
      />
    </div>
  );
}
