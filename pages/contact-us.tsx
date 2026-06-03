import ContactForm from "@amitkk/basic/static/ContactForm";
import SocialMedia from "@amitkk/basic/static/SocialMedia";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";

export default function Contact() {
  return (
    <>
      <Hero
        tag="Connect"
        title="Get in"
        titleAccent="touch"
        tagline="Speak with our experts to discuss business consulting, fund management, HR solutions or process digitisation. We're here to help you move forward with clarity and confidence."
        variant="dark"
        backgroundImage="/images/static/banners/contact-us-web-banner.jpg"
        size="sm"
      />

      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-7">
            <ScrollReveal direction="left">
              <div className="bg-surface rounded-2xl shadow-sm border border-border p-6 md:p-8">
                <SectionTag>Send us a message</SectionTag>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink leading-tight">
                  Share your requirement
                </h2>
                <div className="divider-gold-left" />
                <p className="text-sm md:text-base text-ink-muted mb-5">Our team will get back to you shortly.</p>
                <ContactForm handleClose={() => {}} />
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5">
            <ScrollReveal direction="right">
              <div className="bg-navbar bg-dark-grain text-page rounded-2xl border border-gold/30 p-6 md:p-8 flex flex-col gap-6">
                <div>
                  <SectionTag hero>Reach us</SectionTag>
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-page leading-tight">
                    Let&apos;s talk <span className="text-gradient-gold">business</span>
                  </h3>
                  <div className="divider-gold-left" />
                  <p className="text-sm md:text-base text-page/80">Whether you&apos;re a startup, SME or growing enterprise, our team is ready to support your business with practical, execution-focused solutions.</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white/5 border border-gold/20 rounded-xl p-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </span>
                    <div className="text-sm">
                      <p className="text-xs uppercase tracking-widest text-gold mb-0.5">Phone</p>
                      <a href="tel:+919916600370" className="hover:text-gold transition-colors">+91 99166 00370</a>
                      <span className="mx-1 text-page/50">|</span>
                      <a href="tel:+917838136381" className="hover:text-gold transition-colors">+91 78381 36381</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white/5 border border-gold/20 rounded-xl p-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </span>
                    <div className="text-sm">
                      <p className="text-xs uppercase tracking-widest text-gold mb-0.5">Email</p>
                      <a href="mailto:team@savitursolutions.com" className="hover:text-gold transition-colors">team@savitursolutions.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/5 border border-gold/20 rounded-xl p-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </span>
                    <div className="text-sm">
                      <p className="text-xs uppercase tracking-widest text-gold mb-0.5">Address</p>
                      <p className="text-page/85">1st Floor, Orchid Business Park, Sohna Road, Sector 48, Gurugram, India</p>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-gold/20 rounded-xl p-4">
                    <p className="text-xs uppercase tracking-widest text-gold mb-3">Follow</p>
                    <SocialMedia defaultIconColor="#FAFAFA" defaultHoverColor="#B8962E" />
                  </div>
                </div>

                <p className="text-xs md:text-sm text-page/65 mt-2">Our consultants work closely with teams to deliver financial clarity, regulatory confidence and scalable operational systems.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
