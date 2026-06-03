import Link from "next/link";
import SectionTag from "@amitkk/basic/static/SectionTag";

export default function FourOFour() {
  return (
    <section className="relative bg-navbar text-page bg-dark-grain min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gold/5 blur-3xl" />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <SectionTag hero>Page not found</SectionTag>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold leading-tight">404</h1>
        <div className="divider-gold" />
        <p className="font-heading text-xl md:text-2xl text-page mt-3">Something bad happened.</p>
        <p className="text-sm md:text-base text-page/75 mt-3">The page you&apos;re looking for doesn&apos;t exist or has moved. Try heading back home.</p>
        <div className="mt-7 flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">Back to Home<span aria-hidden>→</span></Link>
          <Link href="/contact-us" className="btn-outline">Contact Us<span aria-hidden>→</span></Link>
        </div>
      </div>
    </section>
  );
}
