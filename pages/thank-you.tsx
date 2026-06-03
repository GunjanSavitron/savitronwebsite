import Link from "next/link";
import SectionTag from "@amitkk/basic/static/SectionTag";

export default function ThankYou() {
  return (
    <section className="relative bg-navbar text-page bg-dark-grain min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gold/5 blur-3xl" />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <SectionTag hero>Submission received</SectionTag>
        <h1 className="font-heading text-4xl md:text-6xl font-semibold leading-tight">
          Thank you for <span className="text-gradient-gold">connecting</span> with us
        </h1>
        <div className="divider-gold" />
        <p className="text-sm md:text-base text-page/80 mt-3">We&apos;ve received your message. A member of our team will be in touch shortly — usually within one business day.</p>
        <div className="mt-7 flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">Back to Home<span aria-hidden>→</span></Link>
          <Link href="/blogs" className="btn-outline">Read Our Insights<span aria-hidden>→</span></Link>
        </div>
      </div>
    </section>
  );
}
