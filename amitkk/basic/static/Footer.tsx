import SocialMedia from "./SocialMedia";
import Link from "next/link";
import CopyRight from "./CopyRight";
import Image from "next/image";

const Footer = () => {
  const servicesCol = [
    { name: "Business Consulting", url: "/business-consulting" },
    { name: "Tech Consulting", url: "/tech-consulting" },
    { name: "Offshore Consulting", url: "/offshore-consulting" },
    { name: "AI Solutions", url: "/ai-solutions" },
  ];

  const productsCol = [
    { name: "All Products", url: "/our-products" },
    { name: "Skimaa", url: "/skimaa" },
    { name: "Zoho Tech Partner", url: "/zoho-tech-partner" },
    { name: "HostOps", url: "/hostops" },
    { name: "eTCR", url: "/etcr" },
    { name: "AI Agents", url: "/our-ai-agents" },
    { name: "Savi-AP", url: "/savi-ap" },
  ];

  const companyCol = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Our Team", url: "/our-team" },
    { name: "Careers", url: "/careers" },
    { name: "Insights", url: "/blogs" },
    { name: "Contact Us", url: "/contact-us" },
  ];

  return (
    <footer className="relative overflow-hidden bg-footer text-[#CCCCCC]">
      <div className="absolute inset-0 bg-dark-grain pointer-events-none opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 md:pb-14">
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <Link href="/">
              <img src="/images/logo-savitronai.jpeg" alt="Savitron.ai" className="h-20 w-auto mb-4 cursor-pointer" />
            </Link>
            <p className="text-sm leading-relaxed text-[#CCCCCC]/85 mb-5 max-w-sm">
              Savitron.ai is your trusted partner for strategic consulting, financial leadership, and operational excellence.
            </p>
            <SocialMedia defaultIconColor="#CCCCCC" defaultHoverColor="#B8962E" />
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {servicesCol.map((l) => (
                <li key={l.url}>
                  <Link href={l.url} className="text-sm text-[#CCCCCC]/85 hover:text-gold-light transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Products</h4>
            <ul className="space-y-2.5">
              {productsCol.map((l) => (
                <li key={l.url}>
                  <Link href={l.url} className="text-sm text-[#CCCCCC]/85 hover:text-gold-light transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyCol.map((l) => (
                <li key={l.url}>
                  <Link href={l.url} className="text-sm text-[#CCCCCC]/85 hover:text-gold-light transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2 text-[#CCCCCC]/85">
                <span className="flex-shrink-0 mt-0.5">
                  <Image src="/images/icons/contact/location-white.svg" alt="Location" width={14} height={16} />
                </span>
                <span>1st Floor, Orchid Business Park, Sohna Road, Sector 48, Gurugram, India</span>
              </p>
              <p className="flex items-center gap-2 text-[#CCCCCC]/85">
                <span className="flex-shrink-0">
                  <Image src="/images/icons/contact/mail-white.svg" alt="Email" width={14} height={16} />
                </span>
                <Link href="mailto:team@savitursolutions.com" className="hover:text-gold-light transition-colors">team@savitursolutions.com</Link>
              </p>
              <p className="flex items-center gap-2 text-[#CCCCCC]/85">
                <span className="flex-shrink-0">
                  <Image src="/images/icons/contact/phone-white.svg" alt="Phone" width={14} height={16} />
                </span>
                <Link href="tel:+919916600370" className="hover:text-gold-light transition-colors">+91 99166 00370</Link>
                <span className="mx-1 text-[#CCCCCC]/50">|</span>
                <Link href="tel:+917838136381" className="hover:text-gold-light transition-colors">+91 78381 36381</Link>
              </p>
            </div>
          </div>
        </div>
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
