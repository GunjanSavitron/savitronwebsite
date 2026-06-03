import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Hero from "./Hero";
import SectionTag from "./SectionTag";
import ScrollReveal from "./ScrollReveal";
import CTABanner from "./CTABanner";

export interface ProductFeature {
  title: string;
  desc: string;
  iconPath?: string;
}

export interface ProductProperty {
  label: string;
  value: string;
}

export interface ProductPlan {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlight?: boolean;
  ctaLabel?: string;
}

export interface ProductReview {
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
}

export interface ProductPageProps {
  name: string;
  tagline: string;
  description: string;
  bannerImage: string;
  logoImage?: string;
  properties: ProductProperty[];
  features: ProductFeature[];
  plans: ProductPlan[];
  reviews: ProductReview[];
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-gold" : "text-ink-faint/40"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.449a1 1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.196-1.54-1.118l1.287-3.957a1 1 0 00-.362-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductPage({ name, tagline, description, bannerImage, properties, features, plans, reviews }: ProductPageProps) {
  return (
    <>
      <Hero
        tag={`Product · ${name}`}
        title={name}
        tagline={tagline}
        variant="dark"
        backgroundImage={bannerImage}
        ctas={[
          { label: "Request a Demo", href: "/contact-us" },
          { label: "View Pricing", href: "#pricing", variant: "outline" },
        ]}
      />

      <section className="bg-page bg-warm-grain py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-base md:text-lg text-ink-muted max-w-3xl mb-8">{description}</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {properties.map((p, i) => (
              <ScrollReveal key={p.label} delay={i * 60}>
                <div className="bg-surface rounded-xl border border-border p-4 md:p-5 text-center card-hover">
                  <p className="text-xs uppercase tracking-widest text-ink-faint font-semibold mb-1">{p.label}</p>
                  <p className="font-heading text-lg md:text-xl font-semibold text-gradient-gold">{p.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Capabilities</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Built for the way <span className="text-gradient-gold">you work</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted max-w-2xl mx-auto mt-3">Every capability in {name} solves a real problem we&apos;ve seen our clients hit. Here&apos;s what makes it different.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={(i % 3) * 60}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 mb-4">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.iconPath || "M5 13l4 4L19 7"} />
                    </svg>
                  </span>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-2">{f.title}</h3>
                  <p className="text-sm md:text-base text-ink-muted">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-page bg-warm-grain py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Pricing</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Simple, <span className="text-gradient-gold">transparent</span> pricing
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted">Pick the plan that fits your team today. Move up or down anytime.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 80}>
                <div
                  className={`relative rounded-2xl p-6 md:p-8 border transition-all card-hover ${
                    plan.highlight
                      ? "bg-navbar text-page border-gold shadow-xl scale-100 md:scale-105 bg-dark-grain"
                      : "bg-surface border-border"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navbar text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`font-heading text-2xl md:text-3xl font-semibold mb-1 ${plan.highlight ? "text-page" : "text-ink"}`}>{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.highlight ? "text-page/75" : "text-ink-muted"}`}>{plan.description}</p>
                  <div className="mb-6">
                    <span className={`font-heading text-3xl md:text-4xl font-bold ${plan.highlight ? "text-gradient-gold" : "text-ink"}`}>{plan.price}</span>
                    {plan.cadence && <span className={`text-sm ml-1 ${plan.highlight ? "text-page/65" : "text-ink-faint"}`}>/ {plan.cadence}</span>}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feat) => (
                      <li key={feat} className={`flex items-start gap-2 text-sm ${plan.highlight ? "text-page/90" : "text-ink"}`}>
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact-us" className={plan.highlight ? "btn-primary w-full justify-center" : "btn-outline w-full justify-center"}>
                    {plan.ctaLabel || "Get Started"}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Voices</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Reviewed by our <span className="text-gradient-gold">customers</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-ink-muted">What teams using {name} have to say.</p>
            </ScrollReveal>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="w-full pb-10"
          >
            {reviews.map((r, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-surface rounded-2xl border border-border card-hover p-6 md:p-7 h-full flex flex-col">
                  <StarRow count={r.rating} />
                  <p className="text-sm md:text-base text-ink-muted italic mb-5 flex-grow">&ldquo;{r.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-navbar text-gold border border-gold/40 flex items-center justify-center font-bold flex-shrink-0">{r.name.charAt(0)}</div>
                    <div>
                      <p className="font-semibold text-ink text-sm">{r.name}</p>
                      <p className="text-xs text-ink-faint">{r.role} • {r.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <CTABanner
        tag="Get started"
        title={`Ready to get started with`}
        titleAccent={`${name}?`}
        body={`Book a 30-minute walkthrough with our product team and see how ${name} fits your business.`}
        primaryCta={{ label: "Request a Demo", href: "/contact-us" }}
        secondaryCta={{ label: "All Products", href: "/our-products" }}
      />
    </>
  );
}
