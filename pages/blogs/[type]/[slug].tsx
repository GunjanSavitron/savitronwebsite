// pages > blogs > [type] > [slug].tsx — category/tag listing. CMS removed, falls through to 404.
import { GetStaticPaths, GetStaticProps } from "next";

export default function BlogListingPage() {
  return null;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async () => ({
  notFound: true,
});
