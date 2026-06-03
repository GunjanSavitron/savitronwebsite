import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { serviceLinks, productLinks, aiAgentLinks } from "../utils/config";
import { Sidebar } from "./Sidebar";
import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export interface ServiceType { label: string; to: string; desc: string }
export interface NavItem { label: string; to?: string; type?: string; Icon?: React.ElementType; dropdown?: { label: string; to: string }[] }

export const navItems: NavItem[] = [
  { label: "Home", to: "/", Icon: HomeIcon },
  { label: "About", to: "/about", Icon: InfoOutlinedIcon },
  { label: "Services", type: "dropdown", Icon: BusinessCenterOutlinedIcon, dropdown: serviceLinks },
  { label: "Products", type: "dropdown", Icon: Inventory2OutlinedIcon, dropdown: productLinks },
  { label: "AI Agents", type: "dropdown", Icon: SmartToyOutlinedIcon, dropdown: aiAgentLinks },
  { label: "Team", to: "/our-team", Icon: GroupsOutlinedIcon },
  { label: "Careers", to: "/careers", Icon: WorkOutlineOutlinedIcon },
  { label: "Insights", to: "/blogs", Icon: ArticleOutlinedIcon },
  { label: "Contact", to: "/contact-us", Icon: MailOutlineOutlinedIcon },
];

const CloseIcon = () => (
  <svg className="w-6 h-6 text-page" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const NavBar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [aiAgentOpen, setAiAgentOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkBase = "text-sm font-medium text-page/85 hover:text-gold transition-colors nav-link py-2";
  const linkActive = "text-gold";

  return (
    <header className={`fixed top-0 z-50 w-full bg-navbar border-b ${scrolled ? "border-gold/30 shadow-lg" : "border-gold/15"} transition-all`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="hidden lg:flex items-center justify-between gap-6 h-20">
          <Link href="/" className="flex-shrink-0">
            <img src="/images/logo-savitronai.jpeg" alt="Savitron.ai" className="h-12 lg:h-14 w-auto" />
          </Link>
          <div className="flex items-center gap-5 xl:gap-7">
            <Link href="/" className={`${linkBase} ${pathname === "/" ? linkActive : ""}`}>Home</Link>
            <Link href="/about" className={`${linkBase} ${pathname === "/about" ? linkActive : ""}`}>About</Link>

            <div className="relative" onMouseEnter={() => setServiceOpen(true)} onMouseLeave={() => setServiceOpen(false)}>
              <button className={`${linkBase}`}>Services</button>
              {serviceOpen && (
                <div className="absolute right-0 top-full w-[560px] bg-navbar border border-gold/25 rounded-xl shadow-xl p-4 grid grid-cols-2 gap-3 text-page">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.to}
                      href={s.to}
                      className={`rounded-lg transition p-3 ${
                        s.to === "/our-services"
                          ? "col-span-2 bg-gold/10 hover:bg-gold/15 border border-gold/40"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <div className="text-sm font-semibold text-page">{s.label}</div>
                      <div className="text-xs text-page/65 mt-1">{s.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)}>
              <button className={`${linkBase}`}>Our Products</button>
              {productOpen && (
                <div className="absolute right-0 top-full w-[560px] bg-navbar border border-gold/25 rounded-xl shadow-xl p-4 grid grid-cols-2 gap-3 text-page">
                  {productLinks.map((p) => (
                    <Link
                      key={p.to}
                      href={p.to}
                      className={`rounded-lg transition p-3 ${
                        p.to === "/our-products"
                          ? "col-span-2 bg-gold/10 hover:bg-gold/15 border border-gold/40"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <div className="text-sm font-semibold text-page">{p.label}</div>
                      <div className="text-xs text-page/65 mt-1">{p.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setAiAgentOpen(true)} onMouseLeave={() => setAiAgentOpen(false)}>
              <button className={`${linkBase}`}>AI Agents</button>
              {aiAgentOpen && (
                <div className="absolute right-0 top-full w-[420px] bg-navbar border border-gold/25 rounded-xl shadow-xl p-4 grid grid-cols-1 gap-3 text-page">
                  {aiAgentLinks.map((a) => (
                    <Link
                      key={a.to}
                      href={a.to}
                      className={`rounded-lg transition p-3 ${
                        a.to === "/our-ai-agents"
                          ? "bg-gold/10 hover:bg-gold/15 border border-gold/40"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <div className="text-sm font-semibold text-page">{a.label}</div>
                      <div className="text-xs text-page/65 mt-1">{a.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/our-team" className={`${linkBase} ${pathname === "/our-team" ? linkActive : ""}`}>Our Team</Link>
            <Link href="/careers" className={`${linkBase} ${pathname === "/careers" ? linkActive : ""}`}>Careers</Link>
            <Link href="/blogs" className={`${linkBase} ${pathname === "/blogs" ? linkActive : ""}`}>Insights</Link>

            <Link
              href="/contact-us"
              className="ml-2 px-5 py-2 rounded-full bg-gold text-navbar font-semibold text-sm hover:bg-gold-light transition-colors shadow-sm"
            >
              Engage Us
            </Link>

            <IconButton onClick={() => setSidebarOpen(true)} aria-label="Open menu" style={{ color: "#B8962E", marginLeft: 4 }}>
              <MenuIcon fontSize="small" />
            </IconButton>
          </div>
        </nav>

        <div className="lg:hidden flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <img src="/images/logo-savitronai.jpeg" alt="Savitron.ai" className="h-10 w-auto" />
          </Link>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="text-gold">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden flex flex-col pb-4 border-t border-gold/15 mt-1 pt-3">
            <Link href="/" onClick={() => setOpen(false)} className="text-page/85 hover:text-gold py-2 text-sm font-medium">Home</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="text-page/85 hover:text-gold py-2 text-sm font-medium">About</Link>
            <details className="w-full">
              <summary className="text-page/85 hover:text-gold py-2 text-sm font-medium cursor-pointer">Services</summary>
              <div className="pl-3 pb-2">
                {serviceLinks.map((s) => (
                  <Link key={s.to} href={s.to} onClick={() => setOpen(false)} className="block text-page/75 hover:text-gold py-1.5 text-sm">
                    {s.label}
                  </Link>
                ))}
              </div>
            </details>
            <details className="w-full">
              <summary className="text-page/85 hover:text-gold py-2 text-sm font-medium cursor-pointer">Our Products</summary>
              <div className="pl-3 pb-2">
                {productLinks.map((p) => (
                  <Link key={p.to} href={p.to} onClick={() => setOpen(false)} className="block text-page/75 hover:text-gold py-1.5 text-sm">
                    {p.label}
                  </Link>
                ))}
              </div>
            </details>
            <details className="w-full">
              <summary className="text-page/85 hover:text-gold py-2 text-sm font-medium cursor-pointer">AI Agents</summary>
              <div className="pl-3 pb-2">
                {aiAgentLinks.map((a) => (
                  <Link key={a.to} href={a.to} onClick={() => setOpen(false)} className="block text-page/75 hover:text-gold py-1.5 text-sm">
                    {a.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/our-team" onClick={() => setOpen(false)} className="text-page/85 hover:text-gold py-2 text-sm font-medium">Our Team</Link>
            <Link href="/careers" onClick={() => setOpen(false)} className="text-page/85 hover:text-gold py-2 text-sm font-medium">Careers</Link>
            <Link href="/blogs" onClick={() => setOpen(false)} className="text-page/85 hover:text-gold py-2 text-sm font-medium">Insights</Link>
            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block self-start px-5 py-2 rounded-full bg-gold text-navbar font-semibold text-sm hover:bg-gold-light transition-colors"
            >
              Engage Us
            </Link>
          </div>
        )}
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} navItems={navItems} />
    </header>
  );
};

export default NavBar;
