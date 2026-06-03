import Link from "next/link";
import SocialMedia from "@amitkk/basic/static/SocialMedia";
import Hero from "@amitkk/basic/static/Hero";
import SectionTag from "@amitkk/basic/static/SectionTag";
import { dummyBlogs } from "@amitkk/blog/static/dummyBlogs";

const pages = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Business Consulting", url: "/business-consulting" },
  { name: "Tech Consulting", url: "/tech-consulting" },
  { name: "Offshore Consulting", url: "/offshore-consulting" },
  { name: "AI Solutions", url: "/ai-solutions" },
  { name: "Fund Management", url: "/fund-management" },
  { name: "HR Management", url: "/hr-management" },
  { name: "Process Digitisation", url: "/process-digitisation" },
  { name: "Financial Services Offshore", url: "/financial-services-offshore" },
  { name: "Our Products", url: "/our-products" },
  { name: "Skimaa", url: "/skimaa" },
  { name: "Zoho Tech Partner", url: "/zoho-tech-partner" },
  { name: "HostOps", url: "/hostops" },
  { name: "eTCR", url: "/etcr" },
  { name: "AI Agents", url: "/our-ai-agents" },
  { name: "Savi-AP", url: "/savi-ap" },
  { name: "Our Team", url: "/our-team" },
  { name: "Insights", url: "/blogs" },
  { name: "Contact Us", url: "/contact-us" },
];

export default function SiteMapPage() {
  return (
    <>
      <Hero
        tag="Index"
        title="Site"
        titleAccent="map"
        tagline="Every page on Savitron.ai, in one place."
        variant="dark"
        size="sm"
      />

      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <SectionTag>Pages</SectionTag>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink leading-tight">All Pages</h2>
            <div className="divider-gold-left" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-3">
              {pages.map((i) => (
                <li key={i.url}>
                  <Link href={i.url} className="text-sm text-ink hover:text-gold transition-colors">{i.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {dummyBlogs.length > 0 && (
            <div>
              <SectionTag>Insights</SectionTag>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink leading-tight">Blogs</h2>
              <div className="divider-gold-left" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                {dummyBlogs.map((i) => (
                  <li key={i._id}>
                    <Link href={`/${i.url}`} className="text-sm text-ink hover:text-gold transition-colors">{i.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <SectionTag>Follow</SectionTag>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink leading-tight">Social Media</h2>
            <div className="divider-gold-left" />
            <div className="mt-3">
              <SocialMedia defaultIconColor="#555555" defaultHoverColor="#B8962E" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
