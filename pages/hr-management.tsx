import Image from "next/image";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import StickyFilterNav from "@amitkk/basic/static/StickyFilterNav";
import CTABanner from "@amitkk/basic/static/CTABanner";
import SplitPanel from "@amitkk/basic/static/SplitPanel";

const pillars = [
  { title: "Recruitment / Resourcing", desc: "We develop an understanding of your business and culture to act as a strategic partner — using targeted sourcing across job boards, professional networks, referrals and passive candidate outreach, supported by employer branding that highlights your employee value proposition and career growth opportunities.", image: "/images/static/services/hrprocess.jpg" },
  { title: "Payroll Outsourcing", desc: "Let us handle your payroll operations with accuracy — salary processing, statutory deductions, reimbursements and payslips delivered on time, every cycle.", image: "/images/static/services/payroll-compliance.jpeg" },
  { title: "PF, ESI & Statutory Compliances", desc: "Ensuring compliance with all statutory requirements including PF, ESI, PT, LWF and labour law filings — so your HR function runs clean and audit-ready.", image: "/images/static/services/hrms.png" },
];

const hrmsFeatures = [
  { title: "Centralised Employee Information", desc: "Store and access all employee records in one secure, cloud-based platform." },
  { title: "Automated Attendance & Leave", desc: "Real-time tracking with custom policies tailored to your organisation." },
  { title: "Seamless Payroll Management", desc: "Automates calculations ensuring compliance with statutory and company rules." },
  { title: "Performance & Appraisal System", desc: "Tracks achievements, goals and identifies high performers across teams." },
  { title: "Recruitment & Onboarding", desc: "Integrates job posting through digital onboarding in one connected flow." },
  { title: "Employee Self-Service Portal", desc: "Access payslips, apply for leave and raise requests anytime, anywhere." },
  { title: "Customisable & Scalable", desc: "Adapts to organisational needs as you grow — no rebuild required." },
];

const filterItems = [
  { id: "intro", label: "Overview" },
  { id: "pillars", label: "HR Services" },
  { id: "hrms", label: "HRMS Platform" },
];

export default function HRManagement() {
  return (
    <>
      <Hero
        tag="Services"
        title="HR"
        titleAccent="Management"
        tagline="People, process and compliance — handled across the entire employee lifecycle."
        variant="dark"
        backgroundImage="/images/static/banners/hr-management-web-banner.jpg"
        ctas={[
          { label: "Talk to Our HR Team", href: "/contact-us" },
          { label: "Explore HRMS", href: "#hrms", variant: "outline" },
        ]}
      />

      <StickyFilterNav items={filterItems} />

      <SplitPanel
        id="intro"
        tag="Our practice"
        title="People, process and compliance —"
        titleAccent="handled"
        side="left"
        body={
          <>
            <p>We bring structure to your HR function across the entire employee lifecycle — from attracting the right talent to running payroll, managing compliance and delivering modern digital experiences through our HRMS platform.</p>
            <p>Whether you are a growing startup or an established enterprise, our solutions are designed to scale with you while keeping your people experience and regulatory obligations in perfect balance.</p>
          </>
        }
      >
        <div className="h-[300px] md:h-[420px] rounded-2xl bg-cover bg-center shadow-sm border border-border" style={{ backgroundImage: "url('/images/static/parallax/hr-management.jpg')" }} aria-label="HR Management" />
      </SplitPanel>

      <section id="pillars" className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>What we cover</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Our <span className="text-gradient-gold">HR Services</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border overflow-hidden">
                  <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }} />
                  <div className="p-5 md:p-6">
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-2">{p.title}</h3>
                    <p className="text-sm md:text-base text-ink-muted">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="hrms" className="bg-page bg-warm-grain py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
            <ScrollReveal direction="left">
              <Image src="/images/static/services/hrms.png" alt="HRMS Application" width={600} height={400} className="w-full h-auto rounded-2xl shadow-sm border border-border" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <SectionTag>Platform</SectionTag>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink leading-tight">
                HRMS <span className="text-gradient-gold">Application</span>
              </h2>
              <div className="divider-gold-left" />
              <p className="text-base md:text-lg text-ink-muted">A unified HRMS platform to centralise your people data, automate the day-to-day and give your employees a modern self-service experience.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {hrmsFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={(i % 3) * 60}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 mb-4">
                    <Image src="/images/icons/services/hr-management.svg" alt={f.title} width={24} height={24} />
                  </span>
                  <h3 className="font-heading text-base md:text-lg font-semibold text-ink mb-2">{f.title}</h3>
                  <p className="text-sm md:text-base text-ink-muted">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        tag="Let's talk"
        title="Let's build your"
        titleAccent="HR backbone"
        body="From hiring to HRMS, we bring everything your people function needs — under one roof."
        primaryCta={{ label: "Talk to Our Team", href: "/contact-us" }}
      />
    </>
  );
}
