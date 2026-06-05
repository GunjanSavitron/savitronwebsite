// amitkk > components > layouts > AppLayout.tsx

import React from "react";
import { ThemeProvider } from "@mui/material";
import dynamic from 'next/dynamic';
import Footer from "@amitkk/basic/static/Footer";
import Header from "@amitkk/basic/static/Header";
import theme from "@amitkk/basic/utils/theme";
const Toaster = dynamic(
  () => import('react-hot-toast').then((mod) => mod.Toaster),
  { ssr: false }
);
import Head from "next/head";

interface RootLayoutProps {
  children: React.ReactNode;
  meta?: {
    title?: string;
    description?: string;
  };
}

export default function AppLayout({ children, meta }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>{meta?.title || "Savitron.ai — AI and Business Performance Accelerator"}</title>
        <meta name="description" content={meta?.description || "Savitron.ai is an AI and Business Performance Accelerator. We partner with enterprises to design, build and scale AI strategies that deliver measurable business outcomes."} />
        <link rel="icon" href="/images/logo-savitronai.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/images/logo-savitronai.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Toaster position="top-center" />
        <Header />
        <main className="pt-20 bg-page text-ink font-body">{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
