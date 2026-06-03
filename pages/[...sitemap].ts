import { GetServerSideProps } from "next";
// import blogsSitemap from "@amitkk/basic/admin/sitemaps/blogs";
// import imageSitemap from "@amitkk/basic/admin/sitemaps/image";
// import newsSitemap from "@amitkk/basic/admin/sitemaps/news";
// import pagesSitemap from "@amitkk/basic/admin/sitemaps/pages";
// import indexSitemap from "@amitkk/basic/admin/sitemaps";

function SitemapPage() { return null; }

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  // const slug = (params?.sitemap as string[]).join("/");

  // Map slugs to sitemap handlers
  // const map: Record<string, Function> = {
  //   "sitemap-blogs.xml": blogsSitemap,
  //   "sitemap-image.xml": imageSitemap,
  //   "sitemap-news.xml": newsSitemap,
  //   "sitemap-pages.xml": pagesSitemap,
  //   "sitemap.xml": indexSitemap,
  // };

  // const handler = map[slug];
  // if (handler) {
  //   return handler({ res });
  // }

  res.statusCode = 404;
  res.end("Not Found");
  return { props: {} };
};

export default SitemapPage;
