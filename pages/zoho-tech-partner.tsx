import ProductPage from "@amitkk/basic/static/ProductPage";

export default function ZohoTechPartner() {
  return (
    <ProductPage
      name="Zoho Tech Partner"
      tagline="Implementation, customisation and ongoing support across the Zoho One suite."
      description="As an authorised Zoho partner, we help teams move onto Zoho Books, CRM, People, Inventory and the wider Zoho One ecosystem — and keep them running as the business grows."
      bannerImage="/images/static/banners/process-digitisation-web-banner.jpg"
      logoImage="/images/static/services/business-tools/zoho.jpg"
      properties={[
        { label: "Modules Supported", value: "40+" },
        { label: "Implementations", value: "120+" },
        { label: "Avg. Go-Live", value: "4 weeks" },
        { label: "Support SLA", value: "8 business hrs" },
      ]}
      features={[
        { title: "Zoho Books Setup", desc: "GST-ready chart of accounts, banking integration and automated workflows mapped to your operating model.", iconPath: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
        { title: "CRM Implementation", desc: "Sales pipelines, lead scoring, automation rules and dashboards that your team will actually use.", iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
        { title: "Custom Workflows", desc: "Deluge scripts, blueprint flows and webhooks tailored to your unique business logic.", iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
        { title: "Data Migration", desc: "Clean, mapped, validated migration from Tally, Excel, QuickBooks or any legacy stack.", iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
        { title: "Integrations", desc: "Connect Zoho with payment gateways, banks, e-commerce platforms and your bespoke tooling.", iconPath: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
        { title: "Training & Support", desc: "Role-based onboarding, refreshers and a dedicated support channel for your team.", iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
      ]}
      plans={[
        { name: "Starter", price: "₹35,000", cadence: "one-time", description: "For teams adopting one or two Zoho apps.", features: ["Single module setup (Books or CRM)", "Up to 5 users", "Basic chart of accounts", "Email-based support for 30 days", "1 training session"] },
        { name: "Growth", price: "₹95,000", cadence: "one-time", description: "Multi-module rollout with custom workflows.", features: ["Up to 4 Zoho modules", "Up to 25 users", "Custom workflows & automation", "Data migration from one source", "3 training sessions", "60 days post-go-live support"], highlight: true, ctaLabel: "Start Growth" },
        { name: "Enterprise", price: "Custom", cadence: "scope-based", description: "Full Zoho One rollout with deep customisation.", features: ["Unlimited Zoho modules", "Unlimited users", "Deluge scripting & integrations", "Multi-source data migration", "Quarterly health checks", "Priority support SLA"] },
      ]}
      reviews={[
        { name: "Karan Mehra", role: "CFO", company: "BrightLeaf Foods", rating: 5, quote: "Savitron.ai took us from a Tally + Excel chaos to a clean Zoho Books + CRM stack in five weeks. Our monthly close is now half a day instead of a week." },
        { name: "Anjali Nair", role: "Head of Operations", company: "Quill & Co.", rating: 5, quote: "The team understood our workflows before they touched a single setting. The custom blueprint they built has paid for itself in the first quarter alone." },
        { name: "Ravi Subramanian", role: "Founder", company: "ThreeDot Studios", rating: 4, quote: "Solid implementation and even better post-go-live support. They actually answer when we call — which is rarer than it should be." },
        { name: "Megha Iyer", role: "Finance Manager", company: "NorthGrid Logistics", rating: 5, quote: "We migrated four years of data with zero loss. The reconciliation phase was painless and the GST setup was bang on." },
      ]}
    />
  );
}
