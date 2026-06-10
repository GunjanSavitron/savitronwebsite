import Head from "next/head";
import Image from "next/image";

export default function GunjanCard() {
  const name = "Gunjan Bohra";
  const title = "Co-Founder · Architecture & AI";
  const company = "Savitron.ai";
  const email = "gunjan@savitron.ai";
  const phone = "+919868610005";
  const phoneDisplay = "+91 98686 10005";
  const linkedin = "https://www.linkedin.com/in/gunjan-bohra";
  const website = "https://savitron.ai/";
  const photo = "/images/static/team/Gunjan_Bohra.jpg";
  const vcfUrl = "/vcf/gunjan.vcf";
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://savitron.ai/gunjan`;

  return (
    <>
      <Head>
        <title>{name} — {company}</title>
        <meta name="description" content={`${name}, ${title} at ${company}`} />
        <meta property="og:title" content={`${name} — ${company}`} />
        <meta property="og:description" content={title} />
        <meta property="og:image" content={photo} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111] flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="bg-[#1c1c1c] rounded-3xl overflow-hidden shadow-2xl border border-white/8">
            <div className="h-2 bg-gradient-to-r from-[#B8962E] via-[#e8b84b] to-[#B8962E]" />

            <div className="flex flex-col items-center pt-8 pb-6 px-6">
              <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#B8962E]/60 shadow-xl mb-4">
                <Image src={photo} alt={name} fill className="object-cover object-top" sizes="112px" />
              </div>
              <h1 className="text-white font-bold text-xl text-center leading-tight">{name}</h1>
              <p className="text-[#B8962E] text-sm font-medium mt-1 text-center">{title}</p>
              <div className="flex items-center gap-1.5 mt-2">
                <img src="/images/logo/1.png" alt="Savitron.ai" className="h-4 w-auto opacity-80" />
                <span className="text-white/50 text-xs">{company}</span>
              </div>
            </div>

            <div className="mx-6 h-px bg-white/8" />

            <div className="px-6 py-5 space-y-3">
              <a href={`tel:${phone}`} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                <span className="w-9 h-9 rounded-lg bg-[#B8962E]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#B8962E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">Phone</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#B8962E] transition-colors">{phoneDisplay}</p>
                </div>
              </a>

              <a href={`mailto:${email}`} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                <span className="w-9 h-9 rounded-lg bg-[#B8962E]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#B8962E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">Email</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#B8962E] transition-colors">{email}</p>
                </div>
              </a>

              <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                <span className="w-9 h-9 rounded-lg bg-[#B8962E]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#B8962E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </span>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">Website</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#B8962E] transition-colors">savitron.ai</p>
                </div>
              </a>

              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                <span className="w-9 h-9 rounded-lg bg-[#B8962E]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#B8962E]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">LinkedIn</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#B8962E] transition-colors">Connect with me</p>
                </div>
              </a>
            </div>

            <div className="px-6 pb-6 space-y-3">
              <a
                href={vcfUrl}
                download
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#B8962E] to-[#e8b84b] text-[#0f0f0f] font-bold text-sm hover:opacity-90 transition-opacity shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
                Save to Contacts
              </a>

              <div className="flex flex-col items-center pt-2 pb-1">
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Scan to share</p>
                <img src={qrUrl} alt="QR Code" className="w-24 h-24 rounded-xl opacity-80" />
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-[#B8962E] via-[#e8b84b] to-[#B8962E]" />
          </div>

          <p className="text-center text-white/20 text-xs mt-4">savitron.ai · AI and Business Performance Accelerator</p>
        </div>
      </div>
    </>
  );
}

GunjanCard.noLayout = true;
