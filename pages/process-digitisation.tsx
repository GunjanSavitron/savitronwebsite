import Image from "next/image";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import StickyFilterNav from "@amitkk/basic/static/StickyFilterNav";
import CTABanner from "@amitkk/basic/static/CTABanner";
import SplitPanel from "@amitkk/basic/static/SplitPanel";

const benefits = [
  "Eliminates inefficiencies and reduces errors",
  "Improves transparency across finance operations",
  "Enables real-time data capture and reporting",
  "Enhances decision-making with timely insights",
  "Supports better cash flow management",
  "Improves compliance with detailed audit trails",
  "Strengthens data security across systems",
  "Frees finance teams to focus on strategic roles",
];

const offerings = [
  { title: "eTCR", desc: "Customised software serving as a handy tool for all service engineers — built to streamline field operations and reporting.", image: "/images/static/services/business-tools/etcr.jpg" },
  { title: "Zoho Implementation", desc: "We offer Zoho Implementation and customisation as per your specific business needs — from Books to CRM and the full Zoho One suite.", image: "/images/static/services/business-tools/zoho.jpg" },
];

const supportedTools = [
  { name: "Xero", img: "/images/static/services/business-tools/xero.jpg" },
  { name: "Odoo", img: "/images/static/services/business-tools/odoo.jpg" },
  { name: "QuickBooks", img: "/images/static/services/business-tools/quickbooks.jpg" },
  { name: "FundCount", img: "/images/static/services/business-tools/fundcount.jpg" },
  { name: "HRMS", img: "/images/static/services/business-tools/hrms.jpg" },
  { name: "CShare", img: "/images/static/services/business-tools/cshare.jpg" },
];

const filterItems = [
  { id: "intro", label: "Overview" },
  { id: "benefits", label: "Why Digitise" },
  { id: "offerings", label: "Our Offerings" },
  { id: "tools", label: "Tools Supported" },
];

export default function ProcessDigitisation() {
  return (
    <>
      <Hero
        tag="Services"
        title="Process"
        titleAccent="Digitisation"
        tagline="Enhancing financial workflows through innovative technology — from manual to streamlined, transparent and audit-ready."
        variant="dark"
        backgroundImage="/images/static/banners/process-digitisation-web-banner.jpg"
        ctas={[
          { label: "Start the Conversation", href: "/contact-us" },
          { label: "Tech Consulting", href: "/tech-consulting", variant: "outline" },
        ]}
      />

      <StickyFilterNav items={filterItems} />

      <SplitPanel
        id="intro"
        tag="Our practice"
        title="Enhancing financial workflows through"
        titleAccent="innovative technology"
        side="left"
        body={
          <>
            <p>Finance process digitisation refers to the transformation of traditional, paper-based, and manual financial workflows into streamlined, technology-driven processes.</p>
            <p>Digitisation automates activities including invoicing, accounts payable and receivable, expense management, payroll, and financial reconciliations — using ERP systems, cloud-based accounting software, robotic process automation, and AI-powered analytics.</p>
          </>
        }
      >
        <div className="h-[300px] md:h-[420px] rounded-2xl bg-cover bg-center shadow-sm border border-border" style={{ backgroundImage: "url('/images/static/parallax/process-digitisation.jpg')" }} aria-label="Process Digitisation" />
      </SplitPanel>

      <section id="benefits" className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Why digitise</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Why digitise your <span className="text-gradient-gold">finance function</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b} delay={(i % 4) * 60}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/40 bg-gold/5 mb-3">
                    <Image src="/images/icons/services/process-digitisation.svg" alt="" width={20} height={20} />
                  </span>
                  <p className="text-sm md:text-base text-ink">{b}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="offerings" className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>What we offer</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Our <span className="text-gradient-gold">Offerings</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {offerings.map((o, i) => (
              <ScrollReveal key={o.title} delay={i * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${o.image}')` }} />
                  <div className="p-5 md:p-7">
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-ink mb-3">{o.title}</h3>
                    <p className="text-sm md:text-base text-ink-muted">{o.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-10 md:mt-14 rounded-2xl overflow-hidden border border-border">
              <Image src="/images/static/services/process-digitisation-chart.jpg" alt="Process Digitisation Flow" width={1400} height={700} className="w-full h-auto" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="tools" className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal><SectionTag>Ecosystem</SectionTag></ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
              Other accounting tools <span className="text-gradient-gold">supported</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm md:text-base text-ink-muted mb-10 max-w-2xl mx-auto">We work across the leading finance and operations platforms — implementing, customising and supporting them end-to-end.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 items-center">
            {supportedTools.map((t, i) => (
              <ScrollReveal key={t.name} delay={(i % 6) * 40}>
                <div className="bg-surface rounded-xl border border-border p-4 flex items-center justify-center h-20 md:h-24 card-hover">
                  <img src={t.img} alt={t.name} className="max-h-12 md:max-h-14 object-contain" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        tag="Let's modernise"
        title="Ready to digitise your"
        titleAccent="finance function?"
        body="Let's build a technology roadmap tailored to your business scale and industry."
        primaryCta={{ label: "Start the Conversation", href: "/contact-us" }}
        secondaryCta={{ label: "Tech Consulting", href: "/tech-consulting" }}
      />
    </>
  );
}
