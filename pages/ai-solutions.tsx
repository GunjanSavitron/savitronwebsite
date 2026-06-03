import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";
import StickyFilterNav from "@amitkk/basic/static/StickyFilterNav";
import CTABanner from "@amitkk/basic/static/CTABanner";
import StatsStrip from "@amitkk/basic/static/StatsStrip";

const aiCapabilities = [
  {
    id: "genai",
    title: "Generative AI",
    tagline: "Intelligent systems that create, converse and comprehend.",
    desc: "We design and build generative AI solutions that unlock new value from your data and processes — from enterprise chatbots to automated content pipelines that work the way your business actually works.",
    features: [
      { name: "Enterprise AI Chatbots", detail: "Custom LLM-powered assistants integrated into your workflows and knowledge base." },
      { name: "Document Intelligence", detail: "Extract, classify and reason over unstructured documents at scale." },
      { name: "AI Copilots", detail: "Contextual AI assistants that augment your team's capabilities in real time." },
      { name: "RAG Systems", detail: "Retrieval-augmented generation for grounded, accurate enterprise AI responses." },
    ],
  },
  {
    id: "automation",
    title: "AI Automation",
    tagline: "Intelligent process automation that scales with your business.",
    desc: "We automate complex business workflows using AI — reducing manual effort, improving accuracy and freeing your teams to focus on high-value work that needs human judgement.",
    features: [
      { name: "Intelligent Workflow Automation", detail: "End-to-end process automation with AI-driven decision-making nodes." },
      { name: "Business Process Optimisation", detail: "Analyse and redesign processes using AI-driven insights and simulation." },
      { name: "Robotic Process Automation (RPA)", detail: "Automate repetitive digital tasks with AI-enhanced accuracy and adaptability." },
      { name: "Agentic AI Systems", detail: "Multi-step autonomous AI agents that complete complex tasks with minimal supervision." },
    ],
  },
  {
    id: "analytics",
    title: "Predictive Analytics",
    tagline: "Turn data into foresight, not just hindsight.",
    desc: "We build predictive analytics systems that help enterprises anticipate outcomes, manage risk and make better decisions using real-time and historical data — without months of platform projects.",
    features: [
      { name: "Demand & Sales Forecasting", detail: "Accurate forecasting models tuned to your industry and data patterns." },
      { name: "Risk Analysis & Scoring", detail: "ML-powered risk models for credit, operations, fraud and compliance." },
      { name: "Anomaly Detection", detail: "Real-time detection of unusual patterns in transactions, operations or user behaviour." },
      { name: "Data-Driven Decision Systems", detail: "Dashboards and recommendation engines that surface actionable intelligence." },
    ],
  },
  {
    id: "integration",
    title: "AI Integration",
    tagline: "Bring AI capabilities to your existing systems.",
    desc: "We help organisations embed AI into their existing technology landscape — upgrading legacy systems and enabling AI features without full rebuilds or risky rip-and-replace projects.",
    features: [
      { name: "Legacy System AI Enablement", detail: "Extend existing applications with AI capabilities through smart integration layers." },
      { name: "Model Deployment & MLOps", detail: "Production-grade ML infrastructure with monitoring, versioning and retraining pipelines." },
      { name: "AI API Integration", detail: "Connect to leading AI providers (OpenAI, Anthropic, Google) with enterprise-grade reliability." },
      { name: "Data Pipeline Engineering", detail: "Build the data foundations required for reliable, accurate AI systems." },
    ],
  },
];

const techStack = ["Python", "PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "OpenAI", "Anthropic Claude", "HuggingFace", "Apache Spark", "Kafka", "Vector Databases", "MLflow", "Kubernetes", "AWS Bedrock", "Azure OpenAI"];

const useCases = [
  { industry: "Financial Services", problem: "Manual document review across loan files, KYC packs and audit work-papers.", solution: "Document intelligence pipeline that classifies, extracts and reconciles fields with 95%+ accuracy.", impact: "70% reduction in review time" },
  { industry: "Fund Management", problem: "Hours spent answering recurring LP queries on capital calls, distributions and NAV.", solution: "RAG-powered LP assistant trained on fund documents, side letters and reporting history.", impact: "60% drop in manual responses" },
  { industry: "Retail & eCommerce", problem: "Demand spikes and stockouts driven by inaccurate forecasting on long-tail SKUs.", solution: "ML forecasting model blended with promotional and macro signals.", impact: "22% inventory cost saving" },
  { industry: "Manufacturing", problem: "Reactive maintenance pulling engineers off planned work and shrinking uptime.", solution: "Anomaly-detection model over sensor streams predicting failures 48 hrs in advance.", impact: "35% fewer unplanned outages" },
];

const processSteps = [
  { step: "01", title: "Discover", desc: "We map your workflow, identify the highest-leverage AI opportunities and rule out the noise. No solutions in search of a problem." },
  { step: "02", title: "Design", desc: "We design a solution that fits your data, your team and your tolerance for change — with a clear measurement framework from day one." },
  { step: "03", title: "Build", desc: "We build, test and iterate with your team in the room. Production-grade code, not throwaway notebooks." },
  { step: "04", title: "Deploy", desc: "We ship to production with monitoring, guardrails and clear ownership — then stay engaged to make sure the value actually lands." },
];

const filterItems = [
  { id: "capabilities", label: "Capabilities" },
  { id: "use-cases", label: "Use Cases" },
  { id: "stack", label: "Tech Stack" },
  { id: "process", label: "Our Process" },
];

export default function AISolutions() {
  return (
    <>
      <Hero
        tag="Tech Consulting · Featured"
        title="Production-grade"
        titleAccent="AI Solutions"
        tagline="Generative AI, predictive analytics and intelligent automation — engineered for outcomes that actually land in production."
        variant="dark"
        backgroundImage="/images/static/banners/business-consulting-web-banner.jpg"
        ctas={[
          { label: "Talk to AI Engineering", href: "/contact-us" },
          { label: "All Tech Services", href: "/tech-consulting", variant: "outline" },
        ]}
      />

      <StickyFilterNav items={filterItems} />

      <section id="capabilities" className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Capabilities</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Four pillars of <span className="text-gradient-gold">enterprise AI</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>

          <div className="space-y-10 md:space-y-16">
            {aiCapabilities.map((cap, idx) => (
              <div
                key={cap.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <ScrollReveal direction={idx % 2 === 0 ? "left" : "right"}>
                  <SectionTag>{`Pillar 0${idx + 1}`}</SectionTag>
                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-ink mb-2">{cap.title}</h3>
                  <p className="font-heading text-base md:text-lg text-gold italic mb-3">{cap.tagline}</p>
                  <div className="divider-gold-left" />
                  <p className="text-sm md:text-base text-ink-muted">{cap.desc}</p>
                </ScrollReveal>
                <ScrollReveal direction={idx % 2 === 0 ? "right" : "left"} delay={120}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {cap.features.map((f) => (
                      <div key={f.name} className="card-hover bg-surface rounded-xl border border-border p-4 md:p-5">
                        <p className="font-semibold text-ink text-sm md:text-base mb-1">{f.name}</p>
                        <p className="text-xs md:text-sm text-ink-muted">{f.detail}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="bg-platinum py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <ScrollReveal><SectionTag>Impact</SectionTag></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Real <span className="text-gradient-gold">use cases</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {useCases.map((u, i) => (
              <ScrollReveal key={u.industry} delay={i * 80}>
                <div className="card-hover h-full bg-surface rounded-2xl border border-border p-5 md:p-7">
                  <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">{u.industry}</p>
                  <p className="text-sm text-ink-muted mb-2"><span className="font-semibold text-ink">Problem:</span> {u.problem}</p>
                  <p className="text-sm text-ink-muted mb-3"><span className="font-semibold text-ink">Solution:</span> {u.solution}</p>
                  <p className="inline-block mt-2 text-sm font-semibold text-navbar bg-gold/15 border border-gold/30 rounded-full px-3 py-1">{u.impact}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsStrip
        tag="By the numbers"
        title="Outcomes that"
        titleAccent="compound"
        variant="dark"
        items={[
          { value: "95%+", label: "Document intelligence accuracy" },
          { value: "70%", label: "Review-time reduction" },
          { value: "35%", label: "Fewer unplanned outages" },
          { value: "22%", label: "Inventory cost saving" },
        ]}
      />

      <section id="stack" className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal><SectionTag>Tooling</SectionTag></ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink">
              AI <span className="text-gradient-gold">tech stack</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6">
              {techStack.map((s) => (
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
                Discover → Design → <span className="text-gradient-gold">Build → Deploy</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}><div className="divider-gold" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
            {processSteps.map((p, i) => (
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
        title="Have an AI idea worth"
        titleAccent="shipping?"
        body="Tell us the problem — we'll show you the shortest path to production-grade AI that earns its keep."
        primaryCta={{ label: "Talk to AI Engineering", href: "/contact-us" }}
        secondaryCta={{ label: "All Tech Services", href: "/tech-consulting" }}
      />
    </>
  );
}
