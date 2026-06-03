import Image from "next/image";
import Link from "next/link";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import StickyFilterNav from "@amitkk/basic/static/StickyFilterNav";
import CTABanner from "@amitkk/basic/static/CTABanner";
import SplitPanel from "@amitkk/basic/static/SplitPanel";

const capabilities = [
  {
    id: "ai",
    title: "AI Solutions",
    href: "/ai-solutions",
    badge: "Featured",
    desc: "Generative AI, predictive analytics, intelligent automation and AI copilots — production-grade systems, not throwaway demos.",
    bullets: ["Enterprise chatbots & RAG", "Document intelligence", "Predictive analytics", "Agentic AI workflows"],
    cta: "Explore AI Solutions",
  },
  {
    id: "digitisation",
    title: "Process Digitisation",
    href: "/process-digitisation",
    desc: "Replace manual, paper-driven and email-driven workflows with digital processes that compound efficiency over time.",
    bullets: ["Workflow automation", "Digital approvals & e-sign", "ERP / finance integrations", "Audit-ready process logs"],
    cta: "Digitise your processes",
  },
  {
    id: "zoho",
    title: "Zoho Implementation",
    href: "/zoho-tech-partner",
    desc: "End-to-end Zoho suite implementation, customisation and integration — CRM, Books, People, Desk, Creator and more.",
    bullets: ["Zoho One roll-outs", "Custom apps on Creator", "API integrations", "Training & support"],
    cta: "Get Zoho expertise",
  },
  {
    id: "cloud",
    title: "Cloud, Hosting & Infrastructure",
    href: "/hostops",
    desc: "Managed hosting, application infrastructure and DevOps services that keep your business systems fast, secure and observable.",
    bullets: ["Managed cloud hosting", "DevOps & CI/CD", "Security & backups", "Performance monitoring"],
    cta: "See HostOps",
  },
  {
    id: "service-operations",
    title: "Service Operations Tech",
    href: "/etcr",
    desc: "Intelligent service operations and collection reconciliation for pan-India service networks — call management, engineer closures, UPI tracking and automated reconciliation in one platform.",
    bullets: ["Service call & engineer workflows", "Cash & UPI collection tracking", "Automated reconciliation engine", "Pan-India operational dashboards"],
    cta: "Explore eTCR",
  },
  {
    id: "custom",
    title: "Custom Platform Engineering",
    href: "/contact-us",
    desc: "When off-the-shelf doesn't fit — bespoke web, mobile and data platforms built on modern stacks with deep domain alignment.",
    bullets: ["Web & mobile apps", "Data platforms", "APIs & integrations", "Modernisation of legacy stacks"],
    cta: "Talk to engineering",
  },
];

const stack = ["Python", "Node.js", "Next.js", "React", "MongoDB", "PostgreSQL", "LangChain", "OpenAI", "Anthropic", "AWS", "Azure", "Zoho One", "Twilio", "Vercel"];

const filterItems = [
  { id: "intro", label: "Overview" },
  { id: "capabilities", label: "What We Offer" },
  { id: "stack", label: "Tech Stack" },
  { id: "process", label: "How We Deliver" },
];

export default function TechConsulting() {
  return (
    <>
      <Hero
        tag="Services"
        title="Tech"
        titleAccent="Consulting"
        tagline="Technology that earns its place in the P&L. We help you pick the right bets — and actually ship them."
        variant="dark"
        backgroundImage="/images/static/banners/business-consulting-web-banner.jpg"
        ctas={[
          { label: "Talk to Our Tech Team", href: "/contact-us" },
          { label: "Explore AI Solutions", href: "/ai-solutions", variant: "outline" },
        ]}
      />

      <StickyFilterNav items={filterItems} />

      <SplitPanel
        id="intro"
        tag="Our practice"
        title="Technology in service of"
        titleAccent="real outcomes"
        side="left"
        body={
          <>
            <p>Savitron.ai&apos;s Tech Consulting practice helps founders, CFOs and operations leaders pick the right technology bets — and actually ship them. We combine deep business understanding with hands-on engineering, so the systems we build move real metrics: revenue, cost, cycle time and customer experience.</p>
            <p>From AI solutions and process digitisation to Zoho implementations, hosting, customer communication platforms and custom engineering — we deliver as one accountable partner, not a stack of vendors.</p>
          </>
        }
      >
        <div className="h-[300px] md:h-[420px] rounded-2xl bg-cover bg-center shadow-sm border border-border" style={{ backgroundImage: "url('/images/static/parallax/business-consulting.jpg')" }} aria-label="Tech Consulting" />
      </SplitPanel>

      <section id="capabilities" className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Capabilities</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                What we <span className="text-gradient-gold">offer</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {capabilities.map((c, i) => (
              <ScrollReveal key={c.id} delay={i * 60}>
                <div className="relative card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-7 flex flex-col">
                  {c.badge && (
                    <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-bold bg-gold text-navbar px-2.5 py-1 rounded-full">{c.badge}</span>
                  )}
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 mb-4">
                    <Image src="/images/icons/services/business-consulting.svg" alt={c.title} width={24} height={24} />
                  </span>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-2">{c.title}</h3>
                  <p className="text-sm md:text-base text-ink-muted mb-4">{c.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={c.href} className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-gold hover:gap-2 transition-all">
                    {c.cta}<span aria-hidden>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS IN DEPTH */}
      <section id="process-depth" className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <ScrollReveal><SectionTag>What we build</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Process <span className="text-gradient-gold">In Depth</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-2xl mx-auto">
                We engineer AI agents, platforms and data systems across finance and operations — backed by domain expertise that most tech firms simply don&apos;t have.
              </p>
            </ScrollReveal>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-gold/20 mx-[10%]" aria-hidden />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 relative">
              {[
                { step: "01", tag: "Finance AI", title: "AI Agents for Finance", desc: "Autonomous agents that handle accounts payable, reconciliation, invoice processing and compliance checks — end-to-end, with ERP integration built in." },
                { step: "02", tag: "ERP & Automation", title: "Platform Engineering", desc: "Full-stack ERP implementations, RPA pipelines and custom workflow platforms that digitise operations across finance, HR and supply chain." },
                { step: "03", tag: "Data & Analytics", title: "Finance Intelligence", desc: "Real-time MIS dashboards, FP&A models and predictive analytics that turn raw financial data into decisions leadership can act on." },
                { step: "04", tag: "Cloud & Infra", title: "Cloud & DevOps", desc: "Managed hosting, CI/CD pipelines, security hardening and 24×7 infrastructure operations — so your product ships fast and stays reliable." },
                { step: "05", tag: "Domain Advisory", title: "Finance Domain Depth", desc: "Fund accounting, GCC setup, offshore finance ops and regulatory execution backed by experts who have run these functions inside Goldman, KPMG and Samsung." },
              ].map((s, i) => (
                <ScrollReveal key={s.step} delay={i * 80}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="relative mb-5">
                      <div className="w-[72px] h-[72px] rounded-full bg-navbar border-2 border-gold/40 group-hover:border-gold transition-colors flex items-center justify-center shadow-sm">
                        <span className="font-heading text-lg font-bold text-gold">{s.step}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-2 bg-gold/10 px-3 py-1 rounded-full border border-gold/25">
                      {s.tag}
                    </span>
                    <h3 className="font-heading text-base md:text-lg font-semibold text-ink mb-2 leading-snug">{s.title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal><SectionTag>Tooling</SectionTag></ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink">
              Our technology <span className="text-gradient-gold">stack</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm md:text-base text-ink-muted max-w-2xl mx-auto mb-8">We&apos;re stack-agnostic. We choose tech based on fit, total cost and what your team can actually own long-term.</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {stack.map((s) => (
                <span key={s} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-surface border border-border text-sm text-ink-muted">{s}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="process" className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>How we deliver</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Pragmatic, <span className="text-gradient-gold">production-grade</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
            {[
              { step: "01", title: "Discover", desc: "Workshops with business + tech stakeholders to map workflows, data and the highest-leverage tech moves." },
              { step: "02", title: "Architect", desc: "A pragmatic solution architecture that fits your existing stack, your team and your timelines." },
              { step: "03", title: "Build & Integrate", desc: "Production-grade build with iterative reviews, security baked in, and integrations into the rest of your stack." },
              { step: "04", title: "Run & Improve", desc: "We don't disappear after go-live — monitoring, support and continuous improvement keep value compounding." },
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
        tag="Let's build"
        title="Ready to make technology"
        titleAccent="your edge?"
        body="Tell us where you are today — we'll show you the highest-leverage tech moves for the next 12 months."
        primaryCta={{ label: "Talk to Engineering", href: "/contact-us" }}
        secondaryCta={{ label: "Explore Products", href: "/our-products" }}
      />
    </>
  );
}
