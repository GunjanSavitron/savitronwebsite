import { dummyBlogs, DummyBlog } from "@amitkk/blog/static/dummyBlogs";
import Link from "next/link";

import Hero from "@amitkk/basic/static/Hero";
import CTABanner from "@amitkk/basic/static/CTABanner";
import ScrollReveal from "@amitkk/basic/static/ScrollReveal";

interface BlogShape {
  _id: string;
  name: string;
  url: string;
  media_id?: { path: string; alt?: string } | null;
  author_id?: { _id: string; name: string };
  category: { _id: string | number; name: string }[];
  content: string;
  createdAt?: string;
  excerpt?: string;
  readTime?: string;
}

function dummyToBlogShape(d: DummyBlog): BlogShape {
  return {
    _id: d._id,
    name: d.name,
    url: d.url,
    media_id: { path: d.cover, alt: d.name },
    author_id: { _id: "savitron-ai-team", name: d.author },
    category: d.category,
    content: d.content,
    createdAt: d.createdAt,
    excerpt: d.excerpt,
    readTime: d.readTime,
  };
}

const blogs: BlogShape[] = dummyBlogs.map(dummyToBlogShape);

function stripHtml(html: string = "") {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function formatDate(d: Date | string) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function getMediaUrl(media: any): string | null {
  if (!media) return null;
  const path = typeof media === "string" ? media : media?.path;
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return path.startsWith("/") ? path : `/${path}`;
}

function BlogCard({ blog, featured = false }: { blog: BlogShape; featured?: boolean }) {
  const img = getMediaUrl(blog.media_id);
  const provided = (blog as any).excerpt as string | undefined;
  const excerpt = provided && provided.length > 0
    ? provided
    : stripHtml(blog.content).slice(0, featured ? 220 : 140) + (stripHtml(blog.content).length > (featured ? 220 : 140) ? "…" : "");
  const cats = blog.category || [];
  const readTime = (blog as any).readTime as string | undefined;

  return (
    <Link
      href={`/${blog.url}`}
      className={`group block bg-surface rounded-2xl border border-border overflow-hidden shadow-sm card-hover ${featured ? "md:flex" : ""}`}
    >
      <div className={`relative overflow-hidden bg-platinum ${featured ? "md:w-1/2 h-64 md:h-auto" : "h-48"}`}>
        {img ? (
          <img src={img} alt={blog.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full bg-navbar bg-dark-grain flex items-center justify-center">
            <span className="font-heading text-gold text-5xl font-bold opacity-50">S</span>
          </div>
        )}
        {cats.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {cats.slice(0, 2).map((c) => (
              <span key={String(c._id)} className="text-[10px] md:text-xs font-semibold uppercase tracking-wide text-navbar bg-gold/95 backdrop-blur-sm px-2 py-1 rounded-full">{c.name}</span>
            ))}
          </div>
        )}
      </div>
      <div className={`p-5 md:p-6 ${featured ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""}`}>
        <div className="flex items-center gap-2 text-xs text-ink-faint mb-2 flex-wrap">
          {blog.createdAt && <span>{formatDate(blog.createdAt)}</span>}
          {(blog as any).author_id?.name && (
            <>
              <span>•</span>
              <span>{(blog as any).author_id.name}</span>
            </>
          )}
          {readTime && (
            <>
              <span>•</span>
              <span>{readTime}</span>
            </>
          )}
        </div>
        <h3 className={`font-heading font-semibold text-ink mb-2 group-hover:text-gold transition-colors ${featured ? "text-xl md:text-2xl lg:text-3xl" : "text-lg"} line-clamp-2`}>{blog.name}</h3>
        {excerpt && <p className={`text-sm text-ink-muted mb-4 ${featured ? "line-clamp-4" : "line-clamp-3"}`}>{excerpt}</p>}
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:gap-2 transition-all">
          Read More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </span>
      </div>
    </Link>
  );
}

const featured = blogs[0];
const rest = blogs.slice(1);

export default function BlogPage() {
  return (
    <>
      <Hero
        tag="Insights"
        title="Perspectives that"
        titleAccent="compound."
        tagline="Perspectives on business growth, finance, technology and the path to operational excellence — straight from the Savitron.ai team."
        variant="dark"
        align="center"
        size="sm"
      />

      <section className="bg-page bg-warm-grain py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featured && (
            <ScrollReveal>
              <div className="mb-10 md:mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-8 h-px bg-gold" />
                  <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gold">Featured</span>
                </div>
                <BlogCard blog={featured} featured />
              </div>
            </ScrollReveal>
          )}

          {rest.length > 0 && (
            <>
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-8 h-px bg-gold" />
                  <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gold">Latest Insights</span>
                  <span className="text-xs md:text-sm text-ink-faint">({rest.length})</span>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {rest.map((b, i) => (
                  <ScrollReveal key={String(b._id)} delay={(i % 3) * 60}>
                    <BlogCard blog={b} />
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CTABanner
        tag="Let's talk"
        title="Have a topic you'd like us to"
        titleAccent="cover?"
        body="We love hearing from our readers. Drop us a note with what you'd like to read about next."
        primaryCta={{ label: "Get in Touch", href: "/contact-us" }}
      />
    </>
  );
}
