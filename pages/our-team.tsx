import { useMemo, useState } from "react";
import Image from "next/image";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import CTABanner from "@amitkk/basic/static/CTABanner";
import ValuesGrid from "@amitkk/basic/static/ValuesGrid";

type Member = {
  name: string;
  title: string;
  group: "Leadership" | "Finance" | "Consulting";
  experience: string;
  bio: string;
  photo: string;
  phone?: string;
  email?: string;
  linkedin?: string;
};

const team: Member[] = [
  {
    name: "Vivek Sharma",
    title: "Founder · Business & Growth",
    group: "Leadership",
    experience: "15+ years",
    bio: "A business expert with 15+ years of experience across commercials, strategic finance, FP&A and process optimisation — driving efficiency for a diverse portfolio of clients. Previously with Samsung, Jindal, Minda and Mitsubishi.",
    photo: "/images/static/team/vivek-sharma.jpg",
    phone: "+917838136381",
    email: "s.vivek@savitursolutions.com",
    linkedin: "https://www.linkedin.com/in/vivek-sharma-25704867/",
  },
  {
    name: "Hena Agrawal",
    title: "Co-Founder · Financial Intelligence",
    group: "Leadership",
    experience: "15+ years",
    bio: "A visionary leader with over 15 years of experience in private equity fund management, financial accounting & reporting, strategic finance and business advisory — helping companies achieve exponential growth. Previously with Macquarie, Goldman Sachs, Vedanta and KPMG.",
    photo: "/images/static/team/hena-agrawal.jpg",
    phone: "+919916600370",
    email: "hena.agrawal@savitursolutions.com",
    linkedin: "https://www.linkedin.com/in/hena-agrawal-211aa056",
  },
  {
    name: "Gunjan Bohra",
    title: "Co-Founder · Architecture & AI",
    group: "Leadership",
    experience: "21+ years",
    bio: "21+ years of experience in Enterprise Architecture and AI-driven innovations, delivering IT products including CRM in Healthcare, Aviation and Shipping. Previously with NFS International and TS Infotech.",
    photo: "/images/static/team/Gunjan_Bohra.jpg",
  },
  {
    name: "Hemant Pandey",
    title: "Co-Founder · AI Transformation",
    group: "Leadership",
    experience: "25+ years",
    bio: "25+ years of experience across IT and telecom, specialising in delivering business outcomes through AI-led transformation and consulting. Previously with Amazon, Capgemini, Nokia, DevRev.AI and Daewoo Telecom.",
    photo: "/images/static/team/Hemand_Pandey.jpeg",
  },
  
];

const groups = ["All", "Leadership", "Finance", "Consulting"] as const;

const culture = [
  { title: "Senior, hands-on", desc: "Co-founders stay on every engagement — no junior hand-off after the pitch." },
  { title: "Outcome ownership", desc: "We don't deliver slide decks. We deliver clean books, defensible MIS and audit-ready closes." },
  { title: "Long-term partnership", desc: "Most of our clients stay with us for years. We grow as you grow — that's the model." },
];

export default function OurTeamPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<(typeof groups)[number]>("All");
  const [activeName, setActiveName] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return team.filter((m) => {
      if (group !== "All" && m.group !== group) return false;
      if (!q) return true;
      return m.name.toLowerCase().includes(q) || m.title.toLowerCase().includes(q) || m.bio.toLowerCase().includes(q);
    });
  }, [query, group]);

  const active = activeName ? team.find((m) => m.name === activeName) : null;

  return (
    <>
      <Hero
        tag="Our Team"
        title="The people behind"
        titleAccent="Savitron.ai"
        tagline="Over 30 years of combined experience across Goldman Sachs, Macquarie, Samsung, KPMG, Vedanta, Jindal, Minda and Mitsubishi — applied with founder-grade ownership for every engagement."
        variant="dark"
        backgroundImage="/images/static/banners/about-us-web-banner.jpg"
        stats={[
          { value: "30+", label: "Years combined experience" },
          { value: "2", label: "Co-founders, hands-on" },
          { value: "8+", label: "Global firms in our DNA" },
          { value: "1", label: "Shared mission" },
        ]}
      />

      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-surface rounded-2xl shadow-sm border border-border p-5 md:p-6 mb-8 md:mb-10">
              <div className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-faint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by name, role or function…"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-page border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-ink text-sm"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {groups.map((g) => {
                    const isActive = g === group;
                    return (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGroup(g)}
                        className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors border ${
                          isActive
                            ? "bg-navbar text-page border-gold"
                            : "bg-page text-ink-muted border-border hover:border-gold hover:text-gold"
                        }`}
                      >
                        {g}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-ink-faint">
                <span>
                  Showing <span className="font-semibold text-ink">{filtered.length}</span> of {team.length} leaders
                </span>
                {(query || group !== "All") && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setGroup("All");
                    }}
                    className="text-gold hover:underline font-medium"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>

          {filtered.length === 0 ? (
            <div className="bg-surface rounded-2xl border border-dashed border-border p-14 text-center">
              <p className="font-heading text-xl text-ink mb-2 font-semibold">No matching leaders</p>
              <p className="text-ink-muted">Try clearing filters or searching by a different term.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filtered.map((m, i) => (
                <ScrollReveal key={m.name} delay={i * 80}>
                  <button
                    type="button"
                    onClick={() => setActiveName(m.name)}
                    className="group w-full text-left card-hover bg-surface rounded-2xl overflow-hidden border border-border shadow-sm"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-platinum">
                      <Image
                        src={m.photo}
                        alt={`${m.name} — ${m.title}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navbar/80 via-navbar/15 to-transparent" />
                      <span className="absolute top-3 left-3 bg-gold text-navbar text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow">{m.group}</span>
                      <div className="absolute inset-x-0 bottom-0 p-4 text-page">
                        <p className="font-heading text-lg font-bold leading-tight">{m.name}</p>
                        <p className="text-xs opacity-90 mt-0.5">{m.experience} experience</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-xs uppercase tracking-widest text-gold mb-1">{m.group}</p>
                      <p className="text-sm font-semibold text-ink">{m.title}</p>
                      <p className="mt-3 text-xs text-ink-muted line-clamp-3">{m.bio}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all">
                        Read profile
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <ValuesGrid tag="How we work" title="Experience with" titleAccent="conviction" items={culture} columns={3} />

      <CTABanner
        tag="Let's talk"
        title="Want to work"
        titleAccent="with us?"
        body="Reach out — you'll talk to the people whose names are on the door."
        primaryCta={{ label: "Engage Us", href: "/contact-us" }}
      />

      {active && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6 bg-navbar/70 backdrop-blur-sm" onClick={() => setActiveName(null)}>
          <div className="bg-surface w-full md:max-w-3xl max-h-[90vh] overflow-y-auto rounded-t-3xl md:rounded-3xl shadow-2xl border border-border" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <Image src={active.photo} alt={`${active.name} — ${active.title}`} fill sizes="(max-width: 768px) 100vw, 700px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navbar/85 via-navbar/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-page">
                  <span className="inline-block bg-gold text-navbar text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">{active.group}</span>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold leading-tight">{active.name}</h2>
                  <p className="text-sm md:text-base mt-1 opacity-95">{active.title}</p>
                </div>
              </div>
              <button type="button" onClick={() => setActiveName(null)} aria-label="Close" className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navbar/70 text-page hover:bg-navbar flex items-center justify-center backdrop-blur-sm transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold text-xs px-3 py-1.5 rounded-full border border-gold/30">
                  <span className="font-semibold">{active.experience}</span> in industry
                </span>
                <span className="inline-flex items-center gap-1.5 bg-platinum border border-border text-ink-muted text-xs px-3 py-1.5 rounded-full">{active.group}</span>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-ink mb-2">About</h4>
                <p className="text-ink-muted leading-relaxed">{active.bio}</p>
              </div>
              {(active.phone || active.email || active.linkedin) && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-ink-faint mb-3">Connect</h4>
                  <div className="flex flex-wrap gap-3">
                    {active.phone && (
                      <a href={`tel:${active.phone}`} className="inline-flex items-center gap-2 text-sm font-medium text-ink bg-platinum border border-border rounded-full px-4 py-2 hover:border-gold hover:text-gold transition-colors">
                        Call {active.phone}
                      </a>
                    )}
                    {active.email && (
                      <a href={`mailto:${active.email}`} className="inline-flex items-center gap-2 text-sm font-medium text-ink bg-platinum border border-border rounded-full px-4 py-2 hover:border-gold hover:text-gold transition-colors">
                        Email
                      </a>
                    )}
                    {active.linkedin && (
                      <a href={active.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-ink bg-platinum border border-border rounded-full px-4 py-2 hover:border-gold hover:text-gold transition-colors">
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
