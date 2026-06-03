// pages/search.tsx — search disabled (no DB). Page kept so old links don't 500.
import Link from "next/link";
import Hero from "@amitkk/basic/static/Hero";

export default function Search() {
  return (
    <>
      <Hero
        tag="Search"
        title="Search is currently"
        titleAccent="unavailable"
        tagline="Try the navigation menu, the sitemap or our insights archive."
        variant="dark"
        size="sm"
      />
      <section className="bg-page bg-warm-grain py-14 md:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="btn-primary">Back to Home<span aria-hidden>→</span></Link>
            <Link href="/sitemap" className="btn-outline">View Sitemap<span aria-hidden>→</span></Link>
            <Link href="/blogs" className="btn-outline">Read Insights<span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
