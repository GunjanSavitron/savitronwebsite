export default function CopyRight() {
  const year = new Date().getFullYear();

  return (
    <div className="md:flex items-center justify-between py-4 border-t border-white/5 text-xs md:text-sm text-center text-page/55">
      <p>© {year} Savitron.ai &middot; All Rights Reserved</p>
      <p>
        Designed &amp; Developed by{" "}
        <a
          href="https://www.surionlabs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold-light font-medium transition-colors"
        >
          Surion Labs
        </a>
      </p>
    </div>
  );
}
