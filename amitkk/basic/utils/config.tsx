import { LinkedIn, YouTube, WhatsApp, Email, } from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";

export const socialLinks: {
    icon: SvgIconComponent;
    url: string;
    label: string;
    }[] = [
        { icon: LinkedIn, url: "https://in.linkedin.com/company/savitur-solutions-llp", label: "LinkedIn", },
        { icon: YouTube, url: "https://www.youtube.com/channel/UCMPAuEbjakb4KHiQ4cmXNQA", label: "YouTube", },
        { icon: WhatsApp, url: "https://wa.me/919916600370?text=Hi%2C%20I%20got%20your%20number%20from%20the%20Savitron.ai%20website.%20I%27d%20like%20to%20know%20more.", label: "WhatsApp", },
        { icon: Email, url: "mailto:team@savitursolutions.com", label: "Email", },
    ];

const amitkk: Record<string, any> = {};

export default amitkk;

export const config = (key?: string, defaultValue?: any) => {
  if (!key) return amitkk;
  return key.split(".").reduce((o: any, k) => o?.[k], amitkk) ?? defaultValue;
};

export const modules = ["Blog","Page"];

export const serviceLinks = [
  { label: "AI Solutions", to: "/ai-solutions", desc: "Standalone AI agents and data modelling — invoice processing, reconciliation, intelligent automation" },
];

export const solutionLinks = [
  { label: "Our Solutions", to: "/our-solutions", desc: "Domain-specific AI and technology solutions for Finance, Hospitality and General Trade" },
  { label: "Finance Solutions", to: "/our-solutions", desc: "AI-led automation for accounts payable, reconciliation, compliance and reporting" },
  { label: "Hospitality Solutions", to: "/our-solutions", desc: "Revenue optimisation, guest experience and operational intelligence for hospitality" },
  { label: "General Trade Solutions", to: "/our-solutions", desc: "Inventory, distribution, collections and field-force automation for trade businesses" },
  { label: "Domain Consultants", to: "/our-solutions", desc: "Finance domain experts — Vivek Sharma and Hena Agrawal — available for your project" },
];

export const productLinks = [
  { label: "All Products", to: "/our-products", desc: "Explore the full Savitron.ai product portfolio in one place" },
  { label: "Skimaa", to: "/skimaa", desc: "Automated reconciliation and audit for finance teams" },
  { label: "Zoho Tech Partner", to: "/zoho-tech-partner", desc: "Implementation and customisation of the Zoho suite" },
  { label: "HostOps", to: "/hostops", desc: "Managed hosting and infrastructure operations" },
  { label: "eTCR", to: "/etcr", desc: "Service operations and collection reconciliation for pan-India service networks" },
];

export const aiAgentLinks = [
  { label: "All AI Agents", to: "/our-ai-agents", desc: "Explore Savitron.ai's AI agents built for finance and operations" },
  { label: "Savi-AP", to: "/savi-ap", desc: "AI Accounts Payable agent — invoice to payment, fully automated" },
];

  export const typeOptions = [ "Tradename", "Source", "Promoter", "Zone", "Code", "Stock", "Region", "Series", "Model", "Network", "Ram", "Storage", "Size", "Color" ];