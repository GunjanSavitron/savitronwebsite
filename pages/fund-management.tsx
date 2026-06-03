import Image from "next/image";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import StickyFilterNav from "@amitkk/basic/static/StickyFilterNav";
import CTABanner from "@amitkk/basic/static/CTABanner";
import SplitPanel from "@amitkk/basic/static/SplitPanel";

const fundTypes = [
  "Fund of Funds",
  "Secondary Funds",
  "Private Equity / Venture Fund",
  "Co Investment / SPV",
];

const services = [
  "Complete Fund Accounting",
  "Portfolio Accounting",
  "Capital Calls",
  "Distributions",
  "Investor Statements / CAS",
  "IRR & Performance Metrics",
  "NAV Calculation",
  "Management Fees",
  "Waterfall & Performance Fee Calculations",
  "Investor Queries",
  "Equalisation Workings",
  "Seed Investment Accounting",
  "Regulatory Reporting",
  "Side Letter Reporting Requirements",
  "Investor Reports",
];

const capabilities = [
  { title: "Domain Experience", desc: "We understand the complex fund structures, including private equity, hedge funds and venture capital and their reporting requirements." },
  { title: "Technology", desc: "We leverage best accounting tools to manage large data sets, complicated fund structures and automate accurate & timely reporting." },
  { title: "Regulatory", desc: "We offer compliance with IFRS, US GAAP, AIFMD and other international regulatory reporting requirements." },
  { title: "Customisation", desc: "We offer solutions aligned with the fund strategy, fund geography, investor base, reporting frequency and industry best practices." },
];

const filterItems = [
  { id: "intro", label: "Overview" },
  { id: "fund-types", label: "Fund Types" },
  { id: "services", label: "Services" },
  { id: "capabilities", label: "Capabilities" },
];

export default function FundManagement() {
  return (
    <>
      <Hero
        tag="Services"
        title="Fund"
        titleAccent="Management"
        tagline="Expert fund accounting and investor services for investment firms, family offices and fund managers — built to scale with your strategy."
        variant="dark"
        backgroundImage="/images/static/banners/fund-management-web-banner.jpg"
        ctas={[
          { label: "Engage Us", href: "/contact-us" },
          { label: "Offshore Consulting", href: "/offshore-consulting", variant: "outline" },
        ]}
      />

      <StickyFilterNav items={filterItems} />

      <SplitPanel
        id="intro"
        tag="Our practice"
        title="Expert fund accounting for"
        titleAccent="modern investment firms"
        side="left"
        body={
          <>
            <p>We offer expert fund accounting services tailored for investment firms, family offices, and fund managers. Our solutions ensure accurate tracking of complex financial transactions, portfolio valuations, and investor reporting, all in compliance with industry standards and regulatory requirements.</p>
            <p>By leveraging advanced accounting systems and our industry expertise, we deliver timely financial insights. Whether managing multiple entities or diverse asset classes, our fund accounting services help you maintain control, ensure timely reporting and enhance investor confidence with precision and reliability.</p>
          </>
        }
      >
        <div className="h-[300px] md:h-[420px] rounded-2xl bg-cover bg-center shadow-sm border border-border" style={{ backgroundImage: "url('/images/static/parallax/fund-management.jpg')" }} aria-label="Fund Management" />
      </SplitPanel>

      <section id="fund-types" className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Coverage</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Fund Types <span className="text-gradient-gold">Covered</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {fundTypes.map((f, i) => (
              <ScrollReveal key={f} delay={i * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border text-center p-5 md:p-7">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gold/40 mb-3">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </span>
                  <p className="text-sm md:text-base font-medium text-ink">{f}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Service catalog</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                We&apos;ve got it all <span className="text-gradient-gold">covered</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {services.map((s, i) => (
              <ScrollReveal key={s} delay={(i % 5) * 40}>
                <div className="bg-surface rounded-xl border border-border text-center p-3 md:p-4 text-sm md:text-base text-ink-muted card-hover h-full flex items-center justify-center">
                  {s}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Why us</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Key <span className="text-gradient-gold">Capabilities</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {capabilities.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 mb-4">
                    <Image src="/images/icons/services/fund-management.svg" alt={c.title} width={24} height={24} />
                  </span>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-2">{c.title}</h3>
                  <p className="text-sm md:text-base text-ink-muted">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        tag="Partnership"
        title="Need a fund accounting"
        titleAccent="partner?"
        body="Talk to our specialists about how we can support your fund's operations and reporting."
        primaryCta={{ label: "Engage Us", href: "/contact-us" }}
        secondaryCta={{ label: "Offshore Services", href: "/offshore-consulting" }}
      />
    </>
  );
}
