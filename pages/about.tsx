import Hero from "@amitkk/basic/static/Hero";
import SplitPanel from "@amitkk/basic/static/SplitPanel";
import ValuesGrid from "@amitkk/basic/static/ValuesGrid";
import Timeline from "@amitkk/basic/static/Timeline";
import CTABanner from "@amitkk/basic/static/CTABanner";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";

const values = [
  { title: "Strategic Vision", desc: "We help you see beyond short-term constraints to identify transformative opportunities. By combining market intelligence with future-focused thinking, we help you anticipate trends, mitigate risks and position for sustained success." },
  { title: "Proven Methodologies", desc: "Time-tested frameworks and data-driven approaches deliver consistent, measurable outcomes — from streamlining operations to market entry strategies." },
  { title: "Collaborative Partnership", desc: "We act as an extension of your leadership team, building strong relationships rooted in trust, transparency and shared objectives." },
  { title: "Outcome Ownership", desc: "We don't deliver slide decks. We stay on the hook for outcomes — from setup to closes to audit support." },
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
        title="A finance-domain technology firm,"
        titleAccent="built for ambitious operators."
        tagline="Deep finance expertise, modern engineering. We build the systems and run the operations that let ambitious businesses scale."
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
            <p>At Savitron.ai, we pride ourselves on our team of professionals who bring over 30 years of invaluable corporate experience to the table. Each member is a seasoned expert in their respective field, with a proven track record of navigating the complexities of the corporate world.</p>
            <p>We are a technology firm with deep roots in finance — combining 30+ years of domain expertise with modern AI, automation and platform engineering to help businesses run faster, raise smarter and scale without breaking.</p>
            <p>Our vision is simple yet impactful — to empower businesses to not just adapt to change, but to lead it.</p>
            <p>We don&apos;t believe in one-size-fits-all solutions. We develop customised strategies that align with your organisation&apos;s vision, culture and goals, ensuring results that are both impactful and sustainable.</p>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-5">
          <ScrollReveal delay={120}>
            <div className="bg-navbar text-page rounded-2xl p-6 md:p-8 border border-gold/30 bg-dark-grain">
              <p className="section-tag-hero">Our Mission</p>
              <p className="text-base md:text-lg leading-relaxed text-page/85 mt-2">Empower businesses to unlock their full potential through strategic innovation, operational excellence and sustainable growth.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border">
              <p className="section-tag">Our Vision</p>
              <p className="text-base md:text-lg leading-relaxed text-ink-muted mt-2">To empower businesses to not just adapt to change, but to lead it.</p>
            </div>
          </ScrollReveal>
        </div>
      </SplitPanel>

      <ValuesGrid tag="How we work" title="Experience with" titleAccent="conviction" items={values} columns={4} />

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
