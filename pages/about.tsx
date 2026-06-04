import Hero from "@amitkk/basic/static/Hero";
import SplitPanel from "@amitkk/basic/static/SplitPanel";
import ValuesGrid from "@amitkk/basic/static/ValuesGrid";
import Timeline from "@amitkk/basic/static/Timeline";
import CTABanner from "@amitkk/basic/static/CTABanner";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";

const values = [
  { title: "Co-Design Partner", desc: "We sit alongside your team to design the Data, IT and AI framework together — not hand over a blueprint and disappear. The outcome is co-owned, so it actually gets adopted." },
  { title: "Domain Expertise Across Industries", desc: "Deep knowledge across finance, fund management, manufacturing, retail and 10+ other sectors. We bring practitioners who've worked inside these industries, not consultants who've read about them." },
  { title: "Business Outcome Focus", desc: "Finance and business acumen to define ROI before the first line of code is written — and track it after go-live. Every technology decision is made through a business-outcome lens." },
  { title: "Platform Agnostic", desc: "No vendor bias. We recommend what is genuinely right for your context — Zoho, AWS, Azure, GCP, Anthropic, OpenAI or on-prem — not what we are paid to push." },
  { title: "Full Stack AI & Cloud", desc: "AWS · Azure · GCP · Anthropic · OpenAI · On-Prem — we cover the full spectrum of modern AI and cloud platforms so you are never constrained by our capabilities." },
];

const milestones = [
  { year: "Origin", title: "Finance expertise meets modern technology", desc: "Savitron.ai was founded by finance and technology experts with 15+ years of experience across Goldman Sachs, Macquarie, Samsung, KPMG, Vedanta, Jindal, Minda and Mitsubishi." },
  { year: "Practice", title: "Consulting + tech, under one roof", desc: "We built a unified practice across business consulting, fund management, HR, process digitisation and offshore consulting — supported by in-house technology products." },
  { year: "Products", title: "Skimaa, HostOps, eTCR, Zoho", desc: "Every product was born inside a client engagement — solving the same problem we kept seeing again and again." },
  { year: "Today", title: "30+ years combined experience", desc: "We partner with founders, SMEs and growing enterprises across India, the US, the UK and the Middle East." },
];

export default function AboutUs() {
  return (
    <>
      <Hero
        tag="About Savitron.ai"
        title="AI and Business"
        titleAccent="Performance Accelerator."
        tagline="We partner with enterprises to design, build and scale AI strategies that deliver measurable business outcomes — not just technology deployments."
        variant="dark"
        backgroundVideo="/video/ABOUT%20US.mp4"
        ctas={[
          { label: "Our Team", href: "/our-team" },
          { label: "Engage Us", href: "/contact-us", variant: "outline" },
        ]}
      />

      <SplitPanel
        tag="Who we are"
        title="About"
        titleAccent="Savitron.ai"
        side="left"
        body={
          <>
            <p>Savitron.ai is an AI and Business Performance Accelerator. We help enterprises discover, adopt and scale AI in a way that is deliberate, phased and compounding — not rushed, not injected.</p>
            <p>Our team combines 30+ years of finance and domain expertise with full-stack AI and cloud engineering. We close the gap between what businesses need and what technology can deliver — by co-designing solutions with our clients, not for them.</p>
            <p>We are platform-agnostic and outcome-obsessed. Every engagement starts with identifying the top ROI problems, and every deliverable is measured against business performance — not just go-live dates.</p>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-5">
          <ScrollReveal delay={120}>
            <div className="bg-navbar text-page rounded-2xl p-6 md:p-8 border border-gold/30 bg-dark-grain">
              <p className="section-tag-hero">Our Mission</p>
              <p className="text-base md:text-lg leading-relaxed text-page/85 mt-2">Accelerate business performance through AI — helping enterprises discover the right use cases, adopt them with measurable ROI, and scale them into a lasting competitive advantage.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border">
              <p className="section-tag">Our Vision</p>
              <p className="text-base md:text-lg leading-relaxed text-ink-muted mt-2">Enterprise AI transformation must be grown, not injected — deliberate, phased and compounding. Like evolution.</p>
            </div>
          </ScrollReveal>
        </div>
      </SplitPanel>

      <ValuesGrid tag="What sets us apart" title="5 things that make" titleAccent="us different" items={values} columns={4} />

      <Timeline tag="Our story" title="The Savitron.ai" titleAccent="journey" events={milestones} />

      <CTABanner
        tag="Let's talk"
        title="Want to work"
        titleAccent="with us?"
        body="Reach out — you'll talk to the people whose names are on the door."
        primaryCta={{ label: "Engage Us", href: "/contact-us" }}
        secondaryCta={{ label: "Meet the team", href: "/our-team" }}
      />
    </>
  );
}
