// pages/[slug].tsx — catch-all for unknown slugs. CMS removed; falls through to 404.
import { GetStaticPaths, GetStaticProps } from "next";

export default function DynamicSlug() {
  return null;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async () => ({
  notFound: true,
});
