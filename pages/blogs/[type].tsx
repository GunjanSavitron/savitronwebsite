import { dummyBlogs } from "@amitkk/blog/static/dummyBlogs";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

interface BlogPostProps {
  blog: (typeof dummyBlogs)[number];
  related: typeof dummyBlogs;
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPost({ blog, related }: BlogPostProps) {
  return (
    <>
      <article className="bg-page">
        <section className="relative w-full h-[280px] md:h-[420px] lg:h-[480px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${blog.cover}')` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-navbar/30 via-navbar/40 to-navbar/80" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-end pb-8 md:pb-12">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-3">
                {blog.category.map((c) => (
                  <span key={c._id} className="text-xs font-semibold uppercase tracking-widest text-navbar bg-gold px-3 py-1 rounded-full">{c.name}</span>
                ))}
              </div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-page mb-3 leading-tight">{blog.name}</h1>
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-page/85">
                <span>{blog.author}</span>
                <span>•</span>
                <span>{formatDate(blog.createdAt)}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 lg:col-span-8">
              <div className="text-base md:text-lg text-ink-muted leading-relaxed mb-6 italic border-l-4 border-gold pl-4">{blog.excerpt}</div>
              <div className="blog-content text-ink" dangerouslySetInnerHTML={{ __html: blog.content }} />

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-xs uppercase tracking-widest font-semibold text-ink-faint mb-3">Tagged in</p>
                <div className="flex flex-wrap gap-2">
                  {blog.category.map((c) => (
                    <span key={c._id} className="text-sm bg-gold/10 text-gold border border-gold/30 font-medium px-3 py-1 rounded-full">{c.name}</span>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-platinum rounded-2xl p-6 md:p-8 border border-border">
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-ink mb-2">Want to discuss this further?</h3>
                <p className="text-sm md:text-base text-ink-muted mb-4">Our team helps founders and finance leaders apply ideas like these to real businesses. Reach out for a conversation.</p>
                <Link href="/contact-us" className="btn-primary">
                  Get in touch<span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-surface rounded-2xl p-5 md:p-6 border border-border">
                  <h3 className="font-heading text-lg font-semibold text-ink mb-4">About the author</h3>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-navbar text-gold border border-gold/40 flex items-center justify-center font-bold flex-shrink-0">S</div>
                    <div>
                      <p className="font-medium text-ink">{blog.author}</p>
                      <p className="text-sm text-ink-muted mt-1">Insights from Savitron.ai — a finance-domain technology firm helping businesses grow with clarity.</p>
                    </div>
                  </div>
                </div>

                {related.length > 0 && (
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-ink mb-4">Related reads</h3>
                    <div className="space-y-3">
                      {related.map((r) => (
                        <Link key={r._id} href={`/${r.url}`} className="group flex gap-3 bg-surface border border-border rounded-xl p-3 hover:border-gold transition-all">
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-platinum">
                            <img src={r.cover} alt={r.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-ink group-hover:text-gold transition-colors line-clamp-2">{r.name}</p>
                            <p className="text-xs text-ink-faint mt-1">{r.readTime}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-navbar bg-dark-grain text-page rounded-2xl p-5 md:p-6 border border-gold/30">
                  <h3 className="font-heading text-lg font-semibold mb-2">Subscribe to our insights</h3>
                  <p className="text-sm text-page/80 mb-4">Get our latest perspectives on finance, audit and digitisation in your inbox.</p>
                  <Link href="/contact-us" className="btn-outline">Stay updated<span aria-hidden>→</span></Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <style jsx global>{`
        .blog-content h2 { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 600; color: #1C1C1C; margin-top: 2rem; margin-bottom: 1rem; }
        @media (min-width: 768px) { .blog-content h2 { font-size: 1.875rem; } }
        .blog-content h3 { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 600; color: #1C1C1C; margin-top: 1.5rem; margin-bottom: 0.75rem; }
        .blog-content p { margin-bottom: 1rem; line-height: 1.75; color: #3A3A3A; }
        .blog-content ul, .blog-content ol { margin-bottom: 1rem; padding-left: 1.5rem; line-height: 1.75; color: #3A3A3A; }
        .blog-content ul { list-style-type: disc; }
        .blog-content ol { list-style-type: decimal; }
        .blog-content li { margin-bottom: 0.5rem; }
        .blog-content strong { color: #1C1C1C; font-weight: 600; }
        .blog-content em { color: #555555; }
      `}</style>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dummyBlogs.map((b) => {
    // url format: "blogs/<slug>" — extract slug
    const slug = b.url.replace(/^blogs\//, "");
    return { params: { type: slug } };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const slug = params?.type as string;
  const fullUrl = `blogs/${slug}`;
  const blog = dummyBlogs.find((b) => b.url === fullUrl);
  if (!blog) return { notFound: true };
  const related = dummyBlogs.filter((b) => b._id !== blog._id).slice(0, 3);
  return { props: { blog, related } };
};
