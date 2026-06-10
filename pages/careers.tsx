"use client";
import { useState, useRef } from "react";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";

const openings: {
  title: string;
  type: string;
  location: string;
  dept: string;
  desc: string;
  skills: string[];
}[] = [
  {
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Gurugram / Remote",
    dept: "Engineering",
    desc: "We're looking for a Full Stack Developer to build and scale our AI-driven products — Skimaa and HostOps. You'll work across the stack: designing APIs, building React frontends and integrating AI/ML pipelines. You'll collaborate directly with co-founders and domain experts, ship to production fast, and own features end-to-end.",
    skills: ["React / Next.js", "Node.js", "TypeScript", "REST & GraphQL APIs", "PostgreSQL / MongoDB", "AWS or GCP", "AI/LLM integration"],
  },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function CareersPage() {
  const [applyRole, setApplyRole] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function openModal(role: string) {
    setApplyRole(role);
    setFormState("idle");
    setErrorMsg("");
  }

  function closeModal() {
    setApplyRole(null);
    setFormState("idle");
    setErrorMsg("");
    formRef.current?.reset();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: data });
      const json = await res.json();
      if (json.ok) {
        setFormState("success");
        formRef.current?.reset();
      } else {
        setFormState("error");
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setFormState("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <>
      <Hero
        tag="Careers"
        title="Join the team building"
        titleAccent="Savitron.ai."
        tagline="We're an AI and Business Performance Accelerator. We hire people who care about craft, measurable outcomes and genuine client impact."
        variant="dark"
        align="left"
        size="md"
        ctas={[
          { label: "View Open Roles", href: "#openings" },
        ]}
      />

      {/* Open positions */}
      <section id="openings" className="bg-platinum py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal>
              <SectionTag>Open positions</SectionTag>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Current <span className="text-gradient-gold">openings</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <div className="divider-gold" />
            </ScrollReveal>
          </div>

          <div className="space-y-4 md:space-y-5">
            {openings.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 60}>
                <div className="bg-surface border border-border rounded-2xl p-5 md:p-7 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">{job.dept}</span>
                        <span className="text-ink-faint">·</span>
                        <span className="text-xs text-ink-muted">{job.type}</span>
                        <span className="text-ink-faint">·</span>
                        <span className="text-xs text-ink-muted">{job.location}</span>
                      </div>
                      <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-semibold text-ink mb-2">{job.title}</h3>
                      <p className="text-sm text-ink-muted leading-relaxed mb-4">{job.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span key={skill} className="text-xs px-3 py-1 rounded-full bg-gold/10 text-ink border border-gold/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => openModal(job.title)}
                        className="btn-primary whitespace-nowrap text-sm"
                      >
                        Apply Now<span aria-hidden>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* APPLICATION MODAL */}
      {applyRole && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6 bg-navbar/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-surface w-full md:max-w-xl max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="bg-navbar px-6 py-5 rounded-t-3xl md:rounded-t-3xl border-b border-gold/20 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-1">Application</p>
                <h2 className="font-heading text-xl font-bold text-page leading-tight">{applyRole}</h2>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="flex-shrink-0 w-8 h-8 rounded-full bg-page/10 hover:bg-page/20 flex items-center justify-center transition-colors mt-0.5"
              >
                <svg className="w-4 h-4 text-page" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Success state */}
            {formState === "success" ? (
              <div className="p-8 text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 border border-gold/30 mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="font-heading text-xl font-semibold text-ink mb-2">Application sent!</h3>
                <p className="text-sm text-ink-muted mb-6">We've received your application and will be in touch soon.</p>
                <button type="button" onClick={closeModal} className="btn-primary">Close</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-4">
                <input type="hidden" name="role" value={applyRole} />

                <div>
                  <label className="block text-xs font-semibold text-ink-muted uppercase tracking-widest mb-1.5">Full Name <span className="text-red-400">*</span></label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-page border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-ink text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink-muted uppercase tracking-widest mb-1.5">Email Address <span className="text-red-400">*</span></label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-page border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-ink text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink-muted uppercase tracking-widest mb-1.5">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-page border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-ink text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink-muted uppercase tracking-widest mb-1.5">Role Applied For</label>
                  <input
                    name="role_display"
                    type="text"
                    defaultValue={applyRole}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl bg-platinum border border-border text-ink-muted text-sm cursor-default"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink-muted uppercase tracking-widest mb-1.5">Cover Note</label>
                  <textarea
                    name="cover"
                    rows={4}
                    placeholder="Tell us a bit about yourself and why you'd like to join Savitron.ai…"
                    className="w-full px-4 py-3 rounded-xl bg-page border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-ink text-sm resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink-muted uppercase tracking-widest mb-1.5">Attach CV <span className="text-ink-faint font-normal normal-case">(PDF, DOC, DOCX — max 5 MB)</span></label>
                  <input
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full text-sm text-ink-muted file:mr-4 file:py-2 file:px-4 file:rounded-full file:border file:border-gold/40 file:text-xs file:font-semibold file:bg-gold/5 file:text-gold hover:file:bg-gold/10 cursor-pointer"
                  />
                </div>

                {formState === "error" && (
                  <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{errorMsg}</p>
                )}

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="btn-primary flex-1 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? "Sending…" : "Submit Application"}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-5 py-2.5 rounded-full border border-border text-sm font-medium text-ink-muted hover:border-gold hover:text-gold transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
