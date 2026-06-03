import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    externalDir: true,
  },

  /**
   * 🚫 Skip lint & type errors during CI/build
   */
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  /**
   * 🔁 Storage rewrite (remote CDN / shared storage)
   */
  async rewrites() {
    return [
      {
        source: "/storage/:path*",
        destination: "https://www.demo303.amitkkdev.com/storage/:path*",
      },
    ];
  },

  /**
   * ↪️ Permanent redirects — old product URLs to new
   */
  async redirects() {
    return [
      {
        source: "/calltech",
        destination: "/etcr",
        permanent: true,
      },
    ];
  },

  /**
   * 🖼️ Image config (LOW MEMORY SAFE)
   */
  images: {
    unoptimized: true, // 🔥 BIG memory saver on small servers
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.demo303.amitkkdev.com",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
